import { ProfileAvatar } from "../../components/01-atoms/ProfileAvatar";

export default {
  title: "Atoms/ProfileAvatar",
  component: ProfileAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const ScottJohnson = {
  args: {
    image: "/images/laoshiscott.png",
    name: "Scott Johnson",
  },
};
