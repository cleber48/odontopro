import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PlanoAtivoPage() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full pb-10 mt-2">
      
      <div className="bg-white rounded-md border border-zinc-200 shadow-sm p-6 lg:p-8">
        
        <div className="mb-8">
          <h2 className="text-[17px] font-bold text-zinc-900 tracking-tight">Seu Plano Atual</h2>
          <p className="text-[13px] text-zinc-500 font-medium mt-1">Sua assinatura está ativa!</p>
        </div>

        <div className="flex items-center justify-between mt-8 mb-6">
          <h3 className="text-[14px] font-bold text-zinc-900 tracking-wide uppercase">PROFISSIONAL</h3>
          <span className="bg-[#10B981] text-white text-[12px] font-medium px-4 py-1.5 rounded-md">
            Ativo
          </span>
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

        <div className="mt-8">
          <Link href="/planos">
            <button type="button" className="bg-[#1A1A1A] hover:bg-black text-white font-medium h-9 px-6 rounded-md shadow-sm transition-colors text-[13px]">
              Gerenciar assinatura
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
