"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CloudMoon(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 8.9906 47.5603 L 31.9334 47.5603 C 38.0614 47.5603 42.8111 42.9166 42.8111 36.9370 C 42.8111 36.7674 42.8111 36.5978 42.8111 36.4493 C 49.5751 36.1949 53.7314 32.4205 55.3004 28.3281 C 56 26.6318 55.0885 25.0839 53.4344 25.0839 C 52.1620 25.0839 51.1233 25.6352 48.8755 25.6352 C 43.4685 25.6352 40.6059 22.6454 40.6059 17.7261 C 40.6059 15.3300 41.3480 14.0153 41.3480 12.8279 C 41.3480 11.0892 39.8425 10.2198 37.9766 10.8559 C 33.4813 12.3402 29.6646 17.1324 29.6646 23.0059 C 29.6646 23.1967 29.6858 23.3876 29.6858 23.5784 C 27.1201 20.6522 23.5578 18.9559 19.5078 18.9559 C 12.4892 18.9559 6.6157 24.3630 5.9160 31.3391 C 2.3749 32.4418 0 35.4951 0 39.3543 C 0 44.1252 3.5835 47.5603 8.9906 47.5603 Z M 32.7816 22.9211 C 32.7816 18.8287 35.2201 15.6269 37.9978 14.1001 L 38.2310 14.2698 C 37.8706 15.2876 37.5525 16.7295 37.5525 18.3622 C 37.5525 24.4478 42.0055 28.6462 48.1546 28.6462 C 49.6602 28.6462 51.0594 28.3706 52.0348 28.0525 L 52.1620 28.2009 C 50.8688 30.7030 47.5610 33.3535 42.1962 33.3535 C 40.8604 29.7700 37.5738 27.1831 33.3753 26.5894 C 32.9725 25.4444 32.7816 24.1933 32.7816 22.9211 Z M 8.9057 44.1676 C 5.3011 44.1676 3.3926 42.0896 3.3926 39.4391 C 3.3926 37.1915 4.7073 35.2195 7.8243 34.3713 C 8.8421 34.1169 9.2238 33.6504 9.3086 32.5690 C 9.7963 26.6318 14.2068 22.3486 19.5078 22.3486 C 23.6214 22.3486 26.8232 24.6174 28.7952 28.5614 C 29.2405 29.4732 29.7706 29.7913 30.8520 29.7913 C 36.3227 29.7913 39.4185 33.0991 39.4185 37.0431 C 39.4185 40.9870 36.1954 44.1676 31.9971 44.1676 Z"
  }));
}

var _default = CloudMoon;
exports["default"] = _default;