export const SmallCard = ({ url, img, alt }: Props) => {
  return (
    <a
      href={url}
      className="w-[240px] h-[135px] outline outline-0 hover:outline-[3px] hover:outline-border hover:outline-offset-[3px] rounded shadow-card hover:scale-105 ease-out transition-transform duration-300"
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
