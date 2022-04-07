function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function XmarkSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 20.0195 37.8789 C 20.5351 37.8789 21.0039 37.6680 21.3554 37.2930 L 28.0117 30.6367 L 34.6679 37.2930 C 35.0195 37.6445 35.4882 37.8789 36.0273 37.8789 C 37.0585 37.8789 37.9023 37.0352 37.9023 35.9805 C 37.9023 35.4414 37.6913 35.0196 37.3398 34.6445 L 30.6835 27.9883 L 37.3632 21.2852 C 37.7382 20.8867 37.9257 20.4883 37.9257 19.9727 C 37.9257 18.9414 37.0820 18.0977 36.0507 18.0977 C 35.5585 18.0977 35.1366 18.2852 34.7382 18.6836 L 28.0117 25.3633 L 21.3085 18.7071 C 20.9570 18.3320 20.5351 18.1445 20.0195 18.1445 C 18.9648 18.1445 18.1444 18.9649 18.1444 19.9961 C 18.1444 20.5118 18.3320 20.9571 18.7070 21.3086 L 25.3632 27.9883 L 18.7070 34.6680 C 18.3320 35.0196 18.1444 35.4649 18.1444 35.9805 C 18.1444 37.0352 18.9648 37.8789 20.0195 37.8789 Z"
  }));
}

export default XmarkSquare;