'use client';
import { useState, useEffect } from 'react';
import data from './data.json';
import { JSONData, ProductRequest } from './data';
import Link from 'next/link';
import MobileHeader from './components/MobileHeader';
import Card from './components/Card';

export default function Home() {
  const [jsonData, setJsonData] = useState<JSONData | null>(null);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full bg-[#F7F8FD]">
      <MobileHeader />
      {jsonData?.productRequests.map((el: ProductRequest, key) => (
        <Link
          key={key}
          className="w-full items-center justify-center flex-col flex"
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
