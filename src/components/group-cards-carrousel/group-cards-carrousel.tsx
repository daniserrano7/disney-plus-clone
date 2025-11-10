import { useState, useEffect } from "react";
import cx from "classix";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export const GroupCardsCarrousel = <T,>({
  cards,
  component: Component,
  paddingBottom = 0,
}: Props<T>) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(4);
  const [isAnimating, setIsAnimating] = useState(false);
  const CARDS_SPACING = 24; // gap between cards
  const SIDE_MARGIN = 144; // margin on the sides, part of the previous/next slide shown
  const ANIMATION_DURATION_SECONDS = 0.3;

  const createCardContainers = (cards: T[], n: number) => {
    const containers = [];
    for (let i = 0; i < cards.length; i += n) {
      containers.push(cards.slice(i, i + n));
    }
    return containers;
  };

  const nextSlide = () => setCurrentStep((prev) => prev + 1);
  const previousSlide = () => setCurrentStep((prev) => prev - 1);

  const containers = createCardContainers(cards, cardsPerSlide);

  useEffect(() => {
    setIsAnimating(true);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, ANIMATION_DURATION_SECONDS * 1000);

    return () => clearTimeout(timeout);
  }, [currentStep]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const { innerWidth } = window;
      const newCardsPerSlide = (() => {
        if (innerWidth < 768) return 1;
        if (innerWidth < 768) return 2;
        if (innerWidth < 1080) return 3;
        return 4;
      })();
      setCardsPerSlide(newCardsPerSlide);
    });
  }, []);

  const PreviousSlideButton = () => (
    <button
      onClick={previousSlide}
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
  );

  const NextSlideButton = () => (
    <button
      onClick={nextSlide}
      className={cx(
        "group absolute right-0 z-30 grid h-full w-[48px] place-items-center transition-all",
        currentStep === containers.length - 1 && "hidden",
        isAnimating ? "bg-none duration-0" : "bg-black/30 delay-200 duration-300",
      )}
    >
      <PiCaretRightBold
        size={40}
        className="opacity-0 transition-opacity duration-150 group-hover:opacity-100"
      />
    </button>
  );

  // Invisible element to fill height and width of absolute children
  const InvisiblePlaceholderComponent = () => (
    <div className="invisible">
      <Component key={cards.length + 1} {...cards[0]} />
    </div>
  );

  return (
    <div className="relative flex w-full items-center overflow-hidden pt-3">
      <div className="relative w-full" style={{ paddingBottom: `${paddingBottom}px` }}>
        <div
          style={{ gridTemplateColumns: `repeat(${cardsPerSlide}, minmax(0, 1fr))` }}
          className="relative grid gap-4 px-[72px]"
        >
          <PreviousSlideButton />
          <InvisiblePlaceholderComponent />
          <NextSlideButton />
        </div>
        {containers.map((cards, index) => (
          <div
            key={index}
            style={{
              left: `calc(${index - currentStep} * (100% - ${SIDE_MARGIN}px + ${CARDS_SPACING}px))`,
              width: `calc(100% - ${SIDE_MARGIN}px)`,
              marginLeft: `${SIDE_MARGIN / 2}px`,
              transitionDuration: `${ANIMATION_DURATION_SECONDS}s`,
              gridTemplateColumns: `repeat(${cardsPerSlide}, minmax(0, 1fr))`,
            }}
            className="absolute top-0 grid h-full gap-4 ease-out"
          >
            {cards.map((card, index) => (
              <Component key={index} {...card} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

interface Props<T> {
  cards: T[];
  component: React.ComponentType<T>;
  paddingBottom?: number;
}
