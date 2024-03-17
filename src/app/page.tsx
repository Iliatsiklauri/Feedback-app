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
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center relative w-full bg-[#F7F8FD]">
      <Mobileback burger={burger} />
      <BurgerStates.Provider value={{ category, setCategory }}>
        <MobileBurgerMenu burger={burger} />
      </BurgerStates.Provider>
      <MobileHeader burger={burger} setBurger={setBurger} />
      <Sortby />
      {jsonData?.productRequests.map((el: ProductRequest, key) => (
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
