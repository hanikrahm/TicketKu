function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function AppBadge(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 43.6327 20.5937 C 48.0860 20.5937 51.7657 16.9141 51.7657 12.4610 C 51.7657 8.0078 48.1091 4.3281 43.6327 4.3281 C 39.1796 4.3281 35.5233 8.0078 35.5233 12.4610 C 35.5233 16.9141 39.1796 20.5937 43.6327 20.5937 Z M 4.2343 39.1797 C 4.2343 43.1875 4.5858 46.5156 6.9765 48.9063 C 9.3671 51.2969 12.7421 51.6719 16.7499 51.6719 L 34.9608 51.6719 C 38.9452 51.6719 42.3202 51.2969 44.7108 48.9063 C 47.1016 46.5156 47.4529 43.1875 47.4529 39.1797 L 47.4529 23.2188 C 46.4219 23.5703 45.2968 23.7578 44.1249 23.7344 C 43.9608 23.7578 43.8436 23.7578 43.6796 23.7813 L 43.6796 39.8125 C 43.6796 42.2500 43.3749 44.7344 41.9687 46.1641 C 40.5389 47.5703 38.0077 47.8984 35.5936 47.8984 L 16.0936 47.8984 C 13.6796 47.8984 11.1484 47.5703 9.7421 46.1641 C 8.3124 44.7344 8.0077 42.2500 8.0077 39.8125 L 8.0077 20.5703 C 8.0077 18.1094 8.3124 15.5781 9.7187 14.1719 C 11.1484 12.7422 13.7030 12.4375 16.1640 12.4375 L 32.3358 12.4375 C 32.3358 12.2735 32.3593 12.1328 32.3827 11.9922 C 32.3593 10.8203 32.5233 9.6953 32.8984 8.6641 L 16.6796 8.6641 C 12.7421 8.6641 9.3671 9.0391 6.9765 11.4297 C 4.5858 13.8203 4.2343 17.1719 4.2343 21.0859 Z"
  }));
}

export default AppBadge;