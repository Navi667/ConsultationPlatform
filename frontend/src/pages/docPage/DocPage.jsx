import React from 'react';
import DocList from '../../components/docList/DocList';
import "./DocPage.css"

function DocPage() {
  const classes = ["内科", "外科", "妇产科", "儿科", "中医科"]
  return (
    <div className='doc-page'>
            {classes.map((item, index) => {
                return <div className='doc-list' key={index}>
                    <h1 className='list-title'>{item}</h1>
                    <DocList classroom={item}></DocList>
                </div>
            })}
    </div>
  )
}

export default DocPage;