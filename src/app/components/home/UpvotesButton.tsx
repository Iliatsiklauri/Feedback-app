export default function UpvotesButton({ upvotes }: { upvotes: number }) {
  return (
    <div className="flex gap-[10px] px-3 py-1 bg-[#F2F4FE] rounded-xl items-center justify-center cursor-pointer">
      <img src="shared\icon-arrow-up.svg" alt="" />
      <p className="text-[#3A4374] font-bold text-[13px]">{upvotes}</p>
    </div>
  );
}
