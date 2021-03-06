function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BoldUnderline(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 43.7996 41.2674 C 51.3336 41.2674 56 36.7472 56 30.1762 L 56 12.2419 C 56 11.0701 55.2050 10.3167 54.0328 10.3167 C 52.8611 10.3167 52.1286 11.0701 52.1286 12.2419 L 52.1286 29.8623 C 52.1286 34.5290 49.0523 37.6889 43.7996 37.6889 C 38.5679 37.6889 35.4919 34.5290 35.4919 29.8623 L 35.4919 12.2419 C 35.4919 11.0701 34.7175 10.3167 33.5247 10.3167 C 32.3528 10.3167 31.6204 11.0701 31.6204 12.2419 L 31.6204 30.1762 C 31.6204 36.7472 36.2661 41.2674 43.7996 41.2674 Z M 3.5366 40.7233 L 14.4604 40.7233 C 20.8431 40.7233 24.8819 37.3541 24.8819 32.1852 C 24.8819 28.1044 21.9522 25.1538 17.6831 24.9236 L 17.6831 24.7562 C 21.1570 24.2749 23.5217 21.6590 23.5217 18.3316 C 23.5217 13.6650 19.9642 10.7980 14.1465 10.7980 L 3.5366 10.7980 C 1.2974 10.7980 0 12.1164 0 14.4183 L 0 37.1239 C 0 39.4049 1.2974 40.7233 3.5366 40.7233 Z M 6.9059 23.2285 L 6.9059 15.7158 L 12.0538 15.7158 C 14.9836 15.7158 16.7205 17.0551 16.7205 19.3571 C 16.7205 21.7846 14.7953 23.2285 11.5307 23.2285 Z M 6.9059 35.8892 L 6.9059 27.5813 L 12.1585 27.5813 C 15.8416 27.5813 17.8715 29.0043 17.8715 31.6830 C 17.8715 34.4243 15.9043 35.8892 12.3049 35.8892 Z M 32.8550 47.6920 L 54.7447 47.6920 C 55.4351 47.6920 56 47.1688 56 46.4573 C 56 45.7458 55.4351 45.2016 54.7447 45.2016 L 32.8550 45.2016 C 32.1854 45.2016 31.6204 45.7458 31.6204 46.4573 C 31.6204 47.1688 32.1854 47.6920 32.8550 47.6920 Z"
  }));
}

export default BoldUnderline;