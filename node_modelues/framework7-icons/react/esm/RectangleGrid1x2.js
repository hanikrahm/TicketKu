function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function RectangleGrid1x2(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 8.0663 26.0664 L 47.9334 26.0664 C 51.5195 26.0664 53.3243 24.3086 53.3243 20.6992 L 53.3243 11.7461 C 53.3243 8.1602 51.5195 6.4258 47.9334 6.4258 L 8.0663 6.4258 C 4.4804 6.4258 2.6757 8.1602 2.6757 11.7461 L 2.6757 20.6992 C 2.6757 24.3086 4.4804 26.0664 8.0663 26.0664 Z M 8.3476 22.5274 C 6.9648 22.5274 6.2148 21.8008 6.2148 20.3477 L 6.2148 12.1445 C 6.2148 10.6680 6.9648 9.9649 8.3476 9.9649 L 47.6521 9.9649 C 49.0350 9.9649 49.7852 10.6680 49.7852 12.1445 L 49.7852 20.3477 C 49.7852 21.8008 49.0350 22.5274 47.6521 22.5274 Z M 8.0663 49.5742 L 47.9334 49.5742 C 51.5195 49.5742 53.3243 47.8399 53.3243 44.2305 L 53.3243 35.2539 C 53.3243 31.6914 51.5195 29.9336 47.9334 29.9336 L 8.0663 29.9336 C 4.4804 29.9336 2.6757 31.6914 2.6757 35.2539 L 2.6757 44.2305 C 2.6757 47.8399 4.4804 49.5742 8.0663 49.5742 Z M 8.3476 46.0352 C 6.9648 46.0352 6.2148 45.3086 6.2148 43.8555 L 6.2148 35.6523 C 6.2148 34.1758 6.9648 33.4727 8.3476 33.4727 L 47.6521 33.4727 C 49.0350 33.4727 49.7852 34.1758 49.7852 35.6523 L 49.7852 43.8555 C 49.7852 45.3086 49.0350 46.0352 47.6521 46.0352 Z"
  }));
}

export default RectangleGrid1x2;