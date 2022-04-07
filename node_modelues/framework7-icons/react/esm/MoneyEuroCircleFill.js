function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function MoneyEuroCircleFill(props) {
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
    d: "M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M28.4112723,27.5206473 L28.4112723,25.7234933 L19.4414063,25.7234933 C19.4095982,25.2940848 19.3777902,24.8487723 19.3777902,24.3716518 C19.3777902,23.8945313 19.4095982,23.4333147 19.4573103,22.9880022 L28.4112723,22.9880022 L28.4112723,21.1908482 L19.8231027,21.1908482 C20.8568638,17.7396763 23.703683,15.9584263 27.2979911,15.9584263 C28.3953683,15.9584263 29.6994978,16.0856585 30.3833705,16.2446987 L30.3833705,13.2229353 C29.7313058,13.016183 28.3476562,12.8571429 27.266183,12.8571429 C21.7952009,12.8571429 17.3420759,15.7039621 16.1333705,21.1908482 L12.8571429,21.1908482 L12.8571429,22.9880022 L15.8630022,22.9880022 C15.8152902,23.4333147 15.7993862,23.8945313 15.7993862,24.3716518 C15.7993862,24.8328683 15.8152902,25.2940848 15.8630022,25.7234933 L12.8571429,25.7234933 L12.8571429,27.5206473 L16.1333705,27.5206473 C17.3420759,33.0075335 21.7792969,35.8702567 27.2820871,35.8702567 C28.3953683,35.8702567 29.7154018,35.7430246 30.3992746,35.5521763 L30.3992746,32.5145089 C29.7631138,32.6894531 28.4271763,32.7848772 27.2820871,32.7848772 C23.671875,32.7848772 20.8409598,30.9877232 19.8071987,27.5206473 L28.4112723,27.5206473 Z",
    transform: "translate(4 4)"
  }));
}

export default MoneyEuroCircleFill;