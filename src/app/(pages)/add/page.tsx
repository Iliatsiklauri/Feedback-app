'use client';
import Dropdown from '@/app/components/AddFeed/Dropdown';
import Header from '@/app/components/about/Header';
import Button from '@/app/components/home/Button';
import { GlobalProvider } from '@/app/data';
import Link from 'next/link';
import { FormEvent, useContext, useState } from 'react';

export default function page() {
  const [category, setCategory] = useState('Feature');
  const [headline, setHeadline] = useState('');
  const [desc, setDesc] = useState('');
  const context = useContext(GlobalProvider);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { posts, setPosts } = context;

  const sbmt = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const obj = {
      id: posts[posts.length - 1].id + 1,
      title: headline,
      category: category,
      upvotes: 0,
      status: 'suggestion',
      description: desc,
      comments: [],
    };
    console.log(obj);
    setCategory('Feature'), setHeadline('');
    setDesc('');
    const arr = [...posts, obj];
    setPosts(arr);
  };
  return (
    <div
      className="p-6 flex flex-col items-center justify-center bg-[#F7F8FD] gap-16"
      onSubmit={(e) => sbmt(e)}
    >
      <Header disp={false} />

      <form className="w-full bg-white flex flex-col relative items-start justify-center p-4 pt-10 gap-6 rounded-lg">
        <img
          src="shared\icon-new-feedback.svg"
          alt=""
          className="absolute top-[-25px] left-5"
        />
        <h2 className="text-[#3A4374] font-bold text-lg">Create New Feedback</h2>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <p className=" text-[#3A4374] font-bold text-[13px]">Feedback Title</p>
          <p className="text-[#647196] text-[13px] mb-4">
            Add a short, descriptive headline
          </p>
          <input
            type="text"
            className="focus:outline-[#4661E6] focus:outline-[1px] bg-[#F7F8FD] rounded-md h-12 w-full text-[#3A4374] text-[13px] pl-3"
            onChange={(e) => setHeadline(e.target.value)}
            value={headline}
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <p className=" text-[#3A4374] font-bold text-[13px]">Category</p>
          <p className="text-[#647196] text-[13px] mb-4">
            Choose a category for your feedback
          </p>
          <Dropdown category={`${category}`} setCategory={setCategory} />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <p className=" text-[#3A4374] font-bold text-[13px]">Feedback Detail</p>
          <p className="text-[#647196] text-[13px] mb-4">
            Include any specific comments on what should be improved, added, etc.
          </p>
          <input
            type="text"
            className="focus:outline-[#4661E6] text-[#3A4374] text-[15px]  focus:outline-[1px] bg-[#F7F8FD] rounded-md h-32 w-full pb-24 pl-3"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            maxLength={200}
          />
        </div>
        <button className="w-full mb-[-10px]">
          <Button color="#AD1FEA" text="+ Add Feedback" width="100%" />
        </button>
        <Link href={'/'} className="w-full">
          <Button color="#3A4374" text="Cancel" width="100%" />
        </Link>
      </form>
    </div>
  );
}
