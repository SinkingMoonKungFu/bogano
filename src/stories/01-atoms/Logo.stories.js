import { Logo } from "../../components/01-atoms/Logo";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Logo",
  component: Logo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    logoTitle: "Sinking Moon School of Kung Fu",
  },
};

export const WithLink = {
  args: {
    logoTitle: "Sinking Moon School of Kung Fu",
    link: "https://www.sinkingmoon.com",
  },
};

export const WithTextmark = {
  args: {
    logoTitle: "Sinking Moon School of Kung Fu",
    textmark: true,
  },
};

export const WithLinkAndTextmark = {
  args: {
    link: "https://www.sinkingmoon.com",
    logoTitle: "Sinking Moon School of Kung Fu",
    textmark: true,
  },
};
