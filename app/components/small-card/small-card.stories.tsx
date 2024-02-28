import type { Meta, StoryObj } from "@storybook/react";
import { SmallCard } from "./small-card";

const meta: Meta<typeof SmallCard> = {
  title: "Components/SmallCard",
  parameters: {
    layout: "centered",
  },
  component: SmallCard,
};

export default meta;
type Story = StoryObj<typeof SmallCard>;

export const Default: Story = {
  args: {
    url: "https://www.disneyplus.com/",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CB389A0D5C9087462D079DAC0BD1A22CBB898C21F9A7A41C84E6EDC461B50EE9/scale?width=400&aspectRatio=1.78&format=jpeg",
    alt: "Ron's Gone Wrong",
  },
};
