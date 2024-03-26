//script to develop a canopy cover model for Albuquerque using NAIP imagery
//Steve Bassett — The Nature Conservancy — 2021-11-24

//Intending to update the code
//  with new classifiers (see http://goo.gle/deprecated-classifiers)
//  and without fusion tables (see https://developers.google.com/earth-engine/guides/table_upload)
//  cleanup of "salt-and-pepper" classification
//  include testing/validation by using a subset of training points https://developers.google.com/earth-engine/guides/classification (https://gis.stackexchange.com/questions/348129/error-regarding-missing-feature-property-when-training-classify-image-in-earth-e)

//access NAIP imagerycollection
var NAIP2020 = ee.ImageCollection('USDA/NAIP/DOQQ')
  .filterBounds(ee.Geometry.Rectangle(-107.69, 36.252, -105.24, 34.234))
  .filterDate('2020-03-01', '2020-10-31'); //this limited date range ensures only leaf-on imagery is included

var NAIP2020_tc = NAIP2020.select(['R', 'G', 'B']);

var trueColorVis = {
  min: 0.0,
  max: 255.0,
};

//diplay the NAIP imagery
Map.addLayer(NAIP2020_tc, trueColorVis, 'naip');

//mosaic the filtered NAIP imagery in to one image
var mosaic = NAIP2020.mosaic();

//compute NDVI
var ndvi = mosaic.normalizedDifference(['N', 'R']);

//compute EVI
var evi = mosaic.expression(
  '2.5 * ((NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1))', {
    'NIR': mosaic.select('N'),
    'RED': mosaic.select('R'),
    'BLUE': mosaic.select('B')
});

//display the NDVI result using a color ramp: dark red, red, orange, yellow, lime, green, dark green
var ndviParams = {min: -1, max: 1, palette: ['8B0000','FF0000', 'FF4500', 'FFFF00', '00FF00','008000', '006400']};

// "A nice EVI palette"
var eviParams = {min: -1, max: 1, palette: ['8B0000','FF0000', 'FF4500', 'FFFF00', '00FF00','008000', '006400']};

//diplay the NDVI and EVI images in the map
Map.addLayer(ndvi, ndviParams, 'ndvi');
Map.addLayer(evi, eviParams, 'evi');

// Define a neighborhood with a kernel.
var square = ee.Kernel.square({radius: 4});

//get the NIR band
var nir = mosaic.select('N');

//get the red band
var red = mosaic.select('R');

//get the green band
var green = mosaic.select('G');

//get the blue band
var blue = mosaic.select('B');

// Compute entropy and display.
var entropyBlue = blue.entropy(square);
Map.addLayer(entropyBlue,{min: 1, max: 5, palette: ['0000CC', 'CC0000']},'entropyBlue');
             
// Compute entropy and display.
var entropyGreen = green.entropy(square);
Map.addLayer(entropyGreen,{min: 1, max: 5, palette: ['0000CC', 'CC0000']},'entropyGreen');
             
// Compute entropy and display.
var entropyRed = red.entropy(square);
Map.addLayer(entropyRed,{min: 1, max: 5, palette: ['0000CC', 'CC0000']},'entropyRed');
             
// Compute NIR entropy and display.
var entropyNIR = nir.entropy(square);
Map.addLayer(entropyNIR,{min: 1, max: 5, palette: ['0000CC', 'CC0000']},'entropyNIR');

//converts the float values to int so the entropy function can be used
var intScaleNDVI = (ndvi.multiply(100)).int();
var intScaleEVI = (evi.multiply(100)).int();
             
// Compute NDVI entropy and display.
var entropyNDVI = intScaleNDVI.entropy(square);
Map.addLayer(entropyNDVI,{min: 1, max: 5, palette: ['0000CC', 'CC0000']},'entropyNDVI');

//Computer EVI entropy and display.
var entropyEVI = intScaleEVI.entropy(square);
Map.addLayer(entropyEVI,{min: 1, max: 5, palette: ['0000CC', 'CC0000']},'entropyEVI');

