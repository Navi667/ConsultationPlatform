import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import toast from 'react-hot-toast';
import useGetColumns from './columns';


const DocManage = () => {
  const [forms, setForms] = useState([]);
  const columns = useGetColumns();

  useEffect(() => {
    const getAllForms = async () => {
      try {
        const res = await fetch(`/api/application/getAll`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setForms(data);
      } catch (error) {
        toast.error(error.message);
        console.log(error.message)
      } finally {
        return;
      }
    }
    getAllForms();
  },[setForms])

  return (
    <div style={{
      position: "absolute",
      width: "100%",
      overflow: "auto",
      height: "100%"
    }}>
      <Table className="articleTable"  style={{width:"100%"}} columns={columns} dataSource={forms} rowKey={"_id"}/>
    </div>
  )

}

export default DocManage