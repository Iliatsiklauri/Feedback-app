import Button from '../Button';

export default function SortBy() {
  return (
    <div className="w-full h-14 bg-[#373F68] flex items-center justify-between px-6">
      <div className="w-[55%] flex">
        <p className="text-[#F2F4FE] text-[13px] w-[90%] items-center justify-between">
          Sort by :<span className="font-bold"> Most Upvotes</span>
        </p>
        <img src="shared\icon-arrow-down1.svg" alt="" className="flex-shrink-0" />
      </div>
      <Button text="+ Add Feedback" color="#AD1FEA" width="134px" />
    </div>
  );
}
