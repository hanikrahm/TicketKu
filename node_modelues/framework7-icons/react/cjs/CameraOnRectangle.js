"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CameraOnRectangle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6.1547 41.9438 L 9.9181 41.9438 L 9.9181 47.0009 C 9.9181 51.0387 11.9958 53.0772 16.0728 53.0772 L 49.8453 53.0772 C 53.9222 53.0772 56 51.0387 56 47.0009 L 56 26.4786 C 56 22.4408 53.9222 20.4023 49.8453 20.4023 L 45.2586 20.4023 C 43.7299 20.4023 43.2595 20.1083 42.3775 19.1087 L 42.0636 18.7754 L 42.0636 14.4632 C 42.0636 10.4254 40.0055 8.3869 35.9286 8.3869 L 6.1547 8.3869 C 2.0581 8.3869 0 10.4254 0 14.4632 L 0 35.8871 C 0 39.9249 2.0581 41.9438 6.1547 41.9438 Z M 6.2135 38.7880 C 4.2534 38.7880 3.1557 37.7492 3.1557 35.7107 L 3.1557 14.6396 C 3.1557 12.6011 4.2534 11.5427 6.2135 11.5427 L 35.8700 11.5427 C 37.8105 11.5427 38.9080 12.6011 38.9080 14.6396 L 38.9080 16.0117 C 38.3396 15.7961 37.6732 15.6981 36.8105 15.6981 L 28.9899 15.6981 C 26.9710 15.6981 25.9713 16.2861 24.9913 17.3642 L 23.4036 19.1087 C 22.5411 20.0887 22.0511 20.4023 20.5222 20.4023 L 16.0728 20.4023 C 11.9958 20.4023 9.9181 22.4408 9.9181 26.4786 L 9.9181 38.7880 Z M 16.1316 49.9214 C 14.1911 49.9214 13.0738 48.8630 13.0738 46.8245 L 13.0738 26.6354 C 13.0738 24.6165 14.1911 23.5581 16.1316 23.5581 L 21.3063 23.5581 C 23.0704 23.5581 24.0308 23.2249 24.9913 22.1272 L 26.5398 20.4219 C 27.6570 19.1675 28.2254 18.8538 29.9699 18.8538 L 35.8306 18.8538 C 37.5556 18.8538 38.1240 19.1675 39.2608 20.4219 L 40.7895 22.1272 C 41.7698 23.2249 42.7107 23.5581 44.4746 23.5581 L 49.7867 23.5581 C 51.7272 23.5581 52.8444 24.6165 52.8444 26.6354 L 52.8444 46.8245 C 52.8444 48.8630 51.7272 49.9214 49.7867 49.9214 Z M 32.9689 46.7853 C 38.8883 46.7853 43.6513 42.0418 43.6513 36.0635 C 43.6513 30.1048 38.9080 25.3613 32.9689 25.3613 C 27.0298 25.3613 22.2667 30.1048 22.2667 36.0635 C 22.2667 42.0418 27.0298 46.7853 32.9689 46.7853 Z M 47.0425 31.2809 C 48.3753 31.2809 49.4728 30.2028 49.4728 28.8700 C 49.4728 27.5175 48.3753 26.4394 47.0425 26.4394 C 45.7094 26.4394 44.6119 27.5175 44.6119 28.8700 C 44.6119 30.2028 45.7094 31.2809 47.0425 31.2809 Z M 32.9689 43.8059 C 28.7155 43.8059 25.2265 40.3757 25.2265 36.0635 C 25.2265 31.7709 28.6958 28.3407 32.9689 28.3407 C 37.2420 28.3407 40.6915 31.7709 40.6915 36.0635 C 40.6915 40.3757 37.2420 43.8059 32.9689 43.8059 Z"
  }));
}

var _default = CameraOnRectangle;
exports["default"] = _default;