import { useEffect, useState } from "react";
import {
  CoinGray,
  SpecialWhaleBlockGray,
} from "../../icons/special-whale-block";
import Status from "./Status";
import { useDispatch, useSelector } from "react-redux";
import WebApp from "@twa-dev/sdk";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
import { getUserInfo, updateTable } from "../../../util/back/requests";
import { v4 as uuidv4 } from "uuid";
import gsap from "gsap";
import { LANG } from "../../../util/front/language-check";
import { updateUser } from "../../../store/user-slice";
import SmallCoinIcon from "../../icons/small-coin";
dayjs.extend(utc);
dayjs.extend(duration);

export default function LockedWhale({ whale }) {
  const [showStatus, setShowStatus] = useState();
  const [isLoading, setIsLoading] = useState();
  const [showText, setShowText] = useState();
  const token = useSelector((state) => state.auth.token);
  const [timeLeft, setTimeLeft] = useState();
  const dispatch = useDispatch();
  const id = uuidv4();
  useEffect(() => {
    const nowLocal = dayjs();
    const nowUTC = nowLocal.utc();
    const targetDateUTC = dayjs.utc(whale.unlockDate);
    const diffInMs = targetDateUTC.diff(nowUTC);

    const diffInMinutes = dayjs.duration(diffInMs).asMinutes();
    setTimeLeft(Math.ceil(diffInMinutes) + 1);
  }, [whale.unlockDate]);

  useEffect(() => {
    if (whale.investModelStatus == "TIMELOCKED") {
      gsap.fromTo(".text-time-left", { opacity: 0 }, { opacity: 1 });
    }
  }, [whale]);

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
  }, [timeLeft]);

  const clickHandler = () => {
    setShowStatus(true);
    setTimeout(() => setShowStatus(false), 2000);
  };

  function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
  }

  useEffect(() => {
    if (showText) {
      const anim = gsap.fromTo(
        "#show-message2",
        { y: "-200px" },
        { y: 0, ease: "expo.in" },
      );
      return () => anim.kill();
    }
  }, [showText]);

  const buyWhale = async () => {
    WebApp.HapticFeedback.impactOccurred("soft");
    setIsLoading(true);
    const updated = await updateTable(token, whale.investModelLevel);
    if (updated) {
      const user = await getUserInfo(token);
      if (user) {
        dispatch(updateUser(user));
      }
    } else {
      setIsLoading(false);
      setShowText(true);
      setTimeout(() => {
        gsap.fromTo(
          "#show-message",
          { y: 0 },
          { y: "-200px", onComplete: () => setShowText(false) },
        );
      }, 4000);
    }
  };

  return (
    <>
      {showText && (
        <div
          id="show-message2"
          className="fixed top-0  rounded-b-xl bg-gray-900/80 w-screen left-0 flex items-center justify-center p-4 text-center text-red-600"
        >
          {LANG
            ? "Table purchase error occurred, try again later."
            : "Произошла ошибка покупи стола, попробуйте позже"}
        </div>
      )}
      <div
        className="relative w-full h-full whale"
        id={id}
        onClick={clickHandler}
      >
        <img
          src={`/whales/blocked.png`}
          alt="whale"
          className="absolute inset-0 z-0 w-full"
        />
        <div className="absolute z-1 pt-[7px] px-[7px] w-[78%]">
          <div className="w-full flex items-center justify-between">
            <SpecialWhaleBlockGray />
            {whale.investModelStatus == "MONEYLOCKED" ||
            whale.investModelStatus == "AVAILABLE" ||
            whale.investModelStatus == "TIMELOCKED" ? (
              <div className="flex items-center gap-[2px]">
                <SmallCoinIcon />
                <div className="text-[10px]">{whale.priceAmount}</div>
              </div>
            ) : (
              <CoinGray />
            )}
          </div>
          <div className="text-center w-full text-[6px] mt-[9px] text-[#D9D9D91A]/10">
            {LANG ? "Current fine fill" : "Текущее наполнение"}
          </div>
          <div className="w-full bg-[rgba(217,217,217,0.1)] border-[1px] border-[rgba(44,47,53,0.6)] rounded-[2px] h-[5px] mt-[4px]"></div>
          <div className="text-[#D9D9D980]/50 text-[15px] w-full text-center mt-[2px]">
            {whale.investModelStatus == "AVAILABLE" ? (
              <button
                className="button-for-invite w-full py-[1px] text-center text-[9px] text-black"
                onClick={(e) => {
                  e.stopPropagation();
                  buyWhale();
                }}
              >
                {LANG
                  ? isLoading
                    ? "Buying..."
                    : "Buy"
                  : isLoading
                    ? "Покупка..."
                    : "Купить"}
              </button>
            ) : whale.investModelStatus == "TIMELOCKED" ? (
              <div className="text-white text-time-left">
                {!isNaN(timeLeft) ? formatTime(timeLeft) : "timelocked"}
              </div>
            ) : whale.investModelStatus == "MONEYLOCKED" ? (
              <button className="button-for-invite w-full py-[1px] text-center text-[9px] text-black opacity-[.5]">
                {LANG ? "Buy" : "Купить"}
              </button>
            ) : (
              "0%"
            )}
          </div>
        </div>
        {showStatus && (
          <div className="absolute bottom-full w-[78%] text-[12px] left-0 text-center">
            <Status status={whale.investModelStatus} />
          </div>
        )}
      </div>
    </>
  );
}
