"use client";
import { IChatRoom } from "@/app/api/chat/chatroom/route";
import { IUser } from "@/app/api/chat/user/route";
import LogTable from "@/components/logtable/LogTable";
import { getRequest } from "@/utils/axios";
import { useEffect, useState } from "react";

const ChatPage = () => {
  const fetchChats = async () => {
    try {
      const chatData = await getRequest<IChatRoom[]>("/chat/chatroom");
      setChats(chatData);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };
  const [chats, setChats] = useState<IChatRoom[]>([]);
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <LogTable
      dataRow={chats}
      columns={chats && chats.length > 0 ? Object.keys(chats[0]) : []}
    ></LogTable>
  );
};

export default ChatPage;
