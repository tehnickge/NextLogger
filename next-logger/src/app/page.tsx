import LogTable, { TableProps } from "@/components/logtable/LogTable";
import NavigateComponent from "@/components/navigate/Navigate";

const test: TableProps = {
  columns: ["event", "tirger", "data", "status", "date"],
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
      <LogTable {...test}></LogTable>
    </div>
  );
}
