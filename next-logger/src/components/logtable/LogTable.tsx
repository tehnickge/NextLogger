export interface Colums {
  title: string;
}

export interface TableProps {
  colums: Colums[];
  dataRow: any[][];
}

const LogTable = ({ colums, dataRow }: TableProps) => {
  return (
    <table className="min-w-full divide-y bg-indigo-300">
      <thead>
        <tr>
          {colums.map((colum, index) => (
            <th
              key={index}
              className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
            >
              {colum.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y text-gray-700">
        {dataRow.map((row, index) => (
          <tr key={index}>
            {row.map((col, i) => (
              <td key={i} className="px-6 py-4 whitespace-nowrap">
                {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogTable;
