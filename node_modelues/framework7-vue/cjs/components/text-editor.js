"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../shared/utils");

var _mixins = require("../shared/mixins");

var _f = require("../shared/f7");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _hoisted_1 = {
  class: "text-editor-content",
  contenteditable: ""
};

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)("div", {
    ref: "elRef",
    class: _ctx.classes
  }, [(0, _vue.renderSlot)(_ctx.$slots, "root-start"), (0, _vue.createVNode)("div", _hoisted_1, [(0, _vue.renderSlot)(_ctx.$slots, "default")]), (0, _vue.renderSlot)(_ctx.$slots, "root-end"), (0, _vue.renderSlot)(_ctx.$slots, "root")], 2);
}

var _default = {
  name: 'f7-text-editor',
  render: render,
  props: _extends({
    mode: {
      type: String,
      default: undefined
    },
    value: {
      type: String,
      default: undefined
    },
    buttons: Array,
    customButtons: Object,
    dividers: {
      type: Boolean,
      default: undefined
    },
    imageUrlText: {
      type: String,
      default: undefined
    },
    linkUrlText: {
      type: String,
      default: undefined
    },
    placeholder: {
      type: String,
      default: undefined
    },
    clearFormattingOnPaste: {
      type: Boolean,
      default: undefined
    },
    resizable: {
      type: Boolean,
      default: false
    }
  }, _mixins.colorProps),
  emits: ['texteditor:change', 'texteditor:input', 'texteditor:focus', 'texteditor:blur', 'texteditor:buttonclick', 'texteditor:keyboardopen', 'texteditor:keyboardclose', 'texteditor:popoveropen', 'texteditor:popoverclose', 'texteditor:insertlink', 'texteditor:insertimage', 'texteditorChange', 'texteditorInput', 'texteditorFocus', 'texteditorBlur'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var f7TextEditor = null;
    var elRef = (0, _vue.ref)(null);

    var onChange = function onChange(editor, editorValue) {
      emit('texteditor:change', editorValue);
      emit('texteditorChange', editorValue);
    };

    var onInput = function onInput(editor, editorValue) {
      emit('texteditor:input', editorValue);
      emit('texteditorInput', editorValue);
    };

    var onFocus = function onFocus() {
      emit('texteditor:focus');
      emit('texteditorFocus');
    };

    var onBlur = function onBlur() {
      emit('texteditor:blur');
      emit('texteditorBlur');
    };

    var onButtonClick = function onButtonClick(editor, button) {
      emit('texteditor:buttonclick', button);
    };

    var onKeyboardOpen = function onKeyboardOpen() {
      emit('texteditor:keyboardopen');
    };

    var onKeyboardClose = function onKeyboardClose() {
      emit('texteditor:keyboardclose');
    };

    var onPopoverOpen = function onPopoverOpen() {
      emit('texteditor:popoveropen');
    };

    var onPopoverClose = function onPopoverClose() {
      emit('texteditor:popoverclose');
    };

    var onInsertLink = function onInsertLink(editor, url) {
      emit(props, 'texteditor:insertlink', url);
    };

    var onInsertImage = function onInsertImage(editor, url) {
      emit(props, 'texteditor:insertimage', url);
    };

    (0, _vue.watch)(function () {
      return props.value;
    }, function (newValue) {
      if (f7TextEditor) {
        f7TextEditor.setValue(newValue);
      }
    });
    (0, _vue.onMounted)(function () {
      var params = (0, _utils.noUndefinedProps)({
        el: elRef.value,
        mode: props.mode,
        value: props.value,
        buttons: props.buttons,
        customButtons: props.customButtons,
        dividers: props.dividers,
        imageUrlText: props.imageUrlText,
        linkUrlText: props.linkUrlText,
        placeholder: props.placeholder,
        clearFormattingOnPaste: props.clearFormattingOnPaste,
        on: {
          change: onChange,
          input: onInput,
          focus: onFocus,
          blur: onBlur,
          buttonClick: onButtonClick,
          keyboardOpen: onKeyboardOpen,
          keyboardClose: onKeyboardClose,
          popoverOpen: onPopoverOpen,
          popoverClose: onPopoverClose,
          insertLink: onInsertLink,
          insertImage: onInsertImage
        }
      });
      (0, _f.f7ready)(function () {
        f7TextEditor = _f.f7.textEditor.create(params);
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      if (f7TextEditor && f7TextEditor.destroy) {
        f7TextEditor.destroy();
      }

      f7TextEditor = null;
    });
    var classes = (0, _vue.computed)(function () {
      return (0, _utils.classNames)('text-editor', props.resizable && 'text-editor-resizable', (0, _mixins.colorClasses)(props));
    });
    return {
      elRef: elRef,
      classes: classes
    };
  }
};
exports.default = _default;