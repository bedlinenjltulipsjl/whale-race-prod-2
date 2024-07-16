import { useDispatch, useSelector } from "react-redux";
import { LANG } from "../../../util/front/language-check";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import WebApp from "@twa-dev/sdk";
import { getUserInfo, updateTable } from "../../../util/back/requests";
import { updateUser } from "../../../store/user-slice";

export default function Modal({ whale, onClose, onShowMsg, lostProfit }) {
  const balance = useSelector((state) => state.user.info.balanceAmount);
  const token = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState();
  const [isMoney, setIsMoney] = useState();
  const [isError, setIsError] = useState();
  const dispatch = useDispatch();
  const avaliableWhale =
    whale.investModelStatus == "AVAILABLE" && whale.priceAmount <= balance;
  const moneyWhale =
    whale.investModelStatus == "AVAILABLE" && whale.priceAmount > balance;
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

  const buyWhale = async () => {
    WebApp.HapticFeedback.impactOccurred("soft");
    setIsLoading(true);
    const updated = await updateTable(token, whale.investModelLevel);
    if (updated) {
      const user = await getUserInfo(token);
      if (user) {
        setIsLoading(false);
        dispatch(updateUser(user));
        onShowMsg(whale.naming);
      }
    } else {
      setIsLoading(false);
      setIsError(true);
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
            {lostProfit && (
              <>
                <div>Test</div>
              </>
            )}
            {avaliableWhale && (
              <>
                <div>
                  {isLoading && !isError && (
                    <div>
                      {LANG ? "Buying a table ..." : "Покупка стола ..."}
                    </div>
                  )}
                </div>
                <div>
                  {!isLoading && !isError && (
                    <div>
                      {LANG
                        ? `Do you really want to buy - ${whale.naming} ?`
                        : `Вы действительно хотите приобрести - ${whale.naming} ?`}
                    </div>
                  )}
                </div>
                <div>
                  {isError && (
                    <div>
                      {LANG
                        ? "A table purchase error occurred, try again later"
                        : "Произошла ошибка покупи стола, попробуйте позже"}
                    </div>
                  )}
                </div>
              </>
            )}
            {moneyWhale &&
              (!isMoney ? (
                <div>
                  {LANG
                    ? `Do you really want to buy - ${whale.naming} ?`
                    : `Вы действительно хотите приобрести - ${whale.naming} ?`}
                </div>
              ) : (
                <div>
                  {LANG
                    ? "Not enough money to buy the level, replenish the balance"
                    : "Пополните баланс, недостаточно средств"}
                </div>
              ))}
            {whale.investModelStatus == "FINISHED" && (
              <div>
                {LANG
                  ? "You have successfully completed this level."
                  : "Вы успешно завершили данный уровень."}
              </div>
            )}
            {whale.investModelStatus == "JUSTBOUGHT" && (
              <div>
                {LANG
                  ? "You will begin to profit from this level during the next cycle."
                  : "Вы начнёте получать прибыль из этого уровня во время следующего цикла."}
              </div>
            )}
            {(whale.investModelStatus == "BOUGHT" ||
              whale.investModelStatus == "FROZEN") && (
              <div>
                {LANG ? (
                  <div>
                    <div className="mb-2">
                      {" "}
                      You have already purchased this level
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="text-center">
                        <div>Partner bonus</div>
                        <div>
                          {whale.partnerBonusAmount
                            ? whale.partnerBonusAmount.toFixed(2)
                            : 0}{" "}
                          $
                        </div>
                      </div>
                      <div className="text-center">
                        <div>Level profits</div>
                        <div>
                          {whale.mainBonusAmount
                            ? whale.mainBonusAmount.toFixed(2)
                            : 0}{" "}
                          $
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-4">
                      {" "}
                      Вы уже приобрели данный уровень.
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="text-center">
                        <div>Партнерский бонус</div>
                        <div>
                          {whale.partnerBonusAmount
                            ? whale.partnerBonusAmount.toFixed(2)
                            : 0}{" "}
                          $
                        </div>
                      </div>
                      <div className="text-center">
                        <div>Уровень прибыли</div>
                        <div>
                          {whale.mainBonusAmount
                            ? whale.mainBonusAmount.toFixed(2)
                            : 0}{" "}
                          $
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {whale.investModelStatus == "MONEYLOCKED" && (
              <div>
                {LANG
                  ? "Buy tables on a first-come, first-served basis, buy the previous level to purchase. "
                  : "Покупайте столы в порядке очереди, для покупки купите предыдущий уровень. "}
              </div>
            )}
            {(whale.investModelStatus == "LOCKED" ||
              whale.investModelStatus == "TIMELOCKED") && (
              <div>
                {LANG
                  ? "This level is temporarily unavailable for purchase"
                  : "Данный уровень временно недоступен для покупки"}
              </div>
            )}
            {whale.investModelStatus == "SPECIALS" && (
              <div>
                {LANG
                  ? "This level will open in the near future"
                  : "Данный уровень откроется в скором будущем"}
              </div>
            )}
          </div>
          <div className="w-full flex items-center justify-center gap-2 py-4">
            {avaliableWhale && (
              <>
                {!isError && !isLoading && (
                  <button
                    className="button-for-invite px-4 w-[40%] py-1"
                    onClick={buyWhale}
                  >
                    {LANG ? "Yes" : "Да"}
                  </button>
                )}

                <button
                  onClick={closeModal}
                  className="w-[40%] border-2 border-[rgba(102,129,226,0.81)] rounded-[48px] py-1"
                >
                  {LANG ? "Cancel" : "Отмена"}
                </button>
              </>
            )}
            {moneyWhale && (
              <>
                {!isMoney && !isLoading && (
                  <button
                    className="button-for-invite px-4 w-[40%] py-1"
                    onClick={() => setIsMoney(true)}
                  >
                    {LANG ? "Yes" : "Да"}
                  </button>
                )}
                <button
                  onClick={closeModal}
                  className="w-[40%] border-2 border-[rgba(102,129,226,0.81)] rounded-[48px] py-1"
                >
                  {LANG ? "Cancel" : "Отмена"}
                </button>
              </>
            )}
            {(whale.investModelStatus !== "AVAILABLE" || lostProfit) && (
              <button
                onClick={closeModal}
                className="w-[40%] border-2 border-[rgba(102,129,226,0.81)] rounded-[48px] py-1"
              >
                {LANG ? "Close" : "Закрыть"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
