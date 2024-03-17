export default function MobileHeader() {
  return (
    <div className="h-[72px] w-full header flex items-center justify-between px-6">
      <div className="text-white">
        <h1 className="font-bold">Frontend Mentor</h1>
        <p className="opacity-75 text-xs font-medium ">Feedback Board</p>
      </div>
      <img src="shared\mobile\icon-hamburger.svg" alt="" className="cursor-pointer" />
    </div>
  );
}
