"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DocPersonFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18.8359,0.875 L18.8359,18.0781 C18.8359,21.0781 20.2422,22.5078 23.2422,22.5078 L23.2422,22.5078 L40.2109,22.5078 L40.2109,43.789 C40.2109,48.664 37.7969,51.125 32.9453,51.125 L32.9453,51.125 L8.0547,51.125 C3.2266,51.125 0.7891,48.6875 0.7891,43.789 L0.7891,43.789 L0.7891,8.2344 C0.7891,3.3594 3.2266,0.875 8.0547,0.875 L8.0547,0.875 L18.8359,0.875 Z M20.5050523,36.6022841 C15.2524159,36.6022841 11.9834227,40.2052455 11.9834227,42.8164069 C11.9834227,43.7070319 12.5501409,44.1624705 14.14925,44.1624705 L26.8608977,44.1624705 C28.4498159,44.1624705 29.0165773,43.7070319 29.0165773,42.8164069 C29.0165773,40.2052455 25.7475841,36.6022841 20.5050523,36.6022841 Z M20.5050523,25.9653932 C18.339225,25.9653932 16.4567568,27.857966 16.4567568,30.3375523 C16.4567568,32.8474955 18.339225,34.7906773 20.5050523,34.7906773 C22.6810273,34.7906773 24.5533477,32.8474955 24.5533477,30.3173 C24.5533477,27.8174614 22.6709227,25.9653932 20.5050523,25.9653932 Z M22.0234,1.1328 C23.0078,1.2969 23.9922,1.9766 25.0703,3.1015 L25.0703,3.1015 L38.0078,16.25 C39.1094,17.3984 39.7891,18.3359 39.9531,19.2969 L39.9531,19.2969 L23.3125,19.2969 C22.4687,19.2969 22.0234,18.875 22.0234,18.0313 L22.0234,18.0313 Z",
    transform: "translate(8 2)"
  }));
}

var _default = DocPersonFill;
exports["default"] = _default;