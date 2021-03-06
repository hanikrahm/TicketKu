
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Tabs: DefineComponent<
  {
    
    animated: {
      type: BooleanConstructor;
    },

    swipeable: {
      type: BooleanConstructor;
    },

    routable: {
      type: BooleanConstructor;
    },

    swiperParams: {
      type: ObjectConstructor;
      default: undefined;
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

export default Tabs;
  