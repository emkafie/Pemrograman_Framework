import Link from "next/link";
import styles from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const HalamanLogin = () => {
    const {push, query} = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const callbackUrl: any = query.callbackUrl || "/";

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        
        try {
            const response = await signIn("credentials" , {
                redirect: false,
                email: e.target.email.value,
                password: e.target.password.value,
                callbackUrl,
            });
            
            if (!response?.error) {
                setLoading(false);
                push(callbackUrl);
            } else {
                setLoading(false);
                setError(response?.error || "Email atau password salah");
            }
        } catch (err) {
            setLoading(false);
            setError("Login gagal");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <div className={styles.login}>
            <div className={styles.login__container}>
                <header className={styles.login__header}>
                    <h2>Masuk Akun</h2>
                    <p>Masuk ke akun Anda</p>
                </header>

                {error && !error.includes("Email") && !error.includes("Password") && (
                    <div className={styles.login__error}>{error}</div>
                )}

                <form className={styles.login__form} onSubmit={handleSubmit}>
                    <div className={styles.login__form__group}>
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="Alamat Email" 
                            required 
                        />
                        {error && error.includes("Email") && (
                            <p className={styles.login__form__group__error}>{error}</p>
                        )}
                    </div>
                    <div className={styles.login__form__group}>
                        <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            placeholder="Kata Sandi (min. 6 karakter)" 
                            minLength={6}
                            required 
                        />
                        {error && error.includes("Password") && (
                            <p className={styles.login__form__group__error}>{error}</p>
                        )}
                    </div>
                    
                    <button type="submit" disabled={loading}>
                        {loading ? "Memproses..." : "Masuk Akun"}
                    </button>
                    <button type="button" onClick={() => signIn("google", { callbackUrl, redirect: false })} disabled={loading}>
                        {loading ? "Memproses..." : "Masuk dengan Google"}
                    </button>
                    <button type="button" onClick={() => signIn("github", { callbackUrl, redirect: false })} disabled={loading}>
                        {loading ? "Memproses..." : "Masuk dengan GitHub"}
                    </button>
                </form>

                <footer className={styles.login__footer}>
                    <p>
                        Belum punya akun?{" "}
                        <Link href="/auth/register" className={styles.login__footer__link}>
                            Daftar di sini
                        </Link>
                    </p>
                </footer>
            </div>
        </div>
        </>
    );
};

export default HalamanLogin;