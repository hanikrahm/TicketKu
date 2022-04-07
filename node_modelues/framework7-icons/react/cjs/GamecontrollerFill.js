"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function GamecontrollerFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.3904 46.8061 C 10.0478 46.8061 11.8711 45.8363 13.5005 43.8190 L 17.0114 39.5709 C 17.5158 38.9696 18.0977 38.6787 18.6796 38.6787 L 37.3206 38.6787 C 37.9022 38.6787 38.4842 38.9696 38.9692 39.5709 L 42.4802 43.8190 C 44.1288 45.8363 45.9327 46.8061 48.6098 46.8061 C 53.0321 46.8061 56 43.8577 56 39.3188 C 56 37.3790 55.5344 35.1484 54.7975 32.6461 C 53.6141 28.6697 51.5388 23.2578 49.5406 19.0680 C 47.8920 15.5765 47.0383 13.9859 42.9263 13.0548 C 39.2600 12.2208 34.1974 11.6582 27.9903 11.6582 C 21.7832 11.6582 16.7205 12.2208 13.0738 13.0548 C 8.9615 13.9859 8.1081 15.5765 6.4399 19.0680 C 4.4614 23.2578 2.3859 28.6697 1.2026 32.6461 C .4461 35.1484 0 37.3790 0 39.3188 C 0 43.8577 2.9484 46.8061 7.3904 46.8061 Z M 12.2979 25.3333 C 12.2979 24.3635 12.8798 23.7621 13.9079 23.7621 L 17.3800 23.7621 L 17.3800 20.3676 C 17.3800 19.3783 17.9619 18.7771 18.9318 18.7771 C 19.8823 18.7771 20.4448 19.3783 20.4448 20.3676 L 20.4448 23.7621 L 23.7423 23.7621 C 24.8285 23.7621 25.4687 24.3635 25.4687 25.3333 C 25.4687 26.3420 24.8285 26.9627 23.7423 26.9627 L 20.4448 26.9627 L 20.4448 30.3572 C 20.4448 31.3465 19.8823 31.9672 18.9318 31.9672 C 17.9619 31.9672 17.3800 31.3465 17.3800 30.3572 L 17.3800 26.9627 L 13.9079 26.9627 C 12.8798 26.9627 12.2979 26.3420 12.2979 25.3333 Z M 37.0683 22.3074 C 37.0683 20.7168 38.3098 19.4947 39.8614 19.4947 C 41.4326 19.4947 42.6546 20.7168 42.6546 22.3074 C 42.6546 23.8785 41.4326 25.0812 39.8614 25.0812 C 38.3098 25.0812 37.0683 23.8785 37.0683 22.3074 Z M 31.3654 28.0489 C 31.3654 26.4584 32.5875 25.2363 34.1587 25.2363 C 35.7298 25.2363 36.9325 26.4584 36.9325 28.0489 C 36.9325 29.6201 35.7298 30.8422 34.1587 30.8422 C 32.5875 30.8422 31.3654 29.6201 31.3654 28.0489 Z"
  }));
}

var _default = GamecontrollerFill;
exports["default"] = _default;