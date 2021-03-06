"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../shared/utils");

var _mixins = require("../shared/mixins");

var _f = require("../shared/f7");

var _modalStateClasses = require("../shared/modal-state-classes");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  name: 'f7-sheet',
  props: _extends({
    opened: Boolean,
    animate: {
      type: Boolean,
      default: undefined
    },
    top: Boolean,
    bottom: Boolean,
    position: String,
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
    push: Boolean,
    swipeToClose: {
      type: Boolean,
      default: undefined
    },
    swipeToStep: {
      type: Boolean,
      default: undefined
    },
    swipeHandler: {
      type: [String, Object],
      default: undefined
    },
    containerEl: {
      type: [String, Object],
      default: undefined
    }
  }, _mixins.colorProps),
  emits: ['sheet:stepprogress', 'sheet:stepopen', 'sheet:stepclose', 'sheet:open', 'sheet:opened', 'sheet:close', 'sheet:closed', 'update:opened'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var f7Sheet = null; // eslint-disable-next-line

    var isOpened = props.opened;
    var isClosing = false;
    var elRef = (0, _vue.ref)(null);

    var onStepProgress = function onStepProgress(instance, progress) {
      emit('sheet:stepprogress', instance, progress);
    };

    var onStepOpen = function onStepOpen(instance) {
      emit('sheet:stepopen', instance);
    };

    var onStepClose = function onStepClose(instance) {
      emit('sheet:stepclose', instance);
    };

    var onOpen = function onOpen(instance) {
      isOpened = true;
      isClosing = false;
      emit('sheet:open', instance);
      emit('update:opened', true);
    };

    var onOpened = function onOpened(instance) {
      emit('sheet:opened', instance);
    };

    var onClose = function onClose(instance) {
      isOpened = false;
      isClosing = true;
      emit('sheet:close', instance);
    };

    var onClosed = function onClosed(instance) {
      isClosing = false;
      emit('sheet:closed', instance);
      emit('update:opened', false);
    };

    (0, _vue.onMounted)(function () {
      if (!elRef.value) return;
      var sheetParams = {
        el: elRef.value,
        on: {
          open: onOpen,
          opened: onOpened,
          close: onClose,
          closed: onClosed,
          stepOpen: onStepOpen,
          stepClose: onStepClose,
          stepProgress: onStepProgress
        }
      };
      var animate = props.animate,
          backdrop = props.backdrop,
          backdropEl = props.backdropEl,
          closeByBackdropClick = props.closeByBackdropClick,
          closeByOutsideClick = props.closeByOutsideClick,
          closeOnEscape = props.closeOnEscape,
          swipeToClose = props.swipeToClose,
          swipeToStep = props.swipeToStep,
          swipeHandler = props.swipeHandler,
          containerEl = props.containerEl;
      if (typeof animate !== 'undefined') sheetParams.animate = animate;
      if (typeof backdrop !== 'undefined') sheetParams.backdrop = backdrop;
      if (typeof backdropEl !== 'undefined') sheetParams.backdropEl = backdropEl;
      if (typeof closeByBackdropClick !== 'undefined') sheetParams.closeByBackdropClick = closeByBackdropClick;
      if (typeof closeByOutsideClick !== 'undefined') sheetParams.closeByOutsideClick = closeByOutsideClick;
      if (typeof closeOnEscape !== 'undefined') sheetParams.closeOnEscape = closeOnEscape;
      if (typeof swipeToClose !== 'undefined') sheetParams.swipeToClose = swipeToClose;
      if (typeof swipeToStep !== 'undefined') sheetParams.swipeToStep = swipeToStep;
      if (typeof swipeHandler !== 'undefined') sheetParams.swipeHandler = swipeHandler;
      if (typeof containerEl !== 'undefined') sheetParams.containerEl = containerEl;
      (0, _f.f7ready)(function () {
        f7Sheet = _f.f7.sheet.create(sheetParams);

        if (props.opened) {
          f7Sheet.open(false);
        }
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      if (f7Sheet) {
        f7Sheet.destroy();
      }

      f7Sheet = null;
    });
    (0, _vue.watch)(function () {
      return props.opened;
    }, function (value) {
      if (!f7Sheet) return;

      if (value) {
        f7Sheet.open();
      } else {
        f7Sheet.close();
      }
    });
    ['closeByBackdropClick', 'closeByOutsideClick', 'closeOnEscape', 'swipeToClose'].forEach(function (propName) {
      (0, _vue.watch)(function () {
        return props[propName];
      }, function (propValue) {
        if (!f7Sheet) return;
        f7Sheet.params[propName] = propValue;
      });
    });
    var classes = (0, _vue.computed)(function () {
      var positionComputed = 'bottom';
      if (props.position) positionComputed = props.position;else if (props.top) positionComputed = 'top';else if (props.bottom) positionComputed = 'bottom';
      return (0, _utils.classNames)('sheet-modal', "sheet-modal-" + positionComputed, {
        'sheet-modal-push': props.push
      }, (0, _modalStateClasses.modalStateClasses)({
        isOpened: isOpened,
        isClosing: isClosing
      }), (0, _mixins.colorClasses)(props));
    });
    var fixedTags = 'navbar toolbar tabbar subnavbar searchbar messagebar fab list-index panel'.split(' ').map(function (tagName) {
      return "f7-" + tagName;
    });
    return function () {
      var fixedList = [];
      var staticList = [];

      if (slots.default) {
        slots.default().forEach(function (vnode) {
          if (typeof vnode === 'undefined') return;
          var tag = vnode.type && vnode.type.name ? vnode.type.name : vnode.type;

          if (fixedTags.indexOf(tag) >= 0) {
            fixedList.push(vnode);
          } else {
            staticList.push(vnode);
          }
        });
      }

      return (0, _vue.h)('div', {
        class: classes.value,
        ref: elRef
      }, [fixedList, slots.fixed && slots.fixed(), (0, _vue.h)('div', {
        class: 'sheet-modal-inner'
      }, [staticList, slots.static && slots.static()])]);
    };
  }
};
exports.default = _default;