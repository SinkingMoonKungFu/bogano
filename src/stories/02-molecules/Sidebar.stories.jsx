import { SidebarEntry } from "../../components/01-atoms/SidebarEntry";
import { Sidebar } from "../../components/02-molecules/Sidebar";

export default {
  title: "Molecules/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const About = {
  args: {
    title: "Additional Information",
    entries: [
        {
            title: "Instructors & Staff",
            image: "/images/saam.png",
            excerpt: "Meet the instructors and staff members of the Sinking Moon School of Kung Fu",
            link: "/instructors",
        },
        {
            title: "Instructors & Staff",
            image: "/images/saam.png",
            excerpt: "Meet the instructors and staff members of the Sinking Moon School of Kung Fu",
            link: "/instructors",
        },
        {
            title: "Instructors & Staff",
            image: "/images/saam.png",
            excerpt: "Meet the instructors and staff members of the Sinking Moon School of Kung Fu",
            link: "/instructors",
        }
    ]
  },
};
