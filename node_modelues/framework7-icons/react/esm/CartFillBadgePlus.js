function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CartFillBadgePlus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 45.4157 28.7296 C 51.1548 28.7296 56 23.9261 56 18.1659 C 56 12.3642 51.2174 7.6022 45.4157 7.6022 C 39.6349 7.6022 34.8519 12.3642 34.8519 18.1659 C 34.8519 23.9677 39.6349 28.7296 45.4157 28.7296 Z M 16.9061 42.0175 L 41.1736 42.0175 C 41.9844 42.0175 42.6914 41.3520 42.6914 40.4579 C 42.6914 39.5637 41.9844 38.8982 41.1736 38.8982 L 17.2596 38.8982 C 16.0743 38.8982 15.3673 38.0665 15.1593 36.7980 L 14.8266 34.6146 L 41.2153 34.6146 C 43.3779 34.6146 44.7918 33.6788 45.5196 32.0152 L 45.6861 31.5785 C 37.9919 31.5577 32.0031 25.6312 32.0031 18.1659 C 32.0031 17.5421 32.0446 16.9182 32.1278 16.2944 L 12.1649 16.2944 L 11.7698 13.6535 C 11.5203 12.0523 10.9796 11.2413 8.8586 11.2413 L 1.5388 11.2413 C .7070 11.2413 0 11.9691 0 12.8009 C 0 13.6535 .7070 14.3813 1.5388 14.3813 L 8.5674 14.3813 L 11.8946 37.2139 C 12.3312 40.1668 13.8909 42.0175 16.9061 42.0175 Z M 45.4366 25.0282 C 44.7088 25.0282 44.0640 24.5291 44.0640 23.7389 L 44.0640 19.4344 L 40.0923 19.4344 C 39.3853 19.4344 38.8236 18.8521 38.8236 18.1659 C 38.8236 17.4589 39.3853 16.8767 40.0923 16.8767 L 44.0640 16.8767 L 44.0640 12.5721 C 44.0640 11.7820 44.7088 11.3037 45.4366 11.3037 C 46.1644 11.3037 46.7879 11.7820 46.7879 12.5721 L 46.7879 16.8767 L 50.7600 16.8767 C 51.4670 16.8767 52.0492 17.4589 52.0492 18.1659 C 52.0492 18.8521 51.4670 19.4344 50.7600 19.4344 L 46.7879 19.4344 L 46.7879 23.7389 C 46.7879 24.5291 46.1644 25.0282 45.4366 25.0282 Z M 15.1801 48.7549 C 15.1801 50.6473 16.6565 52.1237 18.5489 52.1237 C 20.4204 52.1237 21.9176 50.6473 21.9176 48.7549 C 21.9176 46.8834 20.4204 45.3862 18.5489 45.3862 C 16.6565 45.3862 15.1801 46.8834 15.1801 48.7549 Z M 34.6024 48.7549 C 34.6024 50.6473 36.1204 52.1237 38.0127 52.1237 C 39.8844 52.1237 41.3814 50.6473 41.3814 48.7549 C 41.3814 46.8834 39.8844 45.3862 38.0127 45.3862 C 36.1204 45.3862 34.6024 46.8834 34.6024 48.7549 Z"
  }));
}

export default CartFillBadgePlus;