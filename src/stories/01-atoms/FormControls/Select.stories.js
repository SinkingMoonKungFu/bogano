import { Select } from "../../../components/01-atoms/FormControls/Select";

export default {
  title: "Atoms/Form Controls/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    title: "Preferred Method of Contact",
    placeholder: "Please Choose a Contact Method",
    options: ["Phone Call", "Text Message", "Email"],
  },
};
