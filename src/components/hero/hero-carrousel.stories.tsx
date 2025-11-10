import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroCarrousel } from "./hero-carrousel";
import { heroCardMock } from "./hero-card/hero-card.mock";

const meta: Meta<typeof HeroCarrousel> = {
  title: "Components/Hero/Carrousel",
  parameters: {
    layout: "top",
  },
  component: HeroCarrousel,
  decorators: [
    (Story) => {
      return (
        <div className="mt-8 w-full">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof HeroCarrousel>;

export const Carrousel: Story = {
  args: {
    cards: [heroCardMock, heroCardMock, heroCardMock],
  },
};
