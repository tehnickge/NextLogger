"use client";
import { IMessage } from "@/app/api/chat/message/route";
import LogTable from "@/components/logtable/LogTable";
import { getRequest } from "@/utils/axios";
import { useEffect, useState } from "react";

const ErrorPage = () => {
  const fetchMessages = async () => {
    try {
      const usersMessages = await getRequest<IMessage[]>("/chat/message");
      setMessages(usersMessages);
    } catch (messages) {
      console.error("messages fetching users", messages);
    }
  };
  const [messages, setMessages] = useState<IMessage[]>([]);
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <LogTable
      dataRow={messages}
      columns={messages && messages.length > 0 ? Object.keys(messages[0]) : []}
    ></LogTable>
  );
};

export default ErrorPage;
