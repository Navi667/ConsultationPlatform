import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from "../../hooks/useGetConversations"
import toast from 'react-hot-toast';

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      return toast.error("未搜索到用户")
    }
  }

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
      <input type="text" placeholder="Search.." className='input input-bordered rounded-full'
        value={search}
        onChange={(e) => { setSearch(e.target.value) }}></input>
      <button type="submit" className='btn btn-circle bg-sky-500 text-white'>
        <FaSearch className='w-6 h-6 outline-none'></FaSearch>
      </button>
    </form>
  )
}

export default SearchInput