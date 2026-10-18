import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaBolt, FaHeart } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";

import heroImage from "../assets/hero-acai-novo.png";
import acaiFrutas from "../assets/acai-frutax.png";

const slides = [heroImage, acaiFrutas];

export default function Home() {
  const [slideAtual, setSlideAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideAtual((atual) => (atual + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  return (
   <section className="relative min-h-screen bg-black text-white overflow-hidden">

  {/* Carrossel de fundo */}
  <div className="absolute inset-0 overflow-hidden">
    {slides.map((imagem, index) => (
      <img
        key={imagem}
        src={imagem}
        alt=""
        aria-hidden="true"
        className={`hero-slide ${
          index === slideAtual ? "hero-slide-active" : ""
        }`}
      />
    ))}

    {/* Camada escura para destacar o texto */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
    <div className="absolute inset-0 bg-black/20" />
  </div>

  <ParticlesBackground />
<div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8"> 
         <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen gap-10">
          <div>
            <span className="border border-purple-600 rounded-full px-5 py-2 text-sm">
              ● O MELHOR AÍÇA DA CIDADE
            </span>

<h1 className="hero-title mt-8">
    Sabor que
  <br />
  <span className="text-purple-500">
    conquista!
  </span>
</h1>

            <p className="mt-6 text-gray-400 text-lg md:text-2xl">
              Açaí cremoso, frutas selecionadas e os melhores complementos.
            </p>

           <Link
  to="/menu"
  className="
    inline-flex
    items-center
    gap-3
    px-8
    py-4
    rounded-2xl
    bg-gradient-to-r
    from-purple-700
    via-purple-600
    to-fuchsia-500
    text-white
    font-bold
    text-lg
    shadow-[0_0_35px_rgba(168,85,247,0.45)]
    hover:shadow-[0_0_60px_rgba(168,85,247,0.75)]
    hover:scale-105
    hover:-translate-y-1
    transition-all
    duration-300
  "
>
  Ver Cardápio
  <span className="text-xl">→</span>
</Link>
           <div className="flex justify-center lg:justify-start gap-6 mt-10 flex-wrap">

  <div className="border-r border-purple-900 pr-6">
    <FaLeaf className="text-purple-500 text-2xl drop-shadow-[0_0_15px_#a855f7]" />
    <p className="text-xs text-zinc-400">Ingredientes</p>
    <p className="text-sm text-white">Frescos</p>
  </div>

  <div className="border-r border-purple-900 pr-6">
    <FaBolt className="text-purple-500 text-2xl drop-shadow-[0_0_15px_#a855f7]" />
    <p className="text-xs text-zinc-400">Entrega</p>
    <p className="text-sm text-white">Rápida</p>
  </div>

  <div className="text-center lg:text-left">
   <FaHeart className="text-purple-500 text-2xl drop-shadow-[0_0_15px_#a855f7]" />
    <p className="text-xs text-zinc-400">Feito com</p>
    <p className="text-sm text-white">Paixão</p>
  </div>

</div>
          </div>

         
        </div>
      </div>
    </section>
  );
}