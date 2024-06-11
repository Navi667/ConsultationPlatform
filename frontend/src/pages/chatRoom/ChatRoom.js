import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

function ChatRoom() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-gray-950'>
        <Sidebar></Sidebar>
        <MessageContainer></MessageContainer>
      </div>
    </div>
  )
}

export default ChatRoom