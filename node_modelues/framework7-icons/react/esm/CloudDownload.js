function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudDownload(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M27.944101,21.3351575 C28.901511,21.3351575 29.710911,22.0755685 29.7894574,22.9935238 L29.795701,23.1398575 L29.795701,41.2023332 L29.655001,44.6945332 L31.248801,43.0304332 L34.787901,39.2570332 C35.116001,38.8820332 35.608201,38.6945332 36.053501,38.6945332 C37.037901,38.6945332 37.764401,39.3742332 37.764401,40.3351332 C37.764401,40.7934443 37.6162528,41.140664 37.3364613,41.4591057 L37.225401,41.5773332 L29.303501,49.2179332 C28.834701,49.6867332 28.412901,49.8507332 27.944101,49.8507332 C27.501121,49.8507332 27.134119,49.7178932 26.7233932,49.34957 L26.584701,49.2179332 L18.662901,41.5773332 C18.311301,41.2257332 18.100301,40.8507332 18.100301,40.3351332 C18.100301,39.3742332 18.803501,38.6945332 19.787901,38.6945332 C20.2045232,38.6945332 20.6397133,38.8426813 20.9617139,39.1389776 L21.076901,39.2570332 L24.639401,43.0304332 L26.233201,44.6945332 L26.069101,41.2023332 L26.069101,23.1398575 C26.069101,22.1555575 26.936301,21.3351575 27.944101,21.3351575 Z M32.6573661,0.770663069 C41.163839,0.770663069 48.0596978,7.66652189 48.0596978,16.1729948 C48.0596978,16.6568639 48.0373855,17.1355216 47.9937336,17.6079953 C52.297207,18.6221788 55.500301,22.4871994 55.500301,27.1003427 C55.500301,32.4863019 51.1341184,36.8524845 45.7481592,36.8524845 L34.500301,36.8524845 L34.500301,33.1024845 L45.7481592,33.1024845 C49.0630506,33.1024845 51.750301,30.4152341 51.750301,27.1003427 C51.750301,24.3015031 49.8171637,21.890444 47.1335491,21.2580066 L43.9596438,20.5100242 L44.2596367,17.2630014 C44.2929276,16.9026725 44.3096978,16.5391274 44.3096978,16.1729948 C44.3096978,9.7375897 39.0927712,4.52066307 32.6573661,4.52066307 C28.6631256,4.52066307 25.0190167,6.54208569 22.8799162,9.83103522 L21.3554475,12.1749647 L18.6739301,11.3828318 C18.2192181,11.2485078 17.7437939,11.1793923 17.2550343,11.1793923 C14.5697198,11.1793923 12.3794624,13.2989835 12.2660453,15.9563827 L12.261999,16.2496206 L12.261999,16.2496206 L12.3549685,19.4002123 L9.35808804,20.0913808 C6.39664535,20.7743764 4.25869937,23.4284284 4.25869937,26.5127397 C4.25869937,30.1521552 7.20902862,33.1024845 10.8484442,33.1024845 L21.5003011,33.1024845 L21.500301,36.8524845 L10.8484442,36.8524845 C5.13796081,36.8524845 0.508699372,32.223223 0.508699372,26.5127397 C0.508699372,21.6045779 3.92852288,17.4951588 8.51535025,16.4373019 L8.51143173,16.1729948 L8.51143173,16.1729948 C8.51143173,11.3440365 12.4260759,7.42939227 17.2550343,7.42939227 C18.1169421,7.42939227 18.9497219,7.5541039 19.7363133,7.7864667 C22.4830258,3.56329032 27.2440694,0.770663069 32.6573661,0.770663069 Z",
    transform: "translate(0 3)"
  }));
}

export default CloudDownload;