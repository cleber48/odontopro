"use client";

import Link from "next/link";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100">
      <div className="container mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          <div className="flex flex-col gap-6 lg:max-w-xs">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight text-zinc-900">
                Odonto<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-600">PRO</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed font-medium">
              Transformando a gestão odontológica com tecnologia, simplicidade e foco total na experiência do paciente e do profissional.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.822a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V7.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M23.953 4.57a10.025 10.025 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.05 10.05 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-6">Plataforma</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/profissionais" className="text-sm text-zinc-500 font-medium hover:text-emerald-500 transition-colors">Profissionais</Link></li>
              <li><Link href="/planos" className="text-sm text-zinc-500 font-medium hover:text-emerald-500 transition-colors">Planos</Link></li>
              <li><Link href="#como-funciona" className="text-sm text-zinc-500 font-medium hover:text-emerald-500 transition-colors">Como funciona</Link></li>
              <li><Link href="#recursos" className="text-sm text-zinc-500 font-medium hover:text-emerald-500 transition-colors">Recursos disponíveis</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-6">Suporte</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/faq" className="text-sm text-zinc-500 font-medium hover:text-emerald-500 transition-colors">Central de Ajuda</Link></li>
              <li><Link href="/contato" className="text-sm text-zinc-500 font-medium hover:text-emerald-500 transition-colors">Fale conosco</Link></li>
              <li><Link href="/termos" className="text-sm text-zinc-500 font-medium hover:text-emerald-500 transition-colors">Termos de uso</Link></li>
              <li><Link href="/privacidade" className="text-sm text-zinc-500 font-medium hover:text-emerald-500 transition-colors">Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-6">OdontoPRO App</h3>
            <p className="text-sm text-zinc-500 font-medium mb-4">Em breve, gerencie sua clínica diretamente na palma da sua mão.</p>
            <div className="flex flex-col gap-3">
              <button className="w-full h-12 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-colors">
                <svg viewBox="0 0 384 512" className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                Baixar na App Store
              </button>
              <button className="w-full h-12 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-colors">
                <svg viewBox="0 0 512 512" className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                Disponível no Google Play
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          <p className="text-xs text-zinc-400 font-medium md:justify-self-start order-3 md:order-1">
            © {new Date().getFullYear()} OdontoPRO.
          </p>
          
          <div className="flex justify-center order-1 md:order-2">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-100 hover:bg-emerald-500 text-zinc-600 hover:text-white text-xs font-extrabold tracking-wide uppercase rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
              aria-label="Voltar ao início da página"
            >
              Voltar ao Início
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
            
          <p className="text-xs text-zinc-400 font-medium flex items-center justify-center md:justify-self-end gap-1 order-2 md:order-3">
            Feito com <Heart className="w-3 h-3 text-red-400 fill-red-400 mx-0.5" /> para a odontologia
          </p>
        </div>
      </div>
    </footer>
  );
}
