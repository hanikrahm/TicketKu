function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUpLeftArrowDownRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 7.8436 24.6016 C 9.0624 24.6016 9.9764 23.6641 9.9764 22.4219 L 9.9764 20.4531 L 9.4843 12.2734 L 15.6718 18.7656 L 22.8671 26.0312 C 23.2655 26.4531 23.7811 26.6406 24.3671 26.6406 C 25.6796 26.6406 26.6874 25.7734 26.6874 24.4609 C 26.6874 23.8281 26.4530 23.2656 26.0311 22.8437 L 18.8124 15.6250 L 12.2968 9.4609 L 20.4999 9.9297 L 22.4686 9.9297 C 23.7108 9.9297 24.6718 9.0625 24.6718 7.7968 C 24.6718 6.5312 23.7108 5.6406 22.4686 5.6406 L 9.4374 5.6406 C 7.0468 5.6406 5.6640 7.0234 5.6640 9.4141 L 5.6640 22.4219 C 5.6640 23.6406 6.5780 24.6016 7.8436 24.6016 Z M 33.5311 50.3594 L 46.5624 50.3594 C 48.9532 50.3594 50.3360 48.9766 50.3360 46.5859 L 50.3360 33.5781 C 50.3360 32.3594 49.4216 31.3984 48.1564 31.3984 C 46.9374 31.3984 46.0468 32.3359 46.0468 33.5781 L 46.0468 35.5469 L 46.5155 43.7266 L 40.3280 37.2344 L 33.1327 29.9688 C 32.7343 29.5469 32.2186 29.3594 31.6327 29.3594 C 30.3202 29.3594 29.3358 30.2266 29.3358 31.5390 C 29.3358 32.1719 29.5468 32.7344 29.9686 33.1563 L 37.2108 40.3750 L 43.7030 46.5391 L 35.4999 46.0703 L 33.5311 46.0703 C 32.2889 46.0703 31.3515 46.9375 31.3280 48.2031 C 31.3280 49.4687 32.2889 50.3594 33.5311 50.3594 Z"
  }));
}

export default ArrowUpLeftArrowDownRight;