function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Briefcase(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 9.1563 50.5820 L 46.8440 50.5820 C 51.6954 50.5820 54.1093 48.2383 54.1093 43.4336 L 54.1093 20.6289 C 54.1093 15.8476 51.6954 13.4805 46.8440 13.4805 L 41.8751 13.4805 L 41.8751 12.0039 C 41.8751 7.4336 39.6016 5.4180 35.2657 5.4180 L 20.7344 5.4180 C 16.6329 5.4180 14.1016 7.4336 14.1016 12.0039 L 14.1016 13.4805 L 9.1563 13.4805 C 4.3048 13.4805 1.8907 15.8476 1.8907 20.6289 L 1.8907 43.4336 C 1.8907 48.2383 4.3048 50.5820 9.1563 50.5820 Z M 17.7344 11.7461 C 17.7344 9.8008 18.7422 8.8164 20.6875 8.8164 L 35.3126 8.8164 C 37.2579 8.8164 38.2422 9.8008 38.2422 11.7461 L 38.2422 13.4805 L 17.7344 13.4805 Z M 5.6641 20.8164 C 5.6641 18.4258 6.8829 17.2305 9.2032 17.2305 L 46.7970 17.2305 C 49.0938 17.2305 50.3360 18.4258 50.3360 20.8164 L 50.3360 27.0039 L 5.6641 27.0039 Z M 9.2032 46.8320 C 6.8829 46.8320 5.6641 45.6602 5.6641 43.2461 L 5.6641 30.5195 L 18.7422 30.5195 L 18.7422 31.9727 C 18.7422 33.8945 19.8438 34.9961 21.7891 34.9961 L 34.2110 34.9961 C 36.1329 34.9961 37.2579 33.8945 37.2579 31.9727 L 37.2579 30.5195 L 50.3360 30.5195 L 50.3360 43.2461 C 50.3360 45.6602 49.0938 46.8320 46.7970 46.8320 Z"
  }));
}

export default Briefcase;