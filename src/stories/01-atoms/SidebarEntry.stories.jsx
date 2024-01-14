import { SidebarEntry } from "../../components/01-atoms/SidebarEntry";

export default {
  title: "Atoms/SidebarEntry",
  component: SidebarEntry,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: "25rem" }}>
        <Story />
      </div>
    ),
  ],
};

export const InstructorsAndStaff = {
  args: {
    image: "/images/saam.png",
    title: "Instructors & Staff",
    link: "/instructors",
    excerpt:
      "Meet the instructors and staff members of the Sinking Moon School of Kung Fu",
  },
};
