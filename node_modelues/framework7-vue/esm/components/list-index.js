function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [_renderSlot(_ctx.$slots, "default")], 2);
}

import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7ready, f7 } from '../shared/f7';
export default {
  name: 'f7-list-index',
  render: render,
  props: _extends({
    init: {
      type: Boolean,
      default: true
    },
    listEl: [String, Object],
    indexes: {
      type: [String, Array],
      default: 'auto'
    },
    scrollList: {
      type: Boolean,
      default: true
    },
    label: {
      type: Boolean,
      default: false
    },
    iosItemHeight: {
      type: Number,
      default: 14
    },
    mdItemHeight: {
      type: Number,
      default: 14
    },
    auroraItemHeight: {
      type: Number,
      default: 14
    }
  }, colorProps),
  emits: ['listindex:select'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var f7ListIndex = null;
    var elRef = ref(null);

    var update = function update() {
      if (!f7ListIndex) return;
      f7ListIndex.update();
    };

    var scrollListToIndex = function scrollListToIndex(indexContent) {
      if (!f7ListIndex) return;
      f7ListIndex.scrollListToIndex(indexContent);
    };

    watch(function () {
      return props.indexes;
    }, function (newValue) {
      if (!f7ListIndex) return;
      f7ListIndex.params.indexes = newValue;
      update();
    });
    onMounted(function () {
      if (!props.init) return;
      f7ready(function () {
        f7ListIndex = f7.listIndex.create({
          el: elRef.value,
          listEl: props.listEl,
          indexes: props.indexes,
          iosItemHeight: props.iosItemHeight,
          mdItemHeight: props.mdItemHeight,
          auroraItemHeight: props.auroraItemHeight,
          scrollList: props.scrollList,
          label: props.label,
          on: {
            select: function select(index, itemContent, itemIndex) {
              emit('listindex:select', itemContent, itemIndex);
            }
          }
        });
      });
    });
    onBeforeUnmount(function () {
      if (f7ListIndex && f7ListIndex.destroy) {
        f7ListIndex.destroy();
      }

      f7ListIndex = null;
    });
    var classes = computed(function () {
      return classNames('list-index', colorClasses(props));
    });
    return {
      elRef: elRef,
      classes: classes,
      update: update,
      scrollListToIndex: scrollListToIndex
    };
  }
};