function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Flame(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 8.1836 37.3984 C 8.1836 47.1484 15.6367 53.6406 26.8164 53.6406 C 39.4023 53.6406 47.8164 45.1562 47.8164 32.3828 C 47.8164 11.1718 29.7227 2.3594 17.4180 2.3594 C 14.9570 2.3594 13.3633 3.2266 13.3633 4.9375 C 13.3633 5.5937 13.6445 6.2969 14.1602 6.8828 C 16.9023 10.1875 19.6914 14.0078 19.7617 18.4844 C 19.7617 18.9062 19.7617 19.3047 19.7149 19.7266 C 18.4023 17.2656 16.1992 15.5078 13.9492 15.5078 C 12.8242 15.5078 12.0273 16.3281 12.0273 17.5703 C 12.0273 18.1562 12.2149 19.6094 12.2149 20.6172 C 12.2149 25.5156 8.1836 28.8203 8.1836 37.3984 Z M 12.0742 37.3984 C 12.0742 30.1328 16.0820 27.1094 16.2695 20.3828 C 17.6054 22.0703 18.5664 24.1094 18.8945 27.0391 C 18.9414 27.5078 19.2227 27.6953 19.6445 27.6953 C 21.8711 27.6953 23.1602 22.0469 23.1602 18.4844 C 23.1602 13.9140 21.2149 9.1328 18.1914 6.0625 C 34.2227 7.3516 43.7852 18.2500 43.7852 32.2187 C 43.7852 42.7656 37.1054 49.7734 27.1211 49.7734 C 18.0742 49.7734 12.0742 44.8281 12.0742 37.3984 Z M 27.4492 47.0547 C 33.1914 47.0547 36.0039 42.8359 36.0039 38.0547 C 36.0039 33.3203 33.2852 28.0469 27.9414 25.5859 C 27.7305 25.4922 27.5898 25.6094 27.6133 25.8437 C 27.9180 29.8984 27.6836 33.1328 26.4649 35.2656 C 26.3242 35.4766 26.1602 35.4531 26.0664 35.2187 C 25.5039 33.8125 24.8008 32.6172 23.6992 31.6328 C 23.5117 31.4687 23.3711 31.5391 23.3476 31.7734 C 22.9492 34.4922 19.9258 36.0156 19.9258 40.2813 C 19.9258 44.3359 22.9258 47.0547 27.4492 47.0547 Z"
  }));
}

export default Flame;