"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

function TemplateContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('web');

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'web' || tab === 'undangan') {
            setActiveTab(tab);
        }
    }, [searchParams]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        router.push(`/template?tab=${tab}`, { scroll: false });
    };

    return (
        <div className="pt-12 pb-24 bg-gray-50/50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Katalog Pilihan Template</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal">Jelajahi berbagai desain template profesional berdasarkan pilihan paket harga dan kategori yang sesuai dengan kebutuhan dan anggaran Anda.</p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="bg-gray-100/80 p-1.5 rounded-2xl inline-flex relative shadow-inner backdrop-blur-sm border border-gray-200/50">
                        <button 
                            onClick={() => handleTabClick('web')}
                            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                                activeTab === 'web' 
                                ? 'active bg-primary text-white shadow-md' 
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                            }`}
                        >
                            <span className="material-symbols-outlined text-lg">web</span> Web Development
                        </button>
                        <button 
                            onClick={() => handleTabClick('undangan')}
                            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                                activeTab === 'undangan' 
                                ? 'active bg-[#8A2BE2] text-white shadow-md' 
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                            }`}
                        >
                            <span className="material-symbols-outlined text-lg">favorite</span> Undangan Digital
                        </button>
                    </div>
                </div>

                {/* Tab Content: Web Development */}
                {activeTab === 'web' && (
                    <div className="animate-fade-in space-y-20">
                        
                        {/* Paket Starter */}
                        <section className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-gray-100">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider mb-3">Paket Hemat</div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Paket Hemat</h2>
                                    <p className="text-gray-500 mt-2 font-medium">Pilihan desain website informatif yang cepat, terjangkau, dan sangat pas untuk merintis identitas digital bisnis Anda.</p>
                                </div>
                                <div className="mt-4 md:mt-0 text-left md:text-right">
                                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-1">Harga</p>
                                    <div className="flex items-baseline md:justify-end gap-1">
                                        <span className="text-lg font-bold text-gray-900">Rp</span>
                                        <span className="text-3xl font-extrabold text-primary tracking-tight leading-none">300<span className="text-xl font-bold">Rb</span> - 500<span className="text-xl font-bold">Rb</span></span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Kategori 1 */}
                                <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="aspect-video overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Jasa & Layanan" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Jasa & Layanan</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Desain profesional untuk menawarkan keahlian Anda. Cocok untuk berbagai bidang jasa seperti bengkel, klinik, kontraktor, salon, hingga agensi lokal.
                                        </p>
                                        <a href="#" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                                            <span className="material-symbols-outlined text-[16px]">visibility</span> Lihat Demo
                                        </a>
                                    </div>
                                </div>

                                {/* Kategori 2 */}
                                <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="aspect-video overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kuliner & Resto" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Kuliner & Resto</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Tampilan visual yang menggugah selera untuk menu andalan Anda. Ideal untuk kafe, rumah makan, warung tenda, franchise minuman, hingga bisnis katering harian.
                                        </p>
                                        <a href="#" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                                            <span className="material-symbols-outlined text-[16px]">visibility</span> Lihat Demo
                                        </a>
                                    </div>
                                </div>

                                {/* Kategori 3 */}
                                <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="aspect-video overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Profil & Portofolio" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Profil & Portofolio</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Bangun kredibilitas digital yang elegan. Sangat pas digunakan sebagai kartu nama digital untuk sales, agen properti, freelancer, atau tokoh publik.
                                        </p>
                                        <a href="#" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                                            <span className="material-symbols-outlined text-[16px]">visibility</span> Lihat Demo
                                        </a>
                                    </div>
                                </div>

                                {/* Kategori 4 */}
                                <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="aspect-video overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Katalog Produk" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Katalog Produk</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Fokus menonjolkan keunggulan barang jualan Anda. Didesain khusus untuk jualan produk fisik, mulai dari pakaian, kosmetik, hasil bumi, hingga penjualan hewan ternak.
                                        </p>
                                        <a href="#" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                                            <span className="material-symbols-outlined text-[16px]">visibility</span> Lihat Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Paket Bisnis */}
                        <section className="bg-gradient-to-br from-slate-900 to-primary p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-white">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-white/10 relative z-10">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider mb-3 backdrop-blur-sm">Rekomendasi</div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Paket Populer</h2>
                                    <p className="text-gray-300 mt-2 font-medium">Solusi sistem website dinamis dengan fitur interaktif tingkat lanjut untuk memperluas jangkauan pasar digital Anda.</p>
                                </div>
                                <div className="mt-4 md:mt-0 text-left md:text-right">
                                    <p className="text-sm text-gray-300 font-bold uppercase tracking-wide mb-1">Harga</p>
                                    <div className="flex items-baseline md:justify-end gap-1">
                                        <span className="text-lg font-bold text-white">Rp</span>
                                        <span className="text-3xl font-extrabold text-white tracking-tight leading-none">700<span className="text-xl font-bold">Rb</span> - 1.2<span className="text-xl font-bold">Juta</span></span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                {/* Kategori 1 */}
                                <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="aspect-video overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Company Profile" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Company Profile</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Desain eksklusif multi-halaman untuk membangun citra profesional bisnis Anda. Dilengkapi halaman Tentang Kami, Galeri Fasilitas, Layanan, dan Klien. Sangat ideal untuk perusahaan manufaktur, pabrik, kontraktor besar, hingga firma hukum.
                                        </p>
                                        <a href="#" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                                            <span className="material-symbols-outlined text-[16px]">visibility</span> Lihat Demo Web
                                        </a>
                                    </div>
                                </div>

                                {/* Kategori 2 */}
                                <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="aspect-video overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Instansi Publik & Edukasi" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Instansi Publik & Edukasi</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Portal informasi resmi yang terstruktur, transparan, dan mudah diakses publik. Dilengkapi fitur Berita, Pengumuman, Profil Institusi, hingga Layanan Masyarakat/PPDB. Pilihan utama untuk website Desa, Dinas Pemerintahan, Sekolah, dan Yayasan.
                                        </p>
                                        <a href="#" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                                            <span className="material-symbols-outlined text-[16px]">visibility</span> Lihat Demo Web
                                        </a>
                                    </div>
                                </div>

                                {/* Kategori 3 */}
                                <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="aspect-video overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="E-Commerce & Retail" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">E-Commerce & Retail</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Toko online berskala besar dengan sistem navigasi belanja yang terintegrasi. Dilengkapi fitur keranjang belanja, filter produk, dan halaman detail barang. Cocok untuk distributor, toko grosir, brand fashion, dan bisnis retail.
                                        </p>
                                        <a href="#" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                                            <span className="material-symbols-outlined text-[16px]">visibility</span> Lihat Demo Web
                                        </a>
                                    </div>
                                </div>

                                {/* Kategori 4 */}
                                <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="aspect-video overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Properti & Pariwisata" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Properti & Pariwisata</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Tampilan visual memukau dan elegan dengan dukungan galeri beresolusi tinggi. Sempurna untuk developer perumahan, penyewaan villa/hotel, agen perjalanan, atau promosi destinasi wisata lokal.
                                        </p>
                                        <a href="#" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                                            <span className="material-symbols-outlined text-[16px]">visibility</span> Lihat Demo Web
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Paket Enterprise */}
                        <section className="bg-slate-900 p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-2xl border border-slate-800 text-white relative overflow-hidden mt-8">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/30 rounded-full blur-[80px] -ml-20 -mb-20"></div>
                            
                            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center justify-between">
                                <div className="flex-1 max-w-3xl">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 text-slate-300 font-bold text-xs uppercase tracking-wider mb-6 border border-slate-700 backdrop-blur-sm">Paket Eksklusif</div>
                                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Layanan Custom Web Development</h2>
                                    <p className="text-slate-300 mb-10 font-normal leading-relaxed text-lg">
                                        Paket Eksklusif tidak menggunakan template siap pakai. Ini adalah layanan pengembangan website kustom dari nol (Slicing Design to Code) yang dirancang khusus untuk kebutuhan bisnis tingkat lanjut Anda. Ideal untuk Sistem Informasi (ERP/HRIS), E-Commerce kompleks, dan Portal Berita berkinerja tinggi.
                                    </p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                        <div className="group flex items-center gap-3 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transform hover:-translate-y-1 transition-all duration-300 cursor-default">
                                            <div className="bg-primary/20 p-2 rounded-xl text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                                                <span className="material-symbols-outlined text-xl transform group-hover:scale-110 transition-transform duration-300">architecture</span>
                                            </div>
                                            <span className="text-slate-200 font-semibold text-sm group-hover:text-white transition-colors duration-300">Arsitektur kode modern & terukur</span>
                                        </div>
                                        <div className="group flex items-center gap-3 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transform hover:-translate-y-1 transition-all duration-300 cursor-default">
                                            <div className="bg-primary/20 p-2 rounded-xl text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                                                <span className="material-symbols-outlined text-xl transform group-hover:scale-110 transition-transform duration-300">database</span>
                                            </div>
                                            <span className="text-slate-200 font-semibold text-sm group-hover:text-white transition-colors duration-300">Integrasi API & Database khusus</span>
                                        </div>
                                        <div className="group flex items-center gap-3 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transform hover:-translate-y-1 transition-all duration-300 cursor-default md:col-span-2">
                                            <div className="bg-primary/20 p-2 rounded-xl text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                                                <span className="material-symbols-outlined text-xl transform group-hover:scale-110 transition-transform duration-300">speed</span>
                                            </div>
                                            <span className="text-slate-200 font-semibold text-sm group-hover:text-white transition-colors duration-300">Optimasi Core Web Vitals tingkat lanjut</span>
                                        </div>
                                    </div>
                                    
                                    <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20tertarik%20konsultasi%20spesifikasi%20sistem%20untuk%20layanan%20custom." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center">
                                        <span className="material-symbols-outlined">forum</span> Konsultasi Spesifikasi Sistem
                                    </a>
                                </div>
                                
                                <div className="hidden lg:block relative w-80 h-80" style={{ perspective: '1000px' }}>
                                    {/* Layer 1: Code Window */}
                                    <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl transition-all duration-700 group overflow-hidden" style={{ transform: 'rotateY(-15deg) rotateX(10deg)', transformStyle: 'preserve-3d' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotateY(-15deg) rotateX(10deg)'; }}
                                    >
                                        {/* Browser / Terminal Header */}
                                        <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                                        </div>
                                        {/* Fake Code Lines */}
                                        <div className="p-5 font-mono text-xs md:text-sm text-slate-400 space-y-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-primary font-bold">~</span>
                                                <span className="text-blue-400">npm run build --production</span>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-xs text-slate-600 animate-spin">refresh</span>
                                                    <span>Compiling React components...</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-xs text-slate-600 animate-spin">refresh</span>
                                                    <span>Optimizing Core Web Vitals...</span>
                                                </div>
                                                <div className="w-full bg-slate-800 rounded-full h-1 mt-2">
                                                    <div className="bg-primary h-1 rounded-full animate-pulse w-3/4"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-green-400 pt-2">
                                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                                <span className="font-bold">Build Successful in 1.2s</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Layer 2: Floating Performance Card */}
                                    <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 z-20 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                                        <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 font-extrabold text-2xl shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                            99
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-300 font-bold uppercase tracking-wider">Performance</p>
                                            <p className="text-sm font-bold text-white">Lighthouse Score</p>
                                        </div>
                                    </div>

                                    {/* Layer 3: Floating Security Card */}
                                    <div className="absolute -top-6 -right-6 bg-blue-900/40 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-blue-500/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 z-20 flex items-center gap-3 animate-pulse">
                                        <div className="bg-blue-500/20 p-2 rounded-lg flex items-center justify-center">
                                            <span className="material-symbols-outlined text-blue-400 text-lg">shield_locked</span>
                                        </div>
                                        <span className="text-sm font-bold text-slate-100 pr-2">Enterprise Security</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                )}

                {/* Tab Content: Undangan Digital */}
                {activeTab === 'undangan' && (
                    <div className="animate-fade-in space-y-20">
                        
                        {/* BAGIAN 1: Grid Template (Basic & Premium) */}
                        <section className="mb-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Card 1: Paket Basic */}
                                <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col group hover:-translate-y-2 transition-all duration-500">
                                    <div className="relative aspect-[9/16] w-full max-w-sm mx-auto rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200 mb-8">
                                        <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Minimalist Elegance" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute top-6 left-4 z-10">
                                            <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">Paket Basic</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-center">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Minimalist Elegance</h3>
                                        <p className="text-gray-500 text-sm mb-8">Desain bersih berlatar putih dengan tipografi klasik yang romantis.</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                                        <Link href="/portofolio?tab=undangan" className="w-full sm:flex-1 text-center py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:border-gray-900 hover:text-gray-900 transition-colors">Lihat Demo</Link>
                                        <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20mau%20pesan%20desain%20Minimalist%20Elegance." target="_blank" rel="noreferrer" className="w-full sm:flex-1 text-center py-3.5 rounded-xl bg-[#8A2BE2] text-white font-bold hover:bg-purple-700 transition-colors shadow-lg">Pesan Desain Ini</a>
                                    </div>
                                </div>

                                {/* Card 2: Paket Premium */}
                                <div className="bg-gradient-to-br from-purple-50 to-white rounded-[2.5rem] p-6 md:p-8 shadow-xl border border-purple-100 flex flex-col group hover:-translate-y-2 transition-all duration-500">
                                    <div className="relative aspect-[9/16] w-full max-w-sm mx-auto rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(138,43,226,0.15)] border border-purple-200 mb-8">
                                        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Royal Blossom" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute top-6 left-4 z-10">
                                            <span className="bg-gradient-to-r from-amber-300 to-yellow-500 text-yellow-900 text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider">Paket Premium</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-center">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Royal Blossom</h3>
                                        <p className="text-gray-500 text-sm mb-8">Sentuhan mewah dengan animasi elemen bunga dan galeri interaktif.</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                                        <Link href="/portofolio?tab=undangan" className="w-full sm:flex-1 text-center py-3.5 rounded-xl border-2 border-purple-200 text-[#8A2BE2] font-bold hover:border-[#8A2BE2] transition-colors">Lihat Demo</Link>
                                        <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20mau%20pesan%20desain%20Royal%20Blossom." target="_blank" rel="noreferrer" className="w-full sm:flex-1 text-center py-3.5 rounded-xl bg-[#8A2BE2] text-white font-bold hover:bg-purple-700 shadow-lg shadow-purple-500/30 transition-all hover:shadow-purple-500/50">Pesan Desain Ini</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* BAGIAN 2: Banner Custom (Paket Eksklusif) */}
                        <section className="bg-[#111] p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-2xl border border-gray-800 text-white relative overflow-hidden mt-8">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-900/20 rounded-full blur-[80px] -ml-20 -mb-20"></div>
                            
                            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center justify-between">
                                <div className="flex-1 max-w-3xl">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-gray-300 font-bold text-xs uppercase tracking-wider mb-6 border border-gray-700">Paket Eksklusif</div>
                                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Punya Konsep Pernikahan Impian Sendiri?</h2>
                                    <p className="text-gray-400 mb-10 font-normal leading-relaxed text-lg">
                                        Pilih Paket Eksklusif untuk pembuatan desain undangan digital kustom dari nol. Bebas tentukan tata letak, animasi transisi, hingga integrasi custom domain (nama-mempelai.com) agar momen spesial Anda tampil beda.
                                    </p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                        <div className="group flex items-center gap-3 bg-gray-800/50 p-4 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transform hover:-translate-y-1 transition-all duration-300 cursor-default">
                                            <div className="bg-amber-500/20 p-2 rounded-xl text-amber-500 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-yellow-900 transition-colors duration-300">
                                                <span className="material-symbols-outlined text-xl transform group-hover:scale-110 transition-transform duration-300">design_services</span>
                                            </div>
                                            <span className="text-gray-200 font-semibold text-sm group-hover:text-white transition-colors duration-300">Desain Visual Eksklusif 100% Custom</span>
                                        </div>
                                        <div className="group flex items-center gap-3 bg-gray-800/50 p-4 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transform hover:-translate-y-1 transition-all duration-300 cursor-default">
                                            <div className="bg-amber-500/20 p-2 rounded-xl text-amber-500 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-yellow-900 transition-colors duration-300">
                                                <span className="material-symbols-outlined text-xl transform group-hover:scale-110 transition-transform duration-300">language</span>
                                            </div>
                                            <span className="text-gray-200 font-semibold text-sm group-hover:text-white transition-colors duration-300">Custom Domain nama.com</span>
                                        </div>
                                        <div className="group flex items-center gap-3 bg-gray-800/50 p-4 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transform hover:-translate-y-1 transition-all duration-300 cursor-default md:col-span-2">
                                            <div className="bg-amber-500/20 p-2 rounded-xl text-amber-500 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-yellow-900 transition-colors duration-300">
                                                <span className="material-symbols-outlined text-xl transform group-hover:scale-110 transition-transform duration-300">motion_photos_auto</span>
                                            </div>
                                            <span className="text-gray-200 font-semibold text-sm group-hover:text-white transition-colors duration-300">Animasi & Fitur Spesial</span>
                                        </div>
                                    </div>
                                    
                                    <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20tertarik%20dengan%20Paket%20Eksklusif%20Undangan%20Custom." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-200 to-yellow-500 text-yellow-900 font-extrabold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                                        Konsultasi Desain Custom
                                        <span className="material-symbols-outlined font-bold">arrow_forward</span>
                                    </a>
                                </div>
                                
                                <div className="hidden lg:block relative w-80 h-80" style={{ perspective: '1000px' }}>
                                    {/* Layer 1: Code/Design Window */}
                                    <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-2xl transition-all duration-700 group overflow-hidden" style={{ transform: 'rotateY(-15deg) rotateX(10deg)', transformStyle: 'preserve-3d' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotateY(-15deg) rotateX(10deg)'; }}
                                    >
                                        {/* Browser / Terminal Header */}
                                        <div className="bg-gray-800/80 px-4 py-3 border-b border-gray-700 flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                                        </div>
                                        {/* Fake Code Lines */}
                                        <div className="p-5 font-mono text-xs md:text-sm text-gray-400 space-y-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-amber-500 font-bold">~</span>
                                                <span className="text-gray-300">npx create-wedding-app --premium</span>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-xs text-gray-600 animate-spin">refresh</span>
                                                    <span>Generating custom 3D assets...</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-xs text-gray-600 animate-spin">refresh</span>
                                                    <span>Configuring private domain...</span>
                                                </div>
                                                <div className="w-full bg-gray-800 rounded-full h-1 mt-2">
                                                    <div className="bg-amber-500 h-1 rounded-full animate-pulse w-3/4"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-green-400 pt-2">
                                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                                <span className="font-bold">Wedding App Deployed!</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Layer 2: Floating Custom Domain Card */}
                                    <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 z-20 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                                        <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                            <span className="material-symbols-outlined text-2xl">diamond</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-300 font-bold uppercase tracking-wider">Domain</p>
                                            <p className="text-sm font-bold text-white">mempelai.com</p>
                                        </div>
                                    </div>

                                    {/* Layer 3: Floating Design Card */}
                                    <div className="absolute -top-6 -right-6 bg-gray-900/40 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-amber-500/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 z-20 flex items-center gap-3 animate-pulse">
                                        <div className="bg-amber-500/20 p-2 rounded-lg flex items-center justify-center">
                                            <span className="material-symbols-outlined text-amber-400 text-lg">auto_awesome</span>
                                        </div>
                                        <span className="text-sm font-bold text-gray-100 pr-2">Premium Design</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                )}

            </div>
        </div>
    );
}

