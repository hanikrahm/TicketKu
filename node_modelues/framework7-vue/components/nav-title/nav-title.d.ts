
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const NavTitle: DefineComponent<
  {
    
    title: {
      type: StringConstructor;
    },

    subtitle: {
      type: StringConstructor;
    },

    sliding: {
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
  
>;

export default NavTitle;
  