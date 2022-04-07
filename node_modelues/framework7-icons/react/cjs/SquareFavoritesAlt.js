"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareFavoritesAlt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M36.2382,0.4258 C41.038632,0.4258 43.4758077,2.766775 43.5713746,7.4045831 L43.5743,7.6914 L43.5743,36.3086 C43.5743,41.040138 41.2331329,43.4757438 36.5291513,43.5712754 L36.2382,43.5742 L7.7851,43.5742 C3.0076,43.5742 0.52603224,41.2557944 0.42868053,36.5967711 L0.4257,36.3086 L0.4257,7.6914 C0.4257,2.936832 2.81171776,0.52333504 7.49546947,0.428696989 L7.7851,0.4258 L36.2382,0.4258 Z M36.1679,4.1992 L7.8554,4.1992 C5.58730323,4.1992 4.28495047,5.36255068 4.20328785,7.6467459 L4.1992,7.8789 L4.1992,36.1211 C4.1992,38.479971 5.42838835,39.7194143 7.63181891,39.7969237 L7.8554,39.8008 L36.1679,39.8008 C38.4133516,39.8008 39.7149739,38.6374493 39.7966129,36.3532541 L39.8007,36.1211 L39.8007,7.8789 C39.8007,5.52002903 38.5715117,4.28058574 36.3892888,4.20307626 L36.1679,4.1992 Z M27,32 C28.1045695,32 29,32.8954305 29,34 C29,35.1045695 28.1045695,36 27,36 L9,36 C7.8954305,36 7,35.1045695 7,34 C7,32.8954305 7.8954305,32 9,32 L27,32 Z M35,25 C36.1045695,25 37,25.8954305 37,27 C37,28.1045695 36.1045695,29 35,29 L9,29 C7.8954305,29 7,28.1045695 7,27 C7,25.8954305 7.8954305,25 9,25 L35,25 Z M8.10014766,8.23892985 C9.5650017,6.59405278 11.9559742,6.58671851 13.4101602,8.2189273 L13.6490892,8.49636904 L13.6490892,8.49636904 L13.8484038,8.74411948 L13.8484038,8.74411948 L14.0104948,8.95992833 L14.0104948,8.95992833 L14.1890675,9.21882864 L14.1890675,9.21882864 L14.34628,9.48108875 L14.34628,9.48108875 L14.4194746,9.350176 L14.4194746,9.350176 L14.5464722,9.15129656 L14.5464722,9.15129656 L14.6724285,8.97135557 C14.6963964,8.93830122 14.7218964,8.90373332 14.7489952,8.86767972 L14.9313083,8.63375233 C14.9650694,8.59186725 15.0005629,8.54855214 15.0378554,8.50383483 L15.2837332,8.2189273 L15.2837332,8.2189273 C16.7319185,6.59205253 19.1275582,6.59405278 20.593079,8.23892985 C22.0585998,9.88380693 22.0139275,12.4414674 20.6110813,14.2003591 L20.3066779,14.567248 L20.3066779,14.567248 L19.9306882,14.9971591 L19.9306882,14.9971591 L19.499242,15.474298 L19.499242,15.474298 L18.7833758,16.2440072 L18.7833758,16.2440072 L18.033463,17.0311335 L18.033463,17.0311335 L17.0747083,18.0155929 L17.0747083,18.0155929 L16.3975976,18.6950215 L16.3975976,18.6950215 L15.8858986,19.1920114 L15.8858986,19.1920114 L15.7611276,19.3063456 L15.7611276,19.3063456 C14.7183855,20.2272749 13.9995715,20.2026518 13.0404306,19.4016941 L12.8604663,19.2444177 L12.8604663,19.2444177 L12.6239946,19.0190901 L12.6239946,19.0190901 L11.8161383,18.2200269 L11.8161383,18.2200269 L10.9247387,17.3155981 L10.9247387,17.3155981 L9.96270622,16.3151609 L9.96270622,16.3151609 L9.58493687,15.9134819 L9.58493687,15.9134819 L9.04977674,15.332011 L9.04977674,15.332011 L8.57539855,14.7975501 L8.57539855,14.7975501 L8.30568599,14.4794443 C8.2230514,14.3795096 8.14811213,14.2860784 8.08214536,14.2003591 C6.63796062,12.3254526 6.63462686,9.88380693 8.10014766,8.23892985 Z",
    transform: "translate(6 6)"
  }));
}

var _default = SquareFavoritesAlt;
exports["default"] = _default;