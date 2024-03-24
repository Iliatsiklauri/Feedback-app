import { Dispatch, SetStateAction } from 'react';

type PropType = {
  burgerMenu: boolean;
  setBurgerMenu: Dispatch<SetStateAction<boolean>>;
};
export default function Header({ burgerMenu, setBurgerMenu }: PropType) {
  return (
    <div className="header w-full h-[72px] flex justify-between items-center px-6 text-white">
      <div>
        <p className="font-bold text-[15px]">Frontend Mentor</p>
        <p className="font-medium text-xs opacity-75">Feedback Board</p>
      </div>
      <img
        src={
          burgerMenu ? `shared/mobile/icon-close.svg` : 'shared/mobile/icon-hamburger.svg'
        }
        alt=""
        className="w-5 h-[17px] cursor-pointer"
        onClick={() => setBurgerMenu(!burgerMenu)}
      />
    </div>
  );
}
