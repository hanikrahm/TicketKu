"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ForwardEnd(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.2695 46.4219 C 14.2305 46.4219 15.0273 46.1172 15.9649 45.5547 L 39.8476 31.4922 C 41.1367 30.7422 41.8398 29.8750 42.0976 28.9141 L 42.0976 45.4141 C 42.0976 46.5156 43.0117 47.3594 44.1133 47.3594 C 45.2149 47.3594 46.1055 46.5156 46.1055 45.4141 L 46.1055 10.6094 C 46.1055 9.5078 45.2149 8.6406 44.1133 8.6406 C 43.0117 8.6406 42.0976 9.5078 42.0976 10.6094 L 42.0976 27.0859 C 41.8398 26.1250 41.1367 25.2578 39.8476 24.5078 L 15.9649 10.4453 C 15.0039 9.8828 14.2305 9.5781 13.2695 9.5781 C 11.4414 9.5781 9.8945 10.9844 9.8945 13.6094 L 9.8945 42.3906 C 9.8945 45.0156 11.4414 46.4219 13.2695 46.4219 Z M 14.3008 42.0859 C 13.9492 42.0859 13.6680 41.8516 13.6680 41.3828 L 13.6680 14.6172 C 13.6680 14.1484 13.9492 13.9141 14.3008 13.9141 C 14.4649 13.9141 14.6289 13.9844 14.8633 14.1250 L 37.1524 27.3437 C 37.4805 27.5313 37.6680 27.6719 37.6680 28.0000 C 37.6680 28.3047 37.4805 28.4688 37.1524 28.6562 L 14.8633 41.8750 C 14.6524 42.0156 14.4649 42.0859 14.3008 42.0859 Z"
  }));
}

var _default = ForwardEnd;
exports["default"] = _default;