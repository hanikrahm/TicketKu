function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArchiveboxFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 8.5585 16.9492 L 47.4414 16.9492 C 50.0896 16.9492 51.4259 15.3789 51.4259 12.7539 L 51.4259 10.6211 C 51.4259 7.9961 50.0896 6.4258 47.4414 6.4258 L 8.5585 6.4258 C 6.0507 6.4258 4.5741 7.9961 4.5741 10.6211 L 4.5741 12.7539 C 4.5741 15.3789 5.9101 16.9492 8.5585 16.9492 Z M 15.1444 49.5742 L 40.8788 49.5742 C 45.4725 49.5742 47.9334 47.1836 47.9334 42.5899 L 47.9334 20.1602 L 8.0663 20.1602 L 8.0663 42.5899 C 8.0663 47.2070 10.5507 49.5742 15.1444 49.5742 Z M 20.2772 28.6211 C 19.2928 28.6211 18.6132 27.9414 18.6132 26.9102 L 18.6132 26.1836 C 18.6132 25.1523 19.2928 24.4961 20.2772 24.4961 L 35.7694 24.4961 C 36.7304 24.4961 37.4335 25.1523 37.4335 26.1836 L 37.4335 26.9102 C 37.4335 27.9414 36.7304 28.6211 35.7694 28.6211 Z"
  }));
}

export default ArchiveboxFill;