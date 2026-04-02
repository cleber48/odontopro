"use client";

import { Search, Plus, Pencil, X } from "lucide-react";
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

export default function ServicosPage() {
  const servicos = [
    { id: 1, name: "Limpeza", prefixText: "-", price: "R$250,00" },
    { id: 2, name: "Lentes contato resina", prefixText: "-", price: "R$ 1.500,00" },
    { id: 3, name: "Orçamento", prefixText: "-", price: "R$ 50,00" },
    { id: 4, name: "Canal", prefixText: "-", price: "R$ 1.500,00" },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full pb-10">
      
      {/* Spacer to align with Dashboard layout flow */}
      <div className="mt-2"></div>

      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-100">
          <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Serviços</h2>
          <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold h-11 px-6 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-0.5 rounded-xl active:translate-y-0 border-0">
              <Plus className="w-4 h-4 mr-2" />
              Novo Serviço
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-100 p-8 rounded-3xl">
             <DialogHeader className="mb-4">
               <DialogTitle className="text-2xl font-extrabold text-zinc-900">Novo Procedimento</DialogTitle>
               <DialogDescription className="text-base text-zinc-600 font-medium">
                 Adicione um novo serviço ao seu catálogo.
               </DialogDescription>
             </DialogHeader>
             <div className="flex flex-col gap-4">
               <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-zinc-900">Nome do Procedimento</label>
                 <input type="text" placeholder="Ex: Clareamento a Laser" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base text-zinc-700 shadow-sm" />
               </div>
               <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-zinc-900">Valor Base (R$)</label>
                 <input type="text" placeholder="Ex: R$ 800,00" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base text-zinc-700 shadow-sm" />
               </div>
             </div>
             <DialogFooter className="mt-8 sm:justify-center">
               <DialogClose asChild>
                  <Button type="button" className="w-full bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold h-12 rounded-xl text-base shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] border-0 transition-all">
                    Criar Serviço
                  </Button>
               </DialogClose>
             </DialogFooter>
          </DialogContent>
        </Dialog>
        </div>
        
        {/* List */}
        <div className="flex flex-col">
          {servicos.map((servico) => (
            <div 
              key={servico.id} 
              className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 hover:bg-zinc-50 transition-colors last:border-0"
            >
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-medium text-zinc-800">{servico.name}</span>
                <span className="text-[15px] text-zinc-400 font-medium">{servico.prefixText}</span>
                <span className="text-[15px] text-zinc-600 tracking-tight">{servico.price}</span>
              </div>

              <div className="flex items-center gap-2 text-zinc-400">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="hover:text-emerald-600 hover:bg-emerald-50 transition-colors p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-emerald-500 outline-none" title="Editar serviço" aria-label={`Editar serviço ${servico.name}`}>
                      <Pencil className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-100 p-8 rounded-3xl">
                     <DialogHeader className="mb-4">
                       <DialogTitle className="text-2xl font-extrabold text-zinc-900">Editar Procedimento</DialogTitle>
                       <DialogDescription className="text-base text-zinc-600 font-medium">
                         Atualize as informações deste serviço.
                       </DialogDescription>
                     </DialogHeader>
                     <div className="flex flex-col gap-4">
                       <div className="flex flex-col gap-2">
                         <label className="text-sm font-bold text-zinc-900">Nome do Procedimento</label>
                         <input type="text" defaultValue={servico.name} className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base text-zinc-700 shadow-sm" />
                       </div>
                       <div className="flex flex-col gap-2">
                         <label className="text-sm font-bold text-zinc-900">Valor Base (R$)</label>
                         <input type="text" defaultValue={servico.price} className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base text-zinc-700 shadow-sm" />
                       </div>
                     </div>
                     <DialogFooter className="mt-8 sm:justify-center">
                       <DialogClose asChild>
                          <Button type="button" className="w-full bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold h-12 rounded-xl text-base shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] border-0 transition-all">
                            Salvar Alterações
                          </Button>
                       </DialogClose>
                     </DialogFooter>
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="hover:text-rose-600 hover:bg-rose-50 transition-colors p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-rose-500 outline-none" title="Excluir serviço" aria-label={`Excluir serviço ${servico.name}`}>
                      <X className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="rounded-3xl sm:max-w-100">
                     <AlertDialogHeader>
                       <AlertDialogTitle className="text-xl font-extrabold">Excluir Serviço?</AlertDialogTitle>
                       <AlertDialogDescription className="text-base text-zinc-600 font-medium">
                         Tem certeza que deseja apagar o serviço <strong>{servico.name}</strong>? Esta ação removerá a opção do menu de agendamentos.
                       </AlertDialogDescription>
                     </AlertDialogHeader>
                     <AlertDialogFooter className="mt-4">
                       <AlertDialogCancel className="rounded-xl border-zinc-200 font-bold h-11 w-full sm:w-auto">Cancelar</AlertDialogCancel>
                       <AlertDialogAction className="rounded-xl bg-rose-500 text-white hover:bg-rose-600 font-bold h-11 w-full sm:w-auto">Sim, Excluir</AlertDialogAction>
                     </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
