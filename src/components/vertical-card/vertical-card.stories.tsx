import type { Meta, StoryObj } from "@storybook/react";
import { VerticalCard as VerticalCardComponent } from "./vertical-card";

const meta: Meta<typeof VerticalCardComponent> = {
  title: "Components/Vertical Card",
  parameters: {
    layout: "centered",
  },
  component: VerticalCardComponent,
};

export default meta;
type Story = StoryObj<typeof VerticalCardComponent>;

export const VerticalCard: Story = {
  args: {
    url: "https://www.disneyplus.com/",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AFAF32C312CAEF54B8D1E119D4F7E95799FD10520CEE1453BD90107B74CE9FD0/badging?width=400&aspectRatio=0.71&format=jpeg&label=staroriginal",
    alt: "Coppola",
  },
};
