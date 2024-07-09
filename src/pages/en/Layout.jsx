import { Outlet } from "react-router-dom";

import Content from "../../components/en/UI/Content";
import { LANG } from "../../util/front/language-check";

export default function Layout() {
  return (
    <>
      <div className="w-screen h-screen bg-black fixed z-10 max-[560px]:hidden text-2xl flex items-center justify-center px-2">
        {LANG
          ? "Available on mobile version only"
          : "Доступно только на мобильной версии"}
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-between bg-gradient-to-r from-[#73B9E0] to-[#5B68DF] sm:hidden">
        <Content>
          <Outlet />
        </Content>
      </div>
    </>
  );
}
