import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { imgMaria, imgRafael, imgLucas } from "@/app/data/images";
import Image from "next/image";
import Link from "next/link";
import { Star, Search, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data (Simulando o banco de dados)
const profissionais = [
  { id: 1, name: "Dr. Lucas Martins", role: "Clínico Geral", rating: 4.8, reviews: 124, image: imgLucas },
  { id: 2, name: "Dra. Maria Souza", role: "Ortodontista", rating: 4.9, reviews: 89, image: imgMaria },
  { id: 3, name: "Dr. Pedro Costa", role: "Implantodontista", rating: 4.7, reviews: 256, image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" },
  { id: 4, name: "Dra. Ana Lima", role: "Odontopediatria", rating: 5.0, reviews: 42, image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" },
  { id: 5, name: "Dr. Rafael Mendes", role: "Cirurgia Bucomaxilo", rating: 5.0, reviews: 312, image: imgRafael },
  { id: 6, name: "Dra. Beatriz Rocha", role: "Periodontista", rating: 4.8, reviews: 76, image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80" },
  { id: 7, name: "Dr. Lucas Martins", role: "Cirurgião Bucomaxilo", rating: 4.9, reviews: 198, image: "https://images.unsplash.com/photo-1590611936760-eeb9bc500b67?w=400&q=80" },
  { id: 8, name: "Dra. Camila Alves", role: "Estética Dental", rating: 4.8, reviews: 153, image: "https://images.unsplash.com/photo-1605684954998-685c79d6a018?w=400&q=80" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-20">
      <Header />
      
      {/* Hero Section Premium */}
      <section className="relative bg-white overflow-hidden pb-16 pt-8 md:pb-24 border-b border-zinc-100">
        
        {/* Decorative dynamic background blob */}
        <div className="absolute top-0 left-1/2 -ml-[40rem] w-[80rem] h-[50rem] opacity-20 bg-linear-to-bl from-emerald-400 via-transparent to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">
          
          <div className="flex flex-col gap-8 max-w-2xl">
            {/* Top Badge */}
            <div className="inline-flex w-max items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/50 shadow-sm text-sm font-bold text-emerald-600 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Plataforma Líder em Odontologia
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-zinc-900 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Encontre os melhores <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-600">profissionais</span> em um único local!
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              Nós somos uma plataforma para profissionais da saúde com foco em agilizar seu atendimento de forma simplificada e organizada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Link href="/profissionais">
                <Button className="w-full sm:w-auto bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 h-14 rounded-full font-extrabold shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.2)] border-0 text-lg transition-all hover:scale-105 active:scale-95 group">
                  Agendar Consulta Agora
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Button>
              </Link>
            </div>

            {/* Avatars Social Proof */}
            <div className="flex items-center gap-4 mt-8 animate-in fade-in duration-1000 delay-500">
              <div className="flex -space-x-3">
                <img className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1594824436998-d102a0a25fc5?w=100&q=80" alt="Médico" />
                <img className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&q=80" alt="Médica" />
                <img className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80" alt="Médico" />
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-white bg-zinc-100 shadow-sm flex items-center justify-center text-xs font-bold text-zinc-600">+2k</div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-zinc-600 mt-0.5">Pacientes atendidos</span>
              </div>
            </div>

          </div>
          
          <div className="relative animate-in fade-in zoom-in-95 duration-1000 w-full aspect-square md:aspect-auto md:h-[600px] lg:h-[700px] lg:-mr-8 xl:-mr-16">
            <div className="absolute inset-0 bg-emerald-500/10 rounded-[3rem] -rotate-3 scale-105 -z-10 transition-transform duration-700 hover:rotate-0" />
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-zinc-100 group">
              <Image 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop" 
                alt="Médico Dentista atendendo com um sorriso" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[20s] ease-out"
                unoptimized
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Card */}
            <div className="absolute -left-6 md:-left-12 bottom-12 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white flex items-center gap-4 animate-bounce hover:animate-none hover:scale-105 transition-transform cursor-default" style={{ animationDuration: '3s' }}>
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-zinc-900 leading-none">100%</span>
                <span className="text-sm font-bold text-zinc-500">Satisfação</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Grid de Profissionais */}
      <section className="container max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">Nossos Profissionais</h2>
            <p className="text-zinc-600 text-lg">Conheça nossa equipe de especialistas prontos para cuidar do seu sorriso com excelência e tecnologia de ponta.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profissionais.map((pro) => (
            <div key={pro.id} className="bg-white rounded-3xl p-6 border border-zinc-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-emerald-50 bg-zinc-100 shadow-inner">
                  <Image 
                    src={pro.image} 
                    alt={pro.name} 
                    fill 
                    className="object-cover object-[center_25%] hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-zinc-900 text-[11px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm border border-zinc-100">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  {pro.rating}
                </div>
              </div>
              
              <span className="text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full mb-3 mt-2">
                {pro.role}
              </span>
              <h3 className="text-lg font-extrabold text-zinc-900 mb-1">{pro.name}</h3>
              <p className="text-xs text-zinc-500 mb-6 flex items-center justify-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Formosa, GO
              </p>
              
              <Link href={`/agendar/${pro.id}`} className="w-full mt-auto block">
                <Button className="w-full text-white font-extrabold h-12 rounded-xl transition-all active:scale-95 bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_25px_-4px_rgba(0,0,0,0.25)] border-0">
                  Ver Disponibilidade
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
