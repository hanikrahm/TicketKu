function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function TBubble(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 16.5860 52.2461 C 17.7579 52.2461 18.5548 51.6367 19.9610 50.3711 L 28.0704 43.1758 L 43.0938 43.1758 C 50.0783 43.1758 53.8280 39.3086 53.8280 32.4414 L 53.8280 14.4883 C 53.8280 7.6211 50.0783 3.7539 43.0938 3.7539 L 12.9064 3.7539 C 5.9454 3.7539 2.1720 7.5976 2.1720 14.4883 L 2.1720 32.4414 C 2.1720 39.3320 5.9454 43.1758 12.9064 43.1758 L 14.0313 43.1758 L 14.0313 49.2695 C 14.0313 51.0742 14.9688 52.2461 16.5860 52.2461 Z M 17.5469 47.9570 L 17.5469 41.1602 C 17.5469 39.8945 17.0782 39.4023 15.7891 39.4023 L 12.9298 39.4023 C 8.1720 39.4023 5.9454 36.9883 5.9454 32.4180 L 5.9454 14.4883 C 5.9454 9.9180 8.1720 7.5273 12.9298 7.5273 L 43.0938 7.5273 C 47.8280 7.5273 50.0548 9.9180 50.0548 14.4883 L 50.0548 32.4180 C 50.0548 36.9883 47.8280 39.4023 43.0938 39.4023 L 27.9064 39.4023 C 26.6173 39.4023 25.9376 39.5898 25.0469 40.5039 Z M 27.9532 34.2227 C 29.1954 34.2227 29.8516 33.4024 29.8516 32.1133 L 29.8516 16.9024 L 35.6876 16.9024 C 36.5782 16.9024 37.2344 16.3164 37.2344 15.3789 C 37.2344 14.4180 36.5782 13.8320 35.6876 13.8320 L 20.3360 13.8320 C 19.4454 13.8320 18.7891 14.4180 18.7891 15.3789 C 18.7891 16.3164 19.4454 16.9024 20.3360 16.9024 L 26.1016 16.9024 L 26.1016 32.1133 C 26.1016 33.3555 26.7579 34.2227 27.9532 34.2227 Z"
  }));
}

export default TBubble;