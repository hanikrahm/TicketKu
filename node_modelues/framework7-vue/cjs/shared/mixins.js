"use strict";

exports.__esModule = true;
exports.colorClasses = colorClasses;
exports.routerAttrs = routerAttrs;
exports.routerClasses = routerClasses;
exports.actionsAttrs = actionsAttrs;
exports.actionsClasses = actionsClasses;
exports.actionsProps = exports.routerProps = exports.iconProps = exports.colorProps = void 0;

var _utils = require("./utils");

function colorClasses(props) {
  var _ref;

  var color = props.color,
      colorTheme = props.colorTheme,
      textColor = props.textColor,
      bgColor = props.bgColor,
      borderColor = props.borderColor,
      rippleColor = props.rippleColor,
      themeDark = props.themeDark;
  return _ref = {
    'theme-dark': themeDark
  }, _ref["color-" + color] = color, _ref["color-theme-" + colorTheme] = colorTheme, _ref["text-color-" + textColor] = textColor, _ref["bg-color-" + bgColor] = bgColor, _ref["border-color-" + borderColor] = borderColor, _ref["ripple-color-" + rippleColor] = rippleColor, _ref;
}

var colorProps = {
  color: String,
  colorTheme: String,
  textColor: String,
  bgColor: String,
  borderColor: String,
  rippleColor: String,
  themeDark: Boolean
};
exports.colorProps = colorProps;
var iconProps = {
  icon: String,
  iconMaterial: String,
  iconF7: String,
  iconIos: String,
  iconMd: String,
  iconAurora: String,
  iconColor: String,
  iconSize: [String, Number],
  iconBadge: [String, Number],
  iconBadgeColor: String
};
exports.iconProps = iconProps;
var routerProps = {
  back: Boolean,
  external: Boolean,
  force: Boolean,
  animate: {
    type: Boolean,
    default: undefined
  },
  ignoreCache: Boolean,
  reloadCurrent: Boolean,
  reloadAll: Boolean,
  reloadPrevious: Boolean,
  reloadDetail: {
    type: Boolean,
    default: undefined
  },
  routeTabId: String,
  view: String,
  routeProps: Object,
  preventRouter: Boolean,
  transition: String,
  openIn: String
};
exports.routerProps = routerProps;

function routerAttrs(props) {
  var force = props.force,
      reloadCurrent = props.reloadCurrent,
      reloadPrevious = props.reloadPrevious,
      reloadAll = props.reloadAll,
      reloadDetail = props.reloadDetail,
      animate = props.animate,
      ignoreCache = props.ignoreCache,
      routeTabId = props.routeTabId,
      view = props.view,
      transition = props.transition,
      openIn = props.openIn;
  var dataAnimate;

  if ('animate' in props && typeof animate !== 'undefined') {
    dataAnimate = animate.toString();
  }

  var dataReloadDetail;

  if ('reloadDetail' in props && typeof reloadDetail !== 'undefined') {
    dataReloadDetail = reloadDetail.toString();
  }

  return {
    'data-force': force || undefined,
    'data-reload-current': reloadCurrent || undefined,
    'data-reload-all': reloadAll || undefined,
    'data-reload-previous': reloadPrevious || undefined,
    'data-reload-detail': dataReloadDetail,
    'data-animate': dataAnimate,
    'data-ignore-cache': ignoreCache || undefined,
    'data-route-tab-id': routeTabId || undefined,
    'data-view': (0, _utils.isStringProp)(view) ? view : undefined,
    'data-transition': (0, _utils.isStringProp)(transition) ? transition : undefined,
    'data-open-in': (0, _utils.isStringProp)(openIn) ? openIn : undefined
  };
}

function routerClasses(props) {
  var back = props.back,
      linkBack = props.linkBack,
      external = props.external,
      preventRouter = props.preventRouter;
  return {
    back: back || linkBack,
    external: external,
    'prevent-router': preventRouter
  };
}

var actionsProps = {
  searchbarEnable: [Boolean, String],
  searchbarDisable: [Boolean, String],
  searchbarClear: [Boolean, String],
  searchbarToggle: [Boolean, String],
  // Panel
  panelOpen: [Boolean, String],
  panelClose: [Boolean, String],
  panelToggle: [Boolean, String],
  // Popup
  popupOpen: [Boolean, String],
  popupClose: [Boolean, String],
  // Actions
  actionsOpen: [Boolean, String],
  actionsClose: [Boolean, String],
  // Popover
  popoverOpen: [Boolean, String],
  popoverClose: [Boolean, String],
  // Login Screen
  loginScreenOpen: [Boolean, String],
  loginScreenClose: [Boolean, String],
  // Picker
  sheetOpen: [Boolean, String],
  sheetClose: [Boolean, String],
  // Sortable
  sortableEnable: [Boolean, String],
  sortableDisable: [Boolean, String],
  sortableToggle: [Boolean, String],
  // Card
  cardOpen: [Boolean, String],
  cardPreventOpen: [Boolean, String],
  cardClose: [Boolean, String],
  // Menu
  menuClose: {
    type: [Boolean, String],
    default: undefined
  }
};
exports.actionsProps = actionsProps;

