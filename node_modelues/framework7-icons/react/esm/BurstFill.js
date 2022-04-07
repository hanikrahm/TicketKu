function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BurstFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 54.0844 31.2286 C 55.3764 30.6049 56.0000 29.7139 56.0000 28.8229 C 56.0000 27.9319 55.3764 27.1077 54.0844 26.6622 L 43.5481 23.0313 L 48.0699 13.7871 C 48.3149 13.3193 48.3820 12.8293 48.3820 12.4060 C 48.3820 11.1586 47.4463 10.2453 46.2210 10.2453 C 45.7981 10.2453 45.3077 10.3122 44.8401 10.5572 L 35.2840 15.2350 L 30.2943 4.5651 C 29.7597 3.3846 28.8910 2.7831 28.0000 2.7831 C 27.1312 2.7831 26.2625 3.3846 25.7279 4.5651 L 20.7382 15.2350 L 11.1822 10.5572 C 10.6921 10.3122 10.2243 10.2453 9.8011 10.2453 C 8.5760 10.2453 7.6181 11.1586 7.6181 12.4060 C 7.6181 12.8293 7.7072 13.3193 7.9523 13.7871 L 12.4741 23.0313 L 1.9157 26.6622 C .6683 27.0854 0 27.9542 0 28.8452 C 0 29.7139 .6460 30.6049 1.9157 31.2286 L 12.0286 36.0623 L 6.5712 47.6232 C 6.3039 48.1355 6.1925 48.6256 6.1925 49.0933 C 6.1925 50.2071 6.9499 51.0090 8.0191 51.0090 C 8.4646 51.0090 8.9546 50.8531 9.4670 50.5412 L 22.3866 42.9008 L 25.9284 53.8602 C 26.3516 55.0631 27.1535 55.6868 28.0000 55.6868 C 28.8910 55.6868 29.6706 55.0631 30.0716 53.8602 L 33.6356 42.9008 L 46.5554 50.5412 C 47.0677 50.8531 47.5576 50.9868 48.0033 50.9868 C 49.0279 50.9868 49.8295 50.2294 49.8295 49.1156 C 49.8295 48.6478 49.6958 48.1355 49.4508 47.6232 L 43.9715 36.0623 Z"
  }));
}

export default BurstFill;