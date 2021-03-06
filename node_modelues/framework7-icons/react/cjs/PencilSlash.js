"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PencilSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 43.2812 16.9258 L 45.6484 14.6055 C 46.8437 13.4101 46.9141 12.1445 45.8359 11.0430 L 45.0625 10.2695 C 43.9844 9.1914 42.6953 9.3086 41.5234 10.4570 L 39.1328 12.8008 Z M 43.3750 43.1523 C 44.0781 43.8555 45.2265 43.8555 45.9297 43.1523 C 46.6328 42.4492 46.6328 41.3008 45.9297 40.5976 L 16.2343 10.9023 C 15.5312 10.1992 14.3359 10.1758 13.6563 10.9023 C 12.9531 11.5820 12.9531 12.7774 13.6563 13.4570 Z M 34.7265 25.4336 L 41.2422 18.9414 L 37.1172 14.8164 L 30.6250 21.3320 Z M 15.6484 44.4883 L 28.2343 31.9023 L 24.1328 27.7774 L 11.5468 40.3867 L 9.2968 45.5898 C 9.0859 46.1523 9.6719 46.8086 10.2343 46.5742 Z"
  }));
}

var _default = PencilSlash;
exports["default"] = _default;