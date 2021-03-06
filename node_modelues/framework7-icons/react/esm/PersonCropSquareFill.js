function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PersonCropSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 28.0117 32.1836 C 23.5351 32.1836 19.9726 28.3867 19.9726 23.3477 C 19.9726 18.6367 23.5351 14.7930 28.0117 14.7930 C 32.4882 14.7930 36.0507 18.6367 36.0507 23.3477 C 36.0507 28.3867 32.4882 32.1836 28.0117 32.1836 Z M 28.0117 35.8398 C 36.3085 35.8398 41.9101 40.4102 44.5585 45.3320 C 44.5351 45.7774 44.0429 46.0586 43.3398 46.0586 L 12.7070 46.0586 C 12.0039 46.0586 11.4882 45.7774 11.4648 45.3320 C 14.1132 40.4102 19.7148 35.8398 28.0117 35.8398 Z"
  }));
}

export default PersonCropSquareFill;