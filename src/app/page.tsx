'use client';
import { useContext, useState } from 'react';
import { GlobalProvider } from './data';
import Header from './components/mobile/Header';
import SortBox from './components/SortBox';
import SortBy from './components/mobile/SortBy';

export default function Home() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [sort, setSort] = useState(false);
  const [sortCat, setSortCat] = useState('Most Upvotes');
  const context = useContext(GlobalProvider);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { posts, setPosts } = context;

  return (
    <div className="flex flex-col items-center justify-center bg-[#F7F8FD]  relative">
      <Header burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      <SortBy sort={sort} setSort={setSort} sortCat={sortCat} />
      <SortBox sort={sort} setSortCat={setSortCat} sortCat={sortCat} />
    </div>
  );
}
