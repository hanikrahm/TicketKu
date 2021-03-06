"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BoltHorizontal(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 2.9872 38.4685 C 3.5717 38.4685 4.1778 38.3170 4.8056 37.9706 L 17.5339 30.6107 L 36.1717 40.5899 C 37.0159 41.0228 37.7736 41.2826 38.4663 41.2826 C 39.4836 41.2826 40.3497 40.8064 41.2585 39.7240 L 55.2641 22.0170 C 55.7619 21.3676 56 20.6965 56 20.0688 C 56 18.5751 54.7662 17.2980 53.0993 17.2980 C 52.5150 17.2980 51.8655 17.4495 51.2161 17.8392 L 38.4663 25.1990 L 19.8284 15.2199 C 18.9842 14.7437 18.2049 14.5272 17.5122 14.5272 C 16.5165 14.5272 15.6289 14.9818 14.7631 16.0858 L .7576 33.7928 C .2165 34.4422 0 35.1133 0 35.7410 C 0 37.2563 1.3421 38.4685 2.9872 38.4685 Z M 4.3077 34.9184 C 4.0479 35.0699 3.8531 34.8318 4.0263 34.6370 L 17.2741 18.4452 C 17.5772 18.0556 17.8802 18.0123 18.2699 18.2288 L 37.6870 28.5976 C 38.5962 29.0738 38.8775 28.9656 39.5919 28.4894 L 51.7574 20.8913 C 51.9520 20.7614 52.1688 20.9779 51.9954 21.1728 L 38.7477 37.3645 C 38.4446 37.7325 38.1416 37.7975 37.7519 37.5810 L 18.3131 27.2122 C 17.4256 26.7360 17.1442 26.8442 16.4083 27.2988 Z"
  }));
}

var _default = BoltHorizontal;
exports["default"] = _default;