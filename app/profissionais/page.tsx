import { imgMaria, imgRafael, imgLucas } from "@/app/data/images";
import Image from "next/image";
import { Header } from "@/app/_components/header";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export default function ProfissionaisPage() {
  return (
    <div className="min-h-screen bg-zinc-50 pb-16">
      <Header />
      {/* Banner Superior */}
      <div className="w-full bg-emerald-600 pt-32 pb-16 px-6 mb-12 text-center rounded-b-3xl sm:rounded-b-[60px] shadow-sm">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-sm">
            Nossos Profissionais
          </h1>
          <p className="text-emerald-50 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            Conheça nossa equipe de especialistas prontos para cuidar do seu sorriso com excelência e tecnologia de ponta.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {professionals.map((pro) => (
            <div key={pro.id} className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-emerald-50 shadow-sm">
                  <Image src={pro.image} alt={`Foto de ${pro.name}`} fill className="object-cover object-[center_25%]" unoptimized />
                </div>
              </div>
              <div className="text-center flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-zinc-900 mb-1">{pro.name}</h3>
                <p className="text-emerald-500 font-medium text-sm mb-3">{pro.role}</p>
                <div className="flex items-center justify-center gap-1 text-sm font-semibold text-zinc-700 mb-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  {pro.rating} <span className="text-zinc-400 font-normal">({pro.reviews} valiações)</span>
                </div>
                <p className="flex items-center justify-center gap-1.5 text-xs text-zinc-500 mb-6">
                  <MapPin className="w-3.5 h-3.5" /> Formosa, GO
                </p>
                <div className="mt-auto">
                  <Link href={`/agendar/${pro.id}`} className="w-full block">
                    <Button className="w-full text-white font-extrabold h-12 rounded-xl transition-all active:scale-95 bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_25px_-4px_rgba(0,0,0,0.25)] border-0">
                      Agendar Agora
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
