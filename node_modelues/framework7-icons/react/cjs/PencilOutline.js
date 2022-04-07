"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PencilOutline(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.4570 44.7578 C 19.9492 51.25 28.3866 53.1953 32.5351 53.5937 C 33.7539 53.7344 34.4335 52.9844 34.5273 52.2110 C 34.6210 51.3906 34.1054 50.5000 32.9335 50.3359 C 29.1835 49.8203 21.4257 48.1328 15.8007 42.4375 C 6.6132 33.2266 4.8788 19.3047 12.3788 11.8047 C 18.4726 5.7344 28.6210 6.5078 36.0976 10.5391 L 38.5351 8.1719 C 29.4413 2.7110 17.2070 2.2656 10.0351 9.4610 C 1.5039 18.0156 2.6288 33.9297 13.4570 44.7578 Z M 47.8164 11.5469 L 49.6913 9.6719 C 50.5817 8.7813 50.6288 7.4688 49.7149 6.6250 L 49.1053 6.0625 C 48.3085 5.3125 47.0663 5.3359 46.1992 6.1563 L 44.3476 8.0547 Z M 25.0585 34.2578 L 46.1054 13.2344 L 42.6132 9.7656 L 21.5898 30.7656 L 19.6445 35.2422 C 19.4570 35.7344 19.9492 36.2266 20.4648 36.0625 Z M 21.9882 37.75 C 29.6523 45.4141 41.9804 48.4375 48.8710 41.5703 C 54.4961 35.9219 53.7694 25.8906 47.7461 17.2656 L 45.3554 19.6563 C 50.1368 26.7344 51.0742 34.6797 46.5273 39.2266 C 40.9961 44.7578 31.8554 42.1328 25.5742 36.2032 Z"
  }));
}

var _default = PencilOutline;
exports["default"] = _default;