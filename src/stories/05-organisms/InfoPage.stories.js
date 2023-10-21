import { InfoPage } from "../../components/05-organisms/InfoPage";

export default {
  title: "Organisms/InfoPage",
  component: InfoPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    title: "Instructors and Staff",
    mainImage: "/images/instructors-hero.png",
    topParagraphs: [
      "Our regular instructors are all fully registered members of the Wu Chi Kung Fu Association's College of Black Belts. Each member of our instruction staff has gone through the rigorous training necessary to be an expert in Wu Chi Chu'an style Kung Fu, and has a particular strength in their teaching different from each of the others",
      "From time to time, we will also allow experts from other styles in the martial arts to teach a series of classes or seminars at the Sinking Moon School of Kung Fu.",
    ],
    menu: [
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
    ],
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
            link: "/instructors",
          },
          {
            title: "Philosophy & Ethics",
            link: "/philosophy",
          },
        ],
      },
      {
        categoryTitle: "Learn",
        links: [
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
            title: "FAQ",
            link: "/faq",
          },
        ],
      },
      {
        categoryTitle: "Join",
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
            title: "Belt Rankings",
            link: "/ranks",
          },
          {
            title: "Rank Requirements",
            link: "/requirements",
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
            link: "/contact",
          },
          {
            title: "Prospective Students",
            link: "/students/prospectives",
          },
        ],
      },
    ],
  },
};
export const WithSidebar = {
  args: {
    title: "Instructors and Staff",
    mainImage: "/images/instructors-hero.png",
    topParagraphs: [
      "Our regular instructors are all fully registered members of the Wu Chi Kung Fu Association's College of Black Belts. Each member of our instruction staff has gone through the rigorous training necessary to be an expert in Wu Chi Chu'an style Kung Fu, and has a particular strength in their teaching different from each of the others",
      "From time to time, we will also allow experts from other styles in the martial arts to teach a series of classes or seminars at the Sinking Moon School of Kung Fu.",
    ],
    menu: [
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
    ],
    sidebar: {
      title: "Additional Information",
      entries: [
        {
          title: "Instructors & Staff",
          image: "/images/saam.png",
          excerpt:
            "Meet the instructors and staff members of the Sinking Moon School of Kung Fu",
          link: "/instructors",
        },
        {
          title: "Instructors & Staff",
          image: "/images/saam.png",
          excerpt:
            "Meet the instructors and staff members of the Sinking Moon School of Kung Fu",
          link: "/instructors",
        },
        {
          title: "Instructors & Staff",
          image: "/images/saam.png",
          excerpt:
            "Meet the instructors and staff members of the Sinking Moon School of Kung Fu",
          link: "/instructors",
        },
      ],
    },
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
            link: "/instructors",
          },
          {
            title: "Philosophy & Ethics",
            link: "/philosophy",
          },
        ],
      },
      {
        categoryTitle: "Learn",
        links: [
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
            title: "FAQ",
            link: "/faq",
          },
        ],
      },
      {
        categoryTitle: "Join",
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
            title: "Belt Rankings",
            link: "/ranks",
          },
          {
            title: "Rank Requirements",
            link: "/requirements",
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
            link: "/contact",
          },
          {
            title: "Prospective Students",
            link: "/students/prospectives",
          },
        ],
      },
    ],
  },
};
