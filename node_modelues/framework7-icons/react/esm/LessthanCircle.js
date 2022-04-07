function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function LessthanCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 34.0234 37.6094 C 35.1483 37.6094 35.9687 36.7890 35.9687 35.7344 C 35.9687 34.8437 35.5936 34.3047 34.6093 33.8359 L 22.7265 28 L 22.7265 27.8594 L 34.6093 21.9063 C 35.5702 21.4141 35.9687 20.8516 35.9687 20.0078 C 35.9687 18.9531 35.1718 18.1563 34.0702 18.1563 C 33.5546 18.1563 33.2733 18.2266 32.8983 18.4141 L 18.9296 25.9609 C 17.9921 26.4531 17.5468 27.1328 17.5468 28.0234 C 17.5468 28.9844 17.9452 29.5703 18.9296 30.0859 L 32.8983 37.3281 C 33.2499 37.5156 33.5546 37.6094 34.0234 37.6094 Z"
  }));
}

export default LessthanCircle;