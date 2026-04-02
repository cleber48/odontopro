"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail, Lock, User, Phone, CheckCircle2, ChevronRight, Send } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [recoverOpen, setRecoverOpen] = useState(false);
  const router = useRouter();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Após preencher os campos com sucesso, redireciona o usuário
    router.push("/dashboard");
  };

  const handleRecover = (e: React.FormEvent) => {
    e.preventDefault();
    setRecoverOpen(false);
  };

  return (
    <div className="h-screen w-full bg-zinc-50 flex overflow-hidden">
      {/* Left Column - Super Decorative & Eye-catching */}
      <div className="hidden lg:flex w-1/2 h-full shrink-0 bg-zinc-950 relative flex-col justify-between p-12 lg:p-16 overflow-hidden border-r border-zinc-200/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-zinc-950 to-zinc-950"></div>
        
        {/* Animated Decorative Blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-emerald-500/20 blur-[120px] pointer-events-none animate-pulse duration-1000" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-teal-500/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors w-fit font-medium">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o site principal
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-white">
              Odonto<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-600">PRO</span>
            </span>
          </div>
        </div>

        <div className="relative z-10 max-w-lg mt-12 mb-auto">
          <h1 className="text-5xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Gestão inteligente para<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-600">clínicas de alto nível.</span>
          </h1>
          
          <div className="flex flex-col gap-5">
            {[
              "Agendamentos simplificados em tempo real.",
              "Prontuário eletrônico seguro e organizado.",
              "Controle financeiro automático e painéis de lucro."
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 text-zinc-300">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-lg font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Abstract Pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Right Column - Dynamic Form Area */}
      <div className="w-full lg:w-1/2 h-full shrink-0 relative bg-zinc-50 overflow-y-auto">
        <div className="min-h-full w-full flex flex-col items-center justify-center p-6 sm:p-12 relative">
        
          {/* Mobile Header Elements */}
        <div className="absolute top-6 left-6 lg:hidden flex flex-col gap-6 w-full">
           <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors font-medium">
             <ArrowLeft className="w-4 h-4" />
             Voltar
           </Link>
           <span className="text-2xl font-extrabold tracking-tight text-zinc-900">
              Odonto<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-600">PRO</span>
           </span>
        </div>

        <div className="w-full max-w-[440px] mt-24 lg:mt-0 relative z-10 bg-white p-8 sm:p-10 rounded-[32px] shadow-2xl shadow-zinc-200/50 border border-zinc-100">
          
          {/* Toggle Switch */}
          <div className="flex bg-zinc-100 p-1.5 rounded-2xl mb-8 relative z-20">
            <button 
              onClick={() => setIsLogin(true)}
              className={cn(
                "flex-1 py-2.5 text-sm font-extrabold rounded-xl transition-all duration-300 relative", 
                isLogin ? "text-emerald-700 bg-white shadow-sm" : "text-zinc-500 hover:text-zinc-700"
              )}
            >
              Fazer Login
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={cn(
                "flex-1 py-2.5 text-sm font-extrabold rounded-xl transition-all duration-300 relative", 
                !isLogin ? "text-emerald-700 bg-white shadow-sm" : "text-zinc-500 hover:text-zinc-700"
              )}
            >
              Criar Nova Conta
            </button>
          </div>

          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">
              {isLogin ? "Bem-vindo de volta" : "Comece Agora"}
            </h2>
            <p className="text-zinc-500 font-medium mt-2">
              {isLogin ? "Faça login para acessar o painel restrito." : "Crie sua conta para testar o sistema."}
            </p>
          </div>

          {/* Form Container with relative positioning for simple cross-fade if needed */}
          <form className="flex flex-col gap-5" onSubmit={handleAuth}>
            {/* Conditional Fields for Registration */}
            {!isLogin && (
              <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-extrabold text-zinc-800">Nome completo</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
                    <input 
                      type="text"
                      required={!isLogin}
                      onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Campo obrigatório')}
                      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                      placeholder="Dr. João Silva" 
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium text-zinc-900 bg-zinc-50/50 hover:bg-zinc-50 transition-all placeholder:text-zinc-400 shadow-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-extrabold text-zinc-800">Celular / WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
                    <input 
                      type="tel"
                      required={!isLogin}
                      onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Campo obrigatório')}
                      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                      placeholder="(00) 00000-0000" 
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium text-zinc-900 bg-zinc-50/50 hover:bg-zinc-50 transition-all placeholder:text-zinc-400 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Shared Fields */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-extrabold text-zinc-800">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
                <input 
                  type="email"
                  required
                  onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Campo obrigatório')}
                  onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                  placeholder="contato@clinica.com.br" 
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium text-zinc-900 bg-zinc-50/50 hover:bg-zinc-50 transition-all placeholder:text-zinc-400 shadow-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-extrabold text-zinc-800">Senha</label>
                {isLogin && (
                  <Dialog open={recoverOpen} onOpenChange={setRecoverOpen}>
                    <DialogTrigger asChild>
                      <button type="button" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors border border-emerald-100/50">
                        Esqueceu sua senha?
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md p-8 sm:p-10 rounded-[32px] border border-zinc-100 shadow-2xl">
                      <form onSubmit={handleRecover}>
                      <DialogHeader className="mb-4">
                        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 ring-8 ring-emerald-50/50 mx-auto sm:mx-0">
                          <Lock className="w-8 h-8 text-emerald-500" />
                        </div>
                        <DialogTitle className="text-2xl font-extrabold text-zinc-900 tracking-tight text-center sm:text-left">Recuperar Senha</DialogTitle>
                        <DialogDescription className="text-base text-zinc-500 font-medium mt-2 text-center sm:text-left">
                          Digite o e-mail associado à sua conta. Enviaremos um link seguro para você redefinir sua senha.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col gap-4 py-2 mt-2">
                        <div className="flex flex-col gap-2">
                          <label className="text-sm font-extrabold text-zinc-800">E-mail cadastrado</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
                            <input 
                              type="email"
                              required
                              onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Campo obrigatório')}
                              onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                              placeholder="contato@clinica.com.br" 
                              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium text-zinc-900 bg-zinc-50/80 hover:bg-zinc-50 transition-all placeholder:text-zinc-400 shadow-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <DialogFooter className="mt-8 sm:justify-center w-full">
                        <Button type="submit" className="w-full text-white font-extrabold text-base h-14 rounded-xl transition-all active:scale-95 bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.15)] focus:ring-2 focus:ring-emerald-500 border-0 flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Enviar link de recuperação
                        </Button>
                      </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
                <input 
                  type="password"
                  required
                  onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Campo obrigatório')}
                  onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium text-zinc-900 bg-zinc-50/50 hover:bg-zinc-50 transition-all placeholder:text-zinc-400 shadow-sm"
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <Button 
                type="submit" 
                className="w-full text-white font-extrabold text-base h-14 rounded-xl transition-all active:scale-95 bg-linear-to-r from-emerald-400 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_25px_-4px_rgba(0,0,0,0.25)] flex items-center justify-center border-0 gap-2 group"
              >
                {isLogin ? "Acessar Sistema" : "Criar minha conta grátis"}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>

          {/* Social Proof beneath form to increase conversion */}
          {!isLogin && (
            <p className="text-center text-[11px] font-bold text-zinc-400 uppercase tracking-widest mt-8 animate-in fade-in duration-700">
               Junte-se a mais de 150 clínicas
            </p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}
