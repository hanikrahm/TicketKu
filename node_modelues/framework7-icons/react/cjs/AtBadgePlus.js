"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function AtBadgePlus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 11.0779 28.0835 C 17.0966 28.0835 22.1558 23.0462 22.1558 17.0057 C 22.1558 10.9215 17.1620 5.9277 11.0779 5.9277 C 5.0156 5.9277 0 10.9215 0 17.0057 C 0 23.0898 5.0156 28.0835 11.0779 28.0835 Z M 33.8007 6.2985 C 30.2898 6.2985 26.3209 6.9090 22.5701 8.8935 C 23.2244 9.8312 23.7477 10.8561 24.1402 11.9246 C 27.2805 10.3109 30.4206 9.7003 33.7353 9.7003 C 43.9845 9.7003 52.5330 16.0025 52.5330 27.3203 C 52.5330 33.9278 50.2866 38.3764 46.7106 38.3764 C 44.3114 38.3764 42.9377 36.9808 42.9377 34.6038 L 42.9377 19.8187 C 42.9377 18.6630 42.2834 17.9215 41.1932 17.9215 C 40.1029 17.9215 39.4051 18.6630 39.4051 19.8187 L 39.4051 22.3265 L 39.2088 22.3265 C 38.0967 19.6225 35.3708 17.9215 32.1434 17.9215 C 26.4954 17.9215 22.5266 22.7409 22.5266 29.6755 C 22.5266 36.6319 26.4736 41.5166 32.2306 41.5166 C 35.5889 41.5166 38.2711 39.6194 39.5141 36.5010 L 39.7104 36.5010 C 40.1247 39.6412 42.6760 41.5166 46.1434 41.5166 C 52.2275 41.5166 56 35.5633 56 27.1895 C 56 14.5197 46.6668 6.2985 33.8007 6.2985 Z M 11.0997 24.2019 C 10.3365 24.2019 9.6605 23.6786 9.6605 22.8499 L 9.6605 18.3359 L 5.4953 18.3359 C 4.7539 18.3359 4.1433 17.7253 4.1433 17.0057 C 4.1433 16.2642 4.7539 15.6536 5.4953 15.6536 L 9.6605 15.6536 L 9.6605 11.1396 C 9.6605 10.3109 10.3365 9.8094 11.0997 9.8094 C 11.8412 9.8094 12.5171 10.3109 12.5171 11.1396 L 12.5171 15.6536 L 16.6823 15.6536 C 17.4237 15.6536 18.0125 16.2642 18.0125 17.0057 C 18.0125 17.7253 17.4237 18.3359 16.6823 18.3359 L 12.5171 18.3359 L 12.5171 22.8499 C 12.5171 23.6786 11.8412 24.2019 11.0997 24.2019 Z M 32.8194 38.0493 C 28.9378 38.0493 26.4300 34.8001 26.4300 29.6537 C 26.4300 24.5508 28.9160 21.3234 32.8412 21.3234 C 36.8319 21.3234 39.3615 24.5072 39.3615 29.5446 C 39.3615 34.7129 36.7883 38.0493 32.8194 38.0493 Z M 33.8879 52.6818 C 37.4861 52.6818 40.8661 52.1584 43.0904 51.5042 C 44.7697 50.9590 45.0533 50.2394 45.0533 49.4325 C 45.0533 48.6257 44.4209 47.9933 43.6138 47.9933 C 43.3740 47.9933 43.0685 48.0369 42.6979 48.1241 C 40.0375 48.8437 37.6605 49.2581 34.5858 49.2581 C 23.5515 49.2581 15.1558 42.9995 14.4144 30.5914 C 13.3458 30.8967 12.2119 31.0711 11.0779 31.0711 L 10.7508 31.0711 C 11.6231 45.1584 21.5452 52.6818 33.8879 52.6818 Z"
  }));
}

var _default = AtBadgePlus;
exports["default"] = _default;