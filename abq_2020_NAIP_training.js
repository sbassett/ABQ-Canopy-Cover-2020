//map tree canopy after training
//see README.md for a picture of the "imports" as they appear in my local script
//Following this for training http://www.openmrv.org/en/web/guest/-/modules/mrv/modules_1/training-data-collection-using-google-earth-engine

//access NAIP imagerycollection
var NAIP2020 = ee.ImageCollection('USDA/NAIP/DOQQ')
  .filterBounds(ee.Geometry.Rectangle(-106.82, 35.38, -106.325, 34.9))
  .filterDate('2020-03-01', '2020-10-31'); //this limited date range ensures only leaf-on imagery is included

var NAIP2020_tc = NAIP2020.select(['R', 'G', 'B']);

var trueColorVis = {
  min: 0.0,
  max: 255.0,
};

//diplay the NAIP imagery
Map.addLayer(NAIP2020_tc, trueColorVis, 'naip');

//merge the two feature collections to produce the training dataset
var training = Canopy.merge(NotCanopy);

//export training dataset to EarthEngine asset
Export.table.toAsset({
  collection: training,
  description: 'naip2020_canopysample_2022-02-16',
  assetId: 'naip2020_canopysample_2022-02-16'
});




