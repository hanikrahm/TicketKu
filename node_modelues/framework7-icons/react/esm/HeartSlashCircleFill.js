function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function HeartSlashCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 36.7187 40.3750 L 14.2655 17.9688 C 13.8436 17.5703 13.8436 16.8672 14.2655 16.4688 C 14.6640 16.0703 15.3436 16.0703 15.7655 16.4688 L 38.1952 38.8750 C 38.6171 39.2734 38.5936 39.9766 38.1952 40.3750 C 37.7968 40.7734 37.1171 40.7734 36.7187 40.3750 Z M 22.4921 17.9453 C 24.9999 17.9453 27.0390 19.3984 28.2109 21.5781 C 29.3827 19.3984 31.3983 17.9453 33.9296 17.9453 C 37.9843 17.9453 40.8905 20.9922 40.8905 25.2344 C 40.8905 28.6797 38.8514 32.0078 36.2499 34.7968 L 19.8671 18.4375 C 20.6405 18.1328 21.5546 17.9453 22.4921 17.9453 Z M 16.2109 22 L 32.4296 38.2188 C 31.3749 39.0625 30.3436 39.7656 29.3827 40.3984 C 29.0077 40.6562 28.5624 40.9141 28.2109 40.9141 C 27.8593 40.9141 27.3905 40.6562 27.0155 40.3984 C 22.1640 37.2578 15.5312 31.4922 15.5312 25.2344 C 15.5312 24.0390 15.7655 22.9375 16.2109 22 Z"
  }));
}

export default HeartSlashCircleFill;