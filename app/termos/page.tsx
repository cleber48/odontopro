import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-28 pb-16">
      <Header />
      
      <main className="container mx-auto px-6 max-w-7xl pb-20">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-100 shadow-sm mt-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-6">Termos de Uso</h1>
          <p className="text-zinc-500 font-medium text-lg mb-10">Data de Entrada em Vigor: 01 de Janeiro de 2024</p>
          
          <div className="space-y-8 text-zinc-600 leading-relaxed font-medium">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar a plataforma web ou aplicativo OdontoPRO (daqui em diante referido como "Plataforma"), você atesta ter lido e concordado irrestritamente com os termos, diretrizes e condições aqui definidos. A inobservância deste termo proíbe a utilização dos nossos serviços.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4">2. Uso Responsável</h2>
              <p>
                Os usuários (profissionais e pacientes) comprometem-se a utilizar a plataforma para agendamentos genuínos e comunicação de saúde legítima. É terminantemente proibido o fornecimento de dados falsos, invasão de perfis e a utilização não-autorizada da ferramenta para spam, scraping ou revenda em nome de terceiros.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4">3. Limitação de Responsabilidade</h2>
              <p>
                A OdontoPRO atua como intermediária ágil de software e gestão digital de consultórios. Não nos responsabilizamos legalmente pelo mérito científico ou pelas condutas clínicas propostas no ambiente físico do consultório odontológico vinculado ao profissional.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4">4. Interrupção e Disponibilidade</h2>
              <p>
                Concentramos os maiores esforços na garantia de que o sistema permaneça online 99.9% do tempo. No entanto, avisamos que paralisações para manutenção agendada, bugs pontuais ou casos fortuitos de sobrecarga em infraestruturas hospedadas em nuvem não imputam danos ou obrigações impositivas sobre a plataforma.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4">5. Propriedade Intelectual</h2>
              <p>
                Todo design, bancos de dados, textos logísticos, logotipos e códigos visuais da plataforma são de integral, unânime tutela e direito autoral reservado ao grupo responsável pela marca <b>OdontoPRO</b>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
