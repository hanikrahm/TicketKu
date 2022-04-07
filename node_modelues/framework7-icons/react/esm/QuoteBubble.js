function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function QuoteBubble(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 16.5860 52.2461 C 17.7579 52.2461 18.5548 51.6367 19.9610 50.3711 L 28.0704 43.1758 L 43.0938 43.1758 C 50.0783 43.1758 53.8280 39.3086 53.8280 32.4414 L 53.8280 14.4883 C 53.8280 7.6211 50.0783 3.7539 43.0938 3.7539 L 12.9064 3.7539 C 5.9454 3.7539 2.1720 7.5976 2.1720 14.4883 L 2.1720 32.4414 C 2.1720 39.3320 5.9454 43.1758 12.9064 43.1758 L 14.0313 43.1758 L 14.0313 49.2695 C 14.0313 51.0742 14.9688 52.2461 16.5860 52.2461 Z M 17.5469 47.9570 L 17.5469 41.1602 C 17.5469 39.8945 17.0782 39.4023 15.7891 39.4023 L 12.9298 39.4023 C 8.1720 39.4023 5.9454 36.9883 5.9454 32.4180 L 5.9454 14.4883 C 5.9454 9.9180 8.1720 7.5273 12.9298 7.5273 L 43.0938 7.5273 C 47.8280 7.5273 50.0548 9.9180 50.0548 14.4883 L 50.0548 32.4180 C 50.0548 36.9883 47.8280 39.4023 43.0938 39.4023 L 27.9064 39.4023 C 26.6173 39.4023 25.9376 39.5898 25.0469 40.5039 Z M 17.2423 22.3633 C 17.2423 24.9414 18.8360 26.9336 21.4142 26.9336 C 22.3516 26.9336 23.2891 26.7695 23.8751 26.0430 L 24.0626 26.0430 C 23.2188 27.8945 21.5079 29.0898 20.0313 29.4649 C 19.1876 29.6992 18.9298 30.0742 18.9298 30.6133 C 18.9298 31.1992 19.3985 31.6445 20.0548 31.6445 C 22.3516 31.6445 26.9220 28.9258 26.9220 23.2071 C 26.9220 20.1367 24.9298 17.7695 22.0001 17.7695 C 19.2813 17.7695 17.2423 19.6680 17.2423 22.3633 Z M 29.4298 22.3633 C 29.4298 24.9414 31.0235 26.9336 33.6016 26.9336 C 34.5391 26.9336 35.4766 26.7695 36.0626 26.0430 L 36.2501 26.0430 C 35.4064 27.8945 33.6954 29.0898 32.2188 29.4649 C 31.3751 29.6992 31.1173 30.0742 31.1173 30.6133 C 31.1173 31.1992 31.5860 31.6445 32.2423 31.6445 C 34.5391 31.6445 39.1329 28.9258 39.1329 23.2071 C 39.1329 20.1367 37.1173 17.7695 34.1876 17.7695 C 31.4688 17.7695 29.4298 19.6680 29.4298 22.3633 Z"
  }));
}

export default QuoteBubble;