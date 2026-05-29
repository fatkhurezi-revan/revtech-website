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

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-28 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm w-fit">
                          <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>
                          Agensi Digital Terpercaya
                      </div>
                      
                      <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-gray-900">
                          Wujudkan <br/>
                          Ide Digital <br/>
                          <span className="text-gradient">Lebih Nyata.</span>
                      </h1>
                      
                      <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                          Kami membantu personal, UMKM, dan calon pengantin memiliki identitas digital profesional melalui website responsif dan undangan digital elegan.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Link href="/layanan" className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                              Jelajahi Layanan
                              <span className="material-symbols-outlined">explore</span>
                          </Link>
                          <a href="https://wa.me/6281290018819?text=Halo%20RevTech,%20saya%20tertarik%20untuk%20konsultasi%20gratis." target="_blank" rel="noreferrer" className="bg-white text-gray-800 border-2 border-gray-200 font-bold px-8 py-4 rounded-full hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                              Konsultasi Gratis
                          </a>
                      </div>
                  </div>

                  <div className="relative flex items-center justify-center pt-8 lg:pt-0">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
                      
                      {/* Mockup Container Utama */}
                      <div className="w-full max-w-3xl mx-auto relative pt-4 pb-12 flex flex-col items-center">
                          
                          {/* 1. Kontainer Utama (Melayang di Udara) */}
                          <div className="relative animate-bounce-slow w-full max-w-2xl drop-shadow-2xl"> 
                              
                              {/* 2. MacBook CSS Frame (Anti-Bocor 100%) */}
                              <div className="relative w-full">
                                  {/* Lid (Bezel Hitam) */}
                                  <div className="relative bg-black rounded-t-[1.5rem] md:rounded-t-[2.5rem] p-[3.5%] pb-[6%] shadow-[0_0_0_2px_rgba(255,255,255,0.1)_inset,0_0_20px_rgba(0,0,0,0.5)] aspect-[16/10]">
                                      
                                      {/* Webcam */}
                                      <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-800 rounded-full flex items-center justify-center border border-[#333]"></div>

                                      {/* Logo MacBook Pro text */}
                                      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 text-[6px] md:text-[9px] text-gray-500 font-sans tracking-widest">MacBook Pro</div>

                                      {/* 3. Area Dalam Layar Kaca (Terkunci Sempurna oleh Bezel HTML) */}
                                      <div className="relative w-full h-full bg-[#0a0a0a] rounded-sm md:rounded-md overflow-hidden z-20 shadow-[0_0_10px_rgba(0,0,0,0.8)_inset]">
                                          {heroImages.map((src, index) => (
                                              <img 
                                                  key={index}
                                                  src={src} 
                                                  alt={`Slide ${index + 1}`}
                                                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-[1500ms] ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} 
                                              />
                                          ))}
                                      </div>
                                      
                                      {/* Glossy Overlay (Efek Pantulan Kaca) */}
                                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-[1.5rem] md:rounded-t-[2.5rem] pointer-events-none z-30"></div>
                                  </div>

                                  {/* Base Laptop (Bagian Bawah Silver) */}
                                  <div className="relative bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] h-[3%] aspect-[16/0.5] w-[105%] -left-[2.5%] rounded-b-[2rem] shadow-2xl flex justify-center items-start border-t border-gray-300 z-40">
                                      {/* Thumb indent (Cekungan pembuka layar) */}
                                      <div className="w-[15%] h-[30%] bg-[#6b7280] rounded-b-md shadow-inner"></div>
                                  </div>
                              </div>

                          </div>

                          {/* 4. Efek Bayangan Lantai di Luar Kontainer Melayang (Statis di Bawah) */}
                          <div className="w-[70%] h-6 bg-black/30 blur-2xl rounded-full mx-auto mt-2 pointer-events-none"></div>
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
