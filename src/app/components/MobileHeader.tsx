import { Dispatch, SetStateAction } from 'react';

export default function MobileHeader({
  setBurger,
  burger,
  setModal,
}: {
  burger: boolean;
  setBurger: Dispatch<SetStateAction<boolean>>;
  setModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="h-[72px] w-full header flex items-center justify-between px-6 z-20">
      <div className="text-white">
        <h1 className="font-bold">Frontend Mentor</h1>
        <p className="opacity-75 text-xs font-medium ">Feedback Board</p>
      </div>
      <img
        src={
          !burger ? 'shared/mobile/icon-hamburger.svg' : 'shared/mobile/icon-close.svg'
        }
        alt=""
        className={`cursor-pointer ${burger ? 'h-4 w-4' : null}`}
        onClick={() => {
          setBurger(!burger);
          setModal(false);
        }}
      />
    </div>
  );
}
