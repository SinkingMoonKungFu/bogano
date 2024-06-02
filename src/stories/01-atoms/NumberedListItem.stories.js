import { NumberedListItem } from "../../components/01-atoms/NumberedListItem";

import colors from "../../assets/scss/colors.module.scss";
const { FlamePea } = colors;

export default {
  title: "Atoms/NumberedListItem",
  component: NumberedListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const DefaultColor = {
  args: {
    numeral: 1,
    title: "Footwear",
    description:
      "No street shoes (any shoes other than low-tread shoes designed specifically for martial arts or wrestling, or any of the above that have been worn outdoors) are allowed on the mats.",
  },
};

export const FlamePeaColor = {
  args: {
    numeral: 2,
    title: "Flame Pea",
    description:
      "Flame Pea is an orange-like color that we use to highlight specific areas of the page. This list item uses the color for the numeral preceding this description.",
    color: FlamePea,
  },
};
