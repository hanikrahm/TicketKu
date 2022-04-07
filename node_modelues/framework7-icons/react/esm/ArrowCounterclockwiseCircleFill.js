function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowCounterclockwiseCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 38.5936 28.9844 C 38.5936 34.9375 33.8593 39.7187 27.9765 39.7187 C 22.0936 39.7187 17.3593 34.9375 17.3593 29.0547 C 17.3593 28.1875 18.1093 27.4609 18.9999 27.4609 C 19.8905 27.4609 20.6405 28.1875 20.6405 29.0547 C 20.6405 33.1562 23.8749 36.4375 27.9765 36.4375 C 32.0546 36.4375 35.3124 33.1562 35.3124 29.0547 C 35.3124 25.0000 32.0546 21.7656 27.9765 21.7656 C 27.6718 21.7656 27.3436 21.7656 27.1093 21.8125 L 29.4296 24.0860 C 29.7109 24.3672 29.8749 24.7422 29.8749 25.1875 C 29.8749 26.0078 29.2187 26.6875 28.3749 26.6875 C 27.9765 26.6875 27.6014 26.5000 27.3202 26.2187 L 22.7030 21.625 C 22.1171 21.0625 22.1640 19.9844 22.7030 19.4219 L 27.2733 14.7578 C 27.5312 14.4531 27.9530 14.2891 28.3749 14.2891 C 29.2187 14.2891 29.8749 14.9687 29.8749 15.8125 C 29.8749 16.2344 29.7343 16.6328 29.4530 16.9140 L 27.7655 18.6016 C 27.9530 18.5781 28.2109 18.5547 28.4218 18.5547 C 33.7890 18.5547 38.5936 23.1484 38.5936 28.9844 Z"
  }));
}

export default ArrowCounterclockwiseCircleFill;