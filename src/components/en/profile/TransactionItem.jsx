import { formatText } from "../../../util/front/formatText";
import { LANG } from "../../../util/front/language-check";
import WhaleIconWhite from "../../icons/whale-icon-white";

export default function TransactionItem({ data }) {
  return (
    <>
      <div className="w-full relative">
        {data.transactionType == "INCOME" && data.incomeType == "LOST" && (
          <div className="absolute left-0 flex justify-center h-full top-[-10px] w-full z-1 text-sm">
            {LANG
              ? "Buy a level to get the reward"
              : "Купите уровень для получения награды"}
          </div>
        )}

        <div
          className={`w-full flex items-center justify-between px-[25px] py-[12px] border-[1px] border-gray-400 rounded-[56px] bg-[rgba(32,32,32,0.13)]
        ${data.transactionType == "INCOME" && data.incomeType == "MAIN" && "shadow-[0px_4px_5.5px_0px_#82EB67_inset]"}
        ${data.transactionType == "INCOME" && data.incomeType == "REGISTRATION" && "shadow-[0px_4px_5.5px_0px_#70de64_inset]"}
        ${data.transactionType == "INCOME" && data.incomeType == "REFERRAL" && "shadow-[0px_4px_5.5px_0px_#64785f_inset]"}
         ${data.transactionType == "INCOME" && data.incomeType == "ADMIN" && "shadow-[0px_4px_5.5px_0px_#ffff00_inset]"}
         ${data.transactionType == "INCOME" && data.incomeType == "LOST" && "shadow-[0px_4px_5.5px_0px_#82EB67_inset] opacity-[.5]"}
        ${data.transactionType == "DEPOSIT" && "shadow-[0px_4px_5.5px_0px_#168BD8_inset]"}
        ${data.transactionType == "WITHDRAW" && "shadow-[0px_4px_5.5px_0px_#FF5C00_inset]"}
        ${data.transactionType == "PURCHASE" && "shadow-[0px_4px_5.5px_0px_#C22A2A_inset]"}`}
        >
          <div className="flex items-center gap-[15px] w-[70%]">
            <WhaleIconWhite />
            <div className="w-[70%]">
              <div className="text-[12px]">
                {formatText(data.transactionType)}
              </div>
              <div className="text-[9px]">{data.description}</div>
            </div>
          </div>
          <div
            className={`text-[14px] w-max
                ${data.transactionType == "INCOME" && "text-[#82EB67]"} 
                ${data.transactionType == "DEPOSIT" && "text-[#168BD8]"} 
                ${data.transactionType == "PURCHASE" && "text-[#EB6767]"} 
                ${data.transactionType == "WITHDRAW" && "text-[#FF5C00]"}`}
          >
            {(data.transactionType == "PURCHASE" ||
              data.transactionType == "WITHDRAW") &&
              " - "}
            {data.transactionAmount.toFixed(2)} $
          </div>
        </div>
      </div>
    </>
  );
}
/* Rectangle 4563 */
