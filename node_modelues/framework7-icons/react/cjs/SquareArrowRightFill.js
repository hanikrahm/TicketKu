"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareArrowRightFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.1641,22.8633 L2.5156,22.8633 C1.5313,22.8633 0.7109,21.9961 0.7109,20.9883 C0.7109,19.9805 1.5313,19.1367 2.5156,19.1367 L14.1641,19.1367 C13.25,19.207 12.4297,20.0039 12.4297,20.9883 C12.4297,21.9961 13.25,22.793 14.1641,22.8633 Z M12.6875,19.0664 L12.6875,7.5586 C12.6875,2.6367 15.125,0.1992 19.9531,0.1992 L44.0234,0.1992 C48.8516,0.1992 51.2891,2.6367 51.2891,7.5586 L51.2891,34.4414 C51.2891,39.3164 48.875,41.8008 44.0234,41.8008 L19.9531,41.8008 C15.1016,41.8008 12.6875,39.3164 12.6875,34.4414 L12.6875,22.9102 L27.5469,22.9102 L30.8985,22.7695 L29.3516,24.2461 L25.5547,27.8086 C25.1797,28.1367 24.9687,28.6758 24.9687,29.1445 C24.9687,30.1523 25.6953,30.9024 26.6797,30.9024 C27.1953,30.9024 27.6172,30.6914 27.9687,30.3164 L35.6094,22.3945 C36.1016,21.9024 36.2656,21.4805 36.2656,20.9883 C36.2656,20.4961 36.1016,20.0742 35.6094,19.5821 L27.9687,11.6836 C27.6172,11.3086 27.1953,11.0977 26.6797,11.0977 C25.6953,11.0977 24.9687,11.8711 24.9687,12.8789 C24.9687,13.3477 25.1797,13.8399 25.5547,14.1914 L29.3516,17.7305 L30.8985,19.207 L27.5469,19.0664 L12.6875,19.0664 Z",
    transform: "translate(2 7)"
  }));
}

var _default = SquareArrowRightFill;
exports["default"] = _default;