function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowDownCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 41.1953 C 27.4374 41.1953 27.0155 40.9844 26.4999 40.4687 L 17.8514 31.8203 C 17.5234 31.4922 17.3358 31.0469 17.3358 30.5078 C 17.3358 29.4531 18.1093 28.6328 19.1874 28.6328 C 19.7265 28.6328 20.2187 28.8906 20.5468 29.1953 L 23.7109 32.4063 L 26.2655 35.4531 L 26.0780 30.0625 L 26.0780 16.7734 C 26.0780 15.6484 26.8749 14.8750 27.9999 14.8750 C 29.1249 14.8750 29.9218 15.6484 29.9218 16.7734 L 29.9218 30.0625 L 29.7109 35.4766 L 32.3124 32.4063 L 35.4530 29.1953 C 35.7812 28.8672 36.2499 28.6328 36.8124 28.6328 C 37.8671 28.6328 38.6874 29.4531 38.6874 30.5078 C 38.6874 31.0469 38.4530 31.4922 38.1483 31.8203 L 29.5234 40.4687 C 29.0077 40.9609 28.5624 41.1953 27.9999 41.1953 Z"
  }));
}

export default ArrowDownCircleFill;