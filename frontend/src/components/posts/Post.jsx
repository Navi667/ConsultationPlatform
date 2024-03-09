import React from 'react'
import { Link } from 'react-router-dom';
import useNavTo  from "../../hooks/useNavTo"
import "./Post.css"

const Post = (article) => {
    const post = article.article
    const navTo = useNavTo();
    return (
        <div className='post'>
            <div className='img'>
                <img className='postImg' src={post.bgImg} alt="" />
            </div>
            <div className='content'>
                <Link to={`/single/${post._id}`}>
                    <h1 className='postTitle'>{post.title}</h1>
                </Link>
                <p className='postDesc'>{post.desc}</p>
                <button className='postBtn' onClick={() => { navTo(`/single/${post._id}`) }}>Read More</button>
            </div>
        </div>
    )
}

export default Post