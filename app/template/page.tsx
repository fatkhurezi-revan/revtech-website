"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

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
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal">Jelajahi berbagai desain template profesional berdasarkan pilihan paket harga yang sesuai dengan kebutuhan dan anggaran Anda.</p>
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
                                    <p className="text-gray-500 mt-2 font-medium">Template profil bisnis simpel dan elegan, cocok untuk UMKM & Personal.</p>
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
                                <TemplateCard 
                                    title="Minimalist Company Profile" 
                                    category="Starter Template" 
                                    image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    desc="Desain bersih dan langsung pada intinya. Sempurna untuk menampilkan layanan jasa Anda."
                                />
                                <TemplateCard 
                                    title="Creative Agency Landing" 
                                    category="Starter Template" 
                                    image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    desc="Layout kreatif dengan fokus pada portofolio dan konversi (Call-to-Action)."
                                />
                            </div>
                        </section>

                        {/* Paket Bisnis */}
                        <section className="bg-gradient-to-br from-slate-900 to-primary p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-white">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-white/10 relative z-10">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider mb-3 backdrop-blur-sm">Rekomendasi</div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Paket Populer</h2>
                                    <p className="text-gray-300 mt-2 font-medium">Template e-commerce dan sistem bisnis dengan fitur interaktif & dinamis.</p>
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
                                <TemplateCard 
                                    title="Modern E-Commerce" 
                                    category="Bisnis Template" 
                                    image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    desc="Katalog produk dinamis dengan integrasi keranjang belanja dan checkout WhatsApp."
                                    dark
                                />
                                <TemplateCard 
                                    title="Corporate Dashboard" 
                                    category="Bisnis Template" 
                                    image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    desc="Tampilan dashboard profesional untuk manajemen data internal perusahaan."
                                    dark
                                />
                            </div>
                        </section>

                        {/* Paket Enterprise */}
                        <section className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-gray-100">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-bold text-xs uppercase tracking-wider mb-3">Custom Build</div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Paket Eksklusif</h2>
                                    <p className="text-gray-500 mt-2 font-medium">Sistem kustomisasi 100% dari nol, UI/UX eksklusif untuk korporat besar.</p>
                                </div>
                                <div className="mt-4 md:mt-0 text-left md:text-right">
                                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-1">Mulai</p>
                                    <div className="flex items-baseline md:justify-end gap-1">
                                        <span className="text-lg font-bold text-gray-900">Rp</span>
                                        <span className="text-3xl font-extrabold text-gray-900 tracking-tight leading-none">1.5<span className="text-2xl font-bold">Juta</span></span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 transition-all duration-500 hover:shadow-2xl">
                                    <div className="aspect-[21/9] overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Enterprise Template" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90">
                                        <h3 className="text-white text-3xl font-bold mb-2">Exclusive Custom Platform</h3>
                                        <p className="text-gray-300 text-sm mb-6 max-w-2xl font-normal">Karena tingkat kompleksitas tinggi, klien pada paket ini akan mendapatkan desain antarmuka eksklusif yang dirancang khusus oleh UI/UX designer kami, bukan menggunakan template.</p>
                                        <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20tertarik%20dengan%20Paket%20Enterprise." target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                                            Konsultasi Custom Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                )}

                {/* Tab Content: Undangan Digital */}
                {activeTab === 'undangan' && (
                    <div className="animate-fade-in space-y-20">
                        
                        {/* Paket Silver */}
                        <section className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-gray-100">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-bold text-xs uppercase tracking-wider mb-3">Paket Basic</div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Paket Basic</h2>
                                    <p className="text-gray-500 mt-2 font-medium">Template undangan 1 halaman simpel yang elegan dan informatif.</p>
                                </div>
                                <div className="mt-4 md:mt-0 text-left md:text-right">
                                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-1">Harga</p>
                                    <div className="flex items-baseline md:justify-end gap-1">
                                        <span className="text-lg font-bold text-gray-900">Rp</span>
                                        <span className="text-3xl font-extrabold text-[#8A2BE2] tracking-tight leading-none">50<span className="text-xl font-bold">Rb</span> - 100<span className="text-xl font-bold">Rb</span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <TemplateCard 
                                    title="Classic White" 
                                    category="Silver Template" 
                                    image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    desc="Desain bersih berlatar putih dengan tipografi klasik yang romantis."
                                    isMobile
                                />
                                <TemplateCard 
                                    title="Rustic Brown" 
                                    category="Silver Template" 
                                    image="https://images.unsplash.com/photo-1505932794465-147d1f1bce20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    desc="Nuansa bumi (earth tone) yang hangat untuk tema pernikahan rustic."
                                    isMobile
                                />
                            </div>
                        </section>

                        {/* Paket Gold */}
                        <section className="bg-gradient-to-br from-purple-900 to-[#8A2BE2] p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-white">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-white/10 relative z-10">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider mb-3 backdrop-blur-sm">Terlaris</div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Paket Elegant</h2>
                                    <p className="text-gray-200 mt-2 font-medium">Template multi-halaman dengan animasi galeri foto & musik latar (BGM).</p>
                                </div>
                                <div className="mt-4 md:mt-0 text-left md:text-right">
                                    <p className="text-sm text-gray-200 font-bold uppercase tracking-wide mb-1">Harga</p>
                                    <div className="flex items-baseline md:justify-end gap-1">
                                        <span className="text-lg font-bold text-white">Rp</span>
                                        <span className="text-3xl font-extrabold text-white tracking-tight leading-none">150<span className="text-xl font-bold">Rb</span> - 250<span className="text-xl font-bold">Rb</span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <TemplateCard 
                                    title="Luxury Gold" 
                                    category="Gold Template" 
                                    image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    desc="Sentuhan warna emas dengan animasi kelopak bunga jatuh yang mewah."
                                    dark
                                    isMobile
                                />
                                <TemplateCard 
                                    title="Floral Watercolor" 
                                    category="Gold Template" 
                                    image="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    desc="Elemen cat air bunga yang mekar perlahan saat halaman digulir."
                                    dark
                                    isMobile
                                />
                            </div>
                        </section>

                        {/* Paket Platinum */}
                        <section className="bg-[#111] p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-white border border-gray-800">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-gray-800">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 text-yellow-900 font-bold text-xs uppercase tracking-wider mb-3">Premium VIP</div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Custom Premium</h2>
                                    <p className="text-gray-400 mt-2 font-medium">Desain 100% custom eksklusif, buku tamu digital, QR Code kehadiran & filter Instagram.</p>
                                </div>
                                <div className="mt-4 md:mt-0 text-left md:text-right">
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wide mb-1">Mulai</p>
                                    <div className="flex items-baseline md:justify-end gap-1">
                                        <span className="text-lg font-bold text-white">Rp</span>
                                        <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500 tracking-tight leading-none">350<span className="text-xl font-bold">Ribu</span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-8">
                                <div className="group relative rounded-3xl overflow-hidden shadow-lg bg-gray-900 transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] border border-gray-800">
                                    <div className="aspect-[21/9] overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Platinum Template" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                                        <h3 className="text-white text-3xl font-bold mb-2">Bespoke Wedding Experience</h3>
                                        <p className="text-gray-300 text-sm mb-6 max-w-2xl font-normal">Tidak ada batasan template. Kami akan merancang undangan digital yang merepresentasikan tema spesifik pernikahan Anda, lengkap dengan aset visual custom 3D atau ilustrasi.</p>
                                        <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20tertarik%20dengan%20Paket%20Platinum%20Undangan." target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 bg-gradient-to-r from-amber-200 to-yellow-500 text-yellow-900 font-bold px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                            Konsultasi Tema Custom
                                        </a>
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
