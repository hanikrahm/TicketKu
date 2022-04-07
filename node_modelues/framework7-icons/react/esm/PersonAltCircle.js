function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PersonAltCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M23.9991065,47.9989576 C10.7446016,47.9989576 -0.000893521966,37.2552495 -0.000893521966,23.9989576 C-0.000893521966,10.7444528 10.7446016,-0.00104240348 23.9991065,-0.00104240348 C37.2536113,-0.00104240348 48.0008935,10.7444528 48.0008935,23.9989576 C48.0008935,37.2552495 37.2536113,47.9989576 23.9991065,47.9989576 Z M23.9991065,3.53551754 C12.7157111,3.53551754 3.53566642,12.7155622 3.53566642,23.9989576 C3.53566642,30.0623977 6.20014892,35.5003723 10.4014892,39.2495905 C10.5319434,39.1584513 10.6909903,39.0798213 10.8786299,39.0172748 C11.044825,38.9690246 11.2092331,38.9189874 11.36828,38.8707372 C16.046761,37.4357409 17.1654505,36.1937454 17.5871929,34.8230827 C18.3627699,34.4763962 18.652271,34.2387193 18.8059568,33.4148921 C18.9024572,32.8912882 18.977513,31.134624 18.9042442,30.525242 C18.4610573,30.0927774 18.2198064,28.979449 18.0053611,28.5344751 C17.5085629,27.5051378 17.4209978,26.9725987 16.943857,25.2409531 C16.8705882,25.0086374 16.7133284,24.9943411 16.6025316,24.949665 C16.4363366,24.8799703 16.291586,24.7691735 16.1379002,24.5600894 C15.7036485,23.9721519 15.9752792,23.6397618 15.5678332,22.5228593 C15.0495905,21.2522711 14.8405063,19.9977662 15.235443,19.622487 C15.5017126,19.3848102 15.680417,19.5384959 15.8108712,19.5867461 C15.8966493,19.6189129 15.8305287,19.4026806 15.7536858,19.0899479 C15.4409531,17.8104245 15.4230827,15.2585257 15.4230827,15.2585257 L15.4713328,15.2567387 C15.3104989,14.1898735 15.3480268,13.2069993 16.0556962,11.7166047 C16.7526433,10.1940432 17.3763217,10.5300075 17.7265823,10.1386449 C19.2044676,8.47490696 20.562621,8.43201791 21.5830231,7.9924051 C23.8758004,7.00238276 25.809382,7.87982133 27.355175,8.52673124 C28.005659,8.80729713 29.9017126,9.02352945 30.5343261,10.4227848 C30.9042442,11.2376769 31.2276992,12.6297841 31.3527923,12.7548772 C31.4850335,13.3553239 31.5565153,14.3239018 31.4886076,15.3854058 C31.4046165,16.6970961 31.4028295,17.7818318 31.0918838,19.0613552 C31.0132539,19.3723009 30.9453462,19.5903202 31.0329114,19.5563664 C31.1633656,19.5081162 31.3259866,19.3311988 31.5922561,19.5688757 C31.9854058,19.9441549 31.9049888,21.2522711 31.3867461,22.5228593 C30.9810871,23.6397618 31.2044676,23.8452718 30.9453462,24.3027551 C30.8345495,24.502904 30.7577066,24.7727476 30.4217424,24.8942666 C30.3109456,24.9353686 30.1751303,25.033656 30.123306,25.2731199 C29.7623232,26.9565153 29.6711839,27.2638869 29.2923306,28.5273269 C29.1511541,28.9991065 28.8276992,30.0159345 28.4005957,30.4162324 C28.3112435,31.1399851 28.5221147,32.9967238 28.6436337,33.4148921 C28.9259866,34.3941921 29.1958302,34.5854058 29.7462398,34.8230827 C30.4235294,36.2384215 30.9453462,38.0844379 36.1384959,38.9100522 C36.3743857,38.9475801 36.6192107,38.983321 36.874758,39.0172748 C37.1696203,39.0601639 37.4072971,39.1387938 37.6181683,39.2317201 C41.8069993,35.4807149 44.4643336,30.0516754 44.4643336,23.9989576 C44.4643336,12.7155622 35.2825019,3.53551754 23.9991065,3.53551754 Z",
    transform: "translate(4 4)"
  }));
}

export default PersonAltCircle;