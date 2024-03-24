export default function CategoryBox({ text }: { text: string }) {
  return (
    <div className="px-4 py-[6px] bg-[#F2F4FF] rounded-[10px] flex flex-col items-center">
      <p className="text-[13px] text-[#4661E6] font-semibold">{text}</p>
    </div>
  );
}