// Komponen Reusable untuk Kartu Template
function TemplateCard({ title, category, image, desc, dark = false, isMobile = false }: { title: string, category: string, image: string, desc: string, dark?: boolean, isMobile?: boolean }) {
    return (
        <div className={`group relative rounded-3xl overflow-hidden shadow-md border ${dark ? 'border-white/10 bg-black/20' : 'border-gray-100 bg-gray-50'} transition-all duration-500 hover:shadow-xl hover:-translate-y-1 w-full`}>
            <div className={`${isMobile ? 'aspect-[3/4]' : 'aspect-video'} overflow-hidden relative`}>
                <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className={`absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t ${dark ? 'from-black/95 via-black/50' : 'from-black/90 via-black/40'} to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100`}>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block border border-white/20">{category}</span>
                    <h3 className="text-white text-2xl font-bold mb-1">{title}</h3>
                    <p className="text-gray-300 text-xs mb-4 line-clamp-2">{desc}</p>
                    <a href="#" className={`inline-flex items-center gap-2 text-white font-bold px-4 py-2 rounded-lg text-sm transition-all duration-300 backdrop-blur-md ${dark ? 'bg-white/10 hover:bg-white/20 border border-white/20' : 'bg-primary/80 hover:bg-primary border border-primary/50'}`}>
                        <span className="material-symbols-outlined text-[16px]">visibility</span> Lihat Demo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function TemplatePage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <TemplateContent />
        </Suspense>
    );
}
