"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ListDash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6.7070 16.1641 L 10.7382 16.1641 C 12.0039 16.1641 13.0586 15.1094 13.0586 13.8437 C 13.0586 12.5313 12.0039 11.5000 10.7382 11.5000 L 6.7070 11.5000 C 5.4413 11.5000 4.3867 12.5313 4.3867 13.8437 C 4.3867 15.1094 5.4413 16.1641 6.7070 16.1641 Z M 20.0429 15.7188 L 49.7149 15.7188 C 50.7930 15.7188 51.6133 14.8984 51.6133 13.8437 C 51.6133 12.7656 50.7930 11.9453 49.7149 11.9453 L 20.0429 11.9453 C 18.9882 11.9453 18.1445 12.7656 18.1445 13.8437 C 18.1445 14.8984 18.9882 15.7188 20.0429 15.7188 Z M 6.7070 30.3437 L 10.7382 30.3437 C 12.0039 30.3437 13.0586 29.2891 13.0586 28.0000 C 13.0586 26.7110 12.0039 25.6797 10.7382 25.6797 L 6.7070 25.6797 C 5.4413 25.6797 4.3867 26.7110 4.3867 28.0000 C 4.3867 29.2891 5.4413 30.3437 6.7070 30.3437 Z M 20.0429 29.8984 L 49.7149 29.8984 C 50.7930 29.8984 51.6133 29.0547 51.6133 28.0000 C 51.6133 26.9453 50.7930 26.1250 49.7149 26.1250 L 20.0429 26.1250 C 18.9882 26.1250 18.1445 26.9453 18.1445 28.0000 C 18.1445 29.0547 18.9882 29.8984 20.0429 29.8984 Z M 6.7070 44.5000 L 10.7382 44.5000 C 12.0039 44.5000 13.0586 43.4453 13.0586 42.1797 C 13.0586 40.8672 12.0039 39.8359 10.7382 39.8359 L 6.7070 39.8359 C 5.4413 39.8359 4.3867 40.8672 4.3867 42.1797 C 4.3867 43.4453 5.4413 44.5000 6.7070 44.5000 Z M 20.0429 44.0547 L 49.7149 44.0547 C 50.7930 44.0547 51.6133 43.2344 51.6133 42.1797 C 51.6133 41.1016 50.7930 40.2813 49.7149 40.2813 L 20.0429 40.2813 C 18.9882 40.2813 18.1445 41.1016 18.1445 42.1797 C 18.1445 43.2344 18.9882 44.0547 20.0429 44.0547 Z"
  }));
}

var _default = ListDash;
exports["default"] = _default;