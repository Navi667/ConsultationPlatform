import React from 'react';
import Menu from '../../components/menu/Menu';
import "./Single.css"
import { useParams } from 'react-router';
import useGetArticleById from '../../hooks/useGetArticleById';
import { extractDate } from '../../utils/extractTime';
import ScrollToTop from '../../utils/scrollToTop';

const Single = () => {
    const { id } = useParams();
    const article = useGetArticleById(id).article;
    // const parser = new DOMParser();
    // const doc = parser.parseFromString(article.content, "text/html");
    // console.log(doc)

    const extractedDate = extractDate(article.createdAt);
    function convertStringToHTML(str) {
        return React.createElement('div', { dangerouslySetInnerHTML: { __html: str } })
    }
    const htmlStr = convertStringToHTML(article.content)

    return (
        <div className='single'>
            <ScrollToTop></ScrollToTop>
            <div className='content'>
                <img className='bgc' src={article.bgImg} alt=''></img>
                <div className='info'>
                    <h1 className='title'>{article.title}</h1>
                    <span>{article.auth}</span>
                    <p>{extractedDate}</p>
                </div>
                <div className='article'>
                    {htmlStr}
                </div>
            </div>
            <Menu></Menu>
        </div>
    )
}

export default Single