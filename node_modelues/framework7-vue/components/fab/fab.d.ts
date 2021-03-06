
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Fab: DefineComponent<
  {
    
    morphTo: {
      type: StringConstructor;
    },

    href: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    target: {
      type: StringConstructor;
    },

    text: {
      type: StringConstructor;
    },

    tooltip: {
      type: StringConstructor;
    },

    tooltipTrigger: {
      type: StringConstructor;
    },

    position: {
      type: StringConstructor;
      default: string;
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

export default Fab;
  