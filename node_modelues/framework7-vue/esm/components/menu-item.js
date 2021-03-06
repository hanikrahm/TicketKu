function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toDisplayString as _toDisplayString, resolveComponent as _resolveComponent, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, renderSlot as _renderSlot, createTextVNode as _createTextVNode, resolveDynamicComponent as _resolveDynamicComponent, mergeProps as _mergeProps, withCtx as _withCtx } from "vue";
var _hoisted_1 = {
  key: 0,
  class: "menu-item-content"
};

function render(_ctx, _cache) {
  var _component_f7_use_icon = _resolveComponent("f7-use-icon");

  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.tag), _mergeProps({
    ref: "elRef",
    class: _ctx.classes
  }, _ctx.attrs, {
    onClick: _ctx.onClick
  }), {
    default: _withCtx(function () {
      return [_ctx.text || _ctx.$slots.text || _ctx.icon ? (_openBlock(), _createBlock("div", _hoisted_1, [_createTextVNode(_toDisplayString(_ctx.text) + " ", 1), _ctx.icon ? (_openBlock(), _createBlock(_component_f7_use_icon, {
        key: 0,
        icon: _ctx.icon
      }, null, 8, ["icon"])) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "text")])) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class", "onClick"]);
}

import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps, routerProps, routerAttrs, routerClasses, actionsProps, actionsClasses, actionsAttrs, iconProps } from '../shared/mixins';
import { useRouteProps } from '../shared/use-route-props';
import { useIcon } from '../shared/use-icon';
import { f7ready, f7 } from '../shared/f7';
import { useTooltip } from '../shared/use-tooltip';
import f7UseIcon from './use-icon';
export default {
  name: 'f7-menu-item',
  render: render,
  components: {
    f7UseIcon: f7UseIcon
  },
  props: _extends({
    text: String,
    iconOnly: Boolean,
    href: String,
    link: Boolean,
    target: String,
    dropdown: Boolean,
    tooltip: String,
    tooltipTrigger: String
  }, colorProps, routerProps, actionsProps, iconProps),
  emits: ['click', 'menu:opened', 'menu:closed'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;
    var elRef = ref(null);
    useTooltip(elRef, props);

    var onClick = function onClick(e) {
      emit('click', e);
    };

    var onOpened = function onOpened(el) {
      if (elRef.value !== el) return;
      emit('menu:opened', el);
    };

    var onClosed = function onClosed(el) {
      if (elRef.value !== el) return;
      emit('menu:closed', el);
    };

    useRouteProps(elRef, props);

    var attachEvents = function attachEvents() {
      f7ready(function () {
        f7.on('menuOpened', onOpened);
        f7.on('menuClosed', onClosed);
      });
    };

    var detachEvents = function detachEvents() {
      f7.off('menuOpened', onOpened);
      f7.off('menuClosed', onOpened);
    };

    onMounted(function () {
      return attachEvents();
    });
    onBeforeUnmount(function () {
      return detachEvents();
    });
    var icon = computed(function () {
      return useIcon(props);
    });
    var tag = computed(function () {
      var isLink = props.link || props.href || props.href === '';
      return isLink ? 'a' : 'div';
    });
    var classes = computed(function () {
      var iconOnlyComputed;

      if (props.iconOnly || !props.text && !slots.text) {
        iconOnlyComputed = true;
      } else {
        iconOnlyComputed = false;
      }

      var isDropdown = props.dropdown || props.dropdown === '';
      return classNames({
        'menu-item': true,
        'menu-item-dropdown': isDropdown,
        'icon-only': iconOnlyComputed
      }, colorClasses(props), routerClasses(props), actionsClasses(props));
    });
    var attrs = computed(function () {
      var hrefComputed = props.href;
      if (typeof hrefComputed === 'undefined' && props.link) hrefComputed = '#';
      return _extends({
        href: hrefComputed,
        target: props.target
      }, routerAttrs(props), actionsAttrs(props));
    });
    return {
      tag: tag,
      classes: classes,
      attrs: attrs,
      icon: icon,
      onClick: onClick,
      elRef: elRef
    };
  }
};