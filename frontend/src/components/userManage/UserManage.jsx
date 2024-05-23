import React, { useEffect, useState } from 'react';
import {Table} from 'antd';
import useGetColumns from './columns';
import toast from 'react-hot-toast';

const useGetUsers = () => { 
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getUsers = async () => {
            setLoading(true)
            try{
                const res = await fetch("/api/users/all");
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setUsers(data);
            }catch(error){
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        }
        getUsers();
    }, [setUsers])

    return {users, loading}
}

const UserManage = () => {

    const {users, loading} = useGetUsers();

    const columns = useGetColumns();
  
    return (
      <div style={{
        position:"absolute",
        width:"100%",
        overflow:"auto",
        height:"100%"
      }}>
        <Table className="articleTable"  style={{width:"100%"}} columns={columns} dataSource={users} rowKey={"_id"}/>
      </div>
    )
}

export default UserManage;
