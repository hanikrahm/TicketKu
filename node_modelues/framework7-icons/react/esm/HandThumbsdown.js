function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function HandThumbsdown(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 22.6562 1.5860 L 19.3983 1.5860 C 16.4687 1.5860 13.9609 1.7500 12.2733 2.1719 C 9.0390 2.9687 7.0233 5.2187 7.0233 8.0781 C 7.0233 8.6875 7.1171 9.2266 7.2811 9.7656 C 5.6640 10.9609 4.7499 12.7422 4.7499 14.7109 C 4.7499 15.6484 4.9374 16.5860 5.2890 17.3828 C 4.2109 18.4844 3.5546 20.1016 3.5546 21.7891 C 3.5546 22.9140 3.8358 24.0625 4.3280 24.9297 C 3.6483 25.8672 3.2733 27.1797 3.2733 28.5860 C 3.2733 32.1016 5.9921 34.8672 9.4843 34.8672 L 18.3436 34.8672 C 18.9296 34.8672 19.2811 35.1016 19.2811 35.5938 C 19.2811 38.1484 15.2968 44.0781 15.2968 48.8360 C 15.2968 52.0703 17.5468 54.4140 20.6640 54.4140 C 22.9843 54.4140 24.5077 53.2187 26.0311 50.3125 C 28.8905 44.8281 32.2655 39.9766 37.8436 33.1797 L 42.2968 33.1797 C 48.0860 33.1797 52.7267 26.6406 52.7267 18.625 C 52.7267 10.7500 47.6171 4.1875 41.4062 4.1875 L 33.6718 4.1875 C 30.5780 2.5703 26.8280 1.5860 22.6562 1.5860 Z M 19.3749 5.1250 L 22.6327 5.1484 C 32.4530 5.2422 39.1093 10.7969 39.1093 18.7656 C 39.1093 23.8281 37.9843 27.0625 34.7968 31.3281 C 31.2577 36.0391 26.3827 41.6875 22.8671 48.6953 C 21.9296 50.5469 21.4374 50.8750 20.6640 50.8750 C 19.5155 50.8750 18.8358 50.1484 18.8358 48.8360 C 18.8358 45.0156 22.8202 39.2734 22.8202 35.5938 C 22.8202 32.9453 20.6171 31.3281 17.8280 31.3281 L 9.4843 31.3281 C 7.9374 31.3281 6.8124 30.1562 6.8124 28.5860 C 6.8124 27.4844 7.1640 26.7578 8.0780 25.8672 C 8.3358 25.6328 8.4296 25.3984 8.4296 25.1406 C 8.4296 24.9297 8.3593 24.7422 8.1952 24.5313 C 7.4218 23.4297 7.0936 22.7031 7.0936 21.7891 C 7.0936 20.6875 7.6327 19.7266 8.6874 18.9297 C 9.1562 18.6016 9.3905 18.2266 9.3905 17.8281 C 9.3905 17.6875 9.3436 17.5234 9.2499 17.3594 C 8.5702 16.0703 8.2890 15.5547 8.2890 14.7109 C 8.2890 13.4453 9.0858 12.4844 10.7733 11.6172 C 11.1249 11.4297 11.3358 11.1484 11.3358 10.7969 C 11.3358 10.6562 11.2890 10.5156 11.2187 10.3516 C 10.6327 8.9219 10.5624 8.6875 10.5624 8.0781 C 10.5624 6.9297 11.4062 6.0391 13.1171 5.6172 C 14.4999 5.2422 16.7030 5.1016 19.3749 5.1250 Z M 41.4062 7.7266 C 45.5546 7.7266 49.1876 12.6953 49.1876 18.625 C 49.1876 24.6953 45.9296 29.6406 42.2968 29.6406 L 40.1405 29.6406 C 41.8983 26.3360 42.6483 22.9140 42.6483 18.8360 C 42.6483 14.4297 41.0546 10.6094 38.2421 7.7266 Z"
  }));
}

export default HandThumbsdown;