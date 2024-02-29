import type { Meta, StoryObj } from "@storybook/react";
import { VerticalCard } from "./vertical-card";

const meta: Meta<typeof VerticalCard> = {
  title: "Components/VerticalCard",
  parameters: {
    layout: "centered",
  },
  component: VerticalCard,
};

export default meta;
type Story = StoryObj<typeof VerticalCard>;

export const Default: Story = {
  args: {
    url: "https://www.disneyplus.com/",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AFAF32C312CAEF54B8D1E119D4F7E95799FD10520CEE1453BD90107B74CE9FD0/badging?width=400&aspectRatio=0.71&format=jpeg&label=staroriginal",
    alt: "Coppola",
  },
};
