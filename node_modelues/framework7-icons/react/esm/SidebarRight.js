function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SidebarRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 7.7851 45.8008 C 5.4413 45.8008 4.1288 44.5586 4.1288 42.1211 L 4.1288 13.8789 C 4.1288 11.4414 5.4413 10.1992 7.7851 10.1992 L 34.1523 10.1992 L 34.1523 45.8008 Z M 48.2147 10.1992 C 50.5350 10.1992 51.8708 11.4414 51.8708 13.8789 L 51.8708 42.1211 C 51.8708 44.5586 50.5350 45.8008 48.2147 45.8008 L 37.8319 45.8008 L 37.8319 10.1992 Z M 42.3319 18.8945 L 47.3478 18.8945 C 48.0740 18.8945 48.6836 18.2617 48.6836 17.5820 C 48.6836 16.8789 48.0740 16.2696 47.3478 16.2696 L 42.3319 16.2696 C 41.6288 16.2696 40.9960 16.8789 40.9960 17.5820 C 40.9960 18.2617 41.6288 18.8945 42.3319 18.8945 Z M 42.3319 24.9649 L 47.3478 24.9649 C 48.0740 24.9649 48.6836 24.3320 48.6836 23.6289 C 48.6836 22.9258 48.0740 22.3398 47.3478 22.3398 L 42.3319 22.3398 C 41.6288 22.3398 40.9960 22.9258 40.9960 23.6289 C 40.9960 24.3320 41.6288 24.9649 42.3319 24.9649 Z M 42.3319 31.0118 L 47.3478 31.0118 C 48.0740 31.0118 48.6836 30.4258 48.6836 29.7227 C 48.6836 29.0196 48.0740 28.4102 47.3478 28.4102 L 42.3319 28.4102 C 41.6288 28.4102 40.9960 29.0196 40.9960 29.7227 C 40.9960 30.4258 41.6288 31.0118 42.3319 31.0118 Z"
  }));
}

export default SidebarRight;