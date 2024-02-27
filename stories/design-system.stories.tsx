import type { Meta, StoryObj } from "@storybook/react";
import { DesignSystem } from "./design-system";

const meta: Meta<typeof DesignSystem> = {
  title: "Design System",
  parameters: {
    layout: "top",
  },
  component: DesignSystem,
};

export default meta;
type Story = StoryObj<typeof DesignSystem>;

export const Default: Story = {};
