/**
 * Framework7 Vue 6.3.12
 * Build full featured iOS & Android apps using Framework7 & Vue
 * https://framework7.io/vue/
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 13, 2021
 */
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _plugin = _interopRequireDefault(require("./shared/plugin"));

var _f = require("./shared/f7");

exports.f7 = _f.f7;
exports.f7ready = _f.f7ready;
exports.theme = _f.theme;

var _useStore = require("./shared/use-store");

exports.useStore = _useStore.useStore;

var _accordionContent = _interopRequireDefault(require("./components/accordion-content"));

exports.f7AccordionContent = _accordionContent.default;

var _accordionItem = _interopRequireDefault(require("./components/accordion-item"));

exports.f7AccordionItem = _accordionItem.default;

var _accordionToggle = _interopRequireDefault(require("./components/accordion-toggle"));

exports.f7AccordionToggle = _accordionToggle.default;

var _accordion = _interopRequireDefault(require("./components/accordion"));

exports.f7Accordion = _accordion.default;

var _actionsButton = _interopRequireDefault(require("./components/actions-button"));

exports.f7ActionsButton = _actionsButton.default;

var _actionsGroup = _interopRequireDefault(require("./components/actions-group"));

exports.f7ActionsGroup = _actionsGroup.default;

var _actionsLabel = _interopRequireDefault(require("./components/actions-label"));

exports.f7ActionsLabel = _actionsLabel.default;

var _actions = _interopRequireDefault(require("./components/actions"));

exports.f7Actions = _actions.default;

var _app = _interopRequireDefault(require("./components/app"));

exports.f7App = _app.default;

var _appbar = _interopRequireDefault(require("./components/appbar"));

exports.f7Appbar = _appbar.default;

var _areaChart = _interopRequireDefault(require("./components/area-chart"));

exports.f7AreaChart = _areaChart.default;

var _badge = _interopRequireDefault(require("./components/badge"));

exports.f7Badge = _badge.default;

var _blockFooter = _interopRequireDefault(require("./components/block-footer"));

exports.f7BlockFooter = _blockFooter.default;

var _blockHeader = _interopRequireDefault(require("./components/block-header"));

exports.f7BlockHeader = _blockHeader.default;

var _blockTitle = _interopRequireDefault(require("./components/block-title"));

exports.f7BlockTitle = _blockTitle.default;

var _block = _interopRequireDefault(require("./components/block"));

exports.f7Block = _block.default;

var _button = _interopRequireDefault(require("./components/button"));

exports.f7Button = _button.default;

var _cardContent = _interopRequireDefault(require("./components/card-content"));

exports.f7CardContent = _cardContent.default;

var _cardFooter = _interopRequireDefault(require("./components/card-footer"));

exports.f7CardFooter = _cardFooter.default;

var _cardHeader = _interopRequireDefault(require("./components/card-header"));

exports.f7CardHeader = _cardHeader.default;

var _card = _interopRequireDefault(require("./components/card"));

exports.f7Card = _card.default;

var _checkbox = _interopRequireDefault(require("./components/checkbox"));

exports.f7Checkbox = _checkbox.default;

var _chip = _interopRequireDefault(require("./components/chip"));

exports.f7Chip = _chip.default;

var _col = _interopRequireDefault(require("./components/col"));

exports.f7Col = _col.default;

var _fabBackdrop = _interopRequireDefault(require("./components/fab-backdrop"));

exports.f7FabBackdrop = _fabBackdrop.default;

var _fabButton = _interopRequireDefault(require("./components/fab-button"));

exports.f7FabButton = _fabButton.default;

var _fabButtons = _interopRequireDefault(require("./components/fab-buttons"));

exports.f7FabButtons = _fabButtons.default;

var _fab = _interopRequireDefault(require("./components/fab"));

exports.f7Fab = _fab.default;

var _gauge = _interopRequireDefault(require("./components/gauge"));

exports.f7Gauge = _gauge.default;

var _icon = _interopRequireDefault(require("./components/icon"));

exports.f7Icon = _icon.default;

var _input = _interopRequireDefault(require("./components/input"));

exports.f7Input = _input.default;

var _link = _interopRequireDefault(require("./components/link"));

exports.f7Link = _link.default;

var _listButton = _interopRequireDefault(require("./components/list-button"));

exports.f7ListButton = _listButton.default;

var _listGroup = _interopRequireDefault(require("./components/list-group"));

