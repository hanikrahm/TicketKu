"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlusRectangleFillOnRectangleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.6883 23.1104 C 7.6883 17.1164 10.8653 13.9818 16.9016 13.9818 L 45.4100 13.9818 L 45.4100 13.4523 C 45.4100 9.0892 43.1861 6.8865 38.7803 6.8865 L 6.6505 6.8865 C 2.2239 6.8865 0 9.0892 0 13.4523 L 0 35.7548 C 0 40.1179 2.2239 42.2994 6.6505 42.2994 L 7.6883 42.2994 Z M 17.2405 52.5082 L 49.3495 52.5082 C 53.7548 52.5082 56 50.3055 56 45.9424 L 56 23.4281 C 56 19.0861 53.7548 16.8834 49.3495 16.8834 L 17.2405 16.8834 C 12.7927 16.8834 10.5900 19.0650 10.5900 23.4281 L 10.5900 45.9424 C 10.5900 50.3055 12.7927 52.5082 17.2405 52.5082 Z M 33.2949 45.1164 C 32.0453 45.1164 31.2617 44.2268 31.2617 42.8501 L 31.2617 36.9409 L 25.0983 36.9409 C 23.7004 36.9409 22.7896 36.1360 22.7896 34.9288 C 22.7896 33.6580 23.6792 32.8532 25.0983 32.8532 L 31.2617 32.8532 L 31.2617 26.5627 C 31.2617 25.1648 32.0453 24.2753 33.2949 24.2753 C 34.5445 24.2753 35.3494 25.1648 35.3494 26.5627 L 35.3494 32.8532 L 41.5552 32.8532 C 42.9740 32.8532 43.8216 33.6368 43.8216 34.9288 C 43.8216 36.1572 42.9319 36.9409 41.5552 36.9409 L 35.3494 36.9409 L 35.3494 42.8501 C 35.3494 44.2480 34.5445 45.1164 33.2949 45.1164 Z"
  }));
}

var _default = PlusRectangleFillOnRectangleFill;
exports["default"] = _default;