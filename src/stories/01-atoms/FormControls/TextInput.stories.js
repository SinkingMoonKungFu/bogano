import { TextInput } from "../../../components/01-atoms/FormControls/TextInput";

export default {
  title: "Atoms/Form Controls/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const GenericTextWithPlaceholder = {
  args: {
    title: "Name",
    placeholder: "Roland Deschain",
    type: "text",
  },
};

export const FocusedTextWithPlaceholder = {
  args: {
    title: "Name",
    placeholder: "Roland Deschain",
    type: "text",
    id: "focused-text-with-placeholder",
  },
  play: () => {
    document.getElementById("focused-text-with-placeholder").focus();
  },
};

export const GenericTextWithoutPlaceholder = {
  args: {
    title: "Some Text Field Without a Placeholder",
  },
};

export const EmailWithPlaceholder = {
  args: {
    title: "Email Address",
    placeholder: "roland@gunslingers.net",
    type: "email",
  },
};

export const EmailWithError = {
  args: {
    title: "Email Address",
    value: "roland@gunslingers.",
    type: "email",
  },
};

export const PhoneNumberWithPlaceholder = {
  args: {
    title: "Phone",
    placeholder: "(555) 555-5555",
    type: "tel",
  },
};

export const PhoneNumberWithValue = {
  args: {
    title: "Phone",
    value: "555-555-5555",
    type: "tel",
  },
};
