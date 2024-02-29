import React from 'react';

import SearchInput from './SearchInput';
import ConversationList from './ConversationList';
import LogoutButton from './LogoutButton';

function Sidebar() {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput></SearchInput>
        <div className='divider px-3'></div>
        <ConversationList></ConversationList>
        <LogoutButton></LogoutButton>

       
    </div>
  )
}

export default Sidebar