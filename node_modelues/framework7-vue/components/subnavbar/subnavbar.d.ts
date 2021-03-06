
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Subnavbar: DefineComponent<
  {
    
    sliding: {
      type: BooleanConstructor;
    },

    title: {
      type: StringConstructor;
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
  
>;

export default Subnavbar;
  