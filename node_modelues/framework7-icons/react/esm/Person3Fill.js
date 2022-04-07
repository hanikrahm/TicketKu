function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Person3Fill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 28.0000 27.1257 C 31.1936 27.1257 33.9415 24.2737 33.9415 20.5602 C 33.9415 16.8912 31.1787 14.1729 28.0000 14.1729 C 24.8213 14.1729 22.0584 16.9506 22.0584 20.5898 C 22.0584 24.2737 24.8064 27.1257 28.0000 27.1257 Z M 10.9029 27.4673 C 13.6658 27.4673 16.0722 24.9718 16.0722 21.7485 C 16.0722 18.5548 13.6509 16.1930 10.9029 16.1930 C 8.1401 16.1930 5.7040 18.6143 5.7188 21.7782 C 5.7188 24.9718 8.1252 27.4673 10.9029 27.4673 Z M 45.0970 27.4673 C 47.8748 27.4673 50.2811 24.9718 50.2811 21.7782 C 50.2811 18.6143 47.8599 16.1930 45.0970 16.1930 C 42.3491 16.1930 39.9278 18.5548 39.9278 21.7485 C 39.9278 24.9718 42.3342 27.4673 45.0970 27.4673 Z M 2.6143 40.8806 L 13.9035 40.8806 C 12.3586 38.6376 14.2451 34.1220 17.4387 31.6562 C 15.7899 30.5570 13.6658 29.7400 10.8881 29.7400 C 4.1889 29.7400 0 34.6864 0 38.8010 C 0 40.1379 .7427 40.8806 2.6143 40.8806 Z M 53.3856 40.8806 C 55.2723 40.8806 56 40.1379 56 38.8010 C 56 34.6864 51.8113 29.7400 45.1119 29.7400 C 42.3342 29.7400 40.2102 30.5570 38.5613 31.6562 C 41.7549 34.1220 43.6414 38.6376 42.0966 40.8806 Z M 18.6568 40.8806 L 37.3283 40.8806 C 39.6604 40.8806 40.4925 40.2122 40.4925 38.9050 C 40.4925 35.0726 35.6944 29.7845 27.9851 29.7845 C 20.2907 29.7845 15.4928 35.0726 15.4928 38.9050 C 15.4928 40.2122 16.3247 40.8806 18.6568 40.8806 Z"
  }));
}

export default Person3Fill;