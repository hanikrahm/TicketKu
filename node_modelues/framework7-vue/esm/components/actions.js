function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [_renderSlot(_ctx.$slots, "default")], 2);
}

import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7ready, f7 } from '../shared/f7';
import { modalStateClasses } from '../shared/modal-state-classes';
export default {
  name: 'f7-actions',
  render: render,
  props: _extends({
    tabletFullscreen: Boolean,
    opened: Boolean,
    animate: {
      type: Boolean,
      default: undefined
    },
    grid: Boolean,
    target: {
      type: [String, Object],
      default: undefined
    },
    convertToPopover: {
      type: Boolean,
      default: undefined
    },
    forceToPopover: {
      type: Boolean,
      default: undefined
    },
    backdrop: {
      type: Boolean,
      default: undefined
    },
    backdropEl: {
      type: [String, Object],
      default: undefined
    },
    closeByBackdropClick: {
      type: Boolean,
      default: undefined
    },
    closeByOutsideClick: {
      type: Boolean,
      default: undefined
    },
    closeOnEscape: {
      type: Boolean,
      default: undefined
    },
    containerEl: {
      type: [String, Object],
      default: undefined
    }
  }, colorProps),
  emits: ['actions:open', 'actions:opened', 'actions:close', 'actions:closed', 'update:opened'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    // eslint-disable-next-line
    var f7Actions = null; // eslint-disable-next-line

    var isOpened = props.opened;
    var isClosing = false;
    var elRef = ref(null);

    var onOpen = function onOpen(instance) {
      isOpened = true;
      isClosing = false;
      emit('actions:open', instance);
      emit('update:opened', true);
    };

    var onOpened = function onOpened(instance) {
      emit('actions:opened', instance);
    };

    var onClose = function onClose(instance) {
      isOpened = false;
      isClosing = true;
      emit('actions:close', instance);
    };

    var onClosed = function onClosed(instance) {
      isClosing = false;
      emit('actions:closed', instance);
      emit('update:opened', false);
    };

    watch(function () {
      return props.opened;
    }, function (value) {
      if (!f7Actions) return;

      if (value) {
        f7Actions.open();
      } else {
        f7Actions.close();
      }
    });
    onMounted(function () {
      if (!elRef.value) return;
      var target = props.target,
          convertToPopover = props.convertToPopover,
          forceToPopover = props.forceToPopover,
          closeByBackdropClick = props.closeByBackdropClick,
          closeByOutsideClick = props.closeByOutsideClick,
          closeOnEscape = props.closeOnEscape,
          backdrop = props.backdrop,
          backdropEl = props.backdropEl,
          grid = props.grid,
          containerEl = props.containerEl;
      var params = {
        el: elRef.value,
        grid: grid,
        on: {
          open: onOpen,
          opened: onOpened,
          close: onClose,
          closed: onClosed
        }
      };
      if (typeof target !== 'undefined') params.target = target;
      if (typeof convertToPopover !== 'undefined') params.convertToPopover = convertToPopover;
      if (typeof forceToPopover !== 'undefined') params.forceToPopover = forceToPopover;
      if (typeof closeByBackdropClick !== 'undefined') params.closeByBackdropClick = closeByBackdropClick;
      if (typeof closeByOutsideClick !== 'undefined') params.closeByOutsideClick = closeByOutsideClick;
      if (typeof closeOnEscape !== 'undefined') params.closeOnEscape = closeOnEscape;
      if (typeof backdrop !== 'undefined') params.backdrop = backdrop;
      if (typeof backdropEl !== 'undefined') params.backdropEl = backdropEl;
      if (typeof containerEl !== 'undefined') params.containerEl = containerEl;
      f7ready(function () {
        f7Actions = f7.popup.create(params);

        if (props.opened) {
          f7Actions.open(false);
        }
      });
    });
    onBeforeUnmount(function () {
      if (f7Actions) {
        f7Actions.destroy();
      }

      f7Actions = null;
    });
    var classes = computed(function () {
      return classNames('actions-modal', {
        'actions-grid': props.grid
      }, modalStateClasses({
        isOpened: isOpened,
        isClosing: isClosing
      }), colorClasses(props));
    });
    return {
      elRef: elRef,
      classes: classes
    };
  }
};