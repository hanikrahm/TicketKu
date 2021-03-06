function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderSlot as _renderSlot, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [_renderSlot(_ctx.$slots, "default")], 2);
}

import { ref, computed, onBeforeUnmount, onMounted } from 'vue';
import { classNames } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7, f7ready } from '../shared/f7';
export default {
  name: 'f7-accordion-item',
  render: render,
  props: _extends({
    opened: Boolean
  }, colorProps),
  emits: ['accordion:beforeopen', 'accordion:open', 'accordion:opened', 'accordion:beforeclose', 'accordion:close', 'accordion:closed'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var elRef = ref(null);

    var onBeforeOpen = function onBeforeOpen(el, prevent) {
      if (elRef.value !== el) return;
      emit('accordion:beforeopen', prevent);
    };

    var onOpen = function onOpen(el) {
      if (elRef.value !== el) return;
      emit('accordion:open');
    };

    var onOpened = function onOpened(el) {
      if (elRef.value !== el) return;
      emit('accordion:opened');
    };

    var onBeforeClose = function onBeforeClose(el, prevent) {
      if (elRef.value !== el) return;
      emit('accordion:beforeclose', prevent);
    };

    var onClose = function onClose(el) {
      if (elRef.value !== el) return;
      emit('accordion:close');
    };

    var onClosed = function onClosed(el) {
      if (elRef.value !== el) return;
      emit('accordion:closed');
    };

    var attachEvents = function attachEvents() {
      f7ready(function () {
        f7.on('accordionBeforeOpen', onBeforeOpen);
        f7.on('accordionOpen', onOpen);
        f7.on('accordionOpened', onOpened);
        f7.on('accordionBeforeClose', onBeforeClose);
        f7.on('accordionClose', onClose);
        f7.on('accordionClosed', onClosed);
      });
    };

    var detachEvents = function detachEvents() {
      f7.off('accordionBeforeOpen', onBeforeOpen);
      f7.off('accordionOpen', onOpen);
      f7.off('accordionOpened', onOpened);
      f7.off('accordionBeforeClose', onBeforeClose);
      f7.off('accordionClose', onClose);
      f7.off('accordionClosed', onClosed);
    };

    onMounted(function () {
      return attachEvents();
    });
    onBeforeUnmount(function () {
      return detachEvents();
    });
    var classes = computed(function () {
      return classNames('accordion-item', {
        'accordion-item-opened': props.opened
      }, colorClasses(props));
    });
    return {
      elRef: elRef,
      classes: classes
    };
  }
};