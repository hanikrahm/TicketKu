
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Toggle: DefineComponent<
  {
    
    checked: {
      type: BooleanConstructor;
    },

    disabled: {
      type: BooleanConstructor;
    },

    readonly: {
      type: BooleanConstructor;
    },

    name: {
      type: StringConstructor;
    },

    value: {
      type: PropType<StringConstructor | NumberConstructor | ArrayConstructor>;
    },

    tooltip: {
      type: StringConstructor;
    },

    tooltipTrigger: {
      type: StringConstructor;
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
  ("change" | "toggle:change" | "update:checked")[],
  "change" | "toggle:change" | "update:checked"
>;

export default Toggle;
  