import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="w-full bg-black/70 backdrop-blur-md fixed top-0 left-0 border-b border-zinc-800 z-50">
      <div className="flex items-center justify-between p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-500">
          Açaí Prime
        </h1>

        {/* Desktop */}
        <nav className="hidden md:flex gap-6 text-white">
          <Link to="/" className="hover:text-purple-400 transition">
            Início
          </Link>

          <Link to="/menu" className="hover:text-purple-400 transition">
            Cardápio
          </Link>

          <Link to="/sobre" className="hover:text-purple-400 transition">
            Sobre
          </Link>

          <Link to="/contatos" className="hover:text-purple-400 transition">
            Contato
          </Link>
        </nav>

        {/* Botão celular */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          ☰
        </button>
      </div>

      {/* Menu celular */}
      {menuAberto && (
        <nav className="md:hidden flex flex-col gap-4 p-6 bg-black/95 text-white">
          <Link to="/" onClick={() => setMenuAberto(false)}>
            Início
          </Link>

          <Link to="/menu" onClick={() => setMenuAberto(false)}>
            Cardápio
          </Link>

          <Link to="/sobre" onClick={() => setMenuAberto(false)}>
            Sobre
          </Link>

          <Link to="/contatos" onClick={() => setMenuAberto(false)}>
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
}