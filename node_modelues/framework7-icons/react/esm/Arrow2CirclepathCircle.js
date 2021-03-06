function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Arrow2CirclepathCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 38.0780 32.9922 C 38.7109 33.8594 39.7890 33.9297 40.4452 32.9922 L 44.1952 27.6953 C 44.8046 26.8516 44.5702 25.8203 43.4921 25.8203 L 41.1483 25.8203 C 39.9999 19.3281 34.7265 14.8281 28.0468 14.8281 C 25.1171 14.8281 22.1874 15.8594 20.1483 17.5469 C 19.0234 18.4141 18.7655 19.6328 19.5858 20.5 C 20.3827 21.3906 21.4609 21.25 22.3983 20.5469 C 24.0858 19.2344 25.7733 18.5312 28.0468 18.5312 C 32.7109 18.5312 36.6014 21.6953 37.6327 25.8203 L 35.0077 25.8203 C 33.9296 25.8203 33.6718 26.8516 34.2812 27.6953 Z M 12.5077 30.0859 L 14.9687 30.0859 C 16.1171 36.5781 21.3905 41.0781 28.0936 41.0781 C 30.9999 41.0781 33.9530 40.0703 35.9921 38.3828 C 37.0936 37.4922 37.3514 36.2734 36.5546 35.4063 C 35.7343 34.5156 34.6562 34.6797 33.7421 35.3594 C 32.0546 36.6719 30.3671 37.3984 28.0936 37.3984 C 23.4062 37.3984 19.5155 34.2344 18.4843 30.0859 L 20.9687 30.0859 C 22.0702 30.0859 22.3046 29.0547 21.7187 28.2109 L 17.8983 22.9375 C 17.2890 22.0469 16.1874 22 15.5312 22.9375 L 11.7812 28.2109 C 11.1718 29.0547 11.4062 30.0859 12.5077 30.0859 Z"
  }));
}

export default Arrow2CirclepathCircle;