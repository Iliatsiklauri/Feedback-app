import { useContext } from 'react';
import { BurgerStates } from '../data';

export default function Roadmap() {
  const context = useContext(BurgerStates);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { filteredData } = context;
  return (
    <div className="h-44 w-[85%] bg-white rounded-xl py-4 px-6 flex items-center justify-between">
      <div className="flex flex-col items-start justify-center gap-6">
        <h2 className="text-lg font-bold text-[#3A4374]">Roadmap</h2>
        <div className="flex items-start justify-center flex-col gap-2 text-[#647196]">
          <div className="flex items-center justify-center gap-4">
            <div className="h-2 w-2 rounded-full bg-[#F49F85]"></div>
            <p>Planned</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-2 w-2 rounded-full bg-[#AD1FEA]"></div>
            <p>In-Progress</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-2 w-2 rounded-full bg-[#62BCFA]"></div>
            <p>Live</p>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center flex-col gap-6">
        <h2 className="underline font-semibold text-[#4661E6] text-sm cursor-pointer">
          View
        </h2>
        <div className="flex items-end justify-center flex-col gap-2">
          <p className="text-[#647196] font-bold">3</p>
          <p className="text-[#647196] font-bold">2</p>
          <p className="text-[#647196] font-bold">1</p>
        </div>
      </div>
    </div>
  );
}
