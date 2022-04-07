function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PhoneDownCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 27.9765 20.9219 C 36.5546 20.9219 44.3827 23.5234 44.3827 29.6172 L 44.3827 30.4609 C 44.3827 32.3125 43.3749 33.4375 41.4530 33.1797 C 39.9530 32.9453 38.4999 32.7109 36.1796 32.2656 C 34.3983 31.9609 33.9296 31.1172 33.9062 29.5469 L 33.8827 28.1640 C 33.8827 27.7656 33.5077 27.4375 33.1562 27.3438 C 32.1718 27.0860 30.2968 26.9219 27.9999 26.9219 C 25.7030 26.9219 23.7577 27.1562 22.8436 27.3438 C 22.4921 27.4375 22.0936 27.6719 22.0936 28.1640 L 22.0936 29.5469 C 22.0702 31.1406 21.5780 31.9609 19.8202 32.2656 C 17.4062 32.7344 15.9765 32.9453 14.5234 33.1797 C 12.6014 33.4375 11.5936 32.2891 11.5936 30.4609 L 11.5936 29.6172 C 11.5936 23.5000 19.4452 20.9219 27.9765 20.9219 Z"
  }));
}

export default PhoneDownCircleFill;