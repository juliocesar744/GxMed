import { useEffect, useState } from "react";
import LeftMenu from "../components/layout/LeftMenu";
import DataTable from "../components/table/DataTable";
import type { DataRow } from "../interface/interface";
import Loading from "../components/ui/Loading";

export default function Home() {
    const [users, setUsers] = useState<DataRow[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("http://localhost:5264/api/users");
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="flex w-screen box-border">
            <LeftMenu />
            <hr className="border-none h-screen w-px bg-gray-300 ml-4 mt-0" />
            <div className="flex-1 bg-[#F8F8F8] m-0 p-8">
                <span className="text-2xl font-bold">Usuários</span>
                <div className="flex flex-col border border-[#09428F2B] rounded-[1rem] min-h-[10rem] bg-white">
                    {loading ? (
                        <Loading />
                    ) : (
                        <DataTable data={users} />
                    )
                    }
                </div>
                
            </div>
            
        </div>
    )
}