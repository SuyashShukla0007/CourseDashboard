import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="px-4 py-16 mx-auto text-center lg:px-8 max-w-2xl">
        <div className="mb-8 animate-bounce">
          <img
            src="/quyl.png"
            alt="Company Logo"
            width={150}
            height={150}
            className="mx-auto drop-shadow-md"
          />
        </div>
        <h1 className="mb-4 text-8xl font-extrabold text-blue-600 animate-pulse">404</h1>
        <p className="mb-4 text-2xl font-semibold text-gray-800">Oops! Page not found</p>
        <p className="mb-8 text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}

