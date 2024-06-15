interface Props {
  title: string;
  link: string;
  icon: React.ReactNode;
}

export default function NavCard({ title, icon, link }: Props) {
  return (
    <div
      hx-push-url="true"
      hx-get={link}
      hx-target="body"
      hx-swap="outerHTML transition:true"
      className="flex flex-col justify-center items-center w-32 h-32 border rounded-md shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-0 ease-in text-base font-normal tracking-tight gap-4 cursor-pointer"
    >
      {title} {icon}
    </div>
  );
}
