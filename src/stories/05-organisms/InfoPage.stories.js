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

export const Instructors = {
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
  },
};
