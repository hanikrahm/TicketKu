function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { toDisplayString as _toDisplayString, renderSlot as _renderSlot, createTextVNode as _createTextVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("a", {
    href: _ctx.href || '#',
    "data-confirm": _ctx.confirmText || undefined,
    "data-confirm-title": _ctx.confirmTitle || undefined,
    class: _ctx.classes,
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
    })
  }, [_createTextVNode(_toDisplayString(_ctx.text) + " ", 1), _renderSlot(_ctx.$slots, "default")], 10, ["href", "data-confirm", "data-confirm-title"]);
}

import { computed } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
export default {
  name: 'f7-swipeout-button',
  render: render,
  props: _extends({
    text: String,
    confirmTitle: String,
    confirmText: String,
    overswipe: Boolean,
    close: Boolean,
    delete: Boolean,
    href: String
  }, colorProps),
  emits: ['click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var onClick = function onClick(e) {
      emit('click', e);
    };

    var classes = computed(function () {
      return classNames({
        'swipeout-overswipe': props.overswipe,
        'swipeout-delete': props.delete,
        'swipeout-close': props.close
      }, colorClasses(props));
    });
    return {
      classes: classes,
      onClick: onClick
    };
  }
};