import { KeepWatchingCard, Props as KeppWatchingCardProps } from "../keep-watching-card";
import { GroupCardsCarrousel } from "./group-cards-carrousel";

export const KeepWatchingCardsCarrousel = ({ cards }: Props) => {
  return (
    <GroupCardsCarrousel cards={cards} renderCard={(item) => <KeepWatchingCard {...item} />} />
  );
};

interface Props {
  cards: KeppWatchingCardProps[];
}
