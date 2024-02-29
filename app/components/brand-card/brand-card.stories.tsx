import type { Meta, StoryObj } from "@storybook/react";
import {
  BrandCardDisney,
  BrandCardPixar,
  BrandCardMarvel,
  BrandCardNationalGeographic,
  BrandCardStarWars,
  BrandCardStar,
} from "./brand-card";

const meta: Meta<typeof BrandCardDisney> = {
  title: "Components/BrandCard",
  parameters: {
    layout: "centered",
  },
  component: BrandCardDisney,
  decorators: [
    () => (
      <div className="grid grid-cols-2 gap-8 rounded-lg p-8">
        {[
          BrandCardDisney,
          BrandCardPixar,
          BrandCardMarvel,
          BrandCardNationalGeographic,
          BrandCardStarWars,
          BrandCardStar,
        ].map((BrandCardStory, index) => (
          <div key={index} className="h-[120px]">
            <BrandCardStory />
          </div>
        ))}
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BrandCardDisney>;

export const Default: Story = {
  args: {},
};

export const Disney: Story = {
  args: {},
};
