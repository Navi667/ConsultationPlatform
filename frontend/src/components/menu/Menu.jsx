import React from 'react';
import OtherPosts from './OtherPosts';
import "./Menu.css";


const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "对视能传“红眼病”？没这么邪乎",
            desc: "近期，得“红眼病”的患者逐渐增多，而且往往出现一家人“整建制”被传染的情况。日前，“女子红眼病传染全家，连狗眼都红了”的话题登上了热搜榜，民间更是一直流传着“红眼病”看一眼就会被传染的说法……这是真的吗？",
            img: "https://p3.img.cctvpic.com/photoworkspace/2024/03/05/2024030511542780957.jpg"
        },
        {
            id: 2,
            title: "对视能传“红眼病”？没这么邪乎",
            desc: "近期，得“红眼病”的患者逐渐增多，而且往往出现一家人“整建制”被传染的情况。日前，“女子红眼病传染全家，连狗眼都红了”的话题登上了热搜榜，民间更是一直流传着“红眼病”看一眼就会被传染的说法……这是真的吗？",
            img: "https://p3.img.cctvpic.com/photoworkspace/2024/03/05/2024030511542780957.jpg"
        },
        {
            id: 3,
            title: "对视能传“红眼病”？没这么邪乎",
            desc: "近期，得“红眼病”的患者逐渐增多，而且往往出现一家人“整建制”被传染的情况。日前，“女子红眼病传染全家，连狗眼都红了”的话题登上了热搜榜，民间更是一直流传着“红眼病”看一眼就会被传染的说法……这是真的吗？",
            img: "https://p3.img.cctvpic.com/photoworkspace/2024/03/05/2024030511542780957.jpg"
        }
    ]
    return (
        <div className='menu'>
            <h1 className='menuTitle'>您可能想看：</h1>
            {posts.map((post) => {
                return <OtherPosts post={post} key={post.id}></OtherPosts>
            })}
        </div>
    )
}

export default Menu