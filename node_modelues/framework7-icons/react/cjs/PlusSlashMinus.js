"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlusSlashMinus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 14.4180 50.1367 C 15.2149 50.1367 15.6367 49.8086 16.2696 48.9414 L 29.9805 28.5742 L 43.3633 8.8398 C 43.6680 8.3945 43.7852 7.9961 43.7852 7.5273 C 43.7852 6.5898 42.9649 5.8633 42.0274 5.8633 C 41.2071 5.8633 40.7618 6.1211 40.0821 7.0820 L 26.6992 26.9805 L 13.0118 47.1133 C 12.7071 47.5586 12.5430 47.9336 12.5430 48.4492 C 12.5430 49.4570 13.3867 50.1367 14.4180 50.1367 Z M 12.3555 19.1524 L 12.3555 24.2149 C 12.3555 25.3164 13.0587 25.9492 14.0430 25.9492 C 15.0040 25.9492 15.7305 25.3164 15.7305 24.2149 L 15.7305 19.1524 L 20.4883 19.1524 C 21.5899 19.1524 22.1758 18.4492 22.1758 17.5117 C 22.1758 16.5976 21.5899 15.8476 20.4883 15.8476 L 15.7305 15.8476 L 15.7305 10.7851 C 15.7305 9.6836 15.0040 9.0273 14.0430 9.0273 C 13.0587 9.0273 12.3555 9.6836 12.3555 10.7851 L 12.3555 15.8476 L 7.6211 15.8476 C 6.5196 15.8476 5.9102 16.5976 5.9102 17.5117 C 5.9102 18.4492 6.5196 19.1524 7.6211 19.1524 Z M 34.4571 39.8945 C 34.4571 40.8555 35.0899 41.5352 36.1914 41.5352 L 48.3556 41.5352 C 49.4807 41.5352 50.0898 40.8555 50.0898 39.8945 C 50.0898 38.9571 49.4807 38.2305 48.3556 38.2305 L 36.1914 38.2305 C 35.0899 38.2305 34.4571 38.9571 34.4571 39.8945 Z"
  }));
}

var _default = PlusSlashMinus;
exports["default"] = _default;