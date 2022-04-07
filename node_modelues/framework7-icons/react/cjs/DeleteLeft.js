"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DeleteLeft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 46.0351 49.5742 C 50.9339 49.5742 53.3944 47.1602 53.3944 42.3086 L 53.3944 13.6914 C 53.3944 8.8398 50.9339 6.4258 46.0351 6.4258 L 25.6681 6.4258 C 22.9259 6.4258 20.5587 7.1289 18.6368 9.1680 L 4.8321 23.5118 C 3.3087 25.0820 2.6056 26.4883 2.6056 27.9649 C 2.6056 29.4180 3.2853 30.8477 4.8321 32.4180 L 18.6603 46.6914 C 20.6056 48.7070 22.9494 49.5508 25.6915 49.5508 Z M 45.9885 45.8008 L 25.6212 45.8008 C 23.8400 45.8008 22.7384 45.3789 21.4962 44.1133 L 7.7618 29.9336 C 6.9650 29.1133 6.7306 28.5508 6.7306 27.9649 C 6.7306 27.3555 6.9884 26.7930 7.7618 25.9727 L 21.4728 11.7461 C 22.6915 10.5039 23.8400 10.1992 25.5978 10.1992 L 45.9885 10.1992 C 48.3323 10.1992 49.6211 11.4414 49.6211 13.8789 L 49.6211 42.1211 C 49.6211 44.5586 48.3323 45.8008 45.9885 45.8008 Z M 40.1056 37.5977 C 41.1134 37.5977 41.9337 36.8008 41.9337 35.8164 C 41.9337 35.3242 41.7228 34.9023 41.3712 34.5508 L 34.8087 27.9649 L 41.3712 21.4023 C 41.7228 21.0508 41.9337 20.6055 41.9337 20.1367 C 41.9337 19.1289 41.0900 18.2852 40.1056 18.2852 C 39.6368 18.2852 39.1915 18.4961 38.8400 18.8477 L 32.2774 25.4336 L 25.6915 18.8477 C 25.3400 18.4961 24.9181 18.2852 24.4259 18.2852 C 23.4415 18.2852 22.5978 19.1289 22.5978 20.1367 C 22.5978 20.6055 22.8087 21.0508 23.1603 21.4023 L 29.7228 27.9649 L 23.1603 34.5508 C 22.8087 34.9023 22.5978 35.3242 22.5978 35.8164 C 22.5978 36.8008 23.4181 37.5977 24.4259 37.5977 C 24.9415 37.5977 25.3400 37.4336 25.6681 37.1055 L 32.2774 30.4727 L 38.8634 37.1055 C 39.1915 37.4336 39.6134 37.5977 40.1056 37.5977 Z"
  }));
}

var _default = DeleteLeft;
exports["default"] = _default;