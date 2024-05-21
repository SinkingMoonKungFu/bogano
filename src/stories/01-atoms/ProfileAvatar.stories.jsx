import { ProfileAvatar } from "../../components/01-atoms/ProfileAvatar";

export default {
  title: "Atoms/ProfileAvatar",
  component: ProfileAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
    decorators: [
        (Story) => (
        <div style={{ margin: "2rem" }}>
            <Story />
        </div>
        ),
  ],
};

export const ScottJohnson = {
    args: {
        name: 'Scott Johnson',
        image: '/images/laoshiscott.png',
    },
};
