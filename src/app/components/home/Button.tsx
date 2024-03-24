type PropType = {
  text:
    | '+ Add Feedback'
    | 'Edit Feedback'
    | 'Post Comment'
    | 'Cancel'
    | 'Save Changes'
    | 'Delete';
  color: '#AD1FEA' | '#3A4374' | '#D73737' | '#4661E6';
  width: string;
};
export default function Button({ color, text, width }: PropType) {
  return (
    <div
      style={{ background: color, width: width }}
      className={`rounded-xl  h-[40px] flex items-center justify-center cursor-pointer`}
    >
      <p className="font-bold text-[13px] text-[#F2F4FE]">{text}</p>
    </div>
  );
}
