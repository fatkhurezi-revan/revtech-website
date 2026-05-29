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
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal">Pilih dari berbagai desain template profesional dan modern yang siap digunakan untuk kebutuhan digital Anda.</p>
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
                    <div className="animate-fade-in space-y-24">
                        <section>
                            <div className="mb-10 border-b border-gray-200 pb-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Katalog Konsep & Template</h2>
                                <p className="text-gray-500 mt-2">Pilih desain konsep dan template siap pakai untuk inspirasi bisnis Anda.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                    <div className="aspect-video overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Digital Hub Mockup" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="bg-gray-500/50 text-gray-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Template Profil</span>
                                            <h3 className="text-white text-3xl font-bold mb-2">Creative Portfolio</h3>
                                            <p className="text-gray-300 text-sm mb-6 max-w-md font-normal">Konsep website profil untuk profesional kreatif dengan tampilan modern.</p>
                                            <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                                <span className="material-symbols-outlined text-sm">visibility</span> Lihat Demo Live
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* Tab Content: Undangan Digital */}
                {activeTab === 'undangan' && (
                    <div className="animate-fade-in space-y-24">
                        <section>
                            <div className="mb-10 text-center">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Katalog Contoh Template</h2>
                                <p className="text-gray-500">Pilih tema undangan yang paling sesuai dengan gaya acara Anda.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                                
                                {/* Tema Elegant */}
                                <div className="flex flex-col items-center">
                                    <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800 transform hover:-translate-y-4 transition-transform duration-500">
                                        <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-t-[2.5rem] z-20 flex justify-center">
                                            <div className="w-20 h-4 bg-black rounded-b-xl mt-1"></div>
                                        </div>
                                        <div className="w-full h-full bg-purple-900 rounded-[2rem] overflow-hidden relative group">
                                            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Elegant Theme" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                                                <div className="text-center">
                                                    <h3 className="text-white text-2xl font-serif font-bold mb-1">Romeo & Juliet</h3>
                                                    <p className="text-purple-200 text-xs tracking-widest uppercase">Tema Elegant</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="mt-8 bg-[#8A2BE2] text-white font-bold px-8 py-3 rounded-full hover:bg-purple-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                        Lihat Demo
                                    </a>
                                </div>

                                {/* Tema Rustic */}
                                <div className="flex flex-col items-center">
                                    <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800 transform hover:-translate-y-4 transition-transform duration-500">
                                        <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-t-[2.5rem] z-20 flex justify-center">
                                            <div className="w-20 h-4 bg-black rounded-b-xl mt-1"></div>
                                        </div>
                                        <div className="w-full h-full bg-amber-900 rounded-[2rem] overflow-hidden relative group">
                                            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Rustic Theme" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                                                <div className="text-center">
                                                    <h3 className="text-white text-2xl font-serif font-bold mb-1">Andi & Rina</h3>
                                                    <p className="text-amber-200 text-xs tracking-widest uppercase">Tema Rustic</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="mt-8 bg-[#8A2BE2] text-white font-bold px-8 py-3 rounded-full hover:bg-purple-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                        Lihat Demo
                                    </a>
                                </div>

                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Template() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-50/50"></div>}>
            <TemplateContent />
        </Suspense>
    );
}
