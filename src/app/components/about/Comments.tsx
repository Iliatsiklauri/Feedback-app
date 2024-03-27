import { Comment } from '@/app/data';
import SingleComment from './SingleComment';

type propType = {
  comments?: Comment[];
  id: number;
};

export default function Comments({ comments = [], id }: propType) {
  return (
    <div className="w-full flex bg-white flex-col rounded-xl gap-6 items-start justify-center py-6 px-5 ">
      <p className="text-[#3A4374] text-lg font-bold">{comments.length} Comments</p>
      <div className="flex w-full items-center justify-center flex-col gap-4 bg-white">
        {comments.map((el, key) => (
          <SingleComment key={key} el={el} comments={comments} id={id} />
        ))}
      </div>
    </div>
  );
}
