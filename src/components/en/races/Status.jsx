import { useEffect, useRef } from "react";
import { formatText } from "../../../util/front/formatText";
import gsap from "gsap";
import { LANG } from "../../../util/front/language-check";

export default function Status({ status }) {
  const statusRef = useRef(null);

  useEffect(() => {
    if (statusRef.current) {
      gsap.fromTo(statusRef.current, { x: 20 }, { x: 0 });
    }
  }, []);

  const translateText = (status) => {
    if (status == "TIMELOCKED") {
      return "Временно н/д";
    }
    if (status == "FINISHED") {
      return "Завершён";
    }
    if (status == "FROZEN") {
      return "Заморожен";
    }
    if (status == "BOUGHT") {
      return "Куплен";
    }
    if (status == "AVAILABLE") {
      return "Доступен";
    }
    if (status == "MONEYLOCKED") {
      return "Недоступен";
    }
    if (status == "LOCKED") {
      return "Недоступен";
    }
    if (status == "SPECIALS") {
      return "Специальный";
    }
  };

  return (
    <div ref={statusRef} className="pb-1">
      {LANG ? formatText(status) : formatText(translateText(status))}
    </div>
  );
}
