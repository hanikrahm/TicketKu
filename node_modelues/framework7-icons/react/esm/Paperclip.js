function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Paperclip(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 44.0899 28.8672 L 26.8634 46.0937 C 22.3868 50.5937 16.3634 50.1484 12.5196 46.2578 C 8.6525 42.4140 8.2072 36.4375 12.7072 31.9375 L 36.1915 8.4531 C 38.8868 5.7578 42.8478 5.3828 45.4259 7.9375 C 47.9806 10.5390 47.6056 14.4765 44.9337 17.1719 L 21.9884 40.1406 C 20.8165 41.3359 19.4337 40.9844 18.6134 40.1875 C 17.8165 39.3672 17.4884 38.0078 18.6603 36.8125 L 34.6915 20.8047 C 35.3946 20.0781 35.4415 19.0468 34.7618 18.3672 C 34.0821 17.7109 33.0509 17.7578 32.3478 18.4609 L 16.2462 34.5625 C 13.8556 36.9531 13.9493 40.6094 16.0587 42.7187 C 18.3556 45.0156 21.8478 44.9687 24.2384 42.5547 L 47.3243 19.4922 C 51.7069 15.1094 51.4962 9.3437 47.6993 5.5234 C 43.9493 1.7968 38.1134 1.5156 33.7072 5.8984 L 10.0821 29.5468 C 4.2931 35.3359 4.7384 43.6094 9.9650 48.8359 C 15.1915 54.0390 23.4650 54.4844 29.2540 48.7187 L 46.5978 31.3750 C 47.3009 30.6953 47.2774 29.4531 46.5743 28.8203 C 45.8946 28.0937 44.7931 28.1875 44.0899 28.8672 Z"
  }));
}

export default Paperclip;