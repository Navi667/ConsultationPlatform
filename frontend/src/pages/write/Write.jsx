import React, { useState } from 'react';
import "./Write.css";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';//富文本样式文件
import { useGetModules } from '../../utils/quillModules';
import  useSubmitArticle  from "../../hooks/useSubmitArticle";
import toast from 'react-hot-toast';

const Write = () => {
    const modules = useGetModules();

    const [value, setValue] = useState("");
    const [article, setArticle] = useState({
        title: "",
        desc: "",
        author: "",
        category: "",
        bgImg: "",
        content: "",
        status: ""
    })

    const selectedCategory = article.category;
    const handleConfirm = () => {
        setArticle({ ...article, content: value });
        toast.success('文章保存成功')
    }

    const { loading, submit } = useSubmitArticle();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (article.content === value) {
            console.log(article)
        } else {
            toast.error("文章尚未保存")
        }
        await submit(article);
        setValue("")
        setArticle({
            title: "",
            desc: "",
            author: "",
            category: "",
            content:"",
            bgImg: "",
            status: ""
        })
    }

    const categories = ["健康资讯", "前沿医疗", "时尚健康", "食品安全", "健康访谈"];
    return (
        <form onSubmit={handleSubmit}>
            <div className='write'>
                <div className='writeContent'>
                    <input className='writeTitle' placeholder='Title' type='text'
                        value={article.title}
                        onChange={(e) => { setArticle({ ...article, title: e.target.value }) }}></input>
                    <input className='writeTitle' placeholder='Desc' type='text'
                        value={article.desc}
                        onChange={(e) => { setArticle({ ...article, desc: e.target.value }) }}></input>
                    <input className='writeTitle' placeholder='Author' type='text'
                        value={article.author}
                        onChange={(e) => { setArticle({ ...article, author: e.target.value }) }}></input>
                    <div className='writeContainer'>
                        <ReactQuill
                            className="publish-quill"
                            placeholder="请输入文章内容"
                            theme="snow"
                            modules={modules}
                            value={value}
                            onChange={setValue} />

                    </div>
                </div>
                <div className='writeMenu'>
                    <div className='item'>
                        <h1 className='writeMenuTitle'>发布</h1>
                        <span><b>当前状态:</b> 草稿</span>
                        <span><b>是否公布:</b> 已公布</span>
                        <label>选择背景图片</label>
                        <input type='text' className='writeBgUrl'
                            value={article.bgImg}
                            onChange={(e) => { setArticle({ ...article, bgImg: e.target.value }) }}
                        ></input>
                        <div className='writeBtns'>
                            <button className='writeBtn' type='submit'
                                onClick={() => { setArticle({ ...article, status: "draft" }) }}>存为草稿</button>
                            <button className='writeBtn' type='submit'
                                onClick={() => { setArticle({ ...article, status: "public" }) }}>发布文章</button>
                        </div>
                    </div>
                    <div className='item'>
                        <h1 className='writeMenuTitle'>栏目：</h1>
                        {categories.map((cat, index) => {
                            return <div className='chooseCat' key={index}>
                                <input type='checkbox' name="cat" value={cat} id={index}
                                    checked={selectedCategory === cat}
                                    onChange={() => { setArticle({ ...article, category: cat }) }}></input>
                                <label htmlFor={cat}>{cat}</label>
                            </div>
                        })}
                    </div>
                    <button className='confirmBtn' type='button'
                        onClick={handleConfirm}>保存文章</button>
                </div>
            </div>
        </form>
    )
}

export default Write