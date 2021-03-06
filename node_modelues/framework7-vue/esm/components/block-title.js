function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    class: _ctx.classes,
    medium: _ctx.medium
  }, [_renderSlot(_ctx.$slots, "default")], 10, ["medium"]);
}

import { computed } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
export default {
  name: 'f7-block-title',
  render: render,
  props: _extends({
    large: Boolean,
    medium: Boolean
  }, colorProps),
  setup: function setup(props) {
    var classes = computed(function () {
      var large = props.large,
          medium = props.medium;
      return classNames('block-title', {
        'block-title-large': large,
        'block-title-medium': medium
      }, colorClasses(props));
    });
    return {
      classes: classes
    };
  }
};