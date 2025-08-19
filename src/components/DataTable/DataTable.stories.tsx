import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable";

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
};
export default meta;

type Story = StoryObj<typeof DataTable>;

export const Empty: Story = {
  args: {
    data: [],
  },
};

export const WithData: Story = {
  args: {
    data: [
      { id: 1, name: "Alice", email: "alice@example.com", age: "21", course: "React" },
      { id: 2, name: "Bob", email: "bob@example.com", age: "22", course: "Java" },
    ],
  },
};
