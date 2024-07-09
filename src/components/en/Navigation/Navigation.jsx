import NavItem from "./Nav-Item";
import FaqIcon from "../../icons/nav-icons/faq";
import ProfileIcon from "../../icons/nav-icons/profile";
import RacesIcon from "../../icons/nav-icons/races";
import TopUsersIcon from "../../icons/nav-icons/top-users";
import { LANG } from "../../../util/front/language-check";

export default function Navigation() {
  return (
    <nav className="w-full rounded-t-[15px] grid grid-cols-4 pt-[10px] pb-[2px] bg-[#081117] min-h-[72px] mt-2 absolute bottom-0 left-0 z-10 sm:hidden">
      <NavItem to="races" icon={<RacesIcon />}>
        {LANG ? "Races" : "Гонки"}
      </NavItem>
      <NavItem to="top-users" icon={<TopUsersIcon />}>
        {LANG ? "Top users" : "Топ игроки"}
      </NavItem>
      <NavItem to="profile" icon={<ProfileIcon />}>
        {LANG ? "Profile" : "Профиль"}
      </NavItem>
      {/* <NavItem to="tap">Tap</NavItem> */}
      <NavItem to="faq" icon={<FaqIcon />} faq>
        {LANG ? "FAQ" : "Вопросы"}
      </NavItem>
    </nav>
  );
}
