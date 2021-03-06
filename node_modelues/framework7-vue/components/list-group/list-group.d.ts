
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const ListGroup: DefineComponent<
  {
    
    mediaList: {
      type: BooleanConstructor;
    },

    simpleList: {
      type: BooleanConstructor;
    },

    sortable: {
      type: BooleanConstructor;
    },

    sortableOpposite: {
      type: BooleanConstructor;
    },

    sortableTapHold: {
      type: BooleanConstructor;
    },

    sortableMoveElements: {
      type: BooleanConstructor;
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

export default ListGroup;
  