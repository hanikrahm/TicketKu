"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function AntFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9883 55.9961 C 34.6211 55.9961 40.4101 48.8711 40.4101 41.2070 C 40.4101 40.0117 40.1992 39.0039 39.7773 38.1836 C 40.4570 38.3711 41.1367 38.5352 41.7930 38.7226 C 43.4101 39.1679 43.9023 39.8008 43.6679 41.2070 L 41.9570 52.4336 C 41.7461 53.7695 42.5664 54.5664 43.6679 54.5664 C 44.8164 54.5664 45.3320 53.8633 45.5195 52.6914 L 47.4414 40.5274 C 47.8867 37.7852 46.7617 36.2852 43.7617 35.5820 L 33.1914 33.1211 L 33.1679 32.8867 C 34.1758 32.3945 34.8554 31.4336 35.1601 30.3789 L 42.3554 29.3477 C 45.2852 28.9492 46.5976 27.3086 46.5976 24.4258 L 46.5976 16.3164 C 46.5976 15.1679 45.9414 14.5117 44.8164 14.5117 C 43.6914 14.5117 43.0352 15.1914 43.0352 16.3164 L 43.0352 23.6992 C 43.0352 25.3633 42.1445 25.9023 40.6211 26.1133 L 35.2539 26.8399 C 34.9961 26.1133 34.5273 25.4570 33.8945 25.0352 L 33.8945 24.8008 C 37.9023 24.0977 40.1289 21.6601 40.1289 18.0977 C 40.1289 15.0977 39.0039 12.3555 37.1758 10.2461 L 37.3867 10.0820 C 39.6601 8.4414 40.0820 6.0274 38.6054 3.4258 L 37.2226 1.1523 C 36.7773 .3555 36.2617 .39 35.5352 .39 C 34.5742 .39 33.8476 .7070 33.8476 1.6211 C 33.8476 2.0430 33.9179 2.2774 34.1758 2.7461 L 35.3945 4.5977 C 36.1445 5.8164 36.1445 6.8711 35.1836 7.7148 C 35.0664 7.8320 34.9258 7.9258 34.7852 8.0195 C 32.8398 6.7070 30.4961 5.9336 27.9883 5.9336 C 25.5273 5.9336 23.2070 6.7070 21.2852 7.9961 C 21.1679 7.9258 21.0039 7.8086 20.8867 7.6914 C 19.9492 6.8711 19.9258 5.8164 20.6992 4.5977 L 21.9179 2.7461 C 22.1758 2.2774 22.2461 2.0430 22.2461 1.6211 C 22.2461 .7070 21.5195 .39 20.5586 .39 C 19.8320 .39 19.3164 .3555 18.8711 1.1523 L 17.4883 3.4258 C 16.0117 6.0274 16.4336 8.4414 18.7070 10.0820 L 18.8711 10.1992 C 17.0195 12.3086 15.8476 15.0742 15.8476 18.0977 C 15.8476 21.6601 18.0976 24.0977 22.1054 24.8008 L 22.1054 25.0352 C 21.4726 25.4570 21.0039 26.1133 20.7461 26.8399 L 15.3789 26.1133 C 13.8320 25.9023 12.9648 25.3633 12.9648 23.6992 L 12.9648 16.3164 C 12.9648 15.1914 12.3086 14.5117 11.1836 14.5117 C 10.0586 14.5117 9.4023 15.1679 9.4023 16.3164 L 9.4023 24.4258 C 9.4023 27.3086 10.7148 28.9492 13.6445 29.3477 L 20.8398 30.3789 C 21.1445 31.4336 21.8242 32.3945 22.8320 32.8867 L 22.8320 33.1211 L 12.2383 35.5820 C 9.2148 36.2852 8.1133 37.7852 8.5586 40.5274 L 10.4805 52.6914 C 10.6445 53.8633 11.1836 54.5664 12.3320 54.5664 C 13.4336 54.5664 14.2539 53.7695 14.0430 52.4336 L 12.3320 41.2070 C 12.0976 39.8008 12.5898 39.1679 14.2070 38.7226 C 14.8632 38.5352 15.5430 38.3711 16.2226 38.1836 C 15.8008 39.0039 15.5898 40.0117 15.5898 41.2070 C 15.5898 48.8711 21.3789 55.9961 27.9883 55.9961 Z"
  }));
}

var _default = AntFill;
exports["default"] = _default;