function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowBranch(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 11.875 18.4375 L 14.0313 15.6250 C 19.7031 19.2578 25.9375 27.4141 25.9375 33.0391 L 25.9375 46.4922 C 25.9375 48.1094 26.6640 48.9766 28.0000 48.9766 C 29.3125 48.9766 30.0391 48.1094 30.0391 46.4922 L 30.0391 33.0391 C 30.0391 27.4844 36.1562 19.4219 41.8516 15.6953 L 43.8437 18.4141 C 44.8281 19.7734 46.0234 19.4687 46.5156 17.9453 L 49.4687 9.3203 C 49.8906 8.0547 49.2109 7.1641 47.9218 7.1875 L 38.7813 7.3282 C 37.2109 7.3516 36.5547 8.3828 37.5156 9.7187 L 39.4140 12.3203 C 33.9062 16.1875 28.7266 23.0782 28.0234 26.6172 L 27.9531 26.6172 C 27.2500 23.0547 22.0937 16.1875 16.5859 12.3203 L 18.4140 9.9297 C 19.4453 8.6172 18.8125 7.5625 17.2422 7.4922 L 8.1016 7.0938 C 6.8125 7.0234 6.1094 7.8906 6.4844 9.1797 L 9.2031 17.8750 C 9.6718 19.4219 10.8437 19.7734 11.875 18.4375 Z"
  }));
}

export default ArrowBranch;