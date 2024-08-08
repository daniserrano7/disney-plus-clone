export const SmallCard = ({ url, img, alt }: Props) => {
  return (
    <a
      href={url}
      className="block aspect-video rounded shadow-card outline outline-0 transition-transform duration-300 ease-out hover:scale-105 hover:outline-[3px] hover:outline-offset-[3px] hover:outline-border"
    >
      <img src={img} alt={alt} className="rounded" />
    </a>
  );
};

export interface Props {
  url: string;
  img: string;
  alt: string;
}
