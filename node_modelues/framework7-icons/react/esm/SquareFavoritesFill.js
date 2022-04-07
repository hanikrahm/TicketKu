function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquareFavoritesFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M36.2382,0.4258 C41.1366,0.4258 43.5743,2.8633 43.5743,7.6914 L43.5743,7.6914 L43.5743,36.3086 C43.5743,41.1367 41.1366,43.5742 36.2382,43.5742 L36.2382,43.5742 L7.7851,43.5742 C2.9101,43.5742 0.4257,41.1602 0.4257,36.3086 L0.4257,36.3086 L0.4257,7.6914 C0.4257,2.8398 2.9101,0.4258 7.7851,0.4258 L7.7851,0.4258 Z M9.75720069,28.1725 L8.99020069,30.5355 C8.95620069,30.6395 8.85920069,30.7095 8.75020069,30.7085 L6.25120069,30.6955 C6.00920069,30.6945 5.90720069,31.0045 6.10320069,31.1475 L8.12920069,32.6245 C8.21620069,32.6885 8.25320069,32.8005 8.21920069,32.9035 L7.45120069,35.2695 C7.37620069,35.4995 7.64020069,35.6915 7.83620069,35.5485 L9.84820069,34.0875 C9.93620069,34.0245 10.0542007,34.0245 10.1422007,34.0875 L12.1542007,35.5485 C12.3502007,35.6915 12.6142007,35.4995 12.5392007,35.2695 L11.7692007,32.9025 C11.7362007,32.7995 11.7722007,32.6885 11.8592007,32.6245 L13.8602007,31.1465 C14.0552007,31.0035 13.9532007,30.6945 13.7102007,30.6955 L11.2402007,30.7085 C11.1322007,30.7095 11.0352007,30.6395 11.0012007,30.5365 L10.2332007,28.1725 C10.1582007,27.9425 9.83220069,27.9425 9.75720069,28.1725 Z M35.1818182,30 L18.8181818,30 C17.8140277,30 17,30.8954305 17,32 C17,33.1045695 17.8140277,34 18.8181818,34 L35.1818182,34 C36.1859723,34 37,33.1045695 37,32 C37,30.8954305 36.1859723,30 35.1818182,30 Z M9.75720069,18.1725 L8.99020069,20.5355 C8.95620069,20.6395 8.85920069,20.7095 8.75020069,20.7085 L6.25120069,20.6955 C6.00920069,20.6945 5.90720069,21.0045 6.10320069,21.1475 L8.12920069,22.6245 C8.21620069,22.6885 8.25320069,22.8005 8.21920069,22.9035 L7.45120069,25.2695 C7.37620069,25.4995 7.64020069,25.6915 7.83620069,25.5485 L9.84820069,24.0875 C9.93620069,24.0245 10.0542007,24.0245 10.1422007,24.0875 L12.1542007,25.5485 C12.3502007,25.6915 12.6142007,25.4995 12.5392007,25.2695 L11.7692007,22.9025 C11.7362007,22.7995 11.7722007,22.6885 11.8592007,22.6245 L13.8602007,21.1465 C14.0552007,21.0035 13.9532007,20.6945 13.7102007,20.6955 L11.2402007,20.7085 C11.1322007,20.7095 11.0352007,20.6395 11.0012007,20.5365 L10.2332007,18.1725 C10.1582007,17.9425 9.83220069,17.9425 9.75720069,18.1725 Z M35.1818182,20 L18.8181818,20 C17.8140277,20 17,20.8954305 17,22 C17,23.1045695 17.8140277,24 18.8181818,24 L35.1818182,24 C36.1859723,24 37,23.1045695 37,22 C37,20.8954305 36.1859723,20 35.1818182,20 Z M9.75720069,8.1725 L8.99020069,10.5355 C8.95620069,10.6395 8.85920069,10.7095 8.75020069,10.7085 L6.25120069,10.6955 C6.00920069,10.6945 5.90720069,11.0045 6.10320069,11.1475 L8.12920069,12.6245 C8.21620069,12.6885 8.25320069,12.8005 8.21920069,12.9035 L7.45120069,15.2695 C7.37620069,15.4995 7.64020069,15.6915 7.83620069,15.5485 L9.84820069,14.0875 C9.93620069,14.0245 10.0542007,14.0245 10.1422007,14.0875 L12.1542007,15.5485 C12.3502007,15.6915 12.6142007,15.4995 12.5392007,15.2695 L11.7692007,12.9025 C11.7362007,12.7995 11.7722007,12.6885 11.8592007,12.6245 L13.8602007,11.1465 C14.0552007,11.0035 13.9532007,10.6945 13.7102007,10.6955 L11.2402007,10.7085 C11.1322007,10.7095 11.0352007,10.6395 11.0012007,10.5365 L10.2332007,8.1725 C10.1582007,7.9425 9.83220069,7.9425 9.75720069,8.1725 Z M35.1818182,10 L18.8181818,10 C17.8140277,10 17,10.8954305 17,12 C17,13.1045695 17.8140277,14 18.8181818,14 L35.1818182,14 C36.1859723,14 37,13.1045695 37,12 C37,10.8954305 36.1859723,10 35.1818182,10 Z",
    transform: "translate(6 6)"
  }));
}

export default SquareFavoritesFill;