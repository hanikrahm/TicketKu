function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function HandThumbsupFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 43.9374 51.7656 C 45.7655 51.3438 47.6171 50.1484 47.6171 47.8984 C 47.6171 46.9844 47.3593 46.3516 47.0546 45.8125 C 46.8671 45.5078 46.8905 45.2734 47.1718 45.1563 C 48.6481 44.5000 49.8673 43.1875 49.8673 41.2891 C 49.8673 40.2344 49.5860 39.2735 49.0470 38.5937 C 48.7887 38.2422 48.8358 37.9610 49.2577 37.7032 C 50.3593 37.0937 51.0625 35.7344 51.0625 34.1875 C 51.0625 33.1094 50.7107 31.9141 50.0545 31.3281 C 49.7031 31.0000 49.7732 30.7656 50.1716 30.4375 C 50.9454 29.8516 51.3673 28.7266 51.3673 27.3906 C 51.3673 25.0937 49.5860 23.2422 47.2421 23.2422 L 38.8749 23.2422 C 36.7655 23.2422 35.3358 22.1406 35.3358 20.4063 C 35.3358 17.1719 39.3436 11.3594 39.3436 7.1641 C 39.3436 4.9844 37.9140 3.6719 36.0624 3.6719 C 34.3749 3.6719 33.5077 4.8437 32.5936 6.6250 C 29.1014 13.5156 24.3671 19.0703 20.7811 23.8281 C 17.7343 27.9063 16.2343 31.3281 16.1640 36.9532 C 16.0467 45.6016 23.0546 52.1875 34.0702 52.2813 L 37.3280 52.3047 C 40.3983 52.3281 42.6483 52.0937 43.9374 51.7656 Z M 4.6327 37.1172 C 4.6327 44.1484 8.9921 50.0313 14.8749 50.0313 L 19.0702 50.0313 C 14.8280 46.9375 12.8827 42.2500 12.9764 36.8828 C 13.0467 30.9297 15.3671 26.6875 17.4296 24.1094 L 13.9843 24.1094 C 8.7108 24.1094 4.6327 29.8281 4.6327 37.1172 Z"
  }));
}

export default HandThumbsupFill;