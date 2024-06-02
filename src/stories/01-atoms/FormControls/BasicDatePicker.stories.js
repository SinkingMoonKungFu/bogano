import { BasicDatePicker } from "../../../components/01-atoms/FormControls/BasicDatePicker";

export default {
  title: "Atoms/Form Controls/DatePicker",
  component: BasicDatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    title: "Date Interested in Attending",
    placeholder: "mm/dd/yyyy",
  },
};
