"use client";

import { imgLucas } from "@/app/data/images";

import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function PerfilPage() {
  const [selectedSlots, setSelectedSlots] = useState<string[]>(["8:00", "9:00", "10:00", "11:00"]);
  const times = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"];

  const toggleSlot = (time: string) => {
    setSelectedSlots(prev => prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto pb-10">
      
      {/* Profile Box */}
      <div className="bg-white rounded-md border border-zinc-200 p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-zinc-800 mb-8 tracking-tight">Meu perfil</h2>
        
        {/* Avatar */}
        <div className="flex justify-center mb-10">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border border-zinc-200">
            <Image 
              src={imgLucas} 
              alt="Foto de Perfil" 
              fill
              className="object-cover object-[center_25%]"
              unoptimized
            />
          </div>
        </div>

        {/* Form Fields */}
        <form className="flex flex-col gap-5">
          {/* Nome completo */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fullName" className="text-sm font-bold text-zinc-800">Nome completo:</label>
            <input 
              id="fullName"
              type="text" 
              defaultValue="Dr. Lucas Martins"
              className="w-full px-3 py-2 rounded-md border border-zinc-300 focus:outline-none focus:border-[#00B496] text-sm text-zinc-600"
            />
          </div>

          {/* Endereço completo */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="address" className="text-sm font-bold text-zinc-800">Endereço completo:</label>
            <input 
              id="address"
              type="text" 
              defaultValue="Rua X, centro, 10"
              className="w-full px-3 py-2 rounded-md border border-zinc-300 focus:outline-none focus:border-[#00B496] text-sm text-zinc-600"
            />
          </div>

          {/* Status */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="status" className="text-sm font-bold text-zinc-800">Status:</label>
            <div className="relative">
              <select 
                id="status"
                className="w-full pl-3 pr-10 py-2 rounded-md border border-zinc-300 focus:outline-none focus:border-[#00B496] text-sm text-zinc-600 appearance-none bg-white"
              >
                <option value="ATIVO">ATIVO</option>
                <option value="INATIVO">INATIVO</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" aria-hidden="true" />
            </div>
          </div>

          {/* Configurar horários */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-zinc-800">Configurar horários:</label>
            <Dialog>
              <DialogTrigger asChild>
                <button type="button" aria-haspopup="dialog" className="w-full px-3 py-2 rounded-md border border-zinc-300 focus:outline-none focus:border-[#00B496] text-sm text-zinc-600 bg-white flex justify-between items-center text-left hover:bg-zinc-50">
                  Clique aqui para selecionar horários
                  <ChevronRight className="w-5 h-5 text-zinc-400" aria-hidden="true" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md p-6 rounded-lg gap-6">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-zinc-900">Horários da clínica</DialogTitle>
                  <DialogDescription className="text-sm text-zinc-500 mt-1">
                    Selecione os horários que sua clínica está aberta atendendo.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap gap-2.5">
                  {times.map((time) => {
                    const isSelected = selectedSlots.includes(time);
                    return (
                      <button
                        key={time}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => toggleSlot(time)}
                        className={cn(
                          "w-[60px] py-1.5 rounded-sm border text-[13px] font-semibold transition-colors focus:outline-none",
                          isSelected 
                            ? "bg-white border-[#00B496] text-[#00B496]" 
                            : "bg-white border-zinc-300 text-zinc-600 hover:border-zinc-400"
                        )}
                      >
                        {time}
                      </button>
                    )
                  })}
                </div>
                <div className="mt-2">
                  <DialogClose asChild>
                    <button type="button" className="w-full bg-[#00B496] hover:bg-[#00a086] text-white font-medium h-10 rounded-md text-sm transition-colors">
                      Salvar horários
                    </button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Fuso horário */}
          <div className="flex flex-col gap-1.5 mb-2">
            <label id="timezone-label" className="text-sm font-bold text-zinc-800">Fuso horário:</label>
            <button type="button" aria-labelledby="timezone-label" className="w-full px-3 py-2 rounded-md border border-zinc-300 focus:outline-none focus:border-[#00B496] text-sm text-zinc-500 bg-white flex justify-between items-center text-left hover:bg-zinc-50">
              Selecione o fuso horário
              <ChevronRight className="w-5 h-5 text-zinc-400" aria-hidden="true" />
            </button>
          </div>

          <button type="button" className="w-full bg-[#367962] hover:bg-[#2b604e] text-white font-medium h-10 rounded-md transition-colors text-sm">
            Salvar alterações
          </button>
        </form>
      </div>

      {/* Logout Action */}
      <div className="flex justify-start">
        <button type="button" className="bg-[#D9534F] hover:bg-[#c9302c] text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm transition-colors mt-2">
          Sair da conta
        </button>
      </div>
      
    </div>
  );
}
