"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Funnel(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M39.9564071,-2.84217094e-14 C42.1655461,-2.84217094e-14 43.9564071,1.790861 43.9564071,4 C43.9564071,4.89444303 43.656621,5.76307841 43.1049452,6.4671254 L29.7253311,23.5421492 C29.1736553,24.2461962 28.8738692,25.1148316 28.8738692,26.0092747 L28.8738692,37.2316232 C28.8738692,39.4407622 27.0830082,41.2316232 24.8738692,41.2316232 C24.4264592,41.2316232 23.9822196,41.156561 23.5596477,41.009562 L18.0809661,39.1037077 C16.4729167,38.5443198 15.3951877,37.0283368 15.3951877,35.3257688 L15.3951877,26.0330028 C15.3951877,25.1240473 15.0856094,24.2421965 14.5174431,23.5326987 L0.87789061,6.50030417 C-0.502989255,4.77593011 -0.224532187,2.25862442 1.49984188,0.877744559 C2.20933973,0.309578224 3.09119051,-2.84217094e-14 4.00014605,-2.84217094e-14 L39.9564071,-2.84217094e-14 Z M37.9006199,4 L6.08234032,4 C5.53005557,4 5.08234032,4.44771525 5.08234032,5 C5.08234032,5.22723524 5.1597324,5.44769463 5.30176982,5.62506776 L17.6396985,21.0323945 C18.7091881,22.3679198 19.3205562,24.0087902 19.3887812,25.7128168 L19.3951877,26.0330028 L19.3951877,34.6148578 C19.3951877,35.0404998 19.6646199,35.4194955 20.0666323,35.5593425 L23.5453138,36.7694622 C24.0669383,36.9509183 24.6368978,36.6751573 24.8183539,36.1535328 C24.8551036,36.0478899 24.8738692,35.93683 24.8738692,35.8249775 L24.8738692,26.0092747 C24.8738692,24.332194 25.400837,22.7004783 26.3758416,21.3428312 L26.576793,21.0750238 L38.6877984,5.61672524 C39.0284063,5.18197857 38.9520918,4.55342946 38.5173451,4.21282151 C38.3413428,4.07493018 38.1242062,4 37.9006199,4 Z",
    transform: "translate(6 7)"
  }));
}

var _default = Funnel;
exports["default"] = _default;