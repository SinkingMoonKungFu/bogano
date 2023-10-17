import { BlockToutList } from "../../components/02-molecules/BlockToutList";

export default {
  title: "Molecules/BlockToutList",
  component: BlockToutList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    blockTouts: [
      {
        text: "Meet our instructors",
        image: "/images/instructor-tout.png",
        link: "/instructors",
      },
      {
        text: "Learn About our History and Mission",
        image: "/images/history-tout.png",
        link: "/mission",
      },
      {
        text: "Donate to Our Nonprofit",
        image: "/images/tout-donate.png",
        link: "/donate",
      },
      {
        text: "Join Us for Class",
        image: "/images/join-tout.png",
        link: "/students/prospective",
      },
    ],
  },
};
