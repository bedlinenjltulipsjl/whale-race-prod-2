export default function Title({ children }) {
  return (
    <h1 className="absolute left-1/2 -translate-x-1/2 top-[-16.25px] text-[15px] py-[5px] px-[34px] bg-[#081117] rounded-[24px] border-gradient-title">
      {children}
    </h1>
  );
}
