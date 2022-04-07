function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Giftcard(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M44.5927283,0 C46.8851522,0 48.6044701,0.569457711 49.7506821,1.70837313 C50.8365671,2.78734564 51.4080855,4.36429961 51.4652373,6.43923503 L51.47,6.78966855 L51.47,30.6411564 C51.47,32.8897803 50.896894,34.5798986 49.7506821,35.7115116 C48.6647971,36.7835659 47.0645455,37.347805 44.9499273,37.4042289 L44.5927283,37.4089309 L6.87727167,37.4089309 C4.58484778,37.4089309 2.86552986,36.8431245 1.71931792,35.7115116 C0.633432917,34.6394572 0.0619144957,33.0661404 0.00476265351,30.991561 L0,30.6411564 L0,6.78966855 C0,4.52646065 0.573105973,2.82904725 1.71931792,1.69742835 C2.80520292,0.62536834 4.4054545,0.0611262287 6.52007266,0.00470201759 L6.87727167,0 L44.5927283,0 Z M3.52623896,30.4440382 C3.52623896,31.5829506 3.81826434,32.4407854 4.4023151,33.0175427 C4.94146648,33.549934 5.69833296,33.8366062 6.67291454,33.8775594 L6.92109567,33.8826785 L24.3990187,33.882 L24.3990187,22.2745195 L24.245702,22.2745195 C23.8806665,23.3988418 23.3075605,24.4720437 22.5263841,25.494125 C21.7452076,26.5162363 20.8545234,27.4361364 19.8543317,28.2538254 C18.85411,29.0715144 17.8393102,29.739529 16.8099323,30.2578692 C15.7805245,30.7762214 14.8496796,31.1011035 14.0173976,31.2325157 C13.3895378,31.3201248 12.8967384,31.1814116 12.5389995,30.8163762 C12.1812605,30.4513377 12.0023911,30.0278882 12.0023911,29.5460276 C12.0023911,29.020379 12.1557078,28.5932931 12.4623411,28.2647702 C12.7306453,27.9773126 13.0939641,27.7932607 13.5522975,27.7126144 L13.7545433,27.6843827 C14.5138303,27.5967646 15.3242227,27.315684 16.1857208,26.8411409 C17.0471889,26.3665978 17.8831192,25.7825321 18.6935117,25.0889438 C19.5038743,24.3953853 20.2266487,23.6653144 20.8618349,22.898731 C21.4175967,22.2279705 21.8531822,21.5935445 22.1685914,20.9954529 L22.296409,20.7413526 L3.526,20.741 L3.52623896,30.4440382 Z M47.943,20.741 L29.1736807,20.7413526 C29.494937,21.4130214 29.9731433,22.1321475 30.6082997,22.898731 C31.243456,23.6653144 31.9662304,24.3953853 32.7766229,25.0889438 C33.5869854,25.7825321 34.4192675,26.3665978 35.273469,26.8411409 C36.0327327,27.262957 36.754511,27.5319138 37.438804,27.6480114 L37.6936568,27.6843827 C38.2631145,27.7427847 38.7011601,27.9362473 39.0077934,28.2647702 C39.3142773,28.5932931 39.4675192,29.020379 39.4675192,29.5460276 C39.4675192,30.0278882 39.2887245,30.4513377 38.9311351,30.8163762 C38.5733961,31.1814116 38.0805968,31.3201248 37.452737,31.2325157 C36.605832,31.1011035 35.6713388,30.7762214 34.6492575,30.2578692 C33.6271462,29.739529 32.6159947,29.0715144 31.6158029,28.2538254 C30.6155812,27.4361364 29.7248821,26.5162363 28.9437057,25.494125 C28.2493266,24.5856083 27.7193489,23.6367 27.3537725,22.6474002 L27.2243877,22.2745195 L27.049,22.2745195 L27.049,33.882 L44.5492183,33.8826785 C45.629642,33.8826785 46.4654526,33.5942999 47.0566504,33.0175427 C47.6026474,32.4851514 47.8966459,31.713262 47.9386456,30.7018746 L47.9438956,30.4440382 L47.943,20.741 Z M44.7942046,3.53142311 L44.5492183,3.52623896 L27.049,3.526 L27.049,11.0387118 C27.5310211,10.1042186 28.1187351,9.29748938 28.8123234,8.61852402 C29.5058818,7.93955866 30.268802,7.41755825 31.1010841,7.05252279 C31.9333661,6.68748732 32.8021607,6.50496959 33.7074678,6.50496959 C35.2844138,6.50496959 36.5948872,7.02697 37.638888,8.07097082 C38.6828888,9.11497164 39.2048893,10.4400531 39.2048893,12.0462151 C39.2048893,12.9660853 39.0077785,13.8239201 38.6135569,14.6197196 C38.2193055,15.4154891 37.6680891,16.1273037 36.9599077,16.7551635 C36.3402752,17.3045409 35.6339962,17.7756628 34.8410708,18.1685293 L34.4959408,18.3321096 L47.943,18.3321096 L47.9438956,6.98680923 C47.9438956,5.8478938 47.6481472,4.98641071 47.0566504,4.40235996 C46.5109294,3.86320858 45.7567808,3.5728963 44.7942046,3.53142311 Z M24.3990187,3.526 L6.92109567,3.52623896 C5.82598928,3.52623896 4.98639576,3.8182793 4.4023151,4.40235996 C3.86319132,4.94148373 3.57289391,5.71699955 3.53142285,6.72890742 L3.52623896,6.98680923 L3.526,18.3321096 L16.9522594,18.3321096 C16.0323891,17.908672 15.2183634,17.3830233 14.510182,16.7551635 C13.8020006,16.1273037 13.2471509,15.4154891 12.8456329,14.6197196 C12.4440849,13.8239201 12.2433109,12.9660853 12.2433109,12.0462151 C12.2433109,10.4400531 12.7689596,9.11497164 13.8202569,8.07097082 C14.8715543,7.02697 16.1783944,6.50496959 17.7407772,6.50496959 C18.6606475,6.50496959 19.5367236,6.68748732 20.3690056,7.05252279 C21.2012877,7.41755825 21.9642229,7.93955866 22.6578112,8.61852402 C23.2646748,9.21261871 23.7849034,9.90453264 24.218497,10.6942658 L24.3990187,11.0387118 L24.3990187,3.526 Z M17.9159835,9.61503763 C17.1275105,9.61503763 16.4996507,9.85232414 16.0324041,10.3268972 C15.5651575,10.8014403 15.3315342,11.4548528 15.3315342,12.2871349 C15.3315342,12.9733968 15.543253,13.6560104 15.9666905,14.3349757 C16.3901281,15.0139411 16.9741788,15.6272079 17.7188428,16.174776 C18.4635367,16.7223142 19.3177232,17.164008 20.2814025,17.4998574 C21.124648,17.7936994 22.0126076,17.9589856 22.9452814,17.9957158 L23.3477363,18.0035866 L24.0047822,18.0035866 L24.0047822,17.3903199 C24.0047822,16.3390225 23.8441689,15.3461273 23.5229425,14.4116341 C23.2017161,13.4771409 22.756374,12.6485071 22.1869163,11.9257327 C21.6174586,11.2029583 20.9676943,10.6371489 20.2376234,10.2283044 C19.5075525,9.81945988 18.7336725,9.61503763 17.9159835,9.61503763 Z M33.5322167,9.61503763 C32.7291506,9.61503763 31.9625821,9.81945988 31.2325112,10.2283044 C30.5024403,10.6371489 29.852676,11.2029583 29.2832182,11.9257327 C28.7137605,12.6485071 28.2647553,13.4771409 27.9362024,14.4116341 C27.6487448,15.2293156 27.4870499,16.0917112 27.4511177,16.998821 L27.443418,17.3903199 L27.443418,18.0035866 L28.1005087,18.0035866 C29.1956151,18.0035866 30.2250079,17.8356769 31.1886872,17.4998574 C32.1523964,17.164008 33.0029347,16.7223142 33.7403021,16.174776 C34.4776696,15.6272079 35.0580721,15.0139411 35.4815096,14.3349757 C35.9049771,13.6560104 36.1167108,12.9733968 36.1167108,12.2871349 C36.1167108,11.4548528 35.8867357,10.8014403 35.4267857,10.3268972 C34.9668356,9.85232414 34.3353126,9.61503763 33.5322167,9.61503763 Z",
    transform: "translate(2 9)"
  }));
}

export default Giftcard;