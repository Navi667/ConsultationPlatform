import React, { useState } from 'react';
import Post from './Post';
import "./Posts.css";


const Posts = (receiveArticles) => {
    const articles = receiveArticles.receiveArticles;

    //选中高亮页面
    const [pageIndex, setPageIndex] = useState(1);
    //分页器页面数
    const [currentPage, setCurrentPage] = useState(1);
    //每一页显示多少文章
    const [articlesPerPage, setArticlesPerPage] = useState(5);
    //在特定页面上显示项目的边界
    //每页的最后一篇文章
    const lastArticleInView = currentPage * articlesPerPage;
    //每页的第一篇文章
    const firstArticleInView = lastArticleInView - articlesPerPage;
    //页面数
    const pageNumbers = [];

    //该页面要渲染的所有文章
    //该页面要渲染的所有文章

    //先将文章列表反转
    let articlesListReverse = articles.slice().reverse();
    //再按照每页数量分割文章列表
    let articlesDisplay = articlesListReverse.slice(firstArticleInView, lastArticleInView);
    for (let i = 1; i <= Math.ceil(articles.length / articlesPerPage); i++) {
        pageNumbers.push(i);
    }
    const changePageHandler = (e, num) => {
        setCurrentPage(num);
        setPageIndex(num);
        window.scrollTo(0, 0)
    }

    return (

        <div className='posts'>
            {articlesDisplay.map((article) => {
                return <Post article={article} key={article._id}></Post>
            })}
            <div className='postsPageSorter'>
                {pageNumbers.map((pageNum, index) => {
                    return <button className={pageNum === pageIndex ? 'pageSorterBtn checked' : 'pageSorterBtn'} key={index} onClick={(e) => { changePageHandler(e, pageNum) }}>{pageNum}</button>
                })}
            </div>
        </div>


    )
}

export default Posts