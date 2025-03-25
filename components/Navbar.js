// components/Navbar.js
import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 z-40 w-full bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="font-bold text-xl">AI Developer</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-white dark:bg-gray-800"
        >
          <a href="#home" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Home</a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">About</a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Projects</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
