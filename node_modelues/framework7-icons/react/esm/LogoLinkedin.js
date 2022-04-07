function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function LogoLinkedin(props) {
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
    d: "M42.608128,42.6067391 L35.1926442,42.6067391 L35.1926442,31.0022501 C35.1926442,28.2355065 35.1454207,24.6756854 31.3397594,24.6756854 C27.47993,24.6756854 26.8910248,27.691047 26.8910248,30.8050224 L26.8910248,42.6067391 L19.4838746,42.6067391 L19.4838746,18.7449651 L26.5924053,18.7449651 L26.5924053,22.0075558 L26.695186,22.0075558 C27.6841023,20.1311148 30.103614,18.153282 33.7106586,18.153282 C41.2205895,18.153282 42.608128,23.093697 42.608128,29.5202645 L42.608128,42.6067391 L42.608128,42.6067391 Z M11.1225312,15.4851524 C8.74052057,15.4851524 6.81963388,13.55871 6.81963388,11.183644 C6.81963388,8.80996694 8.74052057,6.88352454 11.1225312,6.88352454 C13.4948193,6.88352454 15.4198728,8.80996694 15.4198728,11.183644 C15.4198728,13.55871 13.4948193,15.4851524 11.1225312,15.4851524 L11.1225312,15.4851524 Z M7.40853913,42.6067391 L14.8323565,42.6067391 L14.8323565,18.7449651 L7.40853913,18.7449651 L7.40853913,42.6067391 Z M46.3012861,0 L3.68760243,0 C1.65282369,0 0,1.61393372 0,3.60565571 L0,46.3929554 C0,48.3846774 1.65282369,50.0013889 3.68760243,50.0013889 L46.3012861,50.0013889 C48.3402317,50.0013889 50,48.3846774 50,46.3929554 L50,3.60565571 C50,1.61393372 48.3402317,0 46.3012861,0 L46.3012861,0 Z",
    transform: "translate(3 3)"
  }));
}

export default LogoLinkedin;