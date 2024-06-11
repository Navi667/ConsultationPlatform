import { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
function Conversation({ conversation, lastIndex }) {
    const [ docUser, setDocUser ] = useState({});
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    useEffect(() => {
        const getDocUser = async (userId) => {
            try {
                const res = await fetch(`/api/doctor/getByUserId`, {
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
        getDocUser(conversation._id);
    }, [])
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} alt='avatar img' />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-950'>{docUser[0] ? docUser[0].classroom+conversation.fullName+'医生' : conversation.fullName}</p>
                        <span className='text-xl'></span>
                    </div>
                </div>
            </div>

            {!lastIndex && <div className='divider my-0 py-0 h-1'></div>}
        </>
    )
}

export default Conversation