import type { Meta, StoryObj } from "@storybook/react-vite";
import { VerticalCardsCarrousel } from "./vertical-cards-carrousel";
import { verticalCardMock } from "@/components/vertical-card/vertical-card.mock";

const meta: Meta<typeof VerticalCardsCarrousel> = {
  title: "Components/Carousels/VerticalCardsCarrousel",
  component: VerticalCardsCarrousel,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cards: Array(9).fill(verticalCardMock),
  },
};

export const MinimalCards: Story = {
  args: {
    cards: Array(3).fill(verticalCardMock),
  },
};

export const ManyCards: Story = {
  args: {
    cards: Array(20).fill(verticalCardMock),
  },
};
