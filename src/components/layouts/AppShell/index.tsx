import { useRouter } from "next/router";
import Navbar from "../navbar";

const disableNavbarRoutes = ["/auth/login", "/auth/register"];

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const router = useRouter();

    const isErrorPage = router.pathname === "/404" || router.route === "/404" || router.pathname === "/_error";
    const shouldShowNavbar = !disableNavbarRoutes.includes(router.pathname) && !isErrorPage;

    return (
        <div className="min-h-screen flex flex-col">
            {shouldShowNavbar && <Navbar />}
            <main className="flex-1">{children}</main>
            <footer className="footer">Ini Footer</footer>
        </div>
    );
};

export default AppShell;