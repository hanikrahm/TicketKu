function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, renderSlot as _renderSlot } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [_ctx.input ? (_openBlock(), _createBlock("input", {
    key: 0,
    id: "inputId",
    type: "range",
    name: _ctx.name
  }, null, 8, ["name"])) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")], 2);
}

import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { classNames, noUndefinedProps } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7ready, f7 } from '../shared/f7';
export default {
  name: 'f7-range',
  render: render,
  props: _extends({
    init: {
      type: Boolean,
      default: true
    },
    value: {
      type: [Number, Array, String],
      default: 0
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    label: {
      type: Boolean,
      default: false
    },
    dual: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    verticalReversed: {
      type: Boolean,
      default: false
    },
    draggableBar: {
      type: Boolean,
      default: true
    },
    formatLabel: Function,
    scale: {
      type: Boolean,
      default: false
    },
    scaleSteps: {
      type: Number,
      default: 5
    },
    scaleSubSteps: {
      type: Number,
      default: 0
    },
    formatScaleLabel: Function,
    limitKnobPosition: {
      type: Boolean,
      default: undefined
    },
    name: String,
    input: Boolean,
    inputId: String,
    disabled: Boolean
  }, colorProps),
  emits: ['range:change', 'range:changed', 'rangeChange', 'rangeChanged', 'update:value'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var f7Range = null;
    var elRef = ref(null);
    watch(function () {
      return props.value;
    }, function (newValue) {
      if (!f7Range) return;
      var rangeValue = f7Range.value;

      if (Array.isArray(newValue) && Array.isArray(rangeValue)) {
        if (rangeValue[0] !== newValue[0] || rangeValue[1] !== newValue[1]) {
          f7Range.setValue(newValue);
        }
      } else {
        f7Range.setValue(newValue);
      }
    });
    onMounted(function () {
      f7ready(function () {
        if (!props.init || !elRef.value) return;
        f7Range = f7.range.create(noUndefinedProps(_extends({
          el: elRef.value
        }, props, {
          on: {
            change: function change(range, val) {
              emit('range:change', val);
              emit('rangeChange', val);
            },
            changed: function changed(range, val) {
              emit('range:changed', val);
              emit('rangeChanged', val);
              emit('update:value', val);
            }
          }
        })));
      });
    });
    onBeforeUnmount(function () {
      if (f7Range && f7Range.destroy) f7Range.destroy();
      f7Range = null;
    });
    var classes = computed(function () {
      return classNames('range-slider', {
        'range-slider-horizontal': !props.vertical,
        'range-slider-vertical': props.vertical,
        'range-slider-vertical-reversed': props.vertical && props.verticalReversed,
        disabled: props.disabled
      }, colorClasses(props));
    });
    return {
      elRef: elRef,
      classes: classes
    };
  }
};