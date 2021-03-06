function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Sportscourt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 6.2244 48.6723 L 49.7756 48.6723 C 53.9186 48.6723 56 46.6107 56 42.5272 L 56 16.6186 C 56 12.5351 53.9186 10.4734 49.7756 10.4734 L 6.2244 10.4734 C 2.1012 10.4734 0 12.5152 0 16.6186 L 0 42.5272 C 0 46.6107 2.1012 48.6723 6.2244 48.6723 Z M 6.2839 45.4808 C 4.3016 45.4808 3.1915 44.4104 3.1915 42.3488 L 3.1915 39.4745 L 8.7617 39.4745 C 11.6955 39.4745 13.4201 37.7498 13.4201 34.8161 L 13.4201 24.3099 C 13.4201 21.3761 11.6955 19.6515 8.7617 19.6515 L 3.1915 19.6515 L 3.1915 16.7772 C 3.1915 14.7354 4.3016 13.6650 6.2839 13.6650 L 26.3447 13.6650 L 26.3447 20.3453 C 21.9242 21.0589 18.5939 24.8848 18.5939 29.5630 C 18.5939 34.2412 21.9242 38.0670 26.3447 38.8005 L 26.3447 45.4808 Z M 37.2870 29.5630 C 37.2472 24.9046 33.9765 21.1382 29.5362 20.3651 L 29.5362 13.6650 L 49.7159 13.6650 C 51.6784 13.6650 52.8082 14.7354 52.8082 16.7772 L 52.8082 19.6515 L 47.2383 19.6515 C 44.3043 19.6515 42.5797 21.3761 42.5797 24.3099 L 42.5797 34.8161 C 42.5797 37.7498 44.3043 39.4745 47.2383 39.4745 L 52.8082 39.4745 L 52.8082 42.3488 C 52.8082 44.4104 51.6784 45.4808 49.7159 45.4808 L 29.5362 45.4808 L 29.5362 38.8005 C 33.9964 38.0472 37.3463 34.2412 37.2870 29.5630 Z M 47.2975 36.2830 C 46.3260 36.2830 45.7711 35.7279 45.7711 34.7566 L 45.7711 24.3694 C 45.7711 23.3980 46.3260 22.8430 47.2975 22.8430 L 52.8082 22.8430 L 52.8082 36.2830 Z M 8.7023 22.8430 C 9.6736 22.8430 10.2286 23.3980 10.2286 24.3694 L 10.2286 34.7566 C 10.2286 35.7279 9.6736 36.2830 8.7023 36.2830 L 3.1915 36.2830 L 3.1915 22.8430 Z M 21.4682 29.5432 C 21.4682 26.4904 23.5497 23.9927 26.3447 23.2989 L 26.3447 35.8270 C 23.5695 35.1134 21.4682 32.5563 21.4682 29.5432 Z M 34.4126 29.5432 C 34.3730 32.5563 32.3114 35.1134 29.5362 35.8270 L 29.5362 23.3188 C 32.3312 24.0324 34.4325 26.5499 34.4126 29.5432 Z"
  }));
}

export default Sportscourt;