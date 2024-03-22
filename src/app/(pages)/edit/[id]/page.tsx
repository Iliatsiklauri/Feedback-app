'use client';

import { GlobalProvider } from '@/app/GlobalStates';
import Aboutheader from '@/app/components/Aboutheader';
import Button from '@/app/components/Button';
import Link from 'next/link';
import { useContext } from 'react';

type propType = {
  params: {
    id: string;
  };
};

export default function page({ params }: propType) {
  const num = Number(params.id);
  const context = useContext(GlobalProvider);
  if (!context) {
    return <h1>context</h1>;
  }
  const { jsonData, setJsonData } = context;
  return (
    <div className="w-full py-6 bg-[#F7F8FD] flex justify-center items-center flex-col">
      <div className="flex items-center justify-center w-[93%] flex-col gap-10">
        <div className="w-full h-10 flex items-center justify-between px-3">
          <div className="flex items-center justify-center  cursor-pointer  gap-10">
            <Link href={'/'} className="w-full flex items-center gap-3 justify-center ">
              <img src="/shared/icon-arrow-left.svg" alt="" />
              <p className="font-bold text-sm text-[#647196]">Go Back</p>
            </Link>
          </div>
        </div>
        <form className="bg-white rounded-lg w-full flex  flex-col items-start justify-center px-6 relative pt-10 gap-6">
          <img
            src="\shared\icon-new-feedback.svg"
            alt=""
            className="absolute top-[-25px] gap-6"
          />
          <h2 className="text-md font-bold text-[#3A4374]">Create New Feedback</h2>
          <div className="flex items-start justify-center flex-col w-full">
            <h2 className="font-bold text-sm text-[#3A4374]">Feedback Title</h2>
            <p className="text-[#647196] text-sm">Add a short, descriptive headline</p>
            <input
              type="text"
              className="focus:outline-none pl-3 placeholder:mt-2 text-[#3A4374] text-sm  h-12 bg-[#F7F8FD] rounded-md w-full mt-4"
            />
          </div>
          <div className="flex items-start justify-center flex-col w-full">
            <h2 className="font-bold text-sm text-[#3A4374]">Category</h2>
            <p className="text-[#647196] text-sm">Choose a category for your feedback</p>
            <input
              type="text"
              className="focus:outline-none pl-3 placeholder:mt-2 text-[#3A4374] text-sm  h-12 bg-[#F7F8FD] rounded-md w-full mt-4"
            />
          </div>

          <div className="w-full flex-col flex items-start justify-center">
            <h2 className="font-bold text-sm text-[#3A4374]">Update Status</h2>
            <p className="text-[#647196] text-sm">Change feature state</p>
            <div className="w-full h-12 bg-[#F7F8FD] mt-4 rounded-md"></div>
          </div>
          <div className="flex items-start justify-center flex-col w-full">
            <h2 className="font-bold text-sm text-[#3A4374]">Feedback Detail</h2>
            <p className="text-[#647196] text-sm">
              Include any specific comments on what should be improved, added, etc.
            </p>
            <input
              type="text"
              className="focus:outline-none pl-3 pb-24 placeholder:mt-2 text-[#3A4374] text-sm   rounded-md bg-[#F7F8FD] w-full mt-4 h-40"
            />
          </div>
          <div className="w-full gap-4 flex flex-col">
            <Button content="Save Changes" width="full" />
            <Link href={'/'}>
              <Button content="Cancel" width="full" color="#3A4374" />
            </Link>
            <Button content="Delete" width="full" color="#D73737" />
          </div>
        </form>
      </div>
    </div>
  );
}
