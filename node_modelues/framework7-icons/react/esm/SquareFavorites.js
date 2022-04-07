function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquareFavorites(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M36.2382,0.4258 C41.038632,0.4258 43.4758077,2.766775 43.5713746,7.4045831 L43.5743,7.6914 L43.5743,36.3086 C43.5743,41.040138 41.2331329,43.4757438 36.5291513,43.5712754 L36.2382,43.5742 L7.7851,43.5742 C3.0076,43.5742 0.52603224,41.2557944 0.42868053,36.5967711 L0.4257,36.3086 L0.4257,7.6914 C0.4257,2.936832 2.81171776,0.52333504 7.49546947,0.428696989 L7.7851,0.4258 L36.2382,0.4258 Z M36.1679,4.1992 L7.8554,4.1992 C5.58730323,4.1992 4.28495047,5.36255068 4.20328785,7.6467459 L4.1992,7.8789 L4.1992,36.1211 C4.1992,38.479971 5.42838835,39.7194143 7.63181891,39.7969237 L7.8554,39.8008 L36.1679,39.8008 C38.4133516,39.8008 39.7149739,38.6374493 39.7966129,36.3532541 L39.8007,36.1211 L39.8007,7.8789 C39.8007,5.52002903 38.5715117,4.28058574 36.3892888,4.20307626 L36.1679,4.1992 Z M10.2332007,28.1725 L11.0012007,30.5365 C11.0352007,30.6395 11.1322007,30.7095 11.2402007,30.7085 L13.7102007,30.6955 C13.9532007,30.6945 14.0552007,31.0035 13.8602007,31.1465 L11.8592007,32.6245 C11.7722007,32.6885 11.7362007,32.7995 11.7692007,32.9025 L12.5392007,35.2695 C12.6142007,35.4995 12.3502007,35.6915 12.1542007,35.5485 L10.1422007,34.0875 C10.0542007,34.0245 9.93620069,34.0245 9.84820069,34.0875 L7.83620069,35.5485 C7.64020069,35.6915 7.37620069,35.4995 7.45120069,35.2695 L8.21920069,32.9035 C8.25320069,32.8005 8.21620069,32.6885 8.12920069,32.6245 L6.10320069,31.1475 C5.90720069,31.0045 6.00920069,30.6945 6.25120069,30.6955 L8.75020069,30.7085 C8.85920069,30.7095 8.95620069,30.6395 8.99020069,30.5355 L9.75720069,28.1725 C9.83220069,27.9425 10.1582007,27.9425 10.2332007,28.1725 Z M35.1818182,30 C36.1859723,30 37,30.8954305 37,32 C37,33.1045695 36.1859723,34 35.1818182,34 L18.8181818,34 C17.8140277,34 17,33.1045695 17,32 C17,30.8954305 17.8140277,30 18.8181818,30 L35.1818182,30 Z M10.2332007,18.1725 L11.0012007,20.5365 C11.0352007,20.6395 11.1322007,20.7095 11.2402007,20.7085 L13.7102007,20.6955 C13.9532007,20.6945 14.0552007,21.0035 13.8602007,21.1465 L11.8592007,22.6245 C11.7722007,22.6885 11.7362007,22.7995 11.7692007,22.9025 L12.5392007,25.2695 C12.6142007,25.4995 12.3502007,25.6915 12.1542007,25.5485 L10.1422007,24.0875 C10.0542007,24.0245 9.93620069,24.0245 9.84820069,24.0875 L7.83620069,25.5485 C7.64020069,25.6915 7.37620069,25.4995 7.45120069,25.2695 L8.21920069,22.9035 C8.25320069,22.8005 8.21620069,22.6885 8.12920069,22.6245 L6.10320069,21.1475 C5.90720069,21.0045 6.00920069,20.6945 6.25120069,20.6955 L8.75020069,20.7085 C8.85920069,20.7095 8.95620069,20.6395 8.99020069,20.5355 L9.75720069,18.1725 C9.83220069,17.9425 10.1582007,17.9425 10.2332007,18.1725 Z M35.1818182,20 C36.1859723,20 37,20.8954305 37,22 C37,23.1045695 36.1859723,24 35.1818182,24 L18.8181818,24 C17.8140277,24 17,23.1045695 17,22 C17,20.8954305 17.8140277,20 18.8181818,20 L35.1818182,20 Z M10.2332007,8.1725 L11.0012007,10.5365 C11.0352007,10.6395 11.1322007,10.7095 11.2402007,10.7085 L13.7102007,10.6955 C13.9532007,10.6945 14.0552007,11.0035 13.8602007,11.1465 L11.8592007,12.6245 C11.7722007,12.6885 11.7362007,12.7995 11.7692007,12.9025 L12.5392007,15.2695 C12.6142007,15.4995 12.3502007,15.6915 12.1542007,15.5485 L10.1422007,14.0875 C10.0542007,14.0245 9.93620069,14.0245 9.84820069,14.0875 L7.83620069,15.5485 C7.64020069,15.6915 7.37620069,15.4995 7.45120069,15.2695 L8.21920069,12.9035 C8.25320069,12.8005 8.21620069,12.6885 8.12920069,12.6245 L6.10320069,11.1475 C5.90720069,11.0045 6.00920069,10.6945 6.25120069,10.6955 L8.75020069,10.7085 C8.85920069,10.7095 8.95620069,10.6395 8.99020069,10.5355 L9.75720069,8.1725 C9.83220069,7.9425 10.1582007,7.9425 10.2332007,8.1725 Z M35.1818182,10 C36.1859723,10 37,10.8954305 37,12 C37,13.1045695 36.1859723,14 35.1818182,14 L18.8181818,14 C17.8140277,14 17,13.1045695 17,12 C17,10.8954305 17.8140277,10 18.8181818,10 L35.1818182,10 Z",
    transform: "translate(6 6)"
  }));
}

export default SquareFavorites;