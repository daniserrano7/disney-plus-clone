import { KeepWatchingCard, Props as KeppWatchingCardProps } from "@/components/keep-watching-card";
import { GroupCardsCarrousel } from "./group-cards-carrousel";

export const KeepWatchingCardsCarrousel = ({ cards }: Props) => {
  return <GroupCardsCarrousel cards={cards} component={KeepWatchingCard} />;
};

interface Props {
  cards: KeppWatchingCardProps[];
}
