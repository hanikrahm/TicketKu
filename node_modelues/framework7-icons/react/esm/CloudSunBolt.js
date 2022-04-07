function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudSunBolt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 36.0607 8.1763 C 36.9284 8.1763 37.6614 7.4242 37.6614 6.5757 L 37.6614 2.4103 C 37.6614 1.5233 36.9284 .8100 36.0607 .8100 C 35.1736 .8100 34.4408 1.5233 34.4408 2.4103 L 34.4408 6.5757 C 34.4408 7.4242 35.1736 8.1763 36.0607 8.1763 Z M 24.8568 11.8980 C 25.4931 12.5344 26.5538 12.5151 27.1515 11.8980 C 27.7301 11.2810 27.7493 10.2589 27.1515 9.6611 L 24.1626 6.6722 C 23.5455 6.0551 22.5427 6.0551 21.9256 6.6722 C 21.3086 7.2892 21.3086 8.3113 21.9256 8.9283 Z M 44.9696 11.8980 C 45.5675 12.5151 46.6089 12.5344 47.2452 11.8980 L 50.1763 8.9283 C 50.7936 8.3113 50.7936 7.2892 50.1763 6.6722 C 49.5595 6.0551 48.5563 6.0551 47.9394 6.6722 L 44.9696 9.6611 C 44.3527 10.2589 44.3720 11.2810 44.9696 11.8980 Z M 8.1763 39.7438 L 29.0413 39.7438 C 34.6143 39.7438 38.9338 35.5206 38.9338 30.1019 C 38.9338 30.0248 38.9338 29.9669 38.9338 29.9284 C 42.8294 28.6556 45.5868 25.0689 45.5868 20.8071 C 45.5868 15.5041 41.3445 11.2424 36.0607 11.2424 C 31.7604 11.2424 28.1736 14.0193 26.9587 17.8953 C 24.6447 15.2534 21.4050 13.7300 17.7411 13.7300 C 11.3581 13.7300 6.0165 18.6473 5.3802 24.9917 C 2.1598 25.9945 0 28.7713 0 32.2810 C 0 36.6198 3.2590 39.7438 8.1763 39.7438 Z M 36.0607 14.0771 C 39.8208 14.0771 42.7520 17.0082 42.7520 20.8071 C 42.7520 23.6804 41.0167 26.1102 38.4710 27.0936 C 37.2368 23.4105 33.7466 20.8264 29.3499 20.5564 C 29.4656 16.8925 32.3775 14.0771 36.0607 14.0771 Z M 8.0992 36.6584 C 4.8210 36.6584 3.0854 34.7686 3.0854 32.3581 C 3.0854 30.3140 4.2810 28.5206 7.1157 27.7493 C 8.0413 27.5179 8.3885 27.0936 8.4656 26.1102 C 8.9091 20.7107 12.9201 16.8154 17.7411 16.8154 C 21.4821 16.8154 24.3940 18.8788 26.1873 22.4848 C 26.5923 23.2947 27.0744 23.5840 28.0579 23.5840 C 33.0331 23.5840 35.8485 26.5923 35.8485 30.1790 C 35.8485 33.7658 32.9174 36.6584 29.0992 36.6584 Z M 50.2534 22.4077 L 54.4187 22.4077 C 55.2864 22.4077 56.0000 21.6942 56.0000 20.8071 C 56.0000 19.9201 55.2864 19.2066 54.4187 19.2066 L 50.2534 19.2066 C 49.3857 19.2066 48.6531 19.9201 48.6531 20.8071 C 48.6531 21.6942 49.3857 22.4077 50.2534 22.4077 Z M 47.9394 34.9614 C 48.5563 35.5785 49.5595 35.5592 50.1763 34.9421 C 50.7936 34.3251 50.7936 33.3030 50.1763 32.6859 L 47.2065 29.7355 C 46.5896 29.1377 45.5868 29.1184 44.9696 29.7355 C 44.3527 30.3526 44.3527 31.3746 44.9696 31.9917 Z M 24.0468 46.5703 L 20.2094 46.5703 L 21.9642 43.2149 C 22.1956 42.7906 22.0221 42.4821 21.5978 42.4821 L 17.5675 42.4821 C 17.0468 42.4821 16.8540 42.6942 16.6805 43.0606 L 14.2314 48.6722 C 14.0193 49.1350 14.2314 49.4242 14.7135 49.4242 L 17.9532 49.4242 L 15.4656 55.4022 C 15.3691 55.6529 15.4270 55.8650 15.6006 55.9229 C 15.7741 56 15.9863 55.9421 16.1791 55.7300 L 24.3361 47.4959 C 24.7218 47.0909 24.5868 46.5703 24.0468 46.5703 Z"
  }));
}

export default CloudSunBolt;