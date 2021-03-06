
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Card: DefineComponent<
  {
    
    title: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    content: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    footer: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    outline: {
      type: BooleanConstructor;
    },

    expandable: {
      type: BooleanConstructor;
    },

    expandableAnimateWidth: {
      type: BooleanConstructor;
    },

    expandableOpened: {
      type: BooleanConstructor;
    },

    noShadow: {
      type: BooleanConstructor;
    },

    noBorder: {
      type: BooleanConstructor;
    },

    animate: {
      type: BooleanConstructor;
      default: undefined;
    },

    hideNavbarOnOpen: {
      type: BooleanConstructor;
      default: undefined;
    },

    hideToolbarOnOpen: {
      type: BooleanConstructor;
      default: undefined;
    },

    hideStatusbarOnOpen: {
      type: BooleanConstructor;
      default: undefined;
    },

    scrollableEl: {
      type: StringConstructor;
      default: undefined;
    },

    swipeToClose: {
      type: BooleanConstructor;
      default: undefined;
    },

    closeByBackdropClick: {
      type: BooleanConstructor;
      default: undefined;
    },

    backdrop: {
      type: BooleanConstructor;
      default: undefined;
    },

    backdropEl: {
      type: StringConstructor;
      default: undefined;
    },

    padding: {
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
  ("card:beforeopen" | "card:open" | "card:opened" | "card:close" | "card:closed" | "update:expandableOpened")[],
  "card:beforeopen" | "card:open" | "card:opened" | "card:close" | "card:closed" | "update:expandableOpened"
>;

export default Card;
  