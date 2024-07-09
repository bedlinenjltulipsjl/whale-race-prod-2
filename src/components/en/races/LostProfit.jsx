/* eslint-disable react/no-unescaped-entities */
import { LANG } from "../../../util/front/language-check";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import WebApp from "@twa-dev/sdk";

export default function LostProfit({ whale, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef) {
      const anim = gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -200 },
        { opacity: 1, y: 0, duration: 0.4 },
      );
      return () => anim.kill();
    }
  }, [modalRef]);

  const closeModal = () => {
    WebApp.HapticFeedback.impactOccurred("light");
    if (modalRef) {
      const anim = gsap.fromTo(
        modalRef.current,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -200, duration: 0.4, onComplete: () => onClose() },
      );
      return () => anim.kill();
    }
  };

  return (
    <>
      <div
        className="w-screen h-screen fixed top-0 left-0 z-10 flex items-center justify-center mt-[-40px] bg-black/60"
        onClick={closeModal}
      >
        <div
          className="w-[90%] bg-[#081117] rounded-xl"
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}
        >
          <h3 className="w-full text-center py-2 border-b-[1px] border-gray-600">
            {whale && whale.naming.toUpperCase()}
          </h3>
          <div className="w-full px-4 text-center py-2">
            {LANG ? (
              <div>
                <h3>
                  You're missing out- {whale.lostRefIncomeAmount.toFixed(2)} $
                </h3>
                <p>By referral system. Buy a level to get profit.</p>
              </div>
            ) : (
              <div>
                <h3>Вы упускаете - {whale.lostRefIncomeAmount.toFixed(2)} $</h3>
                <p>
                  По реферальной системе. Купите уровень чтобы дополучить
                  прибыль.
                </p>
              </div>
            )}
          </div>
          <div className="w-full flex items-center justify-center gap-2 py-4">
            <button
              onClick={closeModal}
              className="w-[40%] border-2 border-[rgba(102,129,226,0.81)] rounded-[48px] py-1"
            >
              {LANG ? "Close" : "Закрыть"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
