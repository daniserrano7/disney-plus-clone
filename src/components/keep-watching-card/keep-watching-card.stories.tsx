import type { Meta, StoryObj } from "@storybook/react-vite";
import { KeepWatchingCard } from "./keep-watching-card";
import { keepWatchingCardMovieMock, keepWatchingCardSerieMock } from "./keep-watching-card.mock";

const meta: Meta<typeof KeepWatchingCard> = {
  title: "Components/Keep Watching Card",
  parameters: {
    layout: "centered",
  },
  component: KeepWatchingCard,
  decorators: [
    (Story) => (
      <div className="w-[240px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof KeepWatchingCard>;

export const Movie: Story = {
  args: keepWatchingCardMovieMock,
};

export const Serie: Story = {
  args: keepWatchingCardSerieMock,
};
