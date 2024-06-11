import React, { useEffect, useState } from 'react';
import DocCard from './docCard/DocCard';
import "./DocList.css";

const DocList = (classroom) => {
    const docClass = classroom.classroom;
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        const getDoc = async (docClassroom)=>{
            try{
                const res = await fetch(`/api/doctor/getByClass`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({classroom: docClassroom})
                });
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                };
                setDocs(data);
            }catch(error){
                console.log(error.message);
            }finally{
                return;
            }
        };
       getDoc(docClass);
    },[docClass]);

    return (
        <div className='list-cards'>
            {docs.map((item, index) => {
                return <DocCard doctorInfor={item} key={index}></DocCard>
            })}
        </div>
    )
}

export default DocList