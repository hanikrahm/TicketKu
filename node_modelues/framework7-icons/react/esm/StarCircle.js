function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function StarCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 18.6483 40.8672 C 19.2109 41.3125 19.8905 41.1484 20.7343 40.5391 L 27.9999 35.2188 L 35.2655 40.5391 C 36.0858 41.1484 36.7655 41.3125 37.3514 40.8672 C 37.8905 40.4453 37.9843 39.7656 37.6562 38.8047 L 34.7968 30.25 L 42.1327 25.0234 C 42.9530 24.4375 43.3046 23.8047 43.0702 23.1250 C 42.8358 22.4922 42.2265 22.1641 41.1952 22.1641 L 32.2187 22.2344 L 29.4765 13.6328 C 29.1718 12.6719 28.7030 12.1563 27.9999 12.1563 C 27.2968 12.1563 26.8046 12.6719 26.5234 13.6328 L 23.7812 22.2344 L 14.7812 22.1641 C 13.7733 22.1641 13.1171 22.4922 12.9062 23.1250 C 12.7187 23.8047 13.0234 24.4375 13.8671 25.0234 L 21.1796 30.25 L 18.3202 38.8047 C 17.9921 39.7656 18.0858 40.4453 18.6483 40.8672 Z"
  }));
}

export default StarCircle;