exports.f7ListGroup = _listGroup.default;

var _listIndex = _interopRequireDefault(require("./components/list-index"));

exports.f7ListIndex = _listIndex.default;

var _listInput = _interopRequireDefault(require("./components/list-input"));

exports.f7ListInput = _listInput.default;

var _listItemCell = _interopRequireDefault(require("./components/list-item-cell"));

exports.f7ListItemCell = _listItemCell.default;

var _listItemRow = _interopRequireDefault(require("./components/list-item-row"));

exports.f7ListItemRow = _listItemRow.default;

var _listItem = _interopRequireDefault(require("./components/list-item"));

exports.f7ListItem = _listItem.default;

var _list = _interopRequireDefault(require("./components/list"));

exports.f7List = _list.default;

var _loginScreenTitle = _interopRequireDefault(require("./components/login-screen-title"));

exports.f7LoginScreenTitle = _loginScreenTitle.default;

var _loginScreen = _interopRequireDefault(require("./components/login-screen"));

exports.f7LoginScreen = _loginScreen.default;

var _menuDropdownItem = _interopRequireDefault(require("./components/menu-dropdown-item"));

exports.f7MenuDropdownItem = _menuDropdownItem.default;

var _menuDropdown = _interopRequireDefault(require("./components/menu-dropdown"));

exports.f7MenuDropdown = _menuDropdown.default;

var _menuItem = _interopRequireDefault(require("./components/menu-item"));

exports.f7MenuItem = _menuItem.default;

var _menu = _interopRequireDefault(require("./components/menu"));

exports.f7Menu = _menu.default;

var _message = _interopRequireDefault(require("./components/message"));

exports.f7Message = _message.default;

var _messagebarAttachment = _interopRequireDefault(require("./components/messagebar-attachment"));

exports.f7MessagebarAttachment = _messagebarAttachment.default;

var _messagebarAttachments = _interopRequireDefault(require("./components/messagebar-attachments"));

exports.f7MessagebarAttachments = _messagebarAttachments.default;

var _messagebarSheetImage = _interopRequireDefault(require("./components/messagebar-sheet-image"));

exports.f7MessagebarSheetImage = _messagebarSheetImage.default;

var _messagebarSheetItem = _interopRequireDefault(require("./components/messagebar-sheet-item"));

exports.f7MessagebarSheetItem = _messagebarSheetItem.default;

var _messagebarSheet = _interopRequireDefault(require("./components/messagebar-sheet"));

exports.f7MessagebarSheet = _messagebarSheet.default;

var _messagebar = _interopRequireDefault(require("./components/messagebar"));

exports.f7Messagebar = _messagebar.default;

var _messagesTitle = _interopRequireDefault(require("./components/messages-title"));

exports.f7MessagesTitle = _messagesTitle.default;

var _messages = _interopRequireDefault(require("./components/messages"));

exports.f7Messages = _messages.default;

var _navLeft = _interopRequireDefault(require("./components/nav-left"));

exports.f7NavLeft = _navLeft.default;

var _navRight = _interopRequireDefault(require("./components/nav-right"));

exports.f7NavRight = _navRight.default;

var _navTitleLarge = _interopRequireDefault(require("./components/nav-title-large"));

exports.f7NavTitleLarge = _navTitleLarge.default;

var _navTitle = _interopRequireDefault(require("./components/nav-title"));

exports.f7NavTitle = _navTitle.default;

var _navbar = _interopRequireDefault(require("./components/navbar"));

exports.f7Navbar = _navbar.default;

var _pageContent = _interopRequireDefault(require("./components/page-content"));

exports.f7PageContent = _pageContent.default;

var _page = _interopRequireDefault(require("./components/page"));

exports.f7Page = _page.default;

var _panel = _interopRequireDefault(require("./components/panel"));

exports.f7Panel = _panel.default;

var _photoBrowser = _interopRequireDefault(require("./components/photo-browser"));

exports.f7PhotoBrowser = _photoBrowser.default;

var _pieChart = _interopRequireDefault(require("./components/pie-chart"));

exports.f7PieChart = _pieChart.default;

var _popover = _interopRequireDefault(require("./components/popover"));

exports.f7Popover = _popover.default;

var _popup = _interopRequireDefault(require("./components/popup"));

exports.f7Popup = _popup.default;

var _preloader = _interopRequireDefault(require("./components/preloader"));

exports.f7Preloader = _preloader.default;

