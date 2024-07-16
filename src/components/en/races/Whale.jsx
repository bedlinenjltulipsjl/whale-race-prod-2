import SmallCoinIcon from "../../icons/small-coin";
import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import { RiLock2Fill } from "react-icons/ri";
import SpecialWhale from "./SpecialWhale";
import { FaExclamation } from "react-icons/fa";

import { LANG } from "../../../util/front/language-check";

import Modal from "./Modal";
import LostProfit from "./LostProfit";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../util/back/requests";
import { updateUser } from "../../../store/user-slice";
import TimeLeft from "./TimeLeft";
import WhaleProgress from "./WhaleProgress";

dayjs.extend(utc);
dayjs.extend(duration);

export default function Whale({ whale, number, id, onShowMsg }) {
  const [showModal, setShowModal] = useState();
  const [lostProfit, setLostProfit] = useState();
  const [timeLeft, setTimeLeft] = useState();

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const nowLocal = dayjs();
    const nowUTC = nowLocal.utc();
    const targetDateUTC = dayjs.utc(whale.unlockDate);
    const diffInMs = targetDateUTC.diff(nowUTC);

    const diffInMinutes = dayjs.duration(diffInMs).asMinutes();
    setTimeLeft(Math.ceil(diffInMinutes) + 1);
  }, [whale.unlockDate]);

  useEffect(() => {
    if (timeLeft == 0) {
      const update = async () => {
        const user = await getUserInfo(token);
        if (user) {
          dispatch(updateUser(user));
        }
      };
      update();
    }
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prevMinutes) => prevMinutes - 1);
      }, 60000);

      return () => clearInterval(interval);
    }
  }, [timeLeft, dispatch, token]);

  if (whale.investModelStatus == "SPECIALS") {
    return <SpecialWhale whale={whale} number={number} />;
  }

  const animateOnClick = () => {
    setShowModal(true);
    WebApp.HapticFeedback.impactOccurred("light");
  };

  return (
    <>
      <div
        className={`relative w-full h-full whale ${whale.investModelStatus == "FROZEN" ? "contrast-50" : ""}`}
        id={id}
        onClick={animateOnClick}
      >
        <div
          className={`absolute inset-0 h-max z-0 ${whale.investModelStatus == "LOCKED" && "opacity-50"}`}
        >
          {(whale.investModelStatus == "LOCKED" ||
            whale.investModelStatus == "TIMELOCKED") && (
            <div
              className={`absolute z-1 text-[400%] text-white flex items-center justify-center h-full left-0 w-[78%] ${whale.investModelStatus == "TIMELOCKED" && "opacity-50"}`}
            >
              <RiLock2Fill />
            </div>
          )}
          {/* <div className="absolute -bottom-[5px] w-[68%] left-[5%] bg-red-600 h-[10px] rounded-md -z-[10]"></div> */}
          {whale.lostRefIncomeAmount > 0 && (
            <div className="absolute bottom-[-16px] w-[78%] flex items-center justify-center rounded-md text-white">
              <div
                className="bg-red-600 rounded-[50%] p-2 "
                onClick={(e) => {
                  e.stopPropagation();
                  setLostProfit(true);
                }}
              >
                <FaExclamation />
              </div>
            </div>
          )}

          <img
            src={`/whales/${number}.png`}
            alt="whale"
            className={`${whale.investModelStatus == "TIMELOCKED" && "opacity-50"}`}
          />
          {whale.investModelStatus == "TIMELOCKED" && (
            <TimeLeft timeLeft={timeLeft} />
          )}
        </div>

        <div className="absolute z-1 pt-[7px] px-[7px] w-[78%]">
          {whale.investModelStatus !== "LOCKED" &&
            whale.investModelStatus !== "TIMELOCKED" && (
              <div className="flex items-center justify-between w-full text-[10px]">
                <div className="">{whale.naming}</div>
                <div className="flex items-center gap-[2px]">
                  <SmallCoinIcon />
                  <div className="text-[10px]">{whale.priceAmount}</div>
                </div>
              </div>
            )}

          <div className="flex flex-col items-center justify-center w-full">
            {(whale.investModelStatus == "BOUGHT" ||
              whale.investModelStatus == "FINISHED" ||
              whale.investModelStatus == "FROZEN" ||
              whale.investModelStatus == "JUSTBOUGHT") && (
              <WhaleProgress whale={whale} />
            )}

            {(whale.investModelStatus == "AVAILABLE" ||
              whale.investModelStatus == "MONEYLOCKED") && (
              <button className="w-full text-[10px] button-buy-gradient text-black rounded-xl mt-[2px] shadow-md">
                {LANG ? "Buy" : "Купить"}
              </button>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          onShowMsg={onShowMsg}
          whale={whale}
          onClose={() => setShowModal(false)}
        />
      )}
      {lostProfit && (
        <LostProfit whale={whale} onClose={() => setLostProfit(false)} />
      )}
    </>
  );
}
