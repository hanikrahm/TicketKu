function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function HeartSlashCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 36.9296 40.7500 C 37.3280 41.1484 38.0077 41.1484 38.4062 40.7500 C 38.8046 40.3516 38.8280 39.6484 38.4062 39.25 L 15.9765 16.8437 C 15.5546 16.4453 14.8749 16.4453 14.4765 16.8437 C 14.0546 17.2422 14.0546 17.9453 14.4765 18.3437 Z M 22.7030 18.3203 C 21.7655 18.3203 20.8514 18.5078 20.0780 18.8125 L 36.4609 35.1719 C 39.0624 32.3828 41.1014 29.0547 41.1014 25.6094 C 41.1014 21.3672 38.1952 18.3203 34.1405 18.3203 C 31.6093 18.3203 29.5702 19.7734 28.4218 21.9531 C 27.2265 19.7734 25.2109 18.3203 22.7030 18.3203 Z M 16.3983 22.3750 C 15.9765 23.3125 15.7421 24.4141 15.7421 25.6094 C 15.7421 31.8672 22.3749 37.6328 27.2265 40.7734 C 27.6014 41.0312 28.0234 41.3125 28.4218 41.2891 C 28.7968 41.2891 29.2187 41.0312 29.5936 40.7734 C 30.5546 40.1406 31.5858 39.4375 32.6405 38.5937 Z"
  }));
}

export default HeartSlashCircle;