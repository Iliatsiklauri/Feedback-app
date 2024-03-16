'use client';
import { useState, useEffect } from 'react';
import data from './data.json';
import { JSONData, ProductRequest } from './data';
import Link from 'next/link';

export default function Home() {
  const [jsonData, setJsonData] = useState<JSONData | null>(null);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {jsonData?.productRequests.map((el: ProductRequest, key) => (
        <Link key={key} className="w-full" href={`${el.id}`}>
          <div className=" w-[90%] h-[200px] bg-gray-300 cursor-pointer">
            <p>{el.title}</p>
            <p>{el.id}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
