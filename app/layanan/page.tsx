"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

function LayananContent() {
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
        router.push(`/layanan?tab=${tab}`, { scroll: false });
    };

    return (
        <>
            <div className="pt-12 pb-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Layanan RevTech</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Kami menyediakan solusi digital berkualitas tinggi untuk memastikan bisnis dan acara Anda tampil maksimal di dunia digital.</p>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex justify-center mb-12">
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
                        <div className="max-w-5xl mx-auto animate-fade-in">
                            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="max-w-3xl mx-auto">
                                    <div className="text-center">
                                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Website Kustom Premium</h2>
                                        <p className="text-gray-600 mb-10 font-normal leading-relaxed text-lg">Website tidak hanya sekadar online, tetapi harus bisa mendatangkan konversi. Kami merancang arsitektur website yang super cepat, SEO-friendly, dan memukau di semua perangkat.</p>
                                    </div>
                                        
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                                <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0"><span className="material-symbols-outlined">devices</span></div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-1">100% Responsif</h4>
                                                    <p className="text-sm text-gray-500">Tampil sempurna di HP, Tablet, maupun Desktop.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                                <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0"><span className="material-symbols-outlined">speed</span></div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-1">Fast Loading</h4>
                                                    <p className="text-sm text-gray-500">Akses super cepat tanpa loading lama berkat teknologi modern.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                                <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0"><span className="material-symbols-outlined">chat</span></div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-1">Integrasi WhatsApp</h4>
                                                    <p className="text-sm text-gray-500">Tombol obrolan langsung terhubung ke nomor WA bisnis Anda.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                                <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0"><span className="material-symbols-outlined">troubleshoot</span></div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-1">Basic SEO Setup</h4>
                                                    <p className="text-sm text-gray-500">Optimasi kata kunci agar mudah ditemukan di pencarian Google.</p>
                                                </div>
                                            </div>
                                    </div>
                                        
                                    <div className="text-center">
                                        <Link href="/harga?tab=web" className="inline-flex bg-primary text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 gap-2">
                                            Lihat Harga Paket Web <span className="material-symbols-outlined">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab Content: Undangan Digital */}
                    {activeTab === 'undangan' && (
                        <div className="max-w-5xl mx-auto animate-fade-in">
                            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                    <div className="order-2 md:order-1 bg-purple-50 rounded-3xl p-8 border border-purple-100 text-center">
                                        <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Undangan Preview" className="rounded-2xl shadow-lg mb-6 w-full h-64 object-cover" />
                                        <p className="text-purple-800 font-semibold text-sm">Desain Elegan untuk Momen Spesial Anda</p>
                                    </div>
                                    
                                    <div className="order-1 md:order-2">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Undangan Interaktif & Elegan</h2>
                                        <p className="text-gray-600 mb-8 font-normal leading-relaxed">Berikan kesan pertama yang tak terlupakan kepada tamu undangan Anda. Lebih praktis, hemat, dan ramah lingkungan dengan fitur-fitur canggih.</p>
                                        
                                        <ul className="space-y-4 mb-8">
                                            <li className="flex items-center gap-3 text-sm text-gray-700">
                                                <span className="material-symbols-outlined text-[#8A2BE2]">music_note</span>
                                                <span className="font-semibold">Auto-Play Backsound Musik</span>
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-gray-700">
                                                <span className="material-symbols-outlined text-[#8A2BE2]">photo_library</span>
                                                <span className="font-semibold">Galeri Foto & Video Pre-Wedding</span>
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-gray-700">
                                                <span className="material-symbols-outlined text-[#8A2BE2]">map</span>
                                                <span className="font-semibold">Integrasi Google Maps Interaktif</span>
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-gray-700">
                                                <span className="material-symbols-outlined text-[#8A2BE2]">book</span>
                                                <span className="font-semibold">Buku Tamu Digital & Form RSVP</span>
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-gray-700">
                                                <span className="material-symbols-outlined text-[#8A2BE2]">badge</span>
                                                <span className="font-semibold">Custom Nama Tamu Undangan</span>
                                            </li>
                                        </ul>
                                        
                                        <Link href="/harga?tab=undangan" className="inline-flex bg-[#8A2BE2] text-white font-bold px-8 py-4 rounded-xl hover:bg-purple-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 gap-2">
                                            Lihat Harga Undangan <span className="material-symbols-outlined">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Alur Kerja */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Cara Kerja Kami</h2>
                        <p className="text-gray-600">Proses simpel, transparan, dan anti-ribet.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Line connector for desktop */}
                        <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-gray-200 z-0"></div>
                        
                        {/* Step 1 */}
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 mx-auto bg-primary border-4 rounded-full flex items-center justify-center mb-6 text-white text-3xl font-extrabold glow-breathe relative z-10 transition-all duration-300">1</div>
                            <h4 className="font-bold text-gray-900 mb-2">Konsultasi</h4>
                            <p className="text-sm text-gray-500 font-normal">Diskusikan kebutuhan, referensi desain, dan target Anda via WhatsApp.</p>
                        </div>
                        
                        {/* Step 2 */}
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 mx-auto bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-sm mb-6 text-primary text-3xl font-extrabold relative z-10">2</div>
                            <h4 className="font-bold text-gray-900 mb-2">Kirim Data</h4>
                            <p className="text-sm text-gray-500 font-normal">Kirimkan materi (teks, foto, referensi desain/Figma) dan lakukan pembayaran DP 50% untuk memulai antrean.</p>
                        </div>
                        
                        {/* Step 3 */}
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 mx-auto bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-sm mb-6 text-primary text-3xl font-extrabold relative z-10">3</div>
                            <h4 className="font-bold text-gray-900 mb-2">Proses Development</h4>
                            <p className="text-sm text-gray-500 font-normal">Kami mengeksekusi penulisan kode dan merakit website Anda secara pixel-perfect sesuai dengan spesifikasi yang disepakati.</p>
                        </div>
                        
                        {/* Step 4 */}
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 mx-auto bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-sm mb-6 text-primary text-3xl font-extrabold relative z-10">4</div>
                            <h4 className="font-bold text-gray-900 mb-2">Review & Online</h4>
                            <p className="text-sm text-gray-500 font-normal">Tahap revisi minor, pelunasan sisa pembayaran, dan website Anda siap mengudara di server!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default function Layanan() {
    return (
        <Suspense fallback={<div className="min-h-screen"></div>}>
            <LayananContent />
        </Suspense>
    );
}
