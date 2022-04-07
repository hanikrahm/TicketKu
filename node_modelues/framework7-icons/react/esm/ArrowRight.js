function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 49.7617 28.0000 C 49.7617 27.4141 49.5275 26.8750 49.0585 26.4297 L 33.5429 10.9375 C 33.0273 10.4219 32.5117 10.2344 31.9492 10.2344 C 30.8008 10.2344 29.9102 11.0781 29.9102 12.2500 C 29.9102 12.8125 30.0976 13.3515 30.4727 13.7266 L 35.7227 19.0703 L 43.6211 26.2656 L 37.9492 25.9141 L 8.3008 25.9141 C 7.1055 25.9141 6.2383 26.7812 6.2383 28.0000 C 6.2383 29.2188 7.1055 30.0859 8.3008 30.0859 L 37.9492 30.0859 L 43.6445 29.7344 L 35.7227 36.9297 L 30.4727 42.2734 C 30.0976 42.6250 29.9102 43.1875 29.9102 43.7500 C 29.9102 44.9219 30.8008 45.7656 31.9492 45.7656 C 32.5117 45.7656 33.0039 45.5547 33.4727 45.1094 L 49.0585 29.5703 C 49.5275 29.1250 49.7617 28.5859 49.7617 28.0000 Z"
  }));
}

export default ArrowRight;