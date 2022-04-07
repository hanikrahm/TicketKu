function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function TrayFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 7.7148 48.0039 L 48.2852 48.0039 C 53.1836 48.0039 55.6446 45.5664 55.6446 40.7383 L 55.6446 27.8008 C 55.6446 25.6914 55.2928 24.7070 54.3088 23.3477 L 46.1992 12.4023 C 43.6446 8.9102 42.2382 7.9961 38.0898 7.9961 L 17.9101 7.9961 C 13.7617 7.9961 12.3554 8.9102 9.8007 12.4023 L 1.6913 23.3477 C .7070 24.7070 .3554 25.6914 .3554 27.8008 L .3554 40.7383 C .3554 45.5898 2.8398 48.0039 7.7148 48.0039 Z M 27.9882 34.4336 C 24.4726 34.4336 22.2226 31.3867 22.2226 28.5039 L 22.2226 28.4336 C 22.2226 27.3789 21.5898 26.3945 20.3007 26.3945 L 5.3476 26.3945 C 4.5741 26.3945 4.4101 25.7383 4.7851 25.2227 L 13.4570 13.3164 C 14.5585 11.8164 15.9413 11.2774 17.6523 11.2774 L 38.3476 11.2774 C 40.0585 11.2774 41.4413 11.8164 42.5430 13.3164 L 51.1912 25.2227 C 51.5665 25.7383 51.4024 26.3945 50.6291 26.3945 L 35.6992 26.3945 C 34.4101 26.3945 33.7773 27.3789 33.7773 28.4336 L 33.7773 28.5039 C 33.7773 31.3867 31.5273 34.4336 27.9882 34.4336 Z"
  }));
}

export default TrayFill;