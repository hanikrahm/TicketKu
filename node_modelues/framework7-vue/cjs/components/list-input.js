"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../shared/utils");

var _mixins = require("../shared/mixins");

var _f = require("../shared/f7");

var _textEditor = _interopRequireDefault(require("./text-editor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  name: 'f7-list-input',
  props: _extends({
    sortable: {
      type: Boolean,
      default: undefined
    },
    media: String,
    dropdown: {
      type: [String, Boolean],
      default: 'auto'
    },
    wrap: {
      type: Boolean,
      default: true
    },
    // Inputs
    input: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    value: {
      type: [String, Number, Array, Date, Object],
      default: undefined
    },
    inputmode: String,
    readonly: Boolean,
    required: Boolean,
    disabled: Boolean,
    placeholder: String,
    inputId: [String, Number],
    size: [String, Number],
    accept: [String, Number],
    autocomplete: [String],
    autocorrect: [String],
    autocapitalize: [String],
    spellcheck: [String],
    autofocus: Boolean,
    autosave: String,
    max: [String, Number],
    min: [String, Number],
    step: [String, Number],
    maxlength: [String, Number],
    minlength: [String, Number],
    multiple: Boolean,
    inputStyle: [String, Object],
    pattern: String,
    validate: [Boolean, String],
    validateOnBlur: Boolean,
    onValidate: Function,
    tabindex: [String, Number],
    resizable: Boolean,
    clearButton: Boolean,
    // Form
    noFormStoreData: Boolean,
    noStoreData: Boolean,
    ignoreStoreData: Boolean,
    // Error, Info
    errorMessage: String,
    errorMessageForce: Boolean,
    info: String,
    // Outline
    outline: Boolean,
    // Label
    label: [String, Number],
    inlineLabel: Boolean,
    floatingLabel: Boolean,
    // Datepicker
    calendarParams: Object,
    // Colorpicker
    colorPickerParams: Object,
    // Text editor
    textEditorParams: Object
  }, _mixins.colorProps),
  emits: ['textarea:resize', 'input:notempty', 'input:empty', 'input:clear', 'texteditor:change', 'calendar:change', 'colorpicker:change', 'change', 'focus', 'blur', 'input', 'update:value'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var inputInvalid = (0, _vue.ref)(false);
    var inputFocused = (0, _vue.ref)(false);
    var ListContext = (0, _vue.inject)('ListContext', {
      value: {
        listIsMedia: false,
        listIsSortable: false,
        listIsSortableOpposite: false,
        listIsSimple: false
      }
    });
    var f7Calendar = null;
    var f7ColorPicker = null;
    var elRef = (0, _vue.ref)(null);
    var inputElRef = (0, _vue.ref)(null);
    var itemContentElRef = (0, _vue.ref)(null);
    var updateInputOnDidUpdate = false;

    var getDomValue = function getDomValue() {
      if (!inputElRef.value) return undefined;
      return inputElRef.value.value;
    };

    var domValue = (0, _vue.ref)(getDomValue());
    var inputHasValue = (0, _vue.computed)(function () {
      if (props.type === 'datepicker' && Array.isArray(props.value) && props.value.length === 0) {
        return false;
      }

      return typeof props.value === 'undefined' ? domValue.value || domValue.value === 0 : props.value || props.value === 0;
    });

    var validateInput = function validateInput() {
      if (!_f.f7 || !inputElRef.value) return;
      var validity = inputElRef.value.validity;
      if (!validity) return;

      if (!validity.valid) {
        if (props.onValidate) props.onValidate(false);

        if (inputInvalid.value !== true) {
          inputInvalid.value = true;
        }
      } else {
        if (props.onValidate) props.onValidate(true);

        if (inputInvalid.value !== false) {
          inputInvalid.value = false;
        }
      }
    };

    var onTextareaResize = function onTextareaResize(event) {
      emit('textarea:resize', event);
    };

    var onInputNotEmpty = function onInputNotEmpty(event) {
      emit('input:notempty', event);
    };

    var onInputEmpty = function onInputEmpty(event) {
      emit('input:empty', event);
    };

    var onInputClear = function onInputClear(event) {
      emit('input:clear', event);
    };

    var onInput = function onInput() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      emit.apply(void 0, ['input'].concat(args));

      if (inputElRef.value) {
        domValue.value = inputElRef.value.value;
      }

      if (!(props.validateOnBlur || props.validateOnBlur === '') && (props.validate || props.validate === '') && inputElRef.value) {
        validateInput(inputElRef.value);
      }

      if (inputElRef.value && props.type !== 'texteditor' && props.type !== 'colorpicker' && props.type !== 'datepicker') {
        emit('update:value', inputElRef.value.value);
      }
    };

    var onFocus = function onFocus() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      emit.apply(void 0, ['focus'].concat(args));
      inputFocused.value = true;
    };

    var onBlur = function onBlur() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      emit.apply(void 0, ['blur'].concat(args));

      if ((props.validate || props.validate === '' || props.validateOnBlur || props.validateOnBlur === '') && inputElRef.value) {
        validateInput(inputElRef.value);
      }

      inputFocused.value = false;
    };

    var onChange = function onChange() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      emit.apply(void 0, ['change'].concat(args));

      if (props.type === 'texteditor') {
        emit('texteditor:change', args[0]);
        emit('update:value', args[0]);
      }
    };

    (0, _vue.onMounted)(function () {
      if (!elRef.value && !itemContentElRef.value) return;
      (0, _f.f7ready)(function () {
        if (!inputElRef.value) return;
        inputElRef.value.addEventListener('input:notempty', onInputNotEmpty, false);
        inputElRef.value.addEventListener('textarea:resize', onTextareaResize, false);
        inputElRef.value.addEventListener('input:empty', onInputEmpty, false);
        inputElRef.value.addEventListener('input:clear', onInputClear, false);

        if (props.type === 'datepicker') {
          f7Calendar = _f.f7.calendar.create(_extends({
            inputEl: inputElRef.value,
            value: props.value,
            on: {
              change: function change(calendar, calendarValue) {
                emit('update:value', calendarValue);
                emit('calendar:change', calendarValue);
              }
            }
          }, props.calendarParams || {}));
        }

        if (props.type === 'colorpicker') {
          f7ColorPicker = _f.f7.colorPicker.create(_extends({
            inputEl: inputElRef.value,
            value: props.value,
            on: {
              change: function change(colorPicker, colorPickerValue) {
                emit('update:value', colorPickerValue);
                emit('colorpicker:change', colorPickerValue);
              }
            }
          }, props.colorPickerParams || {}));
        }

        if (!(props.validateOnBlur || props.validateOnBlur === '') && (props.validate || props.validate === '') && typeof props.value !== 'undefined' && props.value !== null && props.value !== '') {
          setTimeout(function () {
            validateInput();
          }, 0);
        }

        if (props.type === 'textarea' && props.resizable) {
          _f.f7.input.resizeTextarea(inputElRef.value);
        }
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      if (inputElRef.value) {
        inputElRef.value.removeEventListener('input:notempty', onInputNotEmpty, false);
        inputElRef.value.removeEventListener('textarea:resize', onTextareaResize, false);
        inputElRef.value.removeEventListener('input:empty', onInputEmpty, false);
        inputElRef.value.removeEventListener('input:clear', onInputClear, false);
      }

      if (f7Calendar && f7Calendar.destroy) {
        f7Calendar.destroy();
        f7Calendar = null;
      }

      if (f7ColorPicker && f7ColorPicker.destroy) {
        f7ColorPicker.destroy();
        f7ColorPicker = null;
      }
    });
    (0, _vue.onUpdated)(function () {
      if (!_f.f7) return;

      if (updateInputOnDidUpdate) {
        if (!inputElRef.value) return;
        updateInputOnDidUpdate = false;

        if (props.validate && !props.validateOnBlur) {
          validateInput();
        }

        if (props.type === 'textarea' && props.resizable) {
          _f.f7.input.resizeTextarea(inputElRef.value);
        }
      }
    });
    (0, _vue.watch)(function () {
      return props.colorPickerParams;
    }, function (newValue) {
      if (!_f.f7 || !f7ColorPicker) return;
      (0, _utils.extend)(f7ColorPicker.params, newValue || {});
    });
    (0, _vue.watch)(function () {
      return props.calendarParams;
    }, function (newValue) {
      if (!_f.f7 || !f7Calendar) return;
      (0, _utils.extend)(f7Calendar.params, newValue || {});
    });
    (0, _vue.watch)(function () {
      return props.value;
    }, function (newValue) {
      if (!_f.f7) return;
      updateInputOnDidUpdate = true;

      if (f7Calendar) {
        f7Calendar.setValue(newValue);
      }

      if (f7ColorPicker) {
        f7ColorPicker.setValue(newValue);
      }
    });
    var isSortableComputed = (0, _vue.computed)(function () {
      return props.sortable === true || props.sortable === false ? props.sortable : ListContext.value.listIsSortable || false;
    });

    var createInput = function createInput(InputTag, children) {
      var needsValue = props.type !== 'file' && props.type !== 'datepicker' && props.type !== 'colorpicker';
      var needsType = InputTag === 'input';
      var inputType = props.type;

      if (inputType === 'datepicker' || inputType === 'colorpicker') {
        inputType = 'text';
      }

      var inputClassName = (0, _utils.classNames)({
        resizable: inputType === 'textarea' && props.resizable,
        'no-store-data': props.noFormStoreData || props.noStoreData || props.ignoreStoreData,
        'input-invalid': props.errorMessage && props.errorMessageForce || inputInvalid.value,
        'input-with-value': inputHasValue.value,
        'input-focused': inputFocused.value
      });
      var inputValue;

      if (needsValue) {
        if (typeof props.value !== 'undefined') inputValue = props.value;else inputValue = domValue.value;
      }

      var valueProps = {};

      if (props.type !== 'datepicker' && props.type !== 'colorpicker') {
        if ('value' in props) valueProps.value = inputValue;
      }

      var inputProps = (0, _utils.noUndefinedProps)({
        name: props.name,
        type: needsType ? inputType : undefined,
        placeholder: props.placeholder,
        inputmode: props.inputmode,
        id: props.inputId,
        size: props.size,
        accept: props.accept,
        autocomplete: props.autocomplete,
        autocorrect: props.autocorrect,
        autocapitalize: props.autocapitalize,
        spellcheck: props.spellcheck,
        autofocus: props.autofocus,
        autosave: props.autosave,
        disabled: props.disabled,
        max: props.max,
        maxlength: props.maxlength,
        min: props.min,
        minlength: props.minlength,
        step: props.step,
        multiple: props.multiple,
        readonly: props.readonly,
        required: props.required,
        pattern: props.pattern,
        validate: typeof props.validate === 'string' && props.validate.length ? props.validate : undefined,
        tabindex: props.tabindex
      });
      return (0, _vue.h)(InputTag, _extends({
        ref: inputElRef,
        style: props.inputStyle
      }, inputProps, {
        'data-validate': props.validate === true || props.validate === '' || props.validateOnBlur === true || props.validateOnBlur === '' ? true : undefined,
        'data-validate-on-blur': props.validateOnBlur === true || props.validateOnBlur === '' ? true : undefined,
        'data-error-message': props.errorMessageForce ? undefined : props.errorMessage,
        class: inputClassName,
        onFocus: onFocus,
        onBlur: onBlur,
        onInput: onInput,
        onChange: onChange
      }, valueProps), [children]);
    };

    return function () {
      var inputEl;

      if (props.input) {
        if (props.type === 'select' || props.type === 'textarea' || props.type === 'file') {
          if (props.type === 'select') {
            inputEl = createInput('select', slots.default && slots.default());
          } else if (props.type === 'file') {
            inputEl = createInput('input');
          } else {
            inputEl = createInput('textarea');
          }
        } else if (props.type === 'texteditor') {
          inputEl = (0, _vue.h)(_textEditor.default, _extends({
            value: props.value,
            resizable: props.resizable,
            placeholder: props.placeholder,
            onTexteditorFocus: onFocus,
            onTexteditorBlur: onBlur,
            onTexteditorInput: onInput,
            onTexteditorChange: onChange
          }, props.textEditorParams || {}));
        } else {
          inputEl = createInput('input');
        }
      }

      var hasErrorMessage = !!props.errorMessage || slots['error-message'];
      var ItemContent = (0, _vue.h)('div', {
        ref: itemContentElRef,
        class: (0, _utils.classNames)('item-content item-input', !props.wrap && {
          disabled: props.disabled
        }, !props.wrap && (0, _mixins.colorClasses)(props), {
          'inline-label': props.inlineLabel,
          'item-input-outline': props.outline,
          'item-input-focused': inputFocused.value,
          'item-input-with-info': !!props.info || slots.info,
          'item-input-with-value': inputHasValue.value,
          'item-input-with-error-message': hasErrorMessage && props.errorMessageForce || inputInvalid.value,
          'item-input-invalid': hasErrorMessage && props.errorMessageForce || inputInvalid.value
        })
      }, [slots['content-start'] && slots['content-start'](), (props.media || slots.media) && (0, _vue.h)('div', {
        class: 'item-media'
      }, [props.media && (0, _vue.h)('img', {
        src: props.media
      }), slots.media && slots.media()]), (0, _vue.h)('div', {
        class: 'item-inner'
      }, [slots['inner-start'] && slots['inner-start'](), (props.label || slots.label) && (0, _vue.h)('div', {
        class: (0, _utils.classNames)('item-title item-label', {
          'item-floating-label': props.floatingLabel
        })
      }, [props.label, slots.label && slots.label()]), (0, _vue.h)('div', {
        class: (0, _utils.classNames)('item-input-wrap', {
          'input-dropdown': props.dropdown === 'auto' ? props.type === 'select' : props.dropdown
        })
      }, [inputEl, slots.input && slots.input(), hasErrorMessage && props.errorMessageForce && (0, _vue.h)('div', {
        class: 'item-input-error-message'
      }, [props.errorMessage, slots['error-message'] && slots['error-message']()]), props.clearButton && (0, _vue.h)('span', {
        class: 'input-clear-button'
      }), (props.info || slots.info) && (0, _vue.h)('div', {
        class: 'item-input-info'
      }, [props.info, slots.info && slots.info()])]), slots.inner && slots.inner(), slots['inner-end'] && slots['inner-end']()]), slots.content && slots.content(), slots['content-end'] && slots['content-end']()]);
      if (!props.wrap) return ItemContent;
      return (0, _vue.h)('li', {
        ref: elRef,
        class: (0, _utils.classNames)({
          disabled: props.disabled
        }, (0, _mixins.colorClasses)(props))
      }, [slots['root-start'] && slots['root-start'](), ItemContent, isSortableComputed.value && (0, _vue.h)('div', {
        class: 'sortable-handler'
      }), slots.root && slots.root(), slots['root-end'] && slots['root-end']()]);
    };
  }
};
exports.default = _default;