'use client';
import { useState, useContext } from 'react';
import { BurgerStates, ProductRequest } from './data';
import Link from 'next/link';
import MobileHeader from './components/MobileHeader';
import Card from './components/Card';
import Sortby from './components/Sortby';
import MobileBurgerMenu from './components/MobileBurgerMenu';
import Mobileback from './components/Mobileback';
import { GlobalProvider } from './GlobalStates';

export default function Home() {
  const [burger, setBurger] = useState(false);
  const [category, setCategory] = useState<string>('All');

  const context = useContext(GlobalProvider);
  if (!context) {
    return <h1>no context</h1>;
  }
  const jsonData = context;

  const filteredData =
    category === 'All'
      ? jsonData?.jsonData?.productRequests
      : jsonData?.jsonData?.productRequests.filter((el) => el.category === category);
  return (
    <div className="flex flex-col items-center relative w-full bg-[#F7F8FD] min-h-[101vh] pb-5">
      <Mobileback burger={burger} />
      <BurgerStates.Provider value={{ category, setCategory, filteredData }}>
        <MobileBurgerMenu burger={burger} />
      </BurgerStates.Provider>
      <MobileHeader burger={burger} setBurger={setBurger} />
      <Sortby />
      {filteredData?.map((el: ProductRequest, key: number) => (
        <Link
          key={key}
          className="w-full items-center mt-8 justify-center  flex-col flex"
          href={`${el.id}`}
        >
          <Card
            category={`${el.category}`}
            description={`${el.description}`}
            title={`${el.title}`}
            upvotes={el.upvotes}
            comments={el.comments}
          />
        </Link>
      ))}
    </div>
  );
}
