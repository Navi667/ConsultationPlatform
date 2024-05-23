import React from 'react';
import {Table} from 'antd';
import useGetAllArticles from '../../hooks/useGetAllArticles';
import useArticle from '../../zustand/useArticle';
import useGetColumns from './columns';

const ArticleManage = () => {

  useGetAllArticles();
  const { articles } = useArticle();
  let articlesListReverse = articles.slice().reverse();

  const columns = useGetColumns();

  return (
    <div style={{
      position:"absolute",
      width:"100%",
      overflow:"auto",
      height:"100%"
    }}>
      <Table className="articleTable"  style={{width:"100%"}} columns={columns} dataSource={articlesListReverse} rowKey={"_id"}/>
    </div>
  )
}

export default ArticleManage;