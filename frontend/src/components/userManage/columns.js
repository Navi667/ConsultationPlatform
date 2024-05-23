import React from 'react';
import { extractDate } from "../../utils/extractTime";
import { Space, Button } from 'antd';
import useNavTo from '../../hooks/useNavTo';

const useGetColumns = () => {

    const navTo = useNavTo();


    const columns = [
        {
            title: 'fullName',
            dataIndex: 'fullName',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'username',
            dataIndex: 'username',
            key: 'category',
            width: "8%",
        },
        {
            title: 'gender',
            dataIndex: 'gender',
            key: 'desc',
            width: "8%",
            ellipsis: "true"
        },
        {
            title: "profilePic",
            dataIndex: "profilePic",
            key: "status",
            width: "30%",
        },
        {
            title: 'permission',
            dataIndex: "permission",
            key: 'permission',
            width: "10%",
        },
        {
            title: "createdAt",
            dataIndex: "createdAt",
            key: "createdAt",
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
            width: "250px",
            render: (_, record) => {
                const { _id } = record;
                return <Space size="small">
                    <Button style={{ width: "80px", height: "40px",color:"black",backgroundColor:"white" }} onClick={() => { }}>删除</Button>
                    <Button style={{ width: "80px", height: "40px",color:"black",backgroundColor:"white" }} onClick={() => { }}>更新</Button>
                </Space >
            },
        },
    ];
    return columns;
}

export default useGetColumns