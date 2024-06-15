import { RiLightbulbLine } from "react-icons/ri";
import NavCard from "./ui/NavCard";
import { CiMail } from "react-icons/ci";
import { IoHelp } from "react-icons/io5";

export default function IntroNav() {
  return (
    <>
      <NavCard
        link="/new/"
        icon={<RiLightbulbLine color="teal"/>}
        title="New SKUs"
      />
      <NavCard link="/contact/" icon={<CiMail color="teal"/>} title="Contact" />
      <NavCard link="/faq/" icon={<IoHelp color="teal"/>} title="FAQs" />
    </>
  );
}
