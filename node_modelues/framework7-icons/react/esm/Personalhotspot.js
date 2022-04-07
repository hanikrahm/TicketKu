function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Personalhotspot(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 11.3091 35.4341 L 12.9081 35.4341 C 12.7911 34.4202 12.6935 33.3088 12.8105 32.2949 L 11.5432 32.2949 C 6.7465 32.2949 3.3342 28.9217 3.3342 24.0860 C 3.3342 19.2894 6.7465 15.8966 11.5432 15.8966 L 28.8189 15.8966 C 33.6155 15.8966 37.0278 19.2894 37.0278 24.0860 C 37.0278 28.9217 33.6155 32.2949 28.8189 32.2949 L 21.9749 32.2949 C 21.7019 33.0553 21.7994 34.5373 22.4233 35.4341 L 29.0528 35.4341 C 35.6629 35.4341 40.3618 30.7935 40.3618 24.0860 C 40.3618 17.3980 35.6629 12.7573 29.0528 12.7573 L 11.3091 12.7573 C 4.6991 12.7573 0 17.3980 0 24.0860 C 0 30.7935 4.6991 35.4341 11.3091 35.4341 Z M 26.9470 44.5010 L 44.6906 44.5010 C 51.3007 44.5010 56 39.8603 56 33.1529 C 56 26.4648 51.3007 21.8242 44.6906 21.8242 L 43.0916 21.8242 C 43.2087 22.8186 43.3065 23.9495 43.1895 24.9634 L 44.4566 24.9634 C 49.2533 24.9634 52.6656 28.3367 52.6656 33.1529 C 52.6656 37.9690 49.2533 41.3617 44.4566 41.3617 L 27.1810 41.3617 C 22.3843 41.3617 18.9721 37.9690 18.9721 33.1529 C 18.9721 28.3367 22.3843 24.9634 27.1810 24.9634 L 34.0250 24.9634 C 34.2785 24.2030 34.1809 22.7211 33.5765 21.8242 L 26.9470 21.8242 C 20.3370 21.8242 15.6378 26.4648 15.6378 33.1529 C 15.6378 39.8603 20.3370 44.5010 26.9470 44.5010 Z"
  }));
}

export default Personalhotspot;