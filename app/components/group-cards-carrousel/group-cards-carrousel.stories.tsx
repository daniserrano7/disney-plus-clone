import type { Meta, StoryObj } from "@storybook/react";
import { smallCardMock } from "@/components/small-card/small-card.mock";
import {
  keepWatchingCardMovieMock,
  keepWatchingCardSerieMock,
} from "@/components/keep-watching-card/keep-watching-card.mock";
import { GroupCardsCarrousel } from "./group-cards-carrousel";
import { SmallCardsCarrousel } from "./small-cards-carrousel";
import { KeepWatchingCardsCarrousel } from "./keep-watching-cards-carrousel";

const meta: Meta<typeof GroupCardsCarrousel> = {
  title: "Components/Group Card Carrousel",
  parameters: {
    layout: "top",
  },
  component: GroupCardsCarrousel,
  decorators: [
    (Story) => (
      <div className="mt-8 py-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GroupCardsCarrousel>;

export const SmallCards: Story = {
  render: () => (
    <SmallCardsCarrousel
      cards={[
        smallCardMock,
        smallCardMock,
        smallCardMock,
        smallCardMock,
        smallCardMock,
        smallCardMock,
        smallCardMock,
      ]}
    />
  ),
};

export const KeepWatchingCards: Story = {
  render: () => (
    <KeepWatchingCardsCarrousel
      cards={[
        keepWatchingCardMovieMock,
        keepWatchingCardSerieMock,
        keepWatchingCardMovieMock,
        keepWatchingCardSerieMock,
        keepWatchingCardMovieMock,
        keepWatchingCardSerieMock,
        keepWatchingCardMovieMock,
        keepWatchingCardSerieMock,
        keepWatchingCardMovieMock,
      ]}
    />
  ),
};
