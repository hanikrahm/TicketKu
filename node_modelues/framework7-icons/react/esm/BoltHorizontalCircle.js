function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BoltHorizontalCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 14.1249 33.8828 C 14.4530 33.8828 14.7577 33.7890 15.1093 33.5781 L 22.1874 29.5 L 32.5468 35.0547 C 33.0155 35.2890 33.4374 35.4297 33.8124 35.4297 C 34.3983 35.4297 34.9140 35.1953 35.3827 34.5625 L 43.1405 24.7188 C 43.4452 24.3437 43.5624 24.0156 43.5624 23.6172 C 43.5624 22.7968 42.8827 22.0937 41.9687 22.0937 C 41.6405 22.0937 41.2655 22.2109 40.9140 22.3984 L 33.8358 26.5 L 23.4530 20.9453 C 23.0077 20.6875 22.5858 20.5703 22.1640 20.5703 C 21.6483 20.5703 21.1327 20.8281 20.6405 21.4375 L 12.8593 31.2812 C 12.5780 31.6328 12.4374 32.0078 12.4374 32.3594 C 12.4374 33.1797 13.2109 33.8828 14.1249 33.8828 Z"
  }));
}

export default BoltHorizontalCircle;