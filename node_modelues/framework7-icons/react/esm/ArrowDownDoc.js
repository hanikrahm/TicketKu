function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowDownDoc(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 15.5547 53.125 L 40.4453 53.125 C 45.2969 53.125 47.7109 50.6640 47.7109 45.7890 L 47.7109 24.5078 C 47.7109 21.4844 47.3828 20.1718 45.5078 18.2500 L 32.5703 5.1015 C 30.7891 3.2734 29.3359 2.8750 26.6875 2.8750 L 15.5547 2.8750 C 10.7266 2.8750 8.2891 5.3594 8.2891 10.2344 L 8.2891 45.7890 C 8.2891 50.6875 10.7266 53.125 15.5547 53.125 Z M 15.7422 49.3515 C 13.3281 49.3515 12.0625 48.0625 12.0625 45.7187 L 12.0625 10.3047 C 12.0625 7.9844 13.3281 6.6484 15.7656 6.6484 L 26.1718 6.6484 L 26.1718 20.2656 C 26.1718 23.2187 27.6718 24.6718 30.5781 24.6718 L 43.9375 24.6718 L 43.9375 45.7187 C 43.9375 48.0625 42.6953 49.3515 40.2578 49.3515 Z M 31.0000 21.1328 C 30.0859 21.1328 29.7109 20.7578 29.7109 19.8203 L 29.7109 7.3750 L 43.2109 21.1328 Z M 29.8047 29.0781 C 29.8047 28.1172 28.9609 27.3437 28.0000 27.3437 C 27.0391 27.3437 26.2187 28.1172 26.2187 29.0781 L 26.2187 37.5859 L 26.3594 41.4062 L 24.3672 39.3437 L 22.2578 37.1875 C 21.9297 36.8359 21.4375 36.6484 21.0156 36.6484 C 20.0547 36.6484 19.3515 37.3281 19.3515 38.2656 C 19.3515 38.8047 19.5625 39.2031 19.9375 39.5313 L 26.6875 45.7422 C 27.1797 46.1875 27.5547 46.3515 28.0000 46.3515 C 28.4687 46.3515 28.8203 46.1875 29.3125 45.7422 L 36.0625 39.5313 C 36.4375 39.2031 36.6484 38.8047 36.6484 38.2656 C 36.6484 37.3281 35.9453 36.6484 35.0078 36.6484 C 34.5391 36.6484 34.0937 36.8359 33.7656 37.1875 L 31.6328 39.3437 L 29.6406 41.4062 L 29.8047 37.5859 Z"
  }));
}

export default ArrowDownDoc;