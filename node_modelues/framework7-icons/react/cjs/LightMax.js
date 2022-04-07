"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LightMax(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 30.0392 16.0820 C 30.0392 14.9571 29.1016 14.0195 28.0001 14.0195 C 26.8985 14.0195 25.9610 14.9571 25.9610 16.0820 L 25.9610 22.5976 C 25.9610 23.6992 26.8985 24.6367 28.0001 24.6367 C 29.1016 24.6367 30.0392 23.6992 30.0392 22.5976 Z M 14.1251 28.9492 C 14.8985 29.7461 16.2110 29.7461 16.9845 28.9492 C 17.7813 28.1758 17.7813 26.8633 16.9845 26.0898 L 12.4142 21.4727 C 11.6407 20.6758 10.3282 20.6524 9.5314 21.4492 C 8.7579 22.2227 8.7579 23.5352 9.5314 24.3320 Z M 38.7345 26.3242 C 37.9610 27.0976 37.9610 28.4102 38.7345 29.1836 C 39.5314 29.9805 40.8673 29.9805 41.6407 29.1836 L 46.2577 24.5898 C 47.0550 23.7930 47.0550 22.4571 46.2577 21.6836 C 45.4845 20.8867 44.1720 20.8867 43.3751 21.6836 Z M 51.8593 41.9805 C 52.9609 41.9805 53.8983 41.0430 53.8983 39.9414 C 53.8983 38.8164 52.9609 37.8789 51.8593 37.8789 L 45.3438 37.8789 C 44.2189 37.8789 43.2813 38.8164 43.2813 39.9414 C 43.2813 41.0430 44.2189 41.9805 45.3438 41.9805 Z M 4.1407 37.8789 C 3.0392 37.8789 2.1017 38.8164 2.1017 39.9414 C 2.1017 41.0430 3.0392 41.9805 4.1407 41.9805 L 10.6798 41.9805 C 11.8048 41.9805 12.7423 41.0430 12.7423 39.9414 C 12.7423 38.8164 11.8048 37.8789 10.6798 37.8789 Z M 20.1251 38.0195 C 19.0470 38.0195 18.1329 38.9102 18.1329 39.9883 C 18.1329 41.0430 19.0470 41.9336 20.1251 41.9336 L 35.8516 41.9336 C 36.9298 41.9336 37.8438 41.0430 37.8438 39.9883 C 37.8438 38.9102 36.9298 38.0195 35.8516 38.0195 Z"
  }));
}

var _default = LightMax;
exports["default"] = _default;