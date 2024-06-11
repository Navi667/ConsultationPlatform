import React, { useEffect, useState } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { Modal } from 'antd';

function MessageContainer() {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        return () => { setSelectedConversation(null) }
    }, [setSelectedConversation])

    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation ? (<NoChatSelected></NoChatSelected>) : (<ChatSelected conversation={selectedConversation}></ChatSelected>)}
        </div>

    )
}

function ChatSelected(conversation) {
    const [caseInfo, setCaseInfo] = useState({})
    const getCaseById = async (id) => {
            try {
                const res = await fetch(`/api/case/get`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId: conversation.conversation._id })
                });
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setCaseInfo(data);
            } catch (error) {
                console.log(error.message)
            } finally {
                return;
            }
        }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        getCaseById(conversation.conversation._id);
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setCaseInfo("")
    };

    return (
        <>
            <div className='px-4 py-2 mb-2'>
                <span className='label-text'>To:</span>
                <span className='text-gray-900 font-bold' onClick={showModal} style={{cursor:"pointer"}}>{conversation.conversation.fullName}</span>
            </div>
            <Modal title="患者病例" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>{caseInfo[0] ? caseInfo[0].content : ""}</p>
            </Modal>

            <Messages></Messages>
            <MessageInput></MessageInput>
        </>
    )
}

function NoChatSelected() {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-600 font-semibold flex flex-col items-center gap-2'>
                <p>starting a chat</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}

export default MessageContainer