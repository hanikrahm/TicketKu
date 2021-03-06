function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquareArrowDownOnSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 22.3527 32.1930 C 22.7817 32.1930 23.1678 32.0429 23.5967 31.6139 L 30.8461 24.6220 C 31.1678 24.3003 31.3393 23.9571 31.3393 23.4852 C 31.3393 22.6059 30.6745 21.9839 29.7737 21.9839 C 29.3661 21.9839 28.9158 22.1555 28.6155 22.4986 L 25.3769 25.9518 L 23.9184 27.4745 L 24.0471 24.2788 L 24.0471 1.6515 C 24.0471 .7507 23.2750 0 22.3527 0 C 21.4305 0 20.6369 .7507 20.6369 1.6515 L 20.6369 24.2788 L 20.7871 27.4745 L 19.3286 25.9518 L 16.0686 22.4986 C 15.7683 22.1555 15.3179 21.9839 14.8890 21.9839 C 13.9882 21.9839 13.3447 22.6059 13.3447 23.4852 C 13.3447 23.9571 13.5378 24.3003 13.8595 24.6220 L 21.1088 31.6139 C 21.5378 32.0429 21.9024 32.1930 22.3527 32.1930 Z M 10.0418 46.2842 L 16.0900 46.2842 L 16.0900 49.3512 C 16.0900 53.7909 18.3206 56.0000 22.8031 56.0000 L 45.3661 56.0000 C 49.8271 56.0000 52.0791 53.7694 52.0791 49.3512 L 52.0791 27.0027 C 52.0791 22.5844 49.8271 20.3539 45.3661 20.3539 L 41.3769 20.3539 L 41.3769 17.5014 C 41.3769 13.0831 39.1463 10.8526 34.6423 10.8526 L 28.4654 10.8526 L 28.4654 14.3056 L 34.5994 14.3056 C 36.7013 14.3056 37.9238 15.4638 37.9238 17.6944 L 37.9238 39.4638 C 37.9238 41.6944 36.7013 42.8311 34.5994 42.8311 L 10.1061 42.8311 C 7.9614 42.8311 6.7603 41.6944 6.7603 39.4638 L 6.7603 17.6944 C 6.7603 15.4638 7.9614 14.3056 10.1061 14.3056 L 16.2402 14.3056 L 16.2402 10.8526 L 10.0418 10.8526 C 5.5807 10.8526 3.3072 13.0831 3.3072 17.5014 L 3.3072 39.6354 C 3.3072 44.0751 5.5807 46.2842 10.0418 46.2842 Z M 22.8675 52.5469 C 20.7227 52.5469 19.5431 51.3887 19.5431 49.1796 L 19.5431 46.2842 L 34.6423 46.2842 C 39.1463 46.2842 41.3769 44.0536 41.3769 39.6354 L 41.3769 23.8070 L 45.3020 23.8070 C 47.4253 23.8070 48.6262 24.9437 48.6262 27.1743 L 48.6262 49.1796 C 48.6262 51.3887 47.4253 52.5469 45.3020 52.5469 Z"
  }));
}

export default SquareArrowDownOnSquare;