import { useEffect } from "react";
import CircleIcon from "../../icons/circle";
import PlusIcon from "../../icons/plus";
import gsap from "gsap";
import WebApp from "@twa-dev/sdk";
import { LANG } from "../../../util/front/language-check";
import { useSelector } from "react-redux";
import { PAYMENT_URL } from "../../../util/back/requests.js";

export default function MoneyButtons() {
  const userBalance = useSelector((state) => state.user.info.balanceAmount);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    gsap.fromTo(
      "#money-deposit-button",
      { x: -140 },
      { x: 0, duration: 0.3, ease: "back.out(1)" },
    );
    gsap.fromTo(
      "#withdraw-money-button",
      { x: 140 },
      { x: 0, duration: 0.3, ease: "back.out(1)" },
    );
  }, []);

  const params = new URLSearchParams(window.location.search);
  const login = params.get("data");
  const pass = params.get("pmain");
  const lang = params.get("lang");

  const moneyDeposit = () => {
    WebApp.HapticFeedback.impactOccurred("light");
    window.location.href = `${PAYMENT_URL}?mode=deposit&data=${login}&login=${login}&pass=${pass}&lang=${lang}`;
  };
  const moneyWithdraw = () => {
    WebApp.HapticFeedback.impactOccurred("light");
    window.location.href = `${PAYMENT_URL}?mode=withdraw&balance=${userBalance}&data=${token}&login=${login}&pass=${pass}&lang=${lang}`;
  };

  return (
    <div className="w-full flex gap-4 text-[11px]">
      <button
        className="relative flex w-1/2 border-gradient-money rounded-[24px] items-center py-[10px] items-center justify-center gap-[8px]"
        id="money-deposit-button"
        onClick={moneyDeposit}
      >
        <PlusIcon />
        <div>{LANG ? "Money deposit" : "Пополнить счёт"}</div>
      </button>
      <button
        onClick={moneyWithdraw}
        className="relative flex w-1/2 border-gradient-money rounded-[24px] items-center py-[10px] items-center justify-center gap-[8px]"
        id="withdraw-money-button"
      >
        <CircleIcon />
        <div>{LANG ? "Withdraw money" : "Снять деньги"}</div>
      </button>
    </div>
  );
}
