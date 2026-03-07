import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";

const ProdukView = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("authToken");

    if (!userToken) {
      router.replace("/auth/login");
      return;
    }

    setIsLogin(true);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/auth/login");
  };

  if (!isLogin) {
    return <div>Redirecting...</div>;
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-120px)] w-full max-w-5xl flex-col gap-6 px-4 py-8">
      <HeroSection username="User" />
      <MainSection onLogout={handleLogout} />
    </div>
  );
};

export default ProdukView;
