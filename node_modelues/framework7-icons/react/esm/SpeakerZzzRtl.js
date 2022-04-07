function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SpeakerZzzRtl(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 30.4927 49.1123 C 31.5881 49.1123 32.4600 48.6428 33.5778 47.6592 L 44.0623 38.2476 C 44.2189 38.1134 44.4199 38.0464 44.6214 38.0464 L 51.2609 38.0464 C 54.4351 38.0464 56 36.4592 56 33.0835 L 56 24.1860 C 56 20.8104 54.4351 19.2232 51.2609 19.2232 L 44.6214 19.2232 C 44.4199 19.2232 44.2189 19.1561 44.0623 19.0220 L 33.5778 9.6998 C 32.3482 8.6267 31.6328 8.0902 30.5374 8.0902 C 28.9949 8.0902 27.8771 9.3421 27.8771 10.8399 L 27.8771 46.4967 C 27.8771 47.9945 28.9949 49.1123 30.4927 49.1123 Z M 31.7893 44.3953 C 31.6105 44.3953 31.4763 44.2612 31.4763 44.0600 L 31.4763 13.1425 C 31.4763 12.9637 31.6105 12.8295 31.7893 12.8295 C 31.9458 12.8295 32.0576 12.9190 32.1694 13.0084 L 42.0950 21.9952 C 42.6316 22.5094 43.0789 22.5988 43.6823 22.5988 L 51.1043 22.5988 C 51.9985 22.5988 52.4009 23.0236 52.4009 23.8955 L 52.4009 33.3741 C 52.4009 34.2683 51.9985 34.6707 51.1043 34.6707 L 43.6823 34.6707 C 43.0789 34.6707 42.6316 34.7825 42.0950 35.2743 L 32.1694 44.1941 C 32.0352 44.3282 31.9235 44.3953 31.7893 44.3953 Z M 21.2152 23.1354 L 15.7382 23.1354 L 15.7382 23.0012 L 21.3494 15.6016 C 21.8635 14.9533 22.0424 14.5509 22.0424 14.1038 C 22.0424 13.3437 21.4611 12.8966 20.6563 12.8966 L 12.8991 12.8966 C 12.1613 12.8966 11.6024 13.3661 11.6024 14.1262 C 11.6024 14.9309 12.1613 15.4004 12.8991 15.4004 L 18.0855 15.4004 L 18.0855 15.5122 L 12.3849 22.9118 C 11.8707 23.5601 11.6918 23.9401 11.6918 24.4543 C 11.6918 25.1473 12.2508 25.6615 13.0555 25.6615 L 21.2152 25.6615 C 21.9530 25.6615 22.4895 25.1697 22.4895 24.3873 C 22.4895 23.6495 21.9530 23.1354 21.2152 23.1354 Z M 7.6232 32.3681 L 3.8004 32.3681 L 3.8004 32.2787 L 7.7797 27.0699 C 8.2268 26.4663 8.4280 26.0639 8.4280 25.6392 C 8.4280 24.9238 7.8467 24.4990 7.0867 24.4990 L 1.2072 24.4990 C .4918 24.4990 0 24.9685 0 25.6615 C 0 26.4440 .4918 26.8910 1.2072 26.8910 L 4.6499 26.8910 L 4.6499 26.9805 L .6930 32.1669 C .2683 32.7705 .1 33.1282 .1 33.6200 C .1 34.2907 .6036 34.7825 1.3413 34.7825 L 7.6232 34.7825 C 8.3385 34.7825 8.8527 34.3354 8.8527 33.5753 C 8.8527 32.8599 8.3385 32.3681 7.6232 32.3681 Z M 18.0408 40.8632 L 14.7769 40.8632 L 14.7769 40.7737 L 18.1302 36.2803 C 18.5996 35.6544 18.7785 35.3190 18.7785 34.9166 C 18.7785 34.2236 18.2420 33.7989 17.5266 33.7989 L 12.3402 33.7989 C 11.6695 33.7989 11.1777 34.2460 11.1777 34.9390 C 11.1777 35.6544 11.6695 36.0791 12.3402 36.0791 L 15.2017 36.0791 L 15.2017 36.1685 L 11.8707 40.6620 C 11.4459 41.2432 11.2448 41.5785 11.2448 42.0256 C 11.2448 42.6739 11.7589 43.1210 12.4519 43.1210 L 18.0408 43.1210 C 18.6891 43.1210 19.1809 42.6963 19.1809 41.9809 C 19.1809 41.3103 18.6891 40.8632 18.0408 40.8632 Z"
  }));
}

export default SpeakerZzzRtl;