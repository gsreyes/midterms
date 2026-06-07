import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const navLinks = [
  { name: 'Home', path: '/#home' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Contact', path: '/#contact' },
  { name: 'Play', path: '/#play' },
]

  return (
    <nav className="sticky top-0 z-50 bg-transparent dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-extrabold text-pink-600 dark:text-pink-400">
            gcsreyes
          </Link>

          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-pink-600 dark:hover:text-pink-400 ${
                  location.pathname === link.path
                    ? 'text-pink-600 dark:text-pink-400'
                    : 'text-white dark:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-transparent text-gray-700 dark:text-white"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          
        </div>
      </div>

      
    </nav>
  )
}

export default Navbar;