import { TbDotsVertical } from "react-icons/tb";
import type { DataRow } from "../../interface/interface";

type TableProps = {
  data: DataRow[];
};

const thClass = "px-3 py-2 text-left font-medium text-[#875ef8] border-b-2 border-[#0c0570] text-[0.8125rem]";
const tdClass = "px-3 py-2 border-b border-[#0c0570] text-[#657593] text-[0.75rem] font-normal";

export default function DataTable({data}: TableProps) {
  return (
    <div className="w-[97%] overflow-x-auto  mt-4 p-10">
      <table className="w-full border-collapse font-roboto">
        <thead className="bg-white">
          <tr>
            <th className={thClass}>
              ID
            </th>
            <th className={thClass}>
              Usuário
            </th>
            <th className={thClass}>
              Email
            </th>
            <th className="border-b-2 border-[#0c0570]"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className={tdClass}>
                {row.id}
              </td>
              <td className={tdClass}>
                {row.username}
              </td>
              <td className={tdClass}>
                  {row.email}
              </td>
              <td className="px-3 py-3 border-b border-[#0c0570]">
                <TbDotsVertical color="#875ef8" className="cursor-pointer"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
