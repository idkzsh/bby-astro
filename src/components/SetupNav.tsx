import NavLink from "./ui/NavLink";
import { CiMail } from "react-icons/ci";
import { IoHelp } from "react-icons/io5";
import { CiImport } from "react-icons/ci";

export default function Nav() {
  return (
    <div className="w-48 h-screen bg-neutral-100 flex flex-col items-center pt-1 cursor-pointer">
      <div
        hx-get="/"
        hx-target="body"
        hx-swap="outerHTML transition:true"
        hx-push-url="true"
      >
        <img src="/bby-logo.png" alt="" className="w-[50px]" />
      </div>

      <div className="flex flex-col gap-3 justify-between h-full py-4">
        <NavLink link="/" icon={<CiImport color="teal" />} title="Import" />
        <div className="flex flex-col gap-4">
          <NavLink
            link="/contact/"
            icon={<CiMail color="teal" />}
            title="Contact"
          />
          <NavLink link="/faq/" icon={<IoHelp color="teal" />} title="FAQs" />
          <button type="submit" form="setupForm">Next</button>
        </div>

      </div>
    </div>
  );
}
