'use client';
import { Dispatch, FormEvent, SetStateAction, useEffect } from 'react';
import Button from '../home/Button';
import { ProductRequest, User } from '@/app/data';
import { lstat } from 'fs';
type PropType = {
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  data: ProductRequest;
  setData: Dispatch<SetStateAction<ProductRequest>>;
  user: User;
};
export default function AddComment({
  comment,
  setComment,
  user,
  data,
  setData,
}: PropType) {
  const submitFunc = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lastId =
      data.comments && data.comments.length > 0
        ? data.comments[data.comments.length - 1].id + 1
        : 1;
    const obj = {
      id: lastId,
      content: comment,
      user: user,
      replies: [],
    };
    const newData = { ...data };
    newData.comments = [...(newData.comments || []), obj];
    setData(newData);
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
