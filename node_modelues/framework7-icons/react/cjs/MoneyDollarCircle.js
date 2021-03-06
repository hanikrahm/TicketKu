"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MoneyDollarCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 Z M24.5733817,10.2857143 L24.5733817,12.9734933 C28.5493862,13.2915737 31.4280134,15.6771763 31.5552455,19.2873884 L28.2472098,19.2873884 C28.0404576,17.2834821 26.609096,16.1224888 24.5733817,15.8680246 L24.5733817,22.5 L25.3367746,22.6908482 C29.5195313,23.6609933 31.8097098,25.3786272 31.8097098,28.766183 C31.8097098,32.6626674 28.6289063,34.8733259 24.5733817,35.1595982 L24.5733817,37.8314732 L22.7762277,37.8314732 L22.7762277,35.1595982 C18.7366071,34.8574219 15.5398996,32.5831473 15.4285714,28.766183 L18.7207031,28.766183 C19.0069754,30.6269531 20.2156808,31.9946987 22.7762277,32.265067 L22.7762277,25.3309152 L22.1241629,25.171875 C18.0845424,24.2335379 15.905692,22.4204799 15.905692,19.1919643 C15.905692,15.6294643 18.7684152,13.2756696 22.7762277,12.9734933 L22.7762277,10.2857143 L24.5733817,10.2857143 Z M24.5733817,25.7444196 L24.5733817,32.280971 C27.2929687,32.0742188 28.438058,30.7859933 28.438058,29.0842634 C28.438058,27.4461496 27.547433,26.4760045 24.5733817,25.7444196 Z M22.7762277,15.8680246 C20.4860491,16.1542969 19.2773438,17.4743304 19.2773438,18.921596 C19.2773438,20.3688616 20.2315848,21.4344308 22.7762277,22.0705915 L22.7762277,15.8680246 Z",
    transform: "translate(4 4)"
  }));
}

var _default = MoneyDollarCircle;
exports["default"] = _default;