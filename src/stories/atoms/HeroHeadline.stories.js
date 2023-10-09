import { HeroHeadline } from "../../components/atoms/HeroHeadline";

export default {
  title: "Atoms/HeroHeadline",
  component: HeroHeadline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    text: "Martial arts without egos or intimidation",
  },
};
