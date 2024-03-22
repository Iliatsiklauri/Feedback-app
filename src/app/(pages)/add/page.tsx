'use client';
import { GlobalProvider } from '@/app/GlobalStates';
import Aboutheader from '@/app/components/Aboutheader';
import Button from '@/app/components/Button';
import Link from 'next/link';
import { useContext } from 'react';

export default function page() {
  const context = useContext(GlobalProvider);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { jsonData, setJsonData } = context;
  return (
    <div className="py-6 w-full bg-[#F7F8FD] flex items-center justify-center">
      <div className="w-[93%]  flex items-centerjustify-center flex-col gap-10">
        <Aboutheader display={false} />
        <form className="bg-white rounded-lg w-full flex  flex-col items-start justify-center px-6 relative pt-10 gap-6">
          <img
            src="shared\icon-new-feedback.svg"
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
          <div className="flex gap-4 flex-col w-full mb-6">
            <button>
              <Button content="Add Feedback" width="full" />
            </button>
            <Link href={'/'}>
              <Button content="cancel" color="#3A4374" width="full" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
