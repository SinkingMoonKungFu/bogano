import { HeaderBar } from "../../components/02-molecules/HeaderBar";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/HeaderBar",
  component: HeaderBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const menu = [
  {
    title: "About",
    subMenu: [
      {
        title: "History & Mission",
        link: "https://www.sinkingmoon.com/mission",
      },
      {
        title: "Instructors & Staff",
        link: "https://www.sinkingmoon.com/instructors",
      },
      {
        title: "Philosophy & Ethics",
        link: "https://www.sinkingmoon.com/philosophy",
      },
      {
        title: "Curriculum",
        link: "https://www.sinkingmoon.com/curriculum",
      },
      {
        title: "Belt Rankings",
        link: "https://www.sinkingmoon.com/ranks",
      },
      {
        title: "Class Rules",
        link: "https://www.sinkingmoon.com/rules",
      },
      {
        title: "FAQ",
        link: "https://www.sinkingmoon.com/faq",
      },
    ],
  },
  {
    title: "Pricing",
    link: "https://www.sinkingmoon.com/pricing",
  },
  {
    title: "Class Schedule",
    link: "https://www.sinkingmoon.com/classes",
  },
  {
    title: "Contact Us",
    subMenu: [
      {
        title: "General Contact",
        link: "https://www.sinkingmoon.com/contact",
      },
      {
        title: "Prospective Students",
        link: "https://www.sinkingmoon.com/students/prospectives",
      },
    ],
  },
];

export const Web = {
  args: {
    menu: menu,
  },
};
