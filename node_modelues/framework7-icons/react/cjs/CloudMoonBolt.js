"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CloudMoonBolt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 8.9906 38.1461 L 31.9334 38.1461 C 38.0614 38.1461 42.8111 33.5024 42.8111 27.5228 C 42.8111 27.3532 42.8111 27.1836 42.8111 27.0140 C 49.5751 26.7595 53.7314 22.9851 55.3004 18.9140 C 56 17.1964 55.0885 15.6697 53.4344 15.6697 C 52.1620 15.6697 51.1233 16.2210 48.8755 16.2210 C 43.4685 16.2210 40.6059 13.2100 40.6059 8.2907 C 40.6059 5.8946 41.3480 4.5800 41.3480 3.3925 C 41.3480 1.6538 39.8425 .7844 37.9766 1.4417 C 33.4813 2.9048 29.6646 7.6970 29.6646 13.5705 C 29.6646 13.7614 29.6858 13.9734 29.6858 14.1642 C 27.1201 11.2380 23.5578 9.5205 19.5078 9.5205 C 12.4892 9.5205 6.6157 14.9488 5.9160 21.9038 C 2.3749 23.0276 0 26.0810 0 29.9401 C 0 34.7111 3.5835 38.1461 8.9906 38.1461 Z M 32.7816 13.5069 C 32.7816 9.4145 35.2201 6.2127 37.9978 4.6860 L 38.2310 4.8556 C 37.8706 5.8734 37.5525 7.2941 37.5525 8.9268 C 37.5525 15.0336 42.0055 19.2108 48.1546 19.2108 C 49.6602 19.2108 51.0594 18.9564 52.0348 18.6383 L 52.1620 18.7867 C 50.8688 21.2888 47.5610 23.9182 42.1962 23.9394 C 40.8604 20.3558 37.5738 17.7689 33.3753 17.1540 C 32.9725 16.0090 32.7816 14.7791 32.7816 13.5069 Z M 8.9057 34.7534 C 5.3011 34.7534 3.3926 32.6755 3.3926 30.0249 C 3.3926 27.7773 4.7073 25.7841 7.8243 24.9571 C 8.8421 24.6815 9.2238 24.2150 9.3086 23.1548 C 9.7963 17.2176 14.2068 12.9344 19.5078 12.9344 C 23.6214 12.9344 26.8232 15.1820 28.7952 19.1472 C 29.2405 20.0590 29.7706 20.3771 30.8520 20.3771 C 36.3227 20.3771 39.4185 23.6637 39.4185 27.6289 C 39.4185 31.5728 36.1954 34.7534 31.9971 34.7534 Z M 26.5476 45.6312 L 22.3279 45.6312 L 24.2787 41.9417 C 24.5120 41.4752 24.3212 41.1359 23.8547 41.1359 L 19.4230 41.1359 C 18.8505 41.1359 18.6597 41.3691 18.4688 41.7720 L 15.7547 47.9424 C 15.5426 48.4513 15.7547 48.7694 16.3060 48.7694 L 19.8471 48.7694 L 17.1330 55.3427 C 17.0057 55.6183 17.0693 55.8516 17.2602 55.9152 C 17.4722 56 17.6843 55.9364 17.8963 55.7031 L 26.8657 46.6490 C 27.3110 46.2037 27.1413 45.6312 26.5476 45.6312 Z"
  }));
}

var _default = CloudMoonBolt;
exports["default"] = _default;