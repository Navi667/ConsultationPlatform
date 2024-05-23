import React from 'react';
import OtherPosts from './OtherPosts';
import "./Menu.css";
import useGetArticlesByCat from '../../hooks/useGetArticlesByCat';


const Menu = ({ cat, id }) => {
    const { loading, catArticles } = useGetArticlesByCat(cat);
    return (
        <div className='menu'>
            <h1 className='menuTitle'>{`您可能想看：`}</h1>
            {!loading ? (catArticles.map((post) => {
                if(post._id !== id){
                    return <OtherPosts post={post} key={post._id}></OtherPosts>
                }
            })) : <span>loading</span>}
        </div>
    )
}

export default Menu