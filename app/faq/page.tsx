"use client";

import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "O acesso à plataforma para pacientes custa alguma coisa?",
      answer: "A plataforma OdontoPRO é 100% gratuita para cadastro e agendamento de pacientes. Os nossos planos de assinatura (Mensal, Semestral, Anual) e eventuais taxas são faturados diretamente e de forma exclusiva aos profissionais/clínicas dentárias para cobrir os recursos avançados de hospedagem e faturamento."
    },
    {
      question: "As datas das consultas estão sempre sincronizadas?",
      answer: "Sim. Nossos relógios atualizam o inventário de horários vagos das clínicas instantaneamente, de uma ponta à outra. Assim que você finaliza seu agendamento, o horário se torna impenetrável para outras pessoas na visualização do profissional de saúde selecionado."
    },
    {
      question: "Como funciona a política para desmarcar?",
      answer: "Recomendamos fortemente que eventuais cancelamentos sejam notificados ao painel com pelo menos 24 horas de antecedência em respeito ao fluxo das clínicas e aos horários alocados para outros na lista de espera. O paciente recorrente em faltas bruscas pode ter limitações do seu acesso a novas consultas expressas."
    },
    {
      question: "Como os dados do meu cadastro e convênio são tratados?",
      answer: "As informações documentais são de propriedade exclusivamente sua. Seus dados sigilosos são alocados em conformidade legal, criptografados desde o disparo no navegador e submetidos às prerrogativas normatizadas por entidades fiscalizadoras de dados de saúde no país."
    },
    {
      question: "Posso utilizar este sistema mesmo optando por particular?",
      answer: "Claro! Nosso motor atende prontamente tanto clientes amparados por uma rica rede de convênios listados na documentação da clínica quanto atendimentos unicamente particulares na rotina padrão."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 pt-28 pb-16">
      <Header />
      
      <main className="container mx-auto px-6 max-w-7xl pb-20 mt-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-zinc-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Listamos abaixo as questões mais tradicionais em relação ao funcionamento da infraestrutura interativa da nossa plataforma.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white border border-zinc-200 rounded-2xl open:shadow-lg open:shadow-zinc-200/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 font-bold text-lg md:text-xl text-zinc-900 marker:content-none select-none">
                {faq.question}
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-50 text-zinc-500 group-open:bg-linear-to-r group-open:from-emerald-400 group-open:to-emerald-600 group-open:text-white transition-all duration-300">
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform duration-300" />
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-8 text-zinc-600 font-medium leading-relaxed open:animate-in open:fade-in open:slide-in-from-top-2">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
        
        <div className="mt-16 bg-emerald-50 rounded-3xl p-8 md:p-12 text-center border border-emerald-100">
          <h2 className="text-2xl font-bold text-emerald-900 mb-3">Ainda possui dificuldades pontuais?</h2>
          <p className="text-emerald-700/80 mb-6 font-medium">Nossa área técnica está apostos em regime diário e pode esclarecer qualquer entrave sistêmico remanescente.</p>
          <a href="/contato" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12 px-8 rounded-full transition-colors">
            Contactar Equipe
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
