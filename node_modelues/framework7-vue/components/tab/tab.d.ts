
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Tab: DefineComponent<
  {
    
    tabActive: {
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
  ("tab:show" | "tab:hide")[],
  "tab:show" | "tab:hide"
>;

export default Tab;
  