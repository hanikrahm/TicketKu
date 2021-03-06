"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function QuestionDiamond(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 32.9921 4.2461 C 30.0390 1.2930 25.8437 1.3632 22.8905 4.3164 L 4.3046 22.9023 C 1.3515 25.8554 1.2812 30.0508 4.2343 33.0039 L 23.0078 51.7539 C 25.9609 54.7070 30.1327 54.6601 33.1093 51.6836 L 51.6953 33.0976 C 54.6718 30.1211 54.7188 25.9492 51.7654 22.9961 Z M 30.5546 7.1054 L 48.9295 25.4336 C 50.4295 26.9336 50.4295 29.0195 48.9531 30.4961 L 30.5078 48.9414 C 29.0312 50.4414 26.9687 50.4179 25.4687 48.9179 L 7.0937 30.5430 C 5.6171 29.0664 5.5703 26.9570 7.0468 25.4805 L 25.4687 7.0586 C 26.9687 5.5586 29.0546 5.6289 30.5546 7.1054 Z M 27.4140 33.8008 C 28.5859 33.8008 29.2890 33.0742 29.2890 32.1367 L 29.2890 31.8554 C 29.2890 30.5430 30.0624 29.7226 31.7031 28.6445 C 33.9765 27.1445 35.5937 25.7617 35.5937 22.9726 C 35.5937 19.0586 32.1249 16.9726 28.1405 16.9726 C 24.1093 16.9726 21.4609 18.8711 20.8046 21.0273 C 20.6874 21.4258 20.6171 21.8008 20.6171 22.1992 C 20.6171 23.2305 21.4374 23.8164 22.2343 23.8164 C 23.5468 23.8164 23.7578 23.0898 24.5312 22.2226 C 25.2812 20.9336 26.4296 20.1601 27.9765 20.1601 C 30.1327 20.1601 31.5156 21.3554 31.5156 23.1601 C 31.5156 24.7539 30.5312 25.5039 28.4687 26.9336 C 26.7812 28.1054 25.5390 29.3476 25.5390 31.6445 L 25.5390 31.9492 C 25.5390 33.1914 26.1952 33.8008 27.4140 33.8008 Z M 27.3437 40.8086 C 28.7031 40.8086 29.8749 39.7305 29.8749 38.3711 C 29.8749 36.9883 28.7265 35.9336 27.3437 35.9336 C 25.9843 35.9336 24.8359 37.0117 24.8359 38.3711 C 24.8359 39.7070 26.0078 40.8086 27.3437 40.8086 Z"
  }));
}

var _default = QuestionDiamond;
exports["default"] = _default;