import { HeroImage } from "../../components/atoms/HeroImage";

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
