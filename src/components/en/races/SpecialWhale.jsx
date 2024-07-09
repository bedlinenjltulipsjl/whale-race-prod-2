import { useState } from "react";
import { CoinGray, SpecialWhaleBlock } from "../../icons/special-whale-block";
import Modal from "./Modal";

export default function SpecialWhale({ whale, number }) {
  // const [showStatus, setShowStatus] = useState();
  const [showModal, setShowModal] = useState();

  const clickHandler = () => {
    // setShowStatus(true);
    setShowModal(true);
    // setTimeout(() => setShowStatus(false), 2000);
  };

  return (
    <>
      <div className="relative w-full h-full whale" onClick={clickHandler}>
        <img
          src={`/whales/special.png`}
          alt="whale"
          className="absolute inset-0 z-0 w-full"
        />
        <div className="absolute z-1 pt-[7px] px-[7px] w-[78%]">
          <div className="w-full flex items-center justify-between">
            <SpecialWhaleBlock />
            <CoinGray />
          </div>
          <div className="text-center w-full text-[6px] mt-[9px] text-[#D9D9D91A]/10">
            Current fine fill
          </div>
          <div className="w-full bg-[#2C2F3599]/60 border-[1px] border-[rgba(44,47,53,0.6)] rounded-[2px] h-[5px] mt-[4px]"></div>
          <div className="text-[#D9D9D980]/50 text-[15px] w-full text-center mt-[8px]">
            0 %
          </div>
        </div>
        {/* {showStatus && (
        <div className="absolute bottom-full w-[78%] text-[12px] left-0 text-center pb-1">
          Specials
        </div>
        // <Status status="Specials" />
      )} */}
      </div>
      {showModal && (
        <Modal
          whale={whale}
          number={number}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
