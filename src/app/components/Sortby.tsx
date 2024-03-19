import { Dispatch, SetStateAction } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
type PropType = {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
};
export default function Sortby({ modal, setModal }: PropType) {
  return (
    <div className="bg-[#373F68] h-14 w-full gap-[10%] flex items-center justify-center relative z-0">
      <motion.div
        className="overflow-hidden top-16 rounded-xl w-[200px] h-[200px] bg-white absolute modal"
        animate={{
          height: modal ? '200px' : 0,
          width: modal ? '200px' : 0,
          opacity: modal ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 70 }}
      >
        <motion.div
          animate={{ y: modal ? 0 : -400 }}
          transition={{ type: 'spring', delay: 0.3, damping: 10 }}
          className="w-full text-center h-1/4 border-b-[1px] border-[#3A4374] border-opacity-15 text-[#647196] flex items-center justify-start pl-6 hover:text-[#AD1FEA] text-sm cursor-pointer"
        >
          Most Upvotes
        </motion.div>
        <motion.div
          animate={{ y: modal ? 0 : -300 }}
          transition={{ type: 'spring', delay: 0.2, damping: 10 }}
          className="w-full text-center h-1/4 border-b-[1px] border-[#3A4374] border-opacity-15 text-[#647196] flex items-center justify-start pl-6 hover:text-[#AD1FEA] text-sm cursor-pointer"
        >
          Least Upvotes
        </motion.div>
        <motion.div
          animate={{ y: modal ? 0 : -300 }}
          transition={{ type: 'spring', delay: 0.1, damping: 10 }}
          className="w-full text-center h-1/4 border-b-[1px] border-[#3A4374] border-opacity-15 text-[#647196] flex items-center justify-start pl-6 hover:text-[#AD1FEA] text-sm cursor-pointer"
        >
          Most Comments
        </motion.div>
        <motion.div
          animate={{ y: modal ? 0 : -300 }}
          transition={{ type: 'spring', delay: 0, damping: 10 }}
          className="w-full text-center h-1/4 text-[#647196] flex items-center justify-start pl-6 hover:text-[#AD1FEA] text-sm cursor-pointer"
        >
          Least Comments
        </motion.div>
      </motion.div>
      <div
        className="flex items-center justify-center gap-2  cursor-pointer"
        onClick={() => setModal(!modal)}
      >
        <p className="text-[#F2F4FE] text-xs">
          Sort by <span className="font-bold">: Most Upvotes</span>
        </p>
        <motion.div
          animate={{ rotate: modal ? 180 : 0 }}
          transition={{ type: 'spring', damping: 15 }}
        >
          <img src="shared\icon-arrow-down1.svg" alt="" />
        </motion.div>
      </div>
      <Button content="+ Add Feedback" />
    </div>
  );
}
