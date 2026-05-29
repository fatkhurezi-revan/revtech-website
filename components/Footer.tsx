import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
                
                <div className="md:col-span-4 lg:col-span-5 flex flex-col space-y-6">
                    <Image src="/assets/logo.png" alt="RevTech Logo" width={200} height={100} className="h-20 sm:h-24 md:h-28 w-auto mix-blend-multiply object-contain self-start" />
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                        Agensi digital modern untuk kebutuhan website dan undangan digital.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-500"><FaInstagram className="text-xl" /></a>
                        <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-500"><FaTiktok className="text-xl" /></a>
                        <a href="https://wa.me/6281290018819" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-[#25D366] hover:-translate-y-1 hover:shadow-lg transition-all duration-500"><FaWhatsapp className="text-xl" /></a>
                    </div>
                </div>

                <div className="md:col-span-2 lg:col-span-2">
                    <h4 className="font-bold text-gray-900 mb-6">Layanan</h4>
                    <ul className="space-y-4">
                        <li><Link href="/layanan?tab=web" className="text-gray-500 hover:text-primary text-sm">Website Bisnis</Link></li>
                        <li><Link href="/layanan?tab=undangan" className="text-gray-500 hover:text-primary text-sm">Undangan Digital</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-2 lg:col-span-2">
                    <h4 className="font-bold text-gray-900 mb-6">Perusahaan</h4>
                    <ul className="space-y-4">
                        <li><Link href="/portofolio" className="text-gray-500 hover:text-primary text-sm">Portofolio</Link></li>
                        <li><Link href="/harga" className="text-gray-500 hover:text-primary text-sm">Harga</Link></li>
                        <li><Link href="/faq" className="text-gray-500 hover:text-primary text-sm">FAQ</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-4 lg:col-span-3">
                    <h4 className="font-bold text-gray-900 mb-6">Hubungi Kami</h4>
                    <ul className="space-y-4">
                        <li>
                            <a href="mailto:revtech.indonesia@gmail.com" className="flex items-start space-x-3 text-gray-500 hover:text-primary text-sm">
                                <span className="material-symbols-outlined text-[20px]">mail</span>
                                <span>revtech.indonesia@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <div className="flex items-start space-x-3 text-gray-500 text-sm">
                                <span className="material-symbols-outlined text-[20px]">location_on</span>
                                <span>Sukabumi, Jawa Barat</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">© 2026 RevTech. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-primary text-sm">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-primary text-sm">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
