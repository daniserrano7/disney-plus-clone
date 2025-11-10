export const SectionWithTitle = ({ title, children }: Props) => {
  return (
    <>
      <h2 className="pl-[72px] font-bold text-2xl text-font-subtle">{title}</h2>
      {children}
    </>
  );
};

interface Props {
  title: string;
  children: React.ReactNode;
}
