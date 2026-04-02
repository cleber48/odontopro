"use client";

import Link from "next/link";
import { Menu, Home, Users, Calendar, Phone, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-40 py-4 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-3xl font-extrabold tracking-tight text-zinc-900 hover:opacity-90 transition-opacity"
        >
          Odonto<span className="text-emerald-500">PRO</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-emerald-500 transition-colors">
            Início
          </Link>
          <Link href="/profissionais" className="text-sm font-medium text-zinc-600 hover:text-emerald-500 transition-colors">
            Profissionais
          </Link>
          <Link href="/agendamentos" className="text-sm font-medium text-zinc-600 hover:text-emerald-500 transition-colors">
            Agendamentos
          </Link>
            <Link href="/login">
              <Button className="hidden md:flex bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-300 hover:to-emerald-500 text-white font-extrabold h-11 px-6 rounded-xl transition-all active:scale-95 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_25px_-4px_rgba(0,0,0,0.25)] border-0">
                Acessar Painel
              </Button>
            </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="md:hidden text-zinc-900 border-zinc-200 hover:bg-zinc-100 transition-colors rounded-xl"
              variant="outline"
              size="icon"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[85vw] sm:w-100 border-l-0 shadow-2xl p-6 flex flex-col justify-between bg-white overflow-y-auto">
            <div>
              <SheetHeader className="mb-10 text-left">
                <SheetTitle className="font-extrabold text-3xl tracking-tight text-zinc-900 mb-1">
                  Odonto<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-600">PRO</span>
                </SheetTitle>
                <SheetDescription className="text-zinc-500 text-base">
                  Gestão odontológica com excelência e foco total no paciente.
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-6">
                <SheetClose asChild>
                  <Link href="/" className="flex items-center gap-4 text-lg font-semibold text-zinc-700 hover:text-emerald-500 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-zinc-50 group-hover:bg-emerald-50 flex items-center justify-center transition-colors">
                      <Home className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500 transition-colors"/>
                    </div>
                    Início
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link href="/profissionais" className="flex items-center gap-4 text-lg font-semibold text-zinc-700 hover:text-emerald-500 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-zinc-50 group-hover:bg-emerald-50 flex items-center justify-center transition-colors">
                      <Users className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500 transition-colors"/>
                    </div>
                    Profissionais
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link href="/agendamentos" className="flex items-center gap-4 text-lg font-semibold text-zinc-700 hover:text-emerald-500 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-zinc-50 group-hover:bg-emerald-50 flex items-center justify-center transition-colors">
                      <Calendar className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500 transition-colors"/>
                    </div>
                    Agendamentos
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link href="/contato" className="flex items-center gap-4 text-lg font-semibold text-zinc-700 hover:text-emerald-500 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-zinc-50 group-hover:bg-emerald-50 flex items-center justify-center transition-colors">
                      <Phone className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500 transition-colors"/>
                    </div>
                    Contato
                  </Link>
                </SheetClose>
              </nav>
            </div>

            <div className="border-t border-zinc-100 pt-6 mt-8">
              <SheetClose asChild>
                <Link href="/dashboard" className="w-full">
                  <Button className="w-full bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_25px_-4px_rgba(0,0,0,0.25)] border-0 gap-2 h-14 text-lg font-extrabold rounded-2xl transition-all hover:-translate-y-1 active:translate-y-0 active:scale-95">
                    Acessar Painel
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
