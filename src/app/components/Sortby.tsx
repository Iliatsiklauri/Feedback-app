import Button from './Button';

export default function Sortby() {
  return (
    <div className="bg-[#373F68] h-14 w-full gap-[10%] flex items-center justify-center  ">
      <div className="flex items-center justify-center gap-2  cursor-pointer">
        <p className="text-[#F2F4FE] text-xs">
          Sort by <span className="font-bold">: Most Upvotes</span>
        </p>
        <img src="shared\icon-arrow-down1.svg" alt="" />
      </div>
      <Button content="+ Add Feedback" />
    </div>
  );
}
