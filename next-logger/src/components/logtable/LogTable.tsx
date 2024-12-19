export interface TableProps {
  columns: String[];
  dataRow: any[];
}

const LogTable = ({ columns, dataRow }: TableProps) => {
  return (
    <table className="min-w-full divide-y bg-indigo-300">
      <thead>
        <tr>
          {columns.map((colum, index) => (
            <th
              key={index}
              className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
            >
              {colum}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y text-gray-700">
        {dataRow.map((row, index) => (
          <tr key={index}>
            {Object.entries(row).map(([key, value], i) => (
              <td key={i} className="px-6 py-4 whitespace-nowrap">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogTable;
