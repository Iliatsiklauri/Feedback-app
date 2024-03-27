import { Comment, GlobalProvider } from '@/app/data';
import { useContext, useState } from 'react';
import Repply from './Repply';
import Button from '../home/Button';

type propType = {
  el: Comment;
  comments: Comment[];
  id: number;
};

export default function SingleComment({ el, comments, id }: propType) {
  const context = useContext(GlobalProvider);

  if (!context || id === undefined) {
    return <h1>no context or id</h1>;
  }

  const { posts, user, setPosts } = context;

  let ans = comments && comments?.length > 0 ? comments[comments?.length - 1].id : 0;
  const replies = el.replies;
  const [mode, setMode] = useState(false);
  const [replytxt, setTxt] = useState('');

  return (
    <div
      className={`${
        el.id !== ans ? 'border-b-[1px] border-b-[#8C92B3] border-opacity-25' : null
      } w-full flex items-start justify-center flex-col gap-4 `}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex w-[70%] items-center justify-start gap-3">
          <img src={`${el.user.image}`} alt="" className="h-10 w-10 rounded-full" />
          <div className="flex flex-col items-start justify-center ">
            <p className="text-[13px] font-bold text-[#3A4374]">{el.user.name}</p>
            <p className="text-[13px] text-[#647196]">@{el.user.username}</p>
          </div>
        </div>
        <p
          className="text-[#4661E6] text-[13px] font-semibold cursor-pointer"
          onClick={() => setMode(!mode)}
        >
          reply
        </p>
      </div>
      <p className="text-[#647196] text-[13px]">{el.content}</p>
      {mode ? (
        <form
          className="flex items-start justify-between w-full"
          onSubmit={(e) => {
            e.preventDefault();
            const obj = {
              content: replytxt,
              replyingTo: el && el.user && el.user.username,
              user: user,
            };

            if (el) {
              if (!el.replies) {
                el.replies = [];
              }
              el.replies.push(obj);
            }

            const main = [...posts];
            if (main[id - 1] && main[id - 1].comments !== undefined && el && el.id > 0) {
              if (!posts || !posts[id - 1] || el.id === undefined) {
                return <h1>no context or id</h1>;
              }
              const lastId = posts[posts.length - 1]?.id - 1 || 0;
              posts[lastId].comments[lastId] = el;
              setPosts(main);
            }

            setTxt('');
            console.log(el && el.id);
          }}
        >
          <input
            type="text"
            className="bg-[#F7F8FD] h-16 w-[70%] rounded-md focus:outline-[#4661E6] text-[#647196] text-[13px] pb-10 pr-3 pl-2"
            maxLength={40}
            onChange={(e) => setTxt(e.target.value)}
            value={replytxt}
          />
          <button className="w-[25%]">
            <Button color="#AD1FEA" text="Post Reply" width="100%" />
          </button>
        </form>
      ) : null}
      <div className="flex flex-col items-center justify-center w-full gap-4 ">
        {el.replies?.map((el, key) => (
          <Repply el={el} key={key} replies={replies} num={key} />
        ))}
      </div>
    </div>
  );
}
