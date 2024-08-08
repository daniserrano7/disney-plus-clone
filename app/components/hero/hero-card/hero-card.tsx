import cx from "classix";

export const HeroCard = ({ img, alt, titleImg, subtitle }: Props) => {
  return (
    <div className="relative box-border block w-full rounded shadow-card outline outline-4 -outline-offset-4 outline-transparent transition-all duration-150 ease-linear hover:outline-border/70">
      <img src={img} alt={alt} className="rounded" />
      <img
        src={titleImg}
        alt={alt}
        className={cx(
          "absolute left-[6.5%] top-[10%] aspect-video w-[24%] transition-all duration-500 ease-in-out",
        )}
      />
      <p
        className={cx(
          "font-h2 absolute bottom-[10%] left-[6.5%] font-bold text-2xl transition-all duration-500 ease-in-out",
          !subtitle && "hidden",
        )}
      >
        {subtitle}
      </p>
    </div>
  );
};

export interface Props {
  url: string;
  img: string;
  alt: string;
  titleImg: string;
  subtitle?: string;
}
