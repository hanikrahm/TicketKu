function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function FlagCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 18.9296 40.6094 C 19.5390 40.6094 19.9843 40.1172 19.9843 39.5312 L 19.9843 32.6172 C 20.4062 32.4297 21.3436 32.1484 22.7733 32.1484 C 26.9687 32.1484 29.5702 34.2109 33.6483 34.2109 C 35.4062 34.2109 36.1562 34.0234 37.0234 33.6016 C 38.0312 33.1563 38.4765 32.4766 38.4765 31.4219 L 38.4765 19.8672 C 38.4765 19.1875 37.8671 18.6953 37.0702 18.6953 C 36.4609 18.6953 35.4530 19.1875 33.5312 19.1875 C 29.5468 19.1875 26.8983 17.1016 22.6562 17.1016 C 20.8514 17.1016 20.1249 17.3125 19.2812 17.6875 C 18.3202 18.1094 17.8280 18.8594 17.8280 19.8672 L 17.8280 39.5312 C 17.8280 40.0937 18.3436 40.6094 18.9296 40.6094 Z"
  }));
}

export default FlagCircle;