import type { Meta, StoryObj } from "@storybook/react";
import { SmallCardsCarrousel } from "@/components/group-cards-carrousel/small-cards-carrousel";
import { smallCardMock } from "../small-card/small-card.mock";
import { SectionWithTitle as SectionWithTitleComponent } from "./section-with-title";

const meta: Meta<typeof SectionWithTitleComponent> = {
  title: "Components/Section With Title",
  parameters: {
    layout: "top",
  },
  component: SectionWithTitleComponent,
  decorators: [
    (Story) => (
      <div className="w-full p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SectionWithTitleComponent>;

export const SectionWithTitle: Story = {
  args: {
    title: "Title of the section",
    children: (
      <SmallCardsCarrousel
        cards={[
          smallCardMock,
          smallCardMock,
          smallCardMock,
          smallCardMock,
          smallCardMock,
          smallCardMock,
        ]}
      />
    ),
  },
};
