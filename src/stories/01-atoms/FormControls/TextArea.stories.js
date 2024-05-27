import { TextArea } from "../../../components/01-atoms/FormControls/TextArea";

export default {
  title: "Atoms/Form Controls/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const NoPlaceholder = {
  args: {
    title: "A TextArea",
  },
};

export const WithPlaceholdler = {
  args: {
    title: "Additional Info",
    placeholder: "Any additional information you'd like us to know.",
  },
};
