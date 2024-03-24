'use client';
import React, { useState } from 'react';
import data from '@/app/data.json';
import { GlobalProvider } from './data';
export default function Global({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState(data.productRequests);
  const [user, setUser] = useState(data.currentUser);
  return (
    <GlobalProvider.Provider value={{ posts, setPosts, setUser, user }}>
      {children}
    </GlobalProvider.Provider>
  );
}
