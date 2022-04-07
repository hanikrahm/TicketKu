function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Hammer(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 1.9205 50.6968 L 5.3687 54.1450 C 7.2673 56 9.4279 55.8472 11.3484 53.7303 L 34.1981 28.8511 C 35.1365 29.5058 36.0094 29.4840 37.0788 29.2658 L 39.4140 28.7856 L 40.9636 30.3351 L 40.8545 31.4918 C 40.7017 32.6921 41.0508 33.6087 42.1637 34.7217 L 43.9971 36.5331 C 45.1100 37.6679 46.5939 37.7334 47.6634 36.6640 L 54.9309 29.3967 C 56.0000 28.3273 55.9347 26.8651 54.8218 25.7303 L 52.9884 23.8971 C 51.8755 22.7840 50.9369 22.3912 49.7583 22.5658 L 48.5801 22.6967 L 47.0958 21.2127 L 47.7506 18.6593 C 48.0563 17.3936 47.7287 16.3678 46.3539 15.0147 L 40.9636 9.6461 C 33.0414 1.7677 22.8933 2.0077 15.9532 9.0132 C 14.9930 9.9734 14.9057 11.2829 15.5168 12.2431 C 16.0187 13.0724 17.0881 13.5744 18.5503 13.2034 C 21.9330 12.3522 25.3157 12.6141 28.6330 14.8620 L 27.2362 18.3975 C 26.7124 19.7069 26.7561 20.7762 27.2799 21.7583 L 2.3352 44.7171 C .2401 46.6594 0 48.7763 1.9205 50.6968 Z M 19.4233 9.8861 C 25.3812 5.4341 32.8013 6.1542 38.1700 11.5229 L 44.0404 17.3499 C 44.5643 17.8737 44.6300 18.2883 44.4771 18.9431 L 43.6480 22.4349 L 47.1615 25.9485 L 49.3002 25.7521 C 49.9331 25.6866 50.1293 25.7303 50.6531 26.2322 L 52.0284 27.6290 L 45.8957 33.7833 L 44.4990 32.3866 C 43.9971 31.8846 43.9533 31.6882 44.0190 31.0553 L 44.2152 28.8947 L 40.7236 25.4029 L 37.1006 26.1013 C 36.4677 26.2322 36.1404 26.2322 35.5948 25.6866 L 30.7499 20.8199 C 30.2261 20.2961 30.1606 19.9906 30.4443 19.2922 L 32.5831 14.1855 C 29.0040 10.7591 24.2682 8.8604 19.7070 10.3226 C 19.5106 10.3881 19.3796 10.3444 19.3142 10.2571 C 19.2487 10.1480 19.2487 10.0389 19.4233 9.8861 Z M 4.7576 49.1255 C 3.6446 48.0125 4.0374 47.3359 4.7794 46.6594 L 29.2877 24.0499 L 32.0156 26.7996 L 9.3406 51.2206 C 8.6641 51.9626 7.8130 52.1808 6.8964 51.2861 Z"
  }));
}

export default Hammer;