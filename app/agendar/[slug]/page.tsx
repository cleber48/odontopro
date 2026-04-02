"use client";

import { imgMaria, imgRafael, imgLucas } from "@/app/data/images";
import Image from "next/image";
import { useState } from "react";
import { MapPin, ChevronDown, CheckCircle2, Calendar, Clock, ArrowLeft, Star } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";

const professionals = [
  { id: 1, name: "Dr. Lucas Martins", role: "Clínico Geral", rating: 4.8, reviews: 124, image: imgLucas },
  { id: 2, name: "Dra. Maria Souza", role: "Ortodontista", rating: 4.9, reviews: 89, image: imgMaria },
  { id: 3, name: "Dr. Carlos Lima", role: "Implantodontista", rating: 5.0, reviews: 204, image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" },
  { id: 4, name: "Dra. Beatriz Costa", role: "Odontopediatra", rating: 4.9, reviews: 156, image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" },
  { id: 5, name: "Dr. Rafael Mendes", role: "Cirurgia Bucomaxilo", rating: 5.0, reviews: 312, image: imgRafael },
  { id: 6, name: "Dra. Juliana Rocha", role: "Endodontia", rating: 4.7, reviews: 94, image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80" },
  { id: 7, name: "Dr. Fernando Souza", role: "Prótese Dentária", rating: 4.9, reviews: 205, image: "https://images.unsplash.com/photo-1590611936760-eeb9bc500b67?w=400&q=80" },
  { id: 8, name: "Dra. Camila Alves", role: "Estética Dental", rating: 4.8, reviews: 153, image: "https://images.unsplash.com/photo-1605684954998-685c79d6a018?w=400&q=80" },
];

export default function AgendarProfilePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const professionalId = slug ? parseInt(slug) : 1;
  const professional = professionals.find(p => p.id === professionalId) || professionals[0];

  const [selectedTime, setSelectedTime] = useState<string | null>("10:00");
  const [success, setSuccess] = useState(false);
  const times = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

  return (
    <div className="min-h-screen bg-zinc-50 relative flex flex-col overflow-hidden">
      <Header />

      {/* Decorative Background Blob */}
      <div className="fixed top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-400/10 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-400/10 blur-[120px] pointer-events-none z-0" />

      {/* Standard Full-width Page Alignment */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 flex flex-col">
        
        <div className="mb-8">
          <Link href="/profissionais" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors font-bold bg-white/50 px-4 py-2 rounded-xl border border-zinc-200/60 shadow-sm backdrop-blur-md w-fit">
            <ArrowLeft className="w-4 h-4" />
            Voltar para lista
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Professional Info */}
          <div className="lg:col-span-4 flex flex-col relative">
            <div className="bg-white rounded-[32px] p-8 border border-zinc-100 shadow-xl shadow-zinc-200/40 hidden lg:flex flex-col items-center top-8 sticky">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-[6px] border-emerald-50 mb-6 shadow-sm">
                <Image 
                  src={professional.image} 
                  alt={professional.name} 
                  fill
                  className="object-cover object-[center_25%]"
                  unoptimized
                />
              </div>
              
              <div className="text-center w-full">
                <h1 className="text-2xl font-extrabold text-zinc-900 tracking-tight">{professional.name}</h1>
                <p className="text-emerald-600 font-bold text-sm mt-1">{professional.role}</p>
                
                <div className="flex items-center justify-center gap-2 mt-4 text-sm bg-amber-50 rounded-lg py-2 text-amber-900">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="font-extrabold">{professional.rating}</span>
                  <span className="text-amber-700/70">({professional.reviews} avaliações)</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 font-medium mt-4 pt-4 border-t border-zinc-100">
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2.5} />
                  <span>Unidade Centro - Formosa, GO</span>
                </div>
              </div>
            </div>

             {/* Mobile Version of Professional Card (visible only on mobile/tablet) */}
             <div className="lg:hidden flex items-center gap-5 bg-white rounded-3xl p-5 border border-zinc-100 shadow-xl shadow-zinc-200/40">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-emerald-50 shrink-0">
                  <Image 
                    src={professional.image} 
                    alt={professional.name} 
                    fill
                    className="object-cover object-[center_25%]"
                    unoptimized
                  />
                </div>
                <div>
                  <h1 className="text-xl font-extrabold text-zinc-900 tracking-tight leading-tight">{professional.name}</h1>
                  <p className="text-emerald-600 font-bold text-sm">{professional.role}</p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs font-bold text-zinc-600">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {professional.rating} <span className="font-normal text-zinc-400 block ml-1">• Formosa, GO</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Right Column - Scheduling Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-zinc-100 shadow-xl shadow-zinc-200/40 flex flex-col">
              
              <div className="mb-8 border-b border-zinc-100 pb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">Agende sua consulta</h2>
                <p className="text-zinc-500 text-base font-medium mt-2">Preencha os dados e escolha um horário disponível da agenda.</p>
              </div>

              <form 
                className="flex flex-col gap-6" 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  setSuccess(true); 
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-extrabold text-zinc-800">Nome completo</label>
                    <input 
                      required
                      placeholder="Seu nome" 
                      className="w-full px-4 py-3.5 md:py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium text-zinc-900 bg-zinc-50/80 hover:bg-zinc-50 transition-all placeholder:text-zinc-400 shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-extrabold text-zinc-800">Celular / WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="(00) 00000-0000" 
                      className="w-full px-4 py-3.5 md:py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium text-zinc-900 bg-zinc-50/80 hover:bg-zinc-50 transition-all placeholder:text-zinc-400 shadow-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-extrabold text-zinc-800">Qual o procedimento desejado?</label>
                    <div className="relative">
                      <select 
                        required
                        defaultValue=""
                        className="w-full px-4 py-3.5 md:py-4 pr-10 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-semibold text-zinc-900 appearance-none bg-zinc-50/80 hover:bg-zinc-50 transition-all shadow-sm"
                      >
                        <option value="" disabled>Selecione um motivo...</option>
                        <option value="avaliacao">Avaliação Inicial</option>
                        <option value="implante">Implante Dentário</option>
                        <option value="clareamento">Clareamento</option>
                        <option value="limpeza">Limpeza (Profilaxia)</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
                    </div>
                </div>

                {/* Timeslots */}
                <div className="p-6 md:p-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)] mt-2">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                    <div className="flex items-center gap-2 text-zinc-900 font-extrabold text-lg">
                      <Calendar className="w-5 h-5 text-emerald-500" />
                      Horários Disponíveis
                    </div>
                    <span className="bg-white px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-extrabold text-zinc-600 border border-zinc-200 shadow-sm">
                      Hoje, 31 Out
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {times.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "py-3.5 rounded-xl text-sm font-bold transition-all focus:outline-none border flex items-center justify-center gap-2",
                              isSelected 
                                ? "bg-linear-to-r from-emerald-400 to-emerald-600 border-0 text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.15)] scale-105" 
                                : "bg-white border-zinc-200 text-zinc-600 hover:border-emerald-300 hover:text-emerald-500 shadow-sm hover:shadow" 
                            )}
                          >
                          {isSelected && <Clock className="w-4 h-4" />}
                            {time}
                          </button>
                        )
                      })}
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full text-white font-extrabold text-base md:text-lg h-14 md:h-16 rounded-xl transition-all active:scale-95 bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-[0_10px_25px_-8px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-8px_rgba(0,0,0,0.3)] flex items-center justify-center border-0"
                  >
                    Confirmar Agendamento
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* Success Dialog */}
        <AlertDialog open={success} onOpenChange={setSuccess}>
          <AlertDialogContent className="w-full max-w-[420px] text-center p-8 sm:p-10 rounded-[32px] border border-zinc-100 shadow-2xl">
            <AlertDialogHeader className="flex flex-col items-center">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 ring-8 ring-emerald-50">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>
              <AlertDialogTitle className="text-2xl font-extrabold text-zinc-900 tracking-tight">Tudo Certo!</AlertDialogTitle>
              <AlertDialogDescription className="text-base text-zinc-500 font-medium mt-3 leading-relaxed">
                Sua consulta foi reservada com sucesso. Você receberá um SMS de confirmação no número cadastrado.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="sm:justify-center w-full mt-8">
              <Link href="/" className="w-full block">
                <AlertDialogAction asChild>
                  <Button className="w-full text-white font-extrabold h-14 rounded-xl text-base transition-all active:scale-95 bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-[0_10px_25px_-8px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-8px_rgba(0,0,0,0.3)] border-0">
                    Voltar ao Início
                  </Button>
                </AlertDialogAction>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </main>
    </div>
  );
}
