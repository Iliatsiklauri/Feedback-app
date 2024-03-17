import { useContext, useState } from 'react';
import { BurgerStates } from '../data';
import { arr } from '../data';
export default function CategoryBox() {
  const [number, setNumber] = useState(0);
  const context = useContext(BurgerStates);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { setCategory } = context;

  return (
    <div className="h-44 w-[85%] bg-white rounded-xl p-6 flex items-center justify-start  gap-2 flex-wrap">
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
    </div>
  );
}
