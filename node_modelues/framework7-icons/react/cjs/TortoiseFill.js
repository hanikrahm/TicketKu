"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TortoiseFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 20.3391 24.8695 C 24.9847 24.8526 28.8701 23.2140 31.9110 19.8692 C 28.8025 15.9162 25.5084 14.0580 20.4574 14.0411 C 15.4233 14.0242 12.1461 15.6460 8.8688 19.9367 C 11.9602 23.2984 15.9976 24.8864 20.3391 24.8695 Z M 41.6579 33.0119 C 43.7358 32.2348 45.2224 30.4611 48.7025 30.4611 C 53.1115 30.4611 56.0000 28.9576 56.0000 26.4574 C 56.0000 20.6969 52.9257 16.7777 48.3309 16.7777 C 44.3610 16.7777 41.9451 19.1766 40.9487 22.9944 C 40.2391 25.5114 39.2424 26.6263 38.0598 27.3697 C 38.8877 28.5521 40.2726 30.9847 41.6579 33.0119 Z M 31.1337 35.0391 C 32.6710 34.6674 34.0393 34.4478 36.0159 34.4478 C 37.6374 34.4478 39.2085 34.1944 39.9855 33.7552 C 38.1104 31.3395 34.7994 24.2107 33.0596 21.5078 C 31.3027 23.3153 28.4815 25.0722 26.5557 25.8324 C 26.8429 28.8731 28.5322 32.4038 31.1337 35.0391 Z M 9.3756 35.1235 C 11.9096 32.6909 13.9536 28.8562 14.2746 25.8831 C 12.0109 25.0384 9.2573 23.4167 7.6187 21.6767 C 6.8248 22.9099 5.9970 24.2445 5.2368 25.7310 C 3.6658 28.8731 1.8920 30.3259 .7264 31.4071 C .2872 31.8294 0 32.3193 0 32.9781 C 0 33.9579 1.0474 34.4985 2.8887 34.4985 L 4.9158 34.4985 C 6.8248 34.4985 8.1086 34.7350 9.3756 35.1235 Z M 48.6855 24.7850 C 47.8407 24.7850 47.1484 24.1093 47.1484 23.2646 C 47.1484 22.4369 47.8407 21.7443 48.6855 21.7443 C 49.5131 21.7443 50.1891 22.4369 50.1891 23.2646 C 50.1891 24.1093 49.5131 24.7850 48.6855 24.7850 Z M 20.2884 39.0089 C 24.1738 39.0089 26.8936 36.9817 29.1741 35.8499 C 26.5895 33.4004 24.9340 29.7853 24.6637 26.4574 C 23.2616 26.8460 21.8426 27.0318 20.3898 27.0318 C 18.9201 27.0487 17.5011 26.8460 16.1328 26.4912 C 15.8625 29.5995 14.1732 33.3667 11.5886 35.9344 C 13.7678 36.7959 16.4200 39.0089 20.2884 39.0089 Z M 4.7300 41.8807 C 7.6694 41.8807 10.6595 40.5799 12.0954 38.6035 C 10.4230 37.5054 8.3282 36.4750 6.3518 36.3905 C 5.4395 36.6270 4.4598 36.6777 3.4293 36.8804 C 1.9765 37.1507 .6588 37.7419 .6588 39.1440 C .6588 40.9178 2.4157 41.8807 4.7300 41.8807 Z M 35.2893 41.9145 C 37.6039 41.9145 39.3607 40.9516 39.3607 39.1778 C 39.3607 37.7926 38.0429 36.6946 36.6071 36.5763 C 35.5595 36.5256 34.7320 36.5087 33.6678 36.4412 C 31.7418 36.5425 29.6471 37.5730 27.9410 38.6373 C 29.3600 40.6306 32.3669 41.9145 35.2893 41.9145 Z"
  }));
}

var _default = TortoiseFill;
exports["default"] = _default;