/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import Whale from "./Whale";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { LANG } from "../../../util/front/language-check";

export default function Whales() {
  const [showText, setShowText] = useState();
  const user = useSelector((state) => state.user);
  if (user.status !== "succeeded") {
    return <Navigate to="loading" />;
  }
  useEffect(() => {
    if (showText) {
      const anim = gsap.fromTo(
        "#show-message2",
        { y: "-200px" },
        { y: 0, ease: "expo.in" },
      );
      setTimeout(() => {
        gsap.fromTo(
          "#show-message",
          { y: 0 },
          { y: "-200px", onComplete: () => setShowText(false) },
        );
      }, 4000);
      return () => anim.kill();
    }
  }, [showText]);

  useEffect(() => {
    gsap.fromTo(
      ".whale",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.03,
        ease: "back.out(1.7)",
      },
    );
  }, []);
  const whales = useSelector((state) => state.user.info.investModels);

  return (
    <>
      {showText && (
        <div
          id="show-message2"
          className="fixed top-0  rounded-b-xl bg-gray-900/80 w-screen left-0 flex items-center justify-center p-4 text-center z-10"
        >
          {LANG
            ? `You have successfully purchased a - ${showText}`
            : `Вы успешно приобрели - ${showText}`}
        </div>
      )}
      <div
        className="w-full h-full pr-[0px] pl-[26px] grid grid-cols-3 gap-x-[4px] gap-y-[120px] overflow-y-auto overflow-x-hidden pt-[24px]"
        id="whales-list"
      >
        {whales.map((whale, index) => (
          <Whale
            onShowMsg={(whale) => setShowText(whale)}
            key={index + Math.random() * 100}
            whale={whale}
            number={index + 1}
            id={`whale-${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
