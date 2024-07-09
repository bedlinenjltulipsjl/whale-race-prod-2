import gsap from "gsap";
import { useEffect, useLayoutEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../util/back/requests";
import { updateUser } from "../../../store/user-slice";
import WebApp from "@twa-dev/sdk";
import { LANG } from "../../../util/front/language-check";

export default function CoinInfo({ idCoin, idText }) {
  const balance = useSelector((state) => state.user.info.balanceAmount);
  const token = useSelector((state) => state.auth.token);
  const [showText, setShowText] = useState();
  const [isLoading, setIsLoading] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (showText) {
      const anim = gsap.fromTo(
        "#show-message",
        { y: "-200px" },
        { y: 0, ease: "expo.in" },
      );
      return () => anim.kill();
    }
  }, [showText]);

  useLayoutEffect(() => {
    const coinAnimation = gsap.fromTo(
      `#${idCoin}`,
      { scale: 0, opacity: 0, rotation: 360 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
    );
    const textAnimation = gsap.fromTo(
      `#${idText},.update-icon`,
      { opacity: 0, y: -150 },
      { opacity: 1, y: 0, duration: 0.4, ease: "back.out(2)" },
    );

    return () => {
      coinAnimation.kill();
      textAnimation.kill();
    };
  }, [idCoin, idText]);

  const updateHandler = async () => {
    if (!isLoading) {
      WebApp.HapticFeedback.impactOccurred("soft");
      setIsLoading(true);
      const user = await getUserInfo(token);
      dispatch(updateUser(user));

      setShowText(true);
      setTimeout(() => {
        gsap.fromTo(
          "#show-message",
          { y: 0 },
          {
            y: "-200px",
            onComplete: () => {
              setShowText(false);
              setIsLoading(false);
            },
          },
        );
      }, 1000);
    }
  };

  return (
    <div className="flex item-center mt-[-14px] w-full justify-center">
      {showText && (
        <div
          id="show-message"
          className="fixed top-0  rounded-b-xl bg-gray-900/60 w-screen left-0 flex items-center justify-center p-4"
        >
          {LANG ? "Successfully updated" : "Успешно обновлено"}
        </div>
      )}

      <div className="flex items-center text-[20px] " id={idText}>
        {LANG ? "Balance:" : "Баланс:"} {balance ? balance.toFixed(2) : 0}
      </div>
      <img
        onClick={updateHandler}
        src="/coin.png"
        alt=""
        className="w-[66px] h-[66px] mt-[-6px] ml-[-8px]"
        id={idCoin}
      />
      {/* <div
        className="flex items-center justify-center text-xl ml-2 update-icon p-2"
        onClick={updateHandler}
      >
        <GrUpdate />
      </div> */}
    </div>
  );
}
