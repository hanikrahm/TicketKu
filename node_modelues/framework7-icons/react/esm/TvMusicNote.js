function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function TvMusicNote(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 5.4536 43.0962 L 50.5464 43.0962 C 54.1747 43.0962 56 41.3561 56 37.6426 L 56 13.3243 C 56 9.6108 54.1747 7.8708 50.5464 7.8708 L 5.4536 7.8708 C 1.8249 7.8708 0 9.6108 0 13.3243 L 0 37.6426 C 0 41.3561 1.8249 43.0962 5.4536 43.0962 Z M 5.5172 39.6797 C 4.0743 39.6797 3.4164 39.0856 3.4164 37.6001 L 3.4164 13.3880 C 3.4164 11.8814 4.0743 11.2872 5.5172 11.2872 L 50.4825 11.2872 C 51.9466 11.2872 52.5833 11.8814 52.5833 13.3880 L 52.5833 37.6001 C 52.5833 39.0856 51.9466 39.6797 50.4825 39.6797 Z M 34.0158 20.8575 C 35.0344 20.5817 35.3527 20.3694 35.3527 19.1386 L 35.3527 14.9795 C 35.3527 14.1732 35.0768 13.8124 33.9522 14.0883 L 27.7346 15.6373 C 26.6949 15.8920 26.4614 16.1042 26.4614 17.3562 L 26.4614 26.9265 C 26.4614 27.8601 26.3766 28.0299 25.3156 28.3270 L 23.3633 28.8363 C 21.4323 29.3455 19.7983 30.4914 19.7983 32.5710 C 19.7983 34.3747 21.1564 35.6904 23.2997 35.6904 C 26.3341 35.6904 28.3925 33.5047 28.3925 30.4278 L 28.3925 23.1493 C 28.3925 22.3641 28.5622 22.1519 29.0503 22.0458 Z M 43.4374 48.9953 C 43.4374 47.8919 42.5465 47.0007 41.4639 47.0007 L 14.4933 47.0007 C 13.4111 47.0007 12.5411 47.8919 12.5411 48.9953 C 12.5411 50.0988 13.4111 50.9901 14.4933 50.9901 L 41.4639 50.9901 C 42.5465 50.9901 43.4374 50.0988 43.4374 48.9953 Z"
  }));
}

export default TvMusicNote;