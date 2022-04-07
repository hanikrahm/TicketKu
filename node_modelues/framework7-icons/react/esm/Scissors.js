function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Scissors(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 8.7834 25.4035 C 12.8692 25.4035 13.5247 23.7211 15.3382 23.7211 C 15.7533 23.7211 16.0592 23.8085 16.6055 24.0707 L 20.3199 26.0371 C 20.7569 26.2775 21.1283 26.4960 21.4342 26.6926 L 21.5653 26.6926 C 22.0678 24.8573 22.8762 23.6774 24.2746 22.8034 L 24.2746 22.6723 L 19.2930 20.0286 C 17.7416 19.1983 17.6105 18.5209 17.6105 16.5763 C 17.6105 11.6384 13.6777 7.7055 8.7834 7.7055 C 3.9110 7.7055 0 11.6603 0 16.5763 C 0 21.4706 3.9110 25.4035 8.7834 25.4035 Z M 8.7834 21.8420 C 5.9212 21.8420 3.5833 19.4604 3.5833 16.5763 C 3.5833 13.6267 5.9212 11.2888 8.7834 11.2888 C 11.7331 11.2888 14.0491 13.6267 14.0491 16.5763 C 14.0491 19.4604 11.7331 21.8420 8.7834 21.8420 Z M 8.7834 50.2680 C 13.6777 50.2680 17.6105 46.3352 17.6105 41.3972 C 17.6105 39.5837 17.6980 38.8627 19.0308 38.1417 L 56.0000 18.4991 C 55.1042 15.2217 51.5427 14.6536 46.1023 16.5982 L 27.4428 23.3060 C 24.8208 24.2455 23.7065 25.5346 22.9855 27.9599 L 22.5485 29.5548 C 22.2208 30.6910 21.7182 31.2591 20.0140 32.1331 L 16.6055 33.9247 C 16.0592 34.2088 15.7533 34.2962 15.3382 34.2962 C 13.5247 34.2962 12.8692 32.5919 8.7834 32.5919 C 3.9110 32.5919 0 36.5248 0 41.3972 C 0 46.3133 3.9110 50.2680 8.7834 50.2680 Z M 27.9453 29.6423 C 26.9621 29.6423 26.1100 28.8338 26.1100 27.8288 C 26.1100 26.7800 26.9621 25.9934 27.9453 25.9934 C 28.9503 25.9934 29.8025 26.7800 29.8025 27.8288 C 29.8025 28.8338 28.9503 29.6423 27.9453 29.6423 Z M 46.1023 41.4409 C 51.5861 43.4729 55.1042 42.8174 56.0000 39.4526 L 38.2145 30.0574 L 29.1907 34.7987 L 29.1907 35.0609 Z M 8.7834 46.6847 C 5.9212 46.6847 3.5833 44.3469 3.5833 41.3972 C 3.5833 38.5131 5.9212 36.1534 8.7834 36.1534 C 11.7331 36.1534 14.0491 38.5131 14.0491 41.3972 C 14.0491 44.3469 11.7331 46.6847 8.7834 46.6847 Z"
  }));
}

export default Scissors;