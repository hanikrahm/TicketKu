function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PersonCropCircleFillBadgeCheckmark(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 33.7033 50.6023 C 45.8956 50.6023 56 40.4980 56 28.3056 C 56 16.1355 45.8735 6.0088 33.6809 6.0088 C 22.4539 6.0088 12.9559 14.6536 11.6086 25.5437 C 18.5918 25.6560 24.4523 30.7755 25.6648 37.4668 C 28.0449 36.4563 30.8068 35.8725 33.7033 35.8725 C 39.2269 35.8725 44.0994 37.9383 47.0632 41.1267 C 43.6952 44.6071 38.9575 46.8076 33.6809 46.8076 C 30.5822 46.8076 27.6632 46.0217 25.1034 44.6969 C 24.6993 45.8870 24.1604 47.0096 23.4194 48.0650 C 26.5405 49.6817 30.0209 50.6023 33.7033 50.6023 Z M 33.6809 32.1002 C 29.3921 32.1002 26.1363 28.3505 26.1363 23.6800 C 26.1363 19.2566 29.4595 15.4170 33.6809 15.4170 C 37.9246 15.4170 41.2703 19.2566 41.2478 23.6800 C 41.2478 28.3505 37.9920 32.1002 33.6809 32.1002 Z M 11.4066 51.4555 C 17.6712 51.4555 22.8132 46.3360 22.8132 40.0489 C 22.8132 33.8068 17.6712 28.6424 11.4066 28.6424 C 5.1644 28.6424 0 33.8068 0 40.0489 C 0 46.3360 5.1644 51.4555 11.4066 51.4555 Z M 10.0593 46.7402 C 9.7001 46.7402 9.2510 46.5830 8.9591 46.2687 L 4.6479 41.5309 C 4.4908 41.3513 4.3785 40.9696 4.3785 40.6552 C 4.3785 39.8918 4.9847 39.2855 5.7482 39.2855 C 6.1973 39.2855 6.5565 39.4876 6.8035 39.7570 L 9.9920 43.2149 L 15.9423 34.9743 C 16.1893 34.6151 16.5934 34.3681 17.0874 34.3681 C 17.8284 34.3681 18.4795 34.9519 18.4795 35.7153 C 18.4795 35.9623 18.3673 36.2542 18.1652 36.5461 L 11.2045 46.2238 C 10.9800 46.5381 10.5309 46.7402 10.0593 46.7402 Z"
  }));
}

export default PersonCropCircleFillBadgeCheckmark;