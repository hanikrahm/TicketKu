function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ChatBubbleTextFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M0.17,22.559188 C0.17,10.5904526 11.7325761,0.885839053 26,0.885839053 C40.2652635,0.885839053 51.83,10.5904526 51.83,22.559188 C51.83,34.5300838 40.2652635,44.2346974 26,44.2346974 C24.4509778,44.2346974 22.9365222,44.120195 21.4631148,43.9019924 C21.4609543,43.9019924 21.4566335,43.899832 21.4544731,43.899832 C17.9653923,43.0680697 16.4876639,46.9481868 8.53731265,48.9595393 C6.90403396,49.3743402 6.7074356,48.9616997 7.95831967,47.6352009 C10.2224415,45.2392934 12.4044672,41.3332512 10.1360246,39.6632454 C10.0668911,39.6221974 9.19192037,39.0194398 8.85921546,38.7753121 C3.5294555,34.8044573 0.17,29.0080463 0.17,22.559188 Z M38.1016,13 L14.4531,13 C13.6094,13 13,13.6328 13,14.4297 C13,15.25 13.6094,15.8828 14.4531,15.8828 L38.1016,15.8828 C38.9219,15.8828 39.5547,15.25 39.5547,14.4297 C39.5547,13.6328 38.9219,13 38.1016,13 Z M38.1016,21.1797 L14.4531,21.1797 C13.6094,21.1797 13,21.8359 13,22.6562 C13,23.4531 13.6094,24.0625 14.4531,24.0625 L38.1016,24.0625 C38.9219,24.0625 39.5547,23.4531 39.5547,22.6562 C39.5547,21.8359 38.9219,21.1797 38.1016,21.1797 Z M29.7579,29 L14.4531,29 C13.6094,29 13,29.6562 13,30.4765 C13,31.2734 13.6094,31.8828 14.4531,31.8828 L29.7579,31.8828 C30.5782,31.8828 31.211,31.2734 31.211,30.4765 C31.211,29.6562 30.5782,29 29.7579,29 Z",
    transform: "translate(2 3)"
  }));
}

export default ChatBubbleTextFill;