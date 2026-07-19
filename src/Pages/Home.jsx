import heroImage from "../assets/hero-acai.png";
import { Link } from "react-router-dom";
import { FaLeaf, FaBolt, FaHeart } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
   <section className="relative min-h-screen bg-black text-white overflow-hidden">
  <ParticlesBackground />
  <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen gap-10">
          <div>
            <span className="border border-purple-600 rounded-full px-5 py-2 text-sm">
              ● O MELHOR AÇAÍ DA CIDADE
            </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-8">
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
  inline-block
  mt-10
  bg-gradient-to-r
  from-purple-700
  to-purple-500
  px-8 md:px-10
  py-4 md:py-5
  rounded-3xl
  text-lg md:text-xl
  hover:scale-105
  duration-300
"
            >
              Ver Cardápio →
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

         <div className="flex flex-col lg:flex-row items-center justify-between">
         <img
  src={heroImage}
  alt="Açaí Prime"
  className="w-full max-w-md lg:max-w-xl mx-auto"
/>
          </div>
        </div>
      </div>
    </section>
  );
}