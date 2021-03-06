
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Icon: DefineComponent<
  {
    
    material: {
      type: StringConstructor;
    },

    f7: {
      type: StringConstructor;
    },

    icon: {
      type: StringConstructor;
    },

    ios: {
      type: StringConstructor;
    },

    aurora: {
      type: StringConstructor;
    },

    md: {
      type: StringConstructor;
    },

    tooltip: {
      type: StringConstructor;
    },

    tooltipTrigger: {
      type: StringConstructor;
    },

    size: {
      type: PropType<StringConstructor | NumberConstructor>;
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
  
>;

export default Icon;
  