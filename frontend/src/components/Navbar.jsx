import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          UDCS Connect
        </Link>

        <div className="flex gap-6 text-sm md:text-base">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/faculty" className="hover:text-yellow-300">Faculty</Link>
          <Link to="/programs" className="hover:text-yellow-300">Programs</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          <Link to="/login" className="hover:text-yellow-300">Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar