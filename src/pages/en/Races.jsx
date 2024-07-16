import Title from "../../components/en/UI/Title";
import CoinInfo from "../../components/en/UI/CoinInfo";
import Whales from "../../components/en/races/Whales";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TbHandClick } from "react-icons/tb";

import { LANG } from "../../util/front/language-check";
import FaqModal from "../../components/en/races/FaqModal";
import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

export default function Races() {
  const [openFaq, setOpenFaq] = useState();
  useEffect(() => {
    if (openFaq) {
      WebApp.BackButton.show();
      WebApp.BackButton.onClick(() => {
        setOpenFaq(false);
      });
    } else {
      WebApp.BackButton.hide();
    }
  }, [openFaq]);

  const user = useSelector((state) => state.user);
  if (user.status !== "succeeded") {
    return <Navigate to="loading" />;
  }

  return (
    <>
      <Title onClick={() => setOpenFaq(true)}>
        {LANG ? (
          <div className="flex items-center gap-2">
            How to earn?
            <TbHandClick />
          </div>
        ) : (
          <div className="flex items-center gap-1 text-[12px]">
            Как заработать?
            <TbHandClick />
          </div>
        )}{" "}
      </Title>
      <CoinInfo idCoin="first-coin-icon" idText="first-text-for-coin" />
      <Whales />
      {openFaq && <FaqModal onClose={() => setOpenFaq(false)} />}
    </>
  );
}
