"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Cat(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M39.2989876,15.602776 C44.0171924,14.7572931 47.0752645,11.4059492 46.9533952,8.86694529 C46.7566641,4.76828735 43.7983566,2.70832474 37.4192358,2.68206877 C37.3931036,2.68196121 37.365642,2.6819255 37.3368511,2.68196164 C36.6273179,2.68286032 36.0308774,2.14947469 35.9528112,1.44424861 C35.8802336,0.788604366 36.3529024,0.19826387 37.0085466,0.125686202 C37.0295107,0.123365545 37.0505326,0.121600609 37.0715902,0.12039325 C37.156752,0.115487411 37.2341418,0.110850414 37.3037583,0.106459337 C39.2019668,-0.0132706451 41.300439,-0.0836368938 42.4318613,0.184373753 C47.1528597,1.3026811 49.772561,4.14903033 49.992015,8.7210949 C50.1665138,12.3565704 47.4629094,15.910753 43.6553397,18.7213388 C43.6185238,18.7485147 43.5813633,18.7752296 43.5438626,18.8014945 C44.2807082,20.0908411 44.7523614,21.5313986 44.9588223,23.123167 C45.6769437,27.7306919 45.0082381,30.5969718 45.521253,32.4954682 C46.0342679,34.3939647 48.3669979,35.4355382 49.2879628,37.5560854 C50.2089277,39.6766327 50.0383148,40.6055118 49.768893,42.2757769 C49.6090646,43.2666238 49.2493435,44.7139973 48.6897297,46.6178973 C48.5628547,47.0495369 48.1667459,47.3459738 47.716846,47.3459738 L44.3455415,47.3459738 C43.785503,47.3459738 43.3315021,46.8919729 43.3315021,46.3319344 L43.3315154,45.8223958 C43.3315154,45.2623647 43.7855103,44.8083697 44.3455415,44.8083697 C44.3494688,44.8083697 44.3533961,44.8083925 44.3573231,44.8084381 C44.8121563,44.813723 45.200133,44.6935726 45.521253,44.4479868 C46.3320099,43.827937 46.3993062,43.4818742 46.3993062,42.2757769 C46.3993062,41.471712 46.1066218,40.6627584 45.521253,39.8489161 C43.1704297,38.3206277 41.205895,37.1271649 39.4723006,36.2487981 C39.2937551,38.0112636 38.9426586,39.6133355 38.4190114,41.0550137 C37.8683768,42.5709919 36.9125761,44.499814 35.5516094,46.8414801 C35.3700903,47.1538 35.0361281,47.3459738 34.6748901,47.3459738 L32.0073589,47.3459738 C31.4575042,47.3459738 31.0078327,46.9077498 30.9936566,46.3580778 L30.981769,45.897139 C30.9675492,45.3457739 31.3966222,44.8841515 31.9475545,44.858089 L33.3427442,44.7920879 C33.7548972,44.7725905 34.1141361,44.505299 34.2512333,44.1161273 L34.2512564,44.1161354 C34.7133669,42.8043623 34.9030773,41.5148832 34.8203875,40.2476981 C34.7271747,38.8192528 34.252038,36.8707968 33.3949774,34.40233 C29.8347925,34.3704168 22.6126136,35.9148549 20.9504468,36.0531471 C20.5579548,36.0858024 20.1550367,36.0836455 19.7416925,36.0466765 C19.4139241,37.0681014 19.2062842,38.1473986 19.1187727,39.2845682 C19.0163122,40.6159921 19.0069648,42.9566648 19.0907304,46.3065861 C19.0909416,46.3150339 19.0910473,46.323484 19.0910473,46.3319344 C19.0910473,46.8919708 18.6370481,47.3459738 18.0770118,47.3459738 L15.3059508,47.3459738 C14.7459123,47.3459738 14.2919114,46.8919729 14.2919114,46.3319344 L14.2919114,45.6360078 C14.2919114,45.0759693 14.7459123,44.6219684 15.3059508,44.6219684 L15.7327346,44.6219684 C15.8480812,44.6219684 15.9625292,44.6016835 16.0708494,44.5620404 C16.5810839,44.3753048 16.8433315,43.8102988 16.6565959,43.3000643 L16.656649,43.3000449 C16.1145078,41.8187042 15.707562,40.3625094 15.4358115,38.9314607 L12.1037893,46.730338 C11.9442542,47.1037432 11.5773501,47.3459738 11.1712924,47.3459738 L7.49011777,47.3459738 C6.93007928,47.3459738 6.47607838,46.8919729 6.47607838,46.3319344 L6.47607838,45.8139966 C6.47607838,45.3222792 6.82885566,44.901421 7.31301565,44.8155424 L9.06451757,44.5048683 C9.28524635,44.4657162 9.48677976,44.3545253 9.63760863,44.1886798 C10.3495512,43.4058557 10.808423,42.4302083 11.014224,41.2617375 C11.5215986,38.3810309 11.8437021,38.0693073 11.014224,35.2989775 C10.7432497,34.3939647 8.76211552,33.5118623 7.49355363,29.5032379 C6.68147479,26.9370887 5.96111014,22.5779006 5.3324597,16.4256736 L5.33241123,16.4256786 C5.28577067,15.9692352 4.93844243,15.600987 4.48550336,15.5277605 L2.5379335,15.2128977 C2.23743273,15.1643158 1.97465244,14.9833087 1.82215602,14.719859 L0.28042612,12.0564028 C0.267156534,12.0334785 0.252993832,12.011083 0.237970601,11.9892677 C0.0793235338,11.7588958 0,11.5214755 0,11.2770069 C0,11.0810292 0.0509764229,10.8786684 0.152929269,10.6699246 C0.206819282,10.5595894 0.280300287,10.4599589 0.369795632,10.375884 L2.3847453,8.48297496 C2.52584752,8.35041896 2.62605492,8.18024075 2.67352562,7.99255095 L2.7879705,7.54007172 C2.89003499,7.1365288 3.11379812,6.77416438 3.42888646,6.5021655 C4.03396647,5.97983236 4.4808717,5.62998511 4.76960213,5.45262375 C5.13091523,5.23067631 5.87829315,4.96510211 7.01173588,4.65590116 C6.43582342,3.84997714 6.11975995,3.14471085 6.06354545,2.54010231 C5.97922369,1.63318948 5.90707172,0.735254883 6.27486322,0.700162229 C6.52005756,0.676767127 7.14225901,1.35282413 8.14146758,2.72833325 C8.06288873,0.990684657 8.23832255,0.223101093 8.66776902,0.425582551 C9.0972155,0.62806401 10.0404715,1.79920654 11.497537,3.93901013 L12.9199535,5.55923675 C13.6106415,6.34597869 14.1187525,7.27575997 14.4078745,8.28195145 C15.1260289,10.7812444 15.8096196,12.5808289 16.4586466,13.6807049 C17.6168285,15.6434222 19.0380819,18.0587845 23.6556526,17.7015937 C28.2732234,17.3444028 29.8252139,16.4086567 32.9016805,15.9251842 C34.3533022,15.6970591 35.9373994,15.5433225 37.653972,15.4639744 C38.2136003,15.4381074 38.7659907,15.4865026 39.2989876,15.602776 L39.2989876,15.602776 Z",
    transform: "translate(3 4)"
  }));
}

var _default = Cat;
exports["default"] = _default;