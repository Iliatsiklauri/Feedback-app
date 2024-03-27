import { Reply } from '@/app/data';

type PropType = {
  el: Reply;
  replies?: Reply[];
  num: number;
};

export default function Repply({ el, replies, num }: PropType) {
  let ans =
    replies && replies?.length > 0 ? replies.indexOf(replies[replies?.length - 1]) : 0;
  return (
    <div
      className={` flex flex-col justify-center gap-2  ${
        num !== ans
          ? 'border-l-[1px] border-l-[#647196] border-opacity-25 pl-[17px] '
          : 'ml-3 mb-4'
      }`}
    >
      <div className="w-full flex items-center gap-10 justify-center ">
        <div className="flex w-full items-center justify-start gap-3">
          <img src={`${el.user.image}`} alt="" className="h-10 w-10 rounded-full" />
          <div className="flex flex-col items-start justify-center ">
            <p className="text-[13px] font-bold text-[#3A4374]">{el.user.name}</p>
            <p className="text-[13px] text-[#647196]">@{el.user.username}</p>
          </div>
        </div>
        <p className="text-[#4661E6] text-[13px] font-semibold cursor-pointer">reply</p>
      </div>
      <div className="flex-wrap flex pl-3 pt-2 w-full truncate max-h-20  overflow-hidden ">
        <p className="text-[13px] text-[#647196] overflow-hidden">{el.content}</p>
      </div>
    </div>
  );
}
