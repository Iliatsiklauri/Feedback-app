import { comments } from '../data';
import RrepliesSection from './RrepliesSection';

export type PropType = {
  comments?: comments;
  id?: number;
  ind?: number;
};

export default function CommentsSection({ comments, id, ind }: PropType) {
  return (
    <div
      className={`w-full ${
        ind
          ? id !== ind - 1
            ? 'border-b-[1px] border-b-[#8C92B3] border-opacity-25'
            : null
          : null
      } flex items-start justify-center flex-col gap-3`}
    >
      <header className="flex items-center justify-between w-full">
        <div className="flex gap-6 items-center justify-center">
          <img
            src={`${comments?.user?.image}`}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex items-start justify-center flex-col">
            <p className="font-bold text-sm text-[#3A4374]">{comments?.user?.name}</p>
            <p className="text-[#647196] text-sm">{comments?.user?.username}</p>
          </div>
        </div>
        <p className="text-[#4661E6] text-sm font-semibold cursor-pointer">Reply</p>
      </header>
      <p className="text-[#647196] text-sm">{comments?.content}</p>
      <div className="ml-6 flex flex-col gap-6 items-center justify-center">
        {comments?.replies?.map((el, key: number) => (
          <RrepliesSection
            replies={el}
            key={key}
            id={key}
            ind={comments?.replies?.length}
          />
        ))}
      </div>
    </div>
  );
}
