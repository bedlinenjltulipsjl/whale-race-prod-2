import { useSelector } from "react-redux";
import InviteFriend from "../../components/en/UI/InviteFriend";
import Title from "../../components/en/UI/Title";
import TopUser from "../../components/en/top-users/TopUser";
import { Navigate } from "react-router-dom";
import { LANG } from "../../util/front/language-check";

export default function TopUsers() {
  const topUsers = useSelector((state) => state.users);
  if (topUsers.status !== "succeeded") {
    return <Navigate to="loading" />;
  }

  return (
    <>
      <Title>{LANG ? "TOP USERS" : "ТОП ИГРОКИ"}</Title>
      {topUsers.users && topUsers.users.length > 0 ? (
        <div className="flex flex-col justify-between w-full items-center h-[100%]">
          <div className="flex flex-col gap-[15px] w-full px-[20px] mt-[8px] h-[80%] overflow-y-auto pt-10">
            {topUsers.users.map((user, index) => (
              <TopUser
                key={index + user.name}
                user={{ ...user, pos: index + 1 }}
                first={index == 0}
              />
            ))}
          </div>
          <div className="w-full px-[20px]">
            <InviteFriend id="top-user-invite" />
          </div>
        </div>
      ) : (
        <div className="text-[38px] pt-20 text-center">
          {LANG ? "No top users yet" : "Пока ещё нет топ игроков"}
        </div>
      )}
    </>
  );
}
