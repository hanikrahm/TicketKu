function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUturnLeftSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8399 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1601 8.9101 49.5742 13.7851 49.5742 Z M 40.5742 30.5899 C 40.5742 36.5195 36.2617 40.2226 30.4960 40.2226 L 27.1210 40.2226 C 26.0429 40.2226 25.2226 39.5899 25.2226 38.4883 C 25.2226 37.3399 26.0429 36.7070 27.0742 36.7070 L 30.4960 36.7070 C 34.2460 36.7070 36.9648 34.3164 36.9648 30.4023 C 36.9648 26.6055 34.1757 24.5195 30.5195 24.5195 L 23.1366 24.5195 L 20.2070 24.4258 L 21.6366 25.4804 L 24.7539 28.4570 C 25.1288 28.7852 25.2929 29.2773 25.2929 29.7226 C 25.2929 30.7539 24.5195 31.5273 23.5585 31.5273 C 23.0429 31.5273 22.6444 31.3633 22.3163 30.9883 L 15.7070 24.2617 C 15.3320 23.8633 15.0507 23.3711 15.0507 22.7852 C 15.0507 22.1992 15.3320 21.7070 15.7070 21.2852 L 22.2929 14.6523 C 22.6444 14.2773 23.0195 14.1133 23.5117 14.1133 C 24.5195 14.1133 25.2929 14.8633 25.2929 15.8711 C 25.2929 16.3867 25.0585 16.8320 24.7304 17.1367 L 22.1523 19.6445 L 20.2070 21.1914 L 23.1366 21.0977 L 30.5195 21.0977 C 36.2851 21.0977 40.5742 24.6601 40.5742 30.5899 Z"
  }));
}

export default ArrowUturnLeftSquareFill;