import { NavLink, useLocation } from "react-router-dom";
import Border from "../../icons/nav-icons/border";
import WebApp from "@twa-dev/sdk";

export default function NavItem({ children, to, icon }) {
  const location = useLocation();
  const { pathname } = location;

  const setVibro = () => {
    WebApp.HapticFeedback.impactOccurred("soft");
  };

  return (
    <NavLink
      to={to}
      onClick={setVibro}
      className={`relative scale-[.85] flex items-center justify-end flex-col gap-[13px] text-[11px] ${pathname.includes(to) ? "text-white" : "text-[#D9D9D94D]"} `}
    >
      <div className="absolute top-[14px] left-1/2 -translate-y-1/2 -translate-x-1/2">
        {icon}
      </div>
      <div className={`text-center`}>
        <div className={`px-2 ${!pathname.includes(to) ? "mb-[-6px]" : ""}`}>
          {children}
        </div>
        {pathname.includes(to) ? (
          <Border />
        ) : (
          <div className="h-[3px] mt-[15px]"></div>
        )}
      </div>
    </NavLink>
  );
}
