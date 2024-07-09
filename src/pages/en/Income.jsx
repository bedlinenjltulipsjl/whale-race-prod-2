import { useEffect } from "react";
import Title from "../../components/en/UI/Title";
import TransactionItem from "../../components/en/profile/TransactionItem";
import gsap from "gsap";
import CloseButton from "../../components/en/UI/CloseButton";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { groupTransactionsByDate } from "../../util/front/groupTransactionsByDate";
import { LANG } from "../../util/front/language-check";

export default function Income() {
  const user = useSelector((state) => state.user);
  if (user.status !== "succeeded") {
    return <Navigate to="loading" />;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const transactions = useSelector((state) => state.user.info.transactions);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const anim = gsap.fromTo(
      "#income-wrapper",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "back.out(2)" },
    );
    return () => anim.kill();
  }, []);

  const filteredTransactions = transactions
    ? transactions.filter(
        (el) =>
          el.transactionType === "INCOME" || el.transactionType === "DEPOSIT",
      )
    : [];

  const groupedTransactions = groupTransactionsByDate(filteredTransactions);

  return (
    <>
      <Title>{LANG ? "Income" : "Доход"}</Title>
      <CloseButton />
      <div
        className="w-full px-[20px] mt-2 h-full overflow-y-auto flex flex-col gap-[15px]"
        id="income-wrapper"
      >
        {!transactions || filteredTransactions.length === 0 ? (
          <div className="text-center">
            {LANG ? "No transactions yet..." : "Пока ещё нет транзакций..."}
          </div>
        ) : (
          Object.keys(groupedTransactions).map((date) => (
            <div key={date}>
              <h3 className="font-bold w-full text-center py-2 text-[15px]">
                {date}
              </h3>
              <div className="flex flex-col gap-[15px]">
                {groupedTransactions[date].map((item, index) => (
                  <TransactionItem
                    key={index + "s" + Math.random() * 100}
                    data={item}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
