import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const HalamanLogin = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    
    const handlerLogin = async () => {
        setIsLoading(true);
        localStorage.setItem("authToken", "dummy-token");
        await new Promise(resolve => setTimeout(resolve, 1500));
        router.push("/produk");
    };

    return (
        <div className="flex min-h-screen flex-col gap-4 p-2">
            <h1 className="text-4xl font-bold">Halaman Login</h1>
            
            <button
                onClick={handlerLogin}
                disabled={isLoading}
                className="w-fit p-2 bg-green-500 rounded hover:bg-green-600 disabled:opacity-50"
            >
                <p className="text-white">
                    {isLoading ? "Loading..." : "Login"}
                </p>
            </button>

            <Link
                href="/auth/register"
                className="w-fit p-2 bg-green-500 rounded hover:bg-green-600"
            >
                <p className="text-white">Ke Halaman Register</p>
            </Link>
        </div>
    );
};

export default HalamanLogin;