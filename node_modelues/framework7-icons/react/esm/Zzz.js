function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Zzz(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 10.4922 26.8750 L 25.3984 26.8750 C 26.5234 26.8750 27.1563 26.2656 27.1563 25.2344 C 27.1563 24.2032 26.5234 23.6172 25.3984 23.6172 L 12.8828 23.6172 L 12.8828 23.5234 L 26.0078 7.7032 C 26.7578 6.8125 26.9453 6.2734 26.9453 5.5703 C 26.9453 4.2813 26.0547 3.4844 24.5078 3.4844 L 9.9297 3.4844 C 8.8047 3.4844 8.1719 4.0703 8.1719 5.1016 C 8.1719 6.1563 8.8047 6.7422 9.9297 6.7422 L 22.4219 6.7422 L 22.4219 6.8359 L 8.9922 23.0547 C 8.4531 23.6875 8.3125 24.1563 8.3125 24.8359 C 8.3125 26.0547 9.1797 26.8750 10.4922 26.8750 Z M 34.3047 39.4844 L 46.1172 39.4844 C 47.2188 39.4844 47.8281 38.9219 47.8281 37.8906 C 47.8281 36.9297 47.2188 36.3437 46.1172 36.3437 L 36.5078 36.3437 L 36.5078 36.25 L 46.5390 24.1563 C 47.3359 23.1953 47.5937 22.6563 47.5937 22 C 47.5937 20.7344 46.75 19.9610 45.25 19.9610 L 33.7422 19.9610 C 32.6641 19.9610 32.0312 20.5469 32.0312 21.5313 C 32.0312 22.5391 32.6641 23.1016 33.7422 23.1016 L 43.3281 23.1016 L 43.3281 23.1953 L 33.0156 35.6641 C 32.4063 36.3906 32.1953 36.8594 32.1953 37.5391 C 32.1953 38.6875 33.0156 39.4844 34.3047 39.4844 Z M 17.3828 52.5156 L 26.8516 52.5156 C 27.8594 52.5156 28.4453 51.9532 28.4453 51.0391 C 28.4453 50.1016 27.8594 49.5859 26.8516 49.5859 L 19.4453 49.5859 L 19.4453 49.4922 L 27.2266 40.0234 C 27.9766 39.1094 28.2109 38.5469 28.2109 37.8672 C 28.2109 36.7422 27.4375 36.1094 26.1719 36.1094 L 16.7969 36.1094 C 15.7890 36.1094 15.2266 36.6484 15.2266 37.5625 C 15.2266 38.5 15.7890 39.0391 16.7969 39.0391 L 24.3203 39.0391 L 24.3203 39.1094 L 16.1641 48.9531 C 15.6016 49.6563 15.4141 50.0547 15.4141 50.7110 C 15.4141 51.7656 16.1875 52.5156 17.3828 52.5156 Z"
  }));
}

export default Zzz;