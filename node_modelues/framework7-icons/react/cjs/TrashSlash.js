"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TrashSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 41.1483 34.9258 L 44.7108 38.4883 L 45.8593 14.3945 L 48.2032 14.3945 C 49.1641 14.3945 49.9374 13.5976 49.9374 12.6367 C 49.9374 11.6758 49.1641 10.8555 48.2032 10.8555 L 37.9608 10.8555 L 37.9608 7.3398 C 37.9608 3.9883 35.6874 1.8086 32.0780 1.8086 L 23.3124 1.8086 C 19.7030 1.8086 17.4530 3.9883 17.4530 7.3398 L 17.4530 10.3633 L 16.6327 10.3633 L 20.6405 14.3945 L 42.1093 14.3945 Z M 49.3278 52.1758 C 50.0310 52.8789 51.2032 52.8789 51.8828 52.1758 C 52.5625 51.4492 52.5860 50.3242 51.8828 49.6211 L 6.6717 4.3867 C 5.9686 3.6836 4.7968 3.6602 4.0937 4.3867 C 3.4140 5.0664 3.4140 6.2383 4.0937 6.9180 Z M 21.2030 10.8555 L 21.2030 7.5742 C 21.2030 6.2383 22.1639 5.3008 23.5937 5.3008 L 31.8202 5.3008 C 33.2499 5.3008 34.2343 6.2383 34.2343 7.5742 L 34.2343 10.8555 Z M 16.9843 54.1914 L 38.4764 54.1914 C 40.9843 54.1914 42.9061 52.9258 43.6796 50.9102 L 43.7030 50.4648 L 40.5858 47.3711 L 40.5624 48.2852 C 40.4921 49.6680 39.5077 50.6758 38.1015 50.6758 L 17.3124 50.6758 C 15.9764 50.6758 14.9686 49.6445 14.8983 48.2852 L 13.5390 20.3242 L 9.6952 16.4805 L 11.2186 48.6836 C 11.3827 52.0586 13.5858 54.1914 16.9843 54.1914 Z M 29.1483 22.8789 L 29.1483 20.2539 C 29.1483 19.4102 28.4921 18.7305 27.7186 18.7305 C 27.3202 18.7305 26.9218 18.9414 26.7108 19.2695 L 26.7108 20.4649 Z M 36.4608 30.2383 L 36.7421 20.2773 C 36.7655 19.3867 36.1796 18.7305 35.3827 18.7305 C 34.6561 18.7305 34.0468 19.4102 34.0233 20.2539 L 33.8124 27.5898 Z M 20.7812 46.5508 C 21.5780 46.5508 22.1639 45.8711 22.1405 45.0273 L 21.6483 28.4336 L 18.8593 25.6211 L 19.3983 45.0273 C 19.4218 45.9180 20.0077 46.5508 20.7812 46.5508 Z M 27.7186 46.5508 C 28.4921 46.5508 29.1483 45.8711 29.1483 45.0273 L 29.1483 35.8867 L 26.3124 33.0976 L 26.3124 45.0273 C 26.3124 45.8711 26.9686 46.5508 27.7186 46.5508 Z M 34.6796 46.5508 C 35.4530 46.5508 36.0155 45.9180 36.0390 45.0273 L 36.1093 42.8711 L 33.4608 40.1992 L 33.3202 45.0273 C 33.2968 45.8711 33.8827 46.5508 34.6796 46.5508 Z"
  }));
}

var _default = TrashSlash;
exports["default"] = _default;