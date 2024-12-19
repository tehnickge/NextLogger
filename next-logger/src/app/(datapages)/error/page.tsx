"use client";
import { IError } from "@/app/api/chat/error/route";
import { IUser } from "@/app/api/chat/user/route";
import LogTable from "@/components/logtable/LogTable";
import { getRequest } from "@/utils/axios";
import { useEffect, useState } from "react";

const ErrorPage = () => {
  const fetchErrors = async () => {
    try {
      const errorData = await getRequest<IError[]>("/chat/error");
      setError(errorData);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };
  const [error, setError] = useState<IError[]>([]);
  useEffect(() => {
    fetchErrors();
  }, []);

  return (
    <LogTable
      dataRow={error}
      columns={error && error.length > 0 ? Object.keys(error[0]) : []}
    ></LogTable>
  );
};

export default ErrorPage;
