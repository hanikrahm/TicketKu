function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudMoonRain(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 8.9906 39.2275 L 31.9334 39.2275 C 38.0614 39.2275 42.8111 34.6051 42.8111 28.6255 C 42.8111 28.4558 42.8111 28.2862 42.8111 28.1166 C 49.5751 27.8621 53.7314 24.0878 55.3004 19.9954 C 56 18.2990 55.0885 16.7724 53.4344 16.7724 C 52.1620 16.7724 51.1233 17.3236 48.8755 17.3236 C 43.4685 17.3236 40.6059 14.3127 40.6059 9.3933 C 40.6059 6.9972 41.3480 5.6826 41.3480 4.4952 C 41.3480 2.7564 39.8425 1.8871 37.9766 2.5232 C 33.4813 4.0075 29.6646 8.7996 29.6646 14.6731 C 29.6646 14.8640 29.6858 15.0548 29.6858 15.2669 C 27.1201 12.3407 23.5578 10.6232 19.5078 10.6232 C 12.4892 10.6232 6.6157 16.0514 5.9160 23.0064 C 2.3749 24.1090 0 27.1836 0 31.0215 C 0 35.8137 3.5835 39.2275 8.9906 39.2275 Z M 32.7816 14.5883 C 32.7816 10.4959 35.2201 7.2941 37.9978 5.7674 L 38.2310 5.9370 C 37.8706 6.9760 37.5525 8.3967 37.5525 10.0295 C 37.5525 16.1150 42.0055 20.3134 48.1546 20.3134 C 49.6602 20.3134 51.0594 20.0590 52.0348 19.7197 L 52.1620 19.8893 C 50.8688 22.3915 47.5610 25.0208 42.1962 25.0420 C 40.8604 21.4585 37.5738 18.8716 33.3753 18.2567 C 32.9725 17.1116 32.7816 15.8818 32.7816 14.5883 Z M 8.9057 35.8349 C 5.3011 35.8349 3.3926 33.7781 3.3926 31.1063 C 3.3926 28.8799 4.7073 26.8867 7.8243 26.0598 C 8.8421 25.7841 9.2238 25.3176 9.3086 24.2574 C 9.7963 18.2990 14.2068 14.0158 19.5078 14.0158 C 23.6214 14.0158 26.8232 16.2847 28.7952 20.2498 C 29.2405 21.1616 29.7706 21.4585 30.8520 21.4585 C 36.3227 21.4585 39.4185 24.7663 39.4185 28.7103 C 39.4185 32.6755 36.1954 35.8349 31.9971 35.8349 Z M 25.5086 49.1723 L 28.2651 44.3801 C 28.6468 43.7228 28.4348 42.9807 27.7986 42.6202 C 27.1625 42.2385 26.4416 42.4506 26.0599 43.1079 L 23.2821 47.9212 C 22.9217 48.5361 23.0913 49.2783 23.7486 49.6600 C 24.3848 49.9993 25.1481 49.7872 25.5086 49.1723 Z M 8.6301 49.1935 L 11.3866 44.4014 C 11.7895 43.7440 11.5775 43.0019 10.9413 42.6414 C 10.3052 42.2597 9.5631 42.4718 9.1814 43.1291 L 6.4036 47.9425 C 6.0432 48.5574 6.2340 49.2995 6.8914 49.6812 C 7.5063 50.0204 8.2696 49.8084 8.6301 49.1935 Z M 32.1455 55.1307 L 34.9020 50.3597 C 35.2837 49.7024 35.0717 48.9602 34.4355 48.5786 C 33.7994 48.2181 33.0785 48.4301 32.6968 49.0662 L 29.8978 53.9008 C 29.5586 54.4945 29.7282 55.2367 30.3855 55.6183 C 31.0217 55.9788 31.7850 55.7668 32.1455 55.1307 Z M 15.2670 55.1518 L 18.0235 50.3809 C 18.4052 49.7236 18.2144 48.9814 17.5783 48.5998 C 16.9209 48.2393 16.2000 48.4513 15.8183 49.0875 L 13.0405 53.9220 C 12.6801 54.5157 12.8709 55.2579 13.5071 55.6396 C 14.1432 56 14.9065 55.7880 15.2670 55.1518 Z"
  }));
}

export default CloudMoonRain;