"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlusSquareOnSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 9.6367 41.9453 L 13.9960 41.9453 L 13.9960 45.9766 C 13.9960 50.8047 16.4336 53.2422 21.3555 53.2422 L 46.3868 53.2422 C 51.2617 53.2422 53.7227 50.8047 53.7227 45.9766 L 53.7227 21.0625 C 53.7227 16.2578 51.2617 13.8203 46.3868 13.8203 L 42.0273 13.8203 L 42.0273 10.0234 C 42.0273 5.1953 39.5664 2.7578 34.6679 2.7578 L 9.6367 2.7578 C 4.7382 2.7578 2.2773 5.1953 2.2773 10.0234 L 2.2773 34.7031 C 2.2773 39.5312 4.7382 41.9453 9.6367 41.9453 Z M 9.7070 38.1719 C 7.3633 38.1719 6.0508 36.9297 6.0508 34.4922 L 6.0508 10.2344 C 6.0508 7.7969 7.3633 6.5312 9.7070 6.5312 L 34.6211 6.5312 C 36.9179 6.5312 38.2539 7.7969 38.2539 10.2344 L 38.2539 13.8203 L 21.3555 13.8203 C 16.4336 13.8203 13.9960 16.2344 13.9960 21.0625 L 13.9960 38.1719 Z M 21.4023 49.4687 C 19.0586 49.4687 17.7695 48.2031 17.7695 45.7656 L 17.7695 21.2734 C 17.7695 18.8359 19.0586 17.5937 21.4023 17.5937 L 46.3163 17.5937 C 48.6366 17.5937 49.9494 18.8359 49.9494 21.2734 L 49.9494 45.7891 C 49.9494 48.2031 48.6366 49.4687 46.3163 49.4687 Z M 33.9179 43.2812 C 34.9023 43.2812 35.6757 42.4844 35.6757 41.4297 L 35.6757 35.3359 L 41.6289 35.3359 C 42.7304 35.3359 43.6211 34.4922 43.6211 33.4844 C 43.6211 32.5 42.7304 31.6563 41.6289 31.6563 L 35.6757 31.6563 L 35.6757 25.5859 C 35.6757 24.5312 34.9023 23.7578 33.9179 23.7578 C 32.9336 23.7578 32.1367 24.5312 32.1367 25.5859 L 32.1367 31.6563 L 25.9726 31.6563 C 24.9882 31.6563 24.0976 32.5469 24.0976 33.4844 C 24.0976 34.4688 24.9882 35.3359 25.9726 35.3359 L 32.1367 35.3359 L 32.1367 41.4297 C 32.1367 42.4844 32.9336 43.2812 33.9179 43.2812 Z"
  }));
}

var _default = PlusSquareOnSquare;
exports["default"] = _default;