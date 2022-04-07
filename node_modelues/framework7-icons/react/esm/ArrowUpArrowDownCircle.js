function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUpArrowDownCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 20.7812 38.7578 C 21.7187 38.7578 22.3749 38.0781 22.3749 37.1641 L 22.3749 25.0234 L 22.2109 21.4141 L 24.4374 24.0390 L 26.1718 26.0547 C 26.4062 26.3828 26.8280 26.5234 27.2968 26.5234 C 28.1640 26.5234 28.8436 25.8672 28.8436 24.9766 C 28.8436 24.5547 28.7030 24.1563 28.4218 23.8750 L 22.1640 17.2890 C 21.7655 16.8672 21.2499 16.6797 20.7812 16.6797 C 20.3358 16.6797 19.8671 16.8437 19.4452 17.2890 L 13.1640 23.8750 C 12.8593 24.1563 12.7421 24.5547 12.7421 24.9766 C 12.7421 25.8672 13.3983 26.5234 14.2655 26.5234 C 14.7343 26.5234 15.1327 26.3828 15.3905 26.0547 L 17.1952 24.0390 L 19.3514 21.4375 L 19.1874 25.0234 L 19.1874 37.1641 C 19.1874 38.0781 19.8671 38.7578 20.7812 38.7578 Z M 35.1483 38.7578 C 35.6171 38.7578 36.1093 38.5469 36.5077 38.1250 L 42.7655 31.5390 C 43.0468 31.2578 43.2109 30.8828 43.2109 30.4375 C 43.2109 29.5703 42.5312 28.8906 41.6640 28.8906 C 41.1952 28.8906 40.7733 29.0547 40.5390 29.3594 L 38.7812 31.3984 L 36.5780 34.0234 L 36.7187 30.4141 L 36.7187 18.2734 C 36.7187 17.3359 36.0624 16.6797 35.1483 16.6797 C 34.2109 16.6797 33.5546 17.3359 33.5546 18.2734 L 33.5546 30.4141 L 33.6952 33.9766 L 31.5390 31.3984 L 29.7577 29.3594 C 29.4999 29.0547 29.0780 28.8906 28.6327 28.8906 C 27.7655 28.8906 27.1093 29.5703 27.1093 30.4375 C 27.1093 30.8828 27.2265 31.2578 27.5077 31.5390 L 33.8124 38.1250 C 34.2343 38.5703 34.6796 38.7578 35.1483 38.7578 Z"
  }));
}

export default ArrowUpArrowDownCircle;