function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BookCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 21.9296 37.1406 C 24.0858 37.1406 25.3983 37.9844 26.0780 38.4063 C 26.2890 38.5234 26.9218 38.8984 27.0390 38.9219 L 27.0390 19.5390 C 26.1952 17.9219 23.9687 16.7266 21.3202 16.7266 C 18.3436 16.7266 15.6483 18.1094 14.8046 19.8203 L 14.8046 37.9375 C 14.8046 38.7812 15.2968 39.0859 15.9062 39.0859 C 16.3983 39.0859 16.7030 38.9219 17.0077 38.6875 C 17.7812 37.9844 19.5390 37.1406 21.9296 37.1406 Z M 34.0468 37.1406 C 36.4140 37.1406 38.1952 37.9844 38.9687 38.6875 C 39.2499 38.9219 39.5780 39.0859 40.0702 39.0859 C 40.6796 39.0859 41.1483 38.7812 41.1483 37.9375 L 41.1483 19.8203 C 40.3046 18.1094 37.6093 16.7266 34.6327 16.7266 C 32.0312 16.7266 29.8046 17.9219 28.9374 19.5390 L 28.9374 38.9688 C 29.1014 38.9453 29.6640 38.5469 29.8983 38.4063 C 30.5546 37.9609 31.8905 37.1406 34.0468 37.1406 Z"
  }));
}

export default BookCircle;