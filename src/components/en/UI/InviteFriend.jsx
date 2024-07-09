import { useEffect, useState } from "react";
import CopyIcon from "../../icons/copy";
import gsap from "gsap";
import WebApp from "@twa-dev/sdk";
import CopyToClipboard from "react-copy-to-clipboard";
import { useSelector } from "react-redux";
import { LANG } from "../../../util/front/language-check";

export default function InviteFriend({ id }) {
  const [copied, setCopied] = useState();

  const ref = useSelector((state) => state.user.info.reflink);

  useEffect(() => {
    const textAnimation = gsap.fromTo(
      `#${id}`,
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0, duration: 0.4, ease: "back.out(1)" },
    );
    return () => textAnimation.kill();
  }, [id]);

  const requestInvite = () => {
    WebApp.HapticFeedback.impactOccurred("light");
    const text = `Join the whale race, invest and make a profit right now - ${ref}`;
    const url = `https://t.me/share/url?url=&text=${encodeURIComponent(text)}`;
    WebApp.openTelegramLink(url);
  };
  return (
    <div className="flex w-full gap-[10px]" id={id}>
      <CopyToClipboard text={ref}>
        <button
          className="button-for-invite py-[14px] w-[75%]"
          onClick={() => {
            WebApp.HapticFeedback.impactOccurred("light");
            setCopied(true);
          }}
        >
          {copied ? (
            <div>{LANG ? "Copied" : "Скопировано"}</div>
          ) : LANG ? (
            "Get a referral link"
          ) : (
            "Получить ссылку"
          )}
        </button>
      </CopyToClipboard>
      <button
        className="button-for-invite w-[25%] flex items-center justify-center"
        onClick={requestInvite}
      >
        <CopyIcon />
      </button>
    </div>
  );
}
