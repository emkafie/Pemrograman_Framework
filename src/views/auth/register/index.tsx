import Link from "next/link";
import styles from "./register.module.css";

const halamanRegister = () => {
    return (
        <div className={styles.register}>
            <h1 className="text-4xl font-bold pb-6">Halaman Register</h1>
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