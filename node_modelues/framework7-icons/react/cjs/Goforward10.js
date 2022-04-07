"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Goforward10(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 54.4024 C 41.0546 54.4024 51.9063 43.5742 51.9063 30.4961 C 51.9063 22.6211 47.9219 15.5430 41.8983 11.1602 C 40.8671 10.3633 39.5780 10.6211 38.9921 11.5820 C 38.4062 12.5664 38.7109 13.6680 39.6483 14.3945 C 44.6405 17.9570 47.8983 23.8398 47.9219 30.4961 C 47.9454 41.5586 39.0390 50.4180 27.9999 50.4180 C 16.9374 50.4180 8.1014 41.5586 8.1014 30.4961 C 8.1014 21.0039 14.6171 13.1055 23.4765 11.0898 L 23.4765 14.4649 C 23.4765 16.1289 24.6249 16.5742 25.8905 15.6602 L 33.3905 10.4102 C 34.4452 9.6836 34.4687 8.5586 33.3905 7.7851 L 25.9140 2.5351 C 24.6249 1.5976 23.4765 2.0430 23.4765 3.7305 L 23.4765 7.0351 C 12.5077 9.1680 4.0937 18.9649 4.0937 30.4961 C 4.0937 43.5742 14.9218 54.4024 27.9999 54.4024 Z M 33.6718 40.3633 C 37.5624 40.3633 40.0936 36.6836 40.0936 31.0586 C 40.0936 25.3867 37.5624 21.6602 33.6718 21.6602 C 29.7812 21.6602 27.2265 25.3867 27.2265 31.0586 C 27.2265 36.6836 29.7812 40.3633 33.6718 40.3633 Z M 21.4374 40.0820 C 22.3514 40.0820 22.9609 39.4492 22.9609 38.4649 L 22.9609 23.7227 C 22.9609 22.5742 22.3280 21.8476 21.2733 21.8476 C 20.6405 21.8476 20.2187 22.0586 19.3514 22.6211 L 16.1171 24.8008 C 15.5780 25.1758 15.3436 25.5976 15.3436 26.1602 C 15.3436 26.9336 15.9530 27.5898 16.7030 27.5898 C 17.1249 27.5898 17.3593 27.4961 17.8280 27.1680 L 20.0077 25.5742 L 20.0077 38.4649 C 20.0077 39.4258 20.5702 40.0820 21.4374 40.0820 Z M 33.6718 37.5273 C 31.5858 37.5273 30.2733 35.0664 30.2733 31.0586 C 30.2733 26.9805 31.5624 24.4961 33.6718 24.4961 C 35.7577 24.4961 37.0234 26.9570 37.0234 31.0586 C 37.0234 35.0664 35.7343 37.5273 33.6718 37.5273 Z"
  }));
}

var _default = Goforward10;
exports["default"] = _default;