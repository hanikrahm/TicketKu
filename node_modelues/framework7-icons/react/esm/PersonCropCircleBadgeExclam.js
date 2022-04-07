function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PersonCropCircleBadgeExclam(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 33.7169 50.6051 C 45.9141 50.6051 56.0000 40.4968 56.0000 28.2994 C 56.0000 16.1245 45.8920 5.9937 33.6944 5.9937 C 22.4180 5.9937 12.9611 14.6419 11.5909 25.5365 C 12.1749 25.5365 12.7365 25.5814 13.2981 25.6712 C 13.9944 25.7611 14.6908 25.9183 15.3646 26.1205 C 16.4204 16.9332 24.1926 9.8124 33.6944 9.8124 C 43.9598 9.8124 52.1812 18.0563 52.2037 28.2994 C 52.2037 33.0840 50.4294 37.3969 47.5090 40.6765 C 44.1171 37.8461 39.0406 35.9593 33.6944 35.9593 C 31.1785 35.9593 28.3258 36.4984 25.6751 37.4418 C 25.8324 38.2954 25.9222 39.1715 25.9222 40.0475 C 25.9222 42.9902 25.0012 45.7531 23.4513 48.0668 C 26.5287 49.6616 30.0329 50.6051 33.7169 50.6051 Z M 33.6944 32.0956 C 38.0073 32.0956 41.2644 28.3668 41.2644 23.6720 C 41.2644 19.2469 37.9399 15.4057 33.6944 15.4057 C 29.4714 15.4057 26.1244 19.2469 26.1244 23.6720 C 26.1244 28.3668 29.4040 32.0956 33.6944 32.0956 Z M 11.4112 51.4587 C 17.6783 51.4587 22.8224 46.3372 22.8224 40.0475 C 22.8224 33.8028 17.6783 28.6363 11.4112 28.6363 C 5.1665 28.6363 0 33.8028 0 40.0475 C 0 46.3372 5.1665 51.4587 11.4112 51.4587 Z M 11.4112 41.8446 C 10.6699 41.8446 10.1308 41.3504 10.1083 40.6091 L 9.9286 34.4093 C 9.9062 33.5333 10.5127 32.9268 11.4112 32.9268 C 12.3321 32.9268 12.9162 33.5333 12.8937 34.4093 L 12.7140 40.6091 C 12.6916 41.3504 12.1749 41.8446 11.4112 41.8446 Z M 11.4112 47.2132 C 10.4003 47.2132 9.5692 46.3821 9.5692 45.3712 C 9.5692 44.3604 10.4003 43.5293 11.4112 43.5293 C 12.4445 43.5293 13.2531 44.3604 13.2531 45.3712 C 13.2531 46.3821 12.4445 47.2132 11.4112 47.2132 Z"
  }));
}

export default PersonCropCircleBadgeExclam;