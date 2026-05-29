"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

function HargaContent() {
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
        router.push(`/harga?tab=${tab}`, { scroll: false });
    };

    return (
        <div className="pt-12 pb-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Investasi Digital Anda</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Kami transparan dengan harga kami. Pilih paket yang paling sesuai dengan kebutuhan dan skala bisnis Anda.</p>
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
                            <span className="material-symbols-outlined text-lg">web</span> Paket Website
                        </button>
                        <button 
                            onClick={() => handleTabClick('undangan')}
                            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                                activeTab === 'undangan' 
                                ? 'active bg-[#8A2BE2] text-white shadow-md' 
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                            }`}
                        >
                            <span className="material-symbols-outlined text-lg">favorite</span> Paket Undangan
                        </button>
                    </div>
                </div>

                {/* Tab Content: Web Development */}
                {activeTab === 'web' && (
                    <div className="max-w-6xl mx-auto animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Hemat */}
                            <div className="glass-card rounded-3xl p-8 bg-white flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Paket Hemat</h4>
                                <p className="text-gray-500 text-sm mb-6 font-normal">Cocok untuk landing page atau portofolio personal.</p>
                                <div className="mb-6">
                                    <span className="text-3xl font-extrabold text-gray-900">Rp 300.000 - Rp 500.000</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Single Page (Landing Page)</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Desain Template Premium</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Responsif (Mobile Friendly)</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Tombol WhatsApp</li>
                                </ul>
                                <Link href="/portofolio?tab=web" className="w-full text-center py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 transition-colors mb-3">Lihat Contoh Desain</Link>
                                <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20mau%20pesan%20Paket%20Hemat%20Web." target="_blank" rel="noreferrer" className="w-full text-center py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">Pesan Paket Hemat</a>
                            </div>

                            {/* Populer */}
                            <div className="rounded-3xl p-[3px] bg-gradient-to-br from-blue-400 via-primary to-indigo-600 transform md:-translate-y-4 hover:-translate-y-6 transition-all duration-500 glow-pulse-blue relative flex flex-col">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-4 py-1 rounded-full shadow-md tracking-wider z-10 border border-blue-100">PALING POPULER</div>
                                <div className="rounded-[22px] p-8 bg-primary text-white h-full flex flex-col">
                                    <h4 className="text-xl font-bold mb-2 mt-2">Paket Populer</h4>
                                    <p className="text-blue-100 text-sm mb-6 font-normal">Sempurna untuk profil bisnis dan UMKM.</p>
                                    <div className="mb-6">
                                        <span className="text-3xl font-extrabold">Rp 700.000 - Rp 1.200.000</span>
                                    </div>
                                    <ul className="space-y-4 mb-8 text-blue-50 flex-1">
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Multi-halaman (Maks 5 Hal)</li>
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Desain Kustom (UI/UX)</li>
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Gratis Domain (.com) 1 Tahun</li>
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Basic SEO & Integrasi Sosmed</li>
                                    </ul>
                                    <Link href="/portofolio?tab=web" className="w-full text-center py-3 rounded-xl bg-blue-600 border border-blue-400 text-white font-semibold hover:bg-blue-800 transition-colors mb-3">Lihat Contoh Desain</Link>
                                    <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20mau%20pesan%20Paket%20Populer%20Web." target="_blank" rel="noreferrer" className="w-full text-center py-3 rounded-xl bg-white text-primary font-bold hover:bg-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300">Pesan Paket Populer</a>
                                </div>
                            </div>

                            {/* Eksklusif */}
                            <div className="glass-card rounded-3xl p-8 bg-white flex flex-col border-2 border-gray-900/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Paket Eksklusif</h4>
                                <p className="text-gray-500 text-sm mb-6 font-normal">Website tingkat lanjut dengan fitur kompleks.</p>
                                <div className="mb-6">
                                    <span className="text-3xl font-extrabold text-gray-900">Mulai Rp 1.500.000</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Unlimited Halaman</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Full Custom Development</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Fitur Khusus (Booking, Blog, dll)</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Advanced SEO & Analytics</li>
                                </ul>
                                <Link href="/portofolio?tab=web" className="w-full text-center py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 transition-colors mb-3">Lihat Contoh Desain</Link>
                                <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20mau%20pesan%20Paket%20Eksklusif%20Web." target="_blank" rel="noreferrer" className="w-full text-center py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-black hover:shadow-lg transform hover:scale-105 transition-all duration-300">Pesan Paket Eksklusif</a>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab Content: Undangan Digital */}
                {activeTab === 'undangan' && (
                    <div className="max-w-6xl mx-auto animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Basic */}
                            <div className="glass-card rounded-3xl p-8 bg-white flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Paket Basic</h4>
                                <p className="text-gray-500 text-sm mb-6 font-normal">Desain simpel, elegan, dan praktis.</p>
                                <div className="mb-6">
                                    <span className="text-3xl font-extrabold text-gray-900">Rp 50.000 - Rp 100.000</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-[#8A2BE2] text-sm">done</span> 1 Pilihan Tema Standar</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-[#8A2BE2] text-sm">done</span> Info Acara & Mempelai</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-[#8A2BE2] text-sm">done</span> Link Google Maps</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-gray-300 text-sm">close</span> Tanpa Galeri Foto</li>
                                </ul>
                                <Link href="/portofolio?tab=undangan" className="w-full text-center py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 transition-colors mb-3">Lihat Contoh Desain</Link>
                                <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20mau%20pesan%20Paket%20Basic%20Undangan." target="_blank" rel="noreferrer" className="w-full text-center py-3 rounded-xl border-2 border-[#8A2BE2] text-[#8A2BE2] font-bold hover:bg-purple-700 hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">Pesan Paket Basic</a>
                            </div>

                            {/* Elegant */}
                            <div className="rounded-3xl p-[3px] bg-gradient-to-br from-purple-400 via-[#8A2BE2] to-fuchsia-600 transform md:-translate-y-4 hover:-translate-y-6 transition-all duration-500 glow-pulse-purple relative flex flex-col">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#8A2BE2] text-xs font-bold px-4 py-1 rounded-full shadow-md tracking-wider z-10 border border-purple-100">REKOMENDASI</div>
                                <div className="rounded-[22px] p-8 bg-[#8A2BE2] text-white h-full flex flex-col">
                                    <h4 className="text-xl font-bold mb-2 mt-2">Paket Elegant</h4>
                                    <p className="text-purple-100 text-sm mb-6 font-normal">Fitur lengkap untuk momen spesial Anda.</p>
                                    <div className="mb-6">
                                        <span className="text-3xl font-extrabold">Rp 150.000 - Rp 250.000</span>
                                    </div>
                                    <ul className="space-y-4 mb-8 text-purple-50 flex-1">
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Semua Fitur Basic</li>
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Tema Premium & Kustom Warna</li>
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Galeri Foto Pre-Wedding (10 Foto)</li>
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Fitur RSVP & Buku Tamu</li>
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Backsound Musik Pilihan</li>
                                    </ul>
                                    <Link href="/portofolio?tab=undangan" className="w-full text-center py-3 rounded-xl bg-purple-700 border border-purple-500 text-white font-semibold hover:bg-purple-800 transition-colors mb-3">Lihat Contoh Desain</Link>
                                    <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20mau%20pesan%20Paket%20Elegant%20Undangan." target="_blank" rel="noreferrer" className="w-full text-center py-3 rounded-xl bg-white text-[#8A2BE2] font-bold hover:bg-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300">Pesan Paket Elegant</a>
                                </div>
                            </div>

                            {/* Custom Premium */}
                            <div className="glass-card rounded-3xl p-8 bg-white flex flex-col border-2 border-purple-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Custom Premium</h4>
                                <p className="text-gray-500 text-sm mb-6 font-normal">Desain 100% eksklusif hanya untuk Anda.</p>
                                <div className="mb-6">
                                    <span className="text-3xl font-extrabold text-gray-900">Mulai Rp 350.000</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-[#8A2BE2] text-sm">done</span> Semua Fitur Elegant</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-[#8A2BE2] text-sm">done</span> Desain Layout 100% Custom</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-[#8A2BE2] text-sm">done</span> Integrasi Video / Live Streaming</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-[#8A2BE2] text-sm">done</span> Custom Nama & Filter Filter IG</li>
                                </ul>
                                <Link href="/portofolio?tab=undangan" className="w-full text-center py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 transition-colors mb-3">Lihat Contoh Desain</Link>
                                <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20mau%20pesan%20Paket%20Custom%20Premium%20Undangan." target="_blank" rel="noreferrer" className="w-full text-center py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-black hover:shadow-lg transform hover:scale-105 transition-all duration-300">Pesan Custom Premium</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Payment System Info */}
            <section className="py-20 mt-20 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Sistem Pembayaran yang Aman</h3>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <div className="bg-gray-50 p-6 rounded-2xl w-full sm:w-1/2 border border-gray-100">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined font-bold">payments</span>
                            </div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">DP 50% di Awal</h4>
                            <p className="text-sm text-gray-600">Sebagai tanda jadi dan komitmen sebelum pengerjaan proyek dimulai.</p>
                        </div>
                        <div className="hidden sm:block text-gray-300">
                            <span className="material-symbols-outlined text-4xl">arrow_forward</span>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl w-full sm:w-1/2 border border-gray-100">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined font-bold">task_alt</span>
                            </div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">Pelunasan 50%</h4>
                            <p className="text-sm text-gray-600">Dibayarkan setelah website/undangan selesai direview dan siap online.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default function Harga() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-50/50"></div>}>
            <HargaContent />
        </Suspense>
    );
}
