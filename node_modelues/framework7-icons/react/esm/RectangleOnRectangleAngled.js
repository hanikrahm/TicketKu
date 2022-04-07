function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function RectangleOnRectangleAngled(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 11.8302 46.6220 L 12.4197 46.5204 L 12.4197 47.6790 C 12.4197 51.8664 14.5336 53.9803 18.8022 53.9803 L 49.6174 53.9803 C 53.8661 53.9803 56 51.8664 56 47.6790 L 56 26.0717 C 56 21.9047 53.8661 19.7907 49.6174 19.7907 L 44.8613 19.7907 L 43.6619 12.8796 C 42.9301 8.7533 40.4502 7.0458 36.2833 7.7776 L 5.9354 13.1439 C 1.7278 13.8756 0 16.3149 .7521 20.4615 L 4.4515 41.5200 C 5.2036 45.6464 7.6429 47.3538 11.8302 46.6220 Z M 7.6429 40.7679 L 4.0044 20.0550 C 3.6182 17.9817 4.5532 16.7011 6.5452 16.3555 L 36.8117 11.0096 C 38.7834 10.6640 40.1047 11.5584 40.4706 13.6317 L 41.5684 19.7907 L 18.8022 19.7907 C 14.5336 19.7907 12.4197 21.8844 12.4197 26.0717 L 12.4197 43.1868 L 11.3220 43.3901 C 9.3097 43.7356 8.0087 42.8413 7.6429 40.7679 Z M 18.8429 50.7077 C 16.8102 50.7077 15.6922 49.6101 15.6922 47.4961 L 15.6922 26.2546 C 15.6922 24.1407 16.8102 23.0633 18.8429 23.0633 L 49.5770 23.0633 C 51.5690 23.0633 52.7275 24.1407 52.7275 26.2546 L 52.7275 47.4961 C 52.7275 49.6101 51.5690 50.7077 49.5770 50.7077 Z"
  }));
}

export default RectangleOnRectangleAngled;