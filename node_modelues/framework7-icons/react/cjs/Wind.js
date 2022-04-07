"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Wind(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6.1563 21.2852 C 9.5313 20.2071 13.0235 19.6680 16.3516 19.6680 C 20.6641 19.6680 23.8282 20.3476 27.9063 20.3476 C 32.1250 20.3476 34.7500 17.4883 34.7500 13.7617 C 34.7500 9.9414 31.8204 7.2227 28.2110 7.2227 C 25.5391 7.2227 23.1953 8.8867 22.2110 11.1133 C 21.8360 11.8867 21.9766 12.8008 22.7969 13.2227 C 23.5469 13.5976 24.4610 13.3633 24.9532 12.4024 C 25.4688 11.2071 26.7344 10.2695 28.2110 10.2695 C 30.1563 10.2695 31.6797 11.6289 31.6797 13.7617 C 31.6797 15.8945 30.2032 17.3008 27.9063 17.3008 C 24.0157 17.3008 20.8047 16.5976 16.3516 16.5976 C 12.5313 16.5976 8.6641 17.2773 5.2188 18.3789 C 4.2344 18.6602 3.8594 19.5039 4.0938 20.3242 C 4.3282 21.1211 5.1016 21.5898 6.1563 21.2852 Z M 42.8125 32.2539 C 48.2737 32.2539 52.1406 28.7852 52.1406 23.9336 C 52.1406 19.1524 48.4609 15.6836 43.8906 15.6836 C 39.6485 15.6836 36.5079 18.6367 35.9453 22.5273 C 35.8047 23.4883 36.3438 24.2617 37.1875 24.3789 C 38.0547 24.4961 38.8047 23.9571 38.9922 22.8555 C 39.3906 20.4180 41.4297 18.7305 43.8906 18.7305 C 46.7502 18.7305 49.0705 20.8633 49.0705 23.9336 C 49.0705 27.0508 46.6096 29.2071 42.8125 29.2071 C 35.6641 29.2071 27.9532 25.1289 18.5782 25.1289 C 13.7500 25.1289 9.3438 25.9024 5.2188 27.3789 C 4.2579 27.7071 3.8594 28.5273 4.0938 29.3476 C 4.3282 30.1445 5.1250 30.6367 6.1563 30.2852 C 9.9766 28.8320 13.9610 28.1992 18.5782 28.1992 C 27.9297 28.1992 34.9141 32.2539 42.8125 32.2539 Z M 27.9297 48.7773 C 31.5391 48.7773 34.3282 46.1055 34.3282 42.2852 C 34.3282 36.7539 28.6797 33.6602 18.2735 33.6602 C 13.9141 33.6602 9.2032 34.5039 5.2188 35.8867 C 4.2579 36.2149 3.8594 37.0352 4.0938 37.8555 C 4.3282 38.6524 5.1250 39.1445 6.1563 38.7930 C 9.8828 37.4571 14.0547 36.7305 18.2735 36.7305 C 26.7813 36.7305 31.2813 38.8633 31.2813 42.2852 C 31.2813 44.4414 29.7813 45.7305 27.9297 45.7305 C 26.0782 45.7305 24.9532 44.4883 24.6250 42.5195 C 24.4844 41.6524 23.8516 40.9492 22.8438 41.0195 C 21.7891 41.0898 21.3672 41.9805 21.5079 42.9180 C 21.9297 46.1758 24.3438 48.7773 27.9297 48.7773 Z"
  }));
}

var _default = Wind;
exports["default"] = _default;