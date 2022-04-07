"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RocketFill(props) {
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
    d: "M42.1318743,0.0261533353 C43.1724393,0.196104915 43.8934289,1.14054226 43.8019709,2.17416722 L43.7833428,2.32236349 C42.8976481,7.74521969 41.7204829,12.2077134 40.2518472,15.7098447 C38.9192395,18.8876014 36.659768,22.6433464 33.4734325,26.9770798 L32.6909162,28.0282732 C32.5575309,28.2053216 32.4226626,28.3832949 32.2863113,28.5621929 C31.0463193,30.1891087 30.2845442,32.1295586 30.086565,34.1655446 C29.8078864,37.0314528 29.1963138,39.0819427 28.2518472,40.3170145 C24.8378426,44.0791406 21.6666594,46.53545 18.7382976,47.6859425 C18.5957385,47.7419511 18.4422187,47.7644638 18.2895809,47.751744 C17.7392027,47.7058791 17.3302138,47.2225286 17.3760787,46.6721504 L18.1407112,37.4965861 C18.1454961,37.4391679 18.1453094,37.3814435 18.1401531,37.3240574 C18.0942611,36.8133014 17.671963,36.4268897 17.1714721,36.4138642 L17.054718,36.4175566 C15.4634469,36.5605342 13.8624899,35.9273668 12.2518472,34.5180544 C10.8335475,33.2770422 10.083231,32.0252479 10.0008977,30.7626715 L9.99330231,30.539752 C9.99304174,30.4518628 9.98119572,30.3643914 9.95807043,30.2795987 C9.81275428,29.7467728 9.26301156,29.4326341 8.73018569,29.5779503 L1.26340452,31.6143481 C1.04157984,31.6748457 0.805683697,31.6570565 0.595440548,31.563976 C0.126493285,31.3563601 -0.103721665,30.8322435 0.0447988242,30.3540816 L0.0858862192,30.2447291 L0.483973974,29.3540491 L0.483973974,29.3540491 L0.871094088,28.5051238 L0.871094088,28.5051238 L1.24724656,27.6979532 L1.24724656,27.6979532 L1.6124314,26.9325372 L1.6124314,26.9325372 L1.96664859,26.2088758 C2.02477082,26.0917452 2.08243606,25.9763543 2.13964432,25.8627032 L2.47741005,25.2016738 L2.47741005,25.2016738 L2.80420815,24.5823991 C2.85776053,24.4826662 2.91085592,24.3846731 2.96349433,24.2884197 L3.27384096,23.731777 L3.27384096,23.731777 L3.57321995,23.2168889 C3.72016754,22.9698836 3.86300226,22.7385362 4.00172412,22.5228468 L4.27368401,22.1123453 C4.62898544,21.5928465 4.95503983,21.1846934 5.25184718,20.8878861 C6.35806047,19.7816728 8.51911118,18.7610418 11.7349993,17.8259931 C13.4086316,17.3393694 14.9260132,16.4237628 16.1367107,15.1699449 C16.4372457,14.8587066 16.7346762,14.5539455 17.0290022,14.2556616 L17.902667,13.3802415 C18.6229599,12.6669177 19.3238499,11.9940762 20.0053371,11.3617172 L20.8138083,10.6223179 L20.8138083,10.6223179 L21.6036529,9.92178168 C23.6850693,8.10550261 25.5678008,6.70376326 27.2518472,5.71656364 C28.1565526,5.18621906 29.2085439,4.64625469 30.4078211,4.09667054 L31.2291593,3.72885595 C31.3696857,3.66731599 31.5120304,3.60565727 31.6561935,3.54387979 L32.5429921,3.17178974 C32.845865,3.04728468 33.1560113,2.92230456 33.473431,2.79684939 L34.4475101,2.41905873 L34.4475101,2.41905873 L35.4652294,2.03841776 L35.4652294,2.03841776 L36.526589,1.65492648 L36.526589,1.65492648 L37.6315889,1.2685849 L37.6315889,1.2685849 L38.780229,0.879393007 C38.9753057,0.814290166 39.1722007,0.749068563 39.3709141,0.683728197 L40.5850146,0.290260846 C40.7910013,0.224445429 40.9988065,0.158511249 41.2084299,0.092458306 C41.5068218,-0.00156582827 41.8231104,-0.0242759162 42.1318743,0.0261533353 Z M9.25184718,34.1629546 C9.61859741,34.1629546 9.97612512,34.2024409 10.3204109,34.2773942 C9.53326022,34.6582122 9.03522761,35.98946 8.82631306,38.2711378 L8.800673,38.5741356 C8.75787289,39.124776 9.16955884,39.6058547 9.72019931,39.6486548 C9.77395994,39.6528335 9.82797048,39.6526571 9.88170267,39.6481273 C12.3268093,39.4419991 13.7458836,38.9264189 14.1389254,38.1013868 C14.2128938,38.4435192 14.2518472,38.7986879 14.2518472,39.1629546 C14.2518472,41.0039038 12.9185138,42.3372371 10.2518472,43.1629546 L5.94501029,43.5971683 C5.88098602,43.6036233 5.81648818,43.6038833 5.75241395,43.5979448 C5.20248601,43.5469771 4.79799884,43.0598549 4.84896657,42.509927 L5.25184718,38.1629546 C6.07756468,35.496288 7.41089801,34.1629546 9.25184718,34.1629546 Z M29.7518472,11.1629546 C27.2665658,11.1629546 25.2518472,13.1776733 25.2518472,15.6629546 C25.2518472,18.148236 27.2665658,20.1629546 29.7518472,20.1629546 C32.2371285,20.1629546 34.2518472,18.148236 34.2518472,15.6629546 C34.2518472,13.1776733 32.2371285,11.1629546 29.7518472,11.1629546 Z",
    transform: "translate(5.748 4.837)"
  }));
}

var _default = RocketFill;
exports["default"] = _default;