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
  useEffect(() => {
    console.log(jsonData);
  }, [jsonData]);
  let filteredData =
    category === 'All'
      ? jsonData?.productRequests
      : jsonData?.productRequests.filter((el) => el.category === category);
  filteredData?.sort((el, ele) =>
    sorting === 'Most Upvotes'
      ? ele.upvotes - el.upvotes
      : sorting === 'Least Upvotes'
      ? el.upvotes - ele.upvotes
      : sorting === 'Most Comments'
      ? ele.comments?.length - el.comments?.length
      : sorting === 'Least Comments'
      ? el.comments?.length - ele.comments?.length
      : 0
  );

  return (
    <div className="flex flex-col items-center relative w-full bg-[#F7F8FD] min-h-[101vh] pb-5">
      <Mobileback burger={burger} />
      <BurgerStates.Provider value={{ category, setCategory, filteredData }}>
        <MobileBurgerMenu burger={burger} />
      </BurgerStates.Provider>
      <MobileHeader burger={burger} setBurger={setBurger} setModal={setModal} />
      <Sortby
        modal={modal}
        setModal={setModal}
        setSorting={setSorting}
        sorting={sorting}
      />
      {filteredData?.map((el: ProductRequest, key: number) => (
        <Link
          key={key}
          className="w-full items-center mt-8 justify-center  flex-col flex"
          href={`${el.id}`}
          onClick={() => console.log(el.id - 1)}
        >
          <p>{el.id}</p>
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
