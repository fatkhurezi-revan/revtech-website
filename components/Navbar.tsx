import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300" id="navbar">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
                <Image src="/assets/logo.png" alt="RevTech Logo" width={200} height={80} className="h-14 sm:h-16 md:h-[4.5rem] w-auto mix-blend-multiply transition-transform group-hover:scale-105 object-contain" />
            </Link>

            <div className="hidden md:flex items-center space-x-1 bg-white/50 px-4 py-2 rounded-full border border-white/60 shadow-sm">
                <Link className="text-sm font-semibold text-primary px-4 py-2 rounded-full bg-primary/10 transition-all" href="/">Beranda</Link>
                <Link className="text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-full transition-all" href="/layanan">Layanan</Link>
                <Link className="text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-full transition-all" href="/harga">Harga</Link>
                <Link className="text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-full transition-all" href="/portofolio">Portofolio</Link>
                <Link className="text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-full transition-all" href="/faq">FAQ</Link>
            </div>

            <div className="hidden md:flex">
                <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20ingin%20berkonsultasi." target="_blank" rel="noreferrer" className="relative group inline-flex items-center justify-center">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-[#8A2BE2] rounded-full blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
                    <button className="relative bg-primary text-white font-bold text-sm px-6 py-2.5 rounded-full hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                        Hubungi Kami
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                </a>
            </div>

            <button className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
        </div>
    </nav>
  );
}
