
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Messagebar: DefineComponent<
  {
    
    sheetVisible: {
      type: BooleanConstructor;
    },

    attachmentsVisible: {
      type: BooleanConstructor;
    },

    top: {
      type: BooleanConstructor;
    },

    maxHeight: {
      type: NumberConstructor;
    },

    sendLink: {
      type: StringConstructor;
    },

    value: {
      type: PropType<StringConstructor | NumberConstructor | ArrayConstructor>;
    },

    disabled: {
      type: BooleanConstructor;
    },

    readonly: {
      type: BooleanConstructor;
    },

    textareaId: {
      type: PropType<NumberConstructor | StringConstructor>;
    },

    name: {
      type: StringConstructor;
    },

    resizable: {
      type: BooleanConstructor;
      default: boolean;
    },

    bottomOffset: {
      type: NumberConstructor;
      default: number;
    },

    topOffset: {
      type: NumberConstructor;
      default: number;
    },

    resizePage: {
      type: BooleanConstructor;
      default: boolean;
    },

    placeholder: {
      type: StringConstructor;
      default: string;
    },

    init: {
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
  ("change" | "input" | "focus" | "blur" | "submit" | "send" | "click" | "messagebar:attachmentdelete" | "messagebar:attachmentclick" | "messagebar:resizepage" | "update:value")[],
  "change" | "input" | "focus" | "blur" | "submit" | "send" | "click" | "messagebar:attachmentdelete" | "messagebar:attachmentclick" | "messagebar:resizepage" | "update:value"
>;

export default Messagebar;
  