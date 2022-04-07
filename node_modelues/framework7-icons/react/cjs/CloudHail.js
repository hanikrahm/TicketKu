"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CloudHail(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.2617 36.25 L 41.3476 36.25 C 49.0352 36.25 54.7539 30.4141 54.7539 23.1719 C 54.7539 15.7188 48.6603 10.2578 40.7148 10.2578 C 37.7851 4.4688 32.3476 .7422 25.5742 .7422 C 16.7617 .7422 9.4960 7.6328 8.7226 16.3516 C 4.4804 17.5703 1.2461 21.2734 1.2461 26.2188 C 1.2461 31.7500 5.2773 36.25 12.2617 36.25 Z M 12.2148 32.4766 C 7.4101 32.4766 4.9960 29.8047 4.9960 26.3359 C 4.9960 23.5 6.6367 20.9688 10.6211 19.9141 C 11.9101 19.5859 12.3789 18.9766 12.4960 17.6406 C 13.0351 10 18.7773 4.4922 25.5742 4.4922 C 30.8476 4.4922 34.9960 7.3750 37.5273 12.5781 C 38.0664 13.7031 38.7695 14.1016 40.1523 14.1016 C 47.0898 14.1016 51.0037 18.2969 51.0037 23.2891 C 51.0037 28.3984 46.9256 32.4766 41.5820 32.4766 Z M 15.0507 44.6875 L 16.6211 41.8984 C 17.0195 41.2188 16.8320 40.3750 16.1289 39.9531 C 15.4023 39.5547 14.5820 39.8125 14.1836 40.4922 L 12.5898 43.3047 C 12.2148 43.9844 12.3789 44.8047 13.1054 45.2266 C 13.8086 45.6016 14.6523 45.3672 15.0507 44.6875 Z M 25.2695 48.2734 L 28.9257 41.9453 C 29.3242 41.2188 29.1133 40.3984 28.4336 39.9766 C 27.7070 39.5781 26.8867 39.8125 26.4882 40.5156 L 22.8086 46.9141 C 22.4101 47.5703 22.6211 48.3906 23.3476 48.8125 C 24.0273 49.2110 24.8711 48.9532 25.2695 48.2734 Z M 39.6133 44.7813 L 41.1836 41.9922 C 41.5820 41.3125 41.3945 40.4688 40.6914 40.0469 C 39.9648 39.6484 39.1445 39.8828 38.7460 40.5859 L 37.1523 43.3984 C 36.7773 44.0781 36.9414 44.8984 37.6679 45.3203 C 38.3711 45.6953 39.2148 45.4609 39.6133 44.7813 Z M 10.9023 51.6484 C 12.2851 51.6484 13.4336 50.5 13.4336 49.0937 C 13.4336 47.7344 12.2851 46.5625 10.9023 46.5625 C 9.4960 46.5625 8.3476 47.7344 8.3476 49.0937 C 8.3476 50.5 9.4960 51.6484 10.9023 51.6484 Z M 35.4648 51.7422 C 36.8242 51.7422 37.9960 50.5937 37.9960 49.1875 C 37.9960 47.8281 36.8476 46.6563 35.4648 46.6563 C 34.0586 46.6563 32.9101 47.8281 32.9101 49.1875 C 32.9101 50.5937 34.0586 51.7422 35.4648 51.7422 Z M 21.1211 55.2578 C 22.5038 55.2578 23.6523 54.0859 23.6523 52.6797 C 23.6523 51.3203 22.5038 50.1484 21.1211 50.1484 C 19.7382 50.1484 18.5664 51.3203 18.5664 52.6797 C 18.5664 54.0859 19.7382 55.2578 21.1211 55.2578 Z"
  }));
}

var _default = CloudHail;
exports["default"] = _default;