//model training and classification following https://developers.google.com/earth-engine/classification

//create multi-band image from the above analysis to train the classifer with
var trainingStack = ee.Image.cat([ndvi, evi, nir, red, green, blue, entropyNIR, entropyRed, entropyGreen, entropyBlue, entropyNDVI, entropyEVI]).reproject('EPSG:26913', null, 0.6);

//load training points (imported asset from shapefile)
//var samplePoints = ee.FeatureCollection("users/bassett/NM_CanopyTrainingPoints_2021_06_22").filterBounds(ee.Geometry.Rectangle(-107, 35.5, -106, 34.5));
var samplePoints = ee.FeatureCollection("users/bassett/naip2020_canopysample_2022-02-16c").filterBounds(ee.Geometry.Rectangle(-107.69, 36.252, -105.24, 34.234));

var samplePoints = samplePoints.randomColumn(); //creates a column named 'random' and populates it with a random integer
	
var split = 0.7; //will reserve roughly 30% of points for testing
var trainingPoints = samplePoints.filter(ee.Filter.lt('random', split));
var validationPoints = samplePoints.filter(ee.Filter.gte('random', split));

// Export the FeatureCollection to a shapefile.
Export.table.toDrive({
  collection: validationPoints,
  description:'validationPoints',
  fileFormat: 'SHP'
});

//Map.addLayer(trainingPoints, {}, 'trainingPoints');

//overlay the training points on the trainingStack to create the trainingSet
var trainingSet = trainingStack.sampleRegions({
  collection: trainingPoints,
  properties: ['label']
});
//print(trainingSet.limit(20,'Class', false))

// train a CART classifier with the default parameters
var trainedClassifier = ee.Classifier.smileCart().train(trainingSet, 'label');

// Get a confusion matrix representing resubstitution accuracy. (after https://developers.google.com/earth-engine/guides/classification)
var trainAccuracy = trainedClassifier.confusionMatrix();
print('Resubstitution error matrix: ', trainAccuracy);
print('Training overall accuracy: ', trainAccuracy.accuracy());

//use the validation data to test accuracy
//overlay the validation points on the trainingStack to create the validationSet
var validationSet = trainingStack.sampleRegions({
  collection: validationPoints,
  properties: ['label']
});

// Classify the validation data.
var validated = validationSet.classify(trainedClassifier);

// Get a confusion matrix representing expected accuracy.
var testAccuracy = validated.errorMatrix('label', 'classification');
print('Validation error matrix: ', testAccuracy);
print('Validation overall accuracy: ', testAccuracy.accuracy());


// classify the trainingStack witht the classifier
var classifiedStack = (trainingStack.classify(trainedClassifier));

var canopyClassPalette = [
  'f7f1e1', //not canopy
  '27b83f' //canopy
  ];

//add classified image to map
Map.addLayer(classifiedStack, {min: 0, max: 1, palette: canopyClassPalette},'classifiedStack');

// following https://gis.stackexchange.com/questions/335707/is-there-a-post-classification-majority-analysis-feature-on-google-earth-engine
var mode = classifiedStack.focal_mode(2).reproject('EPSG:26913', null, 0.6);

// remove salt-n-peppa
//var classifiedStackSimple = classifiedStack.reduceNeighborhood({
//  reducer: ee.Reducer.mode(),
//  kernel: ee.Kernel.circle(2),
//});
//Map.addLayer(classifiedStackSimple, {min: 0, max: 1, palette: ['00FF00', 'FF0000']}, 'classifiedStackSimple');



Map.addLayer(mode, {min: 0, max: 1, palette: canopyClassPalette}, 'mode');

//set export extent (same as analysis extent)
var exportbounds = ee.Geometry.Rectangle([-107.69, 36.252, -105.24, 34.234]);

Export.image.toDrive({
  image: mode,
  description: 'MRCOG_NAIP2020_CC_v01',
  region: exportbounds,
  fileFormat: 'GeoTIFF',
  crs: 'EPSG:26913',
  scale: 0.6,
  maxPixels: 1e13
});
