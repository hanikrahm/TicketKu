function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function DevicePhonePortrait(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M24,0 C26.209139,0 28,1.790861 28,4 L28,48 C28,50.209139 26.209139,52 24,52 L4,52 C1.790861,52 0,50.209139 0,48 L0,4 C0,1.790861 1.790861,0 4,0 L24,0 Z M23,7 L5,7 C4.44771525,7 4,7.44771525 4,8 L4,47 C4,47.5522847 4.44771525,48 5,48 L23,48 C23.5522847,48 24,47.5522847 24,47 L24,8 C24,7.44771525 23.5522847,7 23,7 Z M19,44 C19.5522847,44 20,44.4477153 20,45 C20,45.5522847 19.5522847,46 19,46 L9,46 C8.44771525,46 8,45.5522847 8,45 C8,44.4477153 8.44771525,44 9,44 L19,44 Z M17.5,3 L12.5,3 C12.2238576,3 12,3.22385763 12,3.5 C12,3.77614237 12.2238576,4 12.5,4 L17.5,4 C17.7761424,4 18,3.77614237 18,3.5 C18,3.22385763 17.7761424,3 17.5,3 Z M10.5,3 C10.2238576,3 10,3.22385763 10,3.5 C10,3.77614237 10.2238576,4 10.5,4 C10.7761424,4 11,3.77614237 11,3.5 C11,3.22385763 10.7761424,3 10.5,3 Z",
    transform: "translate(14 2)"
  }));
}

export default DevicePhonePortrait;