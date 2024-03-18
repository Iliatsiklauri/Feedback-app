import { comments } from '../data';

export type PropType = {
  comments?: comments;
};

export default function CommentsSection({ comments }: PropType) {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-3">
      <header className="flex items-center justify-between w-full">
        <div className="flex gap-6 items-center justify-center">
          <img
            src={`${comments?.user.image}`}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex items-start justify-center flex-col">
            <p className="font-bold text-sm text-[#3A4374]">{comments?.user.name}</p>
            <p className="text-[#647196] text-sm">{comments?.user.username}</p>
          </div>
        </div>
        <p className="text-[#4661E6] text-sm font-semibold">Reply</p>
      </header>
      <p className="text-[#647196] text-sm">{comments?.content}</p>
    </div>
  );
}
