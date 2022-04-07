function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function DocPlaintext(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 15.5547 53.125 L 40.4453 53.125 C 45.2969 53.125 47.7109 50.6875 47.7109 45.7890 L 47.7109 10.2344 C 47.7109 5.3594 45.2969 2.8750 40.4453 2.8750 L 15.5547 2.8750 C 10.7266 2.8750 8.2891 5.3594 8.2891 10.2344 L 8.2891 45.7890 C 8.2891 50.6875 10.7266 53.125 15.5547 53.125 Z M 15.7422 49.3515 C 13.3281 49.3515 12.0625 48.0625 12.0625 45.7187 L 12.0625 10.3047 C 12.0625 7.9844 13.3281 6.6484 15.7656 6.6484 L 40.2578 6.6484 C 42.6953 6.6484 43.9375 7.9609 43.9375 10.3047 L 43.9375 45.7187 C 43.9375 48.0625 42.6953 49.3515 40.2813 49.3515 Z M 19.1406 16.4453 L 36.9062 16.4453 C 37.7266 16.4453 38.3594 15.7891 38.3594 14.9687 C 38.3594 14.1718 37.7266 13.5625 36.9062 13.5625 L 19.1406 13.5625 C 18.2734 13.5625 17.6640 14.1718 17.6640 14.9687 C 17.6640 15.7891 18.2734 16.4453 19.1406 16.4453 Z M 19.1406 24.625 L 36.9062 24.625 C 37.7266 24.625 38.3594 23.9687 38.3594 23.1484 C 38.3594 22.3515 37.7266 21.7422 36.9062 21.7422 L 19.1406 21.7422 C 18.2734 21.7422 17.6640 22.3515 17.6640 23.1484 C 17.6640 23.9687 18.2734 24.625 19.1406 24.625 Z M 19.1406 32.8047 L 27.5547 32.8047 C 28.375 32.8047 29.0078 32.1718 29.0078 31.3750 C 29.0078 30.5547 28.375 29.9218 27.5547 29.9218 L 19.1406 29.9218 C 18.2734 29.9218 17.6640 30.5547 17.6640 31.3750 C 17.6640 32.1718 18.2734 32.8047 19.1406 32.8047 Z"
  }));
}

export default DocPlaintext;