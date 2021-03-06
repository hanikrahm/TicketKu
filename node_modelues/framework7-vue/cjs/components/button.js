"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../shared/utils");

var _mixins = require("../shared/mixins");

var _useTooltip = require("../shared/use-tooltip");

var _useIcon = require("../shared/use-icon");

var _useRouteProps = require("../shared/use-route-props");

var _preloader = _interopRequireDefault(require("./preloader"));

var _useIcon2 = _interopRequireDefault(require("./use-icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _hoisted_1 = {
  key: 1
};
var _hoisted_2 = {
  key: 1
};

function render(_ctx, _cache) {
  var _component_f7_preloader = (0, _vue.resolveComponent)("f7-preloader");

  var _component_f7_use_icon = (0, _vue.resolveComponent)("f7-use-icon");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.tag), (0, _vue.mergeProps)({
    ref: "elRef",
    class: _ctx.classesComputed
  }, _ctx.attrs), {
    default: (0, _vue.withCtx)(function () {
      return [_ctx.preloader ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_vue.Fragment, {
        key: 0
      }, [(0, _vue.createVNode)(_component_f7_preloader, {
        size: _ctx.preloaderSize,
        color: _ctx.preloaderColor
      }, null, 8, ["size", "color"]), (0, _vue.createVNode)("span", null, [_ctx.icon ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_f7_use_icon, {
        key: 0,
        icon: _ctx.icon
      }, null, 8, ["icon"])) : (0, _vue.createCommentVNode)("", true), _ctx.text ? ((0, _vue.openBlock)(), (0, _vue.createBlock)("span", _hoisted_1, (0, _vue.toDisplayString)(_ctx.text), 1)) : (0, _vue.createCommentVNode)("", true), (0, _vue.renderSlot)(_ctx.$slots, "default")])], 64)) : ((0, _vue.openBlock)(), (0, _vue.createBlock)(_vue.Fragment, {
        key: 1
      }, [_ctx.icon ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_f7_use_icon, {
        key: 0,
        icon: _ctx.icon
      }, null, 8, ["icon"])) : (0, _vue.createCommentVNode)("", true), _ctx.text ? ((0, _vue.openBlock)(), (0, _vue.createBlock)("span", _hoisted_2, (0, _vue.toDisplayString)(_ctx.text), 1)) : (0, _vue.createCommentVNode)("", true), (0, _vue.renderSlot)(_ctx.$slots, "default")], 64))];
    }),
    _: 3
  }, 16, ["class"]);
}

var _default = {
  name: 'f7-button',
  render: render,
  components: {
    f7Preloader: _preloader.default,
    f7UseIcon: _useIcon2.default
  },
  props: _extends({
    text: String,
    tabLink: [Boolean, String],
    tabLinkActive: Boolean,
    type: String,
    href: {
      type: [String, Boolean],
      default: '#'
    },
    target: String,
    round: Boolean,
    roundMd: Boolean,
    roundIos: Boolean,
    roundAurora: Boolean,
    fill: Boolean,
    fillMd: Boolean,
    fillIos: Boolean,
    fillAurora: Boolean,
    large: Boolean,
    largeMd: Boolean,
    largeIos: Boolean,
    largeAurora: Boolean,
    small: Boolean,
    smallMd: Boolean,
    smallIos: Boolean,
    smallAurora: Boolean,
    raised: Boolean,
    raisedMd: Boolean,
    raisedIos: Boolean,
    raisedAurora: Boolean,
    outline: Boolean,
    outlineMd: Boolean,
    outlineIos: Boolean,
    outlineAurora: Boolean,
    active: Boolean,
    disabled: Boolean,
    tooltip: String,
    tooltipTrigger: String,
    preloader: Boolean,
    preloaderSize: [Number, String],
    preloaderColor: String,
    loading: Boolean
  }, _mixins.iconProps, _mixins.colorProps, _mixins.actionsProps, _mixins.routerProps),
  setup: function setup(props) {
    var elRef = (0, _vue.ref)(null);
    (0, _useTooltip.useTooltip)(elRef, props);
    (0, _useRouteProps.useRouteProps)(elRef, props);
    var icon = (0, _vue.computed)(function () {
      return (0, _useIcon.useIcon)(props);
    });
    var tag = (0, _vue.computed)(function () {
      return props.type === 'submit' || props.type === 'reset' || props.type === 'button' ? 'button' : 'a';
    });
    var attrs = (0, _vue.computed)(function () {
      var href = props.href,
          tabLink = props.tabLink,
          target = props.target,
          type = props.type;
      var hrefComputed = href;
      if (href === true) hrefComputed = '#';
      if (href === false || tag.value === 'button') hrefComputed = undefined; // no href attribute

      return (0, _utils.extend)({
        href: hrefComputed,
        target: target,
        type: type,
        'data-tab': (0, _utils.isStringProp)(tabLink) && tabLink || undefined
      }, (0, _mixins.routerAttrs)(props), (0, _mixins.actionsAttrs)(props));
    });
    var classesComputed = (0, _vue.computed)(function () {
      var tabLink = props.tabLink,
          tabLinkActive = props.tabLinkActive,
          round = props.round,
          roundMd = props.roundMd,
          roundIos = props.roundIos,
          roundAurora = props.roundAurora,
          fill = props.fill,
          fillMd = props.fillMd,
          fillIos = props.fillIos,
          fillAurora = props.fillAurora,
          large = props.large,
          largeMd = props.largeMd,
          largeIos = props.largeIos,
          largeAurora = props.largeAurora,
          small = props.small,
          smallMd = props.smallMd,
          smallIos = props.smallIos,
          smallAurora = props.smallAurora,
          raised = props.raised,
          raisedMd = props.raisedMd,
          raisedIos = props.raisedIos,
          raisedAurora = props.raisedAurora,
          outline = props.outline,
          outlineMd = props.outlineMd,
          outlineIos = props.outlineIos,
          outlineAurora = props.outlineAurora,
          active = props.active,
          disabled = props.disabled,
          preloader = props.preloader,
          loading = props.loading;
      return (0, _utils.classNames)('button', {
        'tab-link': tabLink || tabLink === '',
        'tab-link-active': tabLinkActive,
        'button-round': round,
        'button-round-ios': roundIos,
        'button-round-aurora': roundAurora,
        'button-round-md': roundMd,
        'button-fill': fill,
        'button-fill-ios': fillIos,
        'button-fill-aurora': fillAurora,
        'button-fill-md': fillMd,
        'button-large': large,
        'button-large-ios': largeIos,
        'button-large-aurora': largeAurora,
        'button-large-md': largeMd,
        'button-small': small,
        'button-small-ios': smallIos,
        'button-small-aurora': smallAurora,
        'button-small-md': smallMd,
        'button-raised': raised,
        'button-raised-ios': raisedIos,
        'button-raised-aurora': raisedAurora,
        'button-raised-md': raisedMd,
        'button-active': active,
        'button-outline': outline,
        'button-outline-ios': outlineIos,
        'button-outline-aurora': outlineAurora,
        'button-outline-md': outlineMd,
        'button-preloader': preloader,
        'button-loading': loading,
        disabled: disabled
      }, (0, _mixins.colorClasses)(props), (0, _mixins.routerClasses)(props), (0, _mixins.actionsClasses)(props));
    });
    return {
      tag: tag,
      elRef: elRef,
      attrs: attrs,
      classesComputed: classesComputed,
      icon: icon
    };
  }
};
exports.default = _default;