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
  name: 'f7-col',
  render: render,
  props: _extends({
    tag: {
      type: String,
      default: 'div'
    },
    width: {
      type: [Number, String],
      default: 'auto'
    },
    xsmall: {
      type: [Number, String]
    },
    small: {
      type: [Number, String]
    },
    medium: {
      type: [Number, String]
    },
    large: {
      type: [Number, String]
    },
    xlarge: {
      type: [Number, String]
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
      var _classNames;

      return classNames((_classNames = {
        col: props.width === 'auto'
      }, _classNames["col-" + props.width] = props.width !== 'auto', _classNames["xsmall-" + props.xsmall] = props.xsmall, _classNames["small-" + props.small] = props.small, _classNames["medium-" + props.medium] = props.medium, _classNames["large-" + props.large] = props.large, _classNames["xlarge-" + props.xlarge] = props.xlarge, _classNames.resizable = props.resizable, _classNames['resizable-fixed'] = props.resizableFixed, _classNames['resizable-absolute'] = props.resizableAbsolute, _classNames), colorClasses(props));
    });
    return {
      classes: classes,
      elRef: elRef
    };
  }
};