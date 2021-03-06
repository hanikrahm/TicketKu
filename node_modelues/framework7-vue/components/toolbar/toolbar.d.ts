
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Toolbar: DefineComponent<
  {
    
    tabbar: {
      type: BooleanConstructor;
    },

    labels: {
      type: BooleanConstructor;
    },

    scrollable: {
      type: BooleanConstructor;
    },

    hidden: {
      type: BooleanConstructor;
    },

    noShadow: {
      type: BooleanConstructor;
    },

    noHairline: {
      type: BooleanConstructor;
    },

    noBorder: {
      type: BooleanConstructor;
    },

    position: {
      type: StringConstructor;
      default: undefined;
    },

    topMd: {
      type: BooleanConstructor;
      default: undefined;
    },

    topIos: {
      type: BooleanConstructor;
      default: undefined;
    },

    topAurora: {
      type: BooleanConstructor;
      default: undefined;
    },

    top: {
      type: BooleanConstructor;
      default: undefined;
    },

    bottomMd: {
      type: BooleanConstructor;
      default: undefined;
    },

    bottomIos: {
      type: BooleanConstructor;
      default: undefined;
    },

    bottomAurora: {
      type: BooleanConstructor;
      default: undefined;
    },

    bottom: {
      type: BooleanConstructor;
      default: undefined;
    },

    inner: {
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
  ("toolbar:hide" | "toolbar:show")[],
  "toolbar:hide" | "toolbar:show"
>;

export default Toolbar;
  