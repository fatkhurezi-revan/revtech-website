"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive 
      ? "text-sm font-semibold text-primary px-4 py-2 rounded-full bg-primary/10 transition-all"
      : "text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-full transition-all";
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive 
      ? "block px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold transition-all"
      : "block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 font-medium transition-all";
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300" id="navbar">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
                <Image src="/assets/logo.png" alt="RevTech Logo" width={200} height={80} className="h-14 sm:h-16 md:h-[4.5rem] w-auto mix-blend-multiply transition-transform group-hover:scale-105 object-contain" />
            </Link>

            <div className="hidden md:flex items-center space-x-1 bg-white/50 px-4 py-2 rounded-full border border-white/60 shadow-sm">
                <Link className={getLinkClass('/')} href="/">Beranda</Link>
                <Link className={getLinkClass('/layanan')} href="/layanan">Layanan</Link>
                <Link className={getLinkClass('/template')} href="/template">Template</Link>
                <Link className={getLinkClass('/portofolio')} href="/portofolio">Portofolio</Link>
                <Link className={getLinkClass('/harga')} href="/harga">Harga</Link>
                <Link className={getLinkClass('/faq')} href="/faq">FAQ</Link>
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

            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
            >
                <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0 overflow-hidden'}`}>
            <div className="flex flex-col p-4 space-y-2">
                <Link className={getMobileLinkClass('/')} href="/" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
                <Link className={getMobileLinkClass('/layanan')} href="/layanan" onClick={() => setIsMobileMenuOpen(false)}>Layanan</Link>
                <Link className={getMobileLinkClass('/template')} href="/template" onClick={() => setIsMobileMenuOpen(false)}>Template</Link>
                <Link className={getMobileLinkClass('/portofolio')} href="/portofolio" onClick={() => setIsMobileMenuOpen(false)}>Portofolio</Link>
                <Link className={getMobileLinkClass('/harga')} href="/harga" onClick={() => setIsMobileMenuOpen(false)}>Harga</Link>
                <Link className={getMobileLinkClass('/faq')} href="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
                
                <div className="pt-4 mt-2 border-t border-gray-100">
                    <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20ingin%20berkonsultasi." target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full bg-primary text-white font-bold px-4 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                        Hubungi Kami
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
  );
}
