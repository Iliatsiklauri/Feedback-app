import { useContext, useState } from 'react';
import { BurgerStates } from '../data';
import { arr } from '../data';
import { motion } from 'framer-motion';
type propType = {
  burger: boolean;
  display: boolean;
};
export default function CategoryBox({ burger, display }: propType) {
  const [number, setNumber] = useState(0);
  const context = useContext(BurgerStates);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { setCategory } = context;

  return (
    <motion.div
      className="h-44 w-[85%] bg-white rounded-xl p-6 flex items-center justify-start  gap-2 flex-wrap  md:w-[30%] md:h-full "
      animate={{ x: display ? 0 : !burger ? '100%' : 0 }}
      transition={{ type: 'spring', damping: 23, delay: 0.2 }}
    >
      {arr.map((el, key) => (
        <div
          key={key}
          className={`text-center text-sm cursor-pointer font-semibold   rounded-xl px-4 py-1 flex-shrink-0 inline-block min-w-min ${
            el.number !== number
              ? 'text-[#4661E6] bg-[#F2F4FF]'
              : 'text-[#F2F4FF] bg-[#4661E6]'
          } `}
          onClick={() => {
            setCategory(el.title);
            setNumber(el.number);
          }}
        >
          {el.title}
        </div>
      ))}
    </motion.div>
  );
}
