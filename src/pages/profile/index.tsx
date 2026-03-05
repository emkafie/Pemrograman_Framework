import Link from "next/link";

export default function ProfilePage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Profil Saya</h1>
            
            <div className="bg-white p-6 rounded shadow mb-6">
                <p className="mb-4"><strong>Nama:</strong> Farrel Muchammad Kafie</p>
                <p className="mb-4"><strong>Email:</strong> farrel@example.com</p>
                <p className="mb-4"><strong>Phone:</strong> +62 812 3456 7890</p>
                <p><strong>Alamat:</strong> Malang, Indonesia</p>
            </div>

            <div className="flex gap-4">
                <Link href="/profile/edit">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Edit
                    </button>
                </Link>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Logout
                </button>
            </div>
        </div>
    );
}
