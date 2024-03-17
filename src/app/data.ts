import { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

type User = {
  image: string;
  name: string;
  username: string;
};

type Reply = {
  content: string;
  replyingTo: string;
  user: User;
};

export type comments = {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
};

export type ProductRequest = {
  id?: number;
  title: string;
  category: string;
  upvotes: number;
  status?: string;
  description: string;
  comments?: comments[];
};

type CurrentUser = {
  image: string;
  name: string;
  username: string;
};

export type JSONData = {
  currentUser: CurrentUser;
  productRequests: ProductRequest[];
};

export type Params = {
  params: {
    id: number;
  };
};

export const arr = [
  { title: 'All', number: 0 },
  { title: 'UI', number: 1 },
  { title: 'UX', number: 2 },
  { title: 'Feature', number: 3 },
  { title: 'Enhancement', number: 4 },
];

type GlobalTypes = {
  category: string | null;
  setCategory: Dispatch<SetStateAction<string>>;
};

export const BurgerStates = createContext<GlobalTypes | null>(null);
