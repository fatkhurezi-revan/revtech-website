"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

function PortofolioContent() {
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
        router.push(`/portofolio?tab=${tab}`, { scroll: false });
    };

    return (
        <div className="pt-12 pb-24 bg-gray-50/50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Karya Kami</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal">Kami bangga dapat membantu berbagai bisnis dan personal mewujudkan identitas digital mereka.</p>
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
                        

                        {/* Section 2: Hasil Karya Kami / Klien Terkini */}
                        <section>
                            <div className="mb-10 border-b border-gray-200 pb-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Hasil Karya Kami / Klien Terkini</h2>
                                <p className="text-gray-500 mt-2">Bukti nyata dari berbagai proyek yang telah kami selesaikan untuk klien.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                    <div className="aspect-video overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Learniverse Mockup" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="bg-primary/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Klien Asli</span>
                                            <h3 className="text-white text-3xl font-bold mb-2">Learniverse Platform</h3>
                                            <p className="text-gray-300 text-sm mb-6 max-w-md font-normal">Platform e-learning untuk bimbingan belajar dengan sistem manajemen kelas.</p>
                                            <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                                <span className="material-symbols-outlined text-sm">launch</span> Kunjungi Website
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
                        

                        {/* Section 2: Klien yang Mempercayai Kami */}
                        <section className="bg-white rounded-3xl p-10 border border-purple-100 shadow-sm">
                            <div className="mb-8 text-center border-b border-gray-100 pb-6">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Klien yang Mempercayai Kami</h2>
                                <p className="text-gray-500 text-sm mt-2">Momen bahagia yang telah kami abadikan secara digital.</p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="rounded-xl overflow-hidden aspect-[3/4] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Client 1" className="w-full h-full object-cover" />
                                </div>
                                <div className="rounded-xl overflow-hidden aspect-[3/4] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Client 2" className="w-full h-full object-cover" />
                                </div>
                                <div className="rounded-xl overflow-hidden aspect-[3/4] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Client 3" className="w-full h-full object-cover" />
                                </div>
                                <div className="rounded-xl overflow-hidden aspect-[3/4] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Client 4" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </section>

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
