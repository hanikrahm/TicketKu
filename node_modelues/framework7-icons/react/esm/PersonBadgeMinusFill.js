function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PersonBadgeMinusFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 34.0702 23.1484 C 39.1093 23.1484 43.4452 18.6484 43.4452 12.7891 C 43.4452 7.0000 39.0858 2.7109 34.0702 2.7109 C 29.0780 2.7109 24.6952 7.0937 24.7186 12.8359 C 24.7186 18.6484 29.0546 23.1484 34.0702 23.1484 Z M 34.0702 27.3437 C 30.0624 27.3437 26.5702 28.2813 23.7343 29.7344 C 27.1093 32.5000 29.2655 36.6953 29.2655 41.3828 C 29.2655 42.5547 29.1249 43.7500 28.8437 44.8516 L 48.7889 44.8516 C 52.4686 44.8516 53.7814 43.7969 53.7814 41.7344 C 53.7814 35.6875 46.2108 27.3437 34.0702 27.3437 Z M 14.1249 53.2891 C 20.6639 53.2891 26.0312 47.9218 26.0312 41.3828 C 26.0312 34.8437 20.6639 29.4766 14.1249 29.4766 C 7.6093 29.4766 2.2186 34.8437 2.2186 41.3828 C 2.2186 47.9218 7.6093 53.2891 14.1249 53.2891 Z M 8.1015 42.8125 C 7.3280 42.8125 6.6718 42.1328 6.6718 41.3828 C 6.6718 40.6094 7.3280 39.9531 8.1015 39.9531 L 20.1483 39.9531 C 20.9452 39.9531 21.6015 40.6094 21.6015 41.3828 C 21.6015 42.1328 20.9452 42.8125 20.1483 42.8125 Z"
  }));
}

export default PersonBadgeMinusFill;