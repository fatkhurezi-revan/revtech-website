"use client";

import { useState } from 'react';
import Link from 'next/link';

interface AccordionItemProps {
    title: string;
    content: string | React.ReactNode;
}

function AccordionItem({ title, content }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`accordion-item bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 ${isOpen ? 'active shadow-md border-gray-200' : ''}`}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:bg-gray-50 transition-colors"
            >
                <span className="font-bold text-gray-900">{title}</span>
                <span className={`material-symbols-outlined text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            <div 
                className={`px-6 bg-gray-50/50 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 pb-5 pt-1' : 'max-h-0 opacity-0'}`}
            >
                <div className="text-gray-600 text-sm leading-relaxed">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default function FAQ() {
    return (
        <div className="pt-12 pb-24 bg-gray-50/50 min-h-screen">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Pusat Bantuan & FAQ</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Temukan jawaban atas pertanyaan yang paling sering ditanyakan oleh klien kami sebelum memulai proyek.</p>
                </div>

                {/* Kategori 1: Seputar Website */}
                <div className="mb-12">
                    <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                        <span className="material-symbols-outlined text-primary">web</span> Seputar Jasa Website
                    </h3>
                    <div className="space-y-4">
                        <AccordionItem 
                            title="Berapa lama proses pembuatan website?" 
                            content="Waktu pengerjaan sangat bergantung pada paket yang Anda pilih. Untuk Paket Hemat biasanya memakan waktu 3-5 hari kerja. Paket Populer sekitar 1-2 minggu, dan Paket Eksklusif bisa memakan waktu 3 minggu atau lebih tergantung kompleksitas fitur yang diminta."
                        />
                        <AccordionItem 
                            title="Apakah saya perlu menyiapkan teks dan foto sendiri?" 
                            content="Ya, kami sangat menyarankan Anda menyiapkan copywriting (materi teks) dan aset visual (logo, foto produk, dll) agar website lebih sesuai dengan brand Anda. Namun, jika Anda kesulitan, kami bisa membantu memberikan rekomendasi gambar stock berkualitas gratis."
                        />
                        <AccordionItem 
                            title="Apakah saya akan mendapatkan domain .com gratis?" 
                            content="Ya! Mulai dari Paket Hemat, Anda sudah mendapatkan domain (.com / .net / .id sesuai ketersediaan) secara gratis untuk tahun pertama. Biaya perpanjangan di tahun berikutnya akan dikenakan sesuai tarif normal registrar domain."
                        />
                    </div>
                </div>

                {/* Kategori 2: Seputar Undangan */}
                <div className="mb-12">
                    <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                        <span className="material-symbols-outlined text-[#8A2BE2]">favorite</span> Seputar Undangan Digital
                    </h3>
                    <div className="space-y-4">
                        <AccordionItem 
                            title="Apakah tema undangannya bisa diubah warnanya?" 
                            content="Tentu saja! Anda bisa memilih template yang ada, lalu kami akan menyesuaikan color palette (warna dasar) agar senada dengan warna gaun pengantin atau tema acara pernikahan Anda."
                        />
                        <AccordionItem 
                            title="Bagaimana sistem pembuatan custom nama tamu?" 
                            content="Kami menggunakan sistem parameter link (contoh: domain.com/?to=Nama+Tamu). Anda cukup membagikan link tersebut via WhatsApp, dan nama tamu akan otomatis tercetak di cover depan undangan digital Anda. Kami juga bisa membuatkan generator link khusus jika diperlukan."
                        />
                    </div>
                </div>

                {/* Kategori 3: Kebijakan Bisnis & Pembayaran */}
                <div className="mb-16">
                    <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                        <span className="material-symbols-outlined text-orange-500">payments</span> Kebijakan & Pembayaran
                    </h3>
                    <div className="space-y-4">
                        <AccordionItem 
                            title="Bagaimana tahapan pembayarannya?" 
                            content="Kami menerapkan sistem yang aman dan transparan: DP 50% di awal sebagai tanda jadi proyek. Sisa pelunasan 50% ditransfer hanya setelah website/undangan selesai Anda review dan siap dipublikasikan."
                        />
                        <AccordionItem 
                            title="Apakah ada layanan revisi jika desainnya kurang cocok?" 
                            content="Tentu. Kami memberikan maksimal 3 kali revisi minor (perubahan warna, penggantian font, tata letak teks/gambar) sebelum web diluncurkan. Untuk revisi mayor (perombakan total desain dari nol), akan didiskusikan lebih lanjut."
                        />
                    </div>
                </div>

                {/* Closing CTA */}
                <div className="bg-gradient-to-br from-primary to-[#0038b6] rounded-3xl p-10 md:p-12 text-center shadow-xl text-white">
                    <h3 className="text-3xl font-bold mb-4">Masih punya pertanyaan kustom?</h3>
                    <p className="text-blue-100 mb-8 max-w-lg mx-auto">Kami mengerti setiap proyek itu unik. Jangan ragu untuk berdiskusi santai dengan tim kami secara gratis.</p>
                    <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20punya%20pertanyaan%20kustom%20terkait%20jasa%20Anda." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <span className="material-symbols-outlined">chat</span> Chat WhatsApp Sekarang
                    </a>
                </div>

            </div>
        </div>
    );
}
