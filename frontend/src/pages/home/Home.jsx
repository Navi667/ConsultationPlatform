import React from 'react';
import Posts from '../../components/posts/Posts';
import "./Home.css";
import useGetAllArticles from '../../hooks/useGetAllArticles';
import useArticle from '../../zustand/useArticle';

const Home = () => {

  useGetAllArticles();
  const { articles } = useArticle();
  return (
    <div className='home'>
      <Posts receiveArticles={articles}></Posts>
    </div>
  )
}



export default Home