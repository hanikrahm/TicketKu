"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Scribble(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 49.9258 46.3750 C 52.1054 43.7266 52.7616 40.4453 51.0744 38.7812 C 48.9648 36.6953 46.2696 38.7344 42.6603 42.0625 C 39.2384 45.1563 37.9493 46.2344 37.5509 45.8125 C 37.1525 45.4609 37.9025 44.3594 41.9806 39.7422 C 47.1370 33.8360 49.5038 30.2969 46.7616 27.5312 C 43.8556 24.6485 39.7540 28.0938 33.6837 33.6719 C 29.4181 37.5860 25.1993 41.8516 23.4181 40.0703 C 22.1759 38.8281 23.7228 36.8360 30.0040 29.6172 C 38.6759 19.6563 43.3400 12.5781 39.7540 8.9922 C 36.3087 5.5469 32.7462 8.5469 21.6134 17.7109 C 12.9649 24.8125 8.2071 27.7187 4.5978 29.5234 C 3.6134 30.0625 3.2384 30.9766 3.6134 31.9141 C 4.0353 32.8281 5.0900 33.1328 6.1681 32.5703 C 9.9884 30.6719 15.2149 27.3672 23.7696 20.3594 C 33.2149 12.5781 35.7696 10.1641 37.2696 11.6875 C 39.1446 13.5391 34.8556 19.0000 27.4728 27.3203 C 19.4103 36.4375 17.4884 40.0234 20.6525 43.1875 C 24.3087 46.8438 29.4884 42.1328 35.8400 36.3203 C 40.8087 31.7734 43.3868 29.3594 44.2775 30.2734 C 45.1915 31.2109 42.8946 33.7187 38.1603 39.2031 C 33.8478 44.2187 32.9337 46.7734 34.8322 48.6719 C 36.6134 50.4531 39.3790 49.2813 43.2462 45.8359 C 46.4103 43.0469 48.0509 41.3360 48.3792 41.6875 C 48.7070 42.0156 48.1680 43.3047 47.0429 44.4531 C 46.3165 45.1797 46.4103 46.2578 47.1370 47.0078 C 47.8867 47.6875 49.0354 47.5234 49.9258 46.3750 Z"
  }));
}

var _default = Scribble;
exports["default"] = _default;