import disneyImage from "src/images/brand-disney.png";
import disneyVideo from "src/images/brand-disney-video.mp4";
import pixarImage from "src/images/brand-pixar.png";
import pixarVideo from "src/images/brand-pixar-video.mp4";
import marvelImage from "src/images/brand-marvel.png";
import marvelVideo from "src/images/brand-marvel-video.mp4";
import starwarsImage from "src/images/brand-star-wars.png";
import starwarsVideo from "src/images/brand-star-wars-video.mp4";
import nationalGeographicImage from "src/images/brand-national-geographic.png";
import nationalGeographicVideo from "src/images/brand-national-geographic-video.mp4";
import starImage from "src/images/brand-star.png";
import starVideo from "src/images/brand-star-video.mp4";

const BrandCardBase = ({ url, img, alt, video }: Props) => {
  return (
    <a
      href={url}
      className="to-[rgb(30 31 42)] group relative block aspect-video h-full rounded-xl bg-elevation-surface bg-gradient-to-b from-elevation-raised shadow-card outline outline-0 transition-transform duration-300 ease-out hover:scale-105 hover:outline-[3px] hover:outline-offset-[3px] hover:outline-border"
    >
      <img src={img} alt={alt} className="absolute top-0 z-10 h-full w-full rounded-xl" />
      <video
        autoPlay
        loop
        muted
        preload="auto"
        width="320"
        height="240"
        className="absolute top-0 z-0 h-full w-full rounded-xl opacity-0 group-hover:opacity-100"
      >
        <source src={video} type="video/mp4" />
      </video>
    </a>
  );
};

interface Props {
  url: string;
  img: string;
  alt: string;
  video: string;
}

export const BrandCardDisney = () => {
  return <BrandCardBase url="" img={disneyImage} alt="Disney" video={disneyVideo} />;
};

export const BrandCardPixar = () => {
  return <BrandCardBase url="" img={pixarImage} alt="Pixar" video={pixarVideo} />;
};

export const BrandCardMarvel = () => {
  return <BrandCardBase url="" img={marvelImage} alt="Marvel" video={marvelVideo} />;
};

export const BrandCardStarWars = () => {
  return <BrandCardBase url="" img={starwarsImage} alt="Star Wars" video={starwarsVideo} />;
};

export const BrandCardNationalGeographic = () => {
  return (
    <BrandCardBase
      url=""
      img={nationalGeographicImage}
      alt="National Geographic"
      video={nationalGeographicVideo}
    />
  );
};

export const BrandCardStar = () => {
  return <BrandCardBase url="" img={starImage} alt="Star" video={starVideo} />;
};
