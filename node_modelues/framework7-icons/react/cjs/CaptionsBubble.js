"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CaptionsBubble(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 16.5860 52.2461 C 17.7579 52.2461 18.5548 51.6367 19.9610 50.3711 L 28.0704 43.1758 L 43.0938 43.1758 C 50.0783 43.1758 53.8280 39.3086 53.8280 32.4414 L 53.8280 14.4883 C 53.8280 7.6211 50.0783 3.7539 43.0938 3.7539 L 12.9064 3.7539 C 5.9454 3.7539 2.1720 7.5976 2.1720 14.4883 L 2.1720 32.4414 C 2.1720 39.3320 5.9454 43.1758 12.9064 43.1758 L 14.0313 43.1758 L 14.0313 49.2695 C 14.0313 51.0742 14.9688 52.2461 16.5860 52.2461 Z M 17.5469 47.9570 L 17.5469 41.1602 C 17.5469 39.8945 17.0782 39.4023 15.7891 39.4023 L 12.9298 39.4023 C 8.1720 39.4023 5.9454 36.9883 5.9454 32.4180 L 5.9454 14.4883 C 5.9454 9.9180 8.1720 7.5273 12.9298 7.5273 L 43.0938 7.5273 C 47.8280 7.5273 50.0548 9.9180 50.0548 14.4883 L 50.0548 32.4180 C 50.0548 36.9883 47.8280 39.4023 43.0938 39.4023 L 27.9064 39.4023 C 26.6173 39.4023 25.9376 39.5898 25.0469 40.5039 Z M 13.3282 26.6758 L 23.0079 26.6758 C 23.7579 26.6758 24.3438 26.0898 24.3438 25.3164 C 24.3438 24.5898 23.7579 23.9571 23.0079 23.9571 L 13.3282 23.9571 C 12.5782 23.9571 11.9923 24.5898 11.9923 25.3164 C 11.9923 26.0898 12.5782 26.6758 13.3282 26.6758 Z M 27.8360 26.6758 L 43.0001 26.6758 C 43.7501 26.6758 44.3596 26.0898 44.3596 25.3164 C 44.3596 24.5898 43.7501 23.9571 43.0001 23.9571 L 27.8360 23.9571 C 27.0860 23.9571 26.5001 24.5898 26.5001 25.3164 C 26.5001 26.0898 27.0860 26.6758 27.8360 26.6758 Z M 13.3282 32.8164 L 17.3126 32.8164 C 18.0626 32.8164 18.6720 32.2305 18.6720 31.4805 C 18.6720 30.7071 18.0626 30.0976 17.3126 30.0976 L 13.3282 30.0976 C 12.5782 30.0976 11.9923 30.7071 11.9923 31.4805 C 11.9923 32.2305 12.5782 32.8164 13.3282 32.8164 Z M 22.1642 32.8164 L 33.9064 32.8164 C 34.6564 32.8164 35.2423 32.2305 35.2423 31.4805 C 35.2423 30.7071 34.6564 30.0976 33.9064 30.0976 L 22.1642 30.0976 C 21.4142 30.0976 20.8048 30.7071 20.8048 31.4805 C 20.8048 32.2305 21.4142 32.8164 22.1642 32.8164 Z M 38.7344 32.8164 L 43.0001 32.8164 C 43.7501 32.8164 44.3596 32.2305 44.3596 31.4805 C 44.3596 30.7071 43.7501 30.0976 43.0001 30.0976 L 38.7344 30.0976 C 37.9844 30.0976 37.3985 30.7071 37.3985 31.4805 C 37.3985 32.2305 37.9844 32.8164 38.7344 32.8164 Z"
  }));
}

var _default = CaptionsBubble;
exports["default"] = _default;