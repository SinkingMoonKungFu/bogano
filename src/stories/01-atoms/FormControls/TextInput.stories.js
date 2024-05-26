import { TextInput } from "../../../components/01-atoms/FormControls/TextInput";

export default {
  title: "Atoms/Form Controls/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const WithoutPlaceholder = {
  args: {
    title: "Some Text Field Without a Placeholder",
  },
};
