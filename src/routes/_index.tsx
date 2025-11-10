import { Header } from "@/components/header";
import { HeroCarrousel } from "@/components/hero";
import { heroCardMock } from "@/components/hero/hero-card";
import { BrandCards } from "@/components/brand-cards";
import { SmallCardsCarrousel } from "@/components/group-cards-carrousel/small-cards-carrousel";
import { smallCardMock } from "@/components/small-card/small-card.mock";
import { KeepWatchingCardsCarrousel } from "@/components/group-cards-carrousel/keep-watching-cards-carrousel";
import {
  keepWatchingCardMovieMock,
  keepWatchingCardSerieMock,
} from "@/components/keep-watching-card/keep-watching-card.mock";
import { SectionWithTitle } from "@/components/section-with-title";

export default function Home() {
  return (
    <div className="pb-8">
      <Header />
      <HeroCarrousel cards={[heroCardMock, heroCardMock, heroCardMock]} />
      <div className="mt-8 px-[72px]">
        <BrandCards />
      </div>
      <div className="mt-12">
        <SectionWithTitle title="Nuevo en Disney +">
          <SmallCardsCarrousel
            cards={[
              smallCardMock,
              smallCardMock,
              smallCardMock,
              smallCardMock,
              smallCardMock,
              smallCardMock,
              smallCardMock,
              smallCardMock,
              smallCardMock,
            ]}
          />
        </SectionWithTitle>
      </div>
      <div className="mt-2">
        <SectionWithTitle title="Series para maratonear">
          <SmallCardsCarrousel
            cards={[
              smallCardMock,
              smallCardMock,
              smallCardMock,
              smallCardMock,
              smallCardMock,
              smallCardMock,
              smallCardMock,
              smallCardMock,
              smallCardMock,
            ]}
          />
        </SectionWithTitle>
      </div>
      <div className="mt-2">
        <SectionWithTitle title="Seguir viendo para Dani">
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
              keepWatchingCardSerieMock,
            ]}
          />
        </SectionWithTitle>
      </div>
    </div>
  );
}
