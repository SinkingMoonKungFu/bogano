import { SitemapFooter } from "../../components/03-cells/SitemapFooter";

export default {
  title: "Cells/SitemapFooter",
  component: SitemapFooter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    logoTitle: "Sinking Moon School of Kung Fu",
    copyrightInfo:
      "© Copyright 2023 Sinking Moon School of Kung Fu. All rights reserved.",
    imageAcknowledgementsLink: "/acknowledgements",
    logoLink: "/",
    sitemap: [
      {
        categoryTitle: "Discover",
        links: [
          {
            title: "History & Mission",
            link: "/mission",
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
            link: "/students/prospective",
          },
        ],
      },
    ],
  },
};
