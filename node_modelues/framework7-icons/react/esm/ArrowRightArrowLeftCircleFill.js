function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowRightArrowLeftCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 40.1171 19.7968 C 40.1171 20.8281 39.4140 21.5781 38.3827 21.5781 L 25.0468 21.5781 L 21.1093 21.3906 L 23.9687 23.8281 L 25.3514 25.0937 C 25.6562 25.3750 25.8671 25.7968 25.8671 26.3125 C 25.8671 27.2734 25.0936 28.0234 24.1562 28.0234 C 23.6640 28.0234 23.2655 27.8594 22.9140 27.5312 L 16.5624 21.3437 C 16.0936 20.8516 15.8827 20.3359 15.8827 19.7968 C 15.8827 19.3047 16.0936 18.8125 16.5624 18.3437 L 22.9140 12.1094 C 23.2655 11.8047 23.6640 11.6406 24.1562 11.6406 C 25.0936 11.6406 25.8671 12.3906 25.8671 13.3516 C 25.8671 13.8672 25.6562 14.2656 25.3514 14.5703 L 23.9687 15.8594 L 21.1327 18.2266 L 25.0468 18.0625 L 38.3827 18.0625 C 39.4140 18.0625 40.1171 18.7890 40.1171 19.7968 Z M 40.1171 35.5937 C 40.1171 36.0859 39.9296 36.5781 39.4374 37.0469 L 33.0858 43.2812 C 32.7577 43.6094 32.3358 43.7500 31.8671 43.7500 C 30.9062 43.7500 30.1327 43.0234 30.1327 42.0625 C 30.1327 41.5469 30.3436 41.1484 30.6483 40.8203 L 32.0312 39.5312 L 34.8905 37.1641 L 30.9765 37.3281 L 17.6171 37.3281 C 16.6093 37.3281 15.8827 36.6250 15.8827 35.5937 C 15.8827 34.5625 16.6093 33.8125 17.6171 33.8125 L 30.9765 33.8125 L 34.9140 34 L 32.0312 31.5625 L 30.6483 30.2968 C 30.3436 30.0390 30.1327 29.5937 30.1327 29.1016 C 30.1327 28.1172 30.9062 27.3906 31.8671 27.3906 C 32.3358 27.3906 32.7577 27.5312 33.0858 27.8594 L 39.4374 34.0703 C 39.9296 34.5390 40.1171 35.0547 40.1171 35.5937 Z"
  }));
}

export default ArrowRightArrowLeftCircleFill;