"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MoneyDollarCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 Z M24.5733817,25.7444196 C27.547433,26.4760045 28.438058,27.4461496 28.438058,29.0842634 C28.438058,30.7859933 27.2929688,32.0742187 24.5733817,32.280971 L24.5733817,25.7444196 Z M22.7762277,22.0705915 C20.2315848,21.4344308 19.2773438,20.3688616 19.2773438,18.921596 C19.2773438,17.4743304 20.4860491,16.1542969 22.7762277,15.8680246 L22.7762277,22.0705915 Z M24.5733817,22.5 L24.5733817,15.8680246 C26.609096,16.1224888 28.0404576,17.2834821 28.2472098,19.2873884 L31.5552455,19.2873884 C31.4280134,15.6771763 28.5493862,13.2915737 24.5733817,12.9734933 L24.5733817,10.2857143 L22.7762277,10.2857143 L22.7762277,12.9734933 C18.7684152,13.2756696 15.905692,15.6294643 15.905692,19.1919643 C15.905692,22.4204799 18.0845424,24.2335379 22.1241629,25.171875 L22.7762277,25.3309152 L22.7762277,32.265067 C20.2156808,31.9946987 19.0069754,30.6269531 18.7207031,28.766183 L15.4285714,28.766183 C15.5398996,32.5831473 18.7366071,34.8574219 22.7762277,35.1595982 L22.7762277,37.8314732 L24.5733817,37.8314732 L24.5733817,35.1595982 C28.6289062,34.8733259 31.8097098,32.6626674 31.8097098,28.766183 C31.8097098,25.3786272 29.5195312,23.6609933 25.3367746,22.6908482 L24.5733817,22.5 Z",
    transform: "translate(4 4)"
  }));
}

var _default = MoneyDollarCircleFill;
exports["default"] = _default;