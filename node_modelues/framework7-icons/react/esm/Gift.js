function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Gift(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 9.6601 16.0937 C 6.9179 16.0937 5.2070 17.8984 5.2070 20.7578 L 5.2070 26.6641 C 5.2070 29.1250 6.4023 30.8125 8.5820 31.2344 L 8.5820 45.8125 C 8.5820 50.2422 10.9960 52.5625 15.4257 52.5625 L 40.5742 52.5625 C 45.0039 52.5625 47.4181 50.2422 47.4181 45.8125 L 47.4181 31.2344 C 49.6208 30.8125 50.7930 29.1250 50.7930 26.6641 L 50.7930 20.7578 C 50.7930 17.8984 49.2224 16.0937 46.3398 16.0937 L 41.3711 16.0937 C 42.6835 14.8047 43.4570 13.1172 43.4570 11.2188 C 43.4570 6.6719 39.8711 3.4375 35.3242 3.4375 C 31.9726 3.4375 29.2304 5.2891 28.0117 8.5937 C 26.7929 5.2891 24.0273 3.4375 20.6757 3.4375 C 16.1523 3.4375 12.5429 6.6719 12.5429 11.2188 C 12.5429 13.1172 13.2929 14.8047 14.6054 16.0937 Z M 22.4335 16.0937 C 18.5664 16.0937 16.5273 13.8203 16.5273 11.3828 C 16.5273 8.8516 18.4023 7.3516 20.9101 7.3516 C 23.7929 7.3516 26.0664 9.5781 26.0664 13.3047 L 26.0664 16.0937 Z M 33.5664 16.0937 L 29.9335 16.0937 L 29.9335 13.3047 C 29.9335 9.5781 32.2070 7.3516 35.0898 7.3516 C 37.5976 7.3516 39.4960 8.8516 39.4960 11.3828 C 39.4960 13.8203 37.3867 16.0937 33.5664 16.0937 Z M 10.6211 19.6328 L 25.9257 19.6328 L 25.9257 27.7891 L 10.6211 27.7891 C 9.4492 27.7891 8.9804 27.2969 8.9804 26.1250 L 8.9804 21.2734 C 8.9804 20.1016 9.4492 19.6328 10.6211 19.6328 Z M 45.4023 19.6328 C 46.5742 19.6328 47.0195 20.1016 47.0195 21.2734 L 47.0195 26.1250 C 47.0195 27.2969 46.5742 27.7891 45.4023 27.7891 L 30.0742 27.7891 L 30.0742 19.6328 Z M 15.4023 49.0469 C 13.4335 49.0469 12.3555 47.9453 12.3555 46.0000 L 12.3555 31.3281 L 25.9257 31.3281 L 25.9257 49.0469 Z M 43.6445 46.0000 C 43.6445 47.9453 42.5664 49.0469 40.6211 49.0469 L 30.0742 49.0469 L 30.0742 31.3281 L 43.6445 31.3281 Z"
  }));
}

export default Gift;