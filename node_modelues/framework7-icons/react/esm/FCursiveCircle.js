function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function FCursiveCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 18.1562 39.3437 C 18.1562 40.6328 19.5155 41.2891 22.1171 41.2891 C 25.8436 41.2891 28.1405 39.1328 28.7265 35.0781 L 29.5936 28.6563 L 35.8280 28.6563 C 36.8358 28.6563 37.5624 27.9531 37.5624 26.9922 C 37.5624 26.0312 36.7890 25.3281 35.8046 25.3281 L 30.0858 25.3281 L 30.6014 21.5078 C 30.9530 19.0469 31.8671 18.0390 33.6952 18.0390 C 35.1249 18.0390 35.5936 18.2031 36.2733 18.2031 C 37.2109 18.2031 37.8436 17.5703 37.8436 16.6328 C 37.8436 15.3437 36.4374 14.6875 33.8827 14.6875 C 30.1562 14.6875 27.8358 16.9141 27.2733 20.9219 L 26.6874 25.3281 L 21.3436 25.3281 C 20.3593 25.3281 19.6327 26.0312 19.6327 26.9922 C 19.6327 27.9297 20.3593 28.6563 21.3671 28.6563 L 26.2187 28.6563 L 25.3983 34.5156 C 25.0468 36.9531 24.1327 37.9609 22.3046 37.9609 C 20.8749 37.9609 20.4765 37.7734 19.7265 37.7734 C 18.7655 37.7734 18.1562 38.4297 18.1562 39.3437 Z"
  }));
}

export default FCursiveCircle;