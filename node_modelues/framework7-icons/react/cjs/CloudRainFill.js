"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CloudRainFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.2618 36.0976 L 41.3477 36.0976 C 48.7772 36.0976 54.5195 30.4726 54.5195 23.2774 C 54.5195 15.9883 48.5195 10.5274 40.5743 10.5976 C 37.5743 4.5508 32.0665 1.0586 25.5743 1.0586 C 16.9259 1.0586 9.6368 7.8789 8.9571 16.6211 C 4.4102 17.8633 1.4805 21.6836 1.4805 26.3008 C 1.4805 32.1133 5.8399 36.0976 12.2618 36.0976 Z M 31.5274 47.3242 L 34.5743 42.0508 C 34.9962 41.3242 34.7618 40.5039 34.0586 40.1055 C 33.3555 39.6836 32.5586 39.9180 32.1368 40.6445 L 29.0430 45.9648 C 28.6681 46.6445 28.8555 47.4648 29.5821 47.8867 C 30.2852 48.2617 31.1290 48.0274 31.5274 47.3242 Z M 36.9649 54.0274 L 43.8790 42.0273 C 44.3008 41.3242 44.0899 40.5273 43.4102 40.1055 C 42.7540 39.7070 41.9102 39.9180 41.4649 40.6211 L 34.5977 52.5742 C 34.1993 53.3008 34.3868 54.1211 35.0899 54.5430 C 35.7696 54.9179 36.5665 54.7070 36.9649 54.0274 Z M 12.8712 47.3476 L 15.9181 42.0742 C 16.3399 41.3476 16.1290 40.5273 15.4259 40.1289 C 14.6993 39.7070 13.9024 39.9414 13.4805 40.6680 L 10.4102 45.9883 C 10.0118 46.6680 10.2227 47.4883 10.9259 47.8867 C 11.6290 48.2852 12.4727 48.0508 12.8712 47.3476 Z M 18.3086 54.0508 L 25.2462 42.0508 C 25.6446 41.3476 25.4337 40.5508 24.7774 40.1289 C 24.0977 39.7305 23.2305 39.9414 22.8321 40.6445 L 15.9415 52.5976 C 15.5430 53.3242 15.7540 54.1445 16.4571 54.5664 C 17.1368 54.9414 17.9337 54.7305 18.3086 54.0508 Z"
  }));
}

var _default = CloudRainFill;
exports["default"] = _default;