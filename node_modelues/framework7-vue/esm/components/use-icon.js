import { toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, mergeProps as _mergeProps, createCommentVNode as _createCommentVNode } from "vue";

function render(_ctx, _cache) {
  var _component_f7_badge = _resolveComponent("f7-badge");

  var _component_f7_icon = _resolveComponent("f7-icon");

  return _openBlock(), _createBlock(_component_f7_icon, _ctx.icon.props, {
    default: _withCtx(function () {
      return [_ctx.icon.badge ? (_openBlock(), _createBlock(_component_f7_badge, _mergeProps({
        key: 0
      }, _ctx.icon.badge.props), {
        default: _withCtx(function () {
          return [_createTextVNode(_toDisplayString(_ctx.icon.badge.content), 1)];
        }),
        _: 1
      }, 16)) : _createCommentVNode("", true)];
    }),
    _: 1
  }, 16);
}

import f7Icon from './icon';
import f7Badge from './badge';
export default {
  name: 'f7-use-icon',
  render: render,
  components: {
    f7Icon: f7Icon,
    f7Badge: f7Badge
  },
  props: {
    icon: Object
  }
};