function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PersonBadgeMinus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 33.7304 24.1211 C 39.3085 24.1211 43.8554 19.1523 43.8554 13.1055 C 43.8554 7.1055 39.3554 2.3945 33.7304 2.3945 C 28.1757 2.3945 23.6054 7.1992 23.6054 13.1523 C 23.6288 19.1758 28.1757 24.1211 33.7304 24.1211 Z M 33.7304 20.5821 C 30.3085 20.5821 27.3788 17.3008 27.3788 13.1523 C 27.3788 9.0742 30.2616 5.9336 33.7304 5.9336 C 37.2460 5.9336 40.0819 9.0274 40.0819 13.1055 C 40.0819 17.2539 37.1991 20.5821 33.7304 20.5821 Z M 33.7304 27.0274 C 29.4882 27.0274 25.7851 28.0117 22.7851 29.6055 C 23.7694 30.3789 24.6600 31.2695 25.4335 32.3008 C 27.7304 31.2461 30.5194 30.5664 33.7304 30.5664 C 44.4647 30.5664 50.4178 37.7617 50.4178 41.6055 C 50.4178 42.0977 50.1835 42.2617 49.5739 42.2617 L 28.8319 42.2617 C 28.8085 43.4805 28.5975 44.6758 28.2460 45.8008 L 48.4493 45.8008 C 52.3397 45.8008 54.1915 44.6289 54.1915 42.0508 C 54.1915 35.9102 46.4333 27.0274 33.7304 27.0274 Z M 13.7147 53.6055 C 20.2538 53.6055 25.621 48.2383 25.621 41.6992 C 25.621 35.1601 20.2538 29.7930 13.7147 29.7930 C 7.1991 29.7930 1.8085 35.1601 1.8085 41.6992 C 1.8085 48.2383 7.1991 53.6055 13.7147 53.6055 Z M 7.6913 43.1289 C 6.9178 43.1289 6.2616 42.4492 6.2616 41.6992 C 6.2616 40.9258 6.9178 40.2695 7.6913 40.2695 L 19.7382 40.2695 C 20.5351 40.2695 21.1913 40.9258 21.1913 41.6992 C 21.1913 42.4492 20.5351 43.1289 19.7382 43.1289 Z"
  }));
}

export default PersonBadgeMinus;