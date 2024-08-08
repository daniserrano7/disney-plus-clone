import { useState, useEffect } from "react";
import cx from "classix";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { HeroCard, Props as HeroCardProps } from "./hero-card";

export const HeroCarrousel = ({ cards }: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => setCurrentStep((prev) => prev + 1);
  const previousSlide = () => setCurrentStep((prev) => prev - 1);

  // const cards = useMemo(() => [heroCardMock, heroCardMock, heroCardMock], []);
  const CARDS_SPACING = 24; // gap between cards
  const SIDE_MARGIN = 144; // margin on the sides, part of the previous/next slide shown
  const ANIMATION_DURATION_SECONDS = 1;
  const CARROUSEL_SLIDE_DELAY_SECONDS = 10;

  useEffect(() => {
    setIsAnimating(true);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, ANIMATION_DURATION_SECONDS * 1000);

    return () => clearTimeout(timeout);
  }, [currentStep]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextStep = currentStep === cards.length - 1 ? 0 : currentStep + 1;
      setCurrentStep(nextStep);
    }, CARROUSEL_SLIDE_DELAY_SECONDS * 1000);

    return () => clearInterval(intervalId);
  }, [cards, currentStep]);

  return (
    <div className="relative w-full overflow-x-hidden">
      <div
        style={{ width: `calc(100% - ${SIDE_MARGIN}px)` }}
        className="relative mx-auto aspect-[3.91] h-auto"
      >
        <button
          onClick={previousSlide}
          style={{
            marginLeft: `-${SIDE_MARGIN / 2}px`,
          }}
          className={cx(
            "group absolute left-0 z-30 grid h-full w-[48px] place-items-center transition-all",
            currentStep === 0 && "hidden",
            isAnimating ? "bg-none duration-0" : "bg-black/30 delay-200 duration-300",
          )}
        >
          <PiCaretLeftBold
            size={40}
            className="opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          />
        </button>
        <button
          onClick={nextSlide}
          style={{ marginRight: `-${SIDE_MARGIN / 2}px` }}
          className={cx(
            "group absolute right-0 z-30 grid h-full w-[48px] place-items-center transition-all",
            currentStep === cards.length - 1 && "hidden",
            isAnimating ? "bg-none duration-0" : "bg-black/30 delay-200 duration-300",
          )}
        >
          <PiCaretRightBold
            size={40}
            className="opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          />
        </button>
      </div>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            left: `calc(${index - currentStep} * (100% - ${SIDE_MARGIN}px + ${CARDS_SPACING}px))`,
            width: `calc(100% - ${SIDE_MARGIN}px)`,
            marginLeft: `${SIDE_MARGIN / 2}px`,
            transitionDuration: `${ANIMATION_DURATION_SECONDS}s`,
          }}
          className="absolute top-0 h-auto w-full transition-all ease-in-out"
        >
          <a href={card.url} className="aspect-[3.91] w-full">
            <HeroCard {...card} />
          </a>
        </div>
      ))}
      <div className="mt-12 flex w-full justify-center gap-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={cx(
              "h-[8px] w-[8px] rounded-full bg-background-neutral",
              currentStep === index && "bg-white",
            )}
          />
        ))}
      </div>
    </div>
  );
};

interface Props {
  cards: HeroCardProps[];
}
