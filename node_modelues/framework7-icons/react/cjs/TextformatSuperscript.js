"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TextformatSuperscript(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 43.6445 28.1406 C 44.6992 28.1406 45.3555 27.4609 45.3555 26.4766 L 45.3555 10.4453 C 45.3555 9.2735 44.6524 8.5703 43.5039 8.5703 C 42.4727 8.5703 41.9570 8.9453 41.2773 9.4375 L 37.5273 11.9922 C 36.8711 12.4375 36.5898 12.8594 36.5898 13.3750 C 36.5898 14.1484 37.1758 14.7344 37.9024 14.7344 C 38.3711 14.7344 38.6758 14.5937 39.1445 14.2657 L 41.8633 12.4375 L 41.9336 12.4375 L 41.9336 26.4766 C 41.9336 27.4609 42.6367 28.1406 43.6445 28.1406 Z M 12.7305 47.4297 C 13.9024 47.4297 14.4649 46.9609 14.9336 45.6719 L 17.9336 37.3750 L 31.7617 37.3750 L 34.7851 45.6719 C 35.2305 46.9609 35.8164 47.4297 36.9883 47.4297 C 38.2539 47.4297 39.0976 46.6797 39.0976 45.5078 C 39.0976 45.1094 39.0273 44.7578 38.8398 44.2422 L 27.8476 14.9922 C 27.3086 13.5391 26.3476 12.8359 24.8476 12.8359 C 23.3945 12.8359 22.4336 13.5391 21.9180 14.9688 L 10.9024 44.2656 C 10.7149 44.7813 10.6445 45.1328 10.6445 45.5313 C 10.6445 46.7031 11.4414 47.4297 12.7305 47.4297 Z M 19.0820 33.7891 L 24.7773 18.0157 L 24.9180 18.0157 L 30.5898 33.7891 Z"
  }));
}

var _default = TextformatSuperscript;
exports["default"] = _default;