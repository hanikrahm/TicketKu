function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquareArrowUpOnSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 22.3101 30.2580 C 23.1928 30.2580 23.9318 29.5190 23.9318 28.6568 L 23.9318 7.5746 L 23.8087 4.5159 L 25.2046 5.9734 L 28.3043 9.2784 C 28.5917 9.6069 29.0227 9.7711 29.4128 9.7711 C 30.2750 9.7711 30.9113 9.1553 30.9113 8.3342 C 30.9113 7.8825 30.7471 7.5541 30.4392 7.2462 L 23.5008 .5541 C 23.0902 .1434 22.7207 0 22.3101 0 C 21.8791 0 21.5301 .1434 21.1195 .5541 L 14.1811 7.2462 C 13.8732 7.5541 13.6884 7.8825 13.6884 8.3342 C 13.6884 9.1553 14.3042 9.7711 15.1664 9.7711 C 15.5770 9.7711 16.0081 9.6069 16.2954 9.2784 L 19.4157 5.9734 L 20.8116 4.4954 L 20.6679 7.5746 L 20.6679 28.6568 C 20.6679 29.5190 21.4274 30.2580 22.3101 30.2580 Z M 10.5271 46.3313 L 15.9670 46.3313 L 15.9670 49.6364 C 15.9670 53.8651 18.1224 56.0000 22.3923 56.0000 L 44.3365 56.0000 C 48.6268 56.0000 50.7617 53.8856 50.7617 49.6364 L 50.7617 28.0410 C 50.7617 23.8122 48.6268 21.6773 44.3365 21.6773 L 40.5184 21.6773 L 40.5184 19.7272 C 40.5184 15.4984 38.3835 13.3635 34.0726 13.3635 L 28.3658 13.3635 L 28.3658 16.6685 L 34.0316 16.6685 C 36.0433 16.6685 37.2134 17.7565 37.2134 19.8914 L 37.2134 39.8035 C 37.2134 41.9384 36.0433 43.0263 34.0316 43.0263 L 10.5887 43.0263 C 8.5359 43.0263 7.3863 41.9384 7.3863 39.8035 L 7.3863 19.8914 C 7.3863 17.7565 8.5359 16.6685 10.5887 16.6685 L 16.2544 16.6685 L 16.2544 13.3635 L 10.5271 13.3635 C 6.2573 13.3635 4.0813 15.4779 4.0813 19.7272 L 4.0813 39.9677 C 4.0813 44.2170 6.2573 46.3313 10.5271 46.3313 Z M 22.4538 52.6950 C 20.4216 52.6950 19.2720 51.6070 19.2720 49.4721 L 19.2720 46.3313 L 34.0726 46.3313 C 38.3835 46.3313 40.5184 44.1964 40.5184 39.9677 L 40.5184 24.9823 L 44.2752 24.9823 C 46.3276 24.9823 47.4568 26.0908 47.4568 28.2257 L 47.4568 49.4721 C 47.4568 51.6070 46.3276 52.6950 44.2752 52.6950 Z"
  }));
}

export default SquareArrowUpOnSquare;