import type { MetaFunction } from "@remix-run/node";
import { Header } from "@/components/header";
import { HeroCarrousel } from "@/components/hero";
import { heroCardMock } from "@/components/hero/hero-card";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix!",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
      <HeroCarrousel cards={[heroCardMock, heroCardMock, heroCardMock]} />
    </div>
  );
}
