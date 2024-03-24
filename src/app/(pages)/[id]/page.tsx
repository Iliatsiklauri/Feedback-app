'use client';
import Comments from '@/app/components/about/Comments';
import Header from '@/app/components/about/Header';
import Card from '@/app/components/home/Card';
import { GlobalProvider } from '@/app/data';
import { useContext, useState } from 'react';

export default function page({ params }: { params: { id: number } }) {
  const context = useContext(GlobalProvider);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { posts } = context;
  const [data, setData] = useState(posts[params.id - 1]);
  return (
    <div className="flex flex-col justify-start items-center p-6 bg-[#F7F8FD] gap-6">
      <Header />
      <Card
        id={data.id}
        category={`${data.category}`}
        description={`${data.description}`}
        status={`${data.status}`}
        title={`${data.title}`}
        upvotes={data.upvotes}
        comments={data.comments}
      />
      <Comments comments={data.comments} />
    </div>
  );
}
