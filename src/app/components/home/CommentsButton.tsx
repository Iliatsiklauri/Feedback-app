export default function CommentsButton({ comments }: { comments: number }) {
  return (
    <div className="flex items-center justify-center gap-1">
      <img src="shared\icon-comments.svg" alt="" />
      <p className="text-[#3A4374] text-[13px] font-bold">{comments}</p>
    </div>
  );
}
