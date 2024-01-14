import { SitemapColumn } from "../../components/01-atoms/SitemapColumn";

export default {
  title: "Atoms/SitemapColumn",
  component: SitemapColumn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const WithSubmenus = {
  args: {
    title: "About",
    links: [
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
};

export const WithSingleLink = {
  args: {
    title: "Pricing",
    link: "/pricing",
  },
};
