import { useEffect, useState } from "react";
import gsap from "gsap";
import ArrowUp from "../../icons/arrow-up";
import { Link } from "react-router-dom";
import WhaleIconWhite from "../../icons/whale-icon-white";
import { useSelector } from "react-redux";
import { formatText } from "../../../util/front/formatText";
import WebApp from "@twa-dev/sdk";
import { LANG } from "../../../util/front/language-check";

export default function SwitcherCheckMoney() {
  const [switcher, setSwitcher] = useState();
  const transactions = useSelector((state) => state.user.info.transactions);

  const firstIncomeOrDeposit = transactions
    ? transactions.find(
        (transaction) =>
          transaction.transactionType === "INCOME" ||
          transaction.transactionType === "DEPOSIT",
      )
    : null;
  const firstPurchaseOrWithdraw = transactions
    ? transactions.find(
        (transaction) =>
          transaction.transactionType === "PURCHASE" ||
          transaction.transactionType === "WITHDRAW",
      )
    : null;

  useEffect(() => {
    const itemAnimation = gsap.fromTo(
      "#arrow-for-all",
      { y: 60 },
      { y: 0, duration: 0.5, ease: "back.out" },
    );

    const incomeInfoAnimation = gsap.fromTo(
      "#purchase-info",
      { opacity: 0 },
      { opacity: 1 },
    );
    return () => {
      itemAnimation.kill();
      incomeInfoAnimation.kill();
    };
  }, []);

  const switchLeft = () => {
    WebApp.HapticFeedback.impactOccurred("soft");
    setSwitcher(false);
    switcher && gsap.fromTo("#switcher", { left: "50%" }, { left: 0 });
  };
  const switchRight = () => {
    WebApp.HapticFeedback.impactOccurred("soft");
    setSwitcher(true);
    !switcher && gsap.fromTo("#switcher", { left: 0 }, { left: "50%" });
  };

  return (
    <div className="w-full">
      {/* SWITCHER BUTTONS */}
      <div
        className="flex border-gradient-switcher rounded-[69px]"
        id="switcher-buttons-for-money"
      >
        <button className="w-1/2 text-center py-[15px]" onClick={switchLeft}>
          {LANG ? "Purchase" : "Покупки"}
        </button>
        <button className="w-1/2 text-center py-[15px]" onClick={switchRight}>
          {LANG ? "Income" : "Доход"}
        </button>
        <span
          className="button-for-invite absolute left-0 w-1/2 h-full z-[-1]"
          id="switcher"
        ></span>
      </div>

      {/* LAST INFO */}

      {switcher ? (
        // INCOME
        <div
          className="w-full flex justify-between bg-[rgba(32,32,32,0.13)] 
                  shadow-[inset_0px_4px_5.5px_rgba(255,255,255,0.36)] 
                  rounded-[157px] px-[25px] py-[16px] 
                  mt-4 relative z-1"
        >
          <div className="flex items-center gap-[16px] w-full">
            {firstIncomeOrDeposit ? (
              <>
                <WhaleIconWhite />
                <div className="w-[50%]">
                  <p className="text-[12px]">
                    {formatText(firstIncomeOrDeposit.transactionType)}
                  </p>
                  <p className="text-[8px]">
                    {firstIncomeOrDeposit.description}
                  </p>
                </div>
                <div className="text-[#82EB67] text-['Gilroy-700']">
                  {firstIncomeOrDeposit.transactionAmount.toFixed(2)} $
                </div>
              </>
            ) : (
              <div className="w-full text-center">
                {LANG ? "No transactions yet" : "Пока ещё нет транзакций"}
              </div>
            )}
          </div>
        </div>
      ) : (
        // Purchase
        <div
          className="w-full flex justify-between bg-[rgba(32,32,32,0.13)] 
                  shadow-[inset_0px_4px_5.5px_rgba(255,255,255,0.36)] 
                  rounded-[157px] px-[25px] py-[16px]
                  mt-4 relative z-1"
          id="purchase-info"
        >
          <div className="flex items-center gap-[16px] w-[100%]">
            {firstPurchaseOrWithdraw ? (
              <>
                <WhaleIconWhite />
                <div className="w-[50%]">
                  <p className="text-[12px]">
                    {formatText(firstPurchaseOrWithdraw.transactionType)}
                  </p>
                  <p className="text-[8px]">
                    {firstPurchaseOrWithdraw.description}
                  </p>
                </div>
                <div className="text-[#FF5C00] text-['Gilroy-700']">
                  - {firstPurchaseOrWithdraw.transactionAmount.toFixed(2)} $
                </div>
              </>
            ) : (
              <div className="w-full text-center">
                {LANG ? "No transactions yet" : "Пока ещё нет транзакций"}
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW ALL TRANSACTIONS */}
      <Link
        to={`${switcher ? "income" : "purchase"}`}
        onClick={() => WebApp.HapticFeedback.impactOccurred("soft")}
        id="arrow-for-all"
        className="flex items-center justify-center flex-col mt-4 w-full gap-1"
      >
        <ArrowUp />
        <div className="text-[15px]">
          {LANG ? "View all transaction" : "Посмотреть все транзакции"}
        </div>
      </Link>
    </div>
  );
}

/* Rectangle 4563 */

// background: rgba(32, 32, 32, 0.13);
// box-shadow: inset 0px 4px 5.5px rgba(255, 255, 255, 0.36);
// backdrop-filter: blur(13.8px);
/* Note: backdrop-filter has minimal browser support */
// border-radius: 157px;
