function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUturnDownSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4648 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4648 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 31.2929 16.1758 C 25.6444 16.1758 22.2226 20.2304 22.2226 25.7148 L 22.2226 32.6992 L 22.3163 35.4648 L 20.8632 33.6133 L 18.5195 31.1992 C 18.2148 30.8711 17.7929 30.6602 17.3007 30.6602 C 16.3398 30.6602 15.5898 31.4102 15.5898 32.3477 C 15.5898 32.8398 15.7539 33.2148 16.1054 33.5664 L 22.4335 39.7773 C 22.8085 40.1758 23.3007 40.4102 23.8632 40.4102 C 24.4023 40.4102 24.8944 40.1758 25.2695 39.7773 L 31.6679 33.5430 C 31.9960 33.1914 32.1601 32.8164 32.1601 32.3242 C 32.1601 31.4102 31.4101 30.6602 30.4492 30.6602 C 30.0039 30.6602 29.5585 30.8242 29.2304 31.1758 L 26.4179 34.1055 L 25.4101 35.4648 L 25.5039 32.6992 L 25.5039 25.7148 C 25.5039 22.2461 27.4960 19.6211 31.1054 19.6211 C 34.7851 19.6211 37.0820 22.1758 37.0820 25.7383 L 37.0820 28.9961 C 37.0820 29.9804 37.6679 30.7539 38.7460 30.7539 C 39.8241 30.7539 40.4335 29.9804 40.4335 28.9492 L 40.4335 25.7383 C 40.4335 20.2539 36.9179 16.1758 31.2929 16.1758 Z"
  }));
}

export default ArrowUturnDownSquare;