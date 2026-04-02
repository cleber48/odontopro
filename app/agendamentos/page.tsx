"use client";

import { Calendar, Clock, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/app/_components/header";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";

export default function MeusAgendamentos() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-28 pb-16">
      <Header />
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">Meus Agendamentos</h1>
            <p className="text-zinc-600 text-lg font-medium">
              Acompanhe suas consultas marcadas e o histórico de atendimentos.
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold h-12 px-6 rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all active:scale-95 border-0 focus-visible:ring-2 focus-visible:ring-emerald-500">
                <Search className="w-5 h-5 mr-2" />
                Novo Agendamento
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] p-8 rounded-3xl">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl font-extrabold text-zinc-900">Agendar Consulta</DialogTitle>
                <DialogDescription className="text-base text-zinc-600 font-medium mt-1">
                  Escolha o especialista e o melhor horário para você.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-zinc-900">Especialista</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base text-zinc-700 appearance-none bg-white shadow-sm">
                    <option>Dr. Luis Felipe (Clínica Geral)</option>
                    <option>Dra. Ana Silva (Ortodontia)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-zinc-900">Procedimento desejado</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base text-zinc-700 appearance-none bg-white shadow-sm">
                    <option>Avaliação e Orçamento Inicial</option>
                    <option>Limpeza (Profilaxia)</option>
                    <option>Urgência / Dor de Dente</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-zinc-900">Data sugerida</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base text-zinc-700 shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-zinc-900">Preferência de Horário</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base text-zinc-700 appearance-none bg-white shadow-sm">
                      <option>Manhã (08h - 12h)</option>
                      <option>Tarde (13h - 18h)</option>
                    </select>
                  </div>
                </div>
              </div>
              <DialogFooter className="mt-8 sm:justify-center">
                <DialogClose asChild>
                   <Button type="button" className="w-full bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold h-12 rounded-xl text-base shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] border-0 transition-all">
                     Solicitar Agendamento
                   </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="p-6 sm:p-8 border-b border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-100 shadow-sm">
                <Calendar className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-black text-emerald-600 uppercase tracking-wider mb-1">Próxima Consulta</p>
                <h3 className="text-xl font-extrabold text-zinc-900">Dr. Luis Felipe</h3>
                <p className="text-zinc-500 font-semibold text-sm">Limpeza Profissional (Profilaxia)</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-2.5 bg-zinc-50 p-5 rounded-2xl border border-zinc-100 min-w-[220px]">
              <div className="flex items-center gap-3 text-sm font-bold text-zinc-700 whitespace-nowrap">
                <Calendar className="w-4 h-4 text-emerald-500" />
                31 de Outubro, 2025
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-zinc-700 whitespace-nowrap">
                <Clock className="w-4 h-4 text-emerald-500" />
                10:00 <span className="text-zinc-400 font-medium text-xs ml-1">(Horário local)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-50/50 px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
             <p className="flex items-center justify-center gap-2 text-sm font-bold text-zinc-600">
               <MapPin className="w-4 h-4 text-zinc-400" />
               Rua 10, nº10, Centro, Formosa, GO
             </p>
             <div className="flex gap-3 w-full sm:w-auto">
               <Dialog>
                 <DialogTrigger asChild>
                   <Button variant="outline" className="w-full sm:w-auto border-zinc-300 text-zinc-700 hover:bg-zinc-100 font-bold h-10 px-6 rounded-lg transition-colors hover:border-zinc-400">
                     Reagendar
                   </Button>
                 </DialogTrigger>
                 <DialogContent className="sm:max-w-100 p-8 rounded-3xl">
                   <DialogHeader className="mb-4">
                     <DialogTitle className="text-2xl font-extrabold text-zinc-900">Reagendar Consulta</DialogTitle>
                     <DialogDescription className="text-base text-zinc-600 font-medium">
                       Escolha uma nova data e horário.
                     </DialogDescription>
                   </DialogHeader>
                   <div className="flex flex-col gap-4">
                     <div className="flex flex-col gap-2">
                       <label className="text-sm font-bold text-zinc-900">Nova Data</label>
                       <input type="date" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base text-zinc-700 shadow-sm" />
                     </div>
                     <div className="flex flex-col gap-2">
                       <label className="text-sm font-bold text-zinc-900">Novo Horário</label>
                       <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base text-zinc-700 appearance-none bg-white shadow-sm">
                         <option>08:00</option><option>09:00</option><option>10:00</option>
                       </select>
                     </div>
                   </div>
                   <DialogFooter className="mt-8 sm:justify-center">
                     <DialogClose asChild>
                        <Button type="button" className="w-full bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold h-12 rounded-xl text-base shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] border-0 transition-all">
                          Salvar Agendamento
                        </Button>
                     </DialogClose>
                   </DialogFooter>
                 </DialogContent>
               </Dialog>

               <AlertDialog>
                 <AlertDialogTrigger asChild>
                   <Button variant="destructive" className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-base h-10 px-6 rounded-lg transition-colors shadow-sm">
                     Cancelar
                   </Button>
                 </AlertDialogTrigger>
                 <AlertDialogContent className="rounded-3xl sm:max-w-100">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-xl font-extrabold">Cancelar Agendamento?</AlertDialogTitle>
                      <AlertDialogDescription className="text-base text-zinc-600 font-medium">
                        Tem certeza? Esta ação cancelará sua consulta com o Dr. Luis Felipe e disponibilizará o horário para outros pacientes.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="mt-4">
                      <AlertDialogCancel className="rounded-xl border-zinc-200 font-bold h-11 w-full sm:w-auto">Não, Manter</AlertDialogCancel>
                      <AlertDialogAction className="rounded-xl bg-rose-500 text-white hover:bg-rose-600 font-bold h-11 w-full sm:w-auto">Sim, Cancelar</AlertDialogAction>
                    </AlertDialogFooter>
                 </AlertDialogContent>
               </AlertDialog>
             </div>
          </div>
        </div>

      </div>
    </div>
  )
}
