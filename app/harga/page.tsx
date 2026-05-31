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
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Investasi Digital Anda</h1>
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
                                <p className="text-gray-500 text-sm mb-6 font-normal">Solusi cepat untuk landing page UMKM, bisnis jasa, atau portofolio personal.</p>
                                <div className="mb-6 flex items-baseline flex-wrap gap-1">
                                    <span className="text-lg font-bold text-gray-900">Rp</span>
                                    <span className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-gray-900 tracking-tight leading-none">300<span className="text-lg sm:text-xl font-bold">Rb</span> - 500<span className="text-lg sm:text-xl font-bold">Rb</span></span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Single Page (Landing Page)</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Kustomisasi Template Premium</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Performa Cepat & Mobile Responsive</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Integrasi Tombol WhatsApp</li>
                                </ul>
                                <Link href="/portofolio?tab=web" className="w-full text-center py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 transition-colors mb-3">Lihat Contoh Desain</Link>
                                <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20mau%20pesan%20Paket%20Hemat%20Web." target="_blank" rel="noreferrer" className="w-full text-center py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">Pesan Paket Hemat</a>
                            </div>

                            {/* Populer */}
                            <div className="rounded-3xl p-[3px] bg-gradient-to-br from-blue-400 via-primary to-indigo-600 transform md:-translate-y-4 hover:-translate-y-6 transition-all duration-500 glow-pulse-blue relative flex flex-col">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-4 py-1 rounded-full shadow-md tracking-wider z-10 border border-blue-100">PALING POPULER</div>
                                <div className="rounded-[22px] p-8 bg-primary text-white h-full flex flex-col">
                                    <h4 className="text-xl font-bold mb-2 mt-2">Paket Populer</h4>
                                    <p className="text-blue-100 text-sm mb-6 font-normal">Website multi-halaman profesional untuk profil perusahaan, sekolah, atau instansi.</p>
                                    <div className="mb-6 flex items-baseline flex-wrap gap-1">
                                        <span className="text-lg font-bold text-white">Rp</span>
                                        <span className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white tracking-tight leading-none">700<span className="text-lg sm:text-xl font-bold">Rb</span> - 1.2<span className="text-lg sm:text-xl font-bold">Jt</span></span>
                                    </div>
                                    <ul className="space-y-4 mb-8 text-blue-50 flex-1">
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Multi-halaman (Maks 5 Halaman)</li>
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Penyesuaian Desain & Struktur</li>
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Gratis Domain (.com) 1 Tahun</li>
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Basic SEO & Setup Sosmed</li>
                                    </ul>
                                    <Link href="/portofolio?tab=web" className="w-full text-center py-3 rounded-xl bg-blue-600 border border-blue-400 text-white font-semibold hover:bg-blue-800 transition-colors mb-3">Lihat Contoh Desain</Link>
                                    <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20mau%20pesan%20Paket%20Populer%20Web." target="_blank" rel="noreferrer" className="w-full text-center py-3 rounded-xl bg-white text-primary font-bold hover:bg-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300">Pesan Paket Populer</a>
                                </div>
                            </div>

                            {/* Eksklusif */}
                            <div className="glass-card rounded-3xl p-8 bg-white flex flex-col border-2 border-gray-900/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Paket Eksklusif</h4>
                                <p className="text-gray-500 text-sm mb-6 font-normal">Jasa custom development (Figma to Code) & integrasi sistem web tingkat lanjut.</p>
                                <div className="mb-6 flex flex-col">
                                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Mulai</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-lg font-bold text-gray-900">Rp</span>
                                        <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-none">1.5<span className="text-xl sm:text-2xl font-bold">Jt</span></span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Skalabilitas Halaman Dinamis</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Slicing UI & Custom Koding</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Integrasi Database & API</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-primary text-sm">done</span> Advanced SEO & Optimasi Performa</li>
                                </ul>
                                <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20ingin%20Konsultasi%20Spesifikasi%20untuk%20Paket%20Eksklusif." target="_blank" rel="noreferrer" className="w-full block text-center py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 transition-colors mb-3">Konsultasi Spesifikasi</a>
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Paket Basic <span className="text-sm text-gray-500 font-normal">(Entry Level)</span></h4>
                                <p className="text-gray-500 text-sm mb-6 font-normal">Solusi praktis dan cepat. Undangan digital elegan dengan fitur esensial.</p>
                                <div className="mb-6 flex items-baseline flex-wrap gap-1">
                                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1 w-full">Mulai</span>
                                    <span className="text-lg font-bold text-gray-900">Rp</span>
                                    <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-none">50<span className="text-xl sm:text-2xl font-bold">Rb</span></span>
                                </div>
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-6">
                                    <p className="text-xs font-bold text-blue-800 mb-1">Penyesuaian Warna Dasar:</p>
                                    <p className="text-xs text-blue-700">Bebas pilih warna tema agar senada dengan konsep acara.</p>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-[#8A2BE2] text-sm">done</span> Info Mempelai & Hitung Mundur</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-[#8A2BE2] text-sm">done</span> Peta Lokasi & Form RSVP</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-500"><span className="material-symbols-outlined text-gray-300 text-sm">close</span> Tanpa Galeri Foto</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-500"><span className="material-symbols-outlined text-gray-300 text-sm">close</span> Tanpa Musik Latar</li>
                                </ul>
                                <Link href="/portofolio?tab=undangan" className="w-full text-center py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 transition-colors mb-3">Lihat Contoh Desain</Link>
                                <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20mau%20pesan%20Paket%20Basic%20Undangan." target="_blank" rel="noreferrer" className="w-full text-center py-3 rounded-xl border-2 border-[#8A2BE2] text-[#8A2BE2] font-bold hover:bg-purple-700 hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">Pesan Paket Basic</a>
                            </div>

                            {/* Premium */}
                            <div className="rounded-3xl p-[3px] bg-gradient-to-br from-purple-400 via-[#8A2BE2] to-fuchsia-600 transform md:-translate-y-4 hover:-translate-y-6 transition-all duration-500 glow-pulse-purple relative flex flex-col">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#8A2BE2] text-xs font-bold px-4 py-1 rounded-full shadow-md tracking-wider z-10 border border-purple-100 uppercase">Paling Populer</div>
                                <div className="rounded-[22px] p-8 bg-[#8A2BE2] text-white h-full flex flex-col">
                                    <h4 className="text-xl font-bold mb-2 mt-2">Paket Premium</h4>
                                    <p className="text-purple-100 text-sm mb-6 font-normal">Undangan interaktif yang disesuaikan dengan nuansa warna hari bahagia Anda.</p>
                                    <div className="mb-6 flex items-baseline flex-wrap gap-1">
                                        <span className="text-sm font-bold text-purple-200 uppercase tracking-widest mb-1 w-full">Mulai</span>
                                        <span className="text-lg font-bold text-white">Rp</span>
                                        <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">100<span className="text-xl sm:text-2xl font-bold">Rb</span></span>
                                    </div>
                                    <div className="bg-purple-800/50 border border-purple-400/30 rounded-xl p-3 mb-6 backdrop-blur-sm">
                                        <p className="text-xs font-bold text-purple-100 mb-1">Minor Customization:</p>
                                        <p className="text-xs text-purple-200">Penyesuaian warna dasar & pilihan font premium agar senada dengan konsep acara.</p>
                                    </div>
                                    <ul className="space-y-4 mb-8 text-purple-50 flex-1">
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Semua Fitur Basic</li>
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Galeri Foto Prewedding</li>
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Autoplay Musik Latar</li>
                                        <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-white text-sm">done</span> Kisah Cinta & Amplop Digital</li>
                                    </ul>
                                    <Link href="/portofolio?tab=undangan" className="w-full text-center py-3 rounded-xl bg-purple-700 border border-purple-500 text-white font-semibold hover:bg-purple-800 transition-colors mb-3">Lihat Contoh Desain</Link>
                                    <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20mau%20pesan%20Paket%20Premium%20Undangan." target="_blank" rel="noreferrer" className="w-full text-center py-3 rounded-xl bg-white text-[#8A2BE2] font-bold hover:bg-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300">Pesan Paket Premium</a>
                                </div>
                            </div>

                            {/* Eksklusif */}
                            <div className="glass-card rounded-3xl p-8 bg-white flex flex-col border-2 border-purple-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Paket Eksklusif <span className="text-sm text-gray-500 font-normal">(Custom)</span></h4>
                                <p className="text-gray-500 text-sm mb-6 font-normal">Undangan premium tanpa batas kreasi. Desain tata letak khusus sesuai keinginan.</p>
                                <div className="mb-6 flex flex-col">
                                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Mulai</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-lg font-bold text-gray-900">Rp</span>
                                        <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-none">250<span className="text-xl sm:text-2xl font-bold">Rb</span></span>
                                    </div>
                                </div>
                                <div className="bg-green-50 border border-green-100 rounded-xl p-3 mb-6">
                                    <p className="text-xs font-bold text-green-800 mb-1">Full Custom:</p>
                                    <p className="text-xs text-green-700">Bebas rombak tata letak, request animasi khusus, dan penambahan fitur.</p>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-[#8A2BE2] text-sm">done</span> Kustomisasi Penuh</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-[#8A2BE2] text-sm">done</span> Integrasi Filter Instagram</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-[#8A2BE2] text-sm">done</span> Custom Domain</li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700"><span className="material-symbols-outlined text-[#8A2BE2] text-sm">done</span> Broadcast Nama Tamu Otomatis</li>
                                </ul>
                                <Link href="/portofolio?tab=undangan" className="w-full text-center py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 transition-colors mb-3">Lihat Contoh Desain</Link>
                                <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20mau%20pesan%20Paket%20Eksklusif%20Undangan." target="_blank" rel="noreferrer" className="w-full text-center py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-black hover:shadow-lg transform hover:scale-105 transition-all duration-300">Pesan Paket Eksklusif</a>
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
