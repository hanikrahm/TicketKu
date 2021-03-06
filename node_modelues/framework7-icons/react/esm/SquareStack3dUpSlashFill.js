function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquareStack3dUpSlashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 35.3593 28.8906 L 50.5467 20.0781 C 52.4216 18.9766 53.1718 18.1094 53.1718 16.8203 C 53.1718 15.5547 52.4216 14.6875 50.5467 13.5859 L 32.1953 2.9453 C 31.0702 2.2891 30.1562 1.9844 29.2187 1.9844 C 28.2812 1.9844 27.3671 2.2891 26.2421 2.9453 L 15.5781 9.1094 Z M 49.7970 52.3984 C 50.5002 53.1016 51.6718 53.1016 52.3515 52.3984 C 53.0547 51.7187 53.0782 50.5703 52.3515 49.8438 L 6.0859 3.6016 C 5.3828 2.8984 4.2343 2.8984 3.5078 3.6016 C 2.8046 4.2813 2.8281 5.4766 3.5078 6.1562 Z M 19.7265 26.9218 L 7.0234 14.2187 C 5.7343 15.1094 5.2421 15.8359 5.2421 16.8906 C 5.2421 18.1094 5.9218 18.9297 7.7265 19.9844 Z M 29.2187 43.2344 C 30.0624 43.2344 30.7890 42.8359 31.7734 42.2500 L 34.2109 40.7969 L 31.4453 38.0313 L 30.1093 38.8047 C 29.7812 38.9922 29.4765 39.1328 29.2187 39.1328 C 28.9609 39.1328 28.6562 38.9922 28.3281 38.8047 L 6.6015 26.2656 C 5.9453 26.5703 5.2421 27.3672 5.2421 28.3281 C 5.2421 29.0547 5.6640 29.8516 6.5312 30.3672 L 26.6640 42.2500 C 27.6484 42.8359 28.3749 43.2344 29.2187 43.2344 Z M 42.4140 35.9687 L 51.9061 30.3672 C 52.7970 29.8281 53.1954 29.0547 53.1954 28.3281 C 53.1954 27.3672 52.4686 26.5703 51.8360 26.2656 L 39.7187 33.2500 Z M 29.2187 54.0156 C 30.0624 54.0156 30.7890 53.6172 31.7734 53.0313 L 41.0312 47.5937 L 38.2890 44.8750 L 30.1093 49.6094 C 29.7812 49.7969 29.4765 49.9375 29.2187 49.9375 C 28.9609 49.9375 28.6562 49.7969 28.3281 49.6094 L 6.6015 37.0469 C 5.9453 37.375 5.2421 38.1484 5.2421 39.1094 C 5.2421 39.8359 5.6640 40.6562 6.5312 41.1484 L 26.6640 53.0313 C 27.6484 53.6172 28.3749 54.0156 29.2187 54.0156 Z M 49.1874 42.7656 L 51.9061 41.1484 C 52.7734 40.6562 53.1954 39.8359 53.1954 39.1094 C 53.1954 38.1484 52.4686 37.375 51.8360 37.0469 L 46.5622 40.1172 Z"
  }));
}

export default SquareStack3dUpSlashFill;