"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function AsteriskCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 28.0468 40.1875 C 26.8046 40.1875 26.0312 39.4141 26.0546 38.1953 L 26.2890 31.0937 L 19.8671 35.2188 C 19.5155 35.4766 19.1405 35.5937 18.6483 35.5937 C 17.6874 35.5937 16.7733 34.8437 16.7733 33.6250 C 16.7733 32.8750 17.1483 32.3359 17.8983 31.9141 L 24.5780 28.1641 L 17.8749 24.4844 C 17.1483 24.0390 16.7733 23.5234 16.7733 22.7266 C 16.7733 21.5078 17.6874 20.7812 18.6483 20.7812 C 19.1405 20.7812 19.5155 20.8984 19.8671 21.1094 L 26.2890 25.1875 L 26.0546 17.8984 C 26.0312 16.6563 26.8046 15.8594 28.0468 15.8594 C 29.2655 15.8594 29.9687 16.6094 29.9452 17.8984 L 29.7109 25.1875 L 36.1327 21.0859 C 36.4843 20.8750 36.8593 20.7578 37.3514 20.7578 C 38.3124 20.7578 39.2265 21.5078 39.2265 22.7031 C 39.2265 23.4766 38.8514 24.0156 38.1014 24.4609 L 31.3749 28.1641 L 38.1014 31.9141 C 38.8514 32.3594 39.2265 32.8750 39.2265 33.6484 C 39.2265 34.8437 38.3124 35.6172 37.3514 35.6172 C 36.8593 35.6172 36.4843 35.5 36.1327 35.2656 L 29.7109 31.0937 L 29.9452 38.1953 C 29.9687 39.4609 29.2655 40.1875 28.0468 40.1875 Z"
  }));
}

var _default = AsteriskCircleFill;
exports["default"] = _default;