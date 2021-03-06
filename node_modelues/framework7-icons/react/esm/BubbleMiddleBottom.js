function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BubbleMiddleBottom(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9532 52.3633 C 29.0079 52.3633 29.9923 51.9180 30.9298 50.3008 L 35.2657 43.0586 L 43.0938 43.0586 C 50.0783 43.0586 53.8280 39.1914 53.8280 32.3242 L 53.8280 14.3711 C 53.8280 7.5039 50.0783 3.6367 43.0938 3.6367 L 12.9064 3.6367 C 5.9454 3.6367 2.1720 7.4805 2.1720 14.3711 L 2.1720 32.3242 C 2.1720 39.2148 5.9454 43.0586 12.9064 43.0586 L 20.6407 43.0586 L 24.9766 50.3008 C 25.9142 51.9180 26.8985 52.3633 27.9532 52.3633 Z M 27.9532 48.5195 L 24.0391 41.1836 C 23.2657 39.6602 22.7032 39.2852 21.0391 39.2852 L 12.9298 39.2852 C 8.1720 39.2852 5.9454 36.8711 5.9454 32.3008 L 5.9454 14.3711 C 5.9454 9.8008 8.1720 7.4101 12.9298 7.4101 L 43.0938 7.4101 C 47.8280 7.4101 50.0548 9.8008 50.0548 14.3711 L 50.0548 32.3008 C 50.0548 36.8711 47.8280 39.2852 43.0938 39.2852 L 34.8673 39.2852 C 33.2032 39.2852 32.6407 39.6602 31.8907 41.1836 Z"
  }));
}

export default BubbleMiddleBottom;