function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Repeat(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 2.3829 26.2891 C 2.3829 27.7187 3.5314 28.8672 4.9611 28.8672 C 6.4142 28.8672 7.5626 27.7187 7.5626 26.2891 L 7.5626 24.7422 C 7.5626 21.0156 10.1173 18.5547 13.9611 18.5547 L 31.6564 18.5547 L 31.6564 23.4531 C 31.6564 24.7187 32.4532 25.5156 33.7423 25.5156 C 34.3048 25.5156 34.8907 25.3047 35.3360 24.9297 L 44.1954 17.6172 C 45.2502 16.7734 45.2502 15.3672 44.1954 14.4765 L 35.3360 7.1172 C 34.8907 6.7656 34.3048 6.5313 33.7423 6.5313 C 32.4532 6.5313 31.6564 7.3516 31.6564 8.6172 L 31.6564 13.4687 L 14.4532 13.4687 C 7.0938 13.4687 2.3829 17.7109 2.3829 24.3672 Z M 24.3438 32.5703 C 24.3438 31.3047 23.5470 30.5078 22.2579 30.5078 C 21.6954 30.5078 21.1095 30.7187 20.6642 31.0703 L 11.8048 38.3828 C 10.7501 39.2500 10.7501 40.6328 11.8048 41.5234 L 20.6642 48.8828 C 21.1095 49.2578 21.6954 49.4687 22.2579 49.4687 C 23.5470 49.4687 24.3438 48.6719 24.3438 47.4062 L 24.3438 42.5078 L 41.5470 42.5078 C 48.9064 42.5078 53.6171 38.2422 53.6171 31.6094 L 53.6171 29.6875 C 53.6171 28.2344 52.4689 27.0860 51.0160 27.0860 C 49.5860 27.0860 48.4374 28.2344 48.4374 29.6875 L 48.4374 31.2344 C 48.4374 34.9375 45.8828 37.4219 42.0392 37.4219 L 24.3438 37.4219 Z"
  }));
}

export default Repeat;