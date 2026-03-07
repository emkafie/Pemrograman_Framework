import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const produk = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("authToken");
    if (!userToken) {
      router.replace("/auth/login");
    } else {
      setIsLogin(true);
    }
  }, [router]);

  if (!isLogin) {
    return <div>Redirecting...</div>;
  }

  return (
    <div>
      <h1>Produk User Page</h1>
      <button
        onClick={() => {
          localStorage.removeItem("authToken");
          router.push("/auth/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default produk;
