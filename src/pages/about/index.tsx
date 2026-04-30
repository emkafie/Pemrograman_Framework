
export default function About() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center p-4">
      <main className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center border-b border-slate-100 pb-4">
          <h1 data-testid="title" className="text-3xl font-bold text-slate-800">Halaman About</h1>
          <p className="text-sm font-medium text-slate-500">Informasi Mahasiswa</p>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Nama</span>
            <p className="text-lg font-medium text-slate-800">Farrel Muchammad Kafie</p>
          </div>
          
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">NIM</span>
            <p className="text-lg font-medium text-slate-800">2341720176</p>
          </div>
          
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Program Studi</span>
            <p className="text-lg font-medium text-slate-800">D4 Pengembangan Web</p>
          </div>
        </div>
      </main>
    </div>
  );
}