import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    value: "",
    onChange: () => {},
  },
};

export const WithError: Story = {
  args: {
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    value: "Al",
    onChange: () => {},
    error: "Name must be at least 3 characters",
  },
};
