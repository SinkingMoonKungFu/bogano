import { Definition } from "../../components/01-atoms/Definition";

export default {
  title: "Atoms/Definition",
  component: Definition,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const CurrentInstructors = {
  args: {
    term: "Current Instructors",
    definition:
      "Individuals who regularly teach classes at the Sinking Moon School of Kung Fu. Typically, these individuals will be available during open time for questions, and typically can have private lessons scheduled with them at any time.",
    marker: true,
  },
};
