import { HeroImage } from "../../components/01-atoms/HeroImage";

export default {
  title: "Atoms/HeroImage",
  component: HeroImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    image: "/images/wudang.jpg",
  },
};
