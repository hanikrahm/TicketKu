function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, renderSlot as _renderSlot, Fragment as _Fragment, resolveDynamicComponent as _resolveDynamicComponent, mergeProps as _mergeProps, withCtx as _withCtx } from "vue";
var _hoisted_1 = {
  key: 1
};
var _hoisted_2 = {
  key: 1
};

function render(_ctx, _cache) {
  var _component_f7_preloader = _resolveComponent("f7-preloader");

  var _component_f7_use_icon = _resolveComponent("f7-use-icon");

  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.tag), _mergeProps({
    ref: "elRef",
    class: _ctx.classesComputed
  }, _ctx.attrs), {
    default: _withCtx(function () {
      return [_ctx.preloader ? (_openBlock(), _createBlock(_Fragment, {
        key: 0
      }, [_createVNode(_component_f7_preloader, {
        size: _ctx.preloaderSize,
        color: _ctx.preloaderColor
      }, null, 8, ["size", "color"]), _createVNode("span", null, [_ctx.icon ? (_openBlock(), _createBlock(_component_f7_use_icon, {
        key: 0,
        icon: _ctx.icon
      }, null, 8, ["icon"])) : _createCommentVNode("", true), _ctx.text ? (_openBlock(), _createBlock("span", _hoisted_1, _toDisplayString(_ctx.text), 1)) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")])], 64)) : (_openBlock(), _createBlock(_Fragment, {
        key: 1
      }, [_ctx.icon ? (_openBlock(), _createBlock(_component_f7_use_icon, {
        key: 0,
        icon: _ctx.icon
      }, null, 8, ["icon"])) : _createCommentVNode("", true), _ctx.text ? (_openBlock(), _createBlock("span", _hoisted_2, _toDisplayString(_ctx.text), 1)) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")], 64))];
    }),
    _: 3
  }, 16, ["class"]);
}

import { ref, computed } from 'vue';
import { classNames, extend, isStringProp } from '../shared/utils';
import { colorClasses, actionsAttrs, actionsClasses, routerAttrs, routerClasses, iconProps, colorProps, actionsProps, routerProps } from '../shared/mixins';
import { useTooltip } from '../shared/use-tooltip';
import { useIcon } from '../shared/use-icon';
import { useRouteProps } from '../shared/use-route-props';
import f7Preloader from './preloader';
import f7UseIcon from './use-icon';
export default {
  name: 'f7-button',
  render: render,
  components: {
    f7Preloader: f7Preloader,
    f7UseIcon: f7UseIcon
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
  }, iconProps, colorProps, actionsProps, routerProps),
  setup: function setup(props) {
    var elRef = ref(null);
    useTooltip(elRef, props);
    useRouteProps(elRef, props);
    var icon = computed(function () {
      return useIcon(props);
    });
    var tag = computed(function () {
      return props.type === 'submit' || props.type === 'reset' || props.type === 'button' ? 'button' : 'a';
    });
    var attrs = computed(function () {
      var href = props.href,
          tabLink = props.tabLink,
          target = props.target,
          type = props.type;
      var hrefComputed = href;
      if (href === true) hrefComputed = '#';
      if (href === false || tag.value === 'button') hrefComputed = undefined; // no href attribute

      return extend({
        href: hrefComputed,
        target: target,
        type: type,
        'data-tab': isStringProp(tabLink) && tabLink || undefined
      }, routerAttrs(props), actionsAttrs(props));
    });
    var classesComputed = computed(function () {
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
      return classNames('button', {
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
      }, colorClasses(props), routerClasses(props), actionsClasses(props));
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