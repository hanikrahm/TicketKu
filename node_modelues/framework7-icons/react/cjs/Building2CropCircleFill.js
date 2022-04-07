"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Building2CropCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M23.8814741,0 C27.1469224,0 30.2248773,0.624972842 33.1153387,1.87491852 C36.0058001,3.12483221 38.5525208,4.85129509 40.7555009,7.05430715 C42.9584809,9.25731922 44.6848958,11.8001522 45.9347455,14.682806 C47.1849152,17.5654278 47.81,20.6394629 47.81,23.9049112 C47.81,27.1703595 47.1849152,30.2444106 45.9347455,33.1270644 C44.6848958,36.0097118 42.9584809,38.5525358 40.7555009,40.7555363 C38.5525208,42.9585375 36.0097038,44.6850094 33.12705,45.9349519 C30.2443962,47.1848656 27.1703451,47.8098224 23.9048968,47.8098224 C20.6394485,47.8098224 17.5654134,47.1848656 14.6827916,45.9349519 C11.8001378,44.6850094 9.25730482,42.9585375 7.05429275,40.7555363 C4.85128069,38.5525358 3.12481781,36.0097118 1.87490413,33.1270644 C0.624968042,30.2444106 0,27.1703595 0,23.9049112 C0,20.6394629 0.624968042,17.5654278 1.87490413,14.682806 C3.12481781,11.8001522 4.84737691,9.25731922 7.04258141,7.05430715 C9.23775392,4.85129509 11.7766671,3.12483221 14.6593209,1.87491852 C17.5419748,0.624972842 20.6160258,0 23.8814741,0 Z M27.3031536,13.2414471 L11.5774623,13.2414471 C10.8119054,13.2414471 10.2103872,13.4836255 9.77290782,13.9679822 C9.37917636,14.4039033 9.16262407,14.9663717 9.12325092,15.6553873 L9.11668873,15.8897461 L9.11668873,37.2635437 C10.9290668,39.2790559 13.1086242,40.876622 15.6553609,42.0562421 C18.2020976,43.2358653 20.9519429,43.8256769 23.9048968,43.8256769 C24.9204877,43.8256769 25.9204314,43.7514619 26.904728,43.6030319 C27.6921909,43.4842878 28.4596563,43.3230471 29.207124,43.1193097 L29.7639752,42.9585385 L29.7639752,15.8897461 C29.7639752,15.0929269 29.5491393,14.452339 29.1194675,13.9679822 C28.6897956,13.4836255 28.0843577,13.2414471 27.3031536,13.2414471 Z M38.388466,19.2176869 L31.5919524,19.2176869 L31.5919524,42.3023242 C32.8731603,41.7711029 34.0840362,41.1109833 35.22458,40.3219652 C36.3651558,39.5329472 37.4080732,38.6384664 38.353332,37.6385226 C39.1635538,36.781428 39.8905543,35.8612002 40.5343332,34.8778394 L40.8492876,34.3808979 L40.8492876,21.8659859 C40.8492876,21.0535196 40.6305479,20.4090279 40.1930685,19.9325107 C39.7555891,19.4559615 39.1540549,19.2176869 38.388466,19.2176869 Z M17.1786992,35.2480171 C17.5161874,35.2480171 17.7018059,35.3998868 17.7355547,35.7036262 L17.7411796,35.8104974 L17.7411796,38.2947369 C17.7411796,38.6322193 17.5893099,38.8178347 17.2855705,38.8515829 L17.1786992,38.8572076 L14.6241869,38.8572076 C14.3007523,38.8572076 14.1228633,38.7053405 14.0905198,38.4016063 L14.0851292,38.2947369 L14.0851292,35.8104974 C14.0851292,35.4730092 14.2306748,35.2873907 14.5217659,35.2536419 L14.6241869,35.2480171 L17.1786992,35.2480171 Z M24.2095837,35.2480171 C24.5470719,35.2480171 24.7326904,35.3998868 24.7664392,35.7036262 L24.772064,35.8104974 L24.772064,38.2947369 C24.772064,38.6322193 24.6201943,38.8178347 24.3164549,38.8515829 L24.2095837,38.8572076 L21.6550234,38.8572076 C21.3316176,38.8572076 21.1537444,38.7053405 21.1214038,38.4016063 L21.1160137,38.2947369 L21.1160137,35.8104974 C21.1160137,35.4730092 21.2615463,35.2873907 21.5526115,35.2536419 L21.6550234,35.2480171 L24.2095837,35.2480171 Z M37.3103987,33.8184175 C37.5603828,33.8184175 37.6992629,33.9418721 37.7270389,34.1887813 L37.7322469,34.2871591 L37.7322469,36.4198424 C37.7322469,36.6698294 37.6211429,36.808711 37.3989347,36.8364874 L37.3103987,36.8416954 L35.1074186,36.8416954 C34.8296458,36.8416954 34.6753275,36.7305901 34.6444639,36.5083794 L34.638677,36.4198424 L34.638677,34.2871591 C34.638677,34.0093863 34.7621316,33.8550681 35.0090407,33.8242044 L35.1074186,33.8184175 L37.3103987,33.8184175 Z M17.1786992,29.295248 C17.5161874,29.295248 17.7018059,29.4471177 17.7355547,29.7508571 L17.7411796,29.8577283 L17.7411796,32.3419246 C17.7411796,32.6794128 17.5893099,32.8650313 17.2855705,32.8987801 L17.1786992,32.9044049 L14.6241869,32.9044049 C14.3007523,32.9044049 14.1228633,32.7525352 14.0905198,32.4487958 L14.0851292,32.3419246 L14.0851292,29.8577283 C14.0851292,29.5202401 14.2306748,29.3346216 14.5217659,29.3008728 L14.6241869,29.295248 L17.1786992,29.295248 Z M24.2095837,29.295248 C24.5470719,29.295248 24.7326904,29.4471177 24.7664392,29.7508571 L24.772064,29.8577283 L24.772064,32.3419246 C24.772064,32.6794128 24.6201943,32.8650313 24.3164549,32.8987801 L24.2095837,32.9044049 L21.6550234,32.9044049 C21.4987762,32.9044049 21.3698874,32.84972 21.2683571,32.7403502 C21.1871073,32.6528543 21.1383574,32.5503576 21.1221074,32.4328603 L21.1160137,32.3419246 L21.1160137,29.8577283 C21.1160137,29.5202401 21.2615463,29.3346216 21.5526115,29.3008728 L21.6550234,29.295248 L24.2095837,29.295248 Z M37.3103987,28.4983968 C37.5603828,28.4983968 37.6992629,28.6156824 37.7270389,28.8502537 L37.7322469,28.9437157 L37.7322469,31.0295344 C37.7322469,31.3072788 37.6211429,31.4615812 37.3989347,31.4924417 L37.3103987,31.498228 L35.1074186,31.498228 C34.8296458,31.498228 34.6753275,31.3747861 34.6444639,31.1279022 L34.638677,31.0295344 L34.638677,28.9437157 C34.638677,28.679823 34.7621316,28.533216 35.0090407,28.5038946 L35.1074186,28.4983968 L37.3103987,28.4983968 Z M17.1786992,23.3424308 C17.5161874,23.3424308 17.7018059,23.5006376 17.7355547,23.8170512 L17.7411796,23.9283819 L17.7411796,26.3891555 C17.7411796,26.7266437 17.5893099,26.9122622 17.2855705,26.946011 L17.1786992,26.9516358 L14.6241869,26.9516358 C14.3007523,26.9516358 14.1228633,26.7997661 14.0905198,26.4960267 L14.0851292,26.3891555 L14.0851292,23.9283819 C14.0851292,23.5768113 14.2306748,23.3834474 14.5217659,23.3482904 L14.6241869,23.3424308 L17.1786992,23.3424308 Z M24.2095837,23.3424308 C24.5470719,23.3424308 24.7326904,23.5006376 24.7664392,23.8170512 L24.772064,23.9283819 L24.772064,26.3891555 C24.772064,26.7266437 24.6201943,26.9122622 24.3164549,26.946011 L24.2095837,26.9516358 L21.6550234,26.9516358 C21.3316176,26.9516358 21.1537444,26.7997661 21.1214038,26.4960267 L21.1160137,26.3891555 L21.1160137,23.9283819 C21.1160137,23.7564876 21.1667948,23.6158555 21.2683571,23.5064856 C21.3495814,23.4189897 21.448315,23.3664922 21.5645581,23.348993 L21.6550234,23.3424308 L24.2095837,23.3424308 Z M37.3103987,23.1315307 C37.5603828,23.1315307 37.6992629,23.2488037 37.7270389,23.4833497 L37.7322469,23.5768017 L37.7322469,25.686091 C37.7322469,25.9638354 37.6211429,26.1181378 37.3989347,26.1489983 L37.3103987,26.1547846 L35.1074186,26.1547846 C34.8296458,26.1547846 34.6753275,26.0313427 34.6444639,25.7844588 L34.638677,25.686091 L34.638677,23.5768017 C34.638677,23.3129374 34.7621316,23.1663461 35.0090407,23.1370279 L35.1074186,23.1315307 L37.3103987,23.1315307 Z M17.1786992,17.4599778 C17.5161874,17.4599778 17.7018059,17.6118475 17.7355547,17.9155869 L17.7411796,18.0224581 L17.7411796,20.5066544 C17.7411796,20.8441426 17.5893099,21.0297611 17.2855705,21.0635099 L17.1786992,21.0691347 L14.6241869,21.0691347 C14.3007523,21.0691347 14.1228633,20.917265 14.0905198,20.6135256 L14.0851292,20.5066544 L14.0851292,18.0224581 C14.0851292,17.6849699 14.2306748,17.4993514 14.5217659,17.4656026 L14.6241869,17.4599778 L17.1786992,17.4599778 Z M24.2095837,17.4599778 C24.5470719,17.4599778 24.7326904,17.6118475 24.7664392,17.9155869 L24.772064,18.0224581 L24.772064,20.5066544 C24.772064,20.8441426 24.6201943,21.0297611 24.3164549,21.0635099 L24.2095837,21.0691347 L21.6550234,21.0691347 C21.3316176,21.0691347 21.1537444,20.917265 21.1214038,20.6135256 L21.1160137,20.5066544 L21.1160137,18.0224581 C21.1160137,17.6849699 21.2615463,17.4993514 21.5526115,17.4656026 L21.6550234,17.4599778 L24.2095837,17.4599778 Z",
    transform: "translate(0 4)"
  }));
}

var _default = Building2CropCircleFill;
exports["default"] = _default;