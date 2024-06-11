import React, { useState, useRef } from 'react';
import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate, useLocation } from 'react-router';
import "./MyLayout.css";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Admin', '/adminpage', <UserOutlined />),
  getItem('文章管理', '/adminpage/articlemanage', <FileOutlined />),
  getItem('用户管理', '/adminpage/usermanage', <FileOutlined />),
  getItem('医生认证管理', '/adminpage/docmanage', <TeamOutlined />),
  getItem('返回首页', '/'),
];

const MyLayout = ({children}) => {

  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const pathname = useLocation().pathname;
  const menuRef = useRef(null);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        position:"relative",
        height:"100%"
      }}
    >
      <Sider className="layoutSider" 
      collapsible={true} 
      collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value)}
      style={{
        height:"100vh"
      }}
      >
      <div className="demo-logo-vertical" />
        <Menu ref={menuRef}
        theme="dark" 
        defaultSelectedKeys={[`/adminpage`]}
        selectedKeys={[`${pathname}`]} 
        mode="inline" 
        items={items} 
        onClick={({key}) => {navigate(key)}}
        />
      </Sider>
      <Layout style={{ display: 'flex', flex: 1 }}>
        <Header style={{
            padding: 0,
            background: colorBgContainer,
            textAlign: 'center',
          }}>
           <span className='adminTitle'>管理面板</span>
          </Header>
        <Content style={{ 
          flex: 1,
          overflow:"auto",
          position:"relative", 
          width:"100%"
          }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default MyLayout;