
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const AccordionItem: DefineComponent<
  {
    
    opened: {
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
  ("accordion:beforeopen" | "accordion:open" | "accordion:opened" | "accordion:beforeclose" | "accordion:close" | "accordion:closed")[],
  "accordion:beforeopen" | "accordion:open" | "accordion:opened" | "accordion:beforeclose" | "accordion:close" | "accordion:closed"
>;

export default AccordionItem;
  