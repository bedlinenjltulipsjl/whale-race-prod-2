import Navigation from "../Navigation/Navigation";
export default function Content({ children }) {
  return (
    <div className="w-full h-full">
      <main className="w-full h-full flex-col flex items-center rounded-t-[45px] mt-8 relative ">
        <div
          className="pt-[20px] flex flex-col items-center w-full mt-4 pb-[72px]"
          style={{ height: "calc(100% - 72px)" }}
        >
          {children}
        </div>
      </main>
      <Navigation />
    </div>
  );
}