function actionsAttrs(props) {
  var searchbarEnable = props.searchbarEnable,
      searchbarDisable = props.searchbarDisable,
      searchbarClear = props.searchbarClear,
      searchbarToggle = props.searchbarToggle,
      panelOpen = props.panelOpen,
      panelClose = props.panelClose,
      panelToggle = props.panelToggle,
      popupOpen = props.popupOpen,
      popupClose = props.popupClose,
      actionsOpen = props.actionsOpen,
      actionsClose = props.actionsClose,
      popoverOpen = props.popoverOpen,
      popoverClose = props.popoverClose,
      loginScreenOpen = props.loginScreenOpen,
      loginScreenClose = props.loginScreenClose,
      sheetOpen = props.sheetOpen,
      sheetClose = props.sheetClose,
      sortableEnable = props.sortableEnable,
      sortableDisable = props.sortableDisable,
      sortableToggle = props.sortableToggle,
      cardOpen = props.cardOpen,
      cardClose = props.cardClose;
  return {
    'data-searchbar': (0, _utils.isStringProp)(searchbarEnable) && searchbarEnable || (0, _utils.isStringProp)(searchbarDisable) && searchbarDisable || (0, _utils.isStringProp)(searchbarClear) && searchbarClear || (0, _utils.isStringProp)(searchbarToggle) && searchbarToggle || undefined,
    'data-panel': (0, _utils.isStringProp)(panelOpen) && panelOpen || (0, _utils.isStringProp)(panelClose) && panelClose || (0, _utils.isStringProp)(panelToggle) && panelToggle || undefined,
    'data-popup': (0, _utils.isStringProp)(popupOpen) && popupOpen || (0, _utils.isStringProp)(popupClose) && popupClose || undefined,
    'data-actions': (0, _utils.isStringProp)(actionsOpen) && actionsOpen || (0, _utils.isStringProp)(actionsClose) && actionsClose || undefined,
    'data-popover': (0, _utils.isStringProp)(popoverOpen) && popoverOpen || (0, _utils.isStringProp)(popoverClose) && popoverClose || undefined,
    'data-sheet': (0, _utils.isStringProp)(sheetOpen) && sheetOpen || (0, _utils.isStringProp)(sheetClose) && sheetClose || undefined,
    'data-login-screen': (0, _utils.isStringProp)(loginScreenOpen) && loginScreenOpen || (0, _utils.isStringProp)(loginScreenClose) && loginScreenClose || undefined,
    'data-sortable': (0, _utils.isStringProp)(sortableEnable) && sortableEnable || (0, _utils.isStringProp)(sortableDisable) && sortableDisable || (0, _utils.isStringProp)(sortableToggle) && sortableToggle || undefined,
    'data-card': (0, _utils.isStringProp)(cardOpen) && cardOpen || (0, _utils.isStringProp)(cardClose) && cardClose || undefined
  };
}

function actionsClasses(props) {
  var searchbarEnable = props.searchbarEnable,
      searchbarDisable = props.searchbarDisable,
      searchbarClear = props.searchbarClear,
      searchbarToggle = props.searchbarToggle,
      panelOpen = props.panelOpen,
      panelClose = props.panelClose,
      panelToggle = props.panelToggle,
      popupOpen = props.popupOpen,
      popupClose = props.popupClose,
      actionsClose = props.actionsClose,
      actionsOpen = props.actionsOpen,
      popoverOpen = props.popoverOpen,
      popoverClose = props.popoverClose,
      loginScreenOpen = props.loginScreenOpen,
      loginScreenClose = props.loginScreenClose,
      sheetOpen = props.sheetOpen,
      sheetClose = props.sheetClose,
      sortableEnable = props.sortableEnable,
      sortableDisable = props.sortableDisable,
      sortableToggle = props.sortableToggle,
      cardOpen = props.cardOpen,
      cardPreventOpen = props.cardPreventOpen,
      cardClose = props.cardClose,
      menuClose = props.menuClose;
  return {
    'searchbar-enable': searchbarEnable || searchbarEnable === '',
    'searchbar-disable': searchbarDisable || searchbarDisable === '',
    'searchbar-clear': searchbarClear || searchbarClear === '',
    'searchbar-toggle': searchbarToggle || searchbarToggle === '',
    'panel-close': panelClose || panelClose === '',
    'panel-open': panelOpen || panelOpen === '',
    'panel-toggle': panelToggle || panelToggle === '',
    'popup-close': popupClose || popupClose === '',
    'popup-open': popupOpen || popupOpen === '',
    'actions-close': actionsClose || actionsClose === '',
    'actions-open': actionsOpen || actionsOpen === '',
    'popover-close': popoverClose || popoverClose === '',
    'popover-open': popoverOpen || popoverOpen === '',
    'sheet-close': sheetClose || sheetClose === '',
    'sheet-open': sheetOpen || sheetOpen === '',
    'login-screen-close': loginScreenClose || loginScreenClose === '',
    'login-screen-open': loginScreenOpen || loginScreenOpen === '',
    'sortable-enable': sortableEnable || sortableEnable === '',
    'sortable-disable': sortableDisable || sortableDisable === '',
    'sortable-toggle': sortableToggle || sortableToggle === '',
    'card-close': cardClose || cardClose === '',
    'card-open': cardOpen || cardOpen === '',
    'card-prevent-open': cardPreventOpen || cardPreventOpen === '',
    'menu-close': menuClose || menuClose === ''
  };
}