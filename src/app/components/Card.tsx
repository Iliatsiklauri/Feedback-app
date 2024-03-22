import { ProductRequest } from '../data';
export default function Card({
  title,
  category,
  upvotes,
  description,
  comments: comments,
}: ProductRequest) {
  return (
    <div className="w-[93%] rounded-xl bg-white flex flex-col justify-center items-start p-5 gap-5 md:flex-row md:justify-between md:items-start">
      <div className="flex flex-col items-start justify-center gap-[11px] md:order-1 md:w-[75%] ">
        <p className="text-sm font-bold text-[#3A4374] md:text-lg">{title}</p>
        <p className="font-normal text-[#647196] text-xs md:text-base">{description}</p>
        <div className="bg-[#F2F4FF] px-4 py-2 rounded-xl text-[#4661E6] font-semibold text-sm flex items-center justify-center">
          {category}
        </div>
      </div>
      <div className=" rounded-xl h-8 w-[69px] bg-[#F2F4FE] flex items-center justify-center gap-2 md:flex-col md:h-auto md:w-auto md:p-2">
        <img src="shared\icon-arrow-up.svg" alt="" />
        <p className="font-bold text-[#3A4374] text-sm md:text-base">{upvotes}</p>
      </div>
      <div className="w-10 h-5 flex gap-1 items-center justify-center self-end mt-[-50px] md:mt-0 md:order-2 md:self-center">
        <img
          src="shared\icon-comments.svg"
          alt=""
          className="flex-shrink-0 w-[18px] h-4"
        />
        <p className="w-[18px] h-4 font-bold text-sm  flex items-center justify-center text-[#3A4374] md:text-base">
          {comments?.length ? comments.length : 0}
        </p>
      </div>
    </div>
  );
}
