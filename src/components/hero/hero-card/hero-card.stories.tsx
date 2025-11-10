import type { Meta, StoryObj } from "@storybook/react";
import { HeroCard } from "./hero-card";
import { heroCardMock } from "./hero-card.mock";

const meta: Meta<typeof HeroCard> = {
  title: "Components/Hero/Card",
  parameters: {
    layout: "centered",
  },
  component: HeroCard,
  decorators: [
    (Story, context) => {
      return (
        <div className="w-full p-8">
          <Story args={{ ...context.args }} />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof HeroCard>;

export const Default: Story = {
  args: {
    ...heroCardMock,
  },
};

export const WithInfo: Story = {
  args: {
    ...heroCardMock,
    subtitle: undefined,
  },
};

export const WithSubtitle: Story = {
  args: {
    ...heroCardMock,
    info: undefined,
  },
};

export const Empty: Story = {
  args: {
    ...heroCardMock,
    subtitle: undefined,
    info: undefined,
  },
};
