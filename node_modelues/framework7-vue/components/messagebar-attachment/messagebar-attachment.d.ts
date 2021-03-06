
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const MessagebarAttachment: DefineComponent<
  {
    
    image: {
      type: StringConstructor;
    },

    deletable: {
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
  ("attachment:click" | "attachment:delete")[],
  "attachment:click" | "attachment:delete"
>;

export default MessagebarAttachment;
  