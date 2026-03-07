import Link from "next/link";

const halamanRegister = () => {
    return (
        <div className="flex min-h-screen flex-col gap-4 p-2">
            <h1 className="text-4xl font-bold">Halaman Register</h1>
            <Link
                href="/auth/login"
                className="w-fit p-2 bg-green-500 rounded hover:bg-green-600"
            >
                <p className="text-white">Ke Halaman Login</p>
            </Link>
        </div>
    );
};

export default halamanRegister;