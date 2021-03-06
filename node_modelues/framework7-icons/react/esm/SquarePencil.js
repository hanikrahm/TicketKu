function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquarePencil(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 48.7772 9.9766 L 50.4649 8.2422 C 51.2852 7.4219 51.2852 6.2734 50.4880 5.5000 L 49.9489 4.9375 C 49.2227 4.2109 48.0740 4.3047 47.3008 5.0547 L 45.5897 6.7422 Z M 21.8007 34.3516 L 26.3710 32.3594 L 47.0665 11.6875 L 43.8554 8.5234 L 23.1835 29.1953 L 21.0741 33.6016 C 20.8866 34.0000 21.3554 34.5391 21.8007 34.3516 Z M 12.0741 51.7891 L 39.5897 51.7891 C 43.8085 51.7891 46.2460 49.3516 46.2460 44.5234 L 46.2460 18.4375 L 42.4726 22.2109 L 42.4726 44.3360 C 42.4726 46.7734 41.1601 48.0156 39.5429 48.0156 L 12.1444 48.0156 C 9.8007 48.0156 8.4882 46.7734 8.4882 44.3360 L 8.4882 17.7344 C 8.4882 15.2969 9.8007 14.0312 12.1444 14.0312 L 32.4179 14.0312 L 36.1913 10.2578 L 12.0741 10.2578 C 7.1992 10.2578 4.7148 12.6953 4.7148 17.5234 L 4.7148 44.5234 C 4.7148 49.3750 7.1992 51.7891 12.0741 51.7891 Z"
  }));
}

export default SquarePencil;