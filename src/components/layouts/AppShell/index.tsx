import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <div>
            <main>
                <Navbar />
                {children}
                <footer className="footer">
                    Ini Footer
                </footer>
            </main>
                
        </div>
    );
};

export default AppShell;