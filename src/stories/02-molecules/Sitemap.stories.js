import { Sitemap } from "../../components/02-molecules/Sitemap";

export default {
  title: "Molecules/Sitemap",
  component: Sitemap,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    sitemap: [
      {
        categoryTitle: "Discover",
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
        ],
      },
      {
        categoryTitle: "Learn",
        links: [
          {
            title: "Become a Member",
            link: "/join",
          },
          {
            title: "Pricing",
            link: "/pricing",
          },
          {
            title: "Class Rules",
            link: "/rules",
          },
          {
            title: "Class Schedule",
            link: "/classes",
          },
          {
            title: "Curriculum",
            link: "/curriculum",
          },
          {
            title: "Belt Rankings",
            link: "/ranks",
          },
          {
            title: "Rank Requirements",
            link: "/requirements",
          },
          {
            title: "FAQ",
            link: "/faq",
          },
        ],
      },
      {
        categoryTitle: "Support",
        links: [
          {
            title: "Donation Form",
            link: "/donation",
          },
          {
            title: "Volunteer Inquiry",
            link: "/volunteers",
          },
          {
            title: "Corporate Partnerships",
            link: "/affliates",
          },
        ],
      },
      {
        categoryTitle: "Contact",
        links: [
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
    ],
  },
};
