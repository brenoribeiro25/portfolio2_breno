import React, { useEffect, useRef, useState } from "react";
import { FaCode, FaLock, FaChartBar, FaMobileAlt, FaShoppingCart } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

export default function Portfolio() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current && !muted) {
      audioRef.current.play().catch(() => {});
    }
  }, [muted]);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <audio ref={audioRef} src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_99a54dc880.mp3?filename=keyboard-typing-2-9900.mp3" loop muted={muted}></audio>

      <header className="p-6 border-b border-gray-800 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">Breno Ribeiro</h1>
        <nav className="space-x-4">
          <a href="#sobre" className="hover:text-blue-400">Sobre</a>
          <a href="#servicos" className="hover:text-blue-400">Serviços</a>
          <a href="#portfolio" className="hover:text-blue-400">Portfólio</a>
          <a href="#contato" className="hover:text-blue-400">Contato</a>
        </nav>
      </header>

      <section className="p-10 text-center bg-gradient-to-b from-black via-gray-900 to-black">
        <h2 className="text-4xl font-bold mb-4 text-green-400">
          <Typewriter
            words={["Transformando Dados e Códigos em Soluções Inteligentes"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </h2>
        <button onClick={() => setMuted(!muted)} className="text-sm text-gray-400 hover:text-white mt-2">
          {muted ? "Ativar som de digitação" : "Silenciar som de digitação"}
        </button>
      </section>

      <section id="sobre" className="p-10">
        <h3 className="text-2xl font-semibold mb-4">Sobre Mim</h3>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Sou um profissional de TI com experiência em desenvolvimento web e mobile, análise de dados com Power BI e Qlik View,
          criação de lojas virtuais e aplicativos, além de atuar na área de investigação de crimes digitais. Formado em Sistemas de Informação pela FTC
          e pós-graduado em Investigação de Crimes Digitais pela Verbo Jurídico, ofereço soluções tecnológicas com estratégia e segurança.
        </p>
      </section>

      <section id="servicos" className="p-10 bg-gray-900">
        <h3 className="text-2xl font-semibold mb-4 text-center">Serviços</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-blue-500 transition">
            <FaCode className="text-blue-400 text-3xl mb-2" />
            <h4 className="text-xl font-bold">Desenvolvimento Web & Mobile</h4>
            <p className="text-gray-300 mt-2">Sites, sistemas e aplicativos responsivos e rápidos.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-green-500 transition">
            <FaShoppingCart className="text-green-400 text-3xl mb-2" />
            <h4 className="text-xl font-bold">Lojas Virtuais & Aplicativos</h4>
            <p className="text-gray-300 mt-2">Criação de e-commerces e apps personalizados.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-yellow-500 transition">
            <FaChartBar className="text-yellow-400 text-3xl mb-2" />
            <h4 className="text-xl font-bold">Análise de Dados</h4>
            <p className="text-gray-300 mt-2">Dashboards inteligentes com Power BI e Qlik View.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-red-500 transition">
            <FaLock className="text-red-400 text-3xl mb-2" />
            <h4 className="text-xl font-bold">Crimes Digitais</h4>
            <p className="text-gray-300 mt-2">Consultoria e investigação digital com ética e técnica.</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="p-10">
        <h3 className="text-2xl font-semibold mb-8 text-center">Portfólio</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-4 rounded-xl shadow-md hover:scale-105 transition">
            <img src="/img/site1.jpg" alt="Projeto 1" className="rounded-md mb-2" />
            <h4 className="text-lg font-bold text-blue-400">Loja Virtual ConstruFort</h4>
            <p className="text-gray-400 text-sm">E-commerce de materiais de construção com sistema de orçamento e catálogo dinâmico.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-md hover:scale-105 transition">
            <img src="/img/site2.jpg" alt="Projeto 2" className="rounded-md mb-2" />
            <h4 className="text-lg font-bold text-blue-400">Dashboard Power BI</h4>
            <p className="text-gray-400 text-sm">Painel interativo para análise de vendas e desempenho comercial.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-md hover:scale-105 transition">
            <img src="/img/site3.jpg" alt="Projeto 3" className="rounded-md mb-2" />
            <h4 className="text-lg font-bold text-blue-400">App de Gestão</h4>
            <p className="text-gray-400 text-sm">Aplicativo mobile para controle de tarefas e processos internos em pequenas empresas.</p>
          </div>
        </div>
      </section>

      <section id="contato" className="p-10 bg-gray-900">
        <h3 className="text-2xl font-semibold mb-4 text-center">Contato</h3>
        <div className="text-center text-gray-300">
          <p>Email: <a href="mailto:contato@brenoribeiro.dev" className="text-blue-400">contato@brenoribeiro.dev</a></p>
          <p>WhatsApp: <a href="https://wa.me/seunumero" className="text-blue-400">Clique aqui</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/breno-ribeiro-b3338479" className="text-blue-400" target="_blank">Meu Perfil</a></p>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm p-4 border-t border-gray-800">
        © {new Date().getFullYear()} Breno Ribeiro. Todos os direitos reservados.
      </footer>
    </div>
  );
}