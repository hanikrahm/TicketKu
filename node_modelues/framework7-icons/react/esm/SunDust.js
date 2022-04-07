function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SunDust(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9933 9.9001 C 29.0415 9.8769 29.8801 9.0149 29.8801 7.8037 L 29.8801 2.0732 C 29.8801 .8619 29.0415 0 27.9933 0 C 26.9451 0 26.1065 .8619 26.1065 2.0732 L 26.1065 7.8037 C 26.1065 9.0149 26.9451 9.9234 27.9933 9.9001 Z M 40.0132 14.8619 C 40.7587 15.5840 41.9700 15.5840 42.8319 14.7454 L 46.8849 10.6922 C 47.7470 9.8303 47.7236 8.6190 47.0018 7.8735 C 46.2795 7.1281 45.0682 7.1281 44.2062 7.9900 L 40.1530 12.0432 C 39.2911 12.9051 39.2678 14.1397 40.0132 14.8619 Z M 15.9733 14.8619 C 16.6955 14.1165 16.6955 12.9051 15.8569 12.0432 L 11.8036 7.9900 C 10.9184 7.1281 9.7304 7.1514 9.0083 7.8735 C 8.2396 8.5956 8.2396 9.8303 9.1014 10.6922 L 13.1547 14.7454 C 14.0166 15.5840 15.2745 15.6073 15.9733 14.8619 Z M 4.3028 37.2246 L 51.6141 37.2246 C 52.4295 37.2246 53.0816 36.5724 53.0816 35.7338 C 53.0816 34.8952 52.4295 34.2662 51.6141 34.2662 L 38.3128 34.2662 C 39.8269 32.1930 40.7354 29.6306 40.7354 26.8818 C 40.7354 19.8935 34.9583 14.1165 27.9933 14.1165 C 21.0515 14.1165 15.2512 19.8935 15.2512 26.8818 C 15.2512 29.6306 16.1597 32.1930 17.6738 34.2662 L 4.3028 34.2662 C 3.4642 34.2662 2.8352 34.8952 2.8352 35.7338 C 2.8352 36.5724 3.4642 37.2246 4.3028 37.2246 Z M 19.0016 26.8818 C 19.0016 21.9434 23.0549 17.8902 27.9933 17.8902 C 32.9317 17.8902 36.9850 21.9434 36.9850 26.8818 C 36.9850 29.9567 35.4010 32.6822 33.0249 34.2662 L 22.9850 34.2662 C 20.5856 32.6822 19.0016 29.9567 19.0016 26.8818 Z M 47.0715 28.1863 L 52.8020 28.1863 C 54.0133 28.1863 54.8749 27.3245 54.8749 26.2762 C 54.8749 25.2512 54.0133 24.4126 52.8020 24.3893 L 47.0715 24.3893 C 45.8602 24.3893 44.9518 25.2512 44.9752 26.2762 C 44.9981 27.3245 45.8602 28.1863 47.0715 28.1863 Z M 3.1846 28.1863 L 8.9151 28.1863 C 10.1264 28.1863 11.0349 27.3245 11.0116 26.2762 C 10.9883 25.2512 10.1264 24.3893 8.9151 24.3893 L 3.1846 24.3893 C 1.9966 24.3893 1.1114 25.2512 1.1114 26.2762 C 1.1114 27.3245 1.9966 28.1863 3.1846 28.1863 Z M 16.2295 44.7254 C 16.8585 44.7254 17.3943 44.1897 17.3943 43.5374 C 17.3943 42.8852 16.8585 42.3494 16.2295 42.3494 C 15.5540 42.3494 15.0183 42.8852 15.0183 43.5374 C 15.0183 44.1897 15.5540 44.7254 16.2295 44.7254 Z M 26.0598 44.7254 C 26.7121 44.7254 27.2246 44.1897 27.2246 43.5374 C 27.2246 42.8852 26.7121 42.3494 26.0598 42.3494 C 25.3843 42.3494 24.8718 42.8852 24.8718 43.5374 C 24.8718 44.1897 25.3843 44.7254 26.0598 44.7254 Z M 35.9134 44.7254 C 36.5424 44.7254 37.0781 44.1897 37.0781 43.5374 C 37.0781 42.8852 36.5424 42.3494 35.9134 42.3494 C 35.2379 42.3494 34.7021 42.8852 34.7021 43.5374 C 34.7021 44.1897 35.2379 44.7254 35.9134 44.7254 Z M 45.7438 44.7254 C 46.3959 44.7254 46.9083 44.1897 46.9083 43.5374 C 46.9083 42.8852 46.3959 42.3494 45.7438 42.3494 C 45.0682 42.3494 44.5559 42.8852 44.5559 43.5374 C 44.5559 44.1897 45.0682 44.7254 45.7438 44.7254 Z M 6.3760 44.7254 C 7.0282 44.7254 7.5407 44.1897 7.5407 43.5374 C 7.5407 42.8852 7.0282 42.3494 6.3760 42.3494 C 5.7237 42.3494 5.1880 42.8852 5.1880 43.5374 C 5.1880 44.1897 5.7237 44.7254 6.3760 44.7254 Z M 23.1014 50.3860 C 23.7304 50.3860 24.2662 49.8503 24.2662 49.1747 C 24.2662 48.5458 23.7304 48.0100 23.1014 48.0100 C 22.4259 48.0100 21.8901 48.5458 21.8901 49.1747 C 21.8901 49.8503 22.4259 50.3860 23.1014 50.3860 Z M 32.9317 50.3860 C 33.5607 50.3860 34.0965 49.8503 34.0965 49.1747 C 34.0965 48.5458 33.5607 48.0100 32.9317 48.0100 C 32.2562 48.0100 31.7437 48.5458 31.7437 49.1747 C 31.7437 49.8503 32.2562 50.3860 32.9317 50.3860 Z M 42.7853 50.3860 C 43.4142 50.3860 43.9500 49.8503 43.9500 49.1747 C 43.9500 48.5458 43.4142 48.0100 42.7853 48.0100 C 42.1098 48.0100 41.5740 48.5458 41.5740 49.1747 C 41.5740 49.8503 42.1098 50.3860 42.7853 50.3860 Z M 52.6155 50.3860 C 53.2448 50.3860 53.7805 49.8503 53.7805 49.1747 C 53.7805 48.5458 53.2448 48.0100 52.6155 48.0100 C 51.9400 48.0100 51.4276 48.5458 51.4276 49.1747 C 51.4276 49.8503 51.9400 50.3860 52.6155 50.3860 Z M 3.4176 50.3860 C 4.0465 50.3860 4.5823 49.8503 4.5823 49.1747 C 4.5823 48.5458 4.0465 48.0100 3.4176 48.0100 C 2.7420 48.0100 2.2063 48.5458 2.2063 49.1747 C 2.2063 49.8503 2.7420 50.3860 3.4176 50.3860 Z M 13.2478 50.3860 C 13.8768 50.3860 14.4126 49.8503 14.4126 49.1747 C 14.4126 48.5458 13.8768 48.0100 13.2478 48.0100 C 12.5723 48.0100 12.0598 48.5458 12.0598 49.1747 C 12.0598 49.8503 12.5723 50.3860 13.2478 50.3860 Z M 29.9500 56 C 30.6023 56 31.1380 55.4642 31.1380 54.8119 C 31.1380 54.1597 30.6023 53.6472 29.9500 53.6472 C 29.2978 53.6472 28.7620 54.1597 28.7620 54.8119 C 28.7620 55.4642 29.2978 56 29.9500 56 Z M 39.8036 56 C 40.4325 56 40.9683 55.4642 40.9683 54.8119 C 40.9683 54.1597 40.4325 53.6472 39.8036 53.6472 C 39.1281 53.6472 38.6156 54.1597 38.6156 54.8119 C 38.6156 55.4642 39.1281 56 39.8036 56 Z M 20.1197 56 C 20.7487 56 21.2845 55.4642 21.2845 54.8119 C 21.2845 54.1597 20.7487 53.6472 20.1197 53.6472 C 19.4442 53.6472 18.9317 54.1597 18.9317 54.8119 C 18.9317 55.4642 19.4442 56 20.1197 56 Z M 49.6338 56 C 50.2860 56 50.8217 55.4642 50.8217 54.8119 C 50.8217 54.1597 50.2860 53.6472 49.6338 53.6472 C 48.9817 53.6472 48.4459 54.1597 48.4459 54.8119 C 48.4459 55.4642 48.9817 56 49.6338 56 Z M 10.2662 56 C 10.9184 56 11.4542 55.4642 11.4542 54.8119 C 11.4542 54.1597 10.9184 53.6472 10.2662 53.6472 C 9.6139 53.6472 9.0781 54.1597 9.0781 54.8119 C 9.0781 55.4642 9.6139 56 10.2662 56 Z"
  }));
}

export default SunDust;