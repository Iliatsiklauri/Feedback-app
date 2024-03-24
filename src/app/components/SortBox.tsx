import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
type PropType = {
  setSortCat: Dispatch<SetStateAction<string>>;
  sort: boolean;
  sortCat: string;
};
export default function SortBox({ sort, setSortCat, sortCat }: PropType) {
  return (
    <motion.div
      animate={{
        width: sort ? 200 : 0,
        height: sort ? 150 : 0,
        y: sort ? 150 : 80,
        x: -20,
      }}
      transition={{ type: 'spring', damping: 15 }}
      className="sortby absolute  bg-white rounded-xl "
    >
      <motion.div
        className="w-full h-full flex flex-col"
        animate={{
          opacity: sort ? 100 : 0,
          height: sort ? 150 : 0,
          width: sort ? 200 : 0,
        }}
      >
        <div
          onClick={() => setSortCat('Most Upvotes')}
          className="w-full cursor-pointer h-1/4 hover:text-[#AD1FEA]
         flex items-center border-b-[1px] border-b-[#3A4374] border-opacity-15 justify-between px-5"
        >
          <p className="text-xs   flex items-center justify-start  h-full">
            Most Upvotes
          </p>
          <img
            src="shared\icon-check.svg"
            alt=""
            className={`${sortCat === 'Most Upvotes' ? 'block' : 'hidden'}`}
          />
        </div>

        <div
          onClick={() => setSortCat('Least Upvotes')}
          className="w-full cursor-pointer h-1/4  flex hover:text-[#AD1FEA]  items-center border-b-[1px] border-b-[#3A4374] border-opacity-15 justify-between px-5"
        >
          <p className="text-xs   flex items-center justify-start  h-full">
            Least Upvotes
          </p>
          <img
            src="shared\icon-check.svg"
            alt=""
            className={`${sortCat === 'Least Upvotes' ? 'block' : 'hidden'}`}
          />
        </div>
        <div
          onClick={() => setSortCat('Most Comments')}
          className="w-full cursor-pointer h-1/4 hover:text-[#AD1FEA] flex items-center border-b-[1px] border-b-[#3A4374] border-opacity-15 justify-between px-5"
        >
          <p className="text-xs   flex items-center justify-start  h-full">
            Most Comments
          </p>
          <img
            src="shared\icon-check.svg"
            alt=""
            className={`${sortCat === 'Most Comments' ? 'block' : 'hidden'}`}
          />
        </div>
        <div
          onClick={() => setSortCat('Least Comments')}
          className="w-full cursor-pointer h-1/4 hover:text-[#AD1FEA] flex items-center justify-between px-5"
        >
          <p className="text-xs    flex items-center justify-start h-full">
            Least Comments
          </p>
          <img
            src="shared\icon-check.svg"
            alt=""
            className={`${sortCat === 'Least Comments' ? 'block' : 'hidden'}`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
