import { DefinitionList } from "../../components/02-molecules/DefinitionList";

export default {
  title: "Molecules/DefinitionList",
  component: DefinitionList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const InstructorDefinitions = {
  args: {
    terms: ["Current Instructors", "Current Staff"],
    definitions: [
      "Individuals who regularly teach classes at the Sinking Moon School of Kung Fu. Typically, these individuals will be available during open time for questions, and typically can have private lessons scheduled with them at any time.",
      "Individuals that assist with the administration of the Sinking Moon School of Kung Fu, but are not instructors and will typically not lead classes.",
    ],
  },
};
