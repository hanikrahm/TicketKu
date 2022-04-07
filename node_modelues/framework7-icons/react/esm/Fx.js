function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Fx(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 28.7500 45.3320 C 29.5469 45.3320 29.9922 45.0742 30.5781 44.2305 L 39.9532 31.4336 L 40.0937 31.4336 L 49.3986 44.2539 C 49.9376 45.0508 50.4767 45.3320 51.3205 45.3320 C 52.5392 45.3320 53.4296 44.4648 53.4296 43.2695 C 53.4296 42.7539 53.2424 42.2148 52.9376 41.7695 L 42.7656 28.0586 L 53.1954 14.0898 C 53.5468 13.6445 53.7109 13.1524 53.7109 12.6602 C 53.7109 11.5586 52.7970 10.6680 51.6954 10.6680 C 50.8280 10.6680 50.3360 10.9492 49.7500 11.7930 L 40.3984 24.7539 L 40.2578 24.7539 L 30.9532 11.7930 C 30.3672 10.9258 29.8984 10.6680 28.9844 10.6680 C 27.7422 10.6680 26.8516 11.5117 26.8516 12.6836 C 26.8516 13.1992 27.0156 13.7149 27.3672 14.1836 L 37.4219 27.9180 L 27.1797 41.8867 C 26.8281 42.3555 26.6641 42.8477 26.6641 43.3398 C 26.6641 44.4648 27.5781 45.3320 28.7500 45.3320 Z M 4.4453 45.2383 C 5.7578 45.2383 6.6250 44.3945 6.6250 43.0586 L 6.6250 30.2383 L 20.3828 30.2383 C 21.5313 30.2383 22.3516 29.5117 22.3516 28.3633 C 22.3516 27.1914 21.5313 26.4649 20.3828 26.4649 L 6.6250 26.4649 L 6.6250 15.0273 L 21.7422 15.0273 C 22.8906 15.0273 23.7344 14.3008 23.7344 13.1055 C 23.7344 11.9102 22.8906 11.1602 21.7422 11.1602 L 4.4219 11.1602 C 3.1094 11.1602 2.2891 12.0039 2.2891 13.3164 L 2.2891 43.0586 C 2.2891 44.3945 3.1094 45.2383 4.4453 45.2383 Z"
  }));
}

export default Fx;