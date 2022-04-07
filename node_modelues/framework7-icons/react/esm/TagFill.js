function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function TagFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 26.1133 51.2148 C 29.4649 54.5664 32.9102 54.6133 36.3555 51.1914 L 51.1913 36.3789 C 54.6132 32.9570 54.5662 29.4883 51.2148 26.1367 L 28.2930 3.2617 C 26.5352 1.5039 25.5508 1.3867 23.0664 1.3867 L 14.1602 1.3867 C 11.6758 1.3867 10.9024 1.9961 9.1446 3.7539 L 3.7539 9.1445 C 1.9727 10.9258 1.3868 11.6992 1.3868 14.1836 L 1.3868 23.0899 C 1.3868 25.5508 1.4805 26.5586 3.2617 28.3164 Z M 18.0977 20.1367 C 16.2695 20.1367 14.8868 18.7070 14.8868 16.9258 C 14.8868 15.1211 16.2695 13.7148 18.0977 13.7148 C 19.9258 13.7148 21.3086 15.1211 21.3086 16.9258 C 21.3086 18.7070 19.9258 20.1367 18.0977 20.1367 Z"
  }));
}

export default TagFill;