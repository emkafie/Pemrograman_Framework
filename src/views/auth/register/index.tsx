import Link from "next/link";
import styles from "./register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const HalamanRegister = () => {
    const {push} = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const username = formData.get("username") as string;

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });
            
            const data = await response.json();
            
            if (data.status) {
                form.reset();
                push("/auth/login");
            } else {
                setError(data.message || "Email sudah terdaftar");
            }
        } catch (err) {
            setError("Terjadi kesalahan koneksi");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.register}>
            <div className={styles.register__container}>
                <header className={styles.register__header}>
                    <h2>Daftar Akun</h2>
                    <p>Bergabunglah bersama kami sekarang</p>
                </header>

                {error && !error.includes("Email") && !error.includes("Password") && (
                    <div className={styles.register__error}>{error}</div>
                )}

                <form className={styles.register__form} onSubmit={handleSubmit}>
                    <div className={styles.register__form__group}>
                        <input 
                            id="username" 
                            name="username" 
                            type="text" 
                            placeholder="Username" 
                            required 
                        />
                    </div>
                    <div className={styles.register__form__group}>
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="Alamat Email" 
                            required 
                        />
                        {error && error.includes("Email") && (
                            <p className={styles.register__form__group__error}>{error}</p>
                        )}
                    </div>
                    <div className={styles.register__form__group}>
                        <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            placeholder="Kata Sandi (min. 6 karakter)" 
                            minLength={6}
                            required 
                        />
                        {error && error.includes("Password") && (
                            <p className={styles.register__form__group__error}>{error}</p>
                        )}
                    </div>
                    
                    <button type="submit" disabled={loading}>
                        {loading ? "Memproses..." : "Buat Akun"}
                    </button>
                </form>

                <footer className={styles.register__footer}>
                    <p>
                        Sudah punya akun?{" "}
                        <Link href="/auth/login" className={styles.register__footer__link}>
                            Masuk di sini
                        </Link>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default HalamanRegister;