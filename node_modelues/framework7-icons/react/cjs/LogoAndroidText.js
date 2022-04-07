"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LogoAndroidText(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.34768756,3.11143101 C4.82764853,3.11143101 5.26385288,3.18202269 5.65630063,3.32318002 C6.0487397,3.4643547 6.42847679,3.69587008 6.79551621,4.01771747 L6.79551621,3.28083282 L8.94688843,3.28083282 L8.94688843,11.9540946 L6.79551621,11.9540946 L6.79551621,11.2172056 C6.42847679,11.539066 6.0487397,11.770577 5.65630063,11.911743 C5.26385288,12.052909 4.82764853,12.1234921 4.34768756,12.1234921 C3.71525934,12.1234921 3.13365643,12.0077344 2.6028745,11.7762233 C2.07208389,11.5447123 1.61611751,11.225675 1.23497102,10.8191159 C0.853820194,10.4125567 0.557372445,9.93541457 0.345623433,9.38768942 C0.13387442,8.83996427 0.0279999141,8.24989192 0.0279999141,7.61746369 C0.0279999141,6.98503981 0.13387442,6.39496745 0.345623433,5.84723362 C0.557372445,5.29951715 0.853820194,4.822375 1.23497102,4.41580718 C1.61611751,4.0092567 2.07208389,3.69022379 2.6028745,3.45869974 C3.13365643,3.22719737 3.71525934,3.11143101 4.34768756,3.11143101 Z M28.317014,0.680545585 L28.317014,11.9540946 L26.1656418,11.9540946 L26.1656418,11.225675 C25.8042486,11.5475355 25.425921,11.777637 25.0306631,11.9159799 C24.6353921,12.0543228 24.1977784,12.1234921 23.7178175,12.1234921 C23.0853849,12.1234921 22.503782,12.0077344 21.973,11.7762233 C21.4422095,11.5447123 20.986243,11.225675 20.6050965,10.8191159 C20.2239458,10.4125567 19.927498,9.93541457 19.7157489,9.38768942 C19.5039999,8.83996427 19.3981255,8.24989192 19.3981255,7.61746369 C19.3981255,6.98503981 19.5039999,6.39496745 19.7157489,5.84723362 C19.927498,5.29951715 20.2239458,4.822375 20.6050965,4.41580718 C20.986243,4.0092567 21.4422095,3.69022379 21.973,3.45869974 C22.503782,3.22719737 23.0853849,3.11143968 23.7178175,3.11143101 C24.1977784,3.11143968 24.6353921,3.18202269 25.0306631,3.32318002 C25.425921,3.4643547 25.8042486,3.69304693 26.1656418,4.00924803 L26.1656418,0.680545585 L28.317014,0.680545585 Z M38.3918574,3.11143101 C39.0186308,3.11143101 39.6087075,3.22860677 40.1620832,3.46293663 C40.7154503,3.69727948 41.1982388,4.01772615 41.6104486,4.42427662 C42.0226496,4.83084444 42.3487426,5.30798659 42.5887317,5.8557074 C42.8287079,6.40343689 42.9487068,6.99069044 42.9487068,7.61746369 C42.9487068,8.26118451 42.8287079,8.8583169 42.5887317,9.40886519 C42.3487426,9.95941349 42.0212359,10.4365556 41.606216,10.8402916 C41.1911788,11.2440276 40.7083903,11.558828 40.1578507,11.7846927 C39.6072937,12.0105575 39.0186308,12.1234921 38.3918574,12.1234921 C37.7650756,12.1234921 37.1749989,12.0105575 36.6216317,11.7846927 C36.068256,11.558828 35.5840581,11.2440276 35.1690295,10.8402916 C34.754001,10.4365556 34.4264943,9.95941349 34.1865094,9.40886519 C33.946529,8.8583169 33.8265387,8.26118451 33.8265387,7.61746369 C33.8265387,6.99069044 33.946529,6.40343689 34.1865094,5.8557074 C34.4264943,5.30798659 34.7525872,4.83084444 35.1647927,4.42427662 C35.5769981,4.01772615 36.0612002,3.69727948 36.6173948,3.46293663 C37.1735895,3.22860677 37.7650756,3.11143101 38.3918574,3.11143101 Z M55.9719996,0.680545585 L55.9719996,11.9540946 L53.8206274,11.9540946 L53.8206274,11.225675 C53.4592343,11.5475355 53.0809066,11.777637 52.6856486,11.9159799 C52.2903778,12.0543228 51.852764,12.1234921 51.3728031,12.1234921 C50.7403705,12.1234921 50.1587676,12.0077344 49.6279856,11.7762233 C49.0971951,11.5447123 48.6412287,11.225675 48.2600822,10.8191159 C47.8789314,10.4125567 47.5824836,9.93541457 47.3707346,9.38768942 C47.1589856,8.83996427 47.0531111,8.24989192 47.0531111,7.61746369 C47.0531111,6.98503981 47.1589856,6.39496745 47.3707346,5.84723362 C47.5824836,5.29951715 47.8789314,4.822375 48.2600822,4.41580718 C48.6412287,4.0092567 49.0971951,3.69022379 49.6279856,3.45869974 C50.1587676,3.22719737 50.7403705,3.11143968 51.3728031,3.11143101 C51.852764,3.11143968 52.2903778,3.18202269 52.6856486,3.32318002 C53.0809066,3.4643547 53.4592343,3.69304693 53.8206274,4.00924803 L53.8206274,0.680545585 L55.9719996,0.680545585 Z M14.3541467,3.11143101 C16.6089433,3.13879515 18.3676596,5.05301004 18.3796634,7.08385428 L18.3796634,11.9540946 L16.2282868,11.9540946 L16.2282868,7.02456385 C16.2282868,6.02308183 15.4291026,5.33188271 14.4751362,5.25887505 L14.3239999,5.25199973 L14.1730645,5.25887564 C13.2190981,5.33188663 12.419914,6.02308183 12.419914,7.02456385 L12.419914,11.9540946 L10.2685374,11.9540946 L10.2685374,7.08385428 C10.2805499,5.05301004 12.0392576,3.13879515 14.294054,3.11143101 L14.3541467,3.11143101 Z M46.0638909,3.28083282 L46.0638909,11.9540946 L43.9125143,11.9540946 L43.9125143,3.28083282 L46.0638909,3.28083282 Z M33.6215375,3.05649024 L33.6215375,5.22653599 C32.1797855,5.22653599 31.5440008,5.97037225 31.5440008,7.02456385 L31.5440008,11.9540946 L29.3926242,11.9540946 L29.3926242,7.08385428 C29.4046366,5.05301004 30.5777213,3.05649024 33.6215375,3.05649024 Z M4.62720078,5.13575729 C4.29404345,5.13575729 3.98206188,5.19787519 3.69126476,5.32209799 C3.40045897,5.44632945 3.14777216,5.61996381 2.93320435,5.84300107 C2.71862784,6.06605135 2.55063978,6.328617 2.42924013,6.63071104 C2.30783182,6.93280942 2.24713199,7.26172553 2.24713199,7.61746369 C2.24713199,7.97320619 2.30783182,8.3021223 2.42924013,8.60421635 C2.55063978,8.90631473 2.71862784,9.16888471 2.93320435,9.39192197 C3.14777216,9.61496792 3.40045897,9.78860227 3.69126476,9.91282507 C3.98206188,10.0370565 4.29404345,10.0991658 4.62720078,10.0991658 C4.79659391,10.0991658 4.97446083,10.0808218 5.16080586,10.0441122 C5.34714222,10.0074243 5.53489231,9.94529776 5.72406049,9.85777154 C5.91321999,9.77024965 6.09814694,9.65308256 6.27884567,9.50626592 C6.4595314,9.35945795 6.63175202,9.17876356 6.79551621,8.96418706 L6.79551621,6.27073599 C6.63175202,6.05616817 6.4595314,5.8768875 6.27884567,5.73288967 C6.09814694,5.5889092 5.91321999,5.47173776 5.72406049,5.3813884 C5.53489231,5.2910477 5.34714222,5.2275204 5.16080586,5.19081082 C4.97446083,5.15412293 4.79659391,5.13575729 4.62720078,5.13575729 Z M23.9973263,5.13575729 C23.664169,5.13575729 23.3521917,5.19787519 23.0613903,5.32209799 C22.7705845,5.44632945 22.5178977,5.61996381 22.3033299,5.84300107 C22.0887534,6.06605135 21.9207653,6.328617 21.7993657,6.63071104 C21.6779573,6.93280942 21.6172619,7.26172553 21.6172619,7.61746369 C21.6172619,7.97320619 21.6779573,8.3021223 21.7993657,8.60421635 C21.9207653,8.90631473 22.0887534,9.16888471 22.3033299,9.39192197 C22.5178977,9.61496792 22.7705845,9.78860227 23.0613903,9.91282507 C23.3521917,10.0370565 23.664169,10.0991658 23.9973263,10.0991658 C24.1667195,10.0991658 24.3445907,10.0808218 24.5309357,10.0441122 C24.7172678,10.0074243 24.9050178,9.94529776 25.094186,9.85777154 C25.2833455,9.77024965 25.4682725,9.65308256 25.6489713,9.50626592 C25.829657,9.35945795 26.0018819,9.17876356 26.1656418,8.96418706 L26.1656418,6.27073599 C26.0018819,6.05616817 25.829657,5.8768875 25.6489713,5.73288967 C25.4682725,5.5889092 25.2833455,5.47173776 25.094186,5.3813884 C24.9050178,5.2910477 24.7172678,5.2275204 24.5309357,5.19081082 C24.3445907,5.15412293 24.1667195,5.13575729 23.9973263,5.13575729 Z M38.3918574,5.13575729 C38.0699927,5.13575729 37.766485,5.19787519 37.4813341,5.32209799 C37.1961746,5.44632945 36.9477204,5.61855441 36.7359757,5.83876418 C36.5242223,6.05899131 36.3562342,6.32014755 36.2320115,6.62223727 C36.1077843,6.92433999 36.0456708,7.25607923 36.0456708,7.61746369 C36.0456708,7.98449878 36.1063706,8.31906119 36.2277789,8.62115522 C36.3491786,8.92325361 36.5157529,9.18440985 36.7275063,9.40462831 C36.9392509,9.6248511 37.1877052,9.79566231 37.4728647,9.91706195 C37.7580155,10.0384659 38.0643465,10.0991658 38.3918574,10.0991658 C38.7137135,10.0991658 39.017217,10.0384659 39.3023808,9.91706195 C39.5875317,9.79566231 39.8359816,9.6248511 40.0477393,9.40462831 C40.2594796,9.18440985 40.4260583,8.92325361 40.5474665,8.62115522 C40.6688618,8.31906119 40.7295704,7.98449878 40.7295704,7.61746369 C40.7295704,7.25607923 40.6674524,6.92433999 40.543234,6.62223727 C40.4189983,6.32014755 40.2496008,6.05899131 40.035033,5.83876418 C39.8204565,5.61855441 39.5720022,5.44632945 39.2896745,5.32209799 C39.0073381,5.19787519 38.708063,5.13575729 38.3918574,5.13575729 Z M51.6523119,5.13575729 C51.3191546,5.13575729 51.0071774,5.19787519 50.7163759,5.32209799 C50.4255701,5.44632945 50.1728834,5.61996381 49.9583155,5.84300107 C49.7437391,6.06605135 49.575751,6.328617 49.4543513,6.63071104 C49.332943,6.93280942 49.2722475,7.26172553 49.2722475,7.61746369 C49.2722475,7.97320619 49.332943,8.3021223 49.4543513,8.60421635 C49.575751,8.90631473 49.7437391,9.16888471 49.9583155,9.39192197 C50.1728834,9.61496792 50.4255701,9.78860227 50.7163759,9.91282507 C51.0071774,10.0370565 51.3191546,10.0991658 51.6523119,10.0991658 C51.8217051,10.0991658 51.9995763,10.0808218 52.1859214,10.0441122 C52.3722534,10.0074243 52.5600035,9.94529776 52.7491717,9.85777154 C52.9383311,9.77024965 53.1232581,9.65308256 53.3039569,9.50626592 C53.4846425,9.35945795 53.6568676,9.17876356 53.8206274,8.96418706 L53.8206274,6.27073599 C53.6568676,6.05616817 53.4846425,5.8768875 53.3039569,5.73288967 C53.1232581,5.5889092 52.9383311,5.47173776 52.7491717,5.3813884 C52.5600035,5.2910477 52.3722534,5.2275204 52.1859214,5.19081082 C51.9995763,5.15412293 51.8217051,5.13575729 51.6523119,5.13575729 Z M44.9883544,0.027999727 C45.1626523,0.027999727 45.3287843,0.0620422794 45.486746,0.13013172 C45.6447035,0.198229836 45.7822398,0.290825578 45.8993504,0.407923285 C46.0164568,0.525047012 46.1090569,0.662578922 46.1771463,0.820527692 C46.2452315,0.978502481 46.2792784,1.14463448 46.2792784,1.31892367 C46.2792784,1.49323888 46.2452358,1.65800917 46.1771463,1.81323454 C46.1090569,1.96848158 46.0164568,2.1046518 45.8993504,2.22175384 C45.7822398,2.33887323 45.6447035,2.43146898 45.486746,2.4995454 C45.3287843,2.56764352 45.1626523,2.6016774 44.9883544,2.6016774 C44.8140479,2.6016774 44.6492775,2.56763485 44.4940436,2.4995454 C44.3388008,2.43146898 44.2026306,2.33887323 44.0855242,2.22175384 C43.9684136,2.1046518 43.8758134,1.96848158 43.8077283,1.81323454 C43.7396389,1.65800917 43.7055964,1.49323888 43.7055964,1.31892367 C43.7055964,1.14463448 43.7396389,0.978502481 43.8077283,0.820527692 C43.8758134,0.662578922 43.9684136,0.525047012 44.0855242,0.407923285 C44.2026306,0.290825578 44.3388008,0.198229836 44.4940436,0.13013172 C44.6492775,0.0620552893 44.8140479,0.027999727 44.9883544,0.027999727 Z",
    transform: "translate(0 22)"
  }));
}

var _default = LogoAndroidText;
exports["default"] = _default;