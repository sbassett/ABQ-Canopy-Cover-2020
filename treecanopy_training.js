//map tree canopy after training
//Following this for training http://www.openmrv.org/en/web/guest/-/modules/mrv/modules_1/training-data-collection-using-google-earth-engine

var Canopy = /* color: #00aa2c */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-106.61728269194907, 35.09392260245379]),
            {
              "label": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61672211026496, 35.09389516979761]),
            {
              "label": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61670467590636, 35.09384140176469]),
            {
              "label": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6168012354309, 35.093828234077755]),
            {
              "label": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61682939862555, 35.09388200211936]),
            {
              "label": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61706006860084, 35.09390724016746]),
            {
              "label": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61708018516845, 35.093877612892804]),
            {
              "label": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6173054907257, 35.09386444521172]),
            {
              "label": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61733097171134, 35.09386005598423]),
            {
              "label": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61734438275641, 35.09389297518471]),
            {
              "label": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61738327478713, 35.09392150514772]),
            {
              "label": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61733097171134, 35.093932478207776]),
            {
              "label": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61743960117644, 35.09407622515792]),
            {
              "label": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6174503300125, 35.09406634942136]),
            {
              "label": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61687767838782, 35.09413877146169]),
            {
              "label": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61686963176078, 35.09411243618175]),
            {
              "label": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61685353850669, 35.09408719819714]),
            {
              "label": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61681330537147, 35.09408719819714]),
            {
              "label": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61678514217681, 35.09413547955217]),
            {
              "label": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61683208083457, 35.094149744492505]),
            {
              "label": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61655178999251, 35.09404879255342]),
            {
              "label": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61651826237983, 35.09401477611102]),
            {
              "label": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6164592537815, 35.09400270575707]),
            {
              "label": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61640695070571, 35.09399721923195]),
            {
              "label": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61643779610938, 35.09394125665475]),
            {
              "label": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61648071145362, 35.09391601861716]),
            {
              "label": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61655313109702, 35.09394893779506]),
            {
              "label": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.616550448888, 35.09400709497688]),
            {
              "label": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61651960348433, 35.093980759654414]),
            {
              "label": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61658799981421, 35.093988440791016]),
            {
              "label": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61630368565864, 35.09392150514772]),
            {
              "label": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61634123658484, 35.093932478207776]),
            {
              "label": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61638281082458, 35.09390614286119]),
            {
              "label": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61637744640655, 35.09388639134568]),
            {
              "label": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61634660100287, 35.09386444521172]),
            {
              "label": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61631173228568, 35.09388200211936]),
            {
              "label": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61632916664428, 35.09392260245379]),
            {
              "label": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61635330652541, 35.09390943477998]),
            {
              "label": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5492783067697, 35.05771429141738]),
            {
              "label": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54925819020208, 35.05774008955109]),
            {
              "label": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54930311720308, 35.05774118734384]),
            {
              "label": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54929775278505, 35.05779443027413]),
            {
              "label": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54955122153696, 35.05778894131385]),
            {
              "label": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54957938473162, 35.05779991923405]),
            {
              "label": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54962699394163, 35.057766436572834]),
            {
              "label": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54960218350824, 35.0577313072086]),
            {
              "label": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54962766449388, 35.05774612741099]),
            {
              "label": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54965515713629, 35.057707704658526]),
            {
              "label": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54966923873361, 35.05769947120922]),
            {
              "label": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54973964672025, 35.05772581824407]),
            {
              "label": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54973830561575, 35.05775106747785]),
            {
              "label": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54971885960039, 35.05772472045112]),
            {
              "label": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54966990928587, 35.05775326306302]),
            {
              "label": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54969539027151, 35.05773405169074]),
            {
              "label": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54970075468954, 35.05775490975185]),
            {
              "label": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54974836389955, 35.05767367306269]),
            {
              "label": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54975842218336, 35.05765830395023]),
            {
              "label": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5497564105266, 35.0576412881438]),
            {
              "label": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.549738976168, 35.057624272333804]),
            {
              "label": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54970544855532, 35.057620430053646]),
            {
              "label": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54964979271826, 35.05760451203388]),
            {
              "label": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54961961786684, 35.05759024070318]),
            {
              "label": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54958743135866, 35.05762097895082]),
            {
              "label": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54960821847853, 35.05765061939293]),
            {
              "label": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5496578393453, 35.05765336387776]),
            {
              "label": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54968868474897, 35.057667635197426]),
            {
              "label": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54971416573461, 35.057656108362494]),
            {
              "label": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54969606082376, 35.05770221569242]),
            {
              "label": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54972690622743, 35.057711546934584]),
            {
              "label": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54966454486784, 35.05774008955109]),
            {
              "label": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54967393259939, 35.057793881378124]),
            {
              "label": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5497215418094, 35.057798272546115]),
            {
              "label": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54974367003378, 35.057835597464475]),
            {
              "label": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54975708107885, 35.05783175519427]),
            {
              "label": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54976579825815, 35.05780211481792]),
            {
              "label": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5497738448852, 35.05778455014535]),
            {
              "label": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54975171666082, 35.0577785122883]),
            {
              "label": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54973964672025, 35.05780101702598]),
            {
              "label": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54971483628687, 35.05785590660408]),
            {
              "label": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54965448658403, 35.05783669525594]),
            {
              "label": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5496477810615, 35.057842184213015]),
            {
              "label": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54967393259939, 35.057833401881524]),
            {
              "label": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.549694049167, 35.05784657537841]),
            {
              "label": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.549694049167, 35.05783175519427]),
            {
              "label": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54958206694063, 35.05776533878042]),
            {
              "label": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54955323319372, 35.057777414496044]),
            {
              "label": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54952037613329, 35.057737893965545]),
            {
              "label": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54953848104414, 35.057747225203634]),
            {
              "label": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5495505509847, 35.05772911162283]),
            {
              "label": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54958139638838, 35.057741736240196]),
            {
              "label": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54919918160375, 35.05779717475413]),
            {
              "label": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5492159454101, 35.05777302332693]),
            {
              "label": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54925081412729, 35.057777414496044]),
            {
              "label": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54921058099207, 35.05774008955109]),
            {
              "label": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54919649939474, 35.05772252486519]),
            {
              "label": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54916498343881, 35.057747225203634]),
            {
              "label": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54917370061811, 35.057762594299355]),
            {
              "label": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54919046442446, 35.05775490975185]),
            {
              "label": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54912139754232, 35.05773350279432]),
            {
              "label": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54908317606386, 35.05773569837997]),
            {
              "label": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54905233066019, 35.05772856272638]),
            {
              "label": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54905434231695, 35.057758752025684]),
            {
              "label": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54909658710893, 35.057758752025684]),
            {
              "label": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54906775336202, 35.05779003910593]),
            {
              "label": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54906842391428, 35.05781364163221]),
            {
              "label": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54911469201978, 35.05780046813]),
            {
              "label": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54914151410993, 35.05779937033807]),
            {
              "label": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54914620797571, 35.05778070787273]),
            {
              "label": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54902282636102, 35.05777302332693]),
            {
              "label": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54900606255468, 35.05778839241779]),
            {
              "label": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54898527543482, 35.05780485929763]),
            {
              "label": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54895174782213, 35.05778015897663]),
            {
              "label": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54894571285185, 35.05774887189261]),
            {
              "label": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54897119383749, 35.05773569837997]),
            {
              "label": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54898393433031, 35.057766436572834]),
            {
              "label": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54900941531595, 35.05774667630732]),
            {
              "label": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54900539200243, 35.0577763167038]),
            {
              "label": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54897521715101, 35.05779003910593]),
            {
              "label": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5499307106429, 35.05751608320037]),
            {
              "label": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54995619162854, 35.05751772989398]),
            {
              "label": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54997496709164, 35.05749248058806]),
            {
              "label": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54995485052403, 35.05748314932086]),
            {
              "label": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54990187689599, 35.057488638301706]),
            {
              "label": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54993406340417, 35.05747491584891]),
            {
              "label": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54994143947896, 35.05751004532345]),
            {
              "label": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54993406340417, 35.05740630355039]),
            {
              "label": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54995954438981, 35.057403559057235]),
            {
              "label": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54997027322587, 35.05738105420999]),
            {
              "label": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54995283886727, 35.05736733173913]),
            {
              "label": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54992400512036, 35.05736239164906]),
            {
              "label": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54990388855275, 35.057388189893935]),
            {
              "label": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54993138119515, 35.05739203218505]),
            {
              "label": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55009767815407, 35.057403559057235]),
            {
              "label": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55013120576676, 35.05740685244899]),
            {
              "label": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55015869840916, 35.057394776678564]),
            {
              "label": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55016473337945, 35.057378858614825]),
            {
              "label": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55014729902085, 35.05736788063801]),
            {
              "label": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55010036036309, 35.05736513614359]),
            {
              "label": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55008829042252, 35.05738544540019]),
            {
              "label": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55013254687127, 35.05739422777986]),
            {
              "label": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55011846527394, 35.0573777608172]),
            {
              "label": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55010907754239, 35.057391483286324]),
            {
              "label": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55014394625958, 35.057387092096455]),
            {
              "label": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55012852355775, 35.05736623394137]),
            {
              "label": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55013522908028, 35.057477660339664]),
            {
              "label": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5501466284686, 35.05750126295622]),
            {
              "label": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5501191358262, 35.05747711144153]),
            {
              "label": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55009499594506, 35.057489187199764]),
            {
              "label": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55012382969197, 35.057517180996115]),
            {
              "label": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55012382969197, 35.057505105241994]),
            {
              "label": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55047385796841, 35.0575144365067]),
            {
              "label": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55050671502885, 35.05750345854813]),
            {
              "label": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55057242914971, 35.057600064532956]),
            {
              "label": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5505898635083, 35.05759237997016]),
            {
              "label": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55059656903084, 35.05757261966253]),
            {
              "label": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55058181688126, 35.057545174782874]),
            {
              "label": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55054963037308, 35.05752651225942]),
            {
              "label": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55052549049195, 35.057550663759535]),
            {
              "label": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55055901810464, 35.05756822848241]),
            {
              "label": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55054426595505, 35.05760226012219]),
            {
              "label": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55050135061082, 35.05758579320148]),
            {
              "label": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55049598619279, 35.05756383730205]),
            {
              "label": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55050939723786, 35.057550663759535]),
            {
              "label": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55055097147759, 35.05756822848241]),
            {
              "label": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.550533537119, 35.05759128217542]),
            {
              "label": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55057779356774, 35.057589086585885]),
            {
              "label": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55056438252267, 35.0575550549406]),
            {
              "label": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55056572362717, 35.057540783601276]),
            {
              "label": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55044904753503, 35.057282801267725]),
            {
              "label": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55047184631165, 35.057282801267725]),
            {
              "label": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55050537392434, 35.057277312273044]),
            {
              "label": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5505161027604, 35.0572586496884]),
            {
              "label": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55051342055138, 35.05724328049782]),
            {
              "label": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55048257514771, 35.05723998709945]),
            {
              "label": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55045575305756, 35.05724328049782]),
            {
              "label": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55046111747559, 35.057276214474065]),
            {
              "label": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55049062177476, 35.057278410072]),
            {
              "label": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55053831941869, 35.05720266190883]),
            {
              "label": 1,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55057318813589, 35.057190586108206]),
            {
              "label": 1,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55058525807645, 35.057163141100126]),
            {
              "label": 1,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5505745292404, 35.05714118508703]),
            {
              "label": 1,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55055575377729, 35.057124718073354]),
            {
              "label": 1,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55051015622404, 35.05711703346583]),
            {
              "label": 1,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55047796971586, 35.05711922906804]),
            {
              "label": 1,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55046053535726, 35.05714557629014]),
            {
              "label": 1,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55047796971586, 35.05718509710732]),
            {
              "label": 1,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55050881511953, 35.057181803706605]),
            {
              "label": 1,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55054234273221, 35.05719278170844]),
            {
              "label": 1,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55054904825475, 35.057174119104474]),
            {
              "label": 1,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55053697831418, 35.05715765209741]),
            {
              "label": 1,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55049808628347, 35.05715545649621]),
            {
              "label": 1,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5504860163429, 35.057174119104474]),
            {
              "label": 1,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55051954395559, 35.057160945499085]),
            {
              "label": 1,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55053831941869, 35.05712581587435]),
            {
              "label": 1,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55053831941869, 35.0571126422612]),
            {
              "label": 1,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55048869855192, 35.05711374006237]),
            {
              "label": 1,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55048065192487, 35.05715765209741]),
            {
              "label": 1,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55051149732854, 35.057154358695605]),
            {
              "label": 1,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55105062134054, 35.05728719246319]),
            {
              "label": 1,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55112169987943, 35.05730146384685]),
            {
              "label": 1,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55113645202901, 35.05731024623557]),
            {
              "label": 1,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55113242871549, 35.057344277982885]),
            {
              "label": 1,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55110024220731, 35.05736184275013]),
            {
              "label": 1,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55107073790815, 35.057364038345774]),
            {
              "label": 1,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55106805569913, 35.05734647357899]),
            {
              "label": 1,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55108414895322, 35.057339886790466]),
            {
              "label": 1,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55110962993886, 35.057342082386704]),
            {
              "label": 1,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55109487778928, 35.05731244183259]),
            {
              "label": 1,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55102379925039, 35.057347571377036]),
            {
              "label": 1,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55105196244504, 35.05735086477105]),
            {
              "label": 1,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55101575262334, 35.05732232201849]),
            {
              "label": 1,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55101709372785, 35.057283899066604]),
            {
              "label": 1,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55103184587743, 35.057283899066604]),
            {
              "label": 1,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55105598575857, 35.05713898948541]),
            {
              "label": 1,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55107744343069, 35.057143380688615]),
            {
              "label": 1,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55107207901266, 35.0571697279029]),
            {
              "label": 1,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55111231214788, 35.05716533670112]),
            {
              "label": 1,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55112572319295, 35.05716533670112]),
            {
              "label": 1,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55114181644704, 35.05719168390833]),
            {
              "label": 1,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55089102990415, 35.05688649490371]),
            {
              "label": 1,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55091382868078, 35.05688100588239]),
            {
              "label": 1,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55096076733854, 35.05686234320716]),
            {
              "label": 1,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55090846426275, 35.05684916955147]),
            {
              "label": 1,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55087761885908, 35.05683928930834]),
            {
              "label": 1,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55085482008245, 35.05686673442525]),
            {
              "label": 1,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55088566548612, 35.05687551686071]),
            {
              "label": 1,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55051820285108, 35.05707751261568]),
            {
              "label": 1,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55053831941869, 35.05707531701234]),
            {
              "label": 1,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55052624947812, 35.05705775218345]),
            {
              "label": 1,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55050881511953, 35.05695126532738]),
            {
              "label": 1,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55052356726911, 35.05695565654069]),
            {
              "label": 1,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5505410016277, 35.056938091686064]),
            {
              "label": 1,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55052356726911, 35.05693040706095]),
            {
              "label": 1,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55050076849248, 35.0569369938825]),
            {
              "label": 1,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55048333413389, 35.056915037808594]),
            {
              "label": 1,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55046455867078, 35.05690296196545]),
            {
              "label": 1,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55046455867078, 35.05687551686071]),
            {
              "label": 1,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55049138076093, 35.05689637514116]),
            {
              "label": 1,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55048065192487, 35.056874419056335]),
            {
              "label": 1,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55051015622404, 35.0568908861205]),
            {
              "label": 1,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55076764828947, 35.056962243360196]),
            {
              "label": 1,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55079581148412, 35.05696004775376]),
            {
              "label": 1,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55080519921567, 35.05699627525257]),
            {
              "label": 1,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55028149790552, 35.056635097348845]),
            {
              "label": 1,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55024461753156, 35.0566114944819]),
            {
              "label": 1,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55026808686044, 35.05658185366258]),
            {
              "label": 1,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55030831999566, 35.056584049279195]),
            {
              "label": 1,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5503237426975, 35.05660380982607]),
            {
              "label": 1,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55031837827947, 35.05661863023308]),
            {
              "label": 1,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55030429668214, 35.05663070611832]),
            {
              "label": 1,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55029692060735, 35.05661094557793]),
            {
              "label": 1,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55028820342805, 35.056595027361375]),
            {
              "label": 1,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55026808686044, 35.05660929886602]),
            {
              "label": 1,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55028082735326, 35.0566268637914]),
            {
              "label": 1,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55025534636762, 35.05659996749788]),
            {
              "label": 1,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5503237426975, 35.05659392955323]),
            {
              "label": 1,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54980191655142, 35.05938213555705]),
            {
              "label": 1,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54977509446127, 35.059374451161986]),
            {
              "label": 1,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54977777667028, 35.059342615803274]),
            {
              "label": 1,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54980996317846, 35.05933602917579]),
            {
              "label": 1,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54980191655142, 35.05936676676621]),
            {
              "label": 1,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54964634842855, 35.05937225562041]),
            {
              "label": 1,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54954174227697, 35.059395308804056]),
            {
              "label": 1,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54954174227697, 35.05936896230794]),
            {
              "label": 1,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54950150914175, 35.05935359351457]),
            {
              "label": 1,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54948005146963, 35.05934700688798]),
            {
              "label": 1,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54952430791838, 35.05935469128564]),
            {
              "label": 1,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54949614472372, 35.05939750434502]),
            {
              "label": 1,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54973083801252, 35.05956216974888]),
            {
              "label": 1,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5497616834162, 35.05957314743067]),
            {
              "label": 1,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54974693126661, 35.059552289834016]),
            {
              "label": 1,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54980191655142, 35.05951386793151]),
            {
              "label": 1,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54982203311903, 35.05951606346929]),
            {
              "label": 1,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5498180098055, 35.05950069470364]),
            {
              "label": 1,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54979521102888, 35.05949959693453]),
            {
              "label": 1,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55006209082586, 35.05930309603038]),
            {
              "label": 1,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55009025402052, 35.0593129759754]),
            {
              "label": 1,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55014792151434, 35.05930858488886]),
            {
              "label": 1,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.550176084709, 35.059278945048625]),
            {
              "label": 1,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55020290679914, 35.05922625197275]),
            {
              "label": 1,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55018815464956, 35.059199905422055]),
            {
              "label": 1,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55014389820082, 35.05917136331587]),
            {
              "label": 1,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55009427733404, 35.05917355886284]),
            {
              "label": 1,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5500500208853, 35.05919002546333]),
            {
              "label": 1,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5500325865267, 35.0592394252449]),
            {
              "label": 1,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55007684297544, 35.05923283860909]),
            {
              "label": 1,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5501237816332, 35.0592141764714]),
            {
              "label": 1,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55011707611067, 35.05924381633515]),
            {
              "label": 1,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55011975831968, 35.0592141764714]),
            {
              "label": 1,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55016401476843, 35.05924162079006]),
            {
              "label": 1,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55011573500616, 35.05929211831229]),
            {
              "label": 1,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55038127369863, 35.059197709875775]),
            {
              "label": 1,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55037322707159, 35.05917904773004]),
            {
              "label": 1,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55040273137075, 35.05918124327681]),
            {
              "label": 1,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55042553014738, 35.059180145503426]),
            {
              "label": 1,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55041882462484, 35.05916367890095]),
            {
              "label": 1,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55040273137075, 35.05915379893787]),
            {
              "label": 1,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5503759092806, 35.059165874448155]),
            {
              "label": 1,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54931911892874, 35.05891173946879]),
            {
              "label": 1,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5493311888693, 35.05889472392357]),
            {
              "label": 1,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54935398764593, 35.05889362614632]),
            {
              "label": 1,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54936538703424, 35.05890295725234]),
            {
              "label": 1,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54935197598917, 35.058920521684286]),
            {
              "label": 1,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54933722383959, 35.058916130576655]),
            {
              "label": 1,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54917562074644, 35.058889235037235]),
            {
              "label": 1,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54916489191038, 35.0589002128095]),
            {
              "label": 1,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54917293853742, 35.05888484392792]),
            {
              "label": 1,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54916086859686, 35.05887770837479]),
            {
              "label": 1,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54912868208868, 35.05888319726186]),
            {
              "label": 1,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54914812810404, 35.058878257263515]),
            {
              "label": 1,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54896774954778, 35.05904127705171]),
            {
              "label": 1,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54893690414411, 35.05905115702841]),
            {
              "label": 1,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54893623359186, 35.05903523928757]),
            {
              "label": 1,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54895567960722, 35.05903523928757]),
            {
              "label": 1,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.549142763686, 35.05908079695134]),
            {
              "label": 1,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54917025632841, 35.05907969917661]),
            {
              "label": 1,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54919774897081, 35.0590967146833]),
            {
              "label": 1,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54918366737348, 35.05911976794476]),
            {
              "label": 1,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54914075202925, 35.05911921905766]),
            {
              "label": 1,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54912197656614, 35.05910714354046]),
            {
              "label": 1,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54915751583559, 35.0591033013301]),
            {
              "label": 1,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54917696185095, 35.05910988797636]),
            {
              "label": 1,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54915550417883, 35.05909616579603]),
            {
              "label": 1,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54913739926798, 35.05910988797636]),
            {
              "label": 1,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55195773824009, 35.057272585039634]),
            {
              "label": 1,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5519952891663, 35.05728795422471]),
            {
              "label": 1,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55200601800236, 35.05732418157803]),
            {
              "label": 1,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55198187812123, 35.0573351595607]),
            {
              "label": 1,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.551941644986, 35.05732527937635]),
            {
              "label": 1,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5519590793446, 35.05731430139233]),
            {
              "label": 1,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55198187812123, 35.057285758627]),
            {
              "label": 1,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55211330636295, 35.05729673661486]),
            {
              "label": 1,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5521387873486, 35.057295638816136]),
            {
              "label": 1,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5521401284531, 35.05734284414772]),
            {
              "label": 1,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55208916648182, 35.05730771460125]),
            {
              "label": 1,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5521039186314, 35.057392245046856]),
            {
              "label": 1,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55213744624409, 35.05739553843907]),
            {
              "label": 1,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55168683512959, 35.05735601772374]),
            {
              "label": 1,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55170963390621, 35.05730222560822]),
            {
              "label": 1,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55167342408451, 35.05728795422471]),
            {
              "label": 1,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55163319094929, 35.0572791718336]),
            {
              "label": 1,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55160770996365, 35.05732418157803]),
            {
              "label": 1,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55165464862141, 35.05733735515706]),
            {
              "label": 1,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55163721426281, 35.05738785385704]),
            {
              "label": 1,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55167744739803, 35.05741200539814]),
            {
              "label": 1,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55166269524845, 35.05738675605953]),
            {
              "label": 1,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55161575659069, 35.05737248469078]),
            {
              "label": 1,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55150310381207, 35.05738785385704]),
            {
              "label": 1,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55148835166248, 35.05738126707185]),
            {
              "label": 1,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55149371608051, 35.05729893221224]),
            {
              "label": 1,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55149908049854, 35.05728795422471]),
            {
              "label": 1,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55148701055798, 35.05727038944154]),
            {
              "label": 1,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55146689399037, 35.05725062905598]),
            {
              "label": 1,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55145884736332, 35.05728356302927]),
            {
              "label": 1,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5516358731583, 35.05689055008153]),
            {
              "label": 1,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55165733083042, 35.05691031055425]),
            {
              "label": 1,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55166537745747, 35.05688945227737]),
            {
              "label": 1,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55171768053326, 35.056882865451975]),
            {
              "label": 1,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55172170384678, 35.05683785546427]),
            {
              "label": 1,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55168683512959, 35.056820290584305]),
            {
              "label": 1,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5516358731583, 35.05683236643969]),
            {
              "label": 1,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55162782653126, 35.05687188740848]),
            {
              "label": 1,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55167744739803, 35.056865300581684]),
            {
              "label": 1,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56302732746147, 35.057730842114026]),
            {
              "label": 1,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56298038880371, 35.057772558232614]),
            {
              "label": 1,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5629777065947, 35.05785599040582]),
            {
              "label": 1,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56294686119102, 35.05785708819699]),
            {
              "label": 1,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5628878525927, 35.057823056663416]),
            {
              "label": 1,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56283957283043, 35.05776267810119]),
            {
              "label": 1,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56290260474228, 35.05768912597414]),
            {
              "label": 1,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56293747345947, 35.05769900611447]),
            {
              "label": 1,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56286907712959, 35.05772754873535]),
            {
              "label": 1,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56292808572792, 35.05776377589363]),
            {
              "label": 1,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56315070907615, 35.05755958624602]),
            {
              "label": 1,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56318423668884, 35.05758593332601]),
            {
              "label": 1,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56320703546547, 35.05754860829351]),
            {
              "label": 1,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5631761900618, 35.057516772222904]),
            {
              "label": 1,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56318155447983, 35.05743004631239]),
            {
              "label": 1,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56314802686714, 35.05738723222134]),
            {
              "label": 1,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56320435325645, 35.057368569661804]),
            {
              "label": 1,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5631761900618, 35.05741357935695]),
            {
              "label": 1,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56316143791221, 35.057484936139865]),
            {
              "label": 1,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56319362442039, 35.057491522916685]),
            {
              "label": 1,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56195846716903, 35.05782964341295]),
            {
              "label": 1,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56203222791694, 35.05787026169007]),
            {
              "label": 1,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56192225734733, 35.057916368899036]),
            {
              "label": 1,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56199601809524, 35.057950400393736]),
            {
              "label": 1,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56172243277572, 35.0576715612773]),
            {
              "label": 1,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56175596038841, 35.057636431872254]),
            {
              "label": 1,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56183374444984, 35.05767265907097]),
            {
              "label": 1,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56176400701546, 35.057717668598485]),
            {
              "label": 1,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56193700949692, 35.05781537212161]),
            {
              "label": 1,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56202820460342, 35.057837327953436]),
            {
              "label": 1,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56197724263214, 35.05790539099451]),
            {
              "label": 1,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56204027454399, 35.05794491144394]),
            {
              "label": 1,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56185117880844, 35.05787465285393]),
            {
              "label": 1,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56182435671829, 35.057960280502435]),
            {
              "label": 1,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56191823403381, 35.05796686724091]),
            {
              "label": 1,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56374079505943, 35.05748274054748]),
            {
              "label": 1,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56377566377662, 35.05748713173218]),
            {
              "label": 1,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56394464294456, 35.05747834936252]),
            {
              "label": 1,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56397682945274, 35.05747395817733]),
            {
              "label": 1,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56399560491585, 35.05776816706322]),
            {
              "label": 1,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56471443693184, 35.057728646528254]),
            {
              "label": 1,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56470639030479, 35.057599106862824]),
            {
              "label": 1,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56471711914085, 35.05748932732447]),
            {
              "label": 1,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56470639030479, 35.05741906834247]),
            {
              "label": 1,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56392586748146, 35.05689212405039]),
            {
              "label": 1,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5639687828257, 35.05688773283365]),
            {
              "label": 1,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56379175703071, 35.05690090648311]),
            {
              "label": 1,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5637890748217, 35.056870167964426]),
            {
              "label": 1,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56383199016594, 35.056876754790835]),
            {
              "label": 1,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56392318527244, 35.056863581137485]),
            {
              "label": 1,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5643469742968, 35.05689651526688]),
            {
              "label": 1,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56441134731315, 35.056909688914914]),
            {
              "label": 1,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56354231159233, 35.05799650755746]),
            {
              "label": 1,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56357181589149, 35.05802285449647]),
            {
              "label": 1,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5625633053019, 35.05775060238338]),
            {
              "label": 1,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56244528810524, 35.05777475381719]),
            {
              "label": 1,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56172377388023, 35.05764301863685]),
            {
              "label": 1,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56180424015068, 35.05765619216446]),
            {
              "label": 1,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5619705371096, 35.05769132156099]),
            {
              "label": 1,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56129998485588, 35.05802285449647]),
            {
              "label": 1,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56125438730263, 35.05803383238522]),
            {
              "label": 1,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5612141541674, 35.057965769451215]),
            {
              "label": 1,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56125975172066, 35.057983334084774]),
            {
              "label": 1,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56301659862541, 35.05700190439167]),
            {
              "label": 1,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56300050537132, 35.0569557966663]),
            {
              "label": 1,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5630863360598, 35.05695360105969]),
            {
              "label": 1,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56588018093676, 35.06305468375607]),
            {
              "label": 1,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56584799442858, 35.06298003867413]),
            {
              "label": 1,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56583726559252, 35.06282196651058]),
            {
              "label": 1,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56589090977282, 35.0626814576638]),
            {
              "label": 1,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56735539589495, 35.06307224729486]),
            {
              "label": 1,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58629929832931, 35.059836816941626]),
            {
              "label": 1,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58632075600143, 35.05908594253031]),
            {
              "label": 1,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58698594383712, 35.0591122891178]),
            {
              "label": 1,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58703958801742, 35.0591737644555]),
            {
              "label": 1,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58779597095962, 35.05963043694363]),
            {
              "label": 1,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58852553181167, 35.05945040290236]),
            {
              "label": 1,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58858990482803, 35.059410883181634]),
            {
              "label": 1,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58988809399123, 35.05971825828314]),
            {
              "label": 1,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58982372097488, 35.05963043694363]),
            {
              "label": 1,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.59005439095016, 35.059770951041486]),
            {
              "label": 1,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.59012412838455, 35.05982803482467]),
            {
              "label": 1,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.59002756886001, 35.059950984375966]),
            {
              "label": 1,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58933019451614, 35.06025396640845]),
            {
              "label": 1,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65677826597391, 35.06219494283267]),
            {
              "label": 1,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65597360326944, 35.06168998415908]),
            {
              "label": 1,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65602724744974, 35.06163290167776]),
            {
              "label": 1,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65514748289286, 35.06150556369096]),
            {
              "label": 1,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.655174304983, 35.061382616480785]),
            {
              "label": 1,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6546861429423, 35.061303578890744]),
            {
              "label": 1,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65461104108988, 35.061268451048385]),
            {
              "label": 1,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65327530100046, 35.06142213524709]),
            {
              "label": 1,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65319483473002, 35.06156703722663]),
            {
              "label": 1,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65337722494303, 35.061769021375035]),
            {
              "label": 1,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65353279306589, 35.061228932207655]),
            {
              "label": 1,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65973942472635, 35.06164168360057]),
            {
              "label": 1,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65963213636576, 35.06190074989825]),
            {
              "label": 1,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65982525541483, 35.06179975804948]),
            {
              "label": 1,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66045289232432, 35.06173828468904]),
            {
              "label": 1,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66047971441446, 35.06147482690578]),
            {
              "label": 1,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66026513769327, 35.061202586303224]),
            {
              "label": 1,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6603241462916, 35.06113233051648]),
            {
              "label": 1,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66027586652933, 35.06099620975763]),
            {
              "label": 1,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66018467142283, 35.06079861470388]),
            {
              "label": 1,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66109125806986, 35.06030682049367]),
            {
              "label": 1,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66083376600443, 35.06078105067595]),
            {
              "label": 1,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66088741018473, 35.06093912679124]),
            {
              "label": 1,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65965359403788, 35.06086008877185]),
            {
              "label": 1,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65986817075907, 35.0607415315993]),
            {
              "label": 1,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66008811189829, 35.06049563469257]),
            {
              "label": 1,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66012029840647, 35.060420987270774]),
            {
              "label": 1,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6569391985148, 35.061018164734094]),
            {
              "label": 1,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6569016475886, 35.06103133771713]),
            {
              "label": 1,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65644567205607, 35.06082496073866]),
            {
              "label": 1,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65620963766276, 35.060293647393735]),
            {
              "label": 1,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65629546835123, 35.06022778186216]),
            {
              "label": 1,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65623109533487, 35.060214608749455]),
            {
              "label": 1,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65615599348246, 35.06022778186216]),
            {
              "label": 1,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6554425258845, 35.060504416737714]),
            {
              "label": 1,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65541033937632, 35.06050880775993]),
            {
              "label": 1,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65509383871256, 35.060864479774935]),
            {
              "label": 1,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65726642801462, 35.06201052350522]),
            {
              "label": 1,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65717523290812, 35.062427661865605]),
            {
              "label": 1,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65699820711313, 35.06234423436405]),
            {
              "label": 1,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65588777258097, 35.062475961959116]),
            {
              "label": 1,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65588240816294, 35.06243644370292]),
            {
              "label": 1,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6714372559398, 35.05283017043888]),
            {
              "label": 1,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67102956016953, 35.052755516009135]),
            {
              "label": 1,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67062186439927, 35.05268086151114]),
            {
              "label": 1,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6706272288173, 35.05263255562314]),
            {
              "label": 1,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67094372948105, 35.05251398650417]),
            {
              "label": 1,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67165183266098, 35.052382242836735]),
            {
              "label": 1,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6714211626857, 35.05232515384818]),
            {
              "label": 1,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6711851282924, 35.05227684774978]),
            {
              "label": 1,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67187713821824, 35.0524612890627]),
            {
              "label": 1,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67199515541489, 35.052395417213035]),
            {
              "label": 1,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67205416401322, 35.05255790101273]),
            {
              "label": 1,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67229556282456, 35.0525886411547]),
            {
              "label": 1,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67227946957047, 35.052724775929995]),
            {
              "label": 1,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67224728306229, 35.05289165050624]),
            {
              "label": 1,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67231702049668, 35.053291269816015]),
            {
              "label": 1,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67231165607865, 35.053185875902194]),
            {
              "label": 1,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6685565634578, 35.05204849126142]),
            {
              "label": 1,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66887306412156, 35.05201335943731]),
            {
              "label": 1,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66911982735093, 35.05203970830681]),
            {
              "label": 1,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66929685314591, 35.05194309574376]),
            {
              "label": 1,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66949533661301, 35.05198261907882]),
            {
              "label": 1,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6696562691539, 35.052193409876146]),
            {
              "label": 1,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66977428635056, 35.05224610749047]),
            {
              "label": 1,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67003177841599, 35.052241716023914]),
            {
              "label": 1,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67009615143235, 35.05217584399714]),
            {
              "label": 1,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67013370235856, 35.052096797494904]),
            {
              "label": 1,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67005860050614, 35.052044099784254]),
            {
              "label": 1,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66999422748978, 35.05188600644822]),
            {
              "label": 1,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66988157471116, 35.05188600644822]),
            {
              "label": 1,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6699620409816, 35.05183330860154]),
            {
              "label": 1,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6699244900554, 35.05171034682705]),
            {
              "label": 1,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67008005817826, 35.05170595533169]),
            {
              "label": 1,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67020880421097, 35.051675214857475]),
            {
              "label": 1,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66968845566208, 35.05176304475308]),
            {
              "label": 1,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66977965076859, 35.05177621922928]),
            {
              "label": 1,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66981183727677, 35.051609342373794]),
            {
              "label": 1,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66999422748978, 35.05163569137364]),
            {
              "label": 1,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6701068802684, 35.0515566443486]),
            {
              "label": 1,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67019807537491, 35.05106040294361]),
            {
              "label": 1,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67006396492417, 35.050998921497666]),
            {
              "label": 1,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67010151585038, 35.05106040294361]),
            {
              "label": 1,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6701605244487, 35.05104722835194]),
            {
              "label": 1,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67145334919388, 35.05170595533169]),
            {
              "label": 1,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67142652710373, 35.051675214857475]),
            {
              "label": 1,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6713299675792, 35.05164447437171]),
            {
              "label": 1,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67117976387436, 35.05156981885808]),
            {
              "label": 1,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6712226792186, 35.051543469836986]),
            {
              "label": 1,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66472636898453, 35.051872831989755]),
            {
              "label": 1,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66458152969773, 35.0518289171128]),
            {
              "label": 1,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66459225853379, 35.05176304475308]),
            {
              "label": 1,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66470491131241, 35.05182013413455]),
            {
              "label": 1,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66467272480423, 35.05164447437171]),
            {
              "label": 1,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66454397877152, 35.051539078332645]),
            {
              "label": 1,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66454397877152, 35.05138976704448]),
            {
              "label": 1,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66449033459122, 35.05126680460219]),
            {
              "label": 1,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6643615885585, 35.051135058922895]),
            {
              "label": 1,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6644152327388, 35.05109992670585]),
            {
              "label": 1,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6644152327388, 35.050832043053965]),
            {
              "label": 1,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66467272480423, 35.05085400076341]),
            {
              "label": 1,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66486047943528, 35.05083643459631]),
            {
              "label": 1,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66496240337784, 35.05086278384552]),
            {
              "label": 1,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66500531872208, 35.050827651511355]),
            {
              "label": 1,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66498922546799, 35.05073982060983]),
            {
              "label": 1,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66534327705796, 35.050678338922545]),
            {
              "label": 1,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66381441791947, 35.05196505315449]),
            {
              "label": 1,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66390024860794, 35.05186844050312]),
            {
              "label": 1,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66383051117356, 35.051609342373794]),
            {
              "label": 1,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66318678100998, 35.052193409876146]),
            {
              "label": 1,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66304194172318, 35.05240859158723]),
            {
              "label": 1,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66357838352616, 35.052531552310434]),
            {
              "label": 1,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66386806209977, 35.052531552310434]),
            {
              "label": 1,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66398071487839, 35.052509595052015]),
            {
              "label": 1,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6641631050914, 35.05250520359961]),
            {
              "label": 1,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66313313682969, 35.051148233500385]),
            {
              "label": 1,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66324578960831, 35.051086752120554]),
            {
              "label": 1,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66705452640946, 35.053005827651425]),
            {
              "label": 1,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66711889942582, 35.05302778477644]),
            {
              "label": 1,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66951679428513, 35.05298826194719]),
            {
              "label": 1,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66979037960465, 35.053036567624794]),
            {
              "label": 1,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67134606083329, 35.05312878747543]),
            {
              "label": 1,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67149090012009, 35.05302778477644]),
            {
              "label": 1,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67260133465226, 35.05234711115619]),
            {
              "label": 1,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67250477512772, 35.05232515384818]),
            {
              "label": 1,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67296075066025, 35.052399808671346]),
            {
              "label": 1,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67282664020951, 35.0519562701909]),
            {
              "label": 1,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67297684391434, 35.051907963874314]),
            {
              "label": 1,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66839026649888, 35.05167082336023]),
            {
              "label": 1,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66844391067917, 35.051561035852004]),
            {
              "label": 1,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66896425922806, 35.05126680460219]),
            {
              "label": 1,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66911982735093, 35.05120971483392]),
            {
              "label": 1,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66918420036728, 35.05123606396269]),
            {
              "label": 1,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66927539547379, 35.051279979158444]),
            {
              "label": 1,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66934513290818, 35.051284370676726]),
            {
              "label": 1,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66945242126877, 35.051214106355964]),
            {
              "label": 1,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6693129464, 35.05114384197478]),
            {
              "label": 1,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66919492920334, 35.05109553517765]),
            {
              "label": 1,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6690983696788, 35.051029662226426]),
            {
              "label": 1,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66893743713791, 35.05095061461481]),
            {
              "label": 1,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6708632632106, 35.05220219281422]),
            {
              "label": 1,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6653700991481, 35.05252716085923]),
            {
              "label": 1,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66569732864792, 35.052711601606816]),
            {
              "label": 1,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66584216793473, 35.05293556481177]),
            {
              "label": 1,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66604065140183, 35.05301021907692]),
            {
              "label": 1,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66596018513138, 35.053401054998275]),
            {
              "label": 1,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66606747349198, 35.053365923756004]),
            {
              "label": 1,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66670583923752, 35.05343179482286]),
            {
              "label": 1,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66636251648362, 35.053405446402486]),
            {
              "label": 1,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66641079624588, 35.053207832978785]),
            {
              "label": 1,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69053012428822, 35.046385527868786]),
            {
              "label": 1,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69053548870625, 35.04626255789269]),
            {
              "label": 1,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69125432072224, 35.046815921327365]),
            {
              "label": 1,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69202679691853, 35.04612202055044]),
            {
              "label": 1,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69204825459065, 35.046078102581404]),
            {
              "label": 1,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69204289017262, 35.04599905017764]),
            {
              "label": 1,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69199461041035, 35.04600783378184]),
            {
              "label": 1,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69189268646778, 35.0460254009874]),
            {
              "label": 1,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69192487297596, 35.0460912779746]),
            {
              "label": 1,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6922735601479, 35.04624059894888]),
            {
              "label": 1,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69219309387745, 35.04638991965022]),
            {
              "label": 1,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69210189877094, 35.04659633311143]),
            {
              "label": 1,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69194633064808, 35.046846663630475]),
            {
              "label": 1,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68813759384693, 35.04754055825172]),
            {
              "label": 1,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68816441593708, 35.04747468243332]),
            {
              "label": 1,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68778354225697, 35.04745711553943]),
            {
              "label": 1,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68775672016682, 35.04743076519153]),
            {
              "label": 1,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68786937294544, 35.047312188520806]),
            {
              "label": 1,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68792301712574, 35.04734293063715]),
            {
              "label": 1,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68921584187092, 35.04730779678894]),
            {
              "label": 1,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6892480283791, 35.04725509598829]),
            {
              "label": 1,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68985957203449, 35.047198003415915]),
            {
              "label": 1,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6896449953133, 35.04712773557973]),
            {
              "label": 1,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68963426647724, 35.0468905811863]),
            {
              "label": 1,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69052475987019, 35.04712773557973]),
            {
              "label": 1,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6905462175423, 35.04708381815141]),
            {
              "label": 1,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69057303963245, 35.04704429244574]),
            {
              "label": 1,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69075006542744, 35.04706185942841]),
            {
              "label": 1,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69080907402576, 35.04710138512558]),
            {
              "label": 1,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69084662495197, 35.04708820989531]),
            {
              "label": 1,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69080370960774, 35.04703990069948]),
            {
              "label": 1,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69071251450123, 35.04703990069948]),
            {
              "label": 1,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69071787891926, 35.04699159147508]),
            {
              "label": 1,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6907607942635, 35.04695645747578]),
            {
              "label": 1,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69083589611591, 35.04691693170846]),
            {
              "label": 1,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57551172426999, 35.081666994090135]),
            {
              "label": 1,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57552379421055, 35.08163077754037]),
            {
              "label": 1,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57558280280888, 35.08157919636601]),
            {
              "label": 1,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57559219054043, 35.081550662085306]),
            {
              "label": 1,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57557207397282, 35.081519932848806]),
            {
              "label": 1,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57553854636014, 35.08154846714025]),
            {
              "label": 1,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57550367764294, 35.08156822164384]),
            {
              "label": 1,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57490554503262, 35.08164284972543]),
            {
              "label": 1,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5749202971822, 35.08160882810846]),
            {
              "label": 1,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57493907264531, 35.08158358625445]),
            {
              "label": 1,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57486799410641, 35.08156712417155]),
            {
              "label": 1,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5748653118974, 35.08158687867064]),
            {
              "label": 1,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57484385422528, 35.08166370167717]),
            {
              "label": 1,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57463732413113, 35.081578098893864]),
            {
              "label": 1,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57461988977253, 35.081597853390285]),
            {
              "label": 1,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57461988977253, 35.08156163680984]),
            {
              "label": 1,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57464268854916, 35.08154078483198]),
            {
              "label": 1,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57487201741993, 35.08141347790421]),
            {
              "label": 1,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57491359165967, 35.081409088006616]),
            {
              "label": 1,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57485592416585, 35.08135640921693]),
            {
              "label": 1,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57488006404698, 35.08133006980936]),
            {
              "label": 1,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57489749840558, 35.0812861707778]),
            {
              "label": 1,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57483983091176, 35.08124227172263]),
            {
              "label": 1,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57562974146664, 35.081086429885964]),
            {
              "label": 1,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57561633042157, 35.08108313744959]),
            {
              "label": 1,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57559621385396, 35.0811116718938]),
            {
              "label": 1,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57558146170437, 35.08108423492838]),
            {
              "label": 1,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57559621385396, 35.08106448030759]),
            {
              "label": 1,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57563376478016, 35.08106557778666]),
            {
              "label": 1,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57611486386837, 35.08182162918611]),
            {
              "label": 1,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57658156823696, 35.081830408936675]),
            {
              "label": 1,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57614168595852, 35.08238792116304]),
            {
              "label": 1,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57618460130276, 35.082344022700724]),
            {
              "label": 1,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57583591413082, 35.08251083673181]),
            {
              "label": 1,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57588419389309, 35.08251083673181]),
            {
              "label": 1,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57739695977749, 35.08226939526058]),
            {
              "label": 1,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57737550210537, 35.082436209444275]),
            {
              "label": 1,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57737013768734, 35.0826469216098]),
            {
              "label": 1,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57733258676113, 35.08263375211539]),
            {
              "label": 1,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5773808665234, 35.08281812484352]),
            {
              "label": 1,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57802459668697, 35.082791785907865]),
            {
              "label": 1,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.578029961105, 35.08274349783709]),
            {
              "label": 1,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57824990224422, 35.08191820639045]),
            {
              "label": 1,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57826063108028, 35.08179090005167]),
            {
              "label": 1,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57826063108028, 35.08154945644967]),
            {
              "label": 1,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57828745317043, 35.08138703035172]),
            {
              "label": 1,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57829281758846, 35.081338741449436]),
            {
              "label": 1,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57827672433437, 35.08125533327814]),
            {
              "label": 1,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57736477326931, 35.08208941115351]),
            {
              "label": 1,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57737550210537, 35.08225183585298]),
            {
              "label": 1,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5770750946957, 35.081830408936675]),
            {
              "label": 1,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5770750946957, 35.081624084548395]),
            {
              "label": 1,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57706973027767, 35.081575795786435]),
            {
              "label": 1,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57678541612209, 35.08160213511467]),
            {
              "label": 1,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57667276334347, 35.08159335533956]),
            {
              "label": 1,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57636162709774, 35.08158896545162]),
            {
              "label": 1,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57600757550777, 35.081610914888884]),
            {
              "label": 1,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5770750946957, 35.08076805225734]),
            {
              "label": 1,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57733258676113, 35.080627574305474]),
            {
              "label": 1,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5759217448193, 35.08077244218944]),
            {
              "label": 1,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57574471902431, 35.08076366232501]),
            {
              "label": 1,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57509562444271, 35.08077244218944]),
            {
              "label": 1,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57500979375423, 35.08077683212129]),
            {
              "label": 1,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57368478250088, 35.080675863628684]),
            {
              "label": 1,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5736901469189, 35.080614404485075]),
            {
              "label": 1,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57392081689419, 35.080254428571166]),
            {
              "label": 1,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5739583678204, 35.08016223936212]),
            {
              "label": 1,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57275673818172, 35.08036856744753]),
            {
              "label": 1,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57270309400143, 35.080478316216535]),
            {
              "label": 1,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5726977295834, 35.08069781331164]),
            {
              "label": 1,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57277283143581, 35.080737322726044]),
            {
              "label": 1,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57464501332821, 35.082677650421786]),
            {
              "label": 1,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57461819123806, 35.083028836022535]),
            {
              "label": 1,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5752029128033, 35.0829937175305]),
            {
              "label": 1,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57557305764736, 35.082984937905145]),
            {
              "label": 1,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57557305764736, 35.08280934519924]),
            {
              "label": 1,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57690879773678, 35.082699599566126]),
            {
              "label": 1,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57688734006466, 35.08266887076241]),
            {
              "label": 1,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5784966654736, 35.08245815865358]),
            {
              "label": 1,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5784805722195, 35.08235280239506]),
            {
              "label": 1,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57845375012936, 35.08138703035172]),
            {
              "label": 1,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58000406693996, 35.082392311007965]),
            {
              "label": 1,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57999870252193, 35.08221232717206]),
            {
              "label": 1,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58086773824276, 35.08204112266696]),
            {
              "label": 1,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.581452459808, 35.082265005409035]),
            {
              "label": 1,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58129152726711, 35.08250644689327]),
            {
              "label": 1,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58140954446377, 35.082581074116554]),
            {
              "label": 1,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58192989301266, 35.08239670085264]),
            {
              "label": 1,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58342120122494, 35.082291344514765]),
            {
              "label": 1,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58436533879818, 35.082054292257034]),
            {
              "label": 1,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5841722197491, 35.082199157607505]),
            {
              "label": 1,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58405956697048, 35.08204990239391]),
            {
              "label": 1,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58435460996212, 35.082295734364905]),
            {
              "label": 1,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58578154515804, 35.082392311007965]),
            {
              "label": 1,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58584055375637, 35.08206746184497]),
            {
              "label": 1,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58544358682217, 35.0816372542058]),
            {
              "label": 1,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5854328579861, 35.08159774522723]),
            {
              "label": 1,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58540603589596, 35.08142653943232]),
            {
              "label": 1,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58540603589596, 35.08138703035172]),
            {
              "label": 1,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58668813180508, 35.08238792116304]),
            {
              "label": 1,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5867095894772, 35.08238353131786]),
            {
              "label": 1,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58703681897701, 35.082739108011076]),
            {
              "label": 1,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58703145455898, 35.08268204025114]),
            {
              "label": 1,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58621606301845, 35.082980548092095]),
            {
              "label": 1,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58622142743648, 35.08290153141695]),
            {
              "label": 1,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58622142743648, 35.082686430080244]),
            {
              "label": 1,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58709582757534, 35.08218159818478]),
            {
              "label": 1,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58692953061642, 35.08215525904362]),
            {
              "label": 1,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58692416619839, 35.082085021292265]),
            {
              "label": 1,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58699390363277, 35.082036732803125]),
            {
              "label": 1,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58133980702938, 35.08094803927969]),
            {
              "label": 1,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58134517144741, 35.08088219041513]),
            {
              "label": 1,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5826219029385, 35.08100510825263]),
            {
              "label": 1,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5826219029385, 35.08091291989186]),
            {
              "label": 1,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58259508084835, 35.080443196626526]),
            {
              "label": 1,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58316907357754, 35.081066567101935]),
            {
              "label": 1,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58315298032345, 35.08103144776514]),
            {
              "label": 1,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5834855742413, 35.08096998888938]),
            {
              "label": 1,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58349093865932, 35.08092608966406]),
            {
              "label": 1,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58405956697048, 35.08099632841324]),
            {
              "label": 1,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58405956697048, 35.08095681912427]),
            {
              "label": 1,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58404883813442, 35.080847070998956]),
            {
              "label": 1,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58433315229, 35.08093486951102]),
            {
              "label": 1,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58437070321621, 35.08114997546622]),
            {
              "label": 1,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58433315229, 35.08144409901758]),
            {
              "label": 1,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58433315229, 35.08144409901758]),
            {
              "label": 1,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58400592279018, 35.08159335533956]),
            {
              "label": 1,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58398446511806, 35.08151872721269]),
            {
              "label": 1,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58701536130489, 35.08266887076241]),
            {
              "label": 1,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58692953061642, 35.08274788766289]),
            {
              "label": 1,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58692953061642, 35.08263814194709]),
            {
              "label": 1,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58434924554409, 35.08294981939418]),
            {
              "label": 1,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58431705903591, 35.082923480501066]),
            {
              "label": 1,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58433851670803, 35.082848853591024]),
            {
              "label": 1,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5836840577084, 35.08313858121272]),
            {
              "label": 1,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58374843072475, 35.08310785257435]),
            {
              "label": 1,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58369478654446, 35.08304639526289]),
            {
              "label": 1,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58347484540523, 35.083173699642394]),
            {
              "label": 1,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58291694593014, 35.082804955376744]),
            {
              "label": 1,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58285793733181, 35.08281812484352]),
            {
              "label": 1,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5823161311108, 35.08296737865155]),
            {
              "label": 1,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58230003785671, 35.08287519250824]),
            {
              "label": 1,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.583431930061, 35.081264113089674]),
            {
              "label": 1,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58294376802029, 35.08135630105357]),
            {
              "label": 1,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58287939500393, 35.08130362222982]),
            {
              "label": 1,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58137735795559, 35.081338741449436]),
            {
              "label": 1,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58170995187344, 35.08135191115289]),
            {
              "label": 1,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5817206807095, 35.08130801213309]),
            {
              "label": 1,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58017036389889, 35.081233383745214]),
            {
              "label": 1,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58061024617733, 35.081145585554424]),
            {
              "label": 1,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5836304135281, 35.08204990239391]),
            {
              "label": 1,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58366260003628, 35.082027953074764]),
            {
              "label": 1,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5831637091595, 35.081817239310475]),
            {
              "label": 1,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58331927728237, 35.081795289928706]),
            {
              "label": 1,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58319053124966, 35.082344022700724]),
            {
              "label": 1,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58345338773312, 35.083169309839505]),
            {
              "label": 1,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58234295320095, 35.08287519250824]),
            {
              "label": 1,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58124861192287, 35.08237475162683]),
            {
              "label": 1,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58114132356228, 35.08221671702645]),
            {
              "label": 1,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58143636655392, 35.08225183585298]),
            {
              "label": 1,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5791457600552, 35.081830408936675]),
            {
              "label": 1,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57912966680111, 35.08178212029682]),
            {
              "label": 1,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57932815026821, 35.08158457556347]),
            {
              "label": 1,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57933887910427, 35.08151872721269]),
            {
              "label": 1,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57946226071896, 35.081610914888884]),
            {
              "label": 1,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57913503121914, 35.080943649357025]),
            {
              "label": 1,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57913503121914, 35.08086902063585]),
            {
              "label": 1,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57910820912899, 35.080675863628684]),
            {
              "label": 1,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57972511720241, 35.08066708375387]),
            {
              "label": 1,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57961782884182, 35.08060562460362]),
            {
              "label": 1,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57945689630093, 35.080684643502586]),
            {
              "label": 1,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58083018731655, 35.080636354184534]),
            {
              "label": 1,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58086237382473, 35.080601234662566]),
            {
              "label": 1,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5817045874554, 35.08063196424511]),
            {
              "label": 1,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5817582316357, 35.080623184365564]),
            {
              "label": 1,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58173677396358, 35.08054855535122]),
            {
              "label": 1,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58173140954555, 35.08050465589914]),
            {
              "label": 1,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58218738507809, 35.08158896545162]),
            {
              "label": 1,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5822088427502, 35.08154506655938]),
            {
              "label": 1,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58209082555355, 35.081659203630075]),
            {
              "label": 1,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58210691880764, 35.081641644091135]),
            {
              "label": 1,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58520218801083, 35.0808602407818]),
            {
              "label": 1,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58520218801083, 35.08082512135619]),
            {
              "label": 1,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57712337445797, 35.08251522657015]),
            {
              "label": 1,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57846447896542, 35.083033225832985]),
            {
              "label": 1,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58088383149685, 35.08313858121272]),
            {
              "label": 1,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58081409406246, 35.08315175062564]),
            {
              "label": 1,
              "system:index": "818"
            })]),
    NotCanopy = /* color: #dfcfa2 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-106.61725721096343, 35.0941508417955]),
            {
              "label": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61723843550033, 35.09410914427115]),
            {
              "label": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61726793979949, 35.09409487932371]),
            {
              "label": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61721429561919, 35.094036722204514]),
            {
              "label": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61719015573806, 35.093988440791016]),
            {
              "label": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61714187597579, 35.093951132406445]),
            {
              "label": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61709359621352, 35.09394125665475]),
            {
              "label": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61703056430167, 35.093933575513695]),
            {
              "label": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61703995203322, 35.09391821322942]),
            {
              "label": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61701178883857, 35.09388968326527]),
            {
              "label": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61704799866027, 35.09386005598423]),
            {
              "label": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61706945633239, 35.09376459022762]),
            {
              "label": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61711103057212, 35.09375690906993]),
            {
              "label": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61719015573806, 35.09375910368647]),
            {
              "label": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61726391648597, 35.09375910368647]),
            {
              "label": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61731487845725, 35.09375361714497]),
            {
              "label": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61731487845725, 35.093718503270615]),
            {
              "label": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61740205025023, 35.093739352135344]),
            {
              "label": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61745569443053, 35.09376568753578]),
            {
              "label": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61743826007194, 35.09373715751827]),
            {
              "label": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61740473245925, 35.09369765440057]),
            {
              "label": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6175026330883, 35.093676805525206]),
            {
              "label": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61752006744689, 35.09375690906993]),
            {
              "label": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61751872634238, 35.0938249421557]),
            {
              "label": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6175750527317, 35.09382274754091]),
            {
              "label": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61762065028495, 35.093810677158544]),
            {
              "label": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61765820121116, 35.093800801389825]),
            {
              "label": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61765686010665, 35.09372837904931]),
            {
              "label": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61759248709029, 35.09367131897815]),
            {
              "label": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6176112625534, 35.093682292071875]),
            {
              "label": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61760589813537, 35.09365376202515]),
            {
              "label": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61777890061683, 35.09379750946665]),
            {
              "label": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61775073742217, 35.093766784843965]),
            {
              "label": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61776146625823, 35.093776660616804]),
            {
              "label": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61794117426223, 35.09373386559252]),
            {
              "label": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6179733607704, 35.09375142252827]),
            {
              "label": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61808199023551, 35.09379750946665]),
            {
              "label": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61795056199378, 35.093933575513695]),
            {
              "label": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61781376933402, 35.09388309942596]),
            {
              "label": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61770513986892, 35.09398734348583]),
            {
              "label": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61771452760047, 35.09413547955217]),
            {
              "label": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61776548957175, 35.09415742561318]),
            {
              "label": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6176474723751, 35.094121214609345]),
            {
              "label": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61764210795707, 35.094025749158504]),
            {
              "label": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61775476073569, 35.094105852360435]),
            {
              "label": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61784059142417, 35.09403891681353]),
            {
              "label": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61766758894271, 35.09392918628991]),
            {
              "label": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61753616070098, 35.093934672819614]),
            {
              "label": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61745569443053, 35.093843596378974]),
            {
              "label": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61740473245925, 35.093844693686094]),
            {
              "label": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61716333364791, 35.09371301672639]),
            {
              "label": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61690315937346, 35.093721795197]),
            {
              "label": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61682537531203, 35.09368668130893]),
            {
              "label": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61677039002723, 35.093616453487456]),
            {
              "label": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61668053602523, 35.093665832430744]),
            {
              "label": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6166926059658, 35.09362742658856]),
            {
              "label": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61671674584693, 35.0936186481078]),
            {
              "label": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61673283910102, 35.09364278892761]),
            {
              "label": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61659068202323, 35.09362523196845]),
            {
              "label": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61659068202323, 35.09359231265989]),
            {
              "label": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61666041945762, 35.09358902072828]),
            {
              "label": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61679184769935, 35.09359889652265]),
            {
              "label": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61679989432639, 35.09359011803883]),
            {
              "label": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61682939862555, 35.09361535617729]),
            {
              "label": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61685085629767, 35.09356597720342]),
            {
              "label": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61684012746161, 35.093545128294394]),
            {
              "label": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61626345252341, 35.0938238448483]),
            {
              "label": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61618566846198, 35.09382274754091]),
            {
              "label": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61607435678786, 35.09381616369621]),
            {
              "label": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61601132487601, 35.09385566675648]),
            {
              "label": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61610788440055, 35.09386444521172]),
            {
              "label": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61614811753577, 35.09397856504382]),
            {
              "label": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61618164514846, 35.094029041072446]),
            {
              "label": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6161722574169, 35.093999413842035]),
            {
              "label": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61614543532676, 35.094161814824695]),
            {
              "label": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6161722574169, 35.09411682539566]),
            {
              "label": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61593085860557, 35.094090490108634]),
            {
              "label": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61589867209739, 35.094090490108634]),
            {
              "label": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61587185000724, 35.09411353348526]),
            {
              "label": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61589733099288, 35.094181566273484]),
            {
              "label": 0,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61593085860557, 35.09417937166829]),
            {
              "label": 0,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61578736042327, 35.094119020002545]),
            {
              "label": 0,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61574042176551, 35.094088295500995]),
            {
              "label": 0,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61583564018554, 35.09410146314592]),
            {
              "label": 0,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61561704015082, 35.09385676406342]),
            {
              "label": 0,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61597779726333, 35.093852374835514]),
            {
              "label": 0,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61559960579223, 35.0938304286924]),
            {
              "label": 0,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61561435794181, 35.093745935986256]),
            {
              "label": 0,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61561704015082, 35.093691070545766]),
            {
              "label": 0,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61556205486602, 35.09366802704976]),
            {
              "label": 0,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6155580315525, 35.09371521134413]),
            {
              "label": 0,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61553255056685, 35.093766784843965]),
            {
              "label": 0,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6154145333702, 35.09375361714497]),
            {
              "label": 0,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61536357139892, 35.09375032521991]),
            {
              "label": 0,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61539307569808, 35.0937327682839]),
            {
              "label": 0,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61538502907104, 35.093775563308775]),
            {
              "label": 0,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61535686587638, 35.09381945561862]),
            {
              "label": 0,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61538637017554, 35.093901753635926]),
            {
              "label": 0,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61538637017554, 35.094030138377065]),
            {
              "label": 0,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61536223029441, 35.094063057508926]),
            {
              "label": 0,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61541051005668, 35.09417169054968]),
            {
              "label": 0,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6154681775505, 35.09416071752183]),
            {
              "label": 0,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61556071376151, 35.09415632831029]),
            {
              "label": 0,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61558887695617, 35.09409707393118]),
            {
              "label": 0,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61564520334548, 35.09408719819714]),
            {
              "label": 0,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61563581561393, 35.09412560382279]),
            {
              "label": 0,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61816513871497, 35.09460951315602]),
            {
              "label": 0,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61808735465354, 35.094633653682486]),
            {
              "label": 0,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61809003686255, 35.094587567216685]),
            {
              "label": 0,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61811149453467, 35.09452611855511]),
            {
              "label": 0,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61796129082984, 35.09445808605433]),
            {
              "label": 0,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61799347733802, 35.0944163886871]),
            {
              "label": 0,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61802834605521, 35.09432860468641]),
            {
              "label": 0,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61809003686255, 35.094379080498356]),
            {
              "label": 0,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61812222337073, 35.09435274529601]),
            {
              "label": 0,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61816245650596, 35.09445150226093]),
            {
              "label": 0,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6180980834896, 35.09448881041657]),
            {
              "label": 0,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61815709208793, 35.094550259106235]),
            {
              "label": 0,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61812758778876, 35.094616096936676]),
            {
              "label": 0,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61885714864081, 35.09422765296875]),
            {
              "label": 0,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6189081106121, 35.09423862598758]),
            {
              "label": 0,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61894834374732, 35.09422765296875]),
            {
              "label": 0,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61900198792762, 35.09417937166829]),
            {
              "label": 0,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61895370816535, 35.094168398641486]),
            {
              "label": 0,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61892152165717, 35.09419034469364]),
            {
              "label": 0,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61890006398505, 35.09413767415854]),
            {
              "label": 0,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6188732418949, 35.09411572809221]),
            {
              "label": 0,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61882496213263, 35.0941508417955]),
            {
              "label": 0,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61878472899741, 35.09423423678024]),
            {
              "label": 0,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61880350446052, 35.09400380306205]),
            {
              "label": 0,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61886519526786, 35.09401916533019]),
            {
              "label": 0,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61882496213263, 35.093955521629056]),
            {
              "label": 0,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61883837317771, 35.09390724016746]),
            {
              "label": 0,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61912805175132, 35.09420570692664]),
            {
              "label": 0,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61909854745215, 35.094306658671464]),
            {
              "label": 0,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6188544664318, 35.09439005349684]),
            {
              "label": 0,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61885714864081, 35.09453050774676]),
            {
              "label": 0,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61905026768989, 35.09449758880362]),
            {
              "label": 0,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61915487384147, 35.09450856178615]),
            {
              "label": 0,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61920583581275, 35.09447564283416]),
            {
              "label": 0,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6193238530094, 35.09446466984723]),
            {
              "label": 0,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6192702088291, 35.09399502462179]),
            {
              "label": 0,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61917633151359, 35.09405208446645]),
            {
              "label": 0,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61918706034965, 35.09391382400484]),
            {
              "label": 0,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61887860631293, 35.09380189869753]),
            {
              "label": 0,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61882764434165, 35.09377117407647]),
            {
              "label": 0,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61885714864081, 35.09377775792481]),
            {
              "label": 0,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61881155108756, 35.09387651558612]),
            {
              "label": 0,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61874986028022, 35.093926991677925]),
            {
              "label": 0,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5502875328758, 35.05654891940627]),
            {
              "label": 0,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55019499666479, 35.05663674406025]),
            {
              "label": 0,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55015342242505, 35.05661917913701]),
            {
              "label": 0,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55018695003774, 35.05659722297766]),
            {
              "label": 0,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55021377212789, 35.05660380982607]),
            {
              "label": 0,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55009709603574, 35.05664772213535]),
            {
              "label": 0,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5500179708698, 35.05664881994278]),
            {
              "label": 0,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55000321872022, 35.0566268637914]),
            {
              "label": 0,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5500702739456, 35.0566114944819]),
            {
              "label": 0,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55010514266279, 35.056607103250094]),
            {
              "label": 0,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55008636719968, 35.05658075585426]),
            {
              "label": 0,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55012794143941, 35.056584049279195]),
            {
              "label": 0,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55018963224676, 35.056586244895755]),
            {
              "label": 0,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55023791200902, 35.05655331064123]),
            {
              "label": 0,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55024327642705, 35.05652696322802]),
            {
              "label": 0,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5502338886955, 35.056492931140056]),
            {
              "label": 0,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55022986538198, 35.05644901874755]),
            {
              "label": 0,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55024059421804, 35.0564226713007]),
            {
              "label": 0,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55020840770986, 35.056439138455985]),
            {
              "label": 0,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5502338886955, 35.05640071508851]),
            {
              "label": 0,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55024729974058, 35.056386443547396]),
            {
              "label": 0,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55023791200902, 35.056360096080375]),
            {
              "label": 0,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55023522980001, 35.05631947705204]),
            {
              "label": 0,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55024864084508, 35.0563216726757]),
            {
              "label": 0,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5502513230541, 35.0562876405022]),
            {
              "label": 0,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55024193532255, 35.05627117331636]),
            {
              "label": 0,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55020840770986, 35.05625360831449]),
            {
              "label": 0,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55023925311353, 35.05624263018641]),
            {
              "label": 0,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55026205189016, 35.05623823893476]),
            {
              "label": 0,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55029289729383, 35.056244825812136]),
            {
              "label": 0,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55030094392087, 35.05621298923318]),
            {
              "label": 0,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5502875328758, 35.0561800548281]),
            {
              "label": 0,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55013062364843, 35.056192130778165]),
            {
              "label": 0,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55010514266279, 35.05623933674769]),
            {
              "label": 0,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55015878684308, 35.056245923624985]),
            {
              "label": 0,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55005015737798, 35.05637107419268]),
            {
              "label": 0,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.550052839587, 35.05649512675906]),
            {
              "label": 0,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55000455982473, 35.05653464789109]),
            {
              "label": 0,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54996700889852, 35.05653464789109]),
            {
              "label": 0,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54996030337598, 35.05660490763409]),
            {
              "label": 0,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55002333528783, 35.05661588571347]),
            {
              "label": 0,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54992543465879, 35.05664772213535]),
            {
              "label": 0,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54989458925512, 35.05659392955323]),
            {
              "label": 0,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54985837943342, 35.056595027361375]),
            {
              "label": 0,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54986776716497, 35.05664552652044]),
            {
              "label": 0,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54982887513425, 35.05666967828114]),
            {
              "label": 0,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54990397698667, 35.0566861453866]),
            {
              "label": 0,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54992409355428, 35.056728959845245]),
            {
              "label": 0,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55002065307882, 35.05672786203891]),
            {
              "label": 0,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55005686290052, 35.05668394977273]),
            {
              "label": 0,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55014001137998, 35.05673005765158]),
            {
              "label": 0,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55016817457464, 35.05669163442099]),
            {
              "label": 0,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55018829114225, 35.05672786203891]),
            {
              "label": 0,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5502526641586, 35.05674981816314]),
            {
              "label": 0,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55031167275693, 35.05674762255098]),
            {
              "label": 0,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55031167275693, 35.05671688397456]),
            {
              "label": 0,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55035324699666, 35.05668394977273]),
            {
              "label": 0,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55043371326711, 35.056635646252644]),
            {
              "label": 0,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55036263472822, 35.05661698352133]),
            {
              "label": 0,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55036129362371, 35.05657416900396]),
            {
              "label": 0,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55036799914625, 35.05653135446415]),
            {
              "label": 0,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55034788257863, 35.05654782159749]),
            {
              "label": 0,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55045248873022, 35.056550017215024]),
            {
              "label": 0,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55056245929983, 35.05658185366258]),
            {
              "label": 0,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55055307156827, 35.05654233255343]),
            {
              "label": 0,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55055038935926, 35.05644023626621]),
            {
              "label": 0,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55054368383672, 35.05639851946696]),
            {
              "label": 0,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55002333528783, 35.05643584502519]),
            {
              "label": 0,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5500005365112, 35.056452312177804]),
            {
              "label": 0,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54997773773458, 35.05649183333054]),
            {
              "label": 0,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5499643266895, 35.056451214367755]),
            {
              "label": 0,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54997371442106, 35.056367780759146]),
            {
              "label": 0,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55000187761571, 35.056355704835035]),
            {
              "label": 0,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54997505552556, 35.056308498932815]),
            {
              "label": 0,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54993482239034, 35.05627666237867]),
            {
              "label": 0,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54995896227148, 35.056247021437805]),
            {
              "label": 0,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54997237331655, 35.05621628267295]),
            {
              "label": 0,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54999248988416, 35.05618664171018]),
            {
              "label": 0,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54993884570386, 35.0561800548281]),
            {
              "label": 0,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5499106825092, 35.05621957611259]),
            {
              "label": 0,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54987581379201, 35.056265684253695]),
            {
              "label": 0,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54983960397031, 35.05623384768286]),
            {
              "label": 0,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54981278188016, 35.05626678206626]),
            {
              "label": 0,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54980339414861, 35.056326063922874]),
            {
              "label": 0,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5498194874027, 35.05643035597357]),
            {
              "label": 0,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54982485182073, 35.05647207275656]),
            {
              "label": 0,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54981680519369, 35.05653684350896]),
            {
              "label": 0,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54981009967115, 35.05661698352133]),
            {
              "label": 0,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54977254874494, 35.05664772213535]),
            {
              "label": 0,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54966391927984, 35.056700416875316]),
            {
              "label": 0,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54962770945814, 35.056637841867826]),
            {
              "label": 0,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54959418184545, 35.05660380982607]),
            {
              "label": 0,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54952310330656, 35.05644901874755]),
            {
              "label": 0,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54957808859136, 35.05646658370738]),
            {
              "label": 0,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5495861352184, 35.05639851946696]),
            {
              "label": 0,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54960491068151, 35.05636558513671]),
            {
              "label": 0,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54952846772458, 35.05631508580451]),
            {
              "label": 0,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54953651435163, 35.05625031487622]),
            {
              "label": 0,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5495847941139, 35.056218478299414]),
            {
              "label": 0,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54962502724912, 35.05622506517839]),
            {
              "label": 0,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54962770945814, 35.056210793606596]),
            {
              "label": 0,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54947348243978, 35.05619432640526]),
            {
              "label": 0,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54927634007718, 35.05618883733743]),
            {
              "label": 0,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54903628237035, 35.05625580393994]),
            {
              "label": 0,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54876403815534, 35.05625580393994]),
            {
              "label": 0,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54868893630292, 35.05618115264181]),
            {
              "label": 0,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54871441728856, 35.05620859797993]),
            {
              "label": 0,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54872916943815, 35.05628873831446]),
            {
              "label": 0,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5487036884525, 35.05634253109762]),
            {
              "label": 0,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54876672036436, 35.05631508580451]),
            {
              "label": 0,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54881365902212, 35.05633265079317]),
            {
              "label": 0,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54891290075567, 35.056304107684696]),
            {
              "label": 0,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54893838174131, 35.05623274986986]),
            {
              "label": 0,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54887132651594, 35.05620859797993]),
            {
              "label": 0,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54891290075567, 35.05618554389654]),
            {
              "label": 0,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54896118051794, 35.05617895701436]),
            {
              "label": 0,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5486661375263, 35.056307401120804]),
            {
              "label": 0,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54864736206319, 35.056257999565304]),
            {
              "label": 0,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54864602095869, 35.05621298923318]),
            {
              "label": 0,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54858298904684, 35.056279955815896]),
            {
              "label": 0,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.548612493346, 35.0563315529815]),
            {
              "label": 0,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54864333874967, 35.056375465437185]),
            {
              "label": 0,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54852129823949, 35.05628215144063]),
            {
              "label": 0,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54845558411863, 35.056244825812136]),
            {
              "label": 0,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54848374731328, 35.05622726080459]),
            {
              "label": 0,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54848240620878, 35.05618554389654]),
            {
              "label": 0,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54842071540143, 35.05621298923318]),
            {
              "label": 0,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54842071540143, 35.05618773952382]),
            {
              "label": 0,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5485414148071, 35.05616358762058]),
            {
              "label": 0,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54861115224149, 35.05611418597809]),
            {
              "label": 0,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54871844060209, 35.056111990348825]),
            {
              "label": 0,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54877879030492, 35.056082349348195]),
            {
              "label": 0,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54879488355901, 35.056118577236404]),
            {
              "label": 0,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54881365902212, 35.05616688106233]),
            {
              "label": 0,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54880695349958, 35.0562228695521]),
            {
              "label": 0,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5487573326328, 35.056177859200616]),
            {
              "label": 0,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54875330931928, 35.05624153237351]),
            {
              "label": 0,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54876806146886, 35.056384247925465]),
            {
              "label": 0,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54881231791761, 35.056388639169285]),
            {
              "label": 0,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54892228848722, 35.056391932601976]),
            {
              "label": 0,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54897995598104, 35.056344726720695]),
            {
              "label": 0,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54905371672895, 35.0563491179666]),
            {
              "label": 0,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54902421242979, 35.056406204142114]),
            {
              "label": 0,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5490631044605, 35.05645340998785]),
            {
              "label": 0,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54914625293996, 35.056446823127295]),
            {
              "label": 0,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54927365786817, 35.056452312177804]),
            {
              "label": 0,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54925622350957, 35.056446823127295]),
            {
              "label": 0,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54923342473295, 35.05643145378392]),
            {
              "label": 0,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54925220019605, 35.056396323845355]),
            {
              "label": 0,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54932730204847, 35.056402910709984]),
            {
              "label": 0,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54932998425748, 35.056375465437185]),
            {
              "label": 0,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54932864315298, 35.05635241140089]),
            {
              "label": 0,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54927499897268, 35.056337042039736]),
            {
              "label": 0,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54924817688253, 35.056309596744796]),
            {
              "label": 0,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54927365786817, 35.056274466753784]),
            {
              "label": 0,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54930986768987, 35.056285444877595]),
            {
              "label": 0,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54936753518369, 35.056293129563386]),
            {
              "label": 0,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5494399548271, 35.056326063922874]),
            {
              "label": 0,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54944397814062, 35.056306303308766]),
            {
              "label": 0,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54948823458936, 35.056326063922874]),
            {
              "label": 0,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5497990417754, 35.058726229094624]),
            {
              "label": 0,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54980842950695, 35.05869768682287]),
            {
              "label": 0,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54985670926922, 35.05863511334599]),
            {
              "label": 0,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54988755467289, 35.05862084219543]),
            {
              "label": 0,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54982586386555, 35.058572539821185]),
            {
              "label": 0,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54976953747624, 35.0585714420396]),
            {
              "label": 0,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54972259881848, 35.058540704149806]),
            {
              "label": 0,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54972930434101, 35.05851325959553]),
            {
              "label": 0,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54975880864018, 35.058488010597465]),
            {
              "label": 0,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54978831293934, 35.058496792858556]),
            {
              "label": 0,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54984732153767, 35.058524237418354]),
            {
              "label": 0,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54993047001713, 35.05853631302174]),
            {
              "label": 0,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54991705897206, 35.05858022429172]),
            {
              "label": 0,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54995595100277, 35.058539606367795]),
            {
              "label": 0,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5500511694228, 35.05861754885265]),
            {
              "label": 0,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55007262709492, 35.05860986438561]),
            {
              "label": 0,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55015711667889, 35.058574735384255]),
            {
              "label": 0,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5499599743163, 35.05850667290113]),
            {
              "label": 0,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54998947861546, 35.05844080592797]),
            {
              "label": 0,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54996399762982, 35.05839250344721]),
            {
              "label": 0,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54989828350895, 35.05839030787922]),
            {
              "label": 0,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54983659270161, 35.058418850258434]),
            {
              "label": 0,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54977087858074, 35.05843312144431]),
            {
              "label": 0,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54982318165654, 35.05848032611826]),
            {
              "label": 0,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54990498903149, 35.05849130394548]),
            {
              "label": 0,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54966090801113, 35.05840897020523]),
            {
              "label": 0,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54966627242916, 35.058378232254235]),
            {
              "label": 0,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54957910063618, 35.05842433917637]),
            {
              "label": 0,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54958714726322, 35.05838481895899]),
            {
              "label": 0,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54950131657475, 35.058486912814764]),
            {
              "label": 0,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54946644785755, 35.05851216181316]),
            {
              "label": 0,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54944096687191, 35.05849020616284]),
            {
              "label": 0,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54943292024487, 35.058462761591585]),
            {
              "label": 0,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5494557190215, 35.05842214360925]),
            {
              "label": 0,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54945303681248, 35.05836725441179]),
            {
              "label": 0,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54957910063618, 35.058337614229835]),
            {
              "label": 0,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54960726383084, 35.05834529872248]),
            {
              "label": 0,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54962335708493, 35.058373841117444]),
            {
              "label": 0,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54962469818943, 35.058404579070064]),
            {
              "label": 0,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54964749696606, 35.05836615662747]),
            {
              "label": 0,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54970248225086, 35.05836725441179]),
            {
              "label": 0,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54970516445988, 35.05842653474345]),
            {
              "label": 0,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54970516445988, 35.05849130394548]),
            {
              "label": 0,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54985805037373, 35.05848032611826]),
            {
              "label": 0,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54990230682247, 35.0584726416383]),
            {
              "label": 0,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54993717553967, 35.05846715272362]),
            {
              "label": 0,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54996265652531, 35.05849020616284]),
            {
              "label": 0,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54966224911564, 35.05866475341996]),
            {
              "label": 0,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54962335708493, 35.05867463344223]),
            {
              "label": 0,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54961665156239, 35.05871744685824]),
            {
              "label": 0,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54967834236973, 35.05871744685824]),
            {
              "label": 0,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54965152027958, 35.05871525129897]),
            {
              "label": 0,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5495656895911, 35.05872732687411]),
            {
              "label": 0,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5495831239497, 35.05870317572205]),
            {
              "label": 0,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54946778896206, 35.05872842465358]),
            {
              "label": 0,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54946242454403, 35.058695491263094]),
            {
              "label": 0,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54942487361782, 35.058730620212486]),
            {
              "label": 0,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5494382846629, 35.0588019758444]),
            {
              "label": 0,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54937525275105, 35.05880526917977]),
            {
              "label": 0,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5493309963023, 35.05883051807972]),
            {
              "label": 0,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54939536931866, 35.05870866462088]),
            {
              "label": 0,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54943560245388, 35.058629624442226]),
            {
              "label": 0,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54950131657475, 35.05864279781065]),
            {
              "label": 0,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54954423191899, 35.05864609115243]),
            {
              "label": 0,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54962738039845, 35.05865267783559]),
            {
              "label": 0,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54964347365254, 35.05860986438561]),
            {
              "label": 0,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54969711783284, 35.05862193997635]),
            {
              "label": 0,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54969980004185, 35.05868670902337]),
            {
              "label": 0,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54975076201313, 35.05867682900258]),
            {
              "label": 0,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54974271538609, 35.0587437935646]),
            {
              "label": 0,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54976149084919, 35.05879429139473]),
            {
              "label": 0,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54980708840245, 35.05879319361616]),
            {
              "label": 0,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54991571786755, 35.05878660694435]),
            {
              "label": 0,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54990901234501, 35.05881405140672]),
            {
              "label": 0,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5497990417754, 35.05902262901935]),
            {
              "label": 0,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54977624299877, 35.059018237917186]),
            {
              "label": 0,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54975478532666, 35.05900177128205]),
            {
              "label": 0,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54977490189427, 35.05899628240293]),
            {
              "label": 0,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54982586386555, 35.058964446896766]),
            {
              "label": 0,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54984061601513, 35.05897322910659]),
            {
              "label": 0,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54987414362782, 35.05896883800181]),
            {
              "label": 0,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54990230682247, 35.05897542465891]),
            {
              "label": 0,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54995729210728, 35.058988597971556]),
            {
              "label": 0,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.54993583443516, 35.05896883800181]),
            {
              "label": 0,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55003641727322, 35.058956762462394]),
            {
              "label": 0,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55004044058674, 35.058884309188386]),
            {
              "label": 0,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55024160626286, 35.05886564697103]),
            {
              "label": 0,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55024160626286, 35.05893919803824]),
            {
              "label": 0,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55024428847187, 35.05897542465891]),
            {
              "label": 0,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55029659154766, 35.058979815763365]),
            {
              "label": 0,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55028988602513, 35.05884149585988]),
            {
              "label": 0,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55034353020542, 35.05879209583755]),
            {
              "label": 0,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55038912775868, 35.058718544637834]),
            {
              "label": 0,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55043338420742, 35.058700980162435]),
            {
              "label": 0,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55054201367253, 35.05880746473659]),
            {
              "label": 0,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55054201367253, 35.058765749146765]),
            {
              "label": 0,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55058090570324, 35.05879099805893]),
            {
              "label": 0,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55057688238972, 35.05875586913552]),
            {
              "label": 0,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55061577442044, 35.058783313608245]),
            {
              "label": 0,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55061309221142, 35.05874708690231]),
            {
              "label": 0,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55063320877903, 35.05874050022676]),
            {
              "label": 0,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55063454988354, 35.05862084219543]),
            {
              "label": 0,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55065734866017, 35.05866036229859]),
            {
              "label": 0,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5506814885413, 35.05872513131513]),
            {
              "label": 0,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55067344191426, 35.05883161585779]),
            {
              "label": 0,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55068282964581, 35.0589128513949]),
            {
              "label": 0,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55070562842243, 35.05889418918409]),
            {
              "label": 0,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55070562842243, 35.058829420301635]),
            {
              "label": 0,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55052860262745, 35.058886504743064]),
            {
              "label": 0,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55060638668888, 35.058911753617934]),
            {
              "label": 0,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55058895233029, 35.05889748251571]),
            {
              "label": 0,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55054871919506, 35.0589600557915]),
            {
              "label": 0,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55050580385083, 35.05892602471763]),
            {
              "label": 0,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55049373391026, 35.058850278082936]),
            {
              "label": 0,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55049105170124, 35.05878221582952]),
            {
              "label": 0,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55049775722378, 35.058650482274594]),
            {
              "label": 0,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55054737809056, 35.05864609115243]),
            {
              "label": 0,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55054737809056, 35.058731717991904]),
            {
              "label": 0,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55057822349423, 35.058716349078615]),
            {
              "label": 0,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55059968116635, 35.05867573122241]),
            {
              "label": 0,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55058492901676, 35.05860437548014]),
            {
              "label": 0,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55058761122578, 35.05853192189344]),
            {
              "label": 0,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55060772779339, 35.05845727267624]),
            {
              "label": 0,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55063589098805, 35.058453979326856]),
            {
              "label": 0,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5522286413506, 35.05710791501825]),
            {
              "label": 0,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55233190639767, 35.05711340402433]),
            {
              "label": 0,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55234397633824, 35.05710352381313]),
            {
              "label": 0,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55228094442639, 35.05717488086701]),
            {
              "label": 0,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55229167326245, 35.05715841386013]),
            {
              "label": 0,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55230910762104, 35.05718585886978]),
            {
              "label": 0,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55232654197964, 35.05716939186508]),
            {
              "label": 0,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55279592855725, 35.0571726852663]),
            {
              "label": 0,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55281470402035, 35.05713975124828]),
            {
              "label": 0,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5527878819302, 35.0571639028628]),
            {
              "label": 0,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55280799849781, 35.05730771460125]),
            {
              "label": 0,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55279458745274, 35.057294541017406]),
            {
              "label": 0,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5527516721085, 35.05732527937635]),
            {
              "label": 0,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55272082670483, 35.05730442120547]),
            {
              "label": 0,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.552031498988, 35.05718036986859]),
            {
              "label": 0,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55204759224209, 35.057161707261784]),
            {
              "label": 0,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55211330636295, 35.057178174268]),
            {
              "label": 0,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55213208182606, 35.057157316059545]),
            {
              "label": 0,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55215488060269, 35.05716939186508]),
            {
              "label": 0,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55219913705143, 35.057161707261784]),
            {
              "label": 0,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55194432719502, 35.05710242601184]),
            {
              "label": 0,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55193225725445, 35.05711669742778]),
            {
              "label": 0,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55190141185078, 35.05710352381313]),
            {
              "label": 0,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55185849650654, 35.05710242601184]),
            {
              "label": 0,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55182094558033, 35.0571825654691]),
            {
              "label": 0,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.551851790984, 35.057159511660686]),
            {
              "label": 0,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5518705664471, 35.05717597866737]),
            {
              "label": 0,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5518866597012, 35.057157316059545]),
            {
              "label": 0,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5519040940598, 35.0571825654691]),
            {
              "label": 0,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55192018731388, 35.0571639028628]),
            {
              "label": 0,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55196578486714, 35.05716719626422]),
            {
              "label": 0,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55200333579334, 35.05716500066328]),
            {
              "label": 0,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55211598857197, 35.057042046916706]),
            {
              "label": 0,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55207441433224, 35.05701789526616]),
            {
              "label": 0,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55203284009251, 35.05701460185874]),
            {
              "label": 0,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55202077015194, 35.05708486118877]),
            {
              "label": 0,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55218036158833, 35.057068394163714]),
            {
              "label": 0,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5521401284531, 35.05701460185874]),
            {
              "label": 0,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5522474168137, 35.057002526030296]),
            {
              "label": 0,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55226887448582, 35.05702118867349]),
            {
              "label": 0,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55230910762104, 35.056961907321515]),
            {
              "label": 0,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55220181926045, 35.056961907321515]),
            {
              "label": 0,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55212135299, 35.05696300512475]),
            {
              "label": 0,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55215085728916, 35.05695422269867]),
            {
              "label": 0,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55203954561505, 35.05696080951831]),
            {
              "label": 0,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55200333579334, 35.05696629853426]),
            {
              "label": 0,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5519604204491, 35.05696410292793]),
            {
              "label": 0,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5519228695229, 35.05696520073111]),
            {
              "label": 0,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5518705664471, 35.056961907321515]),
            {
              "label": 0,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55184508546147, 35.056970689746755]),
            {
              "label": 0,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55176461919102, 35.05701130845115]),
            {
              "label": 0,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55178473575863, 35.05702777548771]),
            {
              "label": 0,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5517257271603, 35.057013504056215]),
            {
              "label": 0,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55170561059269, 35.05710132821049]),
            {
              "label": 0,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55167476518902, 35.057128773239356]),
            {
              "label": 0,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55178339465412, 35.057109012819495]),
            {
              "label": 0,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55175791366848, 35.057126577637376]),
            {
              "label": 0,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5516881762341, 35.05697508095901]),
            {
              "label": 0,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5516707418755, 35.05695971171508]),
            {
              "label": 0,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55171902163777, 35.05696520073111]),
            {
              "label": 0,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55165464862141, 35.05702009087108]),
            {
              "label": 0,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55163319094929, 35.05717488086701]),
            {
              "label": 0,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55166805966648, 35.0571726852663]),
            {
              "label": 0,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55171097501072, 35.0571726852663]),
            {
              "label": 0,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55163721426281, 35.05710352381313]),
            {
              "label": 0,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55148835166248, 35.05709364360077]),
            {
              "label": 0,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55144007190022, 35.05703765570806]),
            {
              "label": 0,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55145884736332, 35.057114501825495]),
            {
              "label": 0,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55142129643711, 35.05710791501825]),
            {
              "label": 0,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.551399838765, 35.05710571941573]),
            {
              "label": 0,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55137569888386, 35.05718036986859]),
            {
              "label": 0,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55128986819538, 35.05711999083111]),
            {
              "label": 0,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55126304610523, 35.0570694919655]),
            {
              "label": 0,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55130730255398, 35.05700801504345]),
            {
              "label": 0,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55133412464413, 35.05698056997402]),
            {
              "label": 0,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55127913935932, 35.05693995125433]),
            {
              "label": 0,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55119330867085, 35.056993743608494]),
            {
              "label": 0,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55116514547619, 35.05702777548771]),
            {
              "label": 0,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55112625344547, 35.05708705679185]),
            {
              "label": 0,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55117855652126, 35.05714743585367]),
            {
              "label": 0,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5511852620438, 35.057128773239356]),
            {
              "label": 0,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55121744855198, 35.05717597866737]),
            {
              "label": 0,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55121878965649, 35.05730442120547]),
            {
              "label": 0,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5512737749413, 35.05729893221224]),
            {
              "label": 0,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55130596144947, 35.05722208626839]),
            {
              "label": 0,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55132741912159, 35.05733955075337]),
            {
              "label": 0,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55143202527317, 35.05740980980379]),
            {
              "label": 0,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55132741912159, 35.057421885572005]),
            {
              "label": 0,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55129925592693, 35.05742517896302]),
            {
              "label": 0,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55124829395565, 35.057415298789564]),
            {
              "label": 0,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55115441664013, 35.057413103195294]),
            {
              "label": 0,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55112759454998, 35.05742517896302]),
            {
              "label": 0,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55103103502545, 35.05744274371286]),
            {
              "label": 0,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55107126816067, 35.057421885572005]),
            {
              "label": 0,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55103371723446, 35.05740432081766]),
            {
              "label": 0,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55098811968121, 35.0573977340338]),
            {
              "label": 0,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55091704114231, 35.05738895165452]),
            {
              "label": 0,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55329079612049, 35.05690811494638]),
            {
              "label": 0,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55337930901798, 35.056881767647674]),
            {
              "label": 0,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55330152495655, 35.056842246683686]),
            {
              "label": 0,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5533733638505, 35.05684411262659]),
            {
              "label": 0,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55349607491293, 35.0568572862831]),
            {
              "label": 0,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55353429639139, 35.05683697689512]),
            {
              "label": 0,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55354502522745, 35.056749701359536]),
            {
              "label": 0,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55361073934831, 35.056747505747374]),
            {
              "label": 0,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5534819933156, 35.056751348068616]),
            {
              "label": 0,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55348601662912, 35.056722256203294]),
            {
              "label": 0,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55352088534632, 35.05673378317005]),
            {
              "label": 0,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55365968966284, 35.05674915245651]),
            {
              "label": 0,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55383805656233, 35.056740370007454]),
            {
              "label": 0,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55383805656233, 35.05672939194479]),
            {
              "label": 0,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55379581177034, 35.05672774523528]),
            {
              "label": 0,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5537689896802, 35.0567085336217]),
            {
              "label": 0,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55380117618837, 35.056699751168274]),
            {
              "label": 0,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5538139166812, 35.05668767529327]),
            {
              "label": 0,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55368852340975, 35.05669481103782]),
            {
              "label": 0,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55361073934831, 35.05670578910511]),
            {
              "label": 0,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55363957309523, 35.05669481103782]),
            {
              "label": 0,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55348400497236, 35.05670743581509]),
            {
              "label": 0,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55353764915266, 35.05669041981047]),
            {
              "label": 0,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5534270080308, 35.05667944174112]),
            {
              "label": 0,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55324662947454, 35.05675025026259]),
            {
              "label": 0,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55321578407087, 35.056761777225375]),
            {
              "label": 0,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55323053622045, 35.05677440199229]),
            {
              "label": 0,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55326138162413, 35.05675738600164]),
            {
              "label": 0,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55327948653498, 35.05682764555299]),
            {
              "label": 0,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55341493809023, 35.05682325433282]),
            {
              "label": 0,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55341896140375, 35.05683752579756]),
            {
              "label": 0,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55342097306051, 35.05685618847846]),
            {
              "label": 0,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55342030250826, 35.05687375335072]),
            {
              "label": 0,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55342097306051, 35.05689406272956]),
            {
              "label": 0,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55342365526953, 35.05691492100525]),
            {
              "label": 0,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55341896140375, 35.056937974882736]),
            {
              "label": 0,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55347059392729, 35.056938523784495]),
            {
              "label": 0,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5535356374959, 35.056938523784495]),
            {
              "label": 0,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55358123504915, 35.056938523784495]),
            {
              "label": 0,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55365030193128, 35.0569505996224]),
            {
              "label": 0,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55372607433596, 35.05694346390022]),
            {
              "label": 0,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55370059335031, 35.05690833418192]),
            {
              "label": 0,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5536704184989, 35.056883084687584]),
            {
              "label": 0,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55361275100508, 35.05689570943572]),
            {
              "label": 0,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.553554412959, 35.05690010065202]),
            {
              "label": 0,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55358861112394, 35.056870459937464]),
            {
              "label": 0,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55370394611158, 35.056846857138545]),
            {
              "label": 0,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55373546206751, 35.05683752579756]),
            {
              "label": 0,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55380452894964, 35.05683862360245]),
            {
              "label": 0,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55383336269655, 35.0568545417715]),
            {
              "label": 0,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55386286699571, 35.05688967151295]),
            {
              "label": 0,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55387359583177, 35.056919312220515]),
            {
              "label": 0,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55385616147318, 35.05695389303242]),
            {
              "label": 0,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55381928109922, 35.056740918910556]),
            {
              "label": 0,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55374954366484, 35.05674256561979]),
            {
              "label": 0,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55370461666384, 35.056766717351785]),
            {
              "label": 0,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55369858169355, 35.05674531013516]),
            {
              "label": 0,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55362347984114, 35.05677495089514]),
            {
              "label": 0,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55363353812494, 35.05674421232903]),
            {
              "label": 0,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55356983566084, 35.05677275528367]),
            {
              "label": 0,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55356849455633, 35.05674640794127]),
            {
              "label": 0,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55356849455633, 35.05671951168716]),
            {
              "label": 0,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55356916510858, 35.05668987090706]),
            {
              "label": 0,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55372473323145, 35.056725000719325]),
            {
              "label": 0,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55371802770891, 35.05668712638984]),
            {
              "label": 0,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55302333557405, 35.05673927220124]),
            {
              "label": 0,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55300254845419, 35.056751348068616]),
            {
              "label": 0,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55298980796137, 35.05670194678173]),
            {
              "label": 0,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55302601778307, 35.056725000719325]),
            {
              "label": 0,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5530588748435, 35.05672774523528]),
            {
              "label": 0,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55292677604952, 35.05675079916559]),
            {
              "label": 0,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5529328110198, 35.0567365276857]),
            {
              "label": 0,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55292677604952, 35.05669316432759]),
            {
              "label": 0,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55293750488558, 35.056671208188114]),
            {
              "label": 0,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55292945825853, 35.056641018486715]),
            {
              "label": 0,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55297907912531, 35.05663827396786]),
            {
              "label": 0,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55286441468992, 35.056720609493624]),
            {
              "label": 0,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55283491039076, 35.056749701359536]),
            {
              "label": 0,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5528067471961, 35.05677220638079]),
            {
              "label": 0,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55275712632933, 35.056751348068616]),
            {
              "label": 0,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55274371528425, 35.0567271963321]),
            {
              "label": 0,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55267397784986, 35.05674695684432]),
            {
              "label": 0,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55265587293901, 35.05677165747789]),
            {
              "label": 0,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55259619378843, 35.056740370007454]),
            {
              "label": 0,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55260088765421, 35.056722256203294]),
            {
              "label": 0,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55270348214903, 35.05677330418654]),
            {
              "label": 0,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55273365700045, 35.05682764555299]),
            {
              "label": 0,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55274103307524, 35.05691217649561]),
            {
              "label": 0,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55276852571764, 35.05695279522909]),
            {
              "label": 0,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55279400670328, 35.05697255568674]),
            {
              "label": 0,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55281211161413, 35.05694895291734]),
            {
              "label": 0,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55283558094301, 35.05697584909589]),
            {
              "label": 0,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55287447297373, 35.05697200678521]),
            {
              "label": 0,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5529153766612, 35.05696981117903]),
            {
              "label": 0,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55296298587122, 35.05698298481523]),
            {
              "label": 0,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55303205275335, 35.05698408261816]),
            {
              "label": 0,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55306490981378, 35.05698298481523]),
            {
              "label": 0,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55311453068056, 35.05698518042106]),
            {
              "label": 0,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55315409326353, 35.05698518042106]),
            {
              "label": 0,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5531587871293, 35.05696212655692]),
            {
              "label": 0,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5531225773076, 35.05697200678521]),
            {
              "label": 0,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55679609836157, 35.056497284401864]),
            {
              "label": 0,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55682694376524, 35.05650606687708]),
            {
              "label": 0,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5568376726013, 35.05645666544177]),
            {
              "label": 0,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55679743946608, 35.05644129610025]),
            {
              "label": 0,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55668478668746, 35.0564391004798]),
            {
              "label": 0,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55667942226943, 35.056403970544515]),
            {
              "label": 0,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55666198791083, 35.05648411068729]),
            {
              "label": 0,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55663650692519, 35.056429220187034]),
            {
              "label": 0,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55662577808913, 35.05638530776025]),
            {
              "label": 0,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55671294988211, 35.05635566685883]),
            {
              "label": 0,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55670222104605, 35.05615366931816]),
            {
              "label": 0,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5564594811302, 35.05635237342469]),
            {
              "label": 0,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55647289217528, 35.056254668150956]),
            {
              "label": 0,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55637365044173, 35.05632931938186]),
            {
              "label": 0,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55601155222472, 35.056338101875134]),
            {
              "label": 0,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5559900945526, 35.056403970544515]),
            {
              "label": 0,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.555972660194, 35.05649399097342]),
            {
              "label": 0,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55611213506278, 35.0565829134948]),
            {
              "label": 0,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55617516697463, 35.056591695960776]),
            {
              "label": 0,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55636292160567, 35.056591695960776]),
            {
              "label": 0,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55644607008513, 35.05658401130309]),
            {
              "label": 0,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55653592408713, 35.05658401130309]),
            {
              "label": 0,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55657749832686, 35.056594989385275]),
            {
              "label": 0,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55660566152152, 35.05660377184997]),
            {
              "label": 0,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55677061737593, 35.05660377184997]),
            {
              "label": 0,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55680816830214, 35.05657962006979]),
            {
              "label": 0,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55690204561766, 35.05644458953081]),
            {
              "label": 0,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55694093764838, 35.056411655219165]),
            {
              "label": 0,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55689399899062, 35.05638530776025]),
            {
              "label": 0,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55688327015456, 35.056294189399345]),
            {
              "label": 0,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55687790573653, 35.056254668150956]),
            {
              "label": 0,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55706029594954, 35.056301874084326]),
            {
              "label": 0,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55700665176924, 35.05629199377495]),
            {
              "label": 0,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55699592293318, 35.056212951256896]),
            {
              "label": 0,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55703079165038, 35.05617123434154]),
            {
              "label": 0,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5573767966133, 35.05616025620237]),
            {
              "label": 0,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55754711688574, 35.05616245183033]),
            {
              "label": 0,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55756455124434, 35.05625905940172]),
            {
              "label": 0,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5576651340824, 35.056384209949286]),
            {
              "label": 0,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55785959423598, 35.05648191506801]),
            {
              "label": 0,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55794542492445, 35.05648411068729]),
            {
              "label": 0,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55772548378523, 35.05649948002077]),
            {
              "label": 0,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55762087763365, 35.05649399097342]),
            {
              "label": 0,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55747872055586, 35.056330417193585]),
            {
              "label": 0,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55794944823798, 35.05643800266955]),
            {
              "label": 0,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55785691202696, 35.0564336114284]),
            {
              "label": 0,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55773889483031, 35.05637542746098]),
            {
              "label": 0,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55763965309676, 35.056256863776376]),
            {
              "label": 0,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55762624205168, 35.05615806057436]),
            {
              "label": 0,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5578086322647, 35.05618001685182]),
            {
              "label": 0,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55787166417655, 35.05617562559678]),
            {
              "label": 0,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55791592062529, 35.056222831575845]),
            {
              "label": 0,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5578448420864, 35.0562392987714]),
            {
              "label": 0,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55783008993681, 35.056308460956586]),
            {
              "label": 0,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55792664946135, 35.05632053688764]),
            {
              "label": 0,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55797492922362, 35.0563940902475]),
            {
              "label": 0,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5580245500904, 35.0563787208942]),
            {
              "label": 0,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55800041020926, 35.056262352839624]),
            {
              "label": 0,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55802320898589, 35.056149278061724]),
            {
              "label": 0,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55798029364165, 35.05610207204016]),
            {
              "label": 0,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55786898196753, 35.05610097422538]),
            {
              "label": 0,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55769732059058, 35.05611963707462]),
            {
              "label": 0,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55747737945136, 35.056104267669674]),
            {
              "label": 0,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55731376470145, 35.056089996076764]),
            {
              "label": 0,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55697714747008, 35.05609328952149]),
            {
              "label": 0,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5569275266033, 35.05616464745822]),
            {
              "label": 0,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55713405669745, 35.056220635949515]),
            {
              "label": 0,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55726146162566, 35.056220635949515]),
            {
              "label": 0,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55725877941664, 35.05629748283586]),
            {
              "label": 0,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55730169476088, 35.05635566685883]),
            {
              "label": 0,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55738081992682, 35.05644239391046]),
            {
              "label": 0,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55748810828742, 35.056453372011696]),
            {
              "label": 0,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55748676718291, 35.056533512105986]),
            {
              "label": 0,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55757259787138, 35.05658181568648]),
            {
              "label": 0,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55767988623198, 35.056576326644674]),
            {
              "label": 0,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55782606662329, 35.05658510911139]),
            {
              "label": 0,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55792128504332, 35.05658181568648]),
            {
              "label": 0,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55737411440428, 35.05652033839726]),
            {
              "label": 0,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55725341499861, 35.05644239391046]),
            {
              "label": 0,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55711930454787, 35.056443491720664]),
            {
              "label": 0,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55718770087775, 35.05635676467018]),
            {
              "label": 0,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55713808001097, 35.05631065658052]),
            {
              "label": 0,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55718904198226, 35.05631834126395]),
            {
              "label": 0,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5571970886093, 35.05622392938898]),
            {
              "label": 0,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55722525180396, 35.056192092801886]),
            {
              "label": 0,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55728291929778, 35.056181114665506]),
            {
              "label": 0,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55734863341864, 35.05630955876857]),
            {
              "label": 0,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55739825428542, 35.0563907968149]),
            {
              "label": 0,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55748006166037, 35.05639957930154]),
            {
              "label": 0,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55756723345336, 35.056384209949286]),
            {
              "label": 0,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55758466781195, 35.05635017780184]),
            {
              "label": 0,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55747067392882, 35.056226125015236]),
            {
              "label": 0,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5574492162567, 35.05629199377495]),
            {
              "label": 0,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55739020765837, 35.0562338097066]),
            {
              "label": 0,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55746396840628, 35.05619538624249]),
            {
              "label": 0,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55751627148207, 35.05622832064139]),
            {
              "label": 0,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55768793285903, 35.05646435011146]),
            {
              "label": 0,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55779790342864, 35.05648520849694]),
            {
              "label": 0,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55770670832213, 35.0564336114284]),
            {
              "label": 0,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5575578457218, 35.05610865892852]),
            {
              "label": 0,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55753772915419, 35.05604498565202]),
            {
              "label": 0,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55749079049643, 35.05604388783648]),
            {
              "label": 0,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5573942309719, 35.05604937691406]),
            {
              "label": 0,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55722391069945, 35.05604608346754]),
            {
              "label": 0,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55721318186339, 35.05603071404876]),
            {
              "label": 0,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55708041251715, 35.05604827909859]),
            {
              "label": 0,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5571072346073, 35.05609438733638]),
            {
              "label": 0,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55803125561293, 35.056338101875134]),
            {
              "label": 0,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55809965194281, 35.05614159336238]),
            {
              "label": 0,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5580808764797, 35.05607462666622]),
            {
              "label": 0,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55803930223998, 35.05606145288346]),
            {
              "label": 0,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55796285928305, 35.05603071404876]),
            {
              "label": 0,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55815463722762, 35.05670147670598]),
            {
              "label": 0,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55821364582594, 35.05674758457493]),
            {
              "label": 0,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5584577268463, 35.05674099773811]),
            {
              "label": 0,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55844431580122, 35.056251374712744]),
            {
              "label": 0,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55845236242827, 35.05601424681112]),
            {
              "label": 0,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55836921394881, 35.056148180247575]),
            {
              "label": 0,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55790250958022, 35.05694079821889]),
            {
              "label": 0,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55795615376051, 35.056846387063636]),
            {
              "label": 0,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55766111076888, 35.05682443096536]),
            {
              "label": 0,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55783008993681, 35.05674978018709]),
            {
              "label": 0,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55740898312148, 35.05669269425179]),
            {
              "label": 0,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5576101487976, 35.0566904986381]),
            {
              "label": 0,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5572319573265, 35.05663341266135]),
            {
              "label": 0,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55718904198226, 35.05654119676845]),
            {
              "label": 0,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55642729462203, 35.05652363182464]),
            {
              "label": 0,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5565131253105, 35.05652363182464]),
            {
              "label": 0,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55654531181868, 35.05642043770356]),
            {
              "label": 0,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55648630322035, 35.05648191506801]),
            {
              "label": 0,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55652921856459, 35.056866147547005]),
            {
              "label": 0,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55645411671217, 35.056837604625045]),
            {
              "label": 0,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55632537067946, 35.05676075824701]),
            {
              "label": 0,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55632805288847, 35.05687273437375]),
            {
              "label": 0,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55626904429015, 35.05687712559128]),
            {
              "label": 0,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55597400129851, 35.0568024748612]),
            {
              "label": 0,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55578892887648, 35.05671465038549]),
            {
              "label": 0,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55578624666747, 35.056683911796654]),
            {
              "label": 0,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5558452552658, 35.056703672319365]),
            {
              "label": 0,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55591231049117, 35.056694889865426]),
            {
              "label": 0,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55597400129851, 35.05670586793272]),
            {
              "label": 0,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5560088700157, 35.05669708547901]),
            {
              "label": 0,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55605983198699, 35.05669708547901]),
            {
              "label": 0,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55616712034758, 35.05669708547901]),
            {
              "label": 0,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55635219276961, 35.05670147670598]),
            {
              "label": 0,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55574869574126, 35.05650387125834]),
            {
              "label": 0,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55583184422072, 35.056501675639595]),
            {
              "label": 0,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55589621723708, 35.05646215449161]),
            {
              "label": 0,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55587744177397, 35.05642482894541]),
            {
              "label": 0,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5559900945526, 35.056284309089044]),
            {
              "label": 0,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55620467127379, 35.056308460956586]),
            {
              "label": 0,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55632000626143, 35.056271135340104]),
            {
              "label": 0,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5564594811302, 35.056058159437434]),
            {
              "label": 0,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5563870614868, 35.05611305018715]),
            {
              "label": 0,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55646216333922, 35.05591105204629]),
            {
              "label": 0,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55710052908476, 35.05588470442586]),
            {
              "label": 0,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55703347385939, 35.055871530612464]),
            {
              "label": 0,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55696910084303, 35.05590446514199]),
            {
              "label": 0,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55692082108077, 35.055886900061225]),
            {
              "label": 0,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55695236241478, 35.05553526424182]),
            {
              "label": 0,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55703551089424, 35.05574824150831]),
            {
              "label": 0,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55748612200874, 35.05573726331227]),
            {
              "label": 0,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55748343979973, 35.0554759818111]),
            {
              "label": 0,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55743784224647, 35.05551989472687]),
            {
              "label": 0,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55734128272194, 35.05546939487169]),
            {
              "label": 0,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55728763854164, 35.055445242756]),
            {
              "label": 0,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55727154528755, 35.05551550343637]),
            {
              "label": 0,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55726618086952, 35.055675785387194]),
            {
              "label": 0,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55725813424247, 35.05564504640731]),
            {
              "label": 0,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55737346923011, 35.05564285076545]),
            {
              "label": 0,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55738151585716, 35.05552648166221]),
            {
              "label": 0,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5571374348368, 35.05557917712573]),
            {
              "label": 0,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55711329495567, 35.05568237230996]),
            {
              "label": 0,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55714548146385, 35.05574385023007]),
            {
              "label": 0,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55730104958671, 35.05586680593141]),
            {
              "label": 0,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55768996989387, 35.05564724204911]),
            {
              "label": 0,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55767924105781, 35.05560332920181]),
            {
              "label": 0,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55820763623375, 35.05564285076545]),
            {
              "label": 0,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5582183650698, 35.05560332920181]),
            {
              "label": 0,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55835783993858, 35.05562748127076]),
            {
              "label": 0,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55834979331154, 35.055467199225106]),
            {
              "label": 0,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55843830620903, 35.0554496340503]),
            {
              "label": 0,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5584865859713, 35.055440851461455]),
            {
              "label": 0,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55879235779899, 35.05572408947508]),
            {
              "label": 0,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55892915045875, 35.055726285114744]),
            {
              "label": 0,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55715084588188, 35.05546061228499]),
            {
              "label": 0,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55708915507454, 35.055467199225106]),
            {
              "label": 0,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55678874766487, 35.05520372120614]),
            {
              "label": 0,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55697650229591, 35.05519493859086]),
            {
              "label": 0,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55705965077537, 35.05523446035215]),
            {
              "label": 0,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55744052445549, 35.055260808182396]),
            {
              "label": 0,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55743784224647, 35.05520372120614]),
            {
              "label": 0,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5577489784922, 35.05520811251341]),
            {
              "label": 0,
              "system:index": "823"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55790454661506, 35.05519713424477]),
            {
              "label": 0,
              "system:index": "824"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5579474619593, 35.055172982048546]),
            {
              "label": 0,
              "system:index": "825"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55795014416832, 35.055085155820244]),
            {
              "label": 0,
              "system:index": "826"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55777848279136, 35.055170786393994]),
            {
              "label": 0,
              "system:index": "827"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55771947419304, 35.05516200377518]),
            {
              "label": 0,
              "system:index": "828"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56095088658792, 35.057246957671865]),
            {
              "label": 0,
              "system:index": "829"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56095625100595, 35.057174502880635]),
            {
              "label": 0,
              "system:index": "830"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56092138228875, 35.05721402368382]),
            {
              "label": 0,
              "system:index": "831"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56112254796487, 35.057137177660046]),
            {
              "label": 0,
              "system:index": "832"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56131298480493, 35.05721402368382]),
            {
              "label": 0,
              "system:index": "833"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56155706582528, 35.05727550045076]),
            {
              "label": 0,
              "system:index": "834"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56160534558755, 35.057251348869265]),
            {
              "label": 0,
              "system:index": "835"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56159998116952, 35.05720524128476]),
            {
              "label": 0,
              "system:index": "836"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56155706582528, 35.05718767648381]),
            {
              "label": 0,
              "system:index": "837"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56138540444833, 35.05680783673903]),
            {
              "label": 0,
              "system:index": "838"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56142295537454, 35.05676831573924]),
            {
              "label": 0,
              "system:index": "839"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56139076886636, 35.056750750844316]),
            {
              "label": 0,
              "system:index": "840"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56142295537454, 35.05712619965074]),
            {
              "label": 0,
              "system:index": "841"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56149805722696, 35.05712619965074]),
            {
              "label": 0,
              "system:index": "842"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56198353705865, 35.05748188640125]),
            {
              "label": 0,
              "system:index": "843"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56204791007501, 35.057473104031]),
            {
              "label": 0,
              "system:index": "844"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56211228309137, 35.05747529962364]),
            {
              "label": 0,
              "system:index": "845"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56214178739053, 35.057448952507954]),
            {
              "label": 0,
              "system:index": "846"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56214178739053, 35.05742260538377]),
            {
              "label": 0,
              "system:index": "847"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56206132112008, 35.05742480097776]),
            {
              "label": 0,
              "system:index": "848"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56200231252176, 35.05742260538377]),
            {
              "label": 0,
              "system:index": "849"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56203449902993, 35.05712839525272]),
            {
              "label": 0,
              "system:index": "850"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56209350762826, 35.057115221639954]),
            {
              "label": 0,
              "system:index": "851"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5621551984356, 35.05705813596014]),
            {
              "label": 0,
              "system:index": "852"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56220347819787, 35.057218414882975]),
            {
              "label": 0,
              "system:index": "853"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56192184625131, 35.05719426328459]),
            {
              "label": 0,
              "system:index": "854"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56213105855447, 35.05675514206841]),
            {
              "label": 0,
              "system:index": "855"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56217665610772, 35.05686492259385]),
            {
              "label": 0,
              "system:index": "856"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56204791007501, 35.0566651219274]),
            {
              "label": 0,
              "system:index": "857"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56170726953012, 35.0566563394693]),
            {
              "label": 0,
              "system:index": "858"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56170726953012, 35.05660144908481]),
            {
              "label": 0,
              "system:index": "859"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56165898976785, 35.0566497526251]),
            {
              "label": 0,
              "system:index": "860"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56162948546869, 35.05659705785244]),
            {
              "label": 0,
              "system:index": "861"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56158120570642, 35.0566497526251]),
            {
              "label": 0,
              "system:index": "862"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56153560815316, 35.05660584031694]),
            {
              "label": 0,
              "system:index": "863"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56143100200158, 35.056627796473975]),
            {
              "label": 0,
              "system:index": "864"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5614336842106, 35.05659486223619]),
            {
              "label": 0,
              "system:index": "865"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56146855292779, 35.05653338495679]),
            {
              "label": 0,
              "system:index": "866"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56127006946069, 35.05652240686632]),
            {
              "label": 0,
              "system:index": "867"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56114400563699, 35.05652679810268]),
            {
              "label": 0,
              "system:index": "868"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56099380193216, 35.05653338495679]),
            {
              "label": 0,
              "system:index": "869"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56080872951013, 35.056682686840745]),
            {
              "label": 0,
              "system:index": "870"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55991555390817, 35.0568385752812]),
            {
              "label": 0,
              "system:index": "871"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55989946065408, 35.05698348539553]),
            {
              "label": 0,
              "system:index": "872"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55988336739999, 35.05721621928344]),
            {
              "label": 0,
              "system:index": "873"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55988336739999, 35.05729306523281]),
            {
              "label": 0,
              "system:index": "874"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55980826554757, 35.05748188640125]),
            {
              "label": 0,
              "system:index": "875"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55980558333856, 35.05740284503502]),
            {
              "label": 0,
              "system:index": "876"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56005234656793, 35.057479690808776]),
            {
              "label": 0,
              "system:index": "877"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56006039319497, 35.05712619965074]),
            {
              "label": 0,
              "system:index": "878"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56011671958429, 35.05733697717142]),
            {
              "label": 0,
              "system:index": "879"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56021327910882, 35.057174502880635]),
            {
              "label": 0,
              "system:index": "880"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56045467792016, 35.057093265613986]),
            {
              "label": 0,
              "system:index": "881"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56040908036691, 35.05688248746422]),
            {
              "label": 0,
              "system:index": "882"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56012476621133, 35.056823206011565]),
            {
              "label": 0,
              "system:index": "883"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56014354167444, 35.0566585350839]),
            {
              "label": 0,
              "system:index": "884"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56021596131784, 35.05651362439287]),
            {
              "label": 0,
              "system:index": "885"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56032861409646, 35.05648288572839]),
            {
              "label": 0,
              "system:index": "886"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56054855523568, 35.05642579960648]),
            {
              "label": 0,
              "system:index": "887"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56128079829675, 35.056423603985614]),
            {
              "label": 0,
              "system:index": "888"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5618842953251, 35.056423603985614]),
            {
              "label": 0,
              "system:index": "889"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56483204303247, 35.05716352487634]),
            {
              "label": 0,
              "system:index": "890"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56505734858972, 35.05616232468056]),
            {
              "label": 0,
              "system:index": "891"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56511635718805, 35.05598228299222]),
            {
              "label": 0,
              "system:index": "892"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56373233733636, 35.05628527975179]),
            {
              "label": 0,
              "system:index": "893"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56374306617242, 35.056395060908926]),
            {
              "label": 0,
              "system:index": "894"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56389863429528, 35.0563731046893]),
            {
              "label": 0,
              "system:index": "895"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56405420241815, 35.056377495933695]),
            {
              "label": 0,
              "system:index": "896"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56466574607354, 35.05652679810268]),
            {
              "label": 0,
              "system:index": "897"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56468720374566, 35.05644336457132]),
            {
              "label": 0,
              "system:index": "898"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56468720374566, 35.05633358347911]),
            {
              "label": 0,
              "system:index": "899"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5646925681637, 35.05624136724759]),
            {
              "label": 0,
              "system:index": "900"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56470866141778, 35.05618428095685]),
            {
              "label": 0,
              "system:index": "901"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56446189818841, 35.05624136724759]),
            {
              "label": 0,
              "system:index": "902"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56418294845086, 35.056276497252846]),
            {
              "label": 0,
              "system:index": "903"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56414003310663, 35.05623258474393]),
            {
              "label": 0,
              "system:index": "904"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56395227847558, 35.056289671000904]),
            {
              "label": 0,
              "system:index": "905"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56360359130365, 35.05624136724759]),
            {
              "label": 0,
              "system:index": "906"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56334609923822, 35.056276497252846]),
            {
              "label": 0,
              "system:index": "907"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56324417529565, 35.05643019084805]),
            {
              "label": 0,
              "system:index": "908"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56298131881219, 35.05645653829249]),
            {
              "label": 0,
              "system:index": "909"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56323881087762, 35.05669366490967]),
            {
              "label": 0,
              "system:index": "910"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56320662436944, 35.05685614015724]),
            {
              "label": 0,
              "system:index": "911"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56333000598413, 35.05683418406158]),
            {
              "label": 0,
              "system:index": "912"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5635231250332, 35.05674635961999]),
            {
              "label": 0,
              "system:index": "913"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56380743918878, 35.05666731754175]),
            {
              "label": 0,
              "system:index": "914"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56416149077874, 35.05682540162169]),
            {
              "label": 0,
              "system:index": "915"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5641883128689, 35.057062527167695]),
            {
              "label": 0,
              "system:index": "916"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.564027380328, 35.05719426328459]),
            {
              "label": 0,
              "system:index": "917"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56435997424585, 35.05722939287989]),
            {
              "label": 0,
              "system:index": "918"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56432242331964, 35.05742260538377]),
            {
              "label": 0,
              "system:index": "919"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5643331521557, 35.05763777331592]),
            {
              "label": 0,
              "system:index": "920"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56451017795068, 35.05773437914182]),
            {
              "label": 0,
              "system:index": "921"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56415612636071, 35.05778707318053]),
            {
              "label": 0,
              "system:index": "922"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56295986114007, 35.058173495091815]),
            {
              "label": 0,
              "system:index": "923"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56268091140252, 35.05816910394401]),
            {
              "label": 0,
              "system:index": "924"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56306178508264, 35.058195450827334]),
            {
              "label": 0,
              "system:index": "925"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56305642066461, 35.05813397475302]),
            {
              "label": 0,
              "system:index": "926"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56346411643487, 35.05791002580523]),
            {
              "label": 0,
              "system:index": "927"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56375915942651, 35.05781342018711]),
            {
              "label": 0,
              "system:index": "928"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56431705890161, 35.05782220252075]),
            {
              "label": 0,
              "system:index": "929"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56479985652429, 35.05782220252075]),
            {
              "label": 0,
              "system:index": "930"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56352848945123, 35.05716352487634]),
            {
              "label": 0,
              "system:index": "931"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56378598151666, 35.05721182808413]),
            {
              "label": 0,
              "system:index": "932"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56379671035272, 35.057115221639954]),
            {
              "label": 0,
              "system:index": "933"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56354994712335, 35.057097656819664]),
            {
              "label": 0,
              "system:index": "934"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56330318389398, 35.05705813596014]),
            {
              "label": 0,
              "system:index": "935"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56239659724694, 35.056777098185286]),
            {
              "label": 0,
              "system:index": "936"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56218202052575, 35.05670244736376]),
            {
              "label": 0,
              "system:index": "937"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56231076655847, 35.05663657893514]),
            {
              "label": 0,
              "system:index": "938"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56241805491906, 35.05663657893514]),
            {
              "label": 0,
              "system:index": "939"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56258971629602, 35.0566585350839]),
            {
              "label": 0,
              "system:index": "940"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56266481814843, 35.05673757717064]),
            {
              "label": 0,
              "system:index": "941"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5628740304516, 35.056772706962384]),
            {
              "label": 0,
              "system:index": "942"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56297058997613, 35.056777098185286]),
            {
              "label": 0,
              "system:index": "943"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55889899669152, 35.056878096246976]),
            {
              "label": 0,
              "system:index": "944"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55917794642907, 35.056763924515856]),
            {
              "label": 0,
              "system:index": "945"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55918867526513, 35.0565355805747]),
            {
              "label": 0,
              "system:index": "946"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55911357341272, 35.056386278421805]),
            {
              "label": 0,
              "system:index": "947"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55885608134729, 35.056359930954706]),
            {
              "label": 0,
              "system:index": "948"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55895264087182, 35.05611402085191]),
            {
              "label": 0,
              "system:index": "949"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5591457599209, 35.05592958778884]),
            {
              "label": 0,
              "system:index": "950"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55877025065881, 35.05602619563574]),
            {
              "label": 0,
              "system:index": "951"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55873806415063, 35.056289671000904]),
            {
              "label": 0,
              "system:index": "952"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55883462367517, 35.056772706962384]),
            {
              "label": 0,
              "system:index": "953"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55908138690454, 35.05719426328459]),
            {
              "label": 0,
              "system:index": "954"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55928523478967, 35.05707130958211]),
            {
              "label": 0,
              "system:index": "955"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55908138690454, 35.057062527167695]),
            {
              "label": 0,
              "system:index": "956"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55947835383874, 35.055894457634345]),
            {
              "label": 0,
              "system:index": "957"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55969293055993, 35.05534993830718]),
            {
              "label": 0,
              "system:index": "958"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55983240542871, 35.05527089487726]),
            {
              "label": 0,
              "system:index": "959"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56022937236291, 35.055156720898935]),
            {
              "label": 0,
              "system:index": "960"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56158120570642, 35.05496350303354]),
            {
              "label": 0,
              "system:index": "961"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56276137767297, 35.0548932418782]),
            {
              "label": 0,
              "system:index": "962"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56462819514734, 35.054620979330345]),
            {
              "label": 0,
              "system:index": "963"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56558306155664, 35.054884459229534]),
            {
              "label": 0,
              "system:index": "964"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56504661975366, 35.05550802493752]),
            {
              "label": 0,
              "system:index": "965"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5680077785061, 35.05550802493752]),
            {
              "label": 0,
              "system:index": "966"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56834037242395, 35.05585054491999]),
            {
              "label": 0,
              "system:index": "967"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56839401660424, 35.05556950298889]),
            {
              "label": 0,
              "system:index": "968"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56810433803064, 35.05493715510737]),
            {
              "label": 0,
              "system:index": "969"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56814725337487, 35.05623697599589]),
            {
              "label": 0,
              "system:index": "970"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56834037242395, 35.05722939287989]),
            {
              "label": 0,
              "system:index": "971"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56937034068567, 35.05751921146426]),
            {
              "label": 0,
              "system:index": "972"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56794340548974, 35.05820423311988]),
            {
              "label": 0,
              "system:index": "973"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56846911845666, 35.0581427570522]),
            {
              "label": 0,
              "system:index": "974"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56578690944177, 35.05873995117916]),
            {
              "label": 0,
              "system:index": "975"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56512172160608, 35.05907367540647]),
            {
              "label": 0,
              "system:index": "976"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56233665864013, 35.0575101854481]),
            {
              "label": 0,
              "system:index": "977"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56241712491058, 35.057517870018636]),
            {
              "label": 0,
              "system:index": "978"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56244394700073, 35.057439926484065]),
            {
              "label": 0,
              "system:index": "979"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5626357249453, 35.057498109692965]),
            {
              "label": 0,
              "system:index": "980"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56262901942276, 35.057442122077596]),
            {
              "label": 0,
              "system:index": "981"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56238627950691, 35.0576737568646]),
            {
              "label": 0,
              "system:index": "982"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.562402372761, 35.05771437521925]),
            {
              "label": 0,
              "system:index": "983"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56238762061142, 35.05773742887102]),
            {
              "label": 0,
              "system:index": "984"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55935270111107, 35.05789990204169]),
            {
              "label": 0,
              "system:index": "985"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5594680360987, 35.057987725242555]),
            {
              "label": 0,
              "system:index": "986"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5594492606356, 35.05789990204169]),
            {
              "label": 0,
              "system:index": "987"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5594492606356, 35.057772558232614]),
            {
              "label": 0,
              "system:index": "988"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55951363365196, 35.057640823048715]),
            {
              "label": 0,
              "system:index": "989"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.559521680279, 35.05757056419706]),
            {
              "label": 0,
              "system:index": "990"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55956996004127, 35.05804261469517]),
            {
              "label": 0,
              "system:index": "991"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55957264225029, 35.058016267762525]),
            {
              "label": 0,
              "system:index": "992"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55951899806999, 35.05754860829351]),
            {
              "label": 0,
              "system:index": "993"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55952972690605, 35.057458589027284]),
            {
              "label": 0,
              "system:index": "994"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55946267168068, 35.05752884797527]),
            {
              "label": 0,
              "system:index": "995"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55938756982826, 35.05765619216446]),
            {
              "label": 0,
              "system:index": "996"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5616647652819, 35.05787355506299]),
            {
              "label": 0,
              "system:index": "997"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5613750867083, 35.05783623016196]),
            {
              "label": 0,
              "system:index": "998"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56111491243385, 35.05788672855339]),
            {
              "label": 0,
              "system:index": "999"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56105322162651, 35.05788672855339]),
            {
              "label": 0,
              "system:index": "1000"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56100494186424, 35.05786477273488]),
            {
              "label": 0,
              "system:index": "1001"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56825125370592, 35.0630502928708]),
            {
              "label": 0,
              "system:index": "1002"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5681922451076, 35.063023947554136]),
            {
              "label": 0,
              "system:index": "1003"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56823516045183, 35.062075510491795]),
            {
              "label": 0,
              "system:index": "1004"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56823516045183, 35.06202281922082]),
            {
              "label": 0,
              "system:index": "1005"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56810641441912, 35.06132026569136]),
            {
              "label": 0,
              "system:index": "1006"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56816542301745, 35.06131587471278]),
            {
              "label": 0,
              "system:index": "1007"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56777382050127, 35.06130709275494]),
            {
              "label": 0,
              "system:index": "1008"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56751096401781, 35.061394912290936]),
            {
              "label": 0,
              "system:index": "1009"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56733930264086, 35.06149151367141]),
            {
              "label": 0,
              "system:index": "1010"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5674895063457, 35.06165837033208]),
            {
              "label": 0,
              "system:index": "1011"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56753778610796, 35.061706670880746]),
            {
              "label": 0,
              "system:index": "1012"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56804204140276, 35.061904263736764]),
            {
              "label": 0,
              "system:index": "1013"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56818151627154, 35.061860354254534]),
            {
              "label": 0,
              "system:index": "1014"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56841755066485, 35.061864745203806]),
            {
              "label": 0,
              "system:index": "1015"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56851411018938, 35.06200525545627]),
            {
              "label": 0,
              "system:index": "1016"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56866431389422, 35.06179888093975]),
            {
              "label": 0,
              "system:index": "1017"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56877696667284, 35.061790099033836]),
            {
              "label": 0,
              "system:index": "1018"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56896472130389, 35.06178570808054]),
            {
              "label": 0,
              "system:index": "1019"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56926512871355, 35.06194378225059]),
            {
              "label": 0,
              "system:index": "1020"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56914174709887, 35.062606812240595]),
            {
              "label": 0,
              "system:index": "1021"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56958699379534, 35.06263315769186]),
            {
              "label": 0,
              "system:index": "1022"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56946361218066, 35.06232140264008]),
            {
              "label": 0,
              "system:index": "1023"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56961381588549, 35.06236531187432]),
            {
              "label": 0,
              "system:index": "1024"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5695977226314, 35.062097465178006]),
            {
              "label": 0,
              "system:index": "1025"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56960308704943, 35.061948173195375]),
            {
              "label": 0,
              "system:index": "1026"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56957626495928, 35.06151346851467]),
            {
              "label": 0,
              "system:index": "1027"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56964063797564, 35.06165397937169]),
            {
              "label": 0,
              "system:index": "1028"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56919539127917, 35.06148273173245]),
            {
              "label": 0,
              "system:index": "1029"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56915247593493, 35.06129831079615]),
            {
              "label": 0,
              "system:index": "1030"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5691471115169, 35.06114023537632]),
            {
              "label": 0,
              "system:index": "1031"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56896472130389, 35.06108754350169]),
            {
              "label": 0,
              "system:index": "1032"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56958162937731, 35.061065588543904]),
            {
              "label": 0,
              "system:index": "1033"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56959235821337, 35.061250010005885]),
            {
              "label": 0,
              "system:index": "1034"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56672775898546, 35.06211063798691]),
            {
              "label": 0,
              "system:index": "1035"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56654000435442, 35.06213698359832]),
            {
              "label": 0,
              "system:index": "1036"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56680286083788, 35.061904263736764]),
            {
              "label": 0,
              "system:index": "1037"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56700670872301, 35.06203160110168]),
            {
              "label": 0,
              "system:index": "1038"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5666794792232, 35.062404830164965]),
            {
              "label": 0,
              "system:index": "1039"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56656682644457, 35.06258924860166]),
            {
              "label": 0,
              "system:index": "1040"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56641125832171, 35.062483866688865]),
            {
              "label": 0,
              "system:index": "1041"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56515062008471, 35.06220723852049]),
            {
              "label": 0,
              "system:index": "1042"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56534910355181, 35.06314689229251]),
            {
              "label": 0,
              "system:index": "1043"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56564414654345, 35.06336204513911]),
            {
              "label": 0,
              "system:index": "1044"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56566023979754, 35.06309420171302]),
            {
              "label": 0,
              "system:index": "1045"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56530082378954, 35.06295369333479]),
            {
              "label": 0,
              "system:index": "1046"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56560123119921, 35.062677066758454]),
            {
              "label": 0,
              "system:index": "1047"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56583190117449, 35.062483866688865]),
            {
              "label": 0,
              "system:index": "1048"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56535446796984, 35.06233018448882]),
            {
              "label": 0,
              "system:index": "1049"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56542956982226, 35.06249264852013]),
            {
              "label": 0,
              "system:index": "1050"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56577289257616, 35.062439957518365]),
            {
              "label": 0,
              "system:index": "1051"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56535983238787, 35.06276488482074]),
            {
              "label": 0,
              "system:index": "1052"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56526863728136, 35.06257607587001]),
            {
              "label": 0,
              "system:index": "1053"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56549394283861, 35.063098592595956]),
            {
              "label": 0,
              "system:index": "1054"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56563878212542, 35.06291856620246]),
            {
              "label": 0,
              "system:index": "1055"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56553685818285, 35.06332252731183]),
            {
              "label": 0,
              "system:index": "1056"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56568169746966, 35.063309354698504]),
            {
              "label": 0,
              "system:index": "1057"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56519889984698, 35.06331374556983]),
            {
              "label": 0,
              "system:index": "1058"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56524717960924, 35.063155674052446]),
            {
              "label": 0,
              "system:index": "1059"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56539201889605, 35.06310737436108]),
            {
              "label": 0,
              "system:index": "1060"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5655261293468, 35.06289661173708]),
            {
              "label": 0,
              "system:index": "1061"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56526863728136, 35.06292734798696]),
            {
              "label": 0,
              "system:index": "1062"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56547784958452, 35.06272536670441]),
            {
              "label": 0,
              "system:index": "1063"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5655261293468, 35.062352139106544]),
            {
              "label": 0,
              "system:index": "1064"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56579435024828, 35.062396048324274]),
            {
              "label": 0,
              "system:index": "1065"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56529545937151, 35.06200525545627]),
            {
              "label": 0,
              "system:index": "1066"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56545102749438, 35.061877918050264]),
            {
              "label": 0,
              "system:index": "1067"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56342864189715, 35.06156176914906]),
            {
              "label": 0,
              "system:index": "1068"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5629887596187, 35.06133782960329]),
            {
              "label": 0,
              "system:index": "1069"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56336426888079, 35.06114023537632]),
            {
              "label": 0,
              "system:index": "1070"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5636003032741, 35.061311483733995]),
            {
              "label": 0,
              "system:index": "1071"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56384706650347, 35.06148273173245]),
            {
              "label": 0,
              "system:index": "1072"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56400799904436, 35.061381739366546]),
            {
              "label": 0,
              "system:index": "1073"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56440496597857, 35.06150468657807]),
            {
              "label": 0,
              "system:index": "1074"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56448543224901, 35.061271964914106]),
            {
              "label": 0,
              "system:index": "1075"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56444251690478, 35.06111388944327]),
            {
              "label": 0,
              "system:index": "1076"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56347155724139, 35.063151283172594]),
            {
              "label": 0,
              "system:index": "1077"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56380951557726, 35.06347181678117]),
            {
              "label": 0,
              "system:index": "1078"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56406164322466, 35.06336204513911]),
            {
              "label": 0,
              "system:index": "1079"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56437814388842, 35.06316006493205]),
            {
              "label": 0,
              "system:index": "1080"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56154036675066, 35.06316006493205]),
            {
              "label": 0,
              "system:index": "1081"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56162083302111, 35.06310737436108]),
            {
              "label": 0,
              "system:index": "1082"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56166374836535, 35.06249264852013]),
            {
              "label": 0,
              "system:index": "1083"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56158864651293, 35.062418002924254]),
            {
              "label": 0,
              "system:index": "1084"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56110048447222, 35.06251899400824]),
            {
              "label": 0,
              "system:index": "1085"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56080544148058, 35.06253216674912]),
            {
              "label": 0,
              "system:index": "1086"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55996859226794, 35.062536557662284]),
            {
              "label": 0,
              "system:index": "1087"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55944824371905, 35.06232140264008]),
            {
              "label": 0,
              "system:index": "1088"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55916392956347, 35.06257607587001]),
            {
              "label": 0,
              "system:index": "1089"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55919075165362, 35.062009646397755]),
            {
              "label": 0,
              "system:index": "1090"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55943751488299, 35.06199647357257]),
            {
              "label": 0,
              "system:index": "1091"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55989885483355, 35.06213698359832]),
            {
              "label": 0,
              "system:index": "1092"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56015634689898, 35.06215015640081]),
            {
              "label": 0,
              "system:index": "1093"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56079471264452, 35.06214137453271]),
            {
              "label": 0,
              "system:index": "1094"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56090200100512, 35.06212820172879]),
            {
              "label": 0,
              "system:index": "1095"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56131506119341, 35.062198456658514]),
            {
              "label": 0,
              "system:index": "1096"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56169593487353, 35.06218528386379]),
            {
              "label": 0,
              "system:index": "1097"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56164229069323, 35.06212381079367]),
            {
              "label": 0,
              "system:index": "1098"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5615296379146, 35.061891090894584]),
            {
              "label": 0,
              "system:index": "1099"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56124532375902, 35.06182961760292]),
            {
              "label": 0,
              "system:index": "1100"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58648168854232, 35.06015297252255]),
            {
              "label": 0,
              "system:index": "1101"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58648705296035, 35.059950984375966]),
            {
              "label": 0,
              "system:index": "1102"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58650314621444, 35.05968752082506]),
            {
              "label": 0,
              "system:index": "1103"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58647632412429, 35.059525051211544]),
            {
              "label": 0,
              "system:index": "1104"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58555364422317, 35.059836816941626]),
            {
              "label": 0,
              "system:index": "1105"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58561801723953, 35.05968312975867]),
            {
              "label": 0,
              "system:index": "1106"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58591306023116, 35.059604090523365]),
            {
              "label": 0,
              "system:index": "1107"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58610617928024, 35.059604090523365]),
            {
              "label": 0,
              "system:index": "1108"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65857534601389, 35.06231788881952]),
            {
              "label": 0,
              "system:index": "1109"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65901522829233, 35.06221689748678]),
            {
              "label": 0,
              "system:index": "1110"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65944438173472, 35.062001741622105]),
            {
              "label": 0,
              "system:index": "1111"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65938537313639, 35.061953441248015]),
            {
              "label": 0,
              "system:index": "1112"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66009347631632, 35.06187879515916]),
            {
              "label": 0,
              "system:index": "1113"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66065674020945, 35.06188318610744]),
            {
              "label": 0,
              "system:index": "1114"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66096251203714, 35.06185244946444]),
            {
              "label": 0,
              "system:index": "1115"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66078012182413, 35.061202586303224]),
            {
              "label": 0,
              "system:index": "1116"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66078012182413, 35.061351879649294]),
            {
              "label": 0,
              "system:index": "1117"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6606674690455, 35.06142652621995]),
            {
              "label": 0,
              "system:index": "1118"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65831248953043, 35.061483608845585]),
            {
              "label": 0,
              "system:index": "1119"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65804963304697, 35.06146604496503]),
            {
              "label": 0,
              "system:index": "1120"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65815692140757, 35.061246496139226]),
            {
              "label": 0,
              "system:index": "1121"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65844123556315, 35.06104890169122]),
            {
              "label": 0,
              "system:index": "1122"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65919225408732, 35.060846915761175]),
            {
              "label": 0,
              "system:index": "1123"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65835004045664, 35.060737140589595]),
            {
              "label": 0,
              "system:index": "1124"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65835540487467, 35.06090399879207]),
            {
              "label": 0,
              "system:index": "1125"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65788870050608, 35.06055271796908]),
            {
              "label": 0,
              "system:index": "1126"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65791552259623, 35.06021021771141]),
            {
              "label": 0,
              "system:index": "1127"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65809791280924, 35.0601970445959]),
            {
              "label": 0,
              "system:index": "1128"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6581086416453, 35.06045611547778]),
            {
              "label": 0,
              "system:index": "1129"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65799062444864, 35.06051758980365]),
            {
              "label": 0,
              "system:index": "1130"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65839295580088, 35.06048246162309]),
            {
              "label": 0,
              "system:index": "1131"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65876310064493, 35.06030682049367]),
            {
              "label": 0,
              "system:index": "1132"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65445010854899, 35.062172988172684]),
            {
              "label": 0,
              "system:index": "1133"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6544340152949, 35.06201052350522]),
            {
              "label": 0,
              "system:index": "1134"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6543803711146, 35.061927095577396]),
            {
              "label": 0,
              "system:index": "1135"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.654632498762, 35.06205443290671]),
            {
              "label": 0,
              "system:index": "1136"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65461104108988, 35.06216859723998]),
            {
              "label": 0,
              "system:index": "1137"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65476124479471, 35.06231349789461]),
            {
              "label": 0,
              "system:index": "1138"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.654632498762, 35.062559389326076]),
            {
              "label": 0,
              "system:index": "1139"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65445547296702, 35.06252865293763]),
            {
              "label": 0,
              "system:index": "1140"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65428381159006, 35.06230032511846]),
            {
              "label": 0,
              "system:index": "1141"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65426771833597, 35.06215103350677]),
            {
              "label": 0,
              "system:index": "1142"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65431063368021, 35.06197539596705]),
            {
              "label": 0,
              "system:index": "1143"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65409605695902, 35.06228276141362]),
            {
              "label": 0,
              "system:index": "1144"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65407996370493, 35.062427661865605]),
            {
              "label": 0,
              "system:index": "1145"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6541657943934, 35.062458398292065]),
            {
              "label": 0,
              "system:index": "1146"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65412287904917, 35.06263403479264]),
            {
              "label": 0,
              "system:index": "1147"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65415506555735, 35.06268672566914]),
            {
              "label": 0,
              "system:index": "1148"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65433745577036, 35.06269550747857]),
            {
              "label": 0,
              "system:index": "1149"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65454130365549, 35.06280967091536]),
            {
              "label": 0,
              "system:index": "1150"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6547236938685, 35.062893097941284]),
            {
              "label": 0,
              "system:index": "1151"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65480952455698, 35.06270868019096]),
            {
              "label": 0,
              "system:index": "1152"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65477197363077, 35.062515480196204]),
            {
              "label": 0,
              "system:index": "1153"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65358643724619, 35.062115906029064]),
            {
              "label": 0,
              "system:index": "1154"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65357570841013, 35.06178219423694]),
            {
              "label": 0,
              "system:index": "1155"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65375809862314, 35.06195783219229]),
            {
              "label": 0,
              "system:index": "1156"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65372591211496, 35.061764630420605]),
            {
              "label": 0,
              "system:index": "1157"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65404241277872, 35.06179536709668]),
            {
              "label": 0,
              "system:index": "1158"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65420334531962, 35.061615337829316]),
            {
              "label": 0,
              "system:index": "1159"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65380101396738, 35.06149239078445]),
            {
              "label": 0,
              "system:index": "1160"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65386002256571, 35.061347488672425]),
            {
              "label": 0,
              "system:index": "1161"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6541818876475, 35.061303578890744]),
            {
              "label": 0,
              "system:index": "1162"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65413897230326, 35.061079638636755]),
            {
              "label": 0,
              "system:index": "1163"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65383320047556, 35.06108842061908]),
            {
              "label": 0,
              "system:index": "1164"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65375809862314, 35.060864479774935]),
            {
              "label": 0,
              "system:index": "1165"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65398876859842, 35.0607415315993]),
            {
              "label": 0,
              "system:index": "1166"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65347378446756, 35.06041659624385]),
            {
              "label": 0,
              "system:index": "1167"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65327530100046, 35.06039025007727]),
            {
              "label": 0,
              "system:index": "1168"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65327530100046, 35.06068005744204]),
            {
              "label": 0,
              "system:index": "1169"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65351133539377, 35.060710794526464]),
            {
              "label": 0,
              "system:index": "1170"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65342014028727, 35.06098742776541]),
            {
              "label": 0,
              "system:index": "1171"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65330212309061, 35.06111915754975]),
            {
              "label": 0,
              "system:index": "1172"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65357570841013, 35.06112354853889]),
            {
              "label": 0,
              "system:index": "1173"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65360253050028, 35.06100060075342]),
            {
              "label": 0,
              "system:index": "1174"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6523097057551, 35.06125966908542]),
            {
              "label": 0,
              "system:index": "1175"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65184300138651, 35.06165924744334]),
            {
              "label": 0,
              "system:index": "1176"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65181081487833, 35.06153190949763]),
            {
              "label": 0,
              "system:index": "1177"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6518590946406, 35.061356270625915]),
            {
              "label": 0,
              "system:index": "1178"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65180008604227, 35.06123771417393]),
            {
              "label": 0,
              "system:index": "1179"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65170352651774, 35.06144409010903]),
            {
              "label": 0,
              "system:index": "1180"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65169279768168, 35.06195783219229]),
            {
              "label": 0,
              "system:index": "1181"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65170889093577, 35.06237057990007]),
            {
              "label": 0,
              "system:index": "1182"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6517142553538, 35.062515480196204]),
            {
              "label": 0,
              "system:index": "1183"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65179472162424, 35.062203724695024]),
            {
              "label": 0,
              "system:index": "1184"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65177326395212, 35.06179975804948]),
            {
              "label": 0,
              "system:index": "1185"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65159623815714, 35.06175145755588]),
            {
              "label": 0,
              "system:index": "1186"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65134947492777, 35.06172511182007]),
            {
              "label": 0,
              "system:index": "1187"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65072720243631, 35.062129078834985]),
            {
              "label": 0,
              "system:index": "1188"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65062527849375, 35.06195783219229]),
            {
              "label": 0,
              "system:index": "1189"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65189664556681, 35.06251108928192]),
            {
              "label": 0,
              "system:index": "1190"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65221314623057, 35.062484743791245]),
            {
              "label": 0,
              "system:index": "1191"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65287296964823, 35.06263842570033]),
            {
              "label": 0,
              "system:index": "1192"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65331285192667, 35.062572562060424]),
            {
              "label": 0,
              "system:index": "1193"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65367226793467, 35.06268233476407]),
            {
              "label": 0,
              "system:index": "1194"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65446083738505, 35.062748198315404]),
            {
              "label": 0,
              "system:index": "1195"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65469687177836, 35.06287553436395]),
            {
              "label": 0,
              "system:index": "1196"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65455739690958, 35.062484743791245]),
            {
              "label": 0,
              "system:index": "1197"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65453593923746, 35.06235740713313]),
            {
              "label": 0,
              "system:index": "1198"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65395121767222, 35.061979786910165]),
            {
              "label": 0,
              "system:index": "1199"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65403168394266, 35.06103133771713]),
            {
              "label": 0,
              "system:index": "1200"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65417652322947, 35.06086887077779]),
            {
              "label": 0,
              "system:index": "1201"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65392439558207, 35.0605922371371]),
            {
              "label": 0,
              "system:index": "1202"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65352742864786, 35.06036390390218]),
            {
              "label": 0,
              "system:index": "1203"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65381710722147, 35.06050002571527]),
            {
              "label": 0,
              "system:index": "1204"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65404241277872, 35.06050002571527]),
            {
              "label": 0,
              "system:index": "1205"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65420334531962, 35.06040781418927]),
            {
              "label": 0,
              "system:index": "1206"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65446620180307, 35.06049563469257]),
            {
              "label": 0,
              "system:index": "1207"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65455203249155, 35.060776659668356]),
            {
              "label": 0,
              "system:index": "1208"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6549221773356, 35.06076787765253]),
            {
              "label": 0,
              "system:index": "1209"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65503483011423, 35.0611455034811]),
            {
              "label": 0,
              "system:index": "1210"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65523867799936, 35.06204126008875]),
            {
              "label": 0,
              "system:index": "1211"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65501873686014, 35.06224324306389]),
            {
              "label": 0,
              "system:index": "1212"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65537815286814, 35.06251108928192]),
            {
              "label": 0,
              "system:index": "1213"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66091423227488, 35.061685593200394]),
            {
              "label": 0,
              "system:index": "1214"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66069429113566, 35.060807396716406]),
            {
              "label": 0,
              "system:index": "1215"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66091423227488, 35.06049563469257]),
            {
              "label": 0,
              "system:index": "1216"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66090350343882, 35.06044294240191]),
            {
              "label": 0,
              "system:index": "1217"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67261742790635, 35.05297947909365]),
            {
              "label": 0,
              "system:index": "1218"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67293929298813, 35.05296191338372]),
            {
              "label": 0,
              "system:index": "1219"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67306267460282, 35.05290921623129]),
            {
              "label": 0,
              "system:index": "1220"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67303048809464, 35.05287408477743]),
            {
              "label": 0,
              "system:index": "1221"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67171084125931, 35.0516225168748]),
            {
              "label": 0,
              "system:index": "1222"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67149090012009, 35.05129315371255]),
            {
              "label": 0,
              "system:index": "1223"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67145334919388, 35.05101209609712]),
            {
              "label": 0,
              "system:index": "1224"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67158745964463, 35.05091109078033]),
            {
              "label": 0,
              "system:index": "1225"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67070233066971, 35.05078812761736]),
            {
              "label": 0,
              "system:index": "1226"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67057894905503, 35.05094183154214]),
            {
              "label": 0,
              "system:index": "1227"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67047702511246, 35.051064794473696]),
            {
              "label": 0,
              "system:index": "1228"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67045556744034, 35.051218497877784]),
            {
              "label": 0,
              "system:index": "1229"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67080961903031, 35.051402941580875]),
            {
              "label": 0,
              "system:index": "1230"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67199515541489, 35.05211875486431]),
            {
              "label": 0,
              "system:index": "1231"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67198442657883, 35.05179378519422]),
            {
              "label": 0,
              "system:index": "1232"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67185568054612, 35.05170595533169]),
            {
              "label": 0,
              "system:index": "1233"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67247795303757, 35.05277308176344]),
            {
              "label": 0,
              "system:index": "1234"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67262279232438, 35.05268964439679]),
            {
              "label": 0,
              "system:index": "1235"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.672735445103, 35.05290921623129]),
            {
              "label": 0,
              "system:index": "1236"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67287491997178, 35.05282138756834]),
            {
              "label": 0,
              "system:index": "1237"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67257987698014, 35.05335714094308]),
            {
              "label": 0,
              "system:index": "1238"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67246722420151, 35.053365923756004]),
            {
              "label": 0,
              "system:index": "1239"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67251550396378, 35.053247355701785]),
            {
              "label": 0,
              "system:index": "1240"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67269789417679, 35.05342301201701]),
            {
              "label": 0,
              "system:index": "1241"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67198979099686, 35.053286878405665]),
            {
              "label": 0,
              "system:index": "1242"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67166256149704, 35.05309804753679]),
            {
              "label": 0,
              "system:index": "1243"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67166792591507, 35.05298826194719]),
            {
              "label": 0,
              "system:index": "1244"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67093836506302, 35.0531639188197]),
            {
              "label": 0,
              "system:index": "1245"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66957043846543, 35.053462534635884]),
            {
              "label": 0,
              "system:index": "1246"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66829370697434, 35.05338348937902]),
            {
              "label": 0,
              "system:index": "1247"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66992985447342, 35.05134146039281]),
            {
              "label": 0,
              "system:index": "1248"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6698172016948, 35.05130632826455]),
            {
              "label": 0,
              "system:index": "1249"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6696562691539, 35.05125802156352]),
            {
              "label": 0,
              "system:index": "1250"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66955970962937, 35.05122288939938]),
            {
              "label": 0,
              "system:index": "1251"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66955970962937, 35.05115262502574]),
            {
              "label": 0,
              "system:index": "1252"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66960798939164, 35.05108236059166]),
            {
              "label": 0,
              "system:index": "1253"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.669672362408, 35.05100331303106]),
            {
              "label": 0,
              "system:index": "1254"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66977965076859, 35.0510164876298]),
            {
              "label": 0,
              "system:index": "1255"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66993521889145, 35.05110870976153]),
            {
              "label": 0,
              "system:index": "1256"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67004250725205, 35.05119214874333]),
            {
              "label": 0,
              "system:index": "1257"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67004250725205, 35.05127558763993]),
            {
              "label": 0,
              "system:index": "1258"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66990303238327, 35.05126680460219]),
            {
              "label": 0,
              "system:index": "1259"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67029463489945, 35.051301936747464]),
            {
              "label": 0,
              "system:index": "1260"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67029999931748, 35.051214106355964]),
            {
              "label": 0,
              "system:index": "1261"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67128705223496, 35.05105161988275]),
            {
              "label": 0,
              "system:index": "1262"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67139434059555, 35.05104722835194]),
            {
              "label": 0,
              "system:index": "1263"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6715284510463, 35.051148233500385]),
            {
              "label": 0,
              "system:index": "1264"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6717269345134, 35.05147320573917]),
            {
              "label": 0,
              "system:index": "1265"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67164646824295, 35.05156542735517]),
            {
              "label": 0,
              "system:index": "1266"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66786991794999, 35.05236467699836]),
            {
              "label": 0,
              "system:index": "1267"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66829907139237, 35.052755516009135]),
            {
              "label": 0,
              "system:index": "1268"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66838490208085, 35.05283895330848]),
            {
              "label": 0,
              "system:index": "1269"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66849755485947, 35.05281260469686]),
            {
              "label": 0,
              "system:index": "1270"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66564368446763, 35.052145103699814]),
            {
              "label": 0,
              "system:index": "1271"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66557931145127, 35.052145103699814]),
            {
              "label": 0,
              "system:index": "1272"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66494631012375, 35.05151712080739]),
            {
              "label": 0,
              "system:index": "1273"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66502141197617, 35.05138098401903]),
            {
              "label": 0,
              "system:index": "1274"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66510724266465, 35.05108236059166]),
            {
              "label": 0,
              "system:index": "1275"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66510187824662, 35.05095939768654]),
            {
              "label": 0,
              "system:index": "1276"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66526281078751, 35.051086752120554]),
            {
              "label": 0,
              "system:index": "1277"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66533791263993, 35.05108236059166]),
            {
              "label": 0,
              "system:index": "1278"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66526817520554, 35.0510164876298]),
            {
              "label": 0,
              "system:index": "1279"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.66578852375443, 35.05112188434327]),
            {
              "label": 0,
              "system:index": "1280"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69168347416462, 35.04696084922652]),
            {
              "label": 0,
              "system:index": "1281"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69183367786945, 35.0468905811863]),
            {
              "label": 0,
              "system:index": "1282"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6916620164925, 35.04688618943179]),
            {
              "label": 0,
              "system:index": "1283"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69175857601704, 35.04677639549206]),
            {
              "label": 0,
              "system:index": "1284"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69189805088581, 35.0466182919596]),
            {
              "label": 0,
              "system:index": "1285"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69120067654194, 35.046578766028674]),
            {
              "label": 0,
              "system:index": "1286"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6913562446648, 35.04660072488154]),
            {
              "label": 0,
              "system:index": "1287"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69154399929585, 35.04664903433711]),
            {
              "label": 0,
              "system:index": "1288"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69170493183674, 35.04664903433711]),
            {
              "label": 0,
              "system:index": "1289"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69175857601704, 35.04652167298353]),
            {
              "label": 0,
              "system:index": "1290"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69198924599232, 35.046385527868786]),
            {
              "label": 0,
              "system:index": "1291"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6920750766808, 35.04629330040406]),
            {
              "label": 0,
              "system:index": "1292"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69218236504139, 35.04595074033769]),
            {
              "label": 0,
              "system:index": "1293"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69204289017262, 35.04591560589069]),
            {
              "label": 0,
              "system:index": "1294"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.692112627607, 35.045757500692154]),
            {
              "label": 0,
              "system:index": "1295"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69224673805775, 35.04581898608351]),
            {
              "label": 0,
              "system:index": "1296"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69246131477894, 35.045731149795984]),
            {
              "label": 0,
              "system:index": "1297"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69256860313953, 35.04553790963097]),
            {
              "label": 0,
              "system:index": "1298"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69255787430347, 35.045397371042036]),
            {
              "label": 0,
              "system:index": "1299"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69245058594288, 35.04533588533336]),
            {
              "label": 0,
              "system:index": "1300"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69235402641834, 35.045502775006405]),
            {
              "label": 0,
              "system:index": "1301"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69220918713154, 35.04559500336367]),
            {
              "label": 0,
              "system:index": "1302"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69169420300068, 35.045867296001376]),
            {
              "label": 0,
              "system:index": "1303"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69193560181202, 35.04588925504551]),
            {
              "label": 0,
              "system:index": "1304"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69194096623005, 35.04572675797913]),
            {
              "label": 0,
              "system:index": "1305"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6918604999596, 35.04556426058949]),
            {
              "label": 0,
              "system:index": "1306"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69165665207447, 35.04547203219751]),
            {
              "label": 0,
              "system:index": "1307"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69160300789417, 35.04529196694166]),
            {
              "label": 0,
              "system:index": "1308"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69142598209919, 35.04526561589532]),
            {
              "label": 0,
              "system:index": "1309"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69129723606648, 35.04561696248101]),
            {
              "label": 0,
              "system:index": "1310"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69154936371388, 35.045634529770616]),
            {
              "label": 0,
              "system:index": "1311"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6913562446648, 35.04599465837519]),
            {
              "label": 0,
              "system:index": "1312"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69145280418934, 35.04642944567254]),
            {
              "label": 0,
              "system:index": "1313"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69137770233692, 35.04631086754822]),
            {
              "label": 0,
              "system:index": "1314"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69144207535328, 35.04620546462657]),
            {
              "label": 0,
              "system:index": "1315"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69175857601704, 35.04626255789269]),
            {
              "label": 0,
              "system:index": "1316"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69093245564045, 35.046179113874885]),
            {
              "label": 0,
              "system:index": "1317"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69069105682911, 35.0465524153974]),
            {
              "label": 0,
              "system:index": "1318"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69074470100941, 35.046662209638185]),
            {
              "label": 0,
              "system:index": "1319"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69086808262409, 35.04670612729319]),
            {
              "label": 0,
              "system:index": "1320"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69103974400105, 35.04673686963762]),
            {
              "label": 0,
              "system:index": "1321"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69118994770588, 35.04644701278741]),
            {
              "label": 0,
              "system:index": "1322"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69082516727985, 35.046038576389094]),
            {
              "label": 0,
              "system:index": "1323"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69078761635365, 35.04582776970705]),
            {
              "label": 0,
              "system:index": "1324"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69102365074696, 35.04570040707304]),
            {
              "label": 0,
              "system:index": "1325"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69092172680439, 35.04553790963097]),
            {
              "label": 0,
              "system:index": "1326"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69116312561573, 35.04537541186566]),
            {
              "label": 0,
              "system:index": "1327"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69130796490253, 35.04533588533336]),
            {
              "label": 0,
              "system:index": "1328"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69154936371388, 35.045111901288905]),
            {
              "label": 0,
              "system:index": "1329"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6916083723122, 35.04503284795011]),
            {
              "label": 0,
              "system:index": "1330"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69171029625477, 35.044945010817294]),
            {
              "label": 0,
              "system:index": "1331"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69150644836964, 35.044901092215476]),
            {
              "label": 0,
              "system:index": "1332"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68842190800251, 35.0464162703339]),
            {
              "label": 0,
              "system:index": "1333"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68867940006794, 35.04628451683057]),
            {
              "label": 0,
              "system:index": "1334"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68822878895344, 35.04740880656179]),
            {
              "label": 0,
              "system:index": "1335"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70131334400723, 35.019490487533155]),
            {
              "label": 0,
              "system:index": "1336"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70134687161992, 35.01946852139489]),
            {
              "label": 0,
              "system:index": "1337"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70138174033711, 35.01943227725386]),
            {
              "label": 0,
              "system:index": "1338"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7014166090543, 35.01939932802081]),
            {
              "label": 0,
              "system:index": "1339"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70144611335347, 35.01937626354978]),
            {
              "label": 0,
              "system:index": "1340"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70147159433911, 35.01934770752899]),
            {
              "label": 0,
              "system:index": "1341"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70150243974278, 35.01931915149825]),
            {
              "label": 0,
              "system:index": "1342"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70147427654813, 35.01949597906679]),
            {
              "label": 0,
              "system:index": "1343"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70171299315045, 35.01952673164838]),
            {
              "label": 0,
              "system:index": "1344"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70173176861356, 35.019767260369576]),
            {
              "label": 0,
              "system:index": "1345"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7016687367017, 35.019768358672614]),
            {
              "label": 0,
              "system:index": "1346"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70163789129803, 35.019788128124816]),
            {
              "label": 0,
              "system:index": "1347"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7015238974149, 35.01979911115176]),
            {
              "label": 0,
              "system:index": "1348"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70143538451741, 35.01980460266468]),
            {
              "label": 0,
              "system:index": "1349"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70129456854413, 35.019819978898866]),
            {
              "label": 0,
              "system:index": "1350"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70124092436383, 35.019823273805834]),
            {
              "label": 0,
              "system:index": "1351"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70119532681058, 35.019824372108104]),
            {
              "label": 0,
              "system:index": "1352"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70109340286801, 35.01983535513017]),
            {
              "label": 0,
              "system:index": "1353"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70107060409138, 35.01982656871265]),
            {
              "label": 0,
              "system:index": "1354"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70097136235783, 35.01984523984876]),
            {
              "label": 0,
              "system:index": "1355"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70093112922261, 35.01984743645275]),
            {
              "label": 0,
              "system:index": "1356"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70101025438855, 35.01979801284914]),
            {
              "label": 0,
              "system:index": "1357"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70097806788037, 35.01981448738699]),
            {
              "label": 0,
              "system:index": "1358"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70096733904431, 35.019788128124816]),
            {
              "label": 0,
              "system:index": "1359"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70104109979222, 35.019769456975645]),
            {
              "label": 0,
              "system:index": "1360"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70108401513646, 35.01972222993223]),
            {
              "label": 0,
              "system:index": "1361"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70111486054013, 35.01969147742417]),
            {
              "label": 0,
              "system:index": "1362"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70109340286801, 35.019668413035554]),
            {
              "label": 0,
              "system:index": "1363"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70111754274915, 35.019675002861526]),
            {
              "label": 0,
              "system:index": "1364"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70117655134747, 35.01962667745864]),
            {
              "label": 0,
              "system:index": "1365"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70121410227368, 35.01959043338771]),
            {
              "label": 0,
              "system:index": "1366"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70120471454213, 35.01955968083009]),
            {
              "label": 0,
              "system:index": "1367"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70126238203595, 35.01954759946499]),
            {
              "label": 0,
              "system:index": "1368"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70124360657285, 35.019531124873374]),
            {
              "label": 0,
              "system:index": "1369"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70154803729604, 35.01927412081412]),
            {
              "label": 0,
              "system:index": "1370"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70153328514645, 35.01926203940683]),
            {
              "label": 0,
              "system:index": "1371"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70146757102559, 35.01920602558614]),
            {
              "label": 0,
              "system:index": "1372"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70148902869771, 35.019229090105206]),
            {
              "label": 0,
              "system:index": "1373"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70140990353177, 35.01925435123765]),
            {
              "label": 0,
              "system:index": "1374"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7014327023084, 35.019286202219625]),
            {
              "label": 0,
              "system:index": "1375"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70137235260556, 35.01933233120598]),
            {
              "label": 0,
              "system:index": "1376"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70088419056485, 35.01939822971281]),
            {
              "label": 0,
              "system:index": "1377"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70086407399724, 35.019414704331226]),
            {
              "label": 0,
              "system:index": "1378"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70083725190709, 35.019490487533155]),
            {
              "label": 0,
              "system:index": "1379"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70083725190709, 35.01962997237337]),
            {
              "label": 0,
              "system:index": "1380"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70083725190709, 35.019702460464096]),
            {
              "label": 0,
              "system:index": "1381"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70087748504231, 35.019693674032276]),
            {
              "label": 0,
              "system:index": "1382"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70090296602795, 35.019667314731166]),
            {
              "label": 0,
              "system:index": "1383"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70096331573079, 35.0196453486404]),
            {
              "label": 0,
              "system:index": "1384"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70101695991109, 35.019617891018676]),
            {
              "label": 0,
              "system:index": "1385"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70105853415082, 35.01959702321998]),
            {
              "label": 0,
              "system:index": "1386"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7010920617635, 35.019591531693116]),
            {
              "label": 0,
              "system:index": "1387"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70113095379422, 35.01956517235909]),
            {
              "label": 0,
              "system:index": "1388"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70115375257085, 35.01949268414666]),
            {
              "label": 0,
              "system:index": "1389"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70108669734547, 35.019448751865404]),
            {
              "label": 0,
              "system:index": "1390"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70106658077786, 35.0194311789463]),
            {
              "label": 0,
              "system:index": "1391"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70103305316518, 35.01940811448426]),
            {
              "label": 0,
              "system:index": "1392"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70099147892545, 35.01938395170752]),
            {
              "label": 0,
              "system:index": "1393"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70095929241727, 35.01936967369971]),
            {
              "label": 0,
              "system:index": "1394"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70090430713246, 35.01934770752899]),
            {
              "label": 0,
              "system:index": "1395"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70088150835583, 35.01933892105906]),
            {
              "label": 0,
              "system:index": "1396"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70086407399724, 35.01933233120598]),
            {
              "label": 0,
              "system:index": "1397"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70084663963864, 35.01933013458818]),
            {
              "label": 0,
              "system:index": "1398"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70080506539891, 35.01932903627927]),
            {
              "label": 0,
              "system:index": "1399"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70075946784566, 35.0193257413524]),
            {
              "label": 0,
              "system:index": "1400"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70071521139691, 35.01932683966137]),
            {
              "label": 0,
              "system:index": "1401"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7006240162904, 35.01932903627927]),
            {
              "label": 0,
              "system:index": "1402"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70059451199124, 35.01933013458818]),
            {
              "label": 0,
              "system:index": "1403"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70054220891545, 35.019331232897095]),
            {
              "label": 0,
              "system:index": "1404"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7004778358991, 35.01934441260289]),
            {
              "label": 0,
              "system:index": "1405"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70041614509175, 35.01937187031647]),
            {
              "label": 0,
              "system:index": "1406"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70035445428441, 35.01942019586996]),
            {
              "label": 0,
              "system:index": "1407"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70032092667172, 35.01946852139489]),
            {
              "label": 0,
              "system:index": "1408"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70029008126805, 35.019515748584844]),
            {
              "label": 0,
              "system:index": "1409"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70029678679059, 35.019570663887706]),
            {
              "label": 0,
              "system:index": "1410"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70032897329877, 35.01957835202717]),
            {
              "label": 0,
              "system:index": "1411"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70037591195653, 35.01957176219339]),
            {
              "label": 0,
              "system:index": "1412"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70043626165936, 35.01955968083009]),
            {
              "label": 0,
              "system:index": "1413"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70052477455685, 35.019542107934825]),
            {
              "label": 0,
              "system:index": "1414"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70062938070843, 35.019531124873374]),
            {
              "label": 0,
              "system:index": "1415"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70068302488873, 35.01952124011679]),
            {
              "label": 0,
              "system:index": "1416"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70063206291745, 35.019466324780744]),
            {
              "label": 0,
              "system:index": "1417"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70068973041127, 35.01942898233117]),
            {
              "label": 0,
              "system:index": "1418"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70076349115918, 35.01942788402356]),
            {
              "label": 0,
              "system:index": "1419"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70077958441327, 35.01953002656713]),
            {
              "label": 0,
              "system:index": "1420"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70077556109975, 35.019617891018676]),
            {
              "label": 0,
              "system:index": "1421"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70075544453213, 35.019695870640305]),
            {
              "label": 0,
              "system:index": "1422"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70075276232312, 35.01976176885417]),
            {
              "label": 0,
              "system:index": "1423"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70064547396252, 35.01980350436212]),
            {
              "label": 0,
              "system:index": "1424"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70055830216954, 35.019788128124816]),
            {
              "label": 0,
              "system:index": "1425"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7005703721101, 35.0196717079486]),
            {
              "label": 0,
              "system:index": "1426"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70060255861829, 35.019640955421536]),
            {
              "label": 0,
              "system:index": "1427"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7005878064687, 35.01956956558202]),
            {
              "label": 0,
              "system:index": "1428"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70056500769208, 35.019515748584844]),
            {
              "label": 0,
              "system:index": "1429"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70052745676587, 35.01945863663077]),
            {
              "label": 0,
              "system:index": "1430"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70048722363065, 35.019402622944725]),
            {
              "label": 0,
              "system:index": "1431"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70042687392781, 35.01933782275027]),
            {
              "label": 0,
              "system:index": "1432"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70039334631512, 35.0192851039101]),
            {
              "label": 0,
              "system:index": "1433"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7002632591779, 35.01923567996658]),
            {
              "label": 0,
              "system:index": "1434"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70016133523534, 35.01922250024328]),
            {
              "label": 0,
              "system:index": "1435"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69999101496289, 35.01921700869126]),
            {
              "label": 0,
              "system:index": "1436"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69987836218426, 35.01921700869126]),
            {
              "label": 0,
              "system:index": "1437"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69980594254086, 35.019227991794914]),
            {
              "label": 0,
              "system:index": "1438"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69979789591382, 35.01930487347914]),
            {
              "label": 0,
              "system:index": "1439"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69980996585439, 35.01938944324832]),
            {
              "label": 0,
              "system:index": "1440"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69980460143636, 35.01951025705254]),
            {
              "label": 0,
              "system:index": "1441"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69976705051015, 35.01952453503579]),
            {
              "label": 0,
              "system:index": "1442"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69972681737492, 35.01952343672948]),
            {
              "label": 0,
              "system:index": "1443"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69971340632985, 35.01950915874602]),
            {
              "label": 0,
              "system:index": "1444"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69970267749379, 35.01944985017274]),
            {
              "label": 0,
              "system:index": "1445"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69972681737492, 35.019422392485346]),
            {
              "label": 0,
              "system:index": "1446"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6997576627786, 35.01944216202119]),
            {
              "label": 0,
              "system:index": "1447"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69980728364537, 35.01946852139489]),
            {
              "label": 0,
              "system:index": "1448"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69987165666173, 35.01948829091958]),
            {
              "label": 0,
              "system:index": "1449"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69998028612683, 35.01953551809814]),
            {
              "label": 0,
              "system:index": "1450"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70006343460629, 35.019549796076966]),
            {
              "label": 0,
              "system:index": "1451"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7001358542497, 35.019660724904554]),
            {
              "label": 0,
              "system:index": "1452"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70026728249142, 35.01977385018761]),
            {
              "label": 0,
              "system:index": "1453"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7004255328233, 35.01977604679348]),
            {
              "label": 0,
              "system:index": "1454"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70056232548306, 35.01976616206651]),
            {
              "label": 0,
              "system:index": "1455"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70068436599324, 35.01975737564157]),
            {
              "label": 0,
              "system:index": "1456"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70077690220425, 35.01984194494271]),
            {
              "label": 0,
              "system:index": "1457"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70082920528004, 35.01983535513017]),
            {
              "label": 0,
              "system:index": "1458"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70082920528004, 35.019811192479686]),
            {
              "label": 0,
              "system:index": "1459"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70084663963864, 35.019794717941174]),
            {
              "label": 0,
              "system:index": "1460"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70090296602795, 35.019772751884624]),
            {
              "label": 0,
              "system:index": "1461"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70094990468571, 35.019733212968006]),
            {
              "label": 0,
              "system:index": "1462"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70094319916318, 35.019702460464096]),
            {
              "label": 0,
              "system:index": "1463"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.701000866657, 35.01968159268699]),
            {
              "label": 0,
              "system:index": "1464"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70097672677586, 35.01962997237337]),
            {
              "label": 0,
              "system:index": "1465"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70097136235783, 35.019525633342084]),
            {
              "label": 0,
              "system:index": "1466"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70110010839055, 35.01955638591251]),
            {
              "label": 0,
              "system:index": "1467"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7011269304807, 35.01954759946499]),
            {
              "label": 0,
              "system:index": "1468"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70117789245198, 35.019494880760085]),
            {
              "label": 0,
              "system:index": "1469"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7012167844827, 35.01946522647364]),
            {
              "label": 0,
              "system:index": "1470"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70124092436383, 35.01944985017274]),
            {
              "label": 0,
              "system:index": "1471"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70126640534947, 35.019421294177654]),
            {
              "label": 0,
              "system:index": "1472"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70128383970807, 35.0194004263288]),
            {
              "label": 0,
              "system:index": "1473"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70130529738019, 35.01938175509109]),
            {
              "label": 0,
              "system:index": "1474"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70133211947034, 35.019351002455]),
            {
              "label": 0,
              "system:index": "1475"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7013267550523, 35.019279612362304]),
            {
              "label": 0,
              "system:index": "1476"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70138710475514, 35.01930926671605]),
            {
              "label": 0,
              "system:index": "1477"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70135089493344, 35.01924666306772]),
            {
              "label": 0,
              "system:index": "1478"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70144074893544, 35.01925544954758]),
            {
              "label": 0,
              "system:index": "1479"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70139917469571, 35.01919614079027]),
            {
              "label": 0,
              "system:index": "1480"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70149305201123, 35.01918955092569]),
            {
              "label": 0,
              "system:index": "1481"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70157485938618, 35.01924446644763]),
            {
              "label": 0,
              "system:index": "1482"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70159765816281, 35.01926862926558]),
            {
              "label": 0,
              "system:index": "1483"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70157083607266, 35.019351002455]),
            {
              "label": 0,
              "system:index": "1484"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70156815386365, 35.01942788402356]),
            {
              "label": 0,
              "system:index": "1485"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70165934897015, 35.019414704331226]),
            {
              "label": 0,
              "system:index": "1486"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7016861710603, 35.01936198554064]),
            {
              "label": 0,
              "system:index": "1487"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70168751216481, 35.01927192419474]),
            {
              "label": 0,
              "system:index": "1488"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70166337228368, 35.01923348334618]),
            {
              "label": 0,
              "system:index": "1489"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70162984467099, 35.01919723910098]),
            {
              "label": 0,
              "system:index": "1490"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7015238974149, 35.01915550328357]),
            {
              "label": 0,
              "system:index": "1491"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7015601072366, 35.01916648639548]),
            {
              "label": 0,
              "system:index": "1492"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70153060293744, 35.01921920531211]),
            {
              "label": 0,
              "system:index": "1493"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7012717697675, 35.01965633168651]),
            {
              "label": 0,
              "system:index": "1494"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7013803992326, 35.0197046570719]),
            {
              "label": 0,
              "system:index": "1495"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70151048636983, 35.01971564011004]),
            {
              "label": 0,
              "system:index": "1496"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70171835756848, 35.019714541806295]),
            {
              "label": 0,
              "system:index": "1497"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70186319685529, 35.01954320624089]),
            {
              "label": 0,
              "system:index": "1498"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70191281772206, 35.019452046787336]),
            {
              "label": 0,
              "system:index": "1499"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70178407168935, 35.01943886709887]),
            {
              "label": 0,
              "system:index": "1500"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70156278944562, 35.019531124873374]),
            {
              "label": 0,
              "system:index": "1501"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70151316857884, 35.019638758812036]),
            {
              "label": 0,
              "system:index": "1502"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69562706089566, 35.01989027021838]),
            {
              "label": 0,
              "system:index": "1503"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69565388298581, 35.019894663423855]),
            {
              "label": 0,
              "system:index": "1504"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69562706089566, 35.01979361963847]),
            {
              "label": 0,
              "system:index": "1505"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69567534065793, 35.01975847394473]),
            {
              "label": 0,
              "system:index": "1506"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69564851856778, 35.019714541806295]),
            {
              "label": 0,
              "system:index": "1507"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69567534065793, 35.01964425033571]),
            {
              "label": 0,
              "system:index": "1508"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69562169647763, 35.01961349779834]),
            {
              "label": 0,
              "system:index": "1509"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6956163320596, 35.019433375561405]),
            {
              "label": 0,
              "system:index": "1510"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69564315414975, 35.019341117676625]),
            {
              "label": 0,
              "system:index": "1511"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69565388298581, 35.01926203940683]),
            {
              "label": 0,
              "system:index": "1512"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69563242531369, 35.01917856781686]),
            {
              "label": 0,
              "system:index": "1513"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69558950996945, 35.01906434339777]),
            {
              "label": 0,
              "system:index": "1514"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69542321301053, 35.019147815104354]),
            {
              "label": 0,
              "system:index": "1515"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69514426327298, 35.01926203940683]),
            {
              "label": 0,
              "system:index": "1516"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69487067795346, 35.019367477082895]),
            {
              "label": 0,
              "system:index": "1517"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6942644987161, 35.01919174754726]),
            {
              "label": 0,
              "system:index": "1518"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69424304104398, 35.01913024212057]),
            {
              "label": 0,
              "system:index": "1519"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69406601524899, 35.01917856781686]),
            {
              "label": 0,
              "system:index": "1520"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69403382874081, 35.01912145562726]),
            {
              "label": 0,
              "system:index": "1521"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6939050827081, 35.01923567996658]),
            {
              "label": 0,
              "system:index": "1522"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69384607410977, 35.019341117676625]),
            {
              "label": 0,
              "system:index": "1523"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69387826061795, 35.01942898233117]),
            {
              "label": 0,
              "system:index": "1524"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69393190479825, 35.01956956558202]),
            {
              "label": 0,
              "system:index": "1525"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69399091339658, 35.01999570708437]),
            {
              "label": 0,
              "system:index": "1526"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69388362503598, 35.020180221272675]),
            {
              "label": 0,
              "system:index": "1527"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6940123710687, 35.02025051228248]),
            {
              "label": 0,
              "system:index": "1528"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69448980427335, 35.020241725909564]),
            {
              "label": 0,
              "system:index": "1529"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69482776260922, 35.02023293953571]),
            {
              "label": 0,
              "system:index": "1530"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69519790745328, 35.020210973596896]),
            {
              "label": 0,
              "system:index": "1531"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69542857742856, 35.02020218721973]),
            {
              "label": 0,
              "system:index": "1532"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69558414555142, 35.020210973596896]),
            {
              "label": 0,
              "system:index": "1533"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69553050137112, 35.0201538621284]),
            {
              "label": 0,
              "system:index": "1534"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69562706089566, 35.02013628936085]),
            {
              "label": 0,
              "system:index": "1535"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69557341671536, 35.02005281866334]),
            {
              "label": 0,
              "system:index": "1536"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69737586117337, 35.01982876531712]),
            {
              "label": 0,
              "system:index": "1537"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69741877651761, 35.01978044000509]),
            {
              "label": 0,
              "system:index": "1538"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69749924278806, 35.020131896168344]),
            {
              "label": 0,
              "system:index": "1539"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69753142929623, 35.02011432339608]),
            {
              "label": 0,
              "system:index": "1540"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69759043789456, 35.02041745318867]),
            {
              "label": 0,
              "system:index": "1541"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6977245483453, 35.02040866683367]),
            {
              "label": 0,
              "system:index": "1542"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6977245483453, 35.02029883731671]),
            {
              "label": 0,
              "system:index": "1543"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67851963702515, 35.00446666522783]),
            {
              "label": 0,
              "system:index": "1544"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67808914247826, 35.00448753688722]),
            {
              "label": 0,
              "system:index": "1545"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6780797547467, 35.004573220485675]),
            {
              "label": 0,
              "system:index": "1546"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67810389462784, 35.00462814582212]),
            {
              "label": 0,
              "system:index": "1547"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6780797547467, 35.00468416962728]),
            {
              "label": 0,
              "system:index": "1548"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67805025044754, 35.00467648008768]),
            {
              "label": 0,
              "system:index": "1549"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67805293265656, 35.00460617569196]),
            {
              "label": 0,
              "system:index": "1550"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6785303658612, 35.00458969809047]),
            {
              "label": 0,
              "system:index": "1551"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67851561371162, 35.00458640256978]),
            {
              "label": 0,
              "system:index": "1552"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67853841248825, 35.00469845019895]),
            {
              "label": 0,
              "system:index": "1553"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67852366033867, 35.00472151880944]),
            {
              "label": 0,
              "system:index": "1554"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67853304807022, 35.004378784498385]),
            {
              "label": 0,
              "system:index": "1555"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67851829592064, 35.004374390459425]),
            {
              "label": 0,
              "system:index": "1556"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67851963702515, 35.00425575131853]),
            {
              "label": 0,
              "system:index": "1557"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6785303658612, 35.00420412126834]),
            {
              "label": 0,
              "system:index": "1558"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67850890818909, 35.00415468821099]),
            {
              "label": 0,
              "system:index": "1559"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6785290247567, 35.004121732822846]),
            {
              "label": 0,
              "system:index": "1560"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67877042356804, 35.00422828852993]),
            {
              "label": 0,
              "system:index": "1561"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67878651682213, 35.004218401923765]),
            {
              "label": 0,
              "system:index": "1562"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67908290091827, 35.004597387638235]),
            {
              "label": 0,
              "system:index": "1563"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67908021870926, 35.00469625318809]),
            {
              "label": 0,
              "system:index": "1564"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67905607882813, 35.00468416962728]),
            {
              "label": 0,
              "system:index": "1565"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67899170581177, 35.00460288017194]),
            {
              "label": 0,
              "system:index": "1566"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67884820762947, 35.004609471211865]),
            {
              "label": 0,
              "system:index": "1567"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6787999278672, 35.004565530935636]),
            {
              "label": 0,
              "system:index": "1568"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67875298920944, 35.00455015183336]),
            {
              "label": 0,
              "system:index": "1569"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67853304807022, 35.00455344735552]),
            {
              "label": 0,
              "system:index": "1570"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67851963702515, 35.00454795481852]),
            {
              "label": 0,
              "system:index": "1571"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67808243695572, 35.00444359654549]),
            {
              "label": 0,
              "system:index": "1572"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67805427376106, 35.004411739782974]),
            {
              "label": 0,
              "system:index": "1573"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67808914247826, 35.004374390459425]),
            {
              "label": 0,
              "system:index": "1574"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67807573143318, 35.004332647077604]),
            {
              "label": 0,
              "system:index": "1575"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6780609792836, 35.00429419920711]),
            {
              "label": 0,
              "system:index": "1576"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67809450689629, 35.00426234238645]),
            {
              "label": 0,
              "system:index": "1577"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6780797547467, 35.004242569181166]),
            {
              "label": 0,
              "system:index": "1578"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67712220612839, 35.00427662303173]),
            {
              "label": 0,
              "system:index": "1579"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67710879508331, 35.00426893345381]),
            {
              "label": 0,
              "system:index": "1580"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67706722084358, 35.00438976959471]),
            {
              "label": 0,
              "system:index": "1581"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67710477176979, 35.00449302942826]),
            {
              "label": 0,
              "system:index": "1582"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6771235472329, 35.004482044345764]),
            {
              "label": 0,
              "system:index": "1583"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67708331409767, 35.004776444046314]),
            {
              "label": 0,
              "system:index": "1584"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67712622944191, 35.004765459001874]),
            {
              "label": 0,
              "system:index": "1585"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67708599630669, 35.00469625318809]),
            {
              "label": 0,
              "system:index": "1586"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67710208956078, 35.00468307112169]),
            {
              "label": 0,
              "system:index": "1587"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67467700309159, 35.00615732548835]),
            {
              "label": 0,
              "system:index": "1588"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67478965587021, 35.00523898618246]),
            {
              "label": 0,
              "system:index": "1589"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67477356261612, 35.00540156374832]),
            {
              "label": 0,
              "system:index": "1590"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.674752104944, 35.005586110864]),
            {
              "label": 0,
              "system:index": "1591"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67473064727189, 35.00571353601044]),
            {
              "label": 0,
              "system:index": "1592"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6747681981981, 35.00579262738081]),
            {
              "label": 0,
              "system:index": "1593"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67482720679642, 35.00579262738081]),
            {
              "label": 0,
              "system:index": "1594"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67510615653397, 35.00578383945454]),
            {
              "label": 0,
              "system:index": "1595"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67595373458268, 35.00583656699798]),
            {
              "label": 0,
              "system:index": "1596"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67590545482041, 35.00583656699798]),
            {
              "label": 0,
              "system:index": "1597"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67592691249253, 35.00573989980906]),
            {
              "label": 0,
              "system:index": "1598"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67599128550889, 35.005603686758064]),
            {
              "label": 0,
              "system:index": "1599"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67704807586075, 35.006087022365186]),
            {
              "label": 0,
              "system:index": "1600"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67710172004105, 35.00609141631217]),
            {
              "label": 0,
              "system:index": "1601"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.677992213434, 35.006108992097666]),
            {
              "label": 0,
              "system:index": "1602"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.677992213434, 35.00604747683187]),
            {
              "label": 0,
              "system:index": "1603"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67804049319626, 35.00604308288254]),
            {
              "label": 0,
              "system:index": "1604"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67809413737656, 35.00601671918164]),
            {
              "label": 0,
              "system:index": "1605"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67890952891709, 35.005972779661214]),
            {
              "label": 0,
              "system:index": "1606"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67887734240891, 35.00591565824942]),
            {
              "label": 0,
              "system:index": "1607"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67877005404831, 35.00580580926844]),
            {
              "label": 0,
              "system:index": "1608"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67872177428605, 35.00580580926844]),
            {
              "label": 0,
              "system:index": "1609"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6717802173555, 35.00458427866053]),
            {
              "label": 0,
              "system:index": "1610"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67220937079789, 35.004672159169246]),
            {
              "label": 0,
              "system:index": "1611"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67748259372117, 35.00566080838772]),
            {
              "label": 0,
              "system:index": "1612"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67649554080369, 35.005779445491044]),
            {
              "label": 0,
              "system:index": "1613"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.67650090522172, 35.006108992097666]),
            {
              "label": 0,
              "system:index": "1614"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57017698012267, 35.084340322427884]),
            {
              "label": 0,
              "system:index": "1615"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57018770895873, 35.08427886604494]),
            {
              "label": 0,
              "system:index": "1616"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56967272482787, 35.08337457391462]),
            {
              "label": 0,
              "system:index": "1617"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56964053831969, 35.08333945557141]),
            {
              "label": 0,
              "system:index": "1618"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56939377509032, 35.08337457391462]),
            {
              "label": 0,
              "system:index": "1619"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56913628302489, 35.08347114928044]),
            {
              "label": 0,
              "system:index": "1620"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56914701186095, 35.08310240635938]),
            {
              "label": 0,
              "system:index": "1621"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57248367987548, 35.082821458253115]),
            {
              "label": 0,
              "system:index": "1622"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57153954230223, 35.08112696947081]),
            {
              "label": 0,
              "system:index": "1623"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57127132140074, 35.081039171165486]),
            {
              "label": 0,
              "system:index": "1624"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5714429827777, 35.08086357427139]),
            {
              "label": 0,
              "system:index": "1625"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57157172881041, 35.080407020577944]),
            {
              "label": 0,
              "system:index": "1626"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57231201849852, 35.0801787427731]),
            {
              "label": 0,
              "system:index": "1627"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57241930685912, 35.080205082552396]),
            {
              "label": 0,
              "system:index": "1628"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57210817061339, 35.081276226372964]),
            {
              "label": 0,
              "system:index": "1629"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57210817061339, 35.0811884282283]),
            {
              "label": 0,
              "system:index": "1630"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57209744177733, 35.08108307032997]),
            {
              "label": 0,
              "system:index": "1631"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57405008994017, 35.08196982839412]),
            {
              "label": 0,
              "system:index": "1632"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57342781744872, 35.08203128651665]),
            {
              "label": 0,
              "system:index": "1633"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55831158555567, 35.08225946928833]),
            {
              "label": 0,
              "system:index": "1634"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55796826280177, 35.0822419098786]),
            {
              "label": 0,
              "system:index": "1635"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5579736272198, 35.082145333057476]),
            {
              "label": 0,
              "system:index": "1636"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55752838052332, 35.082496520949846]),
            {
              "label": 0,
              "system:index": "1637"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55763030446589, 35.08241311396231]),
            {
              "label": 0,
              "system:index": "1638"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55788243211329, 35.08263699568348]),
            {
              "label": 0,
              "system:index": "1639"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5581184665066, 35.08261504652229]),
            {
              "label": 0,
              "system:index": "1640"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55807018674433, 35.08271601261485]),
            {
              "label": 0,
              "system:index": "1641"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55834913648188, 35.082483351431165]),
            {
              "label": 0,
              "system:index": "1642"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55860662854731, 35.08245701238745]),
            {
              "label": 0,
              "system:index": "1643"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55868173039973, 35.08234726628031]),
            {
              "label": 0,
              "system:index": "1644"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55883193410456, 35.082610656689354]),
            {
              "label": 0,
              "system:index": "1645"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55897677339136, 35.08261943635501]),
            {
              "label": 0,
              "system:index": "1646"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55893922246516, 35.08275552105184]),
            {
              "label": 0,
              "system:index": "1647"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55899286664545, 35.08288721570356]),
            {
              "label": 0,
              "system:index": "1648"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55904651082575, 35.08293989350472]),
            {
              "label": 0,
              "system:index": "1649"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55911624826014, 35.08289160552162]),
            {
              "label": 0,
              "system:index": "1650"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55907869733393, 35.082847707330366]),
            {
              "label": 0,
              "system:index": "1651"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55899823106348, 35.08214972291548]),
            {
              "label": 0,
              "system:index": "1652"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55913770593226, 35.08219362148232]),
            {
              "label": 0,
              "system:index": "1653"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55879974759638, 35.08208387502087]),
            {
              "label": 0,
              "system:index": "1654"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55886948503077, 35.08211460404496]),
            {
              "label": 0,
              "system:index": "1655"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55897677339136, 35.08210582432498]),
            {
              "label": 0,
              "system:index": "1656"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55860662854731, 35.08232092719265]),
            {
              "label": 0,
              "system:index": "1657"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55864954389155, 35.08219362148232]),
            {
              "label": 0,
              "system:index": "1658"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55852079785883, 35.08211460404496]),
            {
              "label": 0,
              "system:index": "1659"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55839205182612, 35.08223752002557]),
            {
              "label": 0,
              "system:index": "1660"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55824184812128, 35.082470181910374]),
            {
              "label": 0,
              "system:index": "1661"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.558011178146, 35.08259309735521]),
            {
              "label": 0,
              "system:index": "1662"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55785561002314, 35.08248774127098]),
            {
              "label": 0,
              "system:index": "1663"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55801654256403, 35.08250091078895]),
            {
              "label": 0,
              "system:index": "1664"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55814528859675, 35.08244823270431]),
            {
              "label": 0,
              "system:index": "1665"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55811310208857, 35.08229458809646]),
            {
              "label": 0,
              "system:index": "1666"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5576142112118, 35.0822419098786]),
            {
              "label": 0,
              "system:index": "1667"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55765712655604, 35.08214972291548]),
            {
              "label": 0,
              "system:index": "1668"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55761957562983, 35.082364825667376]),
            {
              "label": 0,
              "system:index": "1669"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5572172442776, 35.082404334274436]),
            {
              "label": 0,
              "system:index": "1670"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55715287126124, 35.08254480916681]),
            {
              "label": 0,
              "system:index": "1671"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55709922708094, 35.082641385515]),
            {
              "label": 0,
              "system:index": "1672"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55713141358912, 35.083168163583366]),
            {
              "label": 0,
              "system:index": "1673"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58629116487087, 35.08244059928661]),
            {
              "label": 0,
              "system:index": "1674"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5862965292889, 35.08216842861527]),
            {
              "label": 0,
              "system:index": "1675"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58626970719875, 35.08194015573911]),
            {
              "label": 0,
              "system:index": "1676"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58622142743648, 35.081896257035865]),
            {
              "label": 0,
              "system:index": "1677"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58623215627254, 35.08148799796415]),
            {
              "label": 0,
              "system:index": "1678"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5862053341824, 35.08132118184151]),
            {
              "label": 0,
              "system:index": "1679"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5859371132809, 35.08103583768307]),
            {
              "label": 0,
              "system:index": "1680"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58558842610897, 35.08100510825263]),
            {
              "label": 0,
              "system:index": "1681"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58561524819912, 35.08088658034111]),
            {
              "label": 0,
              "system:index": "1682"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58505198430599, 35.08060562460362]),
            {
              "label": 0,
              "system:index": "1683"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58487495851101, 35.08056172518226]),
            {
              "label": 0,
              "system:index": "1684"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58466038178982, 35.08064513406268]),
            {
              "label": 0,
              "system:index": "1685"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58459600877346, 35.08055733523881]),
            {
              "label": 0,
              "system:index": "1686"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58515390824856, 35.08054855535122]),
            {
              "label": 0,
              "system:index": "1687"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58536848496975, 35.08054416540708]),
            {
              "label": 0,
              "system:index": "1688"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58571180772365, 35.080579284953636]),
            {
              "label": 0,
              "system:index": "1689"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58631798696102, 35.080675863628684]),
            {
              "label": 0,
              "system:index": "1690"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5861516900021, 35.0806626938161]),
            {
              "label": 0,
              "system:index": "1691"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.586495012756, 35.0803641774937]),
            {
              "label": 0,
              "system:index": "1692"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58701536130489, 35.08049587600588]),
            {
              "label": 0,
              "system:index": "1693"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58693489503445, 35.080640744123706]),
            {
              "label": 0,
              "system:index": "1694"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58677932691158, 35.08092608966406]),
            {
              "label": 0,
              "system:index": "1695"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5868007845837, 35.081461658599046]),
            {
              "label": 0,
              "system:index": "1696"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58667203855099, 35.081264113089674]),
            {
              "label": 0,
              "system:index": "1697"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58581909608425, 35.08102266792857]),
            {
              "label": 0,
              "system:index": "1698"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58564207028927, 35.08155384633971]),
            {
              "label": 0,
              "system:index": "1699"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58565816354336, 35.081435319225434]),
            {
              "label": 0,
              "system:index": "1700"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58606049489559, 35.08174700126807]),
            {
              "label": 0,
              "system:index": "1701"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5861892409283, 35.08220354746258]),
            {
              "label": 0,
              "system:index": "1702"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58621606301845, 35.08251083673181]),
            {
              "label": 0,
              "system:index": "1703"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58621606301845, 35.082611802953345]),
            {
              "label": 0,
              "system:index": "1704"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58566889237942, 35.0826469216098]),
            {
              "label": 0,
              "system:index": "1705"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58598002862514, 35.08266009110206]),
            {
              "label": 0,
              "system:index": "1706"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58589419793667, 35.082870802689314]),
            {
              "label": 0,
              "system:index": "1707"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5858995623547, 35.08301127677841]),
            {
              "label": 0,
              "system:index": "1708"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58501443337978, 35.082870802689314]),
            {
              "label": 0,
              "system:index": "1709"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58501443337978, 35.08295859902333]),
            {
              "label": 0,
              "system:index": "1710"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58506807756008, 35.08302444621185]),
            {
              "label": 0,
              "system:index": "1711"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58365187120022, 35.08287958232696]),
            {
              "label": 0,
              "system:index": "1712"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58334609937252, 35.083002497154936]),
            {
              "label": 0,
              "system:index": "1713"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58325490426601, 35.08313858121272]),
            {
              "label": 0,
              "system:index": "1714"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5826755471188, 35.0831649200364]),
            {
              "label": 0,
              "system:index": "1715"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58268091153683, 35.08287519250824]),
            {
              "label": 0,
              "system:index": "1716"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58273992013515, 35.08273032835829]),
            {
              "label": 0,
              "system:index": "1717"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58355531167568, 35.08269081990912]),
            {
              "label": 0,
              "system:index": "1718"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58356067609371, 35.082339632853206]),
            {
              "label": 0,
              "system:index": "1719"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58387181233944, 35.08234841254802]),
            {
              "label": 0,
              "system:index": "1720"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58249315690578, 35.08213769961146]),
            {
              "label": 0,
              "system:index": "1721"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58242878388943, 35.0825591249403]),
            {
              "label": 0,
              "system:index": "1722"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5820640034634, 35.08196210508189]),
            {
              "label": 0,
              "system:index": "1723"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58293303918423, 35.081896257035865]),
            {
              "label": 0,
              "system:index": "1724"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58291694593014, 35.08186991780256]),
            {
              "label": 0,
              "system:index": "1725"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58380207490505, 35.08138703035172]),
            {
              "label": 0,
              "system:index": "1726"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58390936326565, 35.08135630105357]),
            {
              "label": 0,
              "system:index": "1727"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58508417081417, 35.081132415817656]),
            {
              "label": 0,
              "system:index": "1728"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58519145917477, 35.08111046625165]),
            {
              "label": 0,
              "system:index": "1729"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58613023232998, 35.080627574305474]),
            {
              "label": 0,
              "system:index": "1730"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57791194390835, 35.081567016008435]),
            {
              "label": 0,
              "system:index": "1731"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57791730832638, 35.081395810149054]),
            {
              "label": 0,
              "system:index": "1732"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5779226727444, 35.08151433732076]),
            {
              "label": 0,
              "system:index": "1733"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57779929112972, 35.08190064690725]),
            {
              "label": 0,
              "system:index": "1734"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57789048623623, 35.081896257035865]),
            {
              "label": 0,
              "system:index": "1735"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57803532552303, 35.08238792116304]),
            {
              "label": 0,
              "system:index": "1736"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57814797830166, 35.08235280239506]),
            {
              "label": 0,
              "system:index": "1737"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57835182618679, 35.082699599566126]),
            {
              "label": 0,
              "system:index": "1738"
            })]);

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




