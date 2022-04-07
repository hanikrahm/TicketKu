"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Person2(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 38.4460 29.2320 C 43.2316 29.2320 47.1322 24.9692 47.1322 19.7814 C 47.1322 14.6540 43.2514 10.5922 38.4460 10.5922 C 33.6803 10.5922 29.7593 14.7143 29.7593 19.8216 C 29.7794 24.9893 33.6803 29.2320 38.4460 29.2320 Z M 15.2818 29.6744 C 19.4240 29.6744 22.8222 25.9545 22.8222 21.3900 C 22.8222 16.9262 19.4642 13.3269 15.2818 13.3269 C 11.1396 13.3269 7.7213 16.9865 7.7414 21.4303 C 7.7615 25.9746 11.1396 29.6744 15.2818 29.6744 Z M 38.4460 26.1958 C 35.5101 26.1958 32.9966 23.3807 32.9966 19.8216 C 32.9966 16.3229 35.4699 13.6285 38.4460 13.6285 C 41.4419 13.6285 43.8950 16.2827 43.8950 19.7814 C 43.8950 23.3405 41.4217 26.1958 38.4460 26.1958 Z M 15.2818 26.6783 C 12.8287 26.6783 10.7375 24.3257 10.7375 21.4303 C 10.7375 18.5951 12.8086 16.3229 15.2818 16.3229 C 17.8154 16.3229 19.8462 18.5549 19.8462 21.3900 C 19.8462 24.3257 17.7550 26.6783 15.2818 26.6783 Z M 4.1019 48.1131 L 19.8865 48.1131 C 18.9213 47.5702 18.1773 46.3637 18.3181 45.1372 L 3.5993 45.1372 C 3.1971 45.1372 2.9960 44.9763 2.9960 44.5943 C 2.9960 39.6076 8.6865 34.9426 15.2617 34.9426 C 17.7953 34.9426 20.0674 35.5458 22.0179 36.6920 C 22.6613 35.8877 23.3852 35.1839 24.2900 34.5606 C 21.6961 32.8514 18.5795 31.9667 15.2617 31.9667 C 6.8366 31.9667 0 38.0794 0 44.7752 C 0 47.0072 1.3673 48.1131 4.1019 48.1131 Z M 25.8182 48.1131 L 51.0736 48.1131 C 54.4113 48.1131 56 47.1077 56 44.8959 C 56 39.6277 49.3440 32.0069 38.4460 32.0069 C 27.5274 32.0069 20.8717 39.6277 20.8717 44.8959 C 20.8717 47.1077 22.4602 48.1131 25.8182 48.1131 Z M 24.8530 45.0769 C 24.3302 45.0769 24.1091 44.9361 24.1091 44.5138 C 24.1091 41.2162 29.2164 35.0431 38.4460 35.0431 C 47.6552 35.0431 52.7624 41.2162 52.7624 44.5138 C 52.7624 44.9361 52.5614 45.0769 52.0384 45.0769 Z"
  }));
}

var _default = Person2;
exports["default"] = _default;