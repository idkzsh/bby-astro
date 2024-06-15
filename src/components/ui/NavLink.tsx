interface Props {
  title: string;
  link: string;
  icon: React.ReactNode;
}

export default function NavLink({ title, icon, link }: Props) {
  return (
    <div hx-push-url="true" hx-get={link} hx-target="body" hx-swap="outerHTML transition:true" className="w-40 h-8 px-1 flex items-center hover:bg-neutral-200 rounded-md text-sm tracking-tight gap-2">
      {icon}{title}
    </div>
  );
}
