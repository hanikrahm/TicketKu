function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquareStack3dDownDottedline(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.2969 51.9766 C 28.2578 51.9766 29.0313 51.2734 29.3594 50.6172 L 16.7969 28.8906 C 16.5860 28.5625 16.4454 28.2578 16.4454 28 C 16.4454 27.7422 16.5860 27.4375 16.7969 27.1094 L 29.3594 5.3828 C 29.0313 4.7266 28.2578 4.0234 27.2969 4.0234 C 26.5703 4.0234 25.7500 4.4453 25.2578 5.3125 L 13.3516 25.4453 C 12.7656 26.4297 12.3438 27.1328 12.3438 28 C 12.3438 28.8437 12.7656 29.5703 13.3516 30.5547 L 25.2578 50.6875 C 25.7969 51.5781 26.5703 51.9766 27.2969 51.9766 Z M 39.0156 51.9531 C 40.3047 51.9531 41.1485 51.2031 42.2734 49.3281 L 52.9375 30.9766 C 53.5936 29.8516 53.8984 28.9375 53.8984 28 C 53.8984 27.0390 53.5936 26.1484 52.9375 25.0234 L 42.2734 6.6719 C 41.1485 4.7968 40.3047 4.0469 39.0156 4.0469 C 37.7266 4.0469 36.8828 4.7968 35.7813 6.6719 L 25.0938 25.0234 C 24.4375 26.1484 24.1328 27.0390 24.1328 28 C 24.1328 28.9375 24.4375 29.8516 25.0938 30.9766 L 35.7813 49.3281 C 36.8828 51.2031 37.7266 51.9531 39.0156 51.9531 Z M 15.8360 7.5625 C 16.6797 7.5625 17.3828 6.8828 17.3828 6.0390 C 17.3828 5.1719 16.6797 4.4922 15.8360 4.4922 C 14.9922 4.4922 14.2891 5.1719 14.2891 6.0390 C 14.2891 6.8828 14.9922 7.5625 15.8360 7.5625 Z M 13.4219 11.8984 C 14.2656 11.8984 14.9454 11.2188 14.9454 10.3750 C 14.9454 9.5078 14.2656 8.8281 13.4219 8.8281 C 12.5547 8.8281 11.8750 9.5078 11.8750 10.3750 C 11.8750 11.2188 12.5547 11.8984 13.4219 11.8984 Z M 39.0156 47.0547 C 38.8985 47.0547 38.8516 46.9844 38.7813 46.8672 L 28.5625 29.0312 C 28.3281 28.6563 28.2344 28.3281 28.2344 28 C 28.2344 27.6719 28.3281 27.3437 28.5625 26.9688 L 38.7813 9.1094 C 38.8516 9.0156 38.8985 8.9453 39.0156 8.9453 C 39.1328 8.9453 39.2032 9.0156 39.2500 9.1094 L 49.4690 26.9688 C 49.7032 27.3437 49.8203 27.6719 49.8203 28 C 49.8203 28.3281 49.7032 28.6563 49.4690 29.0312 L 39.2500 46.8672 C 39.2032 46.9844 39.1328 47.0547 39.0156 47.0547 Z M 10.9610 16.2812 C 11.8281 16.2812 12.5078 15.5781 12.5078 14.7344 C 12.5078 13.8906 11.8281 13.1875 10.9610 13.1875 C 10.1172 13.1875 9.4375 13.8906 9.4375 14.7344 C 9.4375 15.5781 10.1172 16.2812 10.9610 16.2812 Z M 8.5000 20.5937 C 9.3672 20.5937 10.0469 19.9141 10.0469 19.0469 C 10.0469 18.2031 9.3672 17.5234 8.5000 17.5234 C 7.6563 17.5234 6.9766 18.2031 6.9766 19.0469 C 6.9766 19.9141 7.6563 20.5937 8.5000 20.5937 Z M 6.0860 24.9531 C 6.9297 24.9531 7.6328 24.2734 7.6328 23.4297 C 7.6328 22.5625 6.9297 21.8828 6.0860 21.8828 C 5.2422 21.8828 4.5625 22.5625 4.5625 23.4297 C 4.5625 24.2734 5.2422 24.9531 6.0860 24.9531 Z M 3.6485 29.2890 C 4.4922 29.2890 5.1719 28.6094 5.1719 27.7656 C 5.1719 26.8984 4.4922 26.2188 3.6485 26.2188 C 2.7813 26.2188 2.1016 26.8984 2.1016 27.7656 C 2.1016 28.6094 2.7813 29.2890 3.6485 29.2890 Z M 6.0860 33.6250 C 6.9297 33.6250 7.6328 32.9453 7.6328 32.1016 C 7.6328 31.2344 6.9297 30.5547 6.0860 30.5547 C 5.2422 30.5547 4.5625 31.2344 4.5625 32.1016 C 4.5625 32.9453 5.2422 33.6250 6.0860 33.6250 Z M 8.5000 38.0078 C 9.3672 38.0078 10.0469 37.3047 10.0469 36.4609 C 10.0469 35.6172 9.3672 34.9141 8.5000 34.9141 C 7.6563 34.9141 6.9766 35.6172 6.9766 36.4609 C 6.9766 37.3047 7.6563 38.0078 8.5000 38.0078 Z M 10.9610 42.3203 C 11.8281 42.3203 12.5078 41.6172 12.5078 40.7734 C 12.5078 39.9297 11.8281 39.2266 10.9610 39.2266 C 10.1172 39.2266 9.4375 39.9297 9.4375 40.7734 C 9.4375 41.6172 10.1172 42.3203 10.9610 42.3203 Z M 13.4219 46.6562 C 14.2656 46.6562 14.9454 45.9766 14.9454 45.1094 C 14.9454 44.2656 14.2656 43.5859 13.4219 43.5859 C 12.5547 43.5859 11.8750 44.2656 11.8750 45.1094 C 11.8750 45.9766 12.5547 46.6562 13.4219 46.6562 Z M 15.8360 51.0156 C 16.6797 51.0156 17.3828 50.3359 17.3828 49.4687 C 17.3828 48.6016 16.6797 47.9219 15.8360 47.9219 C 14.9922 47.9219 14.2891 48.6016 14.2891 49.4687 C 14.2891 50.3359 14.9922 51.0156 15.8360 51.0156 Z"
  }));
}

export default SquareStack3dDownDottedline;