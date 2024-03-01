import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';

function ConversationList() {
  const { loading, conversations } = useGetConversations();

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, index) => {
        return <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={index === conversations.length - 1}
        ></Conversation>
      })}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default ConversationList