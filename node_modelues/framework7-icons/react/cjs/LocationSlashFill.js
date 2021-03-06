"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LocationSlashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 41.7460 29.5117 L 51.0509 9.4258 C 51.9884 7.4570 51.8712 6.0039 50.9333 5.0664 C 49.9724 4.1055 48.5194 4.0352 46.5507 4.9258 L 26.4179 14.2774 Z M 47.7696 44.6523 C 48.4724 45.3555 49.6210 45.3555 50.3242 44.6523 C 51.0274 43.9492 51.0274 42.8008 50.3242 42.0977 L 14.2304 6.0039 C 13.5273 5.3008 12.3789 5.3008 11.6523 6.0039 C 10.9726 6.6836 10.9726 7.8789 11.6523 8.5586 Z M 27.7538 50.8399 C 28.9023 51.9648 30.4491 51.7774 31.5741 50.6523 C 32.2070 50.0195 32.6991 49.0352 33.1210 48.0977 L 37.5741 38.4414 L 17.5585 18.3789 L 7.8789 22.8555 C 6.9648 23.2774 5.9569 23.7930 5.3241 24.4023 C 4.1757 25.5274 4.0116 27.0977 5.1367 28.2226 C 5.9804 29.0430 6.7773 29.3008 8.3945 29.3008 L 26.0898 29.4180 C 26.2538 29.4180 26.3710 29.4414 26.4648 29.5117 C 26.5351 29.6055 26.5820 29.7461 26.5820 29.9101 L 26.6757 47.5820 C 26.6757 49.1992 26.9335 50.0430 27.7538 50.8399 Z"
  }));
}

var _default = LocationSlashFill;
exports["default"] = _default;