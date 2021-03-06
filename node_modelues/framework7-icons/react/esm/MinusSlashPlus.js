function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function MinusSlashPlus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 14.1601 50.1367 C 14.9570 50.1367 15.3789 49.8086 16.0117 48.9414 L 29.7226 28.5742 L 43.1054 8.8398 C 43.4101 8.3945 43.5273 7.9961 43.5273 7.5273 C 43.5273 6.5898 42.7070 5.8633 41.7695 5.8633 C 40.9492 5.8633 40.5039 6.1211 39.8242 7.0820 L 26.4413 26.9805 L 12.7539 47.1133 C 12.4492 47.5586 12.2851 47.9336 12.2851 48.4492 C 12.2851 49.4570 13.1289 50.1367 14.1601 50.1367 Z M 5.8867 16.0352 C 5.8867 16.9727 6.4960 17.6524 7.5976 17.6524 L 19.8320 17.6524 C 20.9570 17.6524 21.5429 16.9727 21.5429 16.0352 C 21.5429 15.1211 20.9570 14.3711 19.8320 14.3711 L 7.5976 14.3711 C 6.4960 14.3711 5.8867 15.1211 5.8867 16.0352 Z M 40.2695 40.0352 L 40.2695 45.1211 C 40.2695 46.2227 40.9726 46.8555 41.9570 46.8555 C 42.9179 46.8555 43.6679 46.2227 43.6679 45.1211 L 43.6679 40.0352 L 48.4021 40.0352 C 49.5037 40.0352 50.1133 39.3555 50.1133 38.4180 C 50.1133 37.5039 49.5037 36.7539 48.4021 36.7539 L 43.6679 36.7539 L 43.6679 31.6914 C 43.6679 30.5898 42.9179 29.9336 41.9570 29.9336 C 40.9726 29.9336 40.2695 30.5898 40.2695 31.6914 L 40.2695 36.7539 L 35.5117 36.7539 C 34.4335 36.7539 33.8242 37.5039 33.8242 38.4180 C 33.8242 39.3555 34.4335 40.0352 35.5117 40.0352 Z"
  }));
}

export default MinusSlashPlus;