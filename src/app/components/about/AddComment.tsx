'use client';
import { Dispatch, FormEvent, SetStateAction, useContext, useState } from 'react';
import Button from '../home/Button';
import { GlobalProvider, ProductRequest, User } from '@/app/data';
type PropType = {
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  user: User;
  id: number;
};
export default function AddComment({ comment, setComment, user, id }: PropType) {
  const context = useContext(GlobalProvider);
  if (!context) return null;
  const { posts, setPosts } = context;
  const [data, setData] = useState<ProductRequest>(posts[id - 1]);

  const submitFunc = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj = {
      id:
        data.comments && data.comments.length > 0
          ? data.comments[data.comments.length - 1].id + 1
          : 0,
      content: comment,
      user: user,
      replies: [],
    };
    data?.comments?.push(obj);
    const arr = [...posts];
    arr[id - 1] = data;
    setPosts(arr);
    setComment('');
  };
  return (
    <form
      className="w-full bg-white flex flex-col items-start justify-center px-6 gap-6 py-4 rounded-xl"
      onSubmit={(e) => submitFunc(e)}
    >
      <p className="text-[#3A4374] font-bold text-[18px]">Add Comment</p>
      <input
        type="text"
        className=" h-[80px] w-full bg-[#F7F8FD] rounded-[5px] pb-7 pl-4  placeholder:text-[#8C92B3] text-[#8C92B3] text-[13px] focus:outline-none"
        placeholder="Type your comment here"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        maxLength={250}
      />
      <div className="w-full flex items-center justify-between">
        <p className="text-[13px] text-[#647196]">
          {250 - comment.length} Characters left
        </p>
        <button>
          <Button color="#AD1FEA" text="Post Comment" width="119px" />
        </button>
      </div>
    </form>
  );
}
