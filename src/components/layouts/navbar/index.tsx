import { signOut, useSession, signIn } from "next-auth/react";
import Link from "next/link";
import styles from './navbar.module.css'; // Keep import if needed, though we primarily use Tailwind now

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold text-blue-600 transition-colors hover:text-blue-700">
          <Link href="/">TokoApasih</Link>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          <Link href="/produk" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Produk
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            About
          </Link>
          <button className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Kategori
          </button>
          <button className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Promo
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {session ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-700 hidden sm:block">
              Hai, {(session?.user as any)?.fullname || session?.user?.name || 'User'}!
            </span>
            <button
              onClick={() => signOut()}
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-600 active:scale-95"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-95"
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
