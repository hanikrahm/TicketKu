function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PaintbrushFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 19.3164 22.7383 L 34.9726 38.3945 C 36.7305 40.1523 38.5586 39.8711 40.1992 38.2305 L 51.8242 26.6523 C 53.4649 25.0117 53.7226 23.1836 51.9649 21.4258 L 49.5975 19.0820 C 46.8087 21.5664 38.9805 27.1445 37.7617 25.9258 C 37.3633 25.5274 37.6914 25.1758 37.9258 24.9414 C 40.5039 22.2930 43.9492 18.0742 44.3946 13.8320 L 32.0430 1.4805 C 30.5899 .4 28.4336 .8 27.2617 1.7383 C 24.8946 5.0898 24.9414 10.6914 19.3164 17.3945 C 17.7695 19.2695 17.5117 20.9336 19.3164 22.7383 Z M 5.4883 52.8320 C 8.5821 55.8789 12.4726 55.9726 15.2383 53.2070 C 17.4180 51.0508 19.6914 45.2617 21.2617 42.5664 L 27.8242 49.1055 C 29.6992 50.9805 31.7852 51.0274 33.5430 49.2695 L 35.0195 47.7695 C 36.7773 46.0117 36.7305 43.9258 34.8789 42.0508 L 16.2930 23.4648 C 14.4180 21.5664 12.3555 21.5195 10.5742 23.3242 L 9.0977 24.8008 C 7.2930 26.5820 7.3399 28.6211 9.2383 30.5195 L 15.7539 37.0586 C 13.0821 38.6289 7.2695 40.9258 5.1133 43.0820 C 2.2774 45.8945 2.4180 49.8086 5.4883 52.8320 Z M 8.6758 49.5273 C 7.9024 48.7305 7.8789 47.4648 8.6758 46.6680 C 9.4961 45.8711 10.7617 45.8711 11.5586 46.6680 C 12.3555 47.4883 12.3555 48.7070 11.5586 49.5273 C 10.7617 50.3476 9.4961 50.3711 8.6758 49.5273 Z"
  }));
}

export default PaintbrushFill;