
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const SwipeoutActions: DefineComponent<
  {
    
    left: {
      type: BooleanConstructor;
    },

    right: {
      type: BooleanConstructor;
    },

    side: {
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
  
>;

export default SwipeoutActions;
  