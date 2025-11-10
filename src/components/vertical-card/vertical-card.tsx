export const VerticalCard = ({ url, img, alt }: Props) => {
  return (
    <a
      href={url}
      className="block h-[338px] w-[240px] rounded shadow-card outline outline-0 transition-transform duration-300 ease-out hover:scale-105 hover:outline-[3px] hover:outline-offset-[3px] hover:outline-border"
    >
      <img src={img} alt={alt} className="rounded" />
    </a>
  );
};

interface Props {
  url: string;
  img: string;
  alt: string;
}
