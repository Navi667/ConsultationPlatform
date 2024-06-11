import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import useConversation from '../../../zustand/useConversation';
import useNavTo from '../../../hooks/useNavTo';
import "./DocCard.css"

function DocCard(doctorInfor) {
  const [docUser, setDocUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedConversation, setSelectedConversation } = useConversation();
  const navTo = useNavTo();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setSelectedConversation(docUser);
    navTo('/chatroom')
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const doctor = doctorInfor.doctorInfor;
  useEffect(() => {
    const getDocUser = async (userId) => {
      try {
        const res = await fetch(`/api/users/id`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId })
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        };
        setDocUser(data);
        return;
      } catch (error) {
        console.log(error.message);
      } finally {
        return;
      }
    }
    getDocUser(doctor.userId);
  }, [])
  return (
    <>
      <div className='doc-card'>
        <img className='doc-pic' src={docUser.profilePic} alt='' onClick={showModal}></img>
        <h1 className='doc-name'>{doctor.docName}</h1>
        <span className='doc-position'>{doctor.position}</span>
        <span className='doc-hos'>{doctor.hospital}</span>
      </div>
      <Modal title="医生履历"
        cancelText='关闭'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered='true'
        okText='问诊'>
        <p className='modal-content'>{doctor.record}</p>
      </Modal>
    </>
  )
}

export default DocCard