import Link from "next/link";
import {useSession} from "next-auth/react"

export default function ProfilePage() {
    const {data}:any = useSession();
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Profil Saya</h1>
            
            <div className="bg-white p-6 rounded shadow mb-6">
                <p className="text-2xl font-semibold text-slate-800">Selamat Datang {data?.user?.email}</p>
            </div>

            <div className="flex gap-4">
                <Link href="/profile/edit">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Edit
                    </button>
                </Link>
            </div>
        </div>
    );
}
