"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RectangleArrowUpRightArrowDownLeftSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.6484 5.7344 L 15.5312 8.5703 L 15.5546 8.2422 C 16.0468 6.5781 16.9843 5.6641 18.6952 5.6641 L 37.2577 5.6641 C 39.3437 5.6641 40.4687 6.8125 40.4687 8.7110 L 40.4687 10.5391 L 43.9843 10.5391 L 43.9843 8.2188 C 43.9843 4.7031 41.5468 2.2422 37.7265 2.2422 L 18.2265 2.2422 C 15.4843 2.2422 13.6093 3.4844 12.6952 5.6406 Z M 4.7031 7.2578 L 48.7420 51.25 C 49.0939 51.6016 49.5623 51.7656 50.0313 51.7656 C 50.9923 51.7656 51.8126 50.9688 51.8126 49.9609 C 51.8126 49.4922 51.6484 49.0469 51.2966 48.6953 L 7.2812 4.7031 C 6.9296 4.3516 6.4609 4.1641 5.9921 4.1641 C 5.0077 4.1641 4.1874 4.9610 4.1874 5.9688 C 4.1874 6.4375 4.3749 6.9063 4.7031 7.2578 Z M 47.2655 14.8984 C 47.2655 13.6328 46.5624 12.9531 45.3202 12.9531 L 35.6640 12.9531 C 34.6562 12.9531 34.1874 13.7266 34.1874 14.4766 C 34.1874 15.2266 34.7499 15.9766 35.7343 15.9766 L 39.3906 15.9766 L 42.1796 15.8359 L 39.4843 18.3437 L 35.8280 21.9766 C 35.4765 22.3516 35.3124 22.75 35.3124 23.1250 C 35.3124 24.0625 36.1796 24.9063 37.1171 24.9063 C 37.4921 24.9063 37.8906 24.7656 38.2421 24.4141 L 41.8749 20.7578 L 44.3828 18.0625 L 44.2421 20.8281 L 44.2421 24.5781 C 44.2421 25.5859 44.9921 26.1250 45.7187 26.1250 C 46.4921 26.1250 47.2655 25.6563 47.2655 24.6484 Z M 11.9921 27.9531 L 15.5312 27.9531 L 15.5312 22.5391 L 11.9921 19.0234 Z M 40.4687 33.3906 L 43.9843 36.9063 L 43.9843 28.0234 L 40.4687 28.0234 Z M 8.7812 41.0781 C 8.7812 42.3438 9.4843 43.0469 10.7265 43.0469 L 20.3828 43.0469 C 21.3906 43.0469 21.8593 42.2734 21.8593 41.5 C 21.8593 40.75 21.2968 40 20.3124 40 L 16.6562 40 L 13.8671 40.1641 L 16.5624 37.6328 L 20.2187 34 C 20.5702 33.6484 20.7343 33.25 20.7343 32.8516 C 20.7343 31.9141 19.8671 31.0937 18.9296 31.0937 C 18.5546 31.0937 18.1562 31.2110 17.8046 31.5625 L 14.1718 35.2422 L 11.6640 37.9141 L 11.8046 35.1484 L 11.8046 31.3984 C 11.8046 30.3906 11.0546 29.8516 10.3280 29.8516 C 9.5546 29.8516 8.7812 30.3203 8.7812 31.3281 Z M 11.9921 47.7578 C 11.9921 51.2734 14.4296 53.7578 18.2499 53.7578 L 37.7499 53.7578 C 40.4921 53.7578 42.3671 52.4922 43.2812 50.3359 L 43.3280 50.2422 L 40.4687 47.4063 L 40.4452 47.7344 C 39.8593 49.6094 38.9921 50.3359 37.2812 50.3359 L 18.7187 50.3359 C 16.6328 50.3359 15.5312 49.1641 15.5312 47.2656 L 15.5312 45.4375 L 11.9921 45.4375 Z"
  }));
}

var _default = RectangleArrowUpRightArrowDownLeftSlash;
exports["default"] = _default;