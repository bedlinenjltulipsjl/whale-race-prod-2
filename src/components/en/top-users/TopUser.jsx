import { useEffect } from "react";

import CrownIcon from "../../icons/crown";
import WhaleIcon from "../../icons/whale-icon";

import gsap from "gsap";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { LANG } from "../../../util/front/language-check";
dayjs.extend(utc);

export default function TopUser({ user, first }) {
  useEffect(() => {
    const itemAnimation = gsap.fromTo(
      ".top-user-item",
      { x: 140 },
      { x: 0, duration: 0.5, ease: "back.out(2)" },
    );
    return () => itemAnimation.kill();
  }, []);

  const filteredDate = user.createdAt.split("T")[0];

  const registered = dayjs(filteredDate);

  const now = dayjs().utc();
  const daysRegisterd = now.diff(registered, "day");

  return (
    <div
      className={`top-user-item ${first ? "border-gradient-top-first" : "border-gradient-top"} w-full relative  rounded-[24px] py-[13px] px-[20px]`}
    >
      {first && (
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2">
          <CrownIcon />
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <div
            className={`${first ? "top-user-icon-first" : "top-user-icon"} flex items-center justify-center`}
          >
            <WhaleIcon />
          </div>
          <div className="text-[12px]">{user.name}</div>
        </div>
        <div className="text-white/50 font-['Gilroy-500'] text-[12px] ">
          {LANG ? "Position:" : "Позиция"}
          <span
            className={`${first ? "gradient-for-pos-first" : "gradient-for-pos"} text-[30px] ml-[9px] font-['Gilroy-700']`}
          >
            {user.pos}
          </span>
        </div>
      </div>
      <div className="flex justify-between px-[20px] text-white/80 mt-[2px]">
        <div>
          <div className="text-[10px] font-['Gilroy-500'] text-center">
            {LANG ? "Invested" : "Инвестировано"}
          </div>
          <div className="text-[#82EB67] text-[14px] font-['Gilroy-700'] text-center">
            {user.investedAmount.toFixed(2)} $
          </div>
        </div>
        <div>
          <div className="text-[10px] font-['Gilroy-500'] text-center">
            {LANG ? "Money earned" : "Заработано денег"}
          </div>
          <div className="text-[#82EB67] text-[14px] font-['Gilroy-700'] text-center">
            {user.earnedAmount.toFixed(2)} $
          </div>
        </div>
        <div>
          <div className="text-[10px] font-['Gilroy-500'] text-center">
            {LANG ? "Days in the project" : "Дней в проекте"}
          </div>
          <div className="gradient-for-top-users-days text-[14px] font-['Gilroy-700'] text-center">
            {daysRegisterd > 0 ? daysRegisterd : 1} {LANG ? "d" : "д"}
          </div>
        </div>
      </div>
    </div>
  );
}
