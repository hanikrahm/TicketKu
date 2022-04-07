function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function TrashSlashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 43.0937 37.0937 L 44.0780 14.6641 L 46.7733 14.6641 C 47.7342 14.6641 48.5075 13.8672 48.5075 12.9063 C 48.5075 11.9453 47.7342 11.1250 46.7733 11.1250 L 37.1405 11.1250 L 37.1405 7.7734 C 37.1405 4.5625 35.0077 2.5703 31.9843 2.5703 L 23.3593 2.5703 C 20.3358 2.5703 18.2264 4.5625 18.2264 7.7734 L 18.2264 11.1250 L 17.1249 11.1250 L 26.2655 20.2656 L 26.2655 19.0468 C 26.4999 18.4141 27.0624 17.9922 27.6952 17.9922 C 28.5624 17.9922 29.3124 18.7656 29.3124 19.7031 L 29.3124 23.3359 L 34.4218 28.4219 L 34.7499 19.7031 C 34.7968 18.7656 35.4764 17.9922 36.3202 17.9922 C 37.1874 17.9922 37.8905 18.7422 37.8671 19.7031 L 37.3983 31.3984 Z M 49.3278 52.4453 C 50.0310 53.1484 51.2032 53.1484 51.8828 52.4453 C 52.5625 51.7187 52.5860 50.5937 51.8828 49.8906 L 6.6717 4.6563 C 5.9686 3.9531 4.7968 3.9297 4.0937 4.6563 C 3.4140 5.3359 3.4140 6.5078 4.0937 7.1875 Z M 21.4139 11.1250 L 21.4139 7.7734 C 21.4139 6.4375 22.3749 5.5000 23.8046 5.5000 L 31.5624 5.5000 C 32.9921 5.5000 33.9764 6.4375 33.9764 7.7734 L 33.9764 11.1250 Z M 17.5937 53.4297 L 37.7968 53.4297 C 40.3280 53.4297 42.0155 52.1875 42.4374 49.9609 L 42.4608 49.4922 L 36.9530 43.9844 L 36.8124 46.9141 C 36.7890 47.9219 36.1561 48.6484 35.3124 48.6484 C 34.3983 48.6484 33.7655 47.8516 33.7890 46.8906 L 33.9999 41.0547 L 29.3124 36.3672 L 29.3124 46.8906 C 29.3124 47.8516 28.5624 48.6484 27.6952 48.6484 C 26.8515 48.6484 26.1249 47.8516 26.1249 46.8906 L 26.1249 33.1563 L 20.9452 27.9531 L 21.6249 46.8906 C 21.6483 47.8516 20.9921 48.6484 20.1015 48.6484 C 19.2343 48.6484 18.6249 47.9219 18.6015 46.9141 L 17.7343 24.7656 L 11.5233 18.5312 L 12.8358 48.9062 C 12.9530 51.8359 14.6874 53.4297 17.5937 53.4297 Z"
  }));
}

export default TrashSlashFill;