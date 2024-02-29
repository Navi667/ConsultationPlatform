import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";

function MessageContainer() {
    let noChatSelected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {noChatSelected ? (<NoChatSelected></NoChatSelected>) : (<ChatSelected></ChatSelected>)}
    </div>

  )
}

function ChatSelected(){
    return(
        <>
        <div className='px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>
            <span className='text-gray-900 font-bold'>Navi Nan</span>
        </div>

        <Messages></Messages>
        <MessageInput></MessageInput>
        </>
    )
}

function NoChatSelected(){
    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-600 font-semibold flex flex-col items-center gap-2'>
                <p>starting a chat</p>
                <TiMessages className='text-3xl md:text-6xl text-center'/>
            </div>
        </div>
    )
}

export default MessageContainer