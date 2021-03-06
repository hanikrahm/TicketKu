function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { computed, ref, onMounted, onBeforeUnmount, h, watch, onUpdated } from 'vue';
import { classNames, extend, noUndefinedProps } from '../shared/utils';
import { colorClasses, colorProps } from '../shared/mixins';
import { f7ready, f7 } from '../shared/f7';
import f7Toggle from './toggle';
import f7Range from './range';
import f7TextEditor from './text-editor';
export default {
  name: 'f7-input',
  props: _extends({
    type: String,
    name: String,
    value: {
      type: [String, Number, Array, Date, Object],
      default: undefined
    },
    inputmode: String,
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
    checked: Boolean,
    disabled: Boolean,
    max: [String, Number],
    min: [String, Number],
    step: [String, Number],
    maxlength: [String, Number],
    minlength: [String, Number],
    multiple: Boolean,
    readonly: Boolean,
    required: Boolean,
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
    // Components
    wrap: {
      type: Boolean,
      default: true
    },
    dropdown: {
      type: [String, Boolean],
      default: 'auto'
    },
    // Datepicker
    calendarParams: Object,
    // Colorpciker
    colorPickerParams: Object,
    // Text editor
    textEditorParams: Object
  }, colorProps),
  emits: ['input', 'focus', 'blur', 'change', 'textarea:resize', 'input:notempty', 'input:empty', 'input:clear', 'texteditor:change', 'calendar:change', 'colorpicker:change', 'update:value'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var f7Calendar = null;
    var f7ColorPicker = null;
    var inputInvalid = ref(false);
    var inputFocused = ref(false);
    var elRef = ref(null);
    var inputElRef = ref(null);
    var updateInputOnDidUpdate = false;

    var getDomValue = function getDomValue() {
      if (!inputElRef.value) return undefined;
      return inputElRef.value.value;
    };

    var domValue = ref(getDomValue());
    var inputHasValue = computed(function () {
      if (props.type === 'datepicker' && Array.isArray(props.value) && props.value.length === 0) {
        return false;
      }

      return typeof props.value === 'undefined' ? domValue.value || domValue.value === 0 : props.value || props.value === 0;
    });

    var validateInput = function validateInput() {
      if (!f7 || !inputElRef.value) return;
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
        validateInput();
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
        validateInput();
      }

      inputFocused.value = false;
    };

    var onChange = function onChange() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      emit.apply(void 0, ['change'].concat(args));

      if (props.type === 'texteditor') {
        emit('texteditor:change', args[1]);
        emit('update:value', args[1]);
      }
    };

    onMounted(function () {
      var type = props.type,
          resizable = props.resizable,
          clearButton = props.clearButton,
          value = props.value,
          calendarParams = props.calendarParams,
          colorPickerParams = props.colorPickerParams,
          validate = props.validate,
          validateOnBlur = props.validateOnBlur;
      f7ready(function () {
        if (type === 'range' || type === 'toggle') return;
        if (!inputElRef.value) return;
        inputElRef.value.addEventListener('input:notempty', onInputNotEmpty, false);

        if (type === 'textarea' && resizable) {
          inputElRef.value.addEventListener('textarea:resize', onTextareaResize, false);
        }

        if (clearButton) {
          inputElRef.value.addEventListener('input:empty', onInputEmpty, false);
          inputElRef.value.addEventListener('input:clear', onInputClear, false);
        }

        if (type === 'datepicker') {
          f7Calendar = f7.calendar.create(_extends({
            inputEl: inputElRef.value,
            value: value,
            on: {
              change: function change(calendar, calendarValue) {
                emit('calendar:change', calendarValue);
                emit('update:value', calendarValue);
              }
            }
          }, calendarParams || {}));
        }

        if (type === 'colorpicker') {
          f7ColorPicker = f7.colorPicker.create(_extends({
            inputEl: inputElRef.value,
            value: value,
            on: {
              change: function change(colorPicker, colorPickerValue) {
                emit('colorpicker:change', colorPickerValue);
                emit('update:value', colorPickerValue);
              }
            }
          }, colorPickerParams || {}));
        }

        f7.input.checkEmptyState(inputElRef.value);

        if (!(validateOnBlur || validateOnBlur === '') && (validate || validate === '') && typeof value !== 'undefined' && value !== null && value !== '') {
          setTimeout(function () {
            validateInput();
          }, 0);
        }

        if (resizable) {
          f7.input.resizeTextarea(inputElRef.value);
        }
      });
    });
    onBeforeUnmount(function () {
      if (props.type === 'range' || props.type === 'toggle') return;
      if (!inputElRef.value) return;
      inputElRef.value.removeEventListener('input:notempty', onInputNotEmpty, false);

      if (props.type === 'textarea' && props.resizable) {
        inputElRef.value.removeEventListener('textarea:resize', onTextareaResize, false);
      }

      if (props.clearButton) {
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
    onUpdated(function () {
      if (!f7) return;

      if (updateInputOnDidUpdate) {
        if (!inputElRef.value) return;
        updateInputOnDidUpdate = false;
        f7.input.checkEmptyState(inputElRef.value);

        if (props.validate && !props.validateOnBlur) {
          validateInput();
        }

        if (props.resizable) {
          f7.input.resizeTextarea(inputElRef.value);
        }
      }
    });
    watch(function () {
      return props.colorPickerParams;
    }, function (newValue) {
      if (!f7 || !f7ColorPicker) return;
      extend(f7ColorPicker.params, newValue || {});
    });
    watch(function () {
      return props.calendarParams;
    }, function (newValue) {
      if (!f7 || !f7Calendar) return;
      extend(f7Calendar.params, newValue || {});
    });
    watch(function () {
      return props.value;
    }, function (newValue) {
      if (props.type === 'range' || props.type === 'toggle' || !f7) return;
      updateInputOnDidUpdate = true;

      if (f7Calendar) {
        f7Calendar.setValue(newValue);
      }

      if (f7ColorPicker) {
        f7ColorPicker.setValue(newValue);
      }
    });

    var createInput = function createInput(InputTag, children) {
      var needsValue = props.type !== 'file' && props.type !== 'datepicker' && props.type !== 'colorpicker';
      var needsType = InputTag === 'input';
      var inputType = props.type;

      if (inputType === 'datepicker' || inputType === 'colorpicker') {
        inputType = 'text';
      }

      var inputClassName = classNames({
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

      var inputProps = noUndefinedProps({
        name: props.name,
        type: needsType ? inputType : undefined,
        placeholder: props.placeholder,
        inputmode: props.inputmode,
        id: props.inputId,
        size: props.size,
        accept: props.accept,
        autocomplete: props.autocomplete,
        autoCorrect: props.autocorrect,
        autocapitalize: props.autocapitalize,
        spellcheck: props.spellcheck,
        autofocus: props.autofocus,
        autoSave: props.autosave,
        checked: props.checked,
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
      return h(InputTag, _extends({
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

    var wrapClasses = computed(function () {
      return classNames('input', {
        'input-outline': props.outline,
        'input-dropdown': props.dropdown === 'auto' ? props.type === 'select' : props.dropdown,
        'input-invalid': props.errorMessage && props.errorMessageForce || inputInvalid.value
      }, colorClasses(props));
    });
    return function () {
      var inputEl;

      if (props.type === 'select' || props.type === 'textarea' || props.type === 'file') {
        if (props.type === 'select') {
          inputEl = createInput('select', slots.default && slots.default());
        } else if (props.type === 'file') {
          inputEl = createInput('input');
        } else {
          inputEl = createInput('textarea');
        }
      } else if (slots.default || !props.type) {
        inputEl = slots.default();
      } else if (props.type === 'toggle') {
        inputEl = h(f7Toggle, {
          checked: props.checked,
          readonly: props.readonly,
          name: props.name,
          value: props.value,
          disabled: props.disabled,
          id: props.inputId,
          onChange: onChange
        });
      } else if (props.type === 'range') {
        inputEl = h(f7Range, {
          value: props.value,
          disabled: props.disabled,
          min: props.min,
          max: props.max,
          step: props.step,
          name: props.name,
          id: props.inputId,
          input: true,
          onRangeChange: onChange
        });
      } else if (props.type === 'texteditor') {
        inputEl = h(f7TextEditor, _extends({
          value: props.value,
          resizable: props.resizable,
          placeholder: props.placeholder,
          onTextEditorFocus: onFocus,
          onTextEditorBlur: onBlur,
          onTextEditorInput: onInput,
          onTextEditorChange: onChange
        }, props.textEditorParams || {}));
      } else {
        inputEl = createInput('input');
      }

      if (!props.wrap) return inputEl;
      return h('div', {
        class: wrapClasses.value,
        ref: elRef
      }, [inputEl, (props.errorMessage || slots['error-message']) && props.errorMessageForce && h('div', {
        class: 'input-error-message'
      }, [props.errorMessage, slots['error-message'] && slots['error-message']()]), props.clearButton && h('span', {
        class: 'input-clear-button'
      }), (props.info || slots.info) && h('div', {
        class: 'input-info'
      }, [props.info, slots.info && slots.info()])]);
    };
  }
};