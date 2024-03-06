import React from 'react'
import { Link } from 'react-router-dom';
import useNavTo  from "../../hooks/useNavTo"
import "./Post.css"

const Post = (post) => {
    const postCard = post.post;
    const navTo = useNavTo();
    return (
        <div className='post'>
            <div className='img'>
                <img className='postImg' src={postCard.img} alt="" />
            </div>
            <div className='content'>
                <Link to={`/single`}>
                    <h1 className='postTitle'>{postCard.title}</h1>
                </Link>
                <p className='postDesc'>{postCard.desc}</p>
                <button className='postBtn' onClick={() => { navTo(`/single`) }}>Read More</button>
            </div>
        </div>
    )
}

export default Post