import ProgressBar from "@ramonak/react-progress-bar";
import { LANG } from "../../../util/front/language-check";
import { getPercent } from "../../../util/front/getPercent";
import SmallCoinIcon from "../../icons/small-coin";

export default function WhaleProgress({ whale }) {
  const percent = getPercent(
    whale.cyclesCount,
    whale.cyclesBeforeFinishedNumber,
  );

  const coinPercent = getPercent(
    whale.receivedBonusAtCycle,
    whale.cyclesBeforeFinishedNumber,
  );

  return (
    <>
      <div className="text-[6px] text-center">
        {LANG ? "Current fine fill" : "Текущее наполнение"}
      </div>
      <ProgressBar
        completed={percent}
        animateOnRender
        isLabelVisible={false}
        height="5px"
        borderRadius="33px"
        customLabel=" "
        bgColor={`${whale.investModelStatus !== "JUSTBOUGHT" ? "linear-gradient(90deg, #82A7E0 0%, #80E0E3 100%)" : "#808080"}`}
        baseBgColor="inherit"
        className="mt-[2px] border-[#2C2F3566] border-[1px] rounded-[33px] w-full"
      />
      {whale.isReceivedBonus && (
        <div className={`mt-[-7px] h-[7px] w-full relative`}>
          <div
            className={`absolute w-[7px] h-[7px] -translate-x-1/2`}
            style={{ left: coinPercent + "%" }}
          >
            <SmallCoinIcon />
          </div>
        </div>
      )}

      <div className="w-full text-end text-[11px] mt-[1px]">{percent} %</div>
    </>
  );
}
