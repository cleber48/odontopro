import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-28 pb-16">
      <Header />
      
      <main className="container mx-auto px-6 max-w-7xl pb-20">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-100 shadow-sm mt-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-6">Política de Privacidade</h1>
          <p className="text-zinc-500 font-medium text-lg mb-10">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          
          <div className="space-y-8 text-zinc-600 leading-relaxed font-medium">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4">1. Coleta de Informações</h2>
              <p>
                A OdontoPRO se compromete com a privacidade dos dados de pacientes e profissionais da área odontológica. Coletamos apenas informações estritamente necessárias para o agendamento de consultas, gerenciamento de laudos e histórico clínico conforme consentido pelo usuário.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4">2. Uso de Seus Dados</h2>
              <p>
                As informações fornecidas não serão compartilhadas, vendidas ou repassadas a terceiros comerciais em hipótese alguma. O uso se restringe a:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Agendamento e envio de lembretes.</li>
                <li>Processamento interno por profissionais de saúde credenciados.</li>
                <li>Garantia da completude do seu prontuário digital e diagnósticos.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4">3. Proteção e Segurança</h2>
              <p>
                Aplicamos medidas de segurança rígidas e criptografia de ponta a ponta (E2EE) para mitigar riscos de acessos não autorizados. No entanto, lembre-se de que nenhum servidor é 100% impenetrável à mercê de falhas na própria rede de internet do usuário. Recomendamos o uso de senhas fortes.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4">4. Direitos do Usuário (LGPD)</h2>
              <p>
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você pode solicitar a qualquer momento a visualização, portabilidade ou total exclusão permanente do seu histórico e da sua conta dos nossos servidores.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4">5. Fale Conosco</h2>
              <p>
                Se você tiver dúvidas técnicas, observações ou pedidos sobre como tratamos seus dados clínicos e pessoais, sinta-se livre para contatar nosso oficial de privacidade da informação (DPO) na tela de <a href="/contato" className="text-emerald-500 hover:text-emerald-600 underline underline-offset-4">Contato</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
