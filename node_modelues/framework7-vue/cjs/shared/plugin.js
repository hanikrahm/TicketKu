"use strict";

exports.__esModule = true;
exports.default = void 0;

var _lite = _interopRequireDefault(require("framework7/lite"));

var _componentsRouter = _interopRequireDefault(require("./components-router"));

var _f = require("./f7");

exports.f7 = _f.f7;
exports.f7ready = _f.f7ready;
exports.theme = _f.theme;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Framework7Vue = {
  name: 'vuePlugin',
  installed: false,
  install: function install(params) {
    if (params === void 0) {
      params = {};
    }

    if (Framework7Vue.installed) return;
    Framework7Vue.installed = true;
    (0, _f.f7initEvents)();
    var _params = params,
        paramsTheme = _params.theme,
        userAgent = _params.userAgent;
    if (paramsTheme === 'md') _f.theme.md = true;
    if (paramsTheme === 'ios') _f.theme.ios = true;
    if (paramsTheme === 'aurora') _f.theme.aurora = true; // eslint-disable-next-line

    var needThemeCalc = typeof window === 'undefined' ? !!userAgent : true;

    if (needThemeCalc && (!paramsTheme || paramsTheme === 'auto')) {
      var device = _lite.default.getDevice({
        userAgent: userAgent
      }, true);

      _f.theme.ios = !!device.ios;
      _f.theme.aurora = device.desktop && device.electron;
      _f.theme.md = !_f.theme.ios && !_f.theme.aurora;
    }

    (0, _f.f7ready)(function () {
      (0, _f.setTheme)();
    });

    _lite.default.Router.use(_componentsRouter.default);
  }
};
var _default = Framework7Vue;
exports.default = _default;