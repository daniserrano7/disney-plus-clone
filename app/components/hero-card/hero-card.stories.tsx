import { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { HeroCard } from "./hero-card";

const meta: Meta<typeof HeroCard> = {
  title: "Components/HeroCard",
  parameters: {
    layout: "centered",
  },
  component: HeroCard,
  decorators: [
    (Story, context) => {
      const [isTitle, setIsTitle] = useState(true);

      useEffect(() => {
        const timeout = setInterval(() => {
          setIsTitle((previousValue) => !previousValue);
        }, 3000);
        return () => clearTimeout(timeout);
      }, []);

      return (
        <div className="w-full p-8">
          <Story args={{ ...context.args, isTitleVisible: isTitle }} />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof HeroCard>;

export const WithSubtitle: Story = {
  args: {
    url: "https://www.disneyplus.com/",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A4806A45971B92DA6DA3153C4CA6B3FCB6CB36ED7ADE466033BA4306FADA303/compose?width=1440&aspectRatio=3.91&format=jpeg&label=staroriginal_391_scrim",
    alt: "Shogun",
    titleImg:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/338EDF9EBB3599FC64A00320318B4BBE477300E4216A31A7DF0A514DE3329C03/scale?width=800&aspectRatio=1.78&format=png",
    subtitle: "All episodes now streaming",
    isTitleVisible: false,
  },
};

export const WithoutSubtitle: Story = {
  args: {
    url: "https://www.disneyplus.com/",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A4806A45971B92DA6DA3153C4CA6B3FCB6CB36ED7ADE466033BA4306FADA303/compose?width=1440&aspectRatio=3.91&format=jpeg&label=staroriginal_391_scrim",
    alt: "Shogun",
    titleImg:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/338EDF9EBB3599FC64A00320318B4BBE477300E4216A31A7DF0A514DE3329C03/scale?width=800&aspectRatio=1.78&format=png",
    isTitleVisible: false,
  },
};
