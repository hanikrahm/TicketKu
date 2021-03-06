function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PlusminusCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 27.9999 31.9844 C 26.9218 31.9844 25.9374 31.1875 25.9374 30.0156 L 25.9374 25.375 L 21.2030 25.375 C 20.1718 25.375 19.3280 24.4844 19.3280 23.5234 C 19.3280 22.5625 20.1718 21.625 21.2030 21.625 L 25.9374 21.625 L 25.9374 17.0078 C 25.9374 15.8360 26.9218 15.0860 27.9999 15.0860 C 29.0780 15.0860 30.0624 15.8360 30.0624 17.0078 L 30.0624 21.625 L 34.8202 21.625 C 35.8514 21.625 36.6952 22.5625 36.6952 23.5234 C 36.6952 24.4844 35.8514 25.375 34.8202 25.375 L 30.0624 25.375 L 30.0624 30.0156 C 30.0624 31.1875 29.0780 31.9844 27.9999 31.9844 Z M 21.2030 39.7422 C 20.1718 39.7422 19.3280 38.8047 19.3280 37.8438 C 19.3280 36.8594 20.1718 35.9687 21.2030 35.9687 L 34.8202 35.9687 C 35.8514 35.9687 36.6952 36.8594 36.6952 37.8438 C 36.6952 38.8047 35.8514 39.7422 34.8202 39.7422 Z"
  }));
}

export default PlusminusCircleFill;