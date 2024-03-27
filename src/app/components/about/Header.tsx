import Link from 'next/link';
import Button from '../home/Button';

export default function Header({ disp }: { disp: boolean }) {
  return (
    <div className="w-full flex justify-between items-center ">
      <Link href={'/'}>
        <div className="flex gap-3 items-center justify-center">
          <img src="shared\icon-arrow-left.svg" alt="" />
          <p className="text-[#647196] text-[13px] font-bold">Go Back</p>
        </div>
      </Link>
      {disp && <Button color="#4661E6" text="Edit Feedback" width="119px" />}
    </div>
  );
}
