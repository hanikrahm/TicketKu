function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function RotateRightFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 7.7265 25.1056 C 8.2656 24.8477 8.5000 24.4493 8.4765 23.7930 C 8.4062 22.9493 7.4452 21.7774 7.4452 18.6603 C 7.4452 13.6446 10.6796 10.1056 15.7421 10.1056 L 15.8124 10.1056 L 15.8124 13.3399 C 15.8124 15.1915 17.2656 15.6134 18.6718 14.5587 L 25.0702 9.8946 C 26.1484 9.1212 26.1484 8.2071 25.0702 7.4103 L 18.6718 2.7227 C 17.2421 1.6444 15.8124 2.0665 15.8124 3.9649 L 15.8124 7.4103 L 15.7187 7.4103 C 8.9921 7.4103 4.5156 11.9337 4.5156 18.6368 C 4.5156 21.1446 5.0312 23.2071 5.7578 24.4493 C 6.1562 25.1290 7.0000 25.4571 7.7265 25.1056 Z M 45.4609 54.3556 C 49.4689 54.3556 51.4844 52.4337 51.4844 48.3321 L 51.4844 25.1524 C 51.4844 21.0508 49.4689 19.1290 45.4609 19.1290 L 22.2343 19.1290 C 18.2265 19.1290 16.2109 21.0508 16.2109 25.1524 L 16.2109 48.3321 C 16.2109 52.4337 18.2265 54.3556 22.2343 54.3556 Z"
  }));
}

export default RotateRightFill;