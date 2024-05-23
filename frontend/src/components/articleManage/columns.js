import React from 'react';
import { extractDate } from "../../utils/extractTime";
import useDeleteArticle from '../../hooks/useDeleteArticle';
import { Space, Button } from 'antd';
import useNavTo from '../../hooks/useNavTo';

const useGetColumns = () => {

    const { loading, deleteArticleById } = useDeleteArticle();
    const navTo  = useNavTo();

    const handleDelete = (id) => {
        deleteArticleById(id);
        window.location.reload();
    }

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: "8%",
        },
        {
            title: 'Desc',
            dataIndex: 'desc',
            key: 'desc',
            width: "40%",
            ellipsis: "true"
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: "10%",
        },
        {
            title: 'Update',
            key: 'update',
            dataIndex: "updatedAt",
            width: "10%",
            render: (_, record) => {
                const { updatedAt } = record;
                return <span>
                    {extractDate(updatedAt)}
                </span>
            }
        },
        {
            title: 'Action',
            key: 'action',
            width:"280px",
            render: (_, record) => {
                const { _id } = record;
                return <Space size="small">
                    <Button style={{ width: "80px", height: "40px",color:"black",backgroundColor:"white" }} onClick={() => { handleDelete(_id) }}>删除</Button>
                    <Button style={{ width: "80px", height: "40px",color:"black",backgroundColor:"white" }} onClick={() => { navTo(`/adminpage/updatearticle/${_id}`) }}>更新</Button>
                    <Button style={{ width: "80px", height: "40px",color:"black",backgroundColor:"white" }}>发布</Button>
                </Space >
            },
        },
    ];
    return columns;
}

export default useGetColumns