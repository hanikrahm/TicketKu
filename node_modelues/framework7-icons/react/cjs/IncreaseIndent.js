"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IncreaseIndent(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 23.8165 11.3594 L 53.3948 11.3594 C 54.4023 11.3594 55.1991 10.5859 55.1991 9.5781 C 55.1991 8.5937 54.4023 7.8203 53.3948 7.8203 L 23.8165 7.8203 C 22.8322 7.8203 22.0587 8.5937 22.0587 9.5781 C 22.0587 10.5859 22.8322 11.3594 23.8165 11.3594 Z M 23.8165 23.6406 L 53.3948 23.6406 C 54.4023 23.6406 55.1991 22.8672 55.1991 21.8594 C 55.1991 20.8750 54.4023 20.1015 53.3948 20.1015 L 23.8165 20.1015 C 22.8322 20.1015 22.0587 20.8750 22.0587 21.8594 C 22.0587 22.8672 22.8322 23.6406 23.8165 23.6406 Z M 4.5040 35.1953 L 12.2618 30.0156 C 13.6447 29.0781 13.5978 27.0859 12.2618 26.1484 L 4.5040 20.8750 C 2.6993 19.6563 .8009 20.3359 .8243 22.4922 L .8243 33.6015 C .8009 35.6875 2.7931 36.3203 4.5040 35.1953 Z M 23.8165 35.9219 L 53.3948 35.9219 C 54.4023 35.9219 55.1991 35.1250 55.1991 34.1406 C 55.1991 33.1563 54.4023 32.3828 53.3948 32.3828 L 23.8165 32.3828 C 22.8322 32.3828 22.0587 33.1563 22.0587 34.1406 C 22.0587 35.1250 22.8322 35.9219 23.8165 35.9219 Z M 23.8165 48.1797 L 41.4415 48.1797 C 42.4259 48.1797 43.2226 47.4063 43.2226 46.4219 C 43.2226 45.4375 42.4259 44.6406 41.4415 44.6406 L 23.8165 44.6406 C 22.8322 44.6406 22.0587 45.4375 22.0587 46.4219 C 22.0587 47.4063 22.8322 48.1797 23.8165 48.1797 Z"
  }));
}

var _default = IncreaseIndent;
exports["default"] = _default;