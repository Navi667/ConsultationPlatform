import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';

function Messages() {
    const { messages, loading } = useGetMessages();
    const lastMessageRef = useRef();
    useEffect(() => {
        setTimeout(()=>{
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
        },50)
    },[messages])
    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading && messages.length > 0 &&
                messages.map((message) => {
                    return <div key={message._id}
                        ref={lastMessageRef}>
                        <Message message={message}></Message>
                    </div>
                })}
            {!loading && messages.length === 0 && (<p className='text-center'>可以开始聊天了</p>)}
        </div>
    )
}

export default Messages