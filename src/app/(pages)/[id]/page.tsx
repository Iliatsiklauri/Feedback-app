'use client';
import AddComment from '@/app/components/about/AddComment';
import Comments from '@/app/components/about/Comments';
import Header from '@/app/components/about/Header';
import Card from '@/app/components/home/Card';
import { GlobalProvider } from '@/app/data';
import { useContext, useEffect, useState } from 'react';

export default function page({ params }: { params: { id: number } }) {
  const [comment, setComment] = useState('');
  const context = useContext(GlobalProvider);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { posts, user, setPosts } = context;
  const [data, setData] = useState(posts[params.id - 1]);
  useEffect(() => {
    const newArr = [...posts];
    newArr[params.id - 1] = data;
    setPosts(newArr);
  }, [data]);
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
      <AddComment
        setComment={setComment}
        comment={`${comment}`}
        data={data}
        setData={setData}
        user={user}
      />
    </div>
  );
}
