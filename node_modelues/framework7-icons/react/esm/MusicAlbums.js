function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function MusicAlbums(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M35.0972068,13.8555 C39.8976388,13.8555 42.3570958,16.196475 42.4535539,20.8342831 L42.4565068,21.1211 L42.4565068,48.1211 C42.4565068,52.8486146 40.1195113,55.2840999 36.0616503,55.3835266 L35.8003068,55.3867 L8.28460677,55.3867 C3.50720477,55.3867 1.02563897,53.0682944 0.928287297,48.4092711 L0.925306768,48.1211 L0.925306768,21.1211 C0.925306768,16.389562 3.31132453,13.9539562 7.99498212,13.8584246 L8.28460677,13.8555 L35.0972068,13.8555 Z M35.0503068,17.6289 L8.35500677,17.6289 C6.08681322,17.6289 4.78445734,18.8141653 4.70279462,21.0997744 L4.69870677,21.332 L4.69870677,47.9336 C4.69870677,50.292471 5.92789511,51.5319143 8.13141631,51.6094237 L8.35500677,51.6133 L35.7534068,51.6133 C37.3148413,51.6133 38.5922272,50.4552919 38.6784662,48.1814894 L38.6831068,47.9336 L38.6831068,21.332 C38.6831068,18.973129 37.4539184,17.7117711 35.2716956,17.6328477 L35.0503068,17.6289 Z M28.0676068,23.8659063 C29.1386544,23.6031444 29.4399061,23.9178882 29.466168,24.6449719 L29.4681068,24.7571063 L29.4681068,28.9162063 C29.4681068,30.0297873 29.2075483,30.3096301 28.4035095,30.5570996 L28.1312068,30.6351063 L23.1657068,31.8234063 C22.7101468,31.922433 22.5319485,32.1138846 22.5102135,32.777368 L22.5079068,32.9269063 L22.5079068,40.2054063 C22.5079068,43.2823063 20.4495068,45.4680063 17.4151068,45.4680063 C15.2718068,45.4680063 13.9137068,44.1523063 13.9137068,42.3486063 C13.9137068,40.3432778 15.4330767,39.2061473 17.2730113,38.6709134 L17.4787068,38.6139063 L19.4310068,38.1046063 L19.7209122,38.0184042 C20.3769177,37.807991 20.5339519,37.6190596 20.5680743,37.0756773 L20.5760593,36.8385292 L20.5760593,36.8385292 L20.5768068,27.1338063 C20.5768068,26.0010444 20.7679485,25.7194567 21.5743923,25.4874562 L21.8500068,25.4149063 L28.0676068,23.8659063 Z M33.0815068,6.8242 C35.3444861,6.8242 36.3620147,7.91667277 36.7458757,9.91170187 L36.7846068,10.1289 L5.91750677,10.1289 C6.25688608,8.06964483 7.2080837,6.90616326 9.38288259,6.82837173 L9.62060677,6.8242 L33.0815068,6.8242 Z M29.3784068,0.6133 C31.4575996,0.6133 32.5780273,1.57215816 32.7814731,3.42693049 L32.8003068,3.6367 L10.0659068,3.6367 C10.2014853,1.71565 11.2742566,0.688182908 13.2840413,0.61724272 L13.5112068,0.6133 L29.3784068,0.6133 Z",
    transform: "translate(6)"
  }));
}

export default MusicAlbums;