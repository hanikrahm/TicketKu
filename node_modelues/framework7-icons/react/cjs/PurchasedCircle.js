"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PurchasedCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 17.2655 35.2890 C 17.2655 35.6406 17.4530 36.0390 17.7343 36.3437 L 22.4921 41.0781 C 23.0546 41.5703 23.5936 41.8281 24.1093 41.8281 C 24.6718 41.8281 25.1874 41.5937 25.7265 41.0781 L 30.4843 36.3203 C 30.7890 35.9922 30.9530 35.6406 30.9530 35.2890 C 30.9530 34.5156 30.3436 33.8828 29.5936 33.8828 C 29.1249 33.8828 28.7733 34.0234 28.4687 34.3516 L 27.2265 35.5937 L 25.4687 37.6094 L 25.5858 33.6250 L 25.5858 22.9844 C 25.5858 19.2109 27.4374 17.1250 30.7187 17.1250 C 33.7890 17.1250 35.8514 19.2344 35.8280 22.3750 C 35.8046 25.4453 33.8124 27.5312 30.9530 27.5312 C 30.2499 27.5312 29.8983 27.3672 29.4530 27.3672 C 28.7030 27.3672 28.1405 27.9063 28.1405 28.6094 C 28.1405 29.0547 28.3046 29.4063 28.5624 29.6641 C 29.0546 30.1328 29.9218 30.3906 30.8593 30.3906 C 35.5936 30.3906 38.7109 27.2031 38.7109 22.3750 C 38.7109 17.5 35.4765 14.1719 30.7187 14.1719 C 25.7968 14.1719 22.6093 17.5 22.6093 22.7266 L 22.6093 33.6484 L 22.7499 37.6094 L 20.9921 35.6172 L 19.7499 34.3750 C 19.4218 34.0234 19.0702 33.8828 18.6249 33.8828 C 17.8749 33.8828 17.2655 34.5156 17.2655 35.2890 Z"
  }));
}

var _default = PurchasedCircle;
exports["default"] = _default;