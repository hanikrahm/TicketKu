function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUturnLeftCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0547 51.9063 28 C 51.9063 14.9219 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9219 4.0937 28 C 4.0937 41.0547 14.9218 51.9063 27.9999 51.9063 Z M 40.2812 31.4922 C 40.2812 37.5859 35.8280 41.4062 29.9218 41.4062 L 26.4062 41.4062 C 25.3046 41.4062 24.4609 40.7266 24.4609 39.5781 C 24.4609 38.4063 25.3046 37.7734 26.3593 37.7734 L 29.9218 37.7734 C 33.7655 37.7734 36.5546 35.2890 36.5546 31.2812 C 36.5546 27.3672 33.6718 25.2344 29.9452 25.2344 L 22.3749 25.2344 L 19.3514 25.1406 L 20.8280 26.2422 L 24.0155 29.2656 C 24.3905 29.5937 24.5780 30.1094 24.5780 30.5781 C 24.5780 31.6328 23.7577 32.4531 22.7499 32.4531 C 22.2343 32.4531 21.8358 32.2656 21.4609 31.8906 L 14.6874 24.9766 C 14.2890 24.5547 14.0077 24.0625 14.0077 23.4531 C 14.0077 22.8437 14.2890 22.3281 14.6874 21.8828 L 21.4374 15.0625 C 21.8124 14.6641 22.1874 14.5 22.7265 14.5 C 23.7577 14.5 24.5780 15.2968 24.5780 16.3516 C 24.5780 16.8672 24.3436 17.3594 23.9921 17.6641 L 21.3436 20.2187 L 19.3514 21.7890 L 22.3749 21.6953 L 29.9452 21.6953 C 35.8514 21.6953 40.2812 25.3984 40.2812 31.4922 Z"
  }));
}

export default ArrowUturnLeftCircleFill;