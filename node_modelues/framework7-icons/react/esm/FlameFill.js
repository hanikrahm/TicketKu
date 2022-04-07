function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function FlameFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 8.1250 37.3984 C 8.1250 46.9141 15.9063 53.6406 26.8750 53.6406 C 39.3203 53.6406 47.8750 45.6016 47.8750 32.3828 C 47.8750 11.7578 29.7812 2.3594 16.5860 2.3594 C 14.5000 2.3594 13.4687 3.3906 13.4687 4.5859 C 13.4687 5.5469 13.9844 6.3437 14.7578 7.4453 C 16.6328 10.0234 19.8203 13.7734 19.8203 18.4844 C 19.8203 18.8828 19.7969 19.2813 19.7500 19.7031 C 18.4375 17.2422 16.1172 15.5078 13.3047 15.5078 C 12.5078 15.5078 12.0860 15.9766 12.0860 16.6562 C 12.0860 17.4766 12.2734 18.0625 12.2734 20.6172 C 12.2734 25.5156 8.1250 28.8203 8.1250 37.3984 Z M 27.3438 47.0547 C 22.6563 47.0547 19.5391 44.2187 19.5391 40.0000 C 19.5391 35.5703 22.6797 34.0000 23.1016 31.1406 C 23.1250 30.9062 23.2891 30.8359 23.4531 31.0000 C 24.6250 32.0078 25.3516 33.2734 25.9141 34.7266 C 26.0312 34.9844 26.2187 35.0078 26.3360 34.7969 C 27.6250 32.5469 27.8594 29.1953 27.5547 24.9766 C 27.5078 24.7422 27.6719 24.625 27.8828 24.7187 C 33.4375 27.2500 36.2734 32.7578 36.2734 37.7031 C 36.2734 42.6719 33.3438 47.0547 27.3438 47.0547 Z"
  }));
}

export default FlameFill;