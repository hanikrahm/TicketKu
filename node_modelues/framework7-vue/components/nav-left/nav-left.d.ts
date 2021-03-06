
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const NavLeft: DefineComponent<
  {
    
    backLink: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    backLinkUrl: {
      type: StringConstructor;
    },

    backLinkForce: {
      type: BooleanConstructor;
    },

    sliding: {
      type: BooleanConstructor;
    },

    backLinkShowText: {
      type: BooleanConstructor;
      default: undefined;
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
  ("back:click" | "click:back")[],
  "back:click" | "click:back"
>;

export default NavLeft;
  