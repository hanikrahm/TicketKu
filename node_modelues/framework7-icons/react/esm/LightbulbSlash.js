function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function LightbulbSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 30.1328 4.4102 C 38.8046 4.4102 44.5937 10.1055 44.5937 18.6836 C 44.5937 23.7695 41.9218 27.1680 39.6249 30.4258 L 42.0624 32.8399 C 44.4296 29.3242 48.1328 25.4336 48.1328 18.6602 C 48.1328 7.9961 40.9374 .8711 30.1328 .8711 C 24.1093 .8711 19.2343 3.0742 16.0702 6.8711 L 18.6718 9.4492 C 21.1796 6.2617 25.1874 4.4102 30.1328 4.4102 Z M 47.4531 47.3477 C 48.2031 48.0742 49.3045 48.0508 50.0077 47.3477 C 50.7109 46.6445 50.7344 45.4961 50.0077 44.7930 L 8.5233 3.2617 C 7.7968 2.5586 6.6249 2.5821 5.9453 3.2617 C 5.2656 3.9648 5.2890 5.1602 5.9453 5.8164 Z M 21.6484 43.1524 L 37.6328 43.1524 L 34.0702 39.6133 L 23.8515 39.6133 L 23.8515 38.1602 C 23.8515 32.0430 16.1406 26.6524 16.1406 21.5899 C 16.1406 21.0742 16.2343 20.6289 16.3515 20.1836 L 12.3906 16.2930 C 12.2031 17.0195 12.1328 17.8164 12.1328 18.6602 C 12.1328 28.7852 20.3593 32.4414 20.3593 38.1133 L 20.3593 41.8633 C 20.3593 42.6602 20.8515 43.1524 21.6484 43.1524 Z M 22.5155 49.4805 L 37.7499 49.4805 C 38.9453 49.4805 39.9062 48.4961 39.9062 47.2774 C 39.9062 46.0586 38.9453 45.0742 37.7499 45.0742 L 22.5155 45.0742 C 21.3202 45.0742 20.3593 46.0586 20.3593 47.2774 C 20.3593 48.4961 21.3202 49.4805 22.5155 49.4805 Z M 30.1328 55.1289 C 33.3671 55.1289 35.6406 53.6524 35.8749 51.3789 L 24.3906 51.3789 C 24.5780 53.6524 26.8749 55.1289 30.1328 55.1289 Z"
  }));
}

export default LightbulbSlash;