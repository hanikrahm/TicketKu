function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toDisplayString as _toDisplayString, renderSlot as _renderSlot, createTextVNode as _createTextVNode, mergeProps as _mergeProps, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", _mergeProps({
    ref: "elRef",
    class: _ctx.classes
  }, _ctx.attrs, {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
    })
  }), [_createTextVNode(_toDisplayString(_ctx.text) + " ", 1), _renderSlot(_ctx.$slots, "default")], 16);
}

import { computed, ref } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps, routerProps, routerAttrs, routerClasses, actionsProps, actionsAttrs, actionsClasses } from '../shared/mixins';
import { useRouteProps } from '../shared/use-route-props';
export default {
  name: 'f7-menu-dropdown-item',
  render: render,
  props: _extends({
    text: String,
    link: Boolean,
    href: String,
    target: String,
    divider: Boolean
  }, colorProps, routerProps, actionsProps),
  emits: ['click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var elRef = ref(null);

    var onClick = function onClick(e) {
      emit('click', e);
    };

    useRouteProps(elRef, props);
    var isLink = computed(function () {
      return props.link || props.href || props.href === '';
    });
    var tag = computed(function () {
      return isLink.value ? 'a' : 'div';
    });
    var classes = computed(function () {
      return classNames({
        'menu-dropdown-link': isLink.value && !props.divider,
        'menu-dropdown-item': !isLink.value && !props.divider,
        'menu-dropdown-divider': props.divider
      }, colorClasses(props), routerClasses(props), actionsClasses(props), {
        'menu-close': typeof props.menuClose === 'undefined'
      });
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
      classes: classes,
      attrs: attrs,
      tag: tag,
      onClick: onClick,
      elRef: elRef
    };
  }
};