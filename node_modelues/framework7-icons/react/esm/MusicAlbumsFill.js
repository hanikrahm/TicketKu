function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function MusicAlbumsFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M9.8437,3.6367 C9.9844,1.6445 11.1328,0.6133 13.289,0.6133 L28.2188,0.6133 C30.375,0.6133 31.5,1.6445 31.6406,3.6367 L9.8437,3.6367 Z M5.6953,10.1289 C6.0468,7.9961 7.0547,6.8242 9.3984,6.8242 L31.9219,6.8242 C34.2656,6.8242 35.2734,7.9961 35.625,10.1289 L5.6953,10.1289 Z M7.5937,55.3867 C2.7188,55.3867 0.2344,52.9727 0.2344,48.1211 L0.2344,21.1211 C0.2344,16.293 2.7188,13.8555 7.5937,13.8555 L34.4063,13.8555 C39.3047,13.8555 41.7656,16.293 41.7656,21.1211 L41.7656,48.1211 C41.7656,52.9492 39.3281,55.3867 35.1094,55.3867 L7.5937,55.3867 Z M27.4403,30.6351063 C28.4589,30.3593063 28.7772,30.1470063 28.7772,28.9162063 L28.7772,24.7571063 C28.7772,23.9508063 28.5013,23.5900063 27.3767,23.8659063 L21.1591,25.4149063 C20.1194,25.6696063 19.8859,25.8818063 19.8859,27.1338063 L19.8859,36.7041063 C19.8859,37.6377063 19.8011,37.8075063 18.7401,38.1046063 L16.7878,38.6139063 C14.8568,39.1231063 13.2228,40.2690063 13.2228,42.3486063 C13.2228,44.1523063 14.5809,45.4680063 16.7242,45.4680063 C19.7586,45.4680063 21.817,43.2823063 21.817,40.2054063 L21.817,32.9269063 C21.817,32.1417063 21.9867,31.9295063 22.4748,31.8234063 L27.4403,30.6351063 Z",
    transform: "translate(7)"
  }));
}

export default MusicAlbumsFill;