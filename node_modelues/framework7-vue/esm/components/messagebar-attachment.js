function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, renderSlot as _renderSlot } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    class: _ctx.classes,
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
    })
  }, [_ctx.image ? (_openBlock(), _createBlock("img", {
    key: 0,
    src: _ctx.image
  }, null, 8, ["src"])) : _createCommentVNode("", true), _ctx.deletable ? (_openBlock(), _createBlock("span", {
    key: 1,
    class: "messagebar-attachment-delete",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.onDeleteClick && _ctx.onDeleteClick.apply(_ctx, arguments);
    })
  })) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")], 2);
}

import { computed } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
export default {
  name: 'f7-messagebar-attachment',
  render: render,
  props: _extends({
    image: String,
    deletable: {
      type: Boolean,
      default: true
    }
  }, colorProps),
  emits: ['attachment:click', 'attachment:delete'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var onClick = function onClick(event) {
      emit('attachment:click', event);
    };

    var onDeleteClick = function onDeleteClick(event) {
      emit('attachment:delete', event);
    };

    var classes = computed(function () {
      return classNames('messagebar-attachment', colorClasses(props));
    });
    return {
      classes: classes,
      onClick: onClick,
      onDeleteClick: onDeleteClick
    };
  }
};