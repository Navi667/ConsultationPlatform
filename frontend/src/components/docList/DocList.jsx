import React from 'react';
import DocCard from './docCard/DocCard';
import "./DocList.css"

const DocList = () => {
    const classes = ["内科", "外科", "妇产科", "儿科", "中医科"]
    return (
        <div className='doc-lists'>
            {classes.map((item, index) => {
                return <div className='doc-list' key={index}>
                    <h1 className='list-title'>{item}</h1>
                    <div className='list-cards'>
                        <DocCard></DocCard>
                        <DocCard></DocCard>
                        <DocCard></DocCard>
                        <DocCard></DocCard>
                        <DocCard></DocCard>
                    </div>
                </div>
            })}
        </div>
    )
}

export default DocList