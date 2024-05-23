import React from 'react';
import MyLayout from './MyLayout';
import { Route, Routes } from 'react-router';

import ArticleManage from '../../components/articleManage/ArticleManage';
import DocManage from '../../components/docManage/DocManage';
import UserManage from '../../components/userManage/UserManage';

import UpdateArticle from '../updateArticle/UpdateArticle';
import { useNavigate } from 'react-router';

import { Button, Calendar } from 'antd';

const FirstPage = () => {

  const navigate = useNavigate();
  const operaList = [
    {
      name: "文章管理",
      road: "/adminpage/articlemanage",
    },
    {
      name: "用户管理",
      road: "/adminpage/usermanage",
    },
    {
      name: "医生认证管理",
      road: "/adminpage/docmanage",
    },

  ]

  return (
    <div className='firstPageComp' style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}>
      <h1 style={{
        fontSize: "36px",
        fontWeight: "bold",
        margin: "20px 20px"
      }}>欢迎来到管理员面板，管理员admin</h1>
      <h2 style={{
        fontSize: "24px",
        margin: "20px"
      }}>
        请选择你要使用的功能：
      </h2>
      <div style={{
        width: "800px",
        display: "flex",
        justifyContent: "space-between",
        margin: "20px"
      }}>
        {
          operaList.map((item, index) => {
            return <Button
              key={index}
              type="primary"
              style={{ color: "white", backgroundColor: "blue", width: "150px", height: "50px" }}
              onClick={() => { navigate(item.road) }}>{item.name}</Button>
          })
        }
      </div>
        <Calendar style={{
          width:"600px",
          height:"400px"
        }}></Calendar>
    </div>
  )
}

const AdminPage = () => {
  return (
    <MyLayout>
      <Routes>
        <Route path='/' element={<FirstPage></FirstPage>}></Route>
        <Route path='/articlemanage' element={<ArticleManage></ArticleManage>}></Route>
        <Route path='/usermanage' element={<UserManage></UserManage>}></Route>
        <Route path='/docmanage' element={<DocManage></DocManage>}></Route>
        <Route path='/updatearticle/:id' element={<UpdateArticle></UpdateArticle>}></Route>
      </Routes>
    </MyLayout>
  )
}

export default AdminPage;