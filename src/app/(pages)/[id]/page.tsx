'use client';
import res from '@/app/data.json';
import { Params } from '@/app/data';
import { useEffect, useState } from 'react';

export default function page({ params }: Params) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    setData(res.productRequests[params.id - 1]);
    console.log(res.productRequests[params.id - 1]);
    console.log(data);
  }, []);
  return <div>{res.productRequests[params.id - 1].title}</div>;
}
