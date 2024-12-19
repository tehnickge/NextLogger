"use client";
import { IUser } from "@/app/api/chat/user/route";
import { IUserChatRoom } from "@/app/api/chat/userchatroom/route";
import LogTable from "@/components/logtable/LogTable";
import { getRequest } from "@/utils/axios";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const fetchUsers = async () => {
    try {
      const usersData = await getRequest<IUserChatRoom[]>("/chat/chatroom");
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };
  const [users, setUsers] = useState<IUserChatRoom[]>([]);
  console.log(users);
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <LogTable
      dataRow={users}
      columns={users && users.length > 0 ? Object.keys(users[0]) : []}
    ></LogTable>
  );
};

export default UsersPage;
