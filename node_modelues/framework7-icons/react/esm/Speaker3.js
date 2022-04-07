function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Speaker3(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 47.9372 49.3836 C 48.6739 49.8813 49.6496 49.6822 50.2269 48.8660 C 53.8697 43.6502 56 36.9414 56 29.8344 C 56 22.7274 53.8498 15.9987 50.2269 10.7829 C 49.6496 9.9667 48.6739 9.7676 47.9372 10.2852 C 47.1809 10.8028 47.0614 11.7982 47.6388 12.6343 C 50.8437 17.3524 52.8346 23.4043 52.8346 29.8344 C 52.8346 36.2645 50.9037 42.3961 47.6388 47.0345 C 47.0614 47.8507 47.1809 48.8461 47.9372 49.3836 Z M 22.7145 48.0100 C 24.0682 48.0100 25.0437 47.0146 25.0437 45.6808 L 25.0437 13.9283 C 25.0437 12.5945 24.0682 11.4797 22.6747 11.4797 C 21.6992 11.4797 21.0621 11.9575 19.9871 12.9130 L 10.6306 21.2144 C 10.5112 21.3339 10.3320 21.3936 10.1329 21.3936 L 4.2204 21.3936 C 1.3935 21.3936 0 22.8071 0 25.8131 L 0 33.7363 C 0 36.7423 1.3935 38.1558 4.2204 38.1558 L 10.1329 38.1558 C 10.3320 38.1558 10.5112 38.2155 10.6306 38.3349 L 19.9871 46.7160 C 20.9626 47.5919 21.7390 48.0100 22.7145 48.0100 Z M 39.9148 43.9489 C 40.6910 44.4664 41.6467 44.2674 42.2040 43.4711 C 44.8317 39.8081 46.3647 34.9307 46.3647 29.8344 C 46.3647 24.7182 44.8517 19.8408 42.2040 16.1778 C 41.6267 15.4014 40.6910 15.2024 39.9148 15.7200 C 39.1581 16.2376 39.0386 17.2130 39.6359 18.0691 C 41.8057 21.2543 43.1597 25.4349 43.1597 29.8344 C 43.1597 34.2340 41.8457 38.4544 39.6359 41.5998 C 39.0586 42.4558 39.1581 43.4313 39.9148 43.9489 Z M 21.5598 43.8095 C 21.4603 43.8095 21.3409 43.7498 21.2214 43.6303 L 12.4024 35.6872 C 11.9246 35.2493 11.5265 35.1497 10.9889 35.1497 L 4.3597 35.1497 C 3.5833 35.1497 3.2051 34.7914 3.2051 33.9951 L 3.2051 25.5543 C 3.2051 24.7779 3.5833 24.3996 4.3597 24.3996 L 10.9889 24.3996 C 11.5265 24.3996 11.9047 24.3200 12.4024 23.8622 L 21.2214 15.8593 C 21.3210 15.7797 21.4404 15.7000 21.5598 15.7000 C 21.7390 15.7000 21.8385 15.8195 21.8385 15.9788 L 21.8385 43.5109 C 21.8385 43.6901 21.7390 43.8095 21.5598 43.8095 Z M 31.9715 38.5738 C 32.6483 39.0516 33.6238 38.8923 34.2011 38.1159 C 35.7537 36.0257 36.6894 32.9599 36.6894 29.8344 C 36.6894 26.7089 35.7341 23.6631 34.2011 21.5330 C 33.6238 20.7566 32.6682 20.5973 31.9715 21.0751 C 31.0956 21.6524 30.9960 22.6677 31.6331 23.5436 C 32.7877 25.0964 33.4845 27.4654 33.4845 29.8344 C 33.4845 32.2034 32.7479 34.5724 31.6131 36.1451 C 31.0159 37.0011 31.1154 37.9766 31.9715 38.5738 Z"
  }));
}

export default Speaker3;