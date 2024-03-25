import data from '@/app/data.json';
import { createContext } from 'react';
export type GlobalStates = {
  posts: typeof data.productRequests;
  setPosts: React.Dispatch<React.SetStateAction<ProductRequest[]>>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};
export const GlobalProvider = createContext<GlobalStates | null>(null);

export type User = {
  image: string;
  name: string;
  username: string;
};

export type Comment = {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
};

type Reply = {
  content: string;
  replyingTo: string;
  user: User;
};

export type ProductRequest = {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: Comment[];
};

type CurrentUser = {
  currentUser: User;
  productRequests: ProductRequest[];
};
