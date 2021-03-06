
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const TextEditor: DefineComponent<
  {
    
    buttons: {
      type: ArrayConstructor;
    },

    customButtons: {
      type: ObjectConstructor;
    },

    mode: {
      type: StringConstructor;
      default: undefined;
    },

    value: {
      type: StringConstructor;
      default: undefined;
    },

    dividers: {
      type: BooleanConstructor;
      default: undefined;
    },

    imageUrlText: {
      type: StringConstructor;
      default: undefined;
    },

    linkUrlText: {
      type: StringConstructor;
      default: undefined;
    },

    placeholder: {
      type: StringConstructor;
      default: undefined;
    },

    clearFormattingOnPaste: {
      type: BooleanConstructor;
      default: undefined;
    },

    resizable: {
      type: BooleanConstructor;
      default: boolean;
    },

    color: {
      type: StringConstructor;
    },

    colorTheme: {
      type: StringConstructor;
    },

    textColor: {
      type: StringConstructor;
    },

    bgColor: {
      type: StringConstructor;
    },

    borderColor: {
      type: StringConstructor;
    },

    rippleColor: {
      type: StringConstructor;
    },

    themeDark: {
      type: BooleanConstructor;
    }
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  ("texteditor:change" | "texteditor:input" | "texteditor:focus" | "texteditor:blur" | "texteditor:buttonclick" | "texteditor:keyboardopen" | "texteditor:keyboardclose" | "texteditor:popoveropen" | "texteditor:popoverclose" | "texteditor:insertlink" | "texteditor:insertimage" | "texteditorChange" | "texteditorInput" | "texteditorFocus" | "texteditorBlur")[],
  "texteditor:change" | "texteditor:input" | "texteditor:focus" | "texteditor:blur" | "texteditor:buttonclick" | "texteditor:keyboardopen" | "texteditor:keyboardclose" | "texteditor:popoveropen" | "texteditor:popoverclose" | "texteditor:insertlink" | "texteditor:insertimage" | "texteditorChange" | "texteditorInput" | "texteditorFocus" | "texteditorBlur"
>;

export default TextEditor;
  