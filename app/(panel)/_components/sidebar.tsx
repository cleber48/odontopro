"use client";

import Link from "next/link";
import { Calendar, FolderOpen, Settings, CreditCard, ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-zinc-200 min-h-screen flex flex-col py-6 px-4 shrink-0 shadow-sm z-10 sticky top-0 h-screen overflow-y-auto hidden md:flex">
      {/* Header Logo + Toggle */}
      <div className="flex items-center justify-between mb-8 pl-1 pr-1">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-zinc-900 hover:opacity-90">
          Odonto<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-600">PRO</span>
        </Link>
        <button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-600 rounded-[5px] p-1 transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* DASHBOARD GROUP */}
      <div className="mb-6">
        <h3 className="text-[11px] font-bold text-zinc-500 mb-3 uppercase tracking-wider pl-1">Dashboard</h3>
        <nav className="flex flex-col gap-1.5">
          <Link 
            href="/dashboard"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-[5px] text-sm font-medium transition-colors",
              pathname === "/dashboard" 
                ? "bg-blue-500 text-white shadow-sm" 
                : "text-zinc-700 hover:bg-zinc-100"
            )}
          >
            <Calendar className={cn("w-[20px] h-[20px]", pathname === "/dashboard" ? "text-white" : "text-zinc-500")} />
            Agendamentos
          </Link>
          <Link 
            href="/servicos"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-[5px] text-sm font-medium transition-colors",
              pathname === "/servicos" 
                ? "bg-blue-500 text-white shadow-sm" 
                : "text-zinc-700 hover:bg-zinc-100"
            )}
          >
            <FolderOpen className={cn("w-[20px] h-[20px]", pathname === "/servicos" ? "text-white" : "text-zinc-500")} />
            Serviços
          </Link>
        </nav>
      </div>

      {/* MINHA CONTA GROUP */}
      <div className="mb-6 mt-4">
        <h3 className="text-[11px] font-bold text-zinc-500 mb-3 uppercase tracking-wider pl-1">Minha Conta</h3>
        <nav className="flex flex-col gap-1.5">
          <Link 
            href="/perfil"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-[5px] text-sm font-medium transition-colors",
              pathname === "/perfil" 
                ? "bg-blue-500 text-white shadow-sm" 
                : "text-zinc-700 hover:bg-zinc-100"
            )}
          >
            <Settings className={cn("w-[20px] h-[20px]", pathname === "/perfil" ? "text-white" : "text-zinc-500")} />
            Configurações
          </Link>
          <Link 
            href="/planos"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-[5px] text-sm font-medium transition-colors",
              pathname === "/planos" 
                ? "bg-blue-500 text-white shadow-sm" 
                : "text-zinc-700 hover:bg-zinc-100"
            )}
          >
            <CreditCard className={cn("w-[20px] h-[20px]", pathname === "/planos" ? "text-white" : "text-zinc-500")} />
            Planos
          </Link>
        </nav>
      </div>
    </aside>
  );
}
