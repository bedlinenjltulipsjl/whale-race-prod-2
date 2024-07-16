/* eslint-disable react/no-unescaped-entities */
import { LANG } from "../../../util/front/language-check";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import WebApp from "@twa-dev/sdk";

export default function FaqModal({ onClose }) {
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
          className="w-full z-10 bg-[#081117] rounded-xl overflow-y-auto pb-6"
          style={{ height: "calc(100vh - 72px)" }}
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}
        >
          <div className="w-full px-6 text-center py-2 text-[14px] text-start flex flex-col gap-3">
            <h3 className="w-full text-center text-xl mt-4">How to earn?</h3>
            <p>
              To start earning money in the game, you need to buy the available
              levels.Top up your balance in the "Profile" section and start
              buying.
            </p>
            <p>Each level gives up to 370% profit</p>
            <p>You buy a level for $25 = you will get up to $92 profit</p>
            <p>
              The profit will be credited to your balance automatically when the
              filling scale reaches from 0 to 100% and a new cycle begins. To
              get 370% profit, 5 upgrades of the purchased level are required.
              Each level upgrade cycle yields 74% profit.
            </p>
            <div className="flex w-full items-center justify-center">
              <img src="./faqmodal1.png" alt="" className="w-1/2 ml-10" />
            </div>
            <p>
              Accrued profits can be withdrawn at any time without restrictions.
              The speed of filling the scale and updating the level depends only
              on the players. The scale moves when a new user buys a level. The
              more users buy a level, the more often and faster it is updated
              and brings profit to other users.
            </p>
            <p>
              Without new users, the process will stop, so the levels will give
              you money while people are talking about it, while everyone is
              playing, while people continue to buy levels and retain interest.
              Use your invitation link to increase your income and show it to
              other people.
            </p>
            <div className="flex w-full items-center justify-center">
              <img src="./faqmodal2.jpg" alt="" className="w-full" />
            </div>
            <p>
              You will find more detailed information in the "How to start"
              section in the main menu of the telegram bot. Also there you will
              find instructions on how to top up your balance.
            </p>
          </div>
          <div className="w-full flex items-center justify-center gap-2 py-4">
            <button
              onClick={closeModal}
              className="w-[40%] border-2 border-[rgba(102,129,226,0.81)] rounded-[48px] py-1"
            >
              {LANG ? "Okay" : "Закрыть"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
