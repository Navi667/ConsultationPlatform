import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import { useAuthContext } from '../context/AuthContext';
import useConversation from '../zustand/useConversation';

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages, selectedConversation } = useConversation();
    const { authUser } = useAuthContext();

    useEffect(() => {
        // console.log(selectedConversation);
        // console.log(authUser)
        socket?.on("newMessage", (newMessage) => {
            if (authUser._id === newMessage.receiverId && selectedConversation._id === newMessage.senderId) {
                setMessages([...messages, newMessage])
            }

        })

        return () => socket?.off("newMessage")
    }, [socket, setMessages, messages])
}

export default useListenMessages