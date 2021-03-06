function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Divide(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9883 17.6758 C 29.9102 17.6758 31.4570 16.1055 31.4570 14.2305 C 31.4570 12.3086 29.9102 10.7617 27.9883 10.7617 C 26.0898 10.7617 24.5429 12.3086 24.5429 14.2305 C 24.5429 16.1055 26.0898 17.6758 27.9883 17.6758 Z M 10.7617 30.0274 L 45.2383 30.0274 C 46.3633 30.0274 47.3476 29.0664 47.3476 27.9180 C 47.3476 26.7695 46.3633 25.8320 45.2383 25.8320 L 10.7617 25.8320 C 9.6367 25.8320 8.6524 26.7695 8.6524 27.9180 C 8.6524 29.0664 9.6367 30.0274 10.7617 30.0274 Z M 27.9883 45.2383 C 29.9102 45.2383 31.4570 43.6914 31.4570 41.7695 C 31.4570 39.8711 29.9102 38.3242 27.9883 38.3242 C 26.0898 38.3242 24.5429 39.8711 24.5429 41.7695 C 24.5429 43.6914 26.0898 45.2383 27.9883 45.2383 Z"
  }));
}

export default Divide;