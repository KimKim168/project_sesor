'use client'

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const BlogHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#", text: "Home" },
    { href: "#", text: "Features" },
    { href: "#", text: "FAQ" },
    { href: "#", text: "Pricing" },
    { href: "#", text: "News" },
    { href: "#", text: "Contact" },
  ]

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="sticky py-4 top-0 z-50 w-full bg-gradient-to-r from-purple-600 to-indigo-500 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center space-x-2">
                 <img  className="w-20 h-20" src={`/assets/demo-images/sesor.jpeg`}/>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-sm font-medium text-white hover:text-emerald-300 transition-colors duration-300"
                >
                  {link.text}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                aria-label="Toggle menu"
              >
                <Menu
                  className={`h-6 w-6 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm z-50 bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-lg text-white">
                TechBlog
              </span>
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white rounded-md hover:bg-gray-800"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-grow p-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default BlogHeader
