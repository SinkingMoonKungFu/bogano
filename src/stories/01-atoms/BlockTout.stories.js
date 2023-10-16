import { BlockTout } from "../../components/01-atoms/BlockTout";

export default {
  title: "Atoms/BlockTout",
  component: BlockTout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const MeetInstructors = {
  args: {
    text: "Meet our instructors",
    image: "/images/instructor-tout.png",
    link: "/instructors",
  },
};

export const LearnHistory = {
  args: {
    text: "Learn About our History and Mission",
    image: "/images/history-tout.png",
    link: "/mission",
  },
};

export const Join = {
  args: {
    text: "Join Us for Class",
    image: "/images/join-tout.png",
    link: "/students/prospective",
  },
};
