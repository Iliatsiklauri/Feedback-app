'use client';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
type PropType = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};
export default function Dropdown({ category, setCategory }: PropType) {
  const [drop, setDrop] = useState(false);
  return (
    <div className="focus:outline-[#4661E6] focus:outline-[1px] bg-[#F7F8FD] rounded-md h-12 w-full relative px-4 text-[#3A4374] text-[13px] ">
      <div
        className="w-full h-full  absolute left-0 rounded-xl flex items-center justify-between px-4 cursor-pointer text-[16px]"
        onClick={() => setDrop(!drop)}
      >
        <p className="text-[15px] text-[#3A4374]">{category}</p>
        <motion.div
          animate={{
            rotate: drop ? 180 : 0,
          }}
          transition={{ type: 'spring' }}
        >
          <img src="shared\icon-arrow-down.svg" alt="" />
        </motion.div>
      </div>
      <motion.div
        animate={{
          width: '100%',
          height: drop ? 200 : 0,
          y: drop ? 70 : 70,
          x: -20,
          opacity: drop ? 1 : 0,
        }}
        transition={{ type: 'spring' }}
        className={`drop ${drop ? 'block' : 'hidden'} absolute bg-white rounded-xl `}
      >
        <div
          className="w-full h-1/5 border-b-[1px] border-b-[#3A4374] border-opacity-15  px-5 flex items-center hover:text-[#AD1FEA] text-[#647196] cursor-pointer  justify-between"
          onClick={() => setCategory('Feature')}
        >
          <p className=" text-[16px]">Feature</p>
          {category === 'Feature' ? <img src="shared\icon-check.svg" alt="" /> : null}
        </div>
        <div
          className="w-full h-1/5 border-b-[1px] border-b-[#3A4374] border-opacity-15  px-5 flex items-center hover:text-[#AD1FEA] text-[#647196] cursor-pointer  justify-between"
          onClick={() => setCategory('UI')}
        >
          <p className=" text-[16px]">UI</p>
          {category === 'UI' ? <img src="shared\icon-check.svg" alt="" /> : null}
        </div>
        <div
          className="w-full h-1/5 border-b-[1px] border-b-[#3A4374] border-opacity-15  px-5 flex items-center hover:text-[#AD1FEA] text-[#647196] cursor-pointer  justify-between"
          onClick={() => setCategory('UX')}
        >
          <p className=" text-[16px]">UX</p>
          {category === 'UX' ? <img src="shared\icon-check.svg" alt="" /> : null}
        </div>
        <div
          className="w-full h-1/5 border-b-[1px] border-b-[#3A4374] border-opacity-15  px-5 flex items-center hover:text-[#AD1FEA] text-[#647196] cursor-pointer  justify-between"
          onClick={() => setCategory('Enhancement')}
        >
          <p className=" text-[16px]">Enhancement</p>
          {category === 'Enhancement' ? <img src="shared\icon-check.svg" alt="" /> : null}
        </div>
        <div
          className="w-full h-1/5 px-5 flex items-center hover:text-[#AD1FEA] text-[#647196] cursor-pointer  justify-between"
          onClick={() => setCategory('Bug')}
        >
          <p className=" text-[16px]">Bug</p>
          {category === 'Bug' ? <img src="shared\icon-check.svg" alt="" /> : null}
        </div>
      </motion.div>
    </div>
  );
}
