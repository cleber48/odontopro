import { Mail, Phone, MapPin } from "lucide-react";
import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-28 pb-16 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-6 max-w-7xl text-center flex-1 mb-24">
        <h1 className="text-4xl font-extrabold text-zinc-900 tracking-tight mb-4 mt-8">Fale Conosco</h1>
        <p className="text-zinc-600 text-lg font-medium mb-12">
          Nossa equipe de atendimento está pronta para tirar suas dúvidas e ajudar no que for preciso.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-2">
              <Phone className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold text-zinc-900">Telefone / WhatsApp</h2>
            <p className="text-zinc-600 font-medium text-lg">(67) 99910-1999</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-2">
              <Mail className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold text-zinc-900">E-mail</h2>
            <p className="text-zinc-600 font-medium text-lg">contato@odontopro.com.br</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-2">
              <MapPin className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold text-zinc-900">Endereço Físico</h2>
            <p className="text-zinc-600 font-medium text-lg">Rua 10, nº 10, Centro, Formosa - GO</p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
