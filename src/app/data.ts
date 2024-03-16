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

type comments = {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
};

export type ProductRequest = {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
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
