
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const SwipeoutButton: DefineComponent<
  {
    
    text: {
      type: StringConstructor;
    },

    confirmTitle: {
      type: StringConstructor;
    },

    confirmText: {
      type: StringConstructor;
    },

    overswipe: {
      type: BooleanConstructor;
    },

    close: {
      type: BooleanConstructor;
    },

    delete: {
      type: BooleanConstructor;
    },

    href: {
      type: StringConstructor;
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
  ("click")[],
  "click"
>;

export default SwipeoutButton;
  