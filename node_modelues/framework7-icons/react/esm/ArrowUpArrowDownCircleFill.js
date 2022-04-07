function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUpArrowDownCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 20.0546 39.8359 C 19.0468 39.8359 18.3202 39.1328 18.3202 38.0781 L 18.3202 24.7422 L 18.4843 20.8281 L 16.1171 23.6875 L 14.1718 25.9141 C 13.8436 26.2188 13.4452 26.4297 12.9530 26.4297 C 11.9687 26.4297 11.2421 25.6563 11.2421 24.6953 C 11.2421 24.2266 11.3827 23.8281 11.7109 23.4766 L 18.6014 16.2578 C 19.0468 15.7656 19.5624 15.6016 20.0546 15.6016 C 20.5936 15.6016 21.1327 15.7890 21.6014 16.2578 L 28.4218 23.4766 C 28.7499 23.8047 28.9140 24.2266 28.9140 24.6953 C 28.9140 25.6563 28.1874 26.4297 27.2030 26.4297 C 26.7109 26.4297 26.2421 26.2188 25.9843 25.9141 L 24.0858 23.6875 L 21.6483 20.8047 L 21.8124 24.7422 L 21.8124 38.0781 C 21.8124 39.1328 21.0858 39.8359 20.0546 39.8359 Z M 35.8514 39.8359 C 35.3358 39.8359 34.8436 39.6484 34.3514 39.1563 L 27.4843 31.9375 C 27.1562 31.6094 27.0155 31.2109 27.0155 30.7188 C 27.0155 29.7578 27.7421 29.0078 28.7030 29.0078 C 29.2187 29.0078 29.6171 29.1953 29.9218 29.5234 L 31.8671 31.7500 L 34.2577 34.5859 L 34.0702 30.6719 L 34.0702 17.3359 C 34.0702 16.3047 34.8202 15.6016 35.8514 15.6016 C 36.8593 15.6016 37.5858 16.3047 37.5858 17.3359 L 37.5858 30.6719 L 37.4218 34.6094 L 39.8358 31.7500 L 41.7343 29.5234 C 41.9921 29.1953 42.4609 29.0078 42.9765 29.0078 C 43.9374 29.0078 44.6874 29.7578 44.6874 30.7188 C 44.6874 31.2109 44.5234 31.6094 44.2187 31.9375 L 37.3514 39.1563 C 36.9296 39.6250 36.3671 39.8359 35.8514 39.8359 Z"
  }));
}

export default ArrowUpArrowDownCircleFill;