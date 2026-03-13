import React from 'react';
import Link from 'next/link';

// Componente de Card de Estatística (Reutilizável)
const StatCard = ({ value, label }: { value: string, label: string }) => (
  <div className="bg-[#0B1224] p-4 rounded-xl flex-1 border border-[#1E293B] flex flex-col items-center justify-center min-w-[120px]">
    <span className="text-white text-xl md:text-2xl font-bold">{value}</span>
    <span className="text-[#94A3B8] text-[10px] uppercase tracking-widest text-center mt-1 font-medium">{label}</span>
  </div>
);

// Componente de Funcionalidade (Reutilizável)
const FeatureCard = ({ title, desc, iconColor }: { title: string, desc: string, iconColor: string }) => (
  <div className="bg-[#0B1224] p-6 rounded-2xl border border-[#1E293B] flex gap-4 hover:border-blue-500 transition-all group">
    <div 
      className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-xl transition-transform group-hover:scale-110" 
      style={{ backgroundColor: `${iconColor}20`, border: `1px solid ${iconColor}40` }}
    >
      <div style={{ color: iconColor }}>◈</div>
    </div>
    <div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-[#94A3B8] text-sm mt-1 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050914] text-white selection:bg-blue-500/30">
      
      {/* --- HEADER / NAVBAR --- */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm shadow-lg shadow-blue-500/20">
            ⛰️
          </div>
          GeoSlide
        </div>
        
        {/* Link para Login no Header */}
        <Link href="/login">
          <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all active:scale-95 shadow-lg shadow-blue-500/10">
            Acessar plataforma →
          </button>
        </Link>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="max-w-5xl mx-auto text-center px-6 py-16 md:py-24 flex flex-col items-center">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 bg-[#0B1224] border border-[#1E293B] px-4 py-1.5 rounded-full text-blue-400 text-xs font-medium mb-8 animate-fade-in">
          <span className="animate-pulse">📈</span> Plataforma nacional de monitoramento geológico
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Monitoramento de <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Deslizamentos
          </span> <br />
          em tempo real
        </h1>
        
        <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Plataforma técnica para geólogos e engenheiros. Mapeie riscos, emita alertas e gerencie relatórios com precisão científica.
        </p>
        
        {/* Botões do Hero com Links para Login */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/login" className="w-full sm:w-auto">
            <button className="w-full bg-[#2563EB] hover:bg-blue-700 px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95">
              Acessar o Dashboard
            </button>
          </Link>
          
          <Link href="/login" className="w-full sm:w-auto">
            <button className="w-full bg-[#1E293B] border border-[#334155] hover:bg-[#2d3a4d] px-8 py-4 rounded-xl font-bold transition-all active:scale-95">
              Materiais Técnicos
            </button>
          </Link>
        </div>
      </section>

      {/* --- STATS ROW --- */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
        <StatCard value="1.200+" label="Áreas monitoradas" />
        <StatCard value="340" label="Profissionais ativos" />
        <StatCard value="98%" label="Precisão dos alertas" />
        <StatCard value="24/7" label="Monitoramento" />
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo que você precisa em campo e no escritório</h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto">
            Ferramentas desenvolvidas com rigor técnico para profissionais de geotecnia e defesa civil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard 
            title="Mapeamento de Risco" 
            desc="Visualize zonas de risco com precisão geoespacial em tempo real através de mapas interativos." 
            iconColor="#2563EB"
          />
          <FeatureCard 
            title="Alertas Emergenciais" 
            desc="Emita alertas técnicos e notifique equipes de campo instantaneamente via push e e-mail." 
            iconColor="#F59E0B"
          />
          <FeatureCard 
            title="Análise de Dados" 
            desc="Gráficos históricos de incidentes, precipitação pluviométrica e tendências geológicas." 
            iconColor="#10B981"
          />
          <FeatureCard 
            title="Relatórios Técnicos" 
            desc="Gestão completa de laudos geotécnicos com rastreabilidade total e exportação em PDF." 
            iconColor="#8B5CF6"
          />
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden bg-gradient-to-b from-[#0B1224] to-[#050914] border border-blue-500/30 rounded-[2rem] p-10 md:p-16 text-center flex flex-col items-center">
          {/* Decoração de fundo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none" />
          
          <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center text-3xl mb-8">
            🛡️
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proteja vidas com dados precisos</h2>
          <p className="text-[#94A3B8] mb-10 max-w-md text-lg">
            Acesse o painel completo de monitoramento e tome decisões baseadas em evidências geológicas.
          </p>
          
          {/* Link para Login no CTA Final */}
          <Link href="/login">
            <button className="bg-[#2563EB] hover:bg-blue-700 px-12 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-blue-600/30 active:scale-95">
              Entrar na plataforma →
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="py-12 border-t border-[#1E293B] text-center text-[#475569] text-sm">
        &copy; 2024 GeoSlide. Todos os direitos reservados.
      </footer>

    </main>
  );
}