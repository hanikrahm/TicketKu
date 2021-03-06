"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUturnUpCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 24.8124 40.0937 C 30.4374 40.0937 33.8593 36.0390 33.8593 30.5547 L 33.8593 23.5703 L 33.7655 20.7812 L 35.2421 22.6328 L 37.5858 25.0703 C 37.8671 25.3750 38.3124 25.5859 38.8046 25.5859 C 39.7655 25.5859 40.4921 24.8594 40.4921 23.8984 C 40.4921 23.4063 40.3514 23.0312 39.9765 22.7031 L 33.6718 16.4688 C 33.2733 16.0937 32.7812 15.8594 32.2187 15.8594 C 31.6796 15.8594 31.2109 16.0937 30.8124 16.4688 L 24.4374 22.7266 C 24.0858 23.0547 23.9452 23.4297 23.9452 23.9219 C 23.9452 24.8594 24.6718 25.5859 25.6327 25.5859 C 26.0780 25.5859 26.5468 25.4219 26.8514 25.0937 L 29.6640 22.1406 L 30.6952 20.7812 L 30.5780 23.5703 L 30.5780 30.5547 C 30.5780 34 28.6093 36.6484 24.9999 36.6484 C 21.2968 36.6484 19.0234 34.0703 19.0234 30.5312 L 19.0234 27.2734 C 19.0234 26.2890 18.4374 25.4922 17.3358 25.4922 C 16.2577 25.4922 15.6718 26.2890 15.6718 27.3203 L 15.6718 30.5312 C 15.6718 36.0156 19.1640 40.0937 24.8124 40.0937 Z"
  }));
}

var _default = ArrowUturnUpCircle;
exports["default"] = _default;