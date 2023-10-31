import { ClassRule } from "../../components/01-atoms/ClassRule";

export default {
  title: "Atoms/ClassRule",
  component: ClassRule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    numeral: 1,
    title: "Footwear",
    description:
      "No street shoes (any shoes other than low-tread shoes designed specifically for martial arts or wrestling, or any of the above that have been worn outdoors) are allowed on the mats.",
  },
};
