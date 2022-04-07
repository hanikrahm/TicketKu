function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Shuffle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M .3321 40.0118 C .3321 41.5117 1.4337 42.5430 3.0977 42.5430 L 8.4415 42.5430 C 12.4727 42.5430 14.9103 41.3711 17.8165 37.9727 L 23.0899 31.8320 L 28.3399 37.9727 C 31.2462 41.3711 33.6603 42.5664 37.7618 42.5664 L 42.0508 42.5664 L 42.0508 47.7695 C 42.0508 49.0352 42.8476 49.8320 44.1604 49.8320 C 44.7229 49.8320 45.3085 49.6211 45.7304 49.2461 L 54.5898 41.9336 C 55.6679 41.0664 55.6448 39.6602 54.5898 38.7930 L 45.7304 31.4336 C 45.3085 31.0586 44.7229 30.8477 44.1604 30.8477 C 42.8476 30.8477 42.0508 31.6445 42.0508 32.9102 L 42.0508 37.4571 L 37.8790 37.4571 C 35.4649 37.4571 33.9649 36.6836 32.0430 34.4571 L 26.4415 27.9180 L 32.0430 21.4024 C 33.9649 19.1524 35.4649 18.3789 37.8790 18.3789 L 42.0508 18.3789 L 42.0508 23.0898 C 42.0508 24.3555 42.8476 25.1524 44.1604 25.1524 C 44.7229 25.1524 45.3085 24.9414 45.7304 24.5664 L 54.5898 17.2539 C 55.6679 16.3867 55.6448 15.0039 54.5898 14.1133 L 45.7304 6.7539 C 45.3085 6.3789 44.7229 6.1680 44.1604 6.1680 C 42.8476 6.1680 42.0508 6.9649 42.0508 8.2305 L 42.0508 13.2930 L 37.7618 13.2930 C 33.6603 13.2930 31.2462 14.4883 28.3399 17.8867 L 23.0899 24.0274 L 17.8165 17.8867 C 14.9103 14.4883 12.4727 13.2930 8.4415 13.2930 L 3.0977 13.2930 C 1.4337 13.2930 .3321 14.3242 .3321 15.8477 C .3321 17.3477 1.4571 18.4024 3.0977 18.4024 L 8.5352 18.4024 C 10.8087 18.4024 12.2384 19.1758 14.1368 21.4024 L 19.7384 27.9180 L 14.1368 34.4571 C 12.2149 36.6836 10.7852 37.4571 8.5352 37.4571 L 3.0977 37.4571 C 1.4571 37.4571 .3321 38.5118 .3321 40.0118 Z"
  }));
}

export default Shuffle;