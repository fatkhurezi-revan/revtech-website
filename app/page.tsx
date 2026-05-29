"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const heroImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      }, 4000);
      return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-[-2] bg-[#f8fafc] pointer-events-none"></div>

      {/* Hero Section Baru - Clean & Fresh Idea */}
      <section className="relative pt-20 pb-28 lg:pt-32 lg:pb-40 overflow-hidden">
          {/* Background Orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-[-1]">
              <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-blob"></div>
              <div className="absolute bottom-[10%] left-[20%] w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                  
                  {/* Bagian Kiri - Teks & CTA */}
                  <div className="space-y-8 relative z-10">
                      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-gray-200/50 text-gray-800 font-semibold text-sm w-fit shadow-sm">
                          <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                          </span>
                          Agensi Digital Terpercaya
                      </div>
                      
                      <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-gray-900">
                          Wujudkan <br/>
                          Ide Digital <br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                              Lebih Nyata.
                          </span>
                      </h1>
                      
                      <p className="text-lg text-gray-600 max-w-lg leading-relaxed font-medium">
                          Kami membantu personal, UMKM, dan calon pengantin memiliki identitas digital profesional melalui website responsif dan undangan digital elegan.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 pt-6">
                          <Link href="/layanan" className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                              Mulai Projek Anda
                              <span className="material-symbols-outlined text-lg">arrow_forward</span>
                          </Link>
                          <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20tertarik%20untuk%20konsultasi%20gratis." target="_blank" rel="noreferrer" className="bg-white/80 backdrop-blur-sm text-gray-800 border border-gray-200 font-bold px-8 py-4 rounded-full hover:bg-white hover:border-gray-300 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                              Konsultasi Gratis
                          </a>
                      </div>
                  </div>

                  {/* Bagian Kanan - Glassmorphism Display (Fresh Idea) */}
                  <div className="relative flex items-center justify-center lg:justify-end pt-8 lg:pt-0">
                      
                      {/* Decorative Floating Badges */}
                      <div className="absolute -left-4 sm:-left-8 top-10 bg-white p-3 sm:p-4 rounded-2xl shadow-xl shadow-gray-200/50 z-30 animate-levitate" style={{ animationDelay: '1s' }}>
                          <div className="flex gap-3 items-center">
                              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                  <span className="material-symbols-outlined">rocket_launch</span>
                              </div>
                              <div className="hidden sm:block">
                                  <p className="text-xs text-gray-500 font-bold">Performa</p>
                                  <p className="text-sm font-extrabold text-gray-900">Super Cepat</p>
                              </div>
                          </div>
                      </div>

                      <div className="absolute -right-2 sm:-right-6 bottom-20 bg-white p-3 sm:p-4 rounded-2xl shadow-xl shadow-gray-200/50 z-30 animate-levitate" style={{ animationDelay: '2.5s' }}>
                          <div className="flex gap-3 items-center">
                              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                  <span className="material-symbols-outlined">brush</span>
                              </div>
                              <div className="hidden sm:block">
                                  <p className="text-xs text-gray-500 font-bold">Desain</p>
                                  <p className="text-sm font-extrabold text-gray-900">Modern & Elegan</p>
                              </div>
                          </div>
                      </div>

                      {/* Main Glass Display Container */}
                      <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-4 sm:p-6 overflow-hidden group">
                          
                          {/* Inner Screen Container */}
                          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/50 shadow-inner">
                              
                              {/* Top Bar (Mac-like UI dots) */}
                              <div className="absolute top-0 left-0 w-full h-10 bg-white/80 backdrop-blur-md flex items-center px-4 gap-2 z-30 border-b border-gray-200/50">
                                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                              </div>

                              {/* Auto-Changing Images Carousel */}
                              <div className="absolute inset-0 pt-10">
                                  {heroImages.map((src, index) => (
                                      <img 
                                          key={index}
                                          src={src} 
                                          alt={`Karya ${index + 1}`}
                                          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} 
                                      />
                                  ))}
                              </div>

                              {/* Inner Bottom Gradient */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-20"></div>
                              
                              {/* Dynamic Content Labels */}
                              <div className="absolute bottom-6 left-6 right-6 z-30">
                                  <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 transform transition-transform duration-500 hover:-translate-y-1">
                                      <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">
                                          {currentImageIndex === 0 ? "Template Website" : "Undangan Digital"}
                                      </p>
                                      <p className="text-gray-900 font-extrabold text-lg line-clamp-1">
                                          {currentImageIndex === 0 ? "Sistem Bisnis Profesional" : "Desain Elegan Premium"}
                                      </p>
                                  </div>
                              </div>

                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section>

      {/* Layanan Singkat */}
      <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Layanan Kami</h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Solusi Digital RevTech</h3>
                  <p className="text-lg text-gray-600">Pendekatan komprehensif untuk kebutuhan digital Anda, dirancang dengan fokus pada performa dan estetika.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="glass-card rounded-[2rem] p-8 lg:p-12 group relative overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-primary/20"></div>
                      <div className="relative z-10 flex-1">
                          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                              <span className="material-symbols-outlined text-3xl">web</span>
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-4">Pengembangan Web</h4>
                          <p className="text-gray-600 mb-8 font-normal leading-relaxed">
                              Situs web kustom yang responsif, cepat, dan dioptimalkan untuk SEO. Kami membangun platform profesional yang mendorong konversi.
                          </p>
                      </div>
                      <div className="relative z-10 mt-auto pt-4">
                          <Link href="/layanan?tab=web" className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full justify-center">
                              Pesan Jasa Web <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </Link>
                      </div>
                  </div>

                  <div className="glass-card rounded-[2rem] p-8 lg:p-12 group relative overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#8A2BE2]/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-[#8A2BE2]/20"></div>
                      <div className="relative z-10 flex-1">
                          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-8 text-[#8A2BE2] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                              <span className="material-symbols-outlined text-3xl">favorite</span>
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-4">Undangan Digital</h4>
                          <p className="text-gray-600 mb-8 font-normal leading-relaxed">
                              Undangan digital modern, elegan, dan interaktif. Ramah lingkungan dengan fitur RSVP terintegrasi dan desain yang disesuaikan sepenuhnya.
                          </p>
                      </div>
                      <div className="relative z-10 mt-auto pt-4">
                          <Link href="/layanan?tab=undangan" className="inline-flex items-center gap-2 border-2 border-[#8A2BE2] text-[#8A2BE2] font-bold px-6 py-3 rounded-xl hover:bg-purple-700 hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full justify-center">
                              Pesan Undangan <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Harga Singkat */}
      <section className="py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Paket Harga</h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Investasi Transparan</h3>
                  <p className="text-lg text-gray-600">Pilihan paket fleksibel mulai dari undangan digital hingga website bisnis kompleks.</p>
              </div>
              
              <div className="glass-card rounded-[2rem] p-8 md:p-12 text-center bg-white/80 max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row justify-around items-center gap-8 mb-8 border-b border-gray-100 pb-8">
                      <div>
                          <p className="text-gray-500 font-medium mb-2">Jasa Web Development</p>
                          <p className="text-3xl font-extrabold text-gray-900">Mulai <span className="text-primary">Rp 300.000</span></p>
                      </div>
                      <div className="hidden md:block w-px h-16 bg-gray-200"></div>
                      <div>
                          <p className="text-gray-500 font-medium mb-2">Jasa Undangan Digital</p>
                          <p className="text-3xl font-extrabold text-gray-900">Mulai <span className="text-[#8A2BE2]">Rp 50.000</span></p>
                      </div>
                  </div>
                  <Link href="/harga" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Lihat Paket Lengkap <span className="material-symbols-outlined">visibility</span>
                  </Link>
              </div>
          </div>
      </section>

      {/* FAQ Singkat */}
      <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Paling Sering Ditanyakan</h2>
              </div>
              
              <div className="space-y-4 mb-10">
                  <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                      <h4 className="font-bold text-gray-900 mb-2">Berapa lama proses pembuatan website?</h4>
                      <p className="text-gray-600 text-sm font-normal">Umumnya memakan waktu 3-5 hari kerja untuk paket dasar, hingga 1-2 minggu untuk website kustom yang lebih kompleks.</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                      <h4 className="font-bold text-gray-900 mb-2">Apakah saya bisa mengubah desain undangan digital?</h4>
                      <p className="text-gray-600 text-sm font-normal">Ya! Tema, warna, foto, font, dan musik bisa disesuaikan sepenuhnya sesuai dengan selera Anda.</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                      <h4 className="font-bold text-gray-900 mb-2">Bagaimana sistem pembayarannya?</h4>
                      <p className="text-gray-600 text-sm font-normal">Pembayaran dilakukan dengan sistem DP 50% di awal dan pelunasan 50% setelah proyek selesai.</p>
                  </div>
              </div>
              
              <div className="text-center">
                  <Link href="/faq" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                      Lihat Semua FAQ <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="glass-card rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden bg-white/60">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary"></div>
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
                      Siap Memulai Proyek Anda?
                  </h2>
                  <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
                      Jangan biarkan ide Anda hanya menjadi rencana. Mari berkolaborasi dan bangun ekosistem digital yang memukau.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                      <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20ingin%20berdiskusi%20tentang%20proyek%20digital%20saya." target="_blank" rel="noreferrer" className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                          <span className="material-symbols-outlined">chat</span> Diskusikan Sekarang
                      </a>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
