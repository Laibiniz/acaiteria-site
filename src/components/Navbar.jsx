import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between p-6 bg-black/70 backdrop-blur-md fixed top-0 left-0 border-b border-zinc-800">

      <h1 className="text-3xl font-bold text-purple-500">
        Açaí Prime
      </h1>

     <nav className="flex gap-6 text-white">

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

    </header>
  )
}