import React from 'react';

export default function Login() {
  return (
    <main className="min-h-screen bg-[#050914] flex flex-col items-center justify-center p-6 selection:bg-blue-500/30">
      
      {/* Logo e Título */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] mb-4">
          <span className="text-white text-3xl font-bold">⛰️</span>
        </div>
        <h1 className="text-white text-3xl font-bold mb-2">Login</h1>
        <p className="text-[#94A3B8] text-sm">Acesse o sistema de monitoramento</p>
      </div>

      {/* Card de Login */}
      <div className="w-full max-w-md bg-[#0B1224]/50 backdrop-blur-md border border-[#1E293B] rounded-3xl p-8 shadow-2xl">
        <form className="space-y-6">
          
          {/* Campo E-mail */}
          <div className="space-y-2">
            <label className="text-white text-sm font-medium block ml-1">E-mail</label>
            <input 
              type="email" 
              placeholder="joao@instituicao.gov.br"
              className="w-full bg-[#161D2F] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder:text-[#475569] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Campo Senha */}
          <div className="space-y-2">
            <label className="text-white text-sm font-medium block ml-1">Senha</label>
            <div className="relative">
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-[#161D2F] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder:text-[#475569] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569] hover:text-white transition-colors">
                👁️
              </button>
            </div>
          </div>

          {/* Lembrar e Esqueci Senha */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-[#1E293B] bg-[#161D2F] text-blue-600 focus:ring-offset-0 focus:ring-0" />
              <span className="text-[#94A3B8] text-sm group-hover:text-white transition-colors">Lembrar de mim</span>
            </label>
            <button type="button" className="text-[#475569] text-sm hover:text-white transition-colors">
              Esqueci minha senha
            </button>
          </div>

          {/* Botão Entrar */}
          <button className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-[0_4px_15px_rgba(37,99,235,0.3)] transition-all active:scale-[0.98]">
            Entrar
          </button>

        </form>
      </div>

      {/* Footer do Login */}
      <p className="mt-8 text-[#94A3B8] text-sm">
        Não tem uma conta? <button className="text-blue-400 font-semibold hover:underline">Criar conta</button>
      </p>

    </main>
  );
}