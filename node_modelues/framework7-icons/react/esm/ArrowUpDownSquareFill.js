function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUpDownSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 28.6210 12.2383 C 29.1601 12.2383 29.6054 12.4492 30.1210 12.9649 L 38.6757 21.4961 C 39.0039 21.8242 39.1913 22.2930 39.1913 22.8320 C 39.1913 23.8867 38.3944 24.6836 37.3398 24.6836 C 36.7773 24.6836 36.3085 24.4492 35.9804 24.1211 L 32.8866 21.0039 L 30.3320 17.9571 L 30.5429 23.3477 L 30.5429 32.5586 L 30.3320 37.9492 L 32.8866 34.9023 L 35.9804 31.7617 C 36.3085 31.4336 36.7773 31.1992 37.3398 31.1992 C 38.3944 31.1992 39.1913 31.9961 39.1913 33.0508 C 39.1913 33.5898 39.0039 34.0586 38.6757 34.3867 L 30.1210 42.9180 C 29.6054 43.4336 29.1601 43.6680 28.6210 43.6680 C 28.0351 43.6680 27.5898 43.4102 27.0976 42.9180 L 18.5429 34.3867 C 18.2148 34.0586 18.0039 33.5898 18.0039 33.0508 C 18.0039 31.9961 18.8710 31.1992 19.8788 31.1992 C 20.4413 31.1992 20.9101 31.4102 21.2617 31.7617 L 24.3320 34.9023 L 26.9101 37.9727 L 26.6992 32.5586 L 26.6992 23.3477 L 26.9101 17.9336 L 24.3320 21.0039 L 21.2617 24.1211 C 20.9101 24.4727 20.4413 24.6836 19.8788 24.6836 C 18.8710 24.6836 18.0039 23.8867 18.0039 22.8320 C 18.0039 22.2930 18.2148 21.8242 18.5429 21.4961 L 27.0976 12.9649 C 27.5898 12.4961 28.0351 12.2383 28.6210 12.2383 Z"
  }));
}

export default ArrowUpDownSquareFill;