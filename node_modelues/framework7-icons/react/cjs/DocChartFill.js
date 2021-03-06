"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DocChartFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18.3359,0.88 L18.3359,18.0831 C18.3359,21.0831 19.7422,22.5128 22.7422,22.5128 L22.7422,22.5128 L39.7109,22.5128 L39.7109,43.794 C39.7109,48.669 37.2969,51.13 32.4453,51.13 L32.4453,51.13 L7.5547,51.13 C2.7266,51.13 0.2891,48.6925 0.2891,43.794 L0.2891,43.794 L0.2891,8.2394 C0.2891,3.3644 2.7266,0.88 7.5547,0.88 L7.5547,0.88 L18.3359,0.88 Z M10.1255615,30.9349731 L8.56278076,30.9349731 C7.69968078,30.9349731 7,31.6346539 7,32.4977539 L7,32.4977539 L7,43.4372192 C7,44.3003192 7.69968078,45 8.56278076,45 L8.56278076,45 L10.1255615,45 C10.9886615,45 11.6883423,44.3003192 11.6883423,43.4372192 L11.6883423,43.4372192 L11.6883423,32.4977539 C11.6883423,31.6346539 10.9886615,30.9349731 10.1255615,30.9349731 L10.1255615,30.9349731 Z M17.158075,26.2466308 L15.5952942,26.2466308 C14.7321942,26.2466308 14.0325134,26.9463116 14.0325134,27.8094116 L14.0325134,27.8094116 L14.0325134,43.4372192 C14.0325134,44.3003192 14.7321942,45 15.5952942,45 L15.5952942,45 L17.158075,45 C18.021175,45 18.7208557,44.3003192 18.7208557,43.4372192 L18.7208557,43.4372192 L18.7208557,27.8094116 C18.7208557,26.9463116 18.021175,26.2466308 17.158075,26.2466308 L17.158075,26.2466308 Z M24.1905884,35.6233154 L22.6278076,35.6233154 C21.7647077,35.6233154 21.0650269,36.3229962 21.0650269,37.1860962 L21.0650269,37.1860962 L21.0650269,43.4372192 C21.0650269,44.3003192 21.7647077,45 22.6278076,45 L22.6278076,45 L24.1905884,45 C25.0536884,45 25.7533692,44.3003192 25.7533692,43.4372192 L25.7533692,43.4372192 L25.7533692,37.1860962 C25.7533692,36.3229962 25.0536884,35.6233154 24.1905884,35.6233154 L24.1905884,35.6233154 Z M21.5234,1.1378 C22.5078,1.3019 23.4922,1.9816 24.5703,3.1065 L24.5703,3.1065 L37.5078,16.255 C38.6094,17.4034 39.2891,18.3409 39.4531,19.3019 L39.4531,19.3019 L22.8125,19.3019 C21.9687,19.3019 21.5234,18.88 21.5234,18.0363 L21.5234,18.0363 Z",
    transform: "translate(8 2)"
  }));
}

var _default = DocChartFill;
exports["default"] = _default;