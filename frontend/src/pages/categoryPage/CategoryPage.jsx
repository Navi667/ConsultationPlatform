import React from 'react';
import useGetArticlesByCat from '../../hooks/useGetArticlesByCat';
import { useParams } from 'react-router';
import Posts from '../../components/posts/Posts';
import "./CategoryPage.css"

const CategoryPage = () => {
  const {cat} = useParams();
  const catArts = useGetArticlesByCat(cat).catArticles
  return (
    <div className='catPage'>
     <h1 className='catName'>{cat}</h1>
     <Posts receiveArticles={catArts}></Posts>
    </div>
  )
}

export default CategoryPage