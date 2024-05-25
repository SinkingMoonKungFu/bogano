import { NumericList } from "../../components/02-molecules/NumericList";

import colors from "../../assets/scss/colors.module.scss";
const { FlamePea } = colors;

export default {
  title: "Molecules/NumericList",
  component: NumericList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const DefaultColor = {
  args: {
    items: [
      {
        title: "Footwear",
        description:
          "No street shoes (any shoes other than low-tread shoes designed specifically for martial arts or wrestling, or any of the above that have been worn outdoors) are allowed on the mats.",
      },
      {
        title: "Timeliness",
        description:
          "Students should arrive 5-10 minutes early for class. If arriving late, students should prepare for class as quietly as possible and wait in seiza at the edge of the mat until the instructor acknowledges them.",
      },
    ],
  },
};

export const FlamePeaColor = {
  args: {
    color: FlamePea,
    items: [
      {
        title: "Footwear",
        description:
          "No street shoes (any shoes other than low-tread shoes designed specifically for martial arts or wrestling, or any of the above that have been worn outdoors) are allowed on the mats.",
      },
      {
        title: "Timeliness",
        description:
          "Students should arrive 5-10 minutes early for class. If arriving late, students should prepare for class as quietly as possible and wait in seiza at the edge of the mat until the instructor acknowledges them.",
      },
    ],
  },
};
