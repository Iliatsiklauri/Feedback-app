'use client';
import { useState, useEffect } from 'react';
import data from './data.json';
import { BurgerStates, JSONData, ProductRequest } from './data';
import Link from 'next/link';
import MobileHeader from './components/MobileHeader';
import Card from './components/Card';
import Sortby from './components/Sortby';
import MobileBurgerMenu from './components/MobileBurgerMenu';
import Mobileback from './components/Mobileback';

export default function Home() {
  const [jsonData, setJsonData] = useState<JSONData | null>(null);
  const [burger, setBurger] = useState(false);
  const [category, setCategory] = useState<string>('All');

  useEffect(() => {
    setJsonData(data);
  }, []);
  const filteredData =
    category === 'All'
      ? jsonData?.productRequests
      : jsonData?.productRequests.filter((el) => el.category === category);
  return (
    <div className="flex flex-col items-center relative w-full bg-[#F7F8FD] min-h-[101vh]">
      <Mobileback burger={burger} />
      <BurgerStates.Provider value={{ category, setCategory }}>
        <MobileBurgerMenu burger={burger} />
      </BurgerStates.Provider>
      <MobileHeader burger={burger} setBurger={setBurger} />
      <Sortby />
      {filteredData?.map((el: ProductRequest, key) => (
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
