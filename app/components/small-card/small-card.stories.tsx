import type { Meta, StoryObj } from "@storybook/react";
import { SmallCard as SmallCardComponent } from "./small-card";
import { smallCardMock } from "./small-card.mock";

const meta: Meta<typeof SmallCardComponent> = {
  title: "Components/Small Card",
  parameters: {
    layout: "centered",
  },
  component: SmallCardComponent,
  decorators: [
    (Story) => (
      <div className="w-[240px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SmallCardComponent>;

export const SmallCard: Story = {
  args: smallCardMock,
};