var _progressbar = _interopRequireDefault(require("./components/progressbar"));

exports.f7Progressbar = _progressbar.default;

var _radio = _interopRequireDefault(require("./components/radio"));

exports.f7Radio = _radio.default;

var _range = _interopRequireDefault(require("./components/range"));

exports.f7Range = _range.default;

var _routableModals = _interopRequireDefault(require("./components/routable-modals"));

exports.f7RoutableModals = _routableModals.default;

var _row = _interopRequireDefault(require("./components/row"));

exports.f7Row = _row.default;

var _searchbar = _interopRequireDefault(require("./components/searchbar"));

exports.f7Searchbar = _searchbar.default;

var _segmented = _interopRequireDefault(require("./components/segmented"));

exports.f7Segmented = _segmented.default;

var _sheet = _interopRequireDefault(require("./components/sheet"));

exports.f7Sheet = _sheet.default;

var _skeletonAvatar = _interopRequireDefault(require("./components/skeleton-avatar"));

exports.f7SkeletonAvatar = _skeletonAvatar.default;

var _skeletonBlock = _interopRequireDefault(require("./components/skeleton-block"));

exports.f7SkeletonBlock = _skeletonBlock.default;

var _skeletonImage = _interopRequireDefault(require("./components/skeleton-image"));

exports.f7SkeletonImage = _skeletonImage.default;

var _skeletonText = _interopRequireDefault(require("./components/skeleton-text"));

exports.f7SkeletonText = _skeletonText.default;

var _stepper = _interopRequireDefault(require("./components/stepper"));

exports.f7Stepper = _stepper.default;

var _subnavbar = _interopRequireDefault(require("./components/subnavbar"));

exports.f7Subnavbar = _subnavbar.default;

var _swipeoutActions = _interopRequireDefault(require("./components/swipeout-actions"));

exports.f7SwipeoutActions = _swipeoutActions.default;

var _swipeoutButton = _interopRequireDefault(require("./components/swipeout-button"));

exports.f7SwipeoutButton = _swipeoutButton.default;

var _swiperSlide = _interopRequireDefault(require("./components/swiper-slide"));

exports.f7SwiperSlide = _swiperSlide.default;

var _swiper = _interopRequireDefault(require("./components/swiper"));

exports.f7Swiper = _swiper.default;

var _tab = _interopRequireDefault(require("./components/tab"));

exports.f7Tab = _tab.default;

var _tabs = _interopRequireDefault(require("./components/tabs"));

exports.f7Tabs = _tabs.default;

var _textEditor = _interopRequireDefault(require("./components/text-editor"));

exports.f7TextEditor = _textEditor.default;

var _toggle = _interopRequireDefault(require("./components/toggle"));

exports.f7Toggle = _toggle.default;

var _toolbar = _interopRequireDefault(require("./components/toolbar"));

exports.f7Toolbar = _toolbar.default;

var _treeviewItem = _interopRequireDefault(require("./components/treeview-item"));

exports.f7TreeviewItem = _treeviewItem.default;

var _treeview = _interopRequireDefault(require("./components/treeview"));

exports.f7Treeview = _treeview.default;

var _useIcon = _interopRequireDefault(require("./components/use-icon"));

exports.f7UseIcon = _useIcon.default;

var _view = _interopRequireDefault(require("./components/view"));

exports.f7View = _view.default;

var _views = _interopRequireDefault(require("./components/views"));

exports.f7Views = _views.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _plugin.default;
exports.default = _default;

