'use client';

import { GlobalProvider } from '@/app/GlobalStates';
import Aboutheader from '@/app/components/Aboutheader';
import Card from '@/app/components/Card';
import Comments from '@/app/components/Comments';
import { Params } from '@/app/data';
import Link from 'next/link';
import { useContext } from 'react';
export default function Page({ params }: Params) {
  const context = useContext(GlobalProvider);
  if (!context) {
    return <h1>no context</h1>;
  }
  const jsonData = context.productRequests[params.id - 1];

  return (
    <div className="pt-6 gap-6 flex flex-col items-center justify-center bg-[#F7F8FD]">
      <div className="py-6 gap-6 flex flex-col items-center justify-center w-full">
        <Aboutheader display={true} />
        <Card
          category={`${jsonData.category}`}
          description={`${jsonData.description}`}
          title={`${jsonData.title}`}
          upvotes={jsonData.upvotes}
          comments={jsonData.comments}
        />
        <Comments comments={jsonData.comments} />
      </div>
    </div>
  );
}
