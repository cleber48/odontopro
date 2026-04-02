import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PlanosPage() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full pb-10 mt-2">
      
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        
        {/* Basic Plan */}
        <div className="flex-1 rounded-md border border-zinc-200 overflow-hidden shadow-sm flex flex-col p-6">
          <div className="mb-6">
            <h2 className="text-[17px] font-bold text-zinc-900 tracking-tight">Basic</h2>
            <p className="text-[13px] text-zinc-500 mt-1 font-medium">Perfeito para clinicas menores</p>
          </div>
          
          <ul className="flex flex-col gap-3.5 mb-8">
            <li className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
              <span className="w-1 h-1 rounded-full bg-zinc-400"></span> Até 3 serviços
            </li>
            <li className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
              <span className="w-1 h-1 rounded-full bg-zinc-400"></span> Agendamentos ilimitados
            </li>
            <li className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
              <span className="w-1 h-1 rounded-full bg-zinc-400"></span> Suporte
            </li>
            <li className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
              <span className="w-1 h-1 rounded-full bg-zinc-400"></span> Relatórios
            </li>
          </ul>

          <div className="mt-auto pt-6 flex flex-col">
            <span className="text-[15px] text-zinc-500 font-medium line-through">R$ 57,90</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-[16px] font-bold tracking-tight text-zinc-900">R$ 27,90/mês</span>
            </div>
            
            <Link href="/planos/ativo" className="w-full mt-5">
              <button type="button" className="w-full bg-[#1A1A1A] hover:bg-black text-white font-medium h-9 rounded-sm transition-colors text-[13px]">
                Ativar assinatura
              </button>
            </Link>
          </div>
        </div>

        {/* Profissional Plan */}
        <div className="flex-1 rounded-md border border-zinc-200 overflow-hidden shadow-sm flex flex-col relative bg-white">
          <div className="bg-[#10B981] px-6 py-3">
            <h2 className="text-[16px] font-bold text-white">Profissional</h2>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <div className="mb-6">
              <p className="text-[13px] text-zinc-500 font-medium">Ideal para clinicas grandes</p>
            </div>
            
            <ul className="flex flex-col gap-3.5 mb-8">
              <li className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
                <span className="w-1 h-1 rounded-full bg-zinc-400"></span> Até 40 serviços
              </li>
              <li className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
                <span className="w-1 h-1 rounded-full bg-zinc-400"></span> Agendamentos ilimitados
              </li>
              <li className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
                <span className="w-1 h-1 rounded-full bg-zinc-400"></span> Suporte prioritário
              </li>
              <li className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
                <span className="w-1 h-1 rounded-full bg-zinc-400"></span> Relatórios
              </li>
            </ul>

            <div className="mt-auto pt-6 flex flex-col">
              <span className="text-[15px] text-zinc-500 font-medium line-through">R$ 147,90</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-[16px] font-bold tracking-tight text-zinc-900">R$ 97,90/mês</span>
              </div>
              
              <Link href="/planos/ativo" className="w-full mt-5">
                <button type="button" className="w-full bg-[#10B981] hover:bg-[#0ea5e9] text-white font-medium h-9 rounded-sm transition-colors text-[13px]">
                  Ativar assinatura
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
