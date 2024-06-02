import { StandardButton } from "../../../components/01-atoms/Buttons/StandardButton";

export default {
  title: "Atoms/Button/StandardButton",
  component: StandardButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Constructive = {
  args: {
    label: "Send",
    onClick: () => {
      console.log("Constructive button clicked!");
    },
  },
};
