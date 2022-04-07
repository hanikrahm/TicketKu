"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TrayArrowUp(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0117 35.1837 C 29.0195 35.1837 29.8632 34.3400 29.8632 33.3556 L 29.8632 9.4962 L 29.7226 5.9805 L 31.2929 7.6446 L 34.8554 11.4181 C 35.1835 11.7931 35.6757 11.9805 36.1210 11.9805 C 37.1054 11.9805 37.8319 11.3009 37.8319 10.3400 C 37.8319 9.8478 37.6210 9.4727 37.2695 9.1212 L 29.3710 1.4572 C 28.8788 .9882 28.4804 .8476 28.0117 .8476 C 27.5195 .8476 27.1210 .9882 26.6523 1.4572 L 18.7304 9.1212 C 18.3788 9.4727 18.1679 9.8478 18.1679 10.3400 C 18.1679 11.3009 18.8710 11.9805 19.8554 11.9805 C 20.3007 11.9805 20.8163 11.7931 21.1444 11.4181 L 24.7070 7.6446 L 26.2773 5.9805 L 26.1366 9.4962 L 26.1366 33.3556 C 26.1366 34.3400 27.0039 35.1837 28.0117 35.1837 Z M 7.7148 55.1524 L 48.2852 55.1524 C 53.1836 55.1524 55.6446 52.7149 55.6446 47.8868 L 55.6446 34.0118 C 55.6446 31.9024 55.3633 30.8478 54.3088 29.5587 L 46.9024 20.4415 C 43.9960 16.9024 42.9414 16.0821 38.7929 16.0821 L 34.1757 16.0821 L 34.1757 19.3634 L 39.0507 19.3634 C 40.7617 19.3634 41.8398 19.6915 43.2227 21.3790 L 50.8398 30.9415 C 51.8008 32.1368 51.4489 32.6056 50.1601 32.6056 L 35.2304 32.6056 C 34.0351 32.6056 33.4492 33.5196 33.4492 34.5040 L 33.4492 34.5743 C 33.4492 37.2931 31.3163 40.1759 27.9882 40.1759 C 24.6835 40.1759 22.5507 37.2931 22.5507 34.5743 L 22.5507 34.5040 C 22.5507 33.5196 21.9648 32.6056 20.7695 32.6056 L 5.8632 32.6056 C 4.5273 32.6056 4.2695 32.0665 5.1601 30.9415 L 12.7304 21.4493 C 14.1601 19.7149 15.2382 19.3634 16.9492 19.3634 L 21.8476 19.3634 L 21.8476 16.0821 L 17.2070 16.0821 C 13.0585 16.0821 12.0273 16.8790 9.0507 20.5118 L 1.6913 29.5587 C .6601 30.8243 .3554 31.9024 .3554 34.0118 L .3554 47.8868 C .3554 52.7384 2.8398 55.1524 7.7148 55.1524 Z M 7.7851 51.3790 C 5.4413 51.3790 4.1288 50.1368 4.1288 47.6993 L 4.1288 36.0274 L 18.9882 36.0274 C 19.5741 40.4102 23.2304 43.6446 27.9882 43.6446 C 32.7460 43.6446 36.4257 40.3868 36.9882 36.0274 L 51.8708 36.0274 L 51.8708 47.6993 C 51.8708 50.1368 50.5350 51.3790 48.2147 51.3790 Z"
  }));
}

var _default = TrayArrowUp;
exports["default"] = _default;