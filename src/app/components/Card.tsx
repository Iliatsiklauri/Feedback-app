import { ProductRequest } from '../data';

export default function Card({
  title,
  category,
  upvotes,
  description,
  comments,
}: ProductRequest) {
  return (
    <div className="w-[93%] rounded-xl bg-white flex flex-col justify-center items-start p-5 gap-5">
      <div className="flex flex-col items-start justify-center gap-[11px]">
        <p className="text-sm font-bold text-[#3A4374]">{title}</p>
        <p className="font-normal text-[#647196] text-xs">{description}</p>
        <div className="bg-[#F2F4FF] px-4 py-2 rounded-xl text-[#4661E6] font-semibold text-sm flex items-center justify-center">
          {category}
        </div>
      </div>
      <div className=" rounded-xl h-8 w-[69px] bg-[#F2F4FE] flex items-center justify-center gap-2">
        <img src="shared\icon-arrow-up.svg" alt="" />
        <p className="font-bold text-[#3A4374] text-sm">{upvotes}</p>
      </div>
      <div className="w-10 h-5 flex gap-1 items-center justify-center self-end mt-[-50px] md:mt-0">
        <img
          src="shared\icon-comments.svg"
          alt=""
          className="flex-shrink-0 w-[18px] h-4"
        />
        <p className="w-[18px] h-4 font-bold text-sm  flex items-center justify-center text-[#3A4374]">
          {comments?.length}
        </p>
      </div>
    </div>
  );
}
