function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SportscourtFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 7.2186 36.8223 C 8.2039 36.8223 8.7669 36.2593 8.7669 35.2740 L 8.7669 23.5312 C 8.7669 22.5459 8.2039 21.9829 7.2186 21.9829 L 0 21.9829 L 0 36.8223 Z M 21.0326 29.3825 C 21.0326 32.5997 23.3249 35.3544 26.3209 36.0784 L 26.3209 22.7470 C 23.2846 23.4306 21.0326 26.0848 21.0326 29.3825 Z M 29.5582 36.0784 C 32.5744 35.3544 34.8063 32.5997 34.8465 29.3825 C 34.8666 26.1653 32.5945 23.4708 29.5582 22.7470 Z M 48.7811 21.9829 C 47.7960 21.9829 47.2327 22.5459 47.2327 23.5312 L 47.2327 35.2740 C 47.2327 36.2593 47.7960 36.8223 48.7811 36.8223 L 56 36.8223 L 56 21.9829 Z M 56 40.0597 L 48.7209 40.0597 C 45.7448 40.0597 43.9955 38.3103 43.9955 35.3343 L 43.9955 23.4708 C 43.9955 20.4949 45.7448 18.7455 48.7209 18.7455 L 56 18.7455 L 56 16.6744 C 56 12.5323 53.8887 10.4411 49.6858 10.4411 L 29.5582 10.4411 L 29.5582 19.7107 C 34.2634 20.4748 37.7422 24.4762 37.8024 29.4026 C 37.8629 34.3692 34.2835 38.3706 29.5582 39.1347 L 29.5582 48.3842 L 49.6858 48.3842 C 53.8887 48.3842 56 46.2930 56 42.1508 Z M 0 40.0597 L 0 42.1508 C 0 46.2930 2.1314 48.3842 6.3138 48.3842 L 26.3209 48.3842 L 26.3209 39.1347 C 21.6157 38.3907 18.0768 34.3893 18.0768 29.4026 C 18.0768 24.4561 21.6157 20.3944 26.3209 19.6705 L 26.3209 10.4411 L 6.3138 10.4411 C 2.1314 10.4411 0 12.5122 0 16.6744 L 0 18.7455 L 7.2790 18.7455 C 10.2549 18.7455 12.0043 20.4949 12.0043 23.4708 L 12.0043 35.3343 C 12.0043 38.3103 10.2549 40.0597 7.2790 40.0597 Z"
  }));
}

export default SportscourtFill;