function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function LessthanSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 34.3866 38.0430 C 33.9413 38.0430 33.5898 37.9492 33.2148 37.7383 L 18.5429 30.1211 C 17.5117 29.6055 17.1132 28.9727 17.1132 27.9649 C 17.1132 27.0508 17.5820 26.3477 18.5429 25.8086 L 33.2148 17.8867 C 33.6132 17.6992 33.9413 17.6055 34.4570 17.6055 C 35.6054 17.6055 36.4492 18.4727 36.4492 19.5508 C 36.4492 20.4414 36.0039 21.0274 35.0195 21.5430 L 22.5507 27.8242 L 22.5507 27.9649 L 35.0195 34.1055 C 36.0507 34.5742 36.4492 35.1602 36.4492 36.0742 C 36.4492 37.1758 35.5820 38.0430 34.3866 38.0430 Z"
  }));
}

export default LessthanSquareFill;