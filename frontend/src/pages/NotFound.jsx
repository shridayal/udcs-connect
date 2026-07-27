import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold text-blue-900 mb-4">404</h1>
      <p className="text-gray-600 mb-6">Page not found.</p>
      <Link
        to="/"
        className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound