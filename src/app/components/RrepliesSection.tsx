import React from 'react';
import { Reply } from '../data';
type PropType = {
  replies: Reply;
  id: number;
  ind?: number;
};
export default function RrepliesSection({ replies, id, ind }: PropType) {
  return (
    <div className={`w-full flex relative items-center justify-center flex-col gap-3`}>
      <div
        className={`${
          ind ? (id !== ind - 1 ? 'block' : 'hidden') : null
        } h-full w-[1px] absolute bg-black left-[-20px] opacity-25`}
      ></div>
      <header className="flex items-center justify-between w-full">
        <div className="flex gap-4 items-center justify-center">
          <img src={`${replies?.user.image}`} alt="" className="w-10 h-10 rounded-full" />
          <div className="flex items-start justify-center flex-col">
            <p className="font-bold text-sm text-[#3A4374]">{replies?.user.name}</p>
            <p className="text-[#647196] text-sm">{replies?.user.username}</p>
          </div>
        </div>
        <p className="text-[#4661E6] text-sm font-semibold">Reply</p>
      </header>
      <p className="text-[#647196] text-sm">{replies?.content}</p>
    </div>
  );
}
