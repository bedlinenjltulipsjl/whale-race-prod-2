import gsap from "gsap";
import { useEffect } from "react";
import { LANG } from "../../../util/front/language-check";

export default function InviteGift() {
  useEffect(() => {
    const itemAnimation = gsap.fromTo(
      "#invite-gift-friends",
      { x: 20 },
      { x: 0, duration: 0.5, ease: "bounce.out" },
    );
    return () => itemAnimation.kill();
  }, []);

  return (
    <div
      className="border-invite-friend w-full relative flex p-[8px] rounded-[69px] items-center justify-center gap-[4px]"
      id="invite-gift-friends"
    >
      <img src="/icons/gift.png" alt="gift" className="w-[50px] h-[50px]" />
      <div className="text-[14px] text-center">
        <h3>
          {LANG ? (
            <div className="text-[12px] px-4">
              Send an invitation link to a friend = get{" "}
              <span className="gradient-for-top-users-days text-[14px]">
                $0.7{" "}
              </span>
              instantly! of his earnings.
              <div className="text-[11px]">
                Also, you will receive up to{" "}
                <span className="gradient-for-top-users-days text-[14px]">
                  26%{" "}
                </span>{" "}
                profit from the turnover of your referrals.
              </div>
            </div>
          ) : (
            <div className="text-[12px] ">
              Send an invitation link to a friend = get{" "}
              <span className="gradient-for-top-users-days text-[12px]">
                $0.7{" "}
              </span>
              instantly! of his earnings.
              <div className="text-[11px]">
                Also, you will receive up to{" "}
                <span className="gradient-for-top-users-days text-[12px]">
                  26%{" "}
                </span>{" "}
                profit from the turnover of your referrals.
              </div>
            </div>
          )}
        </h3>
        {/* <p>
          <span className="gradient-for-top-users-days">+5,000</span>{" "}
          {LANG ? "for you and your friend" : "для тебя и твоего друга"}
        </p> */}
      </div>
    </div>
  );
}
