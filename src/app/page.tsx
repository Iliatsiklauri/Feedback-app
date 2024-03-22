'use client';
import { useState, useContext, useEffect } from 'react';
import { BurgerStates, ProductRequest } from './data';
import Link from 'next/link';
import MobileHeader from './components/MobileHeader';
import Card from './components/Card';
import Sortby from './components/Sortby';
import MobileBurgerMenu from './components/MobileBurgerMenu';
import Mobileback from './components/Mobileback';
import { GlobalProvider } from './GlobalStates';
import CategoryBox from './components/CategoryBox';
import Roadmap from './components/Roadmap';

export default function Home() {
  const [burger, setBurger] = useState(false);
  const [category, setCategory] = useState<string>('All');
  const [modal, setModal] = useState(false);
  const [sorting, setSorting] = useState<string>('Most Upvotes');

  const context = useContext(GlobalProvider);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { jsonData, setJsonData } = context;
  let filteredData =
    category === 'All'
      ? jsonData?.productRequests
      : jsonData?.productRequests.filter((el) => el.category === category);
  return (
    <div className="flex flex-col items-center relative w-full min-h-[101vh] pb-5 bg-[#F7F8FD] md:gap-6 md:py-6">
      <div className="md:hidden w-full">
        <Mobileback burger={burger} />
      </div>
      <div className="md:hidden">
        <BurgerStates.Provider value={{ category, setCategory, filteredData }}>
          <MobileBurgerMenu burger={burger} />
        </BurgerStates.Provider>
      </div>
      <div className="md:hidden w-full z-40 md:order-2">
        <MobileHeader burger={burger} setBurger={setBurger} setModal={setModal} />
      </div>
      <div className="hidden md:flex w-[96%] h-[178px] justify-around">
        <div className="hidden md:flex   items-center justify-center gap-4 h-[223px] md:w-[30%] md:h-[180px]">
          <MobileHeader burger={burger} setBurger={setBurger} setModal={setModal} />
        </div>
        <BurgerStates.Provider value={{ category, setCategory, filteredData }}>
          <CategoryBox burger={burger} display={true} />
        </BurgerStates.Provider>
        <BurgerStates.Provider value={{ category, setCategory, filteredData }}>
          <Roadmap burger />
        </BurgerStates.Provider>
      </div>
      <div className="w-full flex flex-col items-center justify-center ">
        <Sortby
          modal={modal}
          setModal={setModal}
          setSorting={setSorting}
          sorting={sorting}
          filteredData={filteredData || []}
          setJsonData={setJsonData}
        />
      </div>
      {filteredData?.map((el: ProductRequest, key: number) => (
        <Link
          key={key}
          className="w-full items-center mt-8 md:mt-0 justify-center  flex-col flex"
          href={`${el.id}`}
        >
          <Card
            id={el.id}
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
