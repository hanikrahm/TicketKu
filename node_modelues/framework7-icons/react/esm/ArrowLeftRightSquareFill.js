function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowLeftRightSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 12.4257 27.9414 C 12.4257 27.4023 12.6601 26.9571 13.1757 26.4414 L 21.6835 17.8633 C 22.0351 17.5352 22.5039 17.3477 23.0429 17.3477 C 24.0976 17.3477 24.8944 18.1680 24.8944 19.1992 C 24.8944 19.7617 24.6601 20.2305 24.3085 20.5820 L 21.1913 23.6758 L 18.1444 26.2305 L 23.5351 26.0196 L 33.6835 26.0196 L 39.0742 26.2305 L 36.0273 23.6758 L 32.9101 20.5820 C 32.5585 20.2305 32.3241 19.7617 32.3241 19.1992 C 32.3241 18.1680 33.1210 17.3477 34.1757 17.3477 C 34.7148 17.3477 35.1835 17.5352 35.5117 17.8633 L 44.0429 26.4414 C 44.5585 26.9571 44.7929 27.4023 44.7929 27.9414 C 44.7929 28.5274 44.5351 28.9727 44.0429 29.4649 L 35.5117 37.9961 C 35.1835 38.3242 34.7148 38.5352 34.1757 38.5352 C 33.1210 38.5352 32.3241 37.6914 32.3241 36.6602 C 32.3241 36.0977 32.5351 35.6289 32.9101 35.3008 L 36.0273 32.2305 L 39.0976 29.6523 L 33.6835 29.8633 L 23.5351 29.8633 L 18.1210 29.6523 L 21.1913 32.2305 L 24.3085 35.3008 C 24.6835 35.6289 24.8944 36.0977 24.8944 36.6602 C 24.8944 37.6914 24.0976 38.5352 23.0429 38.5352 C 22.5039 38.5352 22.0351 38.3242 21.6835 37.9961 L 13.1757 29.4649 C 12.6835 28.9727 12.4257 28.5274 12.4257 27.9414 Z"
  }));
}

export default ArrowLeftRightSquareFill;