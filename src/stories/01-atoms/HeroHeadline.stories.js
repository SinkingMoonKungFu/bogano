import { HeroHeadline } from "../../components/01-atoms/HeroHeadline";

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

export const WithMapIconAndLink = {
  args: {
    text: "13755 Nicollet Ave. Suite 203 Burnsville, MN 55337",
    icon: "pin",
    size: "smallBox",
    link: "http://www.sinkingmoon.com",
  },
};
