type MainSectionProps = {
  onLogout: () => void;
};

const MainSection = ({ onLogout }: MainSectionProps) => {
  return (
    <main className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-800">Main Section</h2>
      <p className="mt-2 text-slate-600">
        Ini area utama untuk menampilkan daftar, filter, atau detail produk.
      </p>

      <button
        onClick={onLogout}
        className="mt-6 rounded bg-rose-500 px-4 py-2 font-medium text-white hover:bg-rose-600"
      >
        Logout
      </button>
    </main>
  );
};

export default MainSection;
