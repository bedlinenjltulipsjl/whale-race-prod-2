export default function Title({ children, onClick }) {
  return (
    <h1
      onClick={onClick}
      className="absolute left-1/2 -translate-x-1/2 top-[-16.25px] text-[15px] py-[5px] px-[34px] bg-[#081117] rounded-[24px] border-gradient-title w-max shadow-gold"
    >
      {children}
    </h1>
  );
}
