import Title from "../../components/en/UI/Title";
import CoinInfo from "../../components/en/UI/CoinInfo";
import Whales from "../../components/en/races/Whales";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LANG } from "../../util/front/language-check";

export default function Races() {
  const user = useSelector((state) => state.user);
  if (user.status !== "succeeded") {
    return <Navigate to="loading" />;
  }

  return (
    <>
      <Title>{LANG ? "Races" : "Гонки"} </Title>
      <CoinInfo idCoin="first-coin-icon" idText="first-text-for-coin" />
      <Whales />
    </>
  );
}
