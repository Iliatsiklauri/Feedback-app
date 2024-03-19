import React, { FormEvent, useContext, useState } from 'react';
import Button from './Button';
import { GlobalProvider } from '../GlobalStates';
import { JSONData } from '../data';

export default function AddComent({ id }: { id: number }) {
  const [length, setLength] = useState(250);
  const [text, setText] = useState('');
  const context = useContext(GlobalProvider);

  if (!context) {
    return <h1>no context</h1>;
  }

  const { setJsonData } = context;
  const jsonData = context.jsonData?.productRequests[id];
  const userData = context.jsonData?.currentUser;

  const setComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text !== '') {
      const obj = {
        id: 6,
        content: text,
        user: userData,
      };

      const updatedComments = [...(jsonData?.comments ?? []), obj];
      setJsonData((prevJsonData) => {
        if (!prevJsonData) return null;
        return {
          ...prevJsonData,
          productRequests: prevJsonData.productRequests.map((productRequest, index) => {
            if (index !== id) return productRequest;
            return { ...productRequest, comments: updatedComments };
          }),
        };
      });
    }

    setText('');
  };

  return (
    <form
      className="w-[93%] h-[230px] bg-white rounded-xl flex flex-col items-start p-4 justify-center gap-3"
      onSubmit={setComment}
    >
      <p className="text-[#3A4374] font-bold text-lg">Add Comment</p>
      <input
        value={text}
        type="text"
        className="bg-[#F7F8FD] rounded-md pb-8 pl-4 pr-4 placeholder:text-[#8C92B3] placeholder:text-sm text-sm text-black font-medium w-full h-20  focus:outline-none flex-wrap"
        placeholder="Type your comment here"
        maxLength={250}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="w-full flex justify-between items-center">
        <p className="text-[#647196] text-sm ml-1">
          {length - text.length} Characters left
        </p>
        <button>
          <Button content="Post Comment" />
        </button>
      </div>
    </form>
  );
}
