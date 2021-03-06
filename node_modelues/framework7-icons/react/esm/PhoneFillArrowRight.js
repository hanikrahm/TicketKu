function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PhoneFillArrowRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 6.6133 28.0000 C 6.6133 36.8125 8.6758 45.4844 13.3164 50.1484 C 15.5195 52.3750 18.2851 53.6875 21.7773 53.6172 C 25.1289 53.5469 27.7070 51.4141 27.1211 48.1328 L 25.6914 39.8125 C 25.2227 37.0234 24.0508 35.9922 21.0976 35.9922 L 19.5508 35.9922 C 17.0195 35.9922 16.6680 33.6250 16.6680 28.0000 C 16.6680 22.3750 17.0195 20.0078 19.5508 20.0078 L 21.0976 20.0078 C 24.0039 20.0078 25.1992 19.0000 25.6914 16.1875 L 27.1211 7.8672 C 27.7070 4.5625 25.1289 2.4531 21.7773 2.3828 C 18.2851 2.3125 15.5195 3.6250 13.3164 5.8281 C 8.6758 10.4922 6.6133 19.1641 6.6133 28.0000 Z M 26.8633 29.6641 L 39.0976 29.6641 L 44.3711 29.4297 L 39.2617 34.0234 L 36.8008 36.4844 C 36.4727 36.8125 36.2851 37.2578 36.2851 37.7500 C 36.2851 38.7109 36.9883 39.3672 37.9023 39.3672 C 38.3711 39.3672 38.8164 39.1797 39.1445 38.8516 L 48.7539 29.2422 C 49.1758 28.8437 49.3867 28.3984 49.3867 28.0000 C 49.3867 27.6016 49.1758 27.1328 48.7539 26.7344 L 39.1445 17.1484 C 38.8164 16.8203 38.3711 16.6328 37.9023 16.6328 C 36.9883 16.6328 36.2851 17.2890 36.2851 18.2266 C 36.2851 18.7422 36.4727 19.1641 36.8008 19.4922 L 39.2617 21.9766 L 44.3711 26.5469 L 39.0976 26.3125 L 26.8398 26.3125 C 25.7851 26.3125 25.1523 27.1328 25.1523 28.0000 C 25.1523 28.8672 25.7851 29.6641 26.8633 29.6641 Z"
  }));
}

export default PhoneFillArrowRight;