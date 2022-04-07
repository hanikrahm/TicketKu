function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function LinkCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 38.0780 17.4531 C 35.2890 14.6875 31.8202 14.9219 28.5858 18.1563 L 25.2577 21.4844 C 21.9530 24.7656 21.6718 28.2578 24.4843 31.0469 C 25.2577 31.8437 26.1249 32.3594 26.7577 32.4766 C 27.3905 32.0312 28.1405 31.2109 28.4687 30.4609 C 27.4609 30.2968 26.6874 29.9453 26.1483 29.4063 C 24.4140 27.6484 24.6718 25.3281 26.9687 23.0781 L 30.1796 19.8437 C 32.3593 17.6641 34.6796 17.4063 36.4140 19.1406 C 38.1718 20.8750 37.9609 23.1953 35.7343 25.3750 L 33.4140 27.6719 C 33.7655 28.5156 33.7890 29.8047 33.4374 30.9063 L 37.4218 26.9688 C 40.6327 23.7109 40.8905 20.2656 38.0780 17.4531 Z M 17.0780 38.5 C 19.8671 41.2656 23.3358 41.0312 26.5702 37.7968 L 29.8983 34.4688 C 33.2030 31.1875 33.4843 27.6953 30.6718 24.9063 C 29.8983 24.1094 29.0312 23.5937 28.3983 23.4766 C 27.7655 23.9219 27.0155 24.7422 26.6874 25.4922 C 27.6952 25.6563 28.4687 26.0078 29.0077 26.5469 C 30.7421 28.3047 30.4843 30.6016 28.1874 32.8516 L 24.9765 36.1094 C 22.7968 38.2890 20.4765 38.5469 18.7421 36.8125 C 16.9843 35.0781 17.1952 32.7578 19.4218 30.5781 L 21.7421 28.2812 C 21.3905 27.4141 21.3671 26.1484 21.7187 25.0469 L 17.7343 28.9844 C 14.5234 32.2422 14.2655 35.6875 17.0780 38.5 Z"
  }));
}

export default LinkCircle;