"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

function PortofolioContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('web');
    const [subFilter, setSubFilter] = useState('Semua');

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'web' || tab === 'undangan') {
            setActiveTab(tab);
            setSubFilter('Semua');
        }
    }, [searchParams]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setSubFilter('Semua');
        router.push(`/portofolio?tab=${tab}`, { scroll: false });
    };

    const webFilters = ['Semua', 'Paket Hemat', 'Paket Populer', 'Paket Eksklusif'];
    const undanganFilters = ['Semua', 'Paket Basic', 'Paket Elegant', 'Custom Premium'];

    return (
        <div className="pt-12 pb-24 bg-gray-50/50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Karya Kami</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal">Kami bangga dapat membantu berbagai bisnis dan personal mewujudkan identitas digital mereka.</p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-10">
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
                    <div className="animate-fade-in">
                        <div className="flex flex-wrap justify-center gap-2 mb-10">
                            {webFilters.map(filter => (
                                <button 
                                    key={filter} 
                                    onClick={() => setSubFilter(filter)} 
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${subFilter === filter ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-600 hover:bg-primary/10 border border-gray-200'}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            
                            {/* Proyek 1: Learniverse */}
                            {(subFilter === 'Semua' || subFilter === 'Paket Eksklusif') && (
                                <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                    <div className="aspect-video overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Learniverse Mockup" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="bg-primary/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Paket Eksklusif</span>
                                            <h3 className="text-white text-3xl font-bold mb-2">Learniverse Website</h3>
                                            <p className="text-gray-300 text-sm mb-6 max-w-md font-normal">Asisten akademis AI dengan fitur integrasi chatbot dan manajemen kelas interaktif.</p>
                                            <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                                <span className="material-symbols-outlined">launch</span> Kunjungi Website
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Proyek 2: Personal Digital Hub */}
                            {(subFilter === 'Semua' || subFilter === 'Paket Hemat') && (
                                <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                    <div className="aspect-video overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Digital Hub Mockup" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Paket Hemat</span>
                                            <h3 className="text-white text-3xl font-bold mb-2">Personal Digital Hub</h3>
                                            <p className="text-gray-300 text-sm mb-6 max-w-md font-normal">Website profil untuk profesional kreatif, menampilkan karya, resume, dan form kontak terintegrasi.</p>
                                            <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                                <span className="material-symbols-outlined">launch</span> Kunjungi Website
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                        </div>
                    </div>
                )}

                {/* Tab Content: Undangan Digital */}
                {activeTab === 'undangan' && (
                    <div className="animate-fade-in">
                        <div className="flex flex-wrap justify-center gap-2 mb-10">
                            {undanganFilters.map(filter => (
                                <button 
                                    key={filter} 
                                    onClick={() => setSubFilter(filter)} 
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${subFilter === filter ? 'bg-[#8A2BE2] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-[#8A2BE2]/10 border border-gray-200'}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            
                            {/* Tema Elegant Modern */}
                            {(subFilter === 'Semua' || subFilter === 'Paket Elegant') && (
                                <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-purple-100 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                    <div className="aspect-[4/5] overflow-hidden bg-purple-50">
                                        <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Elegant Modern Mockup" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="bg-[#8A2BE2]/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Paket Elegant</span>
                                            <h3 className="text-white text-3xl font-bold mb-2">Elegant Modern</h3>
                                            <p className="text-gray-300 text-sm mb-6 max-w-md font-normal">Desain mewah dengan nuansa gelap (dark mode), tipografi elegan, dan efek partikel emas interaktif.</p>
                                            <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#8A2BE2] text-white font-bold px-6 py-3 rounded-xl hover:bg-purple-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                                <span className="material-symbols-outlined">visibility</span> Lihat Demo Undangan
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Tema Rustic Minimalist */}
                            {(subFilter === 'Semua' || subFilter === 'Paket Basic') && (
                                <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-amber-100 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                    <div className="aspect-[4/5] overflow-hidden bg-amber-50">
                                        <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Rustic Minimalist Mockup" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Paket Basic</span>
                                            <h3 className="text-white text-3xl font-bold mb-2">Rustic Minimalist</h3>
                                            <p className="text-gray-300 text-sm mb-6 max-w-md font-normal">Konsep bumi (earth tone) dengan ornamen daun kering, warna hangat, dan tipografi kaligrafi natural.</p>
                                            <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#8A2BE2] text-white font-bold px-6 py-3 rounded-xl hover:bg-purple-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                                <span className="material-symbols-outlined">visibility</span> Lihat Demo Undangan
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Portofolio() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-50/50"></div>}>
            <PortofolioContent />
        </Suspense>
    );
}
