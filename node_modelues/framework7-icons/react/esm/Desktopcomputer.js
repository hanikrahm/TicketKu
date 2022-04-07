function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Desktopcomputer(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 6.0860 43.2930 L 20.7579 43.2930 L 20.1251 47.6055 L 16.9142 47.6055 C 15.8360 47.6055 14.9220 48.4961 14.9220 49.5977 C 14.9220 50.6992 15.8360 51.6133 16.9142 51.6133 L 39.0860 51.6133 C 40.1642 51.6133 41.0782 50.6992 41.0782 49.5977 C 41.0782 48.4961 40.1642 47.6055 39.0860 47.6055 L 35.8751 47.6055 L 35.2423 43.2930 L 49.9144 43.2930 C 53.9219 43.2930 55.9374 41.3711 55.9374 37.2695 L 55.9374 10.4102 C 55.9374 6.3086 53.9219 4.3867 49.9144 4.3867 L 6.0860 4.3867 C 2.0782 4.3867 .6 6.3086 .6 10.4102 L .6 37.2695 C .6 41.3711 2.0782 43.2930 6.0860 43.2930 Z M 4.8438 32.9805 C 4.1407 32.9805 3.8360 32.6992 3.8360 31.9726 L 3.8360 10.4805 C 3.8360 8.8164 4.5626 8.1602 6.1564 8.1602 L 49.8438 8.1602 C 51.4609 8.1602 52.1641 8.8164 52.1641 10.4805 L 52.1641 31.9726 C 52.1641 32.6992 51.8593 32.9805 51.1561 32.9805 Z M 28.0001 40.9727 C 26.8282 40.9727 25.8204 39.9883 25.8204 38.7930 C 25.8204 37.6446 26.8282 36.6367 28.0001 36.6367 C 29.1720 36.6367 30.1798 37.6446 30.1798 38.7930 C 30.1798 39.9883 29.1720 40.9727 28.0001 40.9727 Z"
  }));
}

export default Desktopcomputer;