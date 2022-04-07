"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function House(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.6251 52.6445 L 43.3986 52.6445 C 46.7267 52.6445 48.6722 50.7695 48.6722 47.4648 L 48.6722 26.0664 L 51.6952 28.8320 C 52.1877 29.3008 52.7267 29.6289 53.3829 29.6289 C 54.4845 29.6289 55.3749 28.9492 55.3749 27.8242 C 55.3749 27.1211 55.1171 26.6758 54.6722 26.2774 L 46.5391 18.8476 L 46.5391 5.0430 C 46.5391 4.0117 45.8829 3.3555 44.8519 3.3555 L 41.7813 3.3555 C 40.7735 3.3555 40.0704 4.0117 40.0704 5.0430 L 40.0704 12.9648 L 30.8126 4.5274 C 29.9923 3.7774 29.0079 3.3555 28.0001 3.3555 C 26.9923 3.3555 26.0079 3.7774 25.1876 4.5274 L 1.3282 26.2774 C .9064 26.6758 .6251 27.1211 .6251 27.8242 C .6251 28.9492 1.5157 29.6289 2.6173 29.6289 C 3.2970 29.6289 3.8360 29.3008 4.3048 28.8320 L 7.3282 26.0898 L 7.3282 47.4648 C 7.3282 50.7695 9.2735 52.6445 12.6251 52.6445 Z M 34.7501 33.3086 C 34.7501 32.2305 34.0470 31.5508 32.9689 31.5508 L 23.0313 31.5508 C 21.9532 31.5508 21.2267 32.2305 21.2267 33.3086 L 21.2267 48.8711 L 13.4220 48.8711 C 11.9220 48.8711 11.1017 48.0508 11.1017 46.5273 L 11.1017 22.6445 L 27.1798 7.9961 C 27.4142 7.7617 27.6954 7.6211 28.0001 7.6211 C 28.3048 7.6211 28.5860 7.7383 28.8439 7.9961 L 44.8984 22.6445 L 44.8984 46.5273 C 44.8984 48.0508 44.0781 48.8711 42.6017 48.8711 L 34.7501 48.8711 Z"
  }));
}

var _default = House;
exports["default"] = _default;