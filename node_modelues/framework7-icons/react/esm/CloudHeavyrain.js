function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudHeavyrain(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 12.2617 36.4844 L 41.3476 36.4844 C 49.0352 36.4844 54.7539 30.6484 54.7539 23.4062 C 54.7539 15.9531 48.6603 10.4922 40.7148 10.4922 C 37.7851 4.7031 32.3476 .9766 25.5742 .9766 C 16.7617 .9766 9.4960 7.8672 8.7226 16.5859 C 4.4804 17.8047 1.2461 21.5078 1.2461 26.4531 C 1.2461 31.9844 5.2773 36.4844 12.2617 36.4844 Z M 12.2148 32.7109 C 7.4101 32.7109 4.9960 30.0391 4.9960 26.5703 C 4.9960 23.7344 6.6367 21.2031 10.6211 20.1484 C 11.9101 19.8203 12.3789 19.2109 12.4960 17.875 C 13.0351 10.2344 18.7773 4.7266 25.5742 4.7266 C 30.8476 4.7266 34.9960 7.6094 37.5273 12.8125 C 38.0664 13.9375 38.7695 14.3359 40.1523 14.3359 C 47.0898 14.3359 51.0037 18.5313 51.0037 23.5234 C 51.0037 28.6328 46.9256 32.7109 41.5820 32.7109 Z M 7.8320 54.1094 L 14.6992 42.1797 C 15.1445 41.4297 14.9101 40.6328 14.2070 40.2109 C 13.5038 39.8125 12.7070 40.0234 12.2617 40.7500 L 5.3711 52.7266 C 4.9960 53.4062 5.1836 54.2266 5.8867 54.6484 C 6.5898 55.0234 7.4336 54.7891 7.8320 54.1094 Z M 17.1601 54.1094 L 24.0507 42.1797 C 24.4726 41.4297 24.2382 40.6328 23.5586 40.2109 C 22.8320 39.8125 22.0351 40.0234 21.6133 40.7500 L 14.6992 52.7266 C 14.3242 53.4062 14.5117 54.2266 15.2382 54.6484 C 15.9414 55.0234 16.7851 54.7891 17.1601 54.1094 Z M 26.4882 54.1094 L 33.3789 42.1797 C 33.8007 41.4297 33.5664 40.6328 32.8867 40.2109 C 32.1601 39.8125 31.3633 40.0234 30.9414 40.7500 L 24.0273 52.7266 C 23.6523 53.4062 23.8398 54.2266 24.5664 54.6484 C 25.2460 55.0234 26.1133 54.7891 26.4882 54.1094 Z M 35.7695 54.1328 L 42.6836 42.1328 C 43.1054 41.4297 42.8945 40.5859 42.1914 40.2109 C 41.5117 39.8594 40.6914 40.0234 40.2695 40.7266 L 33.4023 52.6797 C 32.9804 53.4062 33.1679 54.2266 33.8711 54.6484 C 34.5273 55.0234 35.3945 54.7891 35.7695 54.1328 Z"
  }));
}

export default CloudHeavyrain;