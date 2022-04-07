function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CameraCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 17.6874 38.6172 L 38.2655 38.6172 C 40.7265 38.6172 42.0155 37.3750 42.0155 34.9375 L 42.0155 22.4219 C 42.0155 19.9609 40.7265 18.7188 38.2655 18.7188 L 35.4530 18.7188 C 34.5155 18.7188 34.2343 18.5547 33.6952 17.9453 L 32.7343 16.8672 C 32.1483 16.2109 31.5390 15.8594 30.3202 15.8594 L 25.5390 15.8594 C 24.3202 15.8594 23.7109 16.2109 23.1014 16.8672 L 22.1405 17.9453 C 21.6014 18.5078 21.3202 18.7188 20.3827 18.7188 L 17.6874 18.7188 C 15.1796 18.7188 13.9140 19.9609 13.9140 22.4219 L 13.9140 34.9375 C 13.9140 37.3750 15.1796 38.6172 17.6874 38.6172 Z M 27.8358 35.2890 C 23.9452 35.2890 20.7812 32.1719 20.7812 28.2344 C 20.7812 24.3437 23.9452 21.2266 27.8358 21.2266 C 31.7265 21.2266 34.8436 24.3437 34.8436 28.2344 C 34.8436 32.2422 31.7265 35.2890 27.8358 35.2890 Z M 37.0468 25.1172 C 36.1796 25.1172 35.4530 24.4141 35.4530 23.5234 C 35.4530 22.6328 36.1796 21.9297 37.0468 21.9297 C 37.9140 21.9297 38.6171 22.6328 38.6171 23.5234 C 38.6405 24.4141 37.9140 25.1172 37.0468 25.1172 Z M 27.8358 33.25 C 30.5780 33.25 32.8280 31.0234 32.8280 28.2344 C 32.8280 25.4688 30.5780 23.2422 27.8358 23.2422 C 25.0702 23.2422 22.8202 25.4688 22.8202 28.2344 C 22.8202 31.0234 25.0702 33.25 27.8358 33.25 Z"
  }));
}

export default CameraCircle;