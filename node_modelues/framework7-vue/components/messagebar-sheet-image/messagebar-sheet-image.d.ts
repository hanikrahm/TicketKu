
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const MessagebarSheetImage: DefineComponent<
  {
    
    image: {
      type: StringConstructor;
    },

    checked: {
      type: BooleanConstructor;
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
  ("checked" | "unchecked" | "change" | "update:checked")[],
  "checked" | "unchecked" | "change" | "update:checked"
>;

export default MessagebarSheetImage;
  