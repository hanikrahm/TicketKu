"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MoneyEuroCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 Z M27.266183,12.8571429 C28.3476562,12.8571429 29.7313058,13.016183 30.3833705,13.2229353 L30.3833705,16.2446987 C29.6994978,16.0856585 28.3953683,15.9584263 27.2979911,15.9584263 C23.703683,15.9584263 20.8568638,17.7396763 19.8231027,21.1908482 L28.4112723,21.1908482 L28.4112723,22.9880022 L19.4573103,22.9880022 C19.4095982,23.4333147 19.3777902,23.8945313 19.3777902,24.3716518 C19.3777902,24.6102121 19.3857422,24.8408203 19.3976702,25.0654646 L19.4414062,25.7234933 L19.4414062,25.7234933 L28.4112723,25.7234933 L28.4112723,27.5206473 L19.8071987,27.5206473 C20.8409598,30.9877232 23.671875,32.7848772 27.2820871,32.7848772 C27.4582546,32.7848772 27.6389393,32.7826187 27.8208981,32.7781595 L28.3673535,32.7582378 C29.1830407,32.7186262 29.9588556,32.6356241 30.3992746,32.5145089 L30.3992746,35.5521763 C29.7154018,35.7430246 28.3953683,35.8702567 27.2820871,35.8702567 C21.7792969,35.8702567 17.3420759,33.0075335 16.1333705,27.5206473 L12.8571429,27.5206473 L12.8571429,25.7234933 L15.8630022,25.7234933 C15.8152902,25.2940848 15.7993862,24.8328683 15.7993862,24.3716518 C15.7993862,23.8945313 15.8152902,23.4333147 15.8630022,22.9880022 L12.8571429,22.9880022 L12.8571429,21.1908482 L16.1333705,21.1908482 C17.3420759,15.7039621 21.7952009,12.8571429 27.266183,12.8571429 Z",
    transform: "translate(4 4)"
  }));
}

var _default = MoneyEuroCircle;
exports["default"] = _default;