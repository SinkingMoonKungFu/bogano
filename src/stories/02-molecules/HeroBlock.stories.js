import { HeroBlock } from "../../components/02-molecules/HeroBlock";

export default {
  title: "Molecules/HeroBlock",
  component: HeroBlock,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    image: "/images/wudang.jpg",
    imageAlt: "Wudang Mountain, China",
    tagline: "Martial arts without egos or intimidation",
    address: "13755 Nicollet Ave. Suite 203 Burnsville, MN 55337",
    addressLink: "https://maps.app.goo.gl/jESujkKdHnnnJ2y79",
  },
};
