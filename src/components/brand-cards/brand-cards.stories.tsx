import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrandCards as BrandCardsComponent } from "./brand-cards";

const meta: Meta<typeof BrandCardsComponent> = {
  title: "Components/Brand Cards",
  parameters: {
    layout: "top",
  },
  component: BrandCardsComponent,
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BrandCardsComponent>;

export const BrandCards: Story = {};
