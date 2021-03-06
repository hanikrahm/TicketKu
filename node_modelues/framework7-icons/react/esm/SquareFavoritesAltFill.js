function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquareFavoritesAltFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M36.2382,0.4258 C41.1366,0.4258 43.5743,2.8633 43.5743,7.6914 L43.5743,7.6914 L43.5743,36.3086 C43.5743,41.1367 41.1366,43.5742 36.2382,43.5742 L36.2382,43.5742 L7.7851,43.5742 C2.9101,43.5742 0.4257,41.1602 0.4257,36.3086 L0.4257,36.3086 L0.4257,7.6914 C0.4257,2.8398 2.9101,0.4258 7.7851,0.4258 L7.7851,0.4258 Z M27,32 L9,32 C7.8954305,32 7,32.8954305 7,34 C7,35.1045695 7.8954305,36 9,36 L9,36 L27,36 C28.1045695,36 29,35.1045695 29,34 C29,32.8954305 28.1045695,32 27,32 L27,32 Z M35,25 L9,25 C7.8954305,25 7,25.8954305 7,27 C7,28.1045695 7.8954305,29 9,29 L9,29 L35,29 C36.1045695,29 37,28.1045695 37,27 C37,25.8954305 36.1045695,25 35,25 L35,25 Z M8.10014766,8.23892985 C6.63462686,9.88380693 6.63796062,12.3254526 8.08214536,14.2003591 C9.1376137,15.5718679 12.4900425,18.9176292 12.908096,19.2876765 C13.934894,20.1984597 14.6709882,20.2691354 15.7611276,19.3063456 C15.8925889,19.1904418 16.1687457,18.923381 16.5284515,18.565039 L16.8558056,18.2369308 C18.0631754,17.0200864 19.8652526,15.1356787 20.6110813,14.2003591 C22.0139275,12.4414674 22.0585998,9.88380693 20.593079,8.23892985 C19.1275582,6.59405278 16.7319185,6.59205253 15.2837332,8.2189273 C14.5676416,9.0223634 14.34628,9.48108875 14.34628,9.48108875 C14.34628,9.48108875 14.1022488,8.99636008 13.4101602,8.2189273 C11.9559742,6.58671851 9.5650017,6.59405278 8.10014766,8.23892985 Z",
    transform: "translate(6 6)"
  }));
}

export default SquareFavoritesAltFill;