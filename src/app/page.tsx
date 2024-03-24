'use client';
import { useContext, useEffect, useState } from 'react';
import { GlobalProvider } from './data';
import Header from './components/home/Header';
import SortBox from './components/home/SortBox';
import SortBy from './components/home/SortBy';
import Card from './components/home/Card';
import Link from 'next/link';

export default function Home() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [sort, setSort] = useState(false);
  const [sortCat, setSortCat] = useState('Most Upvotes');
  const context = useContext(GlobalProvider);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { posts, setPosts } = context;
  // useEffect(() => {
  //   console.log(posts);
  // }, []);

  return (
    <div className="flex flex-col items-center justify-start bg-[#F7F8FD]  relative min-h-[101vh]">
      <Header burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      <SortBy sort={sort} setSort={setSort} sortCat={sortCat} />
      <SortBox sort={sort} setSortCat={setSortCat} sortCat={sortCat} />
      <div className="w-full flex flex-col items-center justify-center gap-4 py-8">
        {posts.map((el, key) => (
          <Link href={`/${el.id}`} key={key}>
            <Card
              id={el.id}
              category={`${el.category}`}
              description={`${el.description}`}
              status={`${el.status}`}
              title={`${el.title}`}
              upvotes={el.upvotes}
              comments={el.comments}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
