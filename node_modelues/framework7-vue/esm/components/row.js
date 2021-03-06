function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx } from "vue";
var _hoisted_1 = {
  key: 0,
  class: "resize-handler"
};

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.tag), {
    ref: "elRef",
    class: _ctx.classes
  }, {
    default: _withCtx(function () {
      return [_renderSlot(_ctx.$slots, "default"), _ctx.resizable && _ctx.resizableHandler ? (_openBlock(), _createBlock("span", _hoisted_1)) : _createCommentVNode("", true)];
    }),
    _: 3
  }, 8, ["class"]);
}

import { ref, computed, onBeforeUnmount, onMounted } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7ready, f7 } from '../shared/f7';
export default {
  name: 'f7-row',
  render: render,
  props: _extends({
    noGap: Boolean,
    tag: {
      type: String,
      default: 'div'
    },
    resizable: Boolean,
    resizableFixed: Boolean,
    resizableAbsolute: Boolean,
    resizableHandler: {
      type: Boolean,
      default: true
    }
  }, colorProps),
  emits: ['grid:resize'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var elRef = ref(null);

    var onResize = function onResize(el) {
      if (el === elRef.value) {
        emit('grid:resize');
      }
    };

    onMounted(function () {
      f7ready(function () {
        f7.on('gridResize', onResize);
      });
    });
    onBeforeUnmount(function () {
      f7.off('gridResize', onResize);
    });
    var classes = computed(function () {
      return classNames('row', {
        'no-gap': props.noGap,
        resizable: props.resizable,
        'resizable-fixed': props.resizableFixed,
        'resizable-absolute': props.resizableAbsolute
      }, colorClasses(props));
    });
    return {
      classes: classes,
      elRef: elRef
    };
  }
};