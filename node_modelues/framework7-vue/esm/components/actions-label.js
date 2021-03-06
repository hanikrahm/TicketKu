function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    class: _ctx.classes,
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
    })
  }, [_renderSlot(_ctx.$slots, "default")], 2);
}

import { computed } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
export default {
  name: 'f7-actions-label',
  render: render,
  props: _extends({
    bold: Boolean
  }, colorProps),
  emits: ['click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var onClick = function onClick(e) {
      emit('click', e);
    };

    var classes = computed(function () {
      return classNames('actions-label', {
        'actions-button-bold': props.bold
      }, colorClasses(props));
    });
    return {
      classes: classes,
      onClick: onClick
    };
  }
};