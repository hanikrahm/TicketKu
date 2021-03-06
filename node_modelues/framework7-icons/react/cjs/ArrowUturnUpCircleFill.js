"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUturnUpCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9218 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9218 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 25.3280 41.0547 C 19.2343 41.0547 15.4374 36.625 15.4374 30.7187 L 15.4374 27.2031 C 15.4374 26.0781 16.0936 25.2578 17.2655 25.2578 C 18.4374 25.2578 19.0702 26.0781 19.0702 27.1562 L 19.0702 30.7187 C 19.0702 34.5625 21.5546 37.3281 25.5390 37.3281 C 29.4765 37.3281 31.5858 34.4687 31.5858 30.7422 L 31.5858 23.1484 L 31.7030 20.125 L 30.6014 21.625 L 27.5780 24.8125 C 27.2265 25.1640 26.7343 25.3516 26.2421 25.3516 C 25.2109 25.3516 24.3905 24.5547 24.3905 23.5469 C 24.3905 23.0313 24.5780 22.6094 24.9296 22.2578 L 31.8671 15.4844 C 32.2655 15.0625 32.7812 14.8047 33.3905 14.8047 C 33.9765 14.8047 34.5155 15.0625 34.9374 15.4844 L 41.7812 22.2344 C 42.1562 22.5859 42.3436 22.9844 42.3436 23.5234 C 42.3436 24.5547 41.5234 25.3516 40.4921 25.3516 C 39.9530 25.3516 39.4843 25.1172 39.1562 24.7891 L 36.6249 22.1406 L 35.0546 20.125 L 35.1483 23.1484 L 35.1483 30.7422 C 35.1483 36.6484 31.4452 41.0547 25.3280 41.0547 Z"
  }));
}

var _default = ArrowUturnUpCircleFill;
exports["default"] = _default;