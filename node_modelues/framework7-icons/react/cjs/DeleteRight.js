"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DeleteRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 9.9648 49.5742 L 30.3085 49.5508 C 33.0507 49.5508 35.4179 48.7070 37.3398 46.6914 L 51.1679 32.4180 C 52.7149 30.8477 53.3946 29.4180 53.3946 27.9649 C 53.3946 26.4883 52.7149 25.0820 51.1679 23.5118 L 37.3632 9.1680 C 35.4413 7.1289 33.0741 6.4258 30.3319 6.4258 L 9.9648 6.4258 C 5.0898 6.4258 2.6054 8.8398 2.6054 13.6914 L 2.6054 42.3086 C 2.6054 47.1602 5.0898 49.5742 9.9648 49.5742 Z M 10.0351 45.8008 C 7.6913 45.8008 6.3788 44.5586 6.3788 42.1211 L 6.3788 13.8789 C 6.3788 11.4414 7.6913 10.1992 10.0351 10.1992 L 30.4023 10.1992 C 32.1601 10.1992 33.3319 10.5039 34.5273 11.7461 L 48.2384 25.9727 C 49.0117 26.7930 49.2930 27.3555 49.2930 27.9649 C 49.2930 28.5508 49.0352 29.1133 48.2384 29.9336 L 34.5038 44.1133 C 33.2851 45.3789 32.1601 45.8008 30.3788 45.8008 Z M 15.8944 37.5977 C 16.4101 37.5977 16.8085 37.4336 17.1366 37.1055 L 23.7460 30.4727 L 30.3554 37.1055 C 30.6601 37.4336 31.0819 37.5977 31.5741 37.5977 C 32.5819 37.5977 33.4023 36.8008 33.4023 35.8164 C 33.4023 35.3242 33.1913 34.9023 32.8398 34.5508 L 26.3007 27.9649 L 32.8398 21.4023 C 33.1913 21.0508 33.4023 20.6055 33.4023 20.1367 C 33.4023 19.1289 32.5585 18.2852 31.5741 18.2852 C 31.1054 18.2852 30.6835 18.4961 30.3319 18.8477 L 23.7460 25.4336 L 17.1601 18.8477 C 16.8085 18.4961 16.3866 18.2852 15.8944 18.2852 C 14.9101 18.2852 14.0898 19.1289 14.0898 20.1367 C 14.0898 20.6055 14.2773 21.0508 14.6288 21.4023 L 21.1913 27.9649 L 14.6288 34.5508 C 14.2773 34.9023 14.0898 35.3242 14.0898 35.8164 C 14.0898 36.8008 14.8866 37.5977 15.8944 37.5977 Z"
  }));
}

var _default = DeleteRight;
exports["default"] = _default;