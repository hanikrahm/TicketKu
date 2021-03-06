"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 29.3459 49.1765 C 30.6543 49.1765 31.7945 48.5597 34.2618 48.5597 C 36.7292 48.5597 37.4018 49.1765 39.2335 49.1765 C 42.0001 49.1765 43.4582 48.0176 43.4582 46.0924 C 43.4582 42.8027 39.8694 40.5971 34.2431 40.5971 C 31.4767 40.5971 30.2244 40.8587 28.6730 41.2513 L 26.6542 36.6531 C 24.6542 32.2419 21.4767 29.3634 16.9533 29.3634 L 14.7477 29.3634 C 14.0187 29.3634 13.5327 29.0456 13.5327 28.3353 C 13.5327 27.1765 15.0841 26.8961 16.7851 26.8961 C 22.2430 26.8961 26.2991 29.9054 28.7664 35.9615 L 30.0374 39.0830 C 31.3085 38.8213 32.6730 38.6905 34.0562 38.6905 C 35.1590 38.6905 36.1684 38.7653 37.2338 38.9148 C 38.3554 38.0737 39.6638 37.1952 41.5514 36.3727 C 43.6450 37.7933 46.0188 38.7092 48.5234 38.7092 C 53.6825 38.7092 56.0000 37.5877 56.0000 32.7092 C 56.0000 26.8213 51.7382 22.4101 46.0750 22.4288 L 41.0469 15.7559 C 38.2245 12.0923 34.8786 10.3353 31.5701 10.3353 C 28.8412 10.3353 24.7851 11.9054 24.7851 14.1110 C 24.7851 15.6064 27.8131 17.6998 30.1496 19.1391 L 40.9160 25.7185 C 40.0749 26.5223 39.3086 26.9522 38.3925 26.9522 C 36.9348 26.9522 35.4392 26.0737 33.1777 24.7653 C 27.4019 21.4382 22.9720 18.3167 16.9907 18.3167 C 10.7664 18.3167 6.0374 21.8867 3.5140 28.8400 C 1.5140 28.8400 0 30.1485 0 32.0737 C 0 34.2419 1.7196 35.6064 4.0748 35.6064 C 6.8038 39.4195 11.2711 40.9522 16.5608 40.9522 C 16.8412 40.9522 17.1215 40.9335 17.4019 40.9335 L 24.9720 47.2139 C 26.8412 48.9148 27.9253 49.1765 29.3459 49.1765 Z M 48.0936 31.8120 C 47.2525 31.8120 46.5796 31.1017 46.5796 30.2793 C 46.5796 29.4382 47.2713 28.6905 48.1123 28.6905 C 48.9721 28.6905 49.6263 29.3634 49.6263 30.2045 C 49.6263 31.0456 48.9346 31.8120 48.0936 31.8120 Z M 15.8318 50.6531 C 19.4393 50.6531 21.6262 49.9616 23.4206 48.7279 L 17.6449 43.9055 C 17.3832 43.9242 17.0655 43.9616 16.6729 43.9616 C 15.7383 43.9616 14.3552 43.6812 12.7103 43.6812 C 10.6168 43.6812 9.3271 44.8027 9.3271 46.4849 C 9.3271 48.9896 11.8692 50.6531 15.8318 50.6531 Z"
  }));
}

var _default = HareFill;
exports["default"] = _default;