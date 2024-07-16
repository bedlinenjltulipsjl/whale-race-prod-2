import { LANG } from "../../../util/front/language-check";

export default function TimeLeft({ timeLeft }) {
  function formatTime(minutes) {
    const days = Math.floor(minutes / 1440);
    const hours = Math.floor((minutes % 1440) / 60);
    return `${String(days).padStart(2, "0")}${LANG ? "d" : "д"} ${String(hours).padStart(2, "0")}${LANG ? "h" : "ч"}`;
  }

  return (
    <div className="flex items-center flex-col bottom-[-7px] absolute z-1 w-[78%]">
      <div className="text-[8px] bg-[#2a7ac3] px-1 py-[1px] rounded-xl">
        {LANG ? "Open in:" : "Откр."}{" "}
        <span className="text-[10px]">
          {!isNaN(timeLeft) ? formatTime(timeLeft) : "future"}
        </span>
      </div>
    </div>
  );
}
