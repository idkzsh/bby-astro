import NavLink from "./ui/NavLink";

export default function Nav() {
  return (
    <>
      <div className="w-48 h-screen bg-neutral-100 flex flex-col items-center pt-1">
        <img src="/bby-logo.png" alt="" className="w-[50px]" />
		<NavLink title="Log In"/>
      </div>
    </>
  );
}
