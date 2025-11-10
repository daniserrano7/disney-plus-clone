export const Pegi = ({ value }: Props) => {
  return (
    <span className="flex w-fit items-center justify-center rounded-sm bg-background-neutral px-1 py-0.5 font-bold text-xs">
      {value}
    </span>
  );
};

interface Props {
  value: string;
}
