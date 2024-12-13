import LogTable, { TableProps } from "@/components/logtable/LogTable";
import NavigateComponent from "@/components/navigate/Navigate";

const test: TableProps = {
  colums: [
    { title: "event" },
    { title: "tirger" },
    { title: "data" },
    { title: "status" },
    { title: "date" },
  ],
  dataRow: [
    ["make user", "user 42", "", "ok", `24-12-2024 11:00`],
    ["make user", "user 42", "", "ok", `24-12-2024 11:00`],
    ["make user", "user 42", "", "ok", `24-12-2024 11:00`],
    ["make user", "user 42", "", "ok", `24-12-2024 11:00`],
    ["make user", "user 42", "", "ok", `24-12-2024 11:00`],
    ["make user", "user 42", "", "ok", `24-12-2024 11:00`],
    ["make user", "user 42", "", "ok", `24-12-2024 11:00`],
    ["make user", "user 42", "", "ok", `24-12-2024 11:00`],
    ["make user", "user 42", "", "ok", `24-12-2024 11:00`],
  ],
};

export default function Home() {
  return (
    <div className="">
      <NavigateComponent></NavigateComponent>
      <LogTable {...test}></LogTable>
    </div>
  );
}
