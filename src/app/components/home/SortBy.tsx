import { Dispatch, SetStateAction } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import Link from 'next/link';
type PropType = {
  sort: boolean;
  setSort: Dispatch<SetStateAction<boolean>>;
  sortCat: string;
};

export default function SortBy({ setSort, sort, sortCat }: PropType) {
  return (
    <div className="w-full h-14 bg-[#373F68] flex items-center justify-between px-[3%]">
      <div
        className="flex w-[50%] h-5 items-center justify-center cursor-pointer text-left gap-1"
        onClick={() => setSort(!sort)}
      >
        <p className="text-[#F2F4FE] text-[13px] w-[90%]  text-left flex gap-1">
          Sort by :<span className="font-bold"> {sortCat}</span>
        </p>
        <motion.div
          animate={{ rotate: sort ? 180 : 0 }}
          transition={{ type: 'spring', damping: 20 }}
        >
          <img src="shared\icon-arrow-down1.svg" alt="" className="h-[8px] w-[10px]" />
        </motion.div>
      </div>
      <Link href={'/add'}>
        <Button text="+ Add Feedback" color="#AD1FEA" width="134px" />
      </Link>
    </div>
  );
}
