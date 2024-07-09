import { useSelector } from "react-redux";
import CoinInfo from "../../components/en/UI/CoinInfo";
import InviteFriend from "../../components/en/UI/InviteFriend";
import InviteGift from "../../components/en/profile/InviteGift";
import MoneyButtons from "../../components/en/profile/MoneyButtons";
import SwitcherCheckMoney from "../../components/en/profile/SwitcherCheckMoney";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const user = useSelector((state) => state.user);
  if (user.status !== "succeeded") {
    return <Navigate to="loading" />;
  }

  return (
    <>
      <div className="flex flex-col justify-between w-full h-full px-[20px]  overflow-y-auto">
        <div className="w-full flex flex-col items-center gap-4">
          <MoneyButtons />
          <CoinInfo idCoin="second-coin-icon" idText="second-text-for-coin" />
          <SwitcherCheckMoney />
        </div>
        <div className="flex flex-col gap-[15px]">
          <InviteGift />
          <InviteFriend id="profile-invite-friends" />
        </div>
      </div>
    </>
  );
}
