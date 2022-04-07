"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function UmbrellaFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.7852 30.6719 C 8.4883 30.6719 8.9804 30.1562 9.3789 29.5469 C 10.6914 27.5547 12.2383 26.3125 14.5586 26.3125 C 16.9023 26.3125 18.2617 27.5313 19.4101 29.5234 C 19.7852 30.1797 20.2070 30.6719 20.9101 30.6719 C 21.6133 30.6719 22.0586 30.1797 22.4101 29.5469 C 23.1836 28.1640 24.5195 27.0625 26.0195 26.5234 L 26.0195 46.3516 C 26.0195 48.1797 24.7304 49.6094 22.7617 49.6094 C 20.8399 49.6094 19.5508 48.1562 19.5508 46.3516 C 19.5508 44.9219 18.6601 44.1016 17.5352 44.1016 C 16.4336 44.1016 15.5899 44.9219 15.5899 46.3516 C 15.5899 50.3594 18.6367 53.5469 22.7617 53.5469 C 26.9101 53.5469 29.9804 50.3594 29.9804 46.3516 L 29.9804 26.5234 C 31.4804 27.0625 32.7930 28.1640 33.5899 29.5469 C 33.9414 30.1797 34.3633 30.6719 35.0899 30.6719 C 35.7930 30.6719 36.2148 30.1797 36.5899 29.5234 C 37.7383 27.5547 39.0977 26.3125 41.4414 26.3125 C 43.7617 26.3125 45.3320 27.6719 46.6211 29.6875 C 47.0195 30.2969 47.5117 30.6719 48.2148 30.6719 C 49.1759 30.6719 50.0899 29.8984 50.0899 28.6328 C 50.0899 20.2656 43.7617 8.6640 29.9804 7.6328 L 29.9804 4.5391 C 29.9804 3.2969 29.1367 2.4531 27.9883 2.4531 C 26.8633 2.4531 26.0195 3.2969 26.0195 4.5391 L 26.0195 7.6328 C 12.2383 8.6640 5.9101 20.2656 5.9101 28.6328 C 5.9101 29.8984 6.8008 30.6719 7.7852 30.6719 Z"
  }));
}

var _default = UmbrellaFill;
exports["default"] = _default;