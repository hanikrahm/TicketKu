function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Building2CropCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M23.8814741,5.68434189e-14 C27.1469224,5.68434189e-14 30.2248773,0.624972842 33.1153387,1.87491852 C36.0058001,3.12483221 38.5525208,4.85129509 40.7555009,7.05430715 C42.9584809,9.25728722 44.6848958,11.8001042 45.9347455,14.682758 C47.1849152,17.5654118 47.81,20.6394629 47.81,23.9049112 C47.81,27.1703595 47.1849152,30.2444106 45.9347455,33.1270644 C44.6848958,36.0097022 42.9584809,38.5525217 40.7555009,40.7555229 C38.5525208,42.9585235 36.0097038,44.6849838 33.12705,45.9349039 C30.2443962,47.1848496 27.1703451,47.8098224 23.9048968,47.8098224 C20.6394485,47.8098224 17.5654134,47.1848496 14.6827916,45.9349039 C11.8001378,44.6849838 9.25730482,42.9585235 7.05429275,40.7555229 C4.85128069,38.5525217 3.12481781,36.0097022 1.87490413,33.1270644 C0.624968042,30.2444106 0,27.1703595 0,23.9049112 C0,20.6394629 0.624968042,17.5654118 1.87490413,14.682758 C3.12481781,11.8001042 4.84737691,9.25728722 7.04258141,7.05430715 C9.23775392,4.85129509 11.7766671,3.12483221 14.6593209,1.87491852 C17.5419748,0.624972842 20.6160258,5.68434189e-14 23.8814741,5.68434189e-14 Z M23.8814741,3.98415987 C21.1159977,3.98415987 18.5302072,4.49584308 16.1241025,5.51920951 C13.7179979,6.54260794 11.6087405,7.96831973 9.7963305,9.7963449 C7.98392046,11.6243701 6.56603222,13.741435 5.54266579,16.1475396 C4.51926736,18.5536442 4.00756815,21.1394348 4.00756815,23.9049112 C4.00756815,26.6703876 4.51926736,29.2561782 5.54266579,31.6622828 C6.43249427,33.7544175 7.62355225,35.6250736 9.11583972,37.2742511 L9.11668873,15.8897461 C9.11668873,15.0928949 9.33542843,14.452307 9.77290782,13.9679822 C10.1706164,13.5276579 10.7038941,13.287481 11.3727411,13.2474515 L11.5774623,13.2414471 L27.3031536,13.2414471 C28.0843577,13.2414471 28.6897956,13.4836255 29.1194675,13.9679822 C29.5061721,14.4038745 29.7188597,14.96634 29.7575301,15.6553787 L29.7639752,15.8897461 L29.7636125,42.9761613 C30.3839514,42.7869102 30.9935098,42.5660383 31.5922877,42.3135455 L31.5919524,19.2176869 L38.388466,19.2176869 C39.1540549,19.2176869 39.7555891,19.4559455 40.1930685,19.9324627 C40.5867999,20.361357 40.8033522,20.9262847 40.8427254,21.6272459 L40.8492876,21.8659379 L40.8494588,34.4442426 C41.3953188,33.5650707 41.8756987,32.6377508 42.2905985,31.6622828 C43.3140289,29.2561782 43.8257441,26.6703876 43.8257441,23.9049112 C43.8257441,21.1394348 43.3101251,18.5536442 42.2788872,16.1475396 C41.2476812,13.741435 39.8180656,11.6243701 37.9900404,9.7963449 C36.1620153,7.96831973 34.0449504,6.54260794 31.6388457,5.51920951 C29.2327411,4.49584308 26.6469505,3.98415987 23.8814741,3.98415987 Z M17.1786992,35.9511295 L14.6241869,35.9511295 C14.3007523,35.9511295 14.1228633,36.1029889 14.0905198,36.4067075 L14.0851292,36.5135715 L14.0851292,38.9978109 C14.0851292,39.3352905 14.2306748,39.5209043 14.5217659,39.5546522 L14.6241869,39.5602769 L17.1786992,39.5602769 C17.5161874,39.5602769 17.7018059,39.4084111 17.7355547,39.1046795 L17.7411796,38.9978109 L17.7411796,36.5135715 C17.7411796,36.1386102 17.5536861,35.9511295 17.1786992,35.9511295 Z M24.2095837,35.9511295 L21.6550234,35.9511295 C21.3316176,35.9511295 21.1537444,36.1029889 21.1214038,36.4067075 L21.1160137,36.5135715 L21.1160137,38.9978109 C21.1160137,39.3352905 21.2615463,39.5209043 21.5526115,39.5546522 L21.6550234,39.5602769 L24.2095837,39.5602769 C24.5470719,39.5602769 24.7326904,39.4084111 24.7664392,39.1046795 L24.772064,38.9978109 L24.772064,36.5135715 C24.772064,36.1386102 24.5845706,35.9511295 24.2095837,35.9511295 Z M37.3103987,33.8184175 L35.1074186,33.8184175 C34.8296458,33.8184175 34.6753275,33.9418721 34.6444639,34.1887813 L34.638677,34.2871591 L34.638677,36.419828 C34.638677,36.669815 34.7621316,36.8086966 35.0090407,36.836473 L35.1074186,36.841681 L37.3103987,36.841681 C37.5603828,36.841681 37.6992629,36.7305757 37.7270389,36.508365 L37.7322469,36.419828 L37.7322469,34.2871591 C37.7322469,33.9746647 37.5916308,33.8184175 37.3103987,33.8184175 Z M17.1786992,29.7639416 L14.6241869,29.7639416 C14.3007523,29.7639416 14.1228633,29.9158113 14.0905198,30.2195507 L14.0851292,30.326422 L14.0851292,32.8106662 C14.0851292,33.1481544 14.2306748,33.3337729 14.5217659,33.3675218 L14.6241869,33.3731466 L17.1786992,33.3731466 C17.5161874,33.3731466 17.7018059,33.2212769 17.7355547,32.9175375 L17.7411796,32.8106662 L17.7411796,30.326422 C17.7411796,29.9514351 17.5536861,29.7639416 17.1786992,29.7639416 Z M24.2095837,29.7639416 L21.6550234,29.7639416 C21.3316176,29.7639416 21.1537444,29.9158113 21.1214038,30.2195507 L21.1160137,30.326422 L21.1160137,32.8106662 C21.1160137,32.9669134 21.1667948,33.0997219 21.2683571,33.2090918 C21.3495814,33.2965877 21.448315,33.3490852 21.5645581,33.3665844 L21.6550234,33.3731466 L24.2095837,33.3731466 C24.5470719,33.3731466 24.7326904,33.2212769 24.7664392,32.9175375 L24.772064,32.8106662 L24.772064,30.326422 C24.772064,29.9514351 24.5845706,29.7639416 24.2095837,29.7639416 Z M37.3103987,28.4983968 L35.1074186,28.4983968 C34.8296458,28.4983968 34.6753275,28.6156698 34.6444639,28.8502158 L34.638677,28.9436677 L34.638677,31.0294864 C34.638677,31.3072592 34.7621316,31.4615775 35.0090407,31.4924411 L35.1074186,31.498228 L37.3103987,31.498228 C37.5603828,31.498228 37.6992629,31.3747734 37.7270389,31.1278643 L37.7322469,31.0294864 L37.7322469,28.9436677 C37.7322469,28.6468204 37.5916308,28.4983968 37.3103987,28.4983968 Z M17.1786992,23.5768017 L14.6241869,23.5768017 C14.3007523,23.5768017 14.1228633,23.7349955 14.0905198,24.0513831 L14.0851292,24.1627047 L14.0851292,26.6235263 C14.0851292,26.9609857 14.2306748,27.1465884 14.5217659,27.1803343 L14.6241869,27.1859586 L17.1786992,27.1859586 C17.5161874,27.1859586 17.7018059,27.0341019 17.7355547,26.7303884 L17.7411796,26.6235263 L17.7411796,24.1627047 C17.7411796,23.7721027 17.5536861,23.5768017 17.1786992,23.5768017 Z M24.2095837,23.5768017 L21.6550234,23.5768017 C21.4987762,23.5768017 21.3698874,23.6314866 21.2683571,23.7408564 C21.1871073,23.8283523 21.1383574,23.9358458 21.1221074,24.0633369 L21.1160137,24.1627047 L21.1160137,26.6235263 C21.1160137,26.9609857 21.2615463,27.1465884 21.5526115,27.1803343 L21.6550234,27.1859586 L24.2095837,27.1859586 C24.5470719,27.1859586 24.7326904,27.0341019 24.7664392,26.7303884 L24.772064,26.6235263 L24.772064,24.1627047 C24.772064,23.7721027 24.5845706,23.5768017 24.2095837,23.5768017 Z M37.3103987,23.1315307 L35.1074186,23.1315307 C34.8296458,23.1315307 34.6753275,23.2488037 34.6444639,23.4833497 L34.638677,23.5768017 L34.638677,25.686043 C34.638677,25.9638158 34.7621316,26.1181341 35.0090407,26.1489977 L35.1074186,26.1547846 L37.3103987,26.1547846 C37.5603828,26.1547846 37.6992629,26.0313301 37.7270389,25.7844209 L37.7322469,25.686043 L37.7322469,23.5768017 C37.7322469,23.2799544 37.5916308,23.1315307 37.3103987,23.1315307 Z M17.1786992,17.4599778 L14.6241869,17.4599778 C14.3007523,17.4599778 14.1228633,17.6118345 14.0905198,17.915548 L14.0851292,18.0224101 L14.0851292,20.5066544 C14.0851292,20.8441426 14.2306748,21.0297611 14.5217659,21.0635099 L14.6241869,21.0691347 L17.1786992,21.0691347 C17.5161874,21.0691347 17.7018059,20.917265 17.7355547,20.6135256 L17.7411796,20.5066544 L17.7411796,18.0224101 C17.7411796,17.6474552 17.5536861,17.4599778 17.1786992,17.4599778 Z M24.2095837,17.4599778 L21.6550234,17.4599778 C21.3316176,17.4599778 21.1537444,17.6118345 21.1214038,17.915548 L21.1160137,18.0224101 L21.1160137,20.5066544 C21.1160137,20.8441426 21.2615463,21.0297611 21.5526115,21.0635099 L21.6550234,21.0691347 L24.2095837,21.0691347 C24.5470719,21.0691347 24.7326904,20.917265 24.7664392,20.6135256 L24.772064,20.5066544 L24.772064,18.0224101 C24.772064,17.6474552 24.5845706,17.4599778 24.2095837,17.4599778 Z",
    transform: "translate(4 4)"
  }));
}

export default Building2CropCircle;