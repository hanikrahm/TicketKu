function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowDownRightArrowUpLeft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 9.3672 25.6328 L 22.3750 25.6328 C 24.7656 25.6328 26.1719 24.2266 26.1719 21.8359 L 26.1719 8.8516 C 26.1719 7.6328 25.2578 6.6718 23.9922 6.6718 C 22.75 6.6718 21.8594 7.6094 21.8594 8.8516 L 21.8594 10.8203 L 22.3516 19.0000 L 16.1641 12.5078 L 8.9688 5.2422 C 8.5703 4.8203 8.0312 4.6094 7.4688 4.6094 C 6.1328 4.6094 5.1484 5.5000 5.1484 6.8125 C 5.1484 7.4218 5.3828 8.0078 5.8047 8.4297 L 13.0234 15.6484 L 19.5390 21.8125 L 11.3359 21.3437 L 9.3672 21.3437 C 8.1250 21.3437 7.1641 22.2109 7.1641 23.4766 C 7.1641 24.7187 8.1016 25.6328 9.3672 25.6328 Z M 31.8437 49.4219 C 33.0859 49.4219 33.9766 48.5078 33.9766 47.2422 L 33.9766 45.0156 L 33.4844 36.8594 L 39.6719 43.3516 L 47.0312 50.7578 C 47.4296 51.1797 47.9687 51.3906 48.5312 51.3906 C 49.8436 51.3906 50.8516 50.5000 50.8516 49.1875 C 50.8516 48.5781 50.6173 47.9922 50.1954 47.5703 L 42.8125 40.1875 L 36.3203 34.0234 L 44.5 34.4922 L 46.7266 34.4922 C 47.9687 34.4922 48.9296 33.625 48.9296 32.3828 C 48.9296 31.1172 47.9922 30.2266 46.7266 30.2266 L 33.4609 30.2266 C 31.0703 30.2266 29.6875 31.6094 29.6875 34.0000 L 29.6875 47.2422 C 29.6875 48.4844 30.6016 49.4219 31.8437 49.4219 Z"
  }));
}

export default ArrowDownRightArrowUpLeft;