import React, { useState } from 'react';
import "./Write.css";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';//富文本样式文件
import { useGetModules } from '../../utils/quillModules';

const Write = () => {
    const [value, setValue] = useState("");
    const modules = useGetModules();

    const categories = ["健康资讯", "前沿医疗", "时尚健康", "食品安全", "健康访谈"];
    return (
        <div className='write'>
            <div className='writeContent'>
                <input className='writeTitle' placeholder='Title' type='text'></input>
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
                    <input type='text' className='writeBgUrl'></input>
                    <div className='writeBtns'>
                        <button className='writeBtn'>存为草稿</button>
                        <button className='writeBtn'>更新文章</button>
                    </div>
                </div>
                <div className='item'>
                    <h1 className='writeMenuTitle'>栏目：</h1>
                    {categories.map((category, index) => {
                        return <div className='chooseCat' key={index}>
                            <input type='radio' name="cat" value={category} id={index}></input>
                            <label htmlFor={category}>{category}</label>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Write