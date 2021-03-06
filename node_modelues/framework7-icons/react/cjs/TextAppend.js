"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TextAppend(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6.1679 11.3594 L 49.8085 11.3594 C 50.8165 11.3594 51.6133 10.5859 51.6133 9.5781 C 51.6133 8.5937 50.8165 7.8203 49.8085 7.8203 L 6.1679 7.8203 C 5.1601 7.8203 4.3867 8.5937 4.3867 9.5781 C 4.3867 10.5859 5.1601 11.3594 6.1679 11.3594 Z M 6.1679 23.6406 L 49.8085 23.6406 C 50.8165 23.6406 51.6133 22.8672 51.6133 21.8594 C 51.6133 20.8750 50.8165 20.1015 49.8085 20.1015 L 6.1679 20.1015 C 5.1601 20.1015 4.3867 20.8750 4.3867 21.8594 C 4.3867 22.8672 5.1601 23.6406 6.1679 23.6406 Z M 10.0586 43 L 16.9492 43 L 16.9492 45.4375 C 16.9492 47.3594 18.7773 48.0625 20.2304 46.8906 L 26.5820 41.8047 C 27.5429 41.0313 27.5429 39.6953 26.5820 38.9453 L 20.2304 33.8828 C 18.8242 32.7344 16.9492 33.4610 16.9492 35.2891 L 16.9492 37.6328 L 10.5742 37.6328 C 10.0117 37.6328 9.7773 37.3281 9.7773 36.8359 L 9.7773 32.3359 C 9.7773 30.4375 8.7929 29.2656 7.0820 29.2656 C 5.3711 29.2656 4.3867 30.4375 4.3867 32.3359 L 4.3867 37.6563 C 4.3867 40.9609 6.7539 43 10.0586 43 Z M 33.8008 35.9219 L 49.8085 35.9219 C 50.8165 35.9219 51.6133 35.1250 51.6133 34.1406 C 51.6133 33.1563 50.8165 32.3828 49.8085 32.3828 L 33.8008 32.3828 C 32.7929 32.3828 32.0195 33.1563 32.0195 34.1406 C 32.0195 35.1250 32.7929 35.9219 33.8008 35.9219 Z M 33.8008 48.1797 L 49.8085 48.1797 C 50.8165 48.1797 51.6133 47.4063 51.6133 46.4219 C 51.6133 45.4375 50.8165 44.6406 49.8085 44.6406 L 33.8008 44.6406 C 32.7929 44.6406 32.0195 45.4375 32.0195 46.4219 C 32.0195 47.4063 32.7929 48.1797 33.8008 48.1797 Z"
  }));
}

var _default = TextAppend;
exports["default"] = _default;