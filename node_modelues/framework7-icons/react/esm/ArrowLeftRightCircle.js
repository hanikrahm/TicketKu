function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowLeftRightCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 13.0468 28 C 13.0468 28.5390 13.2812 28.9375 13.7265 29.3828 L 21.6249 37.3281 C 21.9296 37.6328 22.3749 37.8203 22.8671 37.8203 C 23.8280 37.8203 24.5312 37.0469 24.5312 36.1094 C 24.5312 35.5937 24.3671 35.1719 24.0155 34.8437 L 21.0858 31.9609 L 18.2499 29.5703 L 23.2187 29.7578 L 32.8046 29.7578 L 37.7733 29.5703 L 34.9374 31.9609 L 31.9843 34.8437 C 31.6562 35.1719 31.4687 35.5937 31.4687 36.1094 C 31.4687 37.0469 32.1952 37.8203 33.1562 37.8203 C 33.6483 37.8203 34.0702 37.6328 34.3749 37.3281 L 42.2968 29.3828 C 42.7421 28.9375 42.9765 28.5390 42.9765 28 C 42.9765 27.5078 42.7655 27.1094 42.2968 26.6406 L 34.3749 18.6953 C 34.0702 18.3906 33.6483 18.2266 33.1562 18.2266 C 32.1952 18.2266 31.4687 18.9531 31.4687 19.9141 C 31.4687 20.4297 31.6796 20.8516 31.9843 21.1563 L 34.9374 24.0625 L 37.7499 26.4297 L 32.8046 26.2422 L 23.2187 26.2422 L 18.2733 26.4297 L 21.0858 24.0625 L 24.0155 21.1563 C 24.3436 20.8516 24.5312 20.4297 24.5312 19.9141 C 24.5312 18.9531 23.8280 18.2266 22.8671 18.2266 C 22.3749 18.2266 21.9296 18.3906 21.6249 18.6953 L 13.7265 26.6406 C 13.2343 27.1094 13.0468 27.5078 13.0468 28 Z"
  }));
}

export default ArrowLeftRightCircle;