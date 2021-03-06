function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function EnvelopeBadge(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 47.8798 21.9411 C 52.3025 21.9411 56 18.2671 56 13.8208 C 56 9.3745 52.3025 5.7004 47.8798 5.7004 C 43.4332 5.7004 39.7593 9.3745 39.7593 13.8208 C 39.7593 18.2671 43.4332 21.9411 47.8798 21.9411 Z M 7.3481 50.3506 L 45.0244 50.3506 C 49.2371 50.3506 51.6708 47.9169 51.6708 43.0961 L 51.6708 24.4685 C 50.5709 24.8897 49.3540 25.1003 48.0902 25.1237 L 48.0902 43.1195 C 48.0902 43.2131 48.0902 43.3302 48.0902 43.4238 L 34.7279 30.2253 L 41.7484 23.3218 C 40.7889 22.7134 39.9231 21.9177 39.2210 21.0284 L 28.7137 31.3720 C 27.7075 32.3782 26.8182 32.8228 25.8821 32.8228 C 24.9461 32.8228 24.0568 32.3782 23.0505 31.3720 L 5.3823 13.9378 C 5.8972 13.7272 6.5056 13.6102 7.2311 13.6102 L 36.5766 13.6102 C 36.6001 12.3465 36.8106 11.1296 37.2319 10.0297 L 6.6461 10.0297 C 2.4571 10.0297 0 12.4401 0 17.2608 L 0 43.0961 C 0 47.9403 2.4806 50.3506 7.3481 50.3506 Z M 3.5804 43.0961 L 3.5804 17.2608 C 3.5804 17.1672 3.5804 17.0970 3.5804 17.0268 L 17.0363 30.2253 L 3.6038 43.4940 C 3.5804 43.3770 3.5804 43.2365 3.5804 43.0961 Z M 25.8821 36.4267 C 27.5202 36.4267 29.1116 35.7480 30.7496 34.1333 L 32.2708 32.6356 L 46.2417 46.4426 C 45.7265 46.6766 45.1418 46.7702 44.4632 46.7702 L 7.2311 46.7702 C 6.5524 46.7702 5.9908 46.6766 5.4994 46.4660 L 19.4935 32.6356 L 21.0146 34.1333 C 22.6527 35.7480 24.2206 36.4267 25.8821 36.4267 Z"
  }));
}

export default EnvelopeBadge;