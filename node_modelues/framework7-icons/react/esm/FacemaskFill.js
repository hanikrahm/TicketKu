function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function FacemaskFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M25.0081347,0 C28.584638,0 31.6050042,0.291679398 34.0692334,0.875038195 C36.533485,1.45839699 38.4062938,2.31435315 39.68766,3.44290666 C40.2842443,3.9684354 40.7419242,4.54893756 41.0606997,5.18441316 L44.6515581,5.18480982 C45.7855381,5.18480982 46.7505823,5.40834546 47.5466908,5.85541675 C48.3425759,6.3024657 48.9504321,6.9403462 49.3702592,7.76905825 C49.7900864,8.59774797 50,9.59000281 50,10.7458228 C50,12.501348 49.6019458,14.0524307 48.8058373,15.3990711 C48.0099522,16.7456891 46.8950654,17.7979144 45.4611769,18.5557472 C44.1297091,19.259449 42.5937532,19.6364321 40.8533093,19.6866965 L40.295174,19.6935169 C39.4892457,20.7822909 38.3708255,21.7224093 36.9399134,22.5138722 C35.4515367,23.3371176 33.6959669,23.9722708 31.6732038,24.4193318 C29.6505077,24.8663932 27.428818,25.089924 25.0081347,25.089924 C22.5765761,25.089924 20.3494487,24.8663932 18.3267527,24.4193318 C16.3040789,23.9722708 14.5485537,23.3371176 13.060177,22.5138722 C11.6862909,21.7539514 10.6004189,20.8569876 9.80256125,19.8229808 L9.706,19.692 L9.56819747,19.6924962 C7.78617466,19.6924962 6.2133477,19.3657775 4.8497166,18.7123402 L4.53874604,18.5557472 C3.10487991,17.7979144 1.98995961,16.7456891 1.19398514,15.3990711 C0.397995048,14.0524307 0,12.501348 0,10.7458228 C0,9.59000281 0.209899074,8.59774797 0.629697221,7.76905825 C1.04950207,6.9403462 1.65740289,6.3024657 2.45339969,5.85541675 C3.1697767,5.45305259 4.02305501,5.23175231 5.01323461,5.19151589 L5.34836489,5.18480982 L8.93928548,5.18441316 C9.25807759,4.54893756 9.71578142,3.9684354 10.312397,3.44290666 C11.5936068,2.31435315 13.4690731,1.45839699 15.9387958,0.875038195 C18.4085408,0.291679398 21.4316538,0 25.0081347,0 Z M8.39,7.818 L5.34836489,7.81809764 C4.47606227,7.81809764 3.80547768,8.07979736 3.33661111,8.60319679 C2.86774455,9.1265739 2.63331126,9.84078255 2.63331126,10.7458228 C2.63331126,11.9670509 2.91408185,13.0547159 3.47562304,14.0088178 C4.03718655,14.9628974 4.81953896,15.7098102 5.82268027,16.2495561 C6.61823732,16.6776006 7.5132307,16.9359151 8.50766039,17.0244997 C8.44927206,16.7182689 8.41260977,16.4061531 8.39792789,16.0876788 L8.39058224,15.7670675 L8.39,7.818 Z M44.6515581,7.81809764 L41.609,7.818 L41.6093742,15.7670675 C41.6093742,16.1974221 41.5701439,16.616192 41.4916834,17.0233772 C42.495126,16.9368761 43.3927153,16.6783973 44.1852819,16.2495561 C45.1830414,15.7098102 45.9627364,14.9628974 46.5243669,14.0088178 C47.0857741,13.0547159 47.3664777,11.9670509 47.3664777,10.7458228 C47.3664777,9.84078255 47.1321114,9.1265739 46.6633788,8.60319679 C46.2335026,8.12341398 45.6341835,7.86353162 44.8654215,7.82354972 L44.6515581,7.81809764 Z M32.5156496,13.9679182 L17.5007873,13.9679182 C17.1300665,13.9679182 16.8111319,14.1014925 16.5439833,14.368641 C16.2768348,14.6357895 16.1432605,14.9601842 16.1432605,15.341825 C16.1432605,15.7125458 16.2768348,16.0314804 16.5439833,16.298629 C16.7729678,16.5276134 17.0399992,16.6584617 17.3450776,16.6911738 L17.5007873,16.6993518 L32.5156496,16.6993518 C32.8972903,16.6993518 33.2216515,16.5657775 33.488733,16.298629 C33.7558146,16.0314804 33.8893554,15.7125458 33.8893554,15.341825 C33.8893554,14.9601842 33.7558146,14.6357895 33.488733,14.368641 C33.259806,14.1396565 32.988796,14.0088083 32.675703,13.9760962 L32.5156496,13.9679182 Z M32.5156496,7.67091248 L17.5007873,7.67091248 C17.1300665,7.67091248 16.8111319,7.80448675 16.5439833,8.07163529 C16.2768348,8.33878383 16.1432605,8.6577185 16.1432605,9.02843929 C16.1432605,9.41008006 16.2768348,9.73447472 16.5439833,10.0016233 C16.7729678,10.2306077 17.0399992,10.361456 17.3450776,10.394168 L17.5007873,10.4023461 L32.5156496,10.4023461 C32.8972903,10.4023461 33.2216515,10.2687718 33.488733,10.0016233 C33.7558146,9.73447472 33.8893554,9.41008006 33.8893554,9.02843929 C33.8893554,8.6577185 33.7558146,8.33878383 33.488733,8.07163529 C33.259806,7.84265083 32.988796,7.71180256 32.675703,7.6790905 L32.5156496,7.67091248 Z",
    transform: "translate(3 15)"
  }));
}

export default FacemaskFill;