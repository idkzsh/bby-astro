interface Props {
  title: string;
}

export default function NavLink({ title }: Props) {
  return (
    <div className="w-40 h-8 px-3 flex items-center hover:bg-neutral-200 rounded-md text-sm tracking-tight">
      {title}
    </div>
  );
}
