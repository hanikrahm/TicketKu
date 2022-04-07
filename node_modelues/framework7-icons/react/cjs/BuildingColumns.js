"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BuildingColumns(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M48.1171831,44.7235853 C48.6287888,44.7235853 49.0705724,44.9056719 49.4425339,45.269845 C49.814178,45.634015 50,46.0717917 50,46.5831753 C50,47.0945906 49.814178,47.5362472 49.4425339,47.9081452 C49.1119014,48.2387494 48.7261009,48.4224184 48.2851323,48.4591522 L48.1171831,48.4660398 L1.85958518,48.4660398 C1.34820164,48.4660398 0.910416952,48.2800749 0.546231129,47.9081452 C0.182077043,47.5362472 0,47.0945906 0,46.5831753 C0,46.0717917 0.182077043,45.634015 0.546231129,45.269845 C0.869951861,44.9461356 1.25182478,44.766297 1.69184988,44.7303293 L1.85958518,44.7235853 L48.1171831,44.7235853 Z M11.5063202,17.9452207 C11.9867281,17.9452207 12.3586419,18.0769465 12.6220618,18.3403981 C12.8525819,18.5708904 12.9822494,18.8725906 13.0110644,19.2454988 L13.0172391,19.4096762 L13.0172391,19.9675232 C13.0172391,20.4324433 12.8855133,20.7966291 12.6220618,21.0600807 C12.3915694,21.290573 12.0780113,21.4202249 11.6813875,21.4490365 L11.5063202,21.4552104 L10.2968842,21.4542207 L10.2968842,39.1672207 L11.5063202,39.1680044 C11.9266771,39.1680044 12.2639683,39.2688545 12.5181937,39.4705547 L12.6220618,39.5631722 C12.8525819,39.7936867 12.9822494,40.095389 13.0110644,40.468279 L13.0172391,40.6324474 L13.0172391,41.1903307 C13.0172391,41.670729 12.8855133,42.0387757 12.6220618,42.2944707 C12.3915694,42.5182065 12.0780113,42.6440579 11.6813875,42.6720249 L11.5063202,42.6780178 L5.55557142,42.6780178 C5.07516351,42.6780178 4.7071216,42.5501688 4.4514457,42.2944707 C4.22770151,42.0707376 4.10184541,41.7609852 4.07387739,41.3652136 L4.06788424,41.1903307 L4.06788424,40.6324474 C4.06788424,40.1830425 4.19573806,39.8266174 4.4514457,39.5631722 C4.67516211,39.3326576 4.98490875,39.2029932 5.38068561,39.1741789 L5.55557142,39.1680044 L6.78688424,39.1672207 L6.78688424,21.4542207 L5.55557142,21.4552104 C5.1352145,21.4552104 4.8008878,21.35437 4.55259132,21.1526892 L4.4514457,21.0600807 C4.22770151,20.8295606 4.10184541,20.5219158 4.07387739,20.1371463 L4.06788424,19.9675232 L4.06788424,19.4096762 C4.06788424,18.9602439 4.19573806,18.6038179 4.4514457,18.3403981 C4.67516211,18.109878 4.98490875,17.9802104 5.38068561,17.9513954 L5.55557142,17.9452207 L11.5063202,17.9452207 Z M22.5709996,17.9452207 C23.0358879,17.9452207 23.4000579,18.0769465 23.6635094,18.3403981 C23.8940295,18.5708904 24.0236971,18.8725906 24.0525121,19.2454988 L24.0586868,19.4096762 L24.0586868,19.9675232 C24.0586868,20.4324433 23.926961,20.7966291 23.6635094,21.0600807 C23.4329893,21.290573 23.1253567,21.4202249 22.7406115,21.4490365 L22.5709996,21.4552104 L21.3618842,21.4542207 L21.3618842,39.1672207 L22.5709996,39.1680044 C22.9777769,39.1680044 23.3074417,39.2688545 23.5599939,39.4705547 L23.6635094,39.5631722 C23.8940295,39.7936867 24.0236971,40.095389 24.0525121,40.468279 L24.0586868,40.6324474 L24.0586868,41.1903307 C24.0586868,41.670729 23.926961,42.0387757 23.6635094,42.2944707 C23.4329893,42.5182065 23.1253567,42.6440579 22.7406115,42.6720249 L22.5709996,42.6780178 L16.5970191,42.6780178 C16.132099,42.6780178 15.7679132,42.5501688 15.5044616,42.2944707 C15.2739693,42.0707376 15.1443174,41.7609852 15.1155058,41.3652136 L15.1093319,41.1903307 L15.1093319,40.6324474 C15.1093319,40.1830425 15.2410418,39.8266174 15.5044616,39.5631722 C15.7349817,39.3326576 16.0426265,39.2029932 16.427396,39.1741789 L16.5970191,39.1680044 L17.8518842,39.1672207 L17.8518842,21.4542207 L16.5970191,21.4552104 C16.190214,21.4552104 15.8605336,21.35437 15.6079779,21.1526892 L15.5044616,21.0600807 C15.2739693,20.8295606 15.1443174,20.5219158 15.1155058,20.1371463 L15.1093319,19.9675232 L15.1093319,19.4096762 C15.1093319,18.9602439 15.2410418,18.6038179 15.5044616,18.3403981 C15.7349817,18.109878 16.0426265,17.9802104 16.427396,17.9513954 L16.5970191,17.9452207 L22.5709996,17.9452207 Z M33.635679,17.9452207 C34.1005673,17.9452207 34.4647373,18.0769465 34.7281888,18.3403981 C34.9587089,18.5708904 35.0883765,18.8725906 35.1171915,19.2454988 L35.1233662,19.4096762 L35.1233662,19.9675232 C35.1233662,20.4324433 34.9916404,20.7966291 34.7281888,21.0600807 C34.4976687,21.290573 34.1900361,21.4202249 33.8052909,21.4490365 L33.635679,21.4552104 L32.4268842,21.4542207 L32.4268842,39.1672207 L33.635679,39.1680044 C34.0424563,39.1680044 34.3721211,39.2688545 34.6246733,39.4705547 L34.7281888,39.5631722 C34.9587089,39.7936867 35.0883765,40.095389 35.1171915,40.468279 L35.1233662,40.6324474 L35.1233662,41.1903307 C35.1233662,41.670729 34.9916404,42.0387757 34.7281888,42.2944707 C34.4976687,42.5182065 34.1900361,42.6440579 33.8052909,42.6720249 L33.635679,42.6780178 L27.6616509,42.6780178 C27.1967625,42.6780178 26.8325926,42.5501688 26.569141,42.2944707 C26.3386209,42.0707376 26.2089534,41.7609852 26.1801384,41.3652136 L26.1739637,41.1903307 L26.1739637,40.6324474 C26.1739637,40.1830425 26.3056895,39.8266174 26.569141,39.5631722 C26.7996611,39.3326576 27.1072938,39.2029932 27.4920389,39.1741789 L27.6616509,39.1680044 L28.9168842,39.1672207 L28.9168842,21.4542207 L27.6616509,21.4552104 C27.2548736,21.4552104 26.9252088,21.35437 26.6726565,21.1526892 L26.569141,21.0600807 C26.3386209,20.8295606 26.2089534,20.5219158 26.1801384,20.1371463 L26.1739637,19.9675232 L26.1739637,19.4096762 C26.1739637,18.9602439 26.3056895,18.6038179 26.569141,18.3403981 C26.7996611,18.109878 27.1072938,17.9802104 27.4920389,17.9513954 L27.6616509,17.9452207 L33.635679,17.9452207 Z M44.6771743,17.9452207 C45.15736,17.9452207 45.5253543,18.0769465 45.7811572,18.3403981 C46.0049847,18.5708904 46.1308876,18.8725906 46.1588661,19.2454988 L46.1648614,19.4096762 L46.1648614,19.9675232 C46.1648614,20.4324433 46.03696,20.7966291 45.7811572,21.0600807 C45.5573297,21.290573 45.2476056,21.4202249 44.8519849,21.4490365 L44.6771743,21.4552104 L43.4678842,21.4542207 L43.4678842,39.1672207 L44.6771743,39.1680044 C45.0973368,39.1680044 45.4316027,39.2688545 45.6799721,39.4705547 L45.7811572,39.5631722 C46.0049847,39.7936867 46.1308876,40.095389 46.1588661,40.468279 L46.1648614,40.6324474 L46.1648614,41.1903307 C46.1648614,41.670729 46.03696,42.0387757 45.7811572,42.2944707 C45.5573297,42.5182065 45.2476056,42.6440579 44.8519849,42.6720249 L44.6771743,42.6780178 L38.7263303,42.6780178 C38.2459541,42.6780178 37.8779122,42.5501688 37.6222046,42.2944707 C37.3984604,42.0707376 37.2726043,41.7609852 37.2446363,41.3652136 L37.2386431,41.1903307 L37.2386431,40.6324474 C37.2386431,40.1830425 37.3664969,39.8266174 37.6222046,39.5631722 C37.8459488,39.3326576 38.1556989,39.2029932 38.5514549,39.1741789 L38.7263303,39.1680044 L39.9578842,39.1672207 L39.9578842,21.4542207 L38.7263303,21.4552104 C38.3060011,21.4552104 37.9716779,21.35437 37.7233606,21.1526892 L37.6222046,21.0600807 C37.3984604,20.8295606 37.2726043,20.5219158 37.2446363,20.1371463 L37.2386431,19.9675232 L37.2386431,19.4096762 C37.2386431,18.9602439 37.3664969,18.6038179 37.6222046,18.3403981 C37.8459488,18.109878 38.1556989,17.9802104 38.5514549,17.9513954 L38.7263303,17.9452207 L44.6771743,17.9452207 Z M24.9884794,0 C25.8532136,0 26.7116624,0.21966832 27.5638258,0.659004959 L27.8476475,0.813586369 L47.6987264,12.2501638 C48.1328931,12.4981275 48.4467752,12.7731949 48.6403729,13.075366 C48.8339706,13.3775688 48.9307695,13.6991314 48.9307695,14.0400538 C48.9307695,14.52043 48.7565315,14.9543268 48.4080557,15.3417444 C48.0980173,15.6861155 47.6686152,15.8774328 47.1198494,15.9156963 L46.908467,15.9228707 L3.06834887,15.9228707 C2.41747978,15.9228707 1.91771209,15.7291619 1.56904582,15.3417444 C1.22034782,14.9543268 1.04599881,14.52043 1.04599881,14.0400538 C1.04599881,13.6991314 1.14286113,13.3775688 1.33658577,13.075366 C1.50260826,12.8163622 1.75687477,12.5772713 2.0993853,12.3580933 L2.27799423,12.2501638 L22.1293112,0.813586369 C23.0746392,0.271195456 24.0276953,0 24.9884794,0 Z M24.9884794,4.04465251 C24.7653279,4.04465251 24.5272979,4.09920009 24.2743895,4.20829525 L24.0819185,4.30034429 L10.0418647,12.180421 L39.935094,12.180421 L25.8950402,4.30034429 C25.5696057,4.12988311 25.2674187,4.04465251 24.9884794,4.04465251 Z",
    transform: "translate(3 4)"
  }));
}

var _default = BuildingColumns;
exports["default"] = _default;