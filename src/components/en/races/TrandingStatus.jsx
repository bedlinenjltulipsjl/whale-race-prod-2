export default function TrandingStatus({ whale }) {
  return (
    <>
      {whale.trendingStatus == "MEDIUM" && (
        <div className="absolute top-[-10px] w-[78%] flex justify-center text-[9px]">
          <h3 className="bg-[#ff8202] rounded-xl px-2 border-[1px] border-[#d72a23] text-black font-['Gilroy-700']">
            medium profit
          </h3>
        </div>
      )}
      {whale.trendingStatus == "FAST" && (
        <div className="absolute top-[-10px] w-[78%] flex justify-center text-[10px]">
          <h3 className="bg-green-500 rounded-xl px-2 border-[1px] border-green-900 text-black font-['Gilroy-700']">
            fast profit
          </h3>
        </div>
      )}
      {whale.trendingStatus == "NEW" && (
        <div className="absolute top-[-10px] w-[78%] flex justify-center text-[10px]">
          <h3 className="bg-green-200 rounded-xl px-2 border-[1px] border-green-600 text-black font-['Gilroy-700']">
            new level
          </h3>
        </div>
      )}
      {whale.trendingStatus == "SLOW" && (
        <div className="absolute top-[-10px] w-[78%] flex justify-center text-[9px]">
          <h3 className="bg-red-400 rounded-xl px-2 border-[1px] border-[#d72a23] text-black font-['Gilroy-700']">
            slow profit
          </h3>
        </div>
      )}
    </>
  );
}
