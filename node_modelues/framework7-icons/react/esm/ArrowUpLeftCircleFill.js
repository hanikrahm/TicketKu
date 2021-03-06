function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUpLeftCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 19.0234 34.3984 C 17.8983 34.3984 17.1483 33.5547 17.1483 32.3359 L 17.1483 20.1719 C 17.1483 18.6484 17.9687 18.0390 19.3046 18.0390 L 31.5624 18.0390 C 32.7577 18.0390 33.5312 18.7656 33.5312 19.9375 C 33.5312 21.0625 32.7343 21.8359 31.5155 21.8359 L 26.8046 21.8359 L 22.9843 21.4141 L 26.9921 25.1641 L 36.5312 34.6797 C 36.9062 35.0547 37.1405 35.5469 37.1405 36.0625 C 37.1405 37.2344 36.3905 37.9844 35.2655 37.9844 C 34.6093 37.9844 34.1640 37.7734 33.7655 37.3984 L 24.2733 27.8828 L 20.5468 23.8984 L 20.9218 27.9297 L 20.9218 32.4063 C 20.9218 33.6250 20.1718 34.3984 19.0234 34.3984 Z"
  }));
}

export default ArrowUpLeftCircleFill;