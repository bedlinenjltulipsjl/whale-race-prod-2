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
      className="border-invite-friend w-full relative flex p-[14px] rounded-[69px] items-center justify-center gap-[10px]"
      id="invite-gift-friends"
    >
      <img src="/icons/gift.png" alt="gift" className="w-[50px] h-[50px]" />
      <div className="text-[14px] text-center">
        <h3>
          {LANG ? (
            <div>
              Send your friends referral link to get up to{" "}
              <span className="gradient-for-top-users-days text-[15px]">
                {" "}
                26%{" "}
              </span>{" "}
              of his earnings.
            </div>
          ) : (
            <div>
              Отправьте друзьям ссылку и получайте
              <span className="gradient-for-top-users-days text-[15px]">
                {" "}
                26%{" "}
              </span>{" "}
              от их заработка.
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
