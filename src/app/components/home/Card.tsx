import { ProductRequest } from '../../data';
import CommentsButton from './CommentsButton';
import UpvotesButton from './UpvotesButton';
import CategoryBox from './CategoryBox';

export default function Card({
  category,
  description,
  id,
  status,
  title,
  upvotes,
  comments,
}: ProductRequest) {
  return (
    <div className="w-[320px] h-[200px] bg-white rounded-lg flex flex-col items-start px-6 justify-center gap-4">
      <div className="flex flex-col items-start justify-center  gap-2">
        <p className="text-[#3A4374] text-[13px] font-bold">{title}</p>
        <p className="text-[#647196] text-[13px] ">{description}</p>
        <CategoryBox text={`${category}`} />
      </div>
      <div className="w-full flex items-center justify-between">
        <UpvotesButton upvotes={upvotes} />
        <CommentsButton comments={comments?.length || 0} />
      </div>
    </div>
  );
}
