import { ProspectiveStudentForm } from "../../../components/03-cells/Forms/ProspectiveStudentForm";

export default {
  title: "Cells/Forms/ProspectiveStudentForm",
  component: ProspectiveStudentForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    onSubmit: (data) => {
      console.log("Submitted form data: ");
      console.log(data);
    },
  },
};
