import Link from 'next/link';
import Button from './Button';

export default function Aboutheader({ display }: { display: boolean }) {
  return (
    <div className="w-[93%] h-10 flex items-center justify-between px-3">
      <div className="flex items-center justify-center  cursor-pointer">
        <Link href={'/'} className="w-full flex items-center gap-3 justify-center ">
          <img src="shared\icon-arrow-left.svg" alt="" />
          <p className="font-bold text-sm text-[#647196]">Go Back</p>
        </Link>
      </div>
      {display ? <Button content="Edit Feedback" color="#4661E6" /> : null}
    </div>
  );
}
