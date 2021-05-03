import React from 'react';

import { Header } from '../components/Header';
import { Post } from '../components/Post';

export function Home() {
  return (
    <>
      <Header pageTitle="Home" />
      <Post />
    </>
  );
}