exports.registerComponents = function registerComponents (app) {
  app.component('f7-accordion-content', f7AccordionContent);
  app.component('f7-accordion-item', f7AccordionItem);
  app.component('f7-accordion-toggle', f7AccordionToggle);
  app.component('f7-accordion', f7Accordion);
  app.component('f7-actions-button', f7ActionsButton);
  app.component('f7-actions-group', f7ActionsGroup);
  app.component('f7-actions-label', f7ActionsLabel);
  app.component('f7-actions', f7Actions);
  app.component('f7-app', f7App);
  app.component('f7-appbar', f7Appbar);
  app.component('f7-area-chart', f7AreaChart);
  app.component('f7-badge', f7Badge);
  app.component('f7-block-footer', f7BlockFooter);
  app.component('f7-block-header', f7BlockHeader);
  app.component('f7-block-title', f7BlockTitle);
  app.component('f7-block', f7Block);
  app.component('f7-button', f7Button);
  app.component('f7-card-content', f7CardContent);
  app.component('f7-card-footer', f7CardFooter);
  app.component('f7-card-header', f7CardHeader);
  app.component('f7-card', f7Card);
  app.component('f7-checkbox', f7Checkbox);
  app.component('f7-chip', f7Chip);
  app.component('f7-col', f7Col);
  app.component('f7-fab-backdrop', f7FabBackdrop);
  app.component('f7-fab-button', f7FabButton);
  app.component('f7-fab-buttons', f7FabButtons);
  app.component('f7-fab', f7Fab);
  app.component('f7-gauge', f7Gauge);
  app.component('f7-icon', f7Icon);
  app.component('f7-input', f7Input);
  app.component('f7-link', f7Link);
  app.component('f7-list-button', f7ListButton);
  app.component('f7-list-group', f7ListGroup);
  app.component('f7-list-index', f7ListIndex);
  app.component('f7-list-input', f7ListInput);
  app.component('f7-list-item-cell', f7ListItemCell);
  app.component('f7-list-item-row', f7ListItemRow);
  app.component('f7-list-item', f7ListItem);
  app.component('f7-list', f7List);
  app.component('f7-login-screen-title', f7LoginScreenTitle);
  app.component('f7-login-screen', f7LoginScreen);
  app.component('f7-menu-dropdown-item', f7MenuDropdownItem);
  app.component('f7-menu-dropdown', f7MenuDropdown);
  app.component('f7-menu-item', f7MenuItem);
  app.component('f7-menu', f7Menu);
  app.component('f7-message', f7Message);
  app.component('f7-messagebar-attachment', f7MessagebarAttachment);
  app.component('f7-messagebar-attachments', f7MessagebarAttachments);
  app.component('f7-messagebar-sheet-image', f7MessagebarSheetImage);
  app.component('f7-messagebar-sheet-item', f7MessagebarSheetItem);
  app.component('f7-messagebar-sheet', f7MessagebarSheet);
  app.component('f7-messagebar', f7Messagebar);
  app.component('f7-messages-title', f7MessagesTitle);
  app.component('f7-messages', f7Messages);
  app.component('f7-nav-left', f7NavLeft);
  app.component('f7-nav-right', f7NavRight);
  app.component('f7-nav-title-large', f7NavTitleLarge);
  app.component('f7-nav-title', f7NavTitle);
  app.component('f7-navbar', f7Navbar);
  app.component('f7-page-content', f7PageContent);
  app.component('f7-page', f7Page);
  app.component('f7-panel', f7Panel);
  app.component('f7-photo-browser', f7PhotoBrowser);
  app.component('f7-pie-chart', f7PieChart);
  app.component('f7-popover', f7Popover);
  app.component('f7-popup', f7Popup);
  app.component('f7-preloader', f7Preloader);
  app.component('f7-progressbar', f7Progressbar);
  app.component('f7-radio', f7Radio);
  app.component('f7-range', f7Range);
  app.component('f7-routable-modals', f7RoutableModals);
  app.component('f7-row', f7Row);
  app.component('f7-searchbar', f7Searchbar);
  app.component('f7-segmented', f7Segmented);
  app.component('f7-sheet', f7Sheet);
  app.component('f7-skeleton-avatar', f7SkeletonAvatar);
  app.component('f7-skeleton-block', f7SkeletonBlock);
  app.component('f7-skeleton-image', f7SkeletonImage);
  app.component('f7-skeleton-text', f7SkeletonText);
  app.component('f7-stepper', f7Stepper);
  app.component('f7-subnavbar', f7Subnavbar);
  app.component('f7-swipeout-actions', f7SwipeoutActions);
  app.component('f7-swipeout-button', f7SwipeoutButton);
  app.component('f7-swiper-slide', f7SwiperSlide);
  app.component('f7-swiper', f7Swiper);
  app.component('f7-tab', f7Tab);
  app.component('f7-tabs', f7Tabs);
  app.component('f7-text-editor', f7TextEditor);
  app.component('f7-toggle', f7Toggle);
  app.component('f7-toolbar', f7Toolbar);
  app.component('f7-treeview-item', f7TreeviewItem);
  app.component('f7-treeview', f7Treeview);
  app.component('f7-use-icon', f7UseIcon);
  app.component('f7-view', f7View);
  app.component('f7-views', f7Views)
}