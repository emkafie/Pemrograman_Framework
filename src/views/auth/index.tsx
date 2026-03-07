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
        <div className={styles.login}>
            <h1 className="text-4xl font-bold text-blue-600">Halaman Login</h1>
            
            <button
                onClick={handlerLogin}
                disabled={isLoading}
                className="w-fit p-2 bg-green-500 rounded hover:bg-green-600 disabled:opacity-50"
            >
                <p className="text-white">
                    {isLoading ? "Loading..." : "Login"}
                </p>
            </button>
            <h1 style={{color: "red", borderRadius: "5px", border: "1px solid red", padding: "10px"}}>Belum Punya Akun</h1>

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