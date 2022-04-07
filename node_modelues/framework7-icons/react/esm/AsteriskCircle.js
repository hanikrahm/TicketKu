function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function AsteriskCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0547 51.9063 28 C 51.9063 14.9219 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9219 4.0937 28 C 4.0937 41.0547 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0390 8.1014 28 C 8.1014 16.9375 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9375 47.9219 28 C 47.9454 39.0390 39.0390 47.9219 27.9999 47.9219 Z M 28.0468 39.6953 C 29.2187 39.6953 29.8749 38.9922 29.8514 37.7734 L 29.6405 30.9297 L 35.8280 34.9609 C 36.1562 35.1719 36.5312 35.2890 36.9999 35.2890 C 37.9140 35.2890 38.7812 34.5859 38.7812 33.4141 C 38.7812 32.6875 38.4296 32.1719 37.7030 31.7734 L 31.2343 28.1406 L 37.7030 24.5547 C 38.4296 24.1328 38.7812 23.6406 38.7812 22.8906 C 38.7812 21.7422 37.9140 21.0156 36.9999 21.0156 C 36.5312 21.0156 36.1562 21.1328 35.8280 21.3437 L 29.6405 25.2812 L 29.8514 18.2734 C 29.8749 17.0312 29.2187 16.3047 28.0468 16.3047 C 26.8514 16.3047 26.1249 17.0781 26.1483 18.2734 L 26.3593 25.2812 L 20.1718 21.3672 C 19.8436 21.1797 19.4687 21.0390 18.9999 21.0390 C 18.0858 21.0390 17.2187 21.7656 17.2187 22.9141 C 17.2187 23.6641 17.5702 24.1797 18.2733 24.5781 L 24.7187 28.1406 L 18.2968 31.7500 C 17.5702 32.1484 17.2187 32.6641 17.2187 33.3906 C 17.2187 34.5625 18.0858 35.2656 18.9999 35.2656 C 19.4687 35.2656 19.8436 35.1484 20.1718 34.9375 L 26.3593 30.9297 L 26.1483 37.7734 C 26.1249 38.9453 26.8514 39.6953 28.0468 39.6953 Z"
  }));
}

export default AsteriskCircle;