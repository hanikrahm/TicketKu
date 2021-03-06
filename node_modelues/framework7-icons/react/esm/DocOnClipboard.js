function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function DocOnClipboard(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 11.5050 56 L 32.9045 56 C 37.4664 56 39.6262 53.6859 39.6262 49.0799 L 39.6262 45.0027 L 43.9237 45.0027 C 48.4638 45.0027 50.7337 42.6887 50.7337 38.0826 L 50.7337 6.9201 C 50.7337 2.3141 48.4638 0 43.9237 0 L 22.6345 0 C 18.0945 0 15.8025 2.3141 15.8025 6.9201 L 15.8025 10.9972 L 11.5050 10.9972 C 6.9651 10.9972 4.6731 13.3113 4.6731 17.9174 L 4.6731 49.0799 C 4.6731 53.7080 6.9651 56 11.5050 56 Z M 27.9017 7.7796 C 26.9320 7.7796 26.4912 7.1405 26.4912 6.4794 L 26.4912 6.0165 C 26.4912 5.3333 26.9320 4.7162 27.9017 4.7162 L 38.6565 4.7162 C 39.6042 4.7162 40.0670 5.3333 40.0670 6.0165 L 40.0670 6.4794 C 40.0670 7.1405 39.6042 7.7796 38.6565 7.7796 Z M 11.6813 52.4518 C 9.4113 52.4518 8.2213 51.2176 8.2213 49.0138 L 8.2213 17.9614 C 8.2213 15.8017 9.4113 14.5455 11.7033 14.5455 L 19.3507 14.5455 L 19.3507 27.3278 C 19.3507 30.1047 20.7612 31.4711 23.4940 31.4711 L 36.0780 31.4711 L 36.0780 49.0138 C 36.0780 51.2176 34.8879 52.4518 32.5959 52.4518 Z M 23.9127 28.1432 C 23.0312 28.1432 22.6786 27.7906 22.6786 26.9311 L 22.6786 15.2286 L 35.3948 28.1432 Z"
  }));
}

export default DocOnClipboard;