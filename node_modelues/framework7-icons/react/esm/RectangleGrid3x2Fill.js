function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function RectangleGrid3x2Fill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 43.4921 26.0664 L 48.7888 26.0664 C 51.7657 26.0664 53.2657 24.5664 53.2657 21.4727 L 53.2657 10.9961 C 53.2657 7.9023 51.7657 6.4258 48.7888 6.4258 L 43.4921 6.4258 C 40.5155 6.4258 39.0155 7.9023 39.0155 10.9961 L 39.0155 21.4727 C 39.0155 24.5664 40.5155 26.0664 43.4921 26.0664 Z M 7.2108 26.0664 L 12.5077 26.0664 C 15.4843 26.0664 16.9843 24.5664 16.9843 21.4727 L 16.9843 10.9961 C 16.9843 7.9023 15.4843 6.4258 12.5077 6.4258 L 7.2108 6.4258 C 4.2343 6.4258 2.7343 7.9023 2.7343 10.9961 L 2.7343 21.4727 C 2.7343 24.5664 4.2343 26.0664 7.2108 26.0664 Z M 25.3515 26.0664 L 30.6484 26.0664 C 33.6249 26.0664 35.1249 24.5664 35.1249 21.4727 L 35.1249 10.9961 C 35.1249 7.9023 33.6249 6.4258 30.6484 6.4258 L 25.3515 6.4258 C 22.3749 6.4258 20.8749 7.9023 20.8749 10.9961 L 20.8749 21.4727 C 20.8749 24.5664 22.3749 26.0664 25.3515 26.0664 Z M 7.2108 49.5742 L 12.5077 49.5742 C 15.4843 49.5742 16.9843 48.0977 16.9843 45.0039 L 16.9843 34.5039 C 16.9843 31.4336 15.4843 29.9336 12.5077 29.9336 L 7.2108 29.9336 C 4.2343 29.9336 2.7343 31.4336 2.7343 34.5039 L 2.7343 45.0039 C 2.7343 48.0977 4.2343 49.5742 7.2108 49.5742 Z M 25.3515 49.5742 L 30.6484 49.5742 C 33.6249 49.5742 35.1249 48.0977 35.1249 45.0039 L 35.1249 34.5039 C 35.1249 31.4336 33.6249 29.9336 30.6484 29.9336 L 25.3515 29.9336 C 22.3749 29.9336 20.8749 31.4336 20.8749 34.5039 L 20.8749 45.0039 C 20.8749 48.0977 22.3749 49.5742 25.3515 49.5742 Z M 43.4921 49.5742 L 48.7888 49.5742 C 51.7657 49.5742 53.2657 48.0977 53.2657 45.0039 L 53.2657 34.5039 C 53.2657 31.4336 51.7657 29.9336 48.7888 29.9336 L 43.4921 29.9336 C 40.5155 29.9336 39.0155 31.4336 39.0155 34.5039 L 39.0155 45.0039 C 39.0155 48.0977 40.5155 49.5742 43.4921 49.5742 Z"
  }));
}

export default RectangleGrid3x2Fill;