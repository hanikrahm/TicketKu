function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Skew(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 5.4648 42.5781 C 7.5272 42.5781 9.3085 41.3594 10.1757 39.6016 L 45.4724 49.9609 C 46.0820 52.2109 48.1211 53.875 50.5585 53.875 C 53.4179 53.875 55.7852 51.5313 55.7852 48.6484 C 55.7852 46.4687 54.4489 44.5937 52.5505 43.7969 L 51.5665 20.2422 C 53.5820 19.5156 55.0350 17.5703 55.0350 15.2969 C 55.0350 12.4140 52.6681 10.0703 49.8083 10.0703 C 47.9099 10.0703 46.2227 11.1016 45.3083 12.625 L 25.7851 7.2578 C 25.7851 4.4922 23.4179 2.1250 20.5585 2.1250 C 17.6757 2.1250 15.3085 4.4922 15.3085 7.3750 C 15.3085 8.9219 15.9882 10.3281 17.0897 11.2891 L 6.2148 32.1484 C 5.9804 32.1016 5.7226 32.1016 5.4648 32.1016 C 2.5819 32.1016 .2148 34.4453 .2148 37.3281 C .2148 40.2109 2.5819 42.5781 5.4648 42.5781 Z M 20.5585 12.625 C 22.2694 12.625 23.8163 11.7578 24.7772 10.4453 L 44.5820 15.9062 C 44.8398 17.9922 46.3163 19.7266 48.2852 20.3125 L 49.1056 43.5859 C 47.5585 44.0547 46.2928 45.2031 45.6836 46.6797 L 10.5976 36.3672 C 10.4101 35.3828 9.9413 34.4687 9.2851 33.7656 L 20.1601 12.6016 C 20.2772 12.6016 20.4179 12.625 20.5585 12.625 Z"
  }));
}

export default Skew;