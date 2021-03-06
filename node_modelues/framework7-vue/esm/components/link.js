function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { resolveComponent as _resolveComponent, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, withCtx as _withCtx, renderSlot as _renderSlot, mergeProps as _mergeProps } from "vue";

function render(_ctx, _cache) {
  var _component_f7_use_icon = _resolveComponent("f7-use-icon");

  var _component_f7_badge = _resolveComponent("f7-badge");

  return _openBlock(), _createBlock("a", _mergeProps({
    ref: "elRef",
    class: _ctx.classes
  }, _ctx.attrs), [_ctx.icon ? (_openBlock(), _createBlock(_component_f7_use_icon, {
    key: 0,
    icon: _ctx.icon
  }, null, 8, ["icon"])) : _createCommentVNode("", true), _ctx.text ? (_openBlock(), _createBlock("span", {
    key: 1,
    class: _ctx.isTabbarLabel ? 'tabbar-label' : ''
  }, [_createTextVNode(_toDisplayString(_ctx.text) + " ", 1), _ctx.badge ? (_openBlock(), _createBlock(_component_f7_badge, {
    key: 0,
    color: _ctx.badgeColor
  }, {
    default: _withCtx(function () {
      return [_createTextVNode(_toDisplayString(_ctx.badge), 1)];
    }),
    _: 1
  }, 8, ["color"])) : _createCommentVNode("", true)], 2)) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")], 16);
}

import { computed, ref, inject } from 'vue';
import { classNames, isStringProp } from '../shared/utils';
import { colorClasses, routerAttrs, routerClasses, actionsAttrs, actionsClasses, colorProps, actionsProps, routerProps, iconProps } from '../shared/mixins';
import { useIcon } from '../shared/use-icon';
import { useRouteProps } from '../shared/use-route-props';
import { useTooltip } from '../shared/use-tooltip';
import { useSmartSelect } from '../shared/use-smart-select';
import f7Badge from './badge';
import f7UseIcon from './use-icon';
export default {
  name: 'f7-link',
  render: render,
  components: {
    f7Badge: f7Badge,
    f7UseIcon: f7UseIcon
  },
  props: _extends({
    noLinkClass: Boolean,
    text: String,
    tabLink: [Boolean, String],
    tabLinkActive: Boolean,
    tabbarLabel: Boolean,
    iconOnly: Boolean,
    badge: [String, Number],
    badgeColor: [String],
    href: {
      type: [String, Boolean],
      default: '#'
    },
    target: String,
    tooltip: String,
    tooltipTrigger: String,
    smartSelect: Boolean,
    smartSelectParams: Object
  }, iconProps, colorProps, actionsProps, routerProps),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var elRef = ref(null);
    var f7SmartSelect = null;
    useTooltip(elRef, props);
    useRouteProps(elRef, props);
    useSmartSelect(props, function (instance) {
      f7SmartSelect = instance;
    }, function () {
      return elRef.value;
    });
    var TabbarContext = inject('TabbarContext', {
      value: {}
    });
    var isTabbarLabel = computed(function () {
      return props.tabbarLabel || TabbarContext.value.tabbarHasLabels;
    });
    var attrs = computed(function () {
      var href = props.href,
          tabLink = props.tabLink,
          target = props.target;
      var hrefComputed = href;
      if (href === true) hrefComputed = '#';
      if (href === false) hrefComputed = undefined; // no href attribute

      return _extends({
        href: hrefComputed,
        target: target,
        'data-tab': isStringProp(tabLink) && tabLink || undefined
      }, routerAttrs(props), actionsAttrs(props));
    });
    var classes = computed(function () {
      var iconOnly = props.iconOnly,
          text = props.text,
          noLinkClass = props.noLinkClass,
          tabLink = props.tabLink,
          tabLinkActive = props.tabLinkActive,
          smartSelect = props.smartSelect;
      var iconOnlyComputed;
      var hasChildren = slots && slots.default;

      if (iconOnly || !text && !hasChildren) {
        iconOnlyComputed = true;
      } else {
        iconOnlyComputed = false;
      }

      return classNames({
        link: !(noLinkClass || isTabbarLabel.value),
        'icon-only': iconOnlyComputed,
        'tab-link': tabLink || tabLink === '',
        'tab-link-active': tabLinkActive,
        'smart-select': smartSelect
      }, colorClasses(props), routerClasses(props), actionsClasses(props));
    });
    var icon = computed(function () {
      return useIcon(props);
    });
    return {
      elRef: elRef,
      icon: icon,
      isTabbarLabel: isTabbarLabel,
      attrs: attrs,
      classes: classes,
      f7SmartSelect: f7SmartSelect
    };
  }
};