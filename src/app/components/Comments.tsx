'use client';
import { comments } from '../data';
import CommentsSection from './CommentsSection';
export type PropType = {
  comments?: comments[];
};

export default function Comments({ comments }: PropType) {
  return (
    <div className="w-[93%] flex items-center justify-center flex-col px-4 bg-white rounded-xl py-4 gap-6">
      <p className="font-bold text-[#3A4374] text-lg self-start">
        {comments ? comments?.length : 'No'}
        {comments?.length === 0 || comments?.length === 1 ? ' Comment' : ' Comments'}
      </p>
      {comments?.map((el: comments, key: number) => (
        <CommentsSection comments={el} id={key} ind={comments.length} key={key} />
      ))}
    </div>
  );
}
