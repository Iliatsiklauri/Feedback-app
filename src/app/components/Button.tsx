type PropType = {
  content: string;
  color?: string;
  width?: string;
};

export default function Button({ color, content, width }: PropType) {
  return (
    <div
      style={{
        background: color ? `${color}` : '#AD1FEA',
        width: width ? `${width}` : '133px',
      }}
      className="flex items-center justify-center cursor-pointer h-11 rounded-xl flex-shrink-0"
    >
      <p className="font-bold text-xs text-[#F2F4FE]">{content}</p>
    </div>
  );
}
