"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowTurnDownRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 8.2069 9.5547 C 6.9882 9.5547 6.4022 10.3515 6.2147 11.2891 C 6.0507 12.0156 6.0038 13.1641 6.0038 14.5469 C 6.0038 25.8906 10.5507 30.7656 21.6601 30.7656 L 38.0428 30.7656 L 43.7850 30.4375 L 35.9101 37.6328 L 30.7069 42.9297 C 30.3319 43.3281 30.1210 43.8672 30.1210 44.4297 C 30.1210 45.6016 31.0350 46.4453 32.1835 46.4453 C 32.7225 46.4453 33.2382 46.2344 33.7538 45.7422 L 49.2695 30.2500 C 49.7615 29.7812 49.9962 29.2422 49.9962 28.6562 C 49.9962 28.0937 49.7615 27.5312 49.2695 27.0859 L 33.7069 11.5234 C 33.2382 11.0781 32.7225 10.8906 32.1835 10.8906 C 31.0350 10.8906 30.1210 11.7344 30.1210 12.9062 C 30.1210 13.4688 30.3319 14.0078 30.7069 14.3828 L 35.9101 19.6797 L 43.8085 26.9219 L 38.0428 26.5703 L 21.8710 26.5703 C 13.2694 26.5703 10.246 23.0312 10.246 14.3359 C 10.246 13.2110 10.3163 12.4610 10.3163 11.6172 C 10.3163 10.3984 9.4491 9.5547 8.2069 9.5547 Z"
  }));
}

var _default = ArrowTurnDownRight;
exports["default"] = _default;