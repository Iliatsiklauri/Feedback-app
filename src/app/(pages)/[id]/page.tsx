'use client';
import { GlobalProvider } from '@/app/GlobalStates';
import Aboutheader from '@/app/components/Aboutheader';
import AddComent from '@/app/components/AddComent';
import Card from '@/app/components/Card';
import Comments from '@/app/components/Comments';
import { Params } from '@/app/data';
import { useContext } from 'react';
export default function Page({ params }: Params) {
  const context = useContext(GlobalProvider);
  if (!context) {
    return <h1>no context</h1>;
  }
  const jsonData = context.jsonData?.productRequests[params.id - 1];

  return (
    <div className="py-6 flex flex-col items-center justify-center bg-[#F7F8FD]">
      <div className=" gap-6 flex flex-col items-center justify-center w-full">
        <Aboutheader display={true} />
        <Card
          category={`${jsonData?.category}`}
          description={`${jsonData?.description}`}
          title={`${jsonData?.title}`}
          upvotes={jsonData?.upvotes}
          comments={jsonData?.comments}
        />

        <Comments comments={jsonData?.comments} />
        <AddComent id={params.id - 1} />
      </div>
    </div>
  );
}
