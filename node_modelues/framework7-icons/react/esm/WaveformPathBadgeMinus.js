function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function WaveformPathBadgeMinus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 19.2357 30.6549 C 20.0893 31.3419 20.8179 32.1121 21.4633 32.9657 L 22.3376 27.0742 L 25.3146 52.8259 C 25.5019 54.3665 27.7086 54.3457 27.8335 52.8259 L 30.5815 22.1195 L 33.3086 52.8051 C 33.4336 54.3665 35.6403 54.3665 35.8276 52.8051 L 38.8046 27.0742 L 41.3651 43.7910 C 41.5318 45.0609 43.5719 45.0609 43.8635 43.7910 L 46.7571 30.3634 L 47.3817 32.8824 C 47.5689 33.5694 48.0477 33.8192 48.6096 33.8192 L 54.5223 33.8192 C 55.3549 33.8192 56 33.1738 56 32.3619 C 56 31.5500 55.3549 30.8839 54.5223 30.8839 L 49.5259 30.8839 L 47.8605 24.4303 C 47.4858 23.0355 45.6746 23.0355 45.3830 24.4303 L 42.8015 36.5880 L 39.8665 17.4147 C 39.6371 15.8950 37.5347 15.9366 37.3473 17.4355 L 34.7243 40.1895 L 31.8514 7.7136 C 31.7056 6.1522 29.4365 6.1522 29.2908 7.7136 L 26.4179 40.1895 L 23.7948 17.4355 C 23.6075 15.8950 21.5049 15.8950 21.2759 17.4147 Z M 15.7800 24.4303 C 15.4885 23.1396 13.6357 23.1396 13.2818 24.4303 L 12.5116 27.4073 C 14.0104 27.6155 15.4052 28.0735 16.6751 28.7188 Z M 10.5755 51.2438 C 16.3837 51.2438 21.1510 46.4973 21.1510 40.6683 C 21.1510 34.8601 16.3837 30.0928 10.5755 30.0928 C 4.7881 30.0928 0 34.8601 0 40.6683 C 0 46.4973 4.7881 51.2438 10.5755 51.2438 Z M 5.2253 41.9382 C 4.5383 41.9382 3.9554 41.3345 3.9554 40.6683 C 3.9554 39.9813 4.5383 39.3984 5.2253 39.3984 L 15.9257 39.3984 C 16.6335 39.3984 17.2164 39.9813 17.2164 40.6683 C 17.2164 41.3345 16.6335 41.9382 15.9257 41.9382 Z"
  }));
}

export default WaveformPathBadgeMinus;