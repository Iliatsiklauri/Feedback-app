import { Comment } from '@/app/data';
type propType = {
  comments?: Comment[];
};
export default function Comments({ comments }: propType) {
  return (
    <div className="w-full flex bg-white flex-col rounded-xl gap-6 items-start justify-center py-6 px-5 ">
      <p className="text-[#3A4374] text-lg font-bold">{comments?.length || 0} Comments</p>
      {comments?.map((el, key) => (
        <div
          className={`flex flex-col gap-3 ${
            key + 1 !== length
              ? 'border-b-[1px] border-opacity-25 border-[#8C92B3] pb-6'
              : null
          }`}
          key={key}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <img src={`${el.user.image}`} alt="" className="h-10 w-10 rounded-full" />
              <div>
                <p className="text-[#3A4374] text-[13px] font-bold">{el.user.name}</p>
                <p className="text-[#647196] text-[13px]">@{el.user.username}</p>
              </div>
            </div>
            <p className="text-[#4661E6] font-semibold text-[13px]">Reply</p>
          </div>
          <p className="text-[#647196] text-[13px] ">{el.content}</p>
        </div>
      ))}
    </div>
  );
}
