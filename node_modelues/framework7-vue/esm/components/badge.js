function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("span", {
    ref: "elRef",
    class: _ctx.classes
  }, [_renderSlot(_ctx.$slots, "default")], 2);
}

import { computed, ref } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { useTooltip } from '../shared/use-tooltip';
export default {
  name: 'f7-badge',
  render: render,
  props: _extends({
    tooltip: String,
    tooltipTrigger: String
  }, colorProps),
  setup: function setup(props) {
    var elRef = ref(null);
    useTooltip(elRef, props);
    var classes = computed(function () {
      return classNames('badge', colorClasses(props));
    });
    return {
      elRef: elRef,
      classes: classes
    };
  }
};