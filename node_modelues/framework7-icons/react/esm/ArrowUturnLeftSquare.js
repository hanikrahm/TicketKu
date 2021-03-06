function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUturnLeftSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8399 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1601 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4648 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4648 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 40.1523 30.7304 C 40.1523 25.1055 36.0742 21.6836 30.6132 21.6836 L 23.6054 21.6836 L 20.8398 21.7773 L 22.6913 20.3008 L 25.1054 17.9570 C 25.4335 17.6758 25.6444 17.2304 25.6444 16.7617 C 25.6444 15.7773 24.9179 15.0508 23.9570 15.0508 C 23.4648 15.0508 23.0898 15.2148 22.7617 15.5664 L 16.5273 21.8711 C 16.1523 22.2695 15.8944 22.7617 15.8944 23.3242 C 15.8944 23.8633 16.1523 24.3320 16.5273 24.7304 L 22.7851 31.1289 C 23.1132 31.4570 23.4882 31.5977 23.9804 31.5977 C 24.9179 31.5977 25.6444 30.8711 25.6444 29.9101 C 25.6444 29.4648 25.4804 28.9961 25.1288 28.6914 L 22.1992 25.8789 L 20.8398 24.8711 L 23.6054 24.9648 L 30.6132 24.9648 C 34.0585 24.9648 36.7070 26.9336 36.7070 30.5430 C 36.7070 34.2461 34.1288 36.5195 30.5898 36.5195 L 27.3320 36.5195 C 26.3241 36.5195 25.5507 37.1289 25.5507 38.2070 C 25.5507 39.2852 26.3241 39.8711 27.3788 39.8711 L 30.5898 39.8711 C 36.0507 39.8711 40.1523 36.3789 40.1523 30.7304 Z"
  }));
}

export default ArrowUturnLeftSquare;