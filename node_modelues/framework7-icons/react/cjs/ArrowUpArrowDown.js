"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUpArrowDown(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 39.9648 50.1367 C 40.5507 50.1367 41.0897 49.9258 41.5351 49.4570 L 55.0583 35.6758 C 55.4572 35.2773 55.7149 34.6680 55.7149 34.1524 C 55.7149 32.9102 54.8476 32.0664 53.6288 32.0664 C 53.0428 32.0664 52.5743 32.2773 52.1989 32.6524 L 45.6133 39.4024 L 41.8163 43.8320 L 42.0507 38.3476 L 42.0507 7.9492 C 42.0507 6.7305 41.1835 5.8633 39.9648 5.8633 C 38.7460 5.8633 37.8788 6.7305 37.8788 7.9492 L 37.8788 38.3476 L 38.1132 43.8320 L 34.3163 39.4024 L 27.7304 32.6524 C 27.3554 32.2773 26.8866 32.0664 26.3007 32.0664 C 25.0819 32.0664 24.2148 32.9102 24.2148 34.1524 C 24.2148 34.6680 24.4726 35.2773 24.8710 35.6758 L 38.3944 49.4570 C 38.8397 49.9258 39.3788 50.1367 39.9648 50.1367 Z M 16.0351 50.1367 C 17.2538 50.1367 18.1210 49.2695 18.1210 48.0508 L 18.1210 17.6524 L 17.8866 12.1680 L 21.6835 16.5976 L 28.2695 23.3476 C 28.6444 23.7227 29.1132 23.9336 29.6992 23.9336 C 30.9179 23.9336 31.7616 23.0898 31.7616 21.8476 C 31.7616 21.3320 31.5273 20.7227 31.1288 20.3242 L 17.6054 6.5430 C 17.1601 6.0742 16.5976 5.8633 16.0351 5.8633 C 15.4492 5.8633 14.9101 6.0742 14.4648 6.5430 L .9413 20.3242 C .5429 20.7227 .2851 21.3320 .2851 21.8476 C .2851 23.0898 1.1523 23.9336 2.3476 23.9336 C 2.9570 23.9336 3.4257 23.7227 3.8007 23.3476 L 10.3866 16.5976 L 14.1835 12.1680 L 13.9492 17.6524 L 13.9492 48.0508 C 13.9492 49.2695 14.8163 50.1367 16.0351 50.1367 Z"
  }));
}

var _default = ArrowUpArrowDown;
exports["default"] = _default;