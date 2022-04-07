function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowDownLeft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 11.9922 19.7851 L 11.9688 41.7930 C 11.9688 43.1055 12.8359 44.0195 14.2188 44.0195 L 36.2266 43.9727 C 37.5156 43.9727 38.3594 42.9883 38.3594 41.8867 C 38.3594 40.7852 37.3984 39.8476 36.3203 39.8476 L 29.3359 39.8476 L 18.1797 40.2695 L 22.4219 36.5430 L 43.3750 15.5664 C 43.7969 15.1445 44.0312 14.6289 44.0312 14.1133 C 44.0312 13.0117 43.0234 11.9805 41.8750 11.9805 C 41.3594 11.9805 40.8672 12.1914 40.4219 12.6133 L 19.4688 33.5664 L 15.7188 37.8320 L 16.1406 27.1680 L 16.1406 19.6914 C 16.1406 18.6133 15.2032 17.6289 14.0781 17.6289 C 12.9532 17.6289 11.9922 18.5430 11.9922 19.7851 Z"
  }));
}

export default ArrowDownLeft;