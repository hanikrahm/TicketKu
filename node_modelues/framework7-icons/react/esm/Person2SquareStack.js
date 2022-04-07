function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Person2SquareStack(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 16.3750 3.6367 L 39.1094 3.6367 C 38.9688 1.6445 37.8437 .6133 35.6875 .6133 L 19.8203 .6133 C 17.6641 .6133 16.5156 1.6445 16.3750 3.6367 Z M 12.2266 10.1289 L 43.0937 10.1289 C 42.7422 7.9961 41.7344 6.8242 39.3906 6.8242 L 15.9297 6.8242 C 13.5859 6.8242 12.5781 7.9961 12.2266 10.1289 Z M 14.5937 55.3867 L 42.1094 55.3867 C 46.3281 55.3867 48.7656 52.9492 48.7656 48.1211 L 48.7656 21.1211 C 48.7656 16.2930 46.3047 13.8555 41.4063 13.8555 L 14.5937 13.8555 C 9.7188 13.8555 7.2344 16.2930 7.2344 21.1211 L 7.2344 48.1211 C 7.2344 52.9727 9.7188 55.3867 14.5937 55.3867 Z M 25.5625 51.6133 L 22.5625 51.6133 C 21.2031 49.7852 22.8672 44.9336 25.6563 42.7305 C 24.3906 41.7930 22.6094 41.2539 20.3594 41.2539 C 15.4609 41.2539 11.9219 44.3008 11.0078 47.5586 L 11.0078 21.3320 C 11.0078 18.8945 12.3203 17.6289 14.6641 17.6289 L 41.3594 17.6289 C 43.6797 17.6289 44.9922 18.8945 44.9922 21.3320 L 44.9922 45.6836 C 43.3047 43.3164 39.8125 41.3008 35.3359 41.3008 C 28.6094 41.3008 24.3906 45.9414 24.3906 49.8789 C 24.3906 51.0273 25.1172 51.6133 25.5625 51.6133 Z M 35.3594 38.4649 C 38.1484 38.4649 40.5156 35.9805 40.5156 32.7227 C 40.5156 29.5352 38.1250 27.1445 35.3594 27.1445 C 32.5703 27.1445 30.1328 29.6055 30.1328 32.7695 C 30.1328 35.9805 32.5703 38.4649 35.3594 38.4649 Z M 20.3828 38.7930 C 22.8203 38.7930 24.9063 36.6133 24.9063 33.7539 C 24.9063 30.9649 22.7968 28.9258 20.3828 28.9258 C 17.9453 28.9258 15.8359 31.0117 15.8359 33.7773 C 15.8359 36.6133 17.9453 38.7930 20.3828 38.7930 Z"
  }));
}

export default Person2SquareStack;