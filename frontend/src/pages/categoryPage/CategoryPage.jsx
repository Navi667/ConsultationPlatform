import React from 'react';
import useGetArticlesByCat from '../../hooks/useGetArticlesByCat';
import useArticle from '../../zustand/useArticle';
import { useParams } from 'react-router';
import Posts from '../../components/posts/Posts';

const CategoryPage = () => {
  const {cat} = useParams();
  const catArts = useGetArticlesByCat(cat).catArticles
  console.log(catArts)
  return (
    <>
     <Posts receiveArticles={catArts}></Posts>
    </>
  )
}

export default CategoryPage