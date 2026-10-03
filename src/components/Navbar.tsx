export default function Navbar() {
  return (
    <div className="px-6 md:px-12 lg:px-16 pt-6">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        <span className="text-2xl font-semibold tracking-tight text-white">
          VEX
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-white">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Story
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Investing
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Building
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Advisory
          </a>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
          Start a Chat
        </button>
      </nav>
    </div>
  )
}
