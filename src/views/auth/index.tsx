import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from './login.module.scss';

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
        <div className="flex min-h-[70vh] items-center justify-center p-4">
            <main className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col gap-6">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-3xl font-bold text-slate-800">Login</h1>
                    <p className="text-sm font-medium text-slate-500">Silakan masuk ke akun Anda</p>
                </div>
                
                <div className="flex flex-col gap-4">
                    <button
                        onClick={handlerLogin}
                        disabled={isLoading}
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white font-semibold transition-all hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-blue-300"
                    >
                        {isLoading ? "Memuat..." : "Login"}
                    </button>
                </div>

                <div className="flex flex-col items-center gap-3 border-t border-slate-100 pt-6">
                    <p className="text-sm text-slate-600">Belum Punya Akun?</p>
                    <Link
                        href="/auth/register"
                        className="w-full text-center rounded-lg bg-white border border-slate-200 px-4 py-3 text-slate-700 font-semibold transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-95 hover:shadow-sm"
                    >
                        Ke Halaman Register
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default HalamanLogin;