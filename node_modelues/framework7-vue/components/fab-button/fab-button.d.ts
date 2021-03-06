
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const FabButton: DefineComponent<
  {
    
    fabClose: {
      type: BooleanConstructor;
    },

    label: {
      type: StringConstructor;
    },

    target: {
      type: StringConstructor;
    },

    tooltip: {
      type: StringConstructor;
    },

    tooltipTrigger: {
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

export default FabButton;
  