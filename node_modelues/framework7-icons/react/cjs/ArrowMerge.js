"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowMerge(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 16.0820 47.0430 C 16.6680 47.0430 17.3008 46.8320 17.8633 46.4570 L 19.0820 45.6367 C 22.3398 43.4336 27.1445 38.4649 27.9648 35.9805 L 28.0351 35.9805 C 28.8555 38.4414 33.6367 43.4336 36.9180 45.6367 L 38.1367 46.4570 C 38.6992 46.8320 39.3320 47.0430 39.9414 47.0430 C 41.1133 47.0430 41.9102 46.2227 41.9102 45.0742 C 41.9102 44.3711 41.5586 43.6680 40.9023 43.2695 L 39.0508 42.0742 C 35.7929 39.9180 30.0508 34.4805 30.0508 28.7383 L 30.0508 19.9492 L 33.3789 19.9492 C 35.0429 19.9492 35.4648 18.8008 34.5742 17.5117 L 29.3242 10.0351 C 28.5742 8.9805 27.4492 8.9570 26.6758 10.0351 L 21.4492 17.4883 C 20.5117 18.8008 20.9570 19.9492 22.6445 19.9492 L 25.9492 19.9492 L 25.9492 28.7383 C 25.9492 34.4805 20.1836 39.8946 16.9492 42.0742 L 15.0976 43.2695 C 14.4648 43.6680 14.0898 44.3945 14.0898 45.0977 C 14.0898 46.1524 14.8633 47.0430 16.0820 47.0430 Z"
  }));
}

var _default = ArrowMerge;
exports["default"] = _default;