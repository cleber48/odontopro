"use client";

import { Calendar, Link as LinkIcon, Eye, X, Plus, Trash2, CalendarDays, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export default function DashboardPage() {
  const agendaSlots = [
    { time: "08:00", status: "Disponível", patient: null, service: null },
    { time: "09:00", status: "Disponível", patient: null, service: null },
    { time: "10:00", status: "Ocupado", patient: "João Silva", service: "Limpeza" },
    { time: "11:00", status: "Disponível", patient: null, service: null },
    { time: "12:00", status: "Ocupado", patient: "Marcos", service: "Orçamento" },
    { time: "13:00", status: "Disponível", patient: null, service: null },
    { time: "14:00", status: "Disponível", patient: null, service: null },
    { time: "15:00", status: "Ocupado", patient: "Ana Caroline", service: "Lentes de resina" },
    { time: "16:00", status: "Disponível", patient: null, service: null },
    { time: "17:00", status: "Disponível", patient: null, service: null },
    { time: "18:00", status: "Disponível", patient: null, service: null },
  ];

  const lembretes = [
    "Enviar mensagem para o Matheus, para lembrar do pagamento atrasado",
    "Lembrar o Lucas de marcar uma nova limpeza",
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full pb-10">
      {/* Top Actions */}
      <div className="flex items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold h-11 px-6 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-0.5 rounded-xl active:translate-y-0 border-0">
              <Plus className="w-4 h-4 mr-2" />
              Novo Agendamento
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] p-8 rounded-3xl">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-extrabold text-zinc-900">Novo Agendamento</DialogTitle>
              <DialogDescription className="text-base text-zinc-600 font-medium mt-1">
                Adicione um paciente manualmente na sua agenda.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-zinc-900">Paciente</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" aria-hidden="true" />
                  <input type="text" placeholder="Buscar paciente por nome ou CPF..." className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base shadow-sm" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-zinc-900">Data</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base text-zinc-700 shadow-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-zinc-900">Horário inicial</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base text-zinc-700 appearance-none bg-white shadow-sm">
                    <option>08:00</option>
                    <option>08:30</option>
                    <option>09:00</option>
                    <option>09:30</option>
                    <option>10:00</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-zinc-900">Procedimento principal</label>
                <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base text-zinc-700 appearance-none bg-white shadow-sm">
                  <option>Avaliação e Orçamento Inicial</option>
                  <option>Limpeza (Profilaxia)</option>
                  <option>Manutenção Ortodôntica</option>
                  <option>Clareamento a Laser</option>
                </select>
              </div>
            </div>
            <DialogFooter className="mt-8 sm:justify-center">
              <DialogClose asChild>
                 <Button type="button" className="w-full bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold h-12 rounded-xl text-base shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] border-0 transition-all">
                   Criar Agendamento Rápidio
                 </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button variant="outline" size="icon" className="shrink-0 bg-zinc-900 border-zinc-900 text-white hover:bg-black hover:text-white rounded-lg shadow-sm" aria-label="Copiar link de agendamento compartilhado">
          <LinkIcon className="w-4 h-4" aria-hidden="true" />
        </Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        {/* AGENDA COLUMN */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
          <div className="flex items-center justify-between p-5 border-b border-zinc-100">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Agenda</h2>
            <div className="flex items-center gap-2 text-zinc-500 font-medium text-sm">
              <span>10/02/2025</span>
              <CalendarDays className="w-5 h-5 text-zinc-400" />
            </div>
          </div>
          
          <div className="flex flex-col">
            {agendaSlots.map((slot, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 hover:bg-zinc-50 transition-colors last:border-0"
              >
                <div className="flex items-start gap-8">
                  <span className="font-bold text-zinc-900 w-12 pt-0.5 text-sm">{slot.time}</span>
                  
                  {slot.patient ? (
                    <div className="flex flex-col">
                      <span className="font-bold text-zinc-900 text-sm leading-tight">{slot.patient}</span>
                      <span className="text-zinc-400 text-xs mt-0.5 font-medium">{slot.service}</span>
                    </div>
                  ) : (
                    <span className="text-zinc-400 text-sm font-medium pt-0.5">{slot.status}</span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-zinc-400">
                  <button className="hover:text-zinc-800 transition-colors p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md" aria-label={slot.patient ? `Visualizar paciente ${slot.patient}` : "Visualizar horário"}>
                    <Eye className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="hover:text-rose-500 transition-colors p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-md" aria-label={slot.patient ? `Cancelar agendamento de ${slot.patient}` : "Bloquear horário"}>
                        <X className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </AlertDialogTrigger>
                    {slot.patient ? (
                      <AlertDialogContent className="rounded-3xl sm:max-w-[400px]">
                         <AlertDialogHeader>
                           <AlertDialogTitle className="text-xl font-extrabold">Cancelar Consulta?</AlertDialogTitle>
                           <AlertDialogDescription className="text-base text-zinc-600 font-medium">
                             O paciente <strong>{slot.patient}</strong> (marcado para as {slot.time}) será notificado via SMS e E-mail sobre o cancelamento.
                           </AlertDialogDescription>
                         </AlertDialogHeader>
                         <AlertDialogFooter className="mt-4">
                           <AlertDialogCancel className="rounded-xl border-zinc-200 font-bold h-11 w-full sm:w-auto">Voltar</AlertDialogCancel>
                           <AlertDialogAction className="rounded-xl bg-rose-500 text-white hover:bg-rose-600 font-bold h-11 w-full sm:w-auto">Sim, Cancelar</AlertDialogAction>
                         </AlertDialogFooter>
                      </AlertDialogContent>
                    ) : (
                      <AlertDialogContent className="rounded-3xl sm:max-w-[400px]">
                         <AlertDialogHeader>
                           <AlertDialogTitle className="text-xl font-extrabold">Bloquear Horário?</AlertDialogTitle>
                           <AlertDialogDescription className="text-base text-zinc-600 font-medium">
                             Tem certeza que deseja fechar a janela das {slot.time} para agendamentos na web?
                           </AlertDialogDescription>
                         </AlertDialogHeader>
                         <AlertDialogFooter className="mt-4">
                           <AlertDialogCancel className="rounded-xl border-zinc-200 font-bold h-11 w-full sm:w-auto">Cancelar</AlertDialogCancel>
                           <AlertDialogAction className="rounded-xl bg-rose-500 text-white hover:bg-rose-600 font-bold h-11 w-full sm:w-auto">Bloquear</AlertDialogAction>
                         </AlertDialogFooter>
                      </AlertDialogContent>
                    )}
                  </AlertDialog>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LEMBRETES COLUMN */}
        <div className="xl:col-span-1 bg-white rounded-xl border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between p-5 border-b border-zinc-100">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Lembretes</h2>
            <button className="text-zinc-400 hover:text-zinc-900 transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-5 flex flex-col gap-4">
            {lembretes.map((lembrete, index) => (
              <div key={index} className="bg-amber-100/50 rounded-lg p-4 flex items-start justify-between gap-4 border border-amber-200/50 shadow-sm">
                <p className="text-sm text-zinc-800 font-medium leading-relaxed pt-0.5">{lembrete}</p>
                <button className="bg-rose-500 text-white rounded-full w-7 h-7 flex items-center justify-center shrink-0 hover:bg-rose-600 transition-colors shadow-sm">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
