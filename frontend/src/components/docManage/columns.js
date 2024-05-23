import React from 'react';
import { extractDate } from "../../utils/extractTime";
import { Space, Button } from 'antd';
import toast from 'react-hot-toast';

const addDoc = async(doctor, formId) => {
    try {
        const res = await fetch("/api/doctor/add", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(doctor)
        });
        const data = await res.json();
        toast.success(data); 

        const pass = await fetch(`/api/application/pass/${formId}`);
        const passRes = await pass.json();
        toast.success(passRes);

    }catch(error){
        console.log(error.message);
        toast.error(error.message)
    }
}


const useGetColumns = () => {

    const columns = [
        {
            title: '申请人姓名',
            dataIndex: 'docName',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '所属科室',
            dataIndex: 'classroom',
            key: 'category',
            width: "8%",
        },
        {
            title: '所属医院',
            dataIndex: 'hospital',
            key: 'hospital',

        },
        {
            title: "职级",
            dataIndex: "position",
            key: "position",
            width: "10%",
        },
        {
            title: '履历',
            key: 'record',
            dataIndex: "record",
            width: "40%",
            ellipsis: "true"
        },
        {
            title:"申请时间",
            dataIndex:"updatedAt",
            key:"update",
            render: (_, record) => {
                const { updatedAt } = record;
                return <span>
                    {extractDate(updatedAt)}
                </span>
            }
        },
        {
            title:"状态",
            dataIndex:"isPass",
            key:"isPass",
            render: (_, record) => {
                const { isPass } = record;
                return <span>
                    {isPass ? "已通过" : "未通过"}
                </span>
            }
        },
        {
            title: 'Action',
            key: 'action',
            width:"280px",
            render: (_, information) => {
                const {docName, classroom, hospital, position, record, userId, _id, isPass } = information;
                const newDoctor = {docName, classroom, hospital, position, record, userId}
                return <Space size="small">
                    <Button 
                    style={{ width: "80px", height: "40px",color:"black",backgroundColor:"white" }} 
                    onClick={() => {addDoc(newDoctor, _id)}}
                    disabled = {isPass ? true : false}
                    >{isPass ? "已通过" : "通过"}</Button>
                    <Button style={{ width: "80px", height: "40px",color:"black",backgroundColor:"white" }} onClick={() => {}}>拒绝</Button>
                </Space >
            },
        },
    ];
    return columns;
}

export default useGetColumns