'use client'
import { useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1) // Remove the '#'
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-gray-900 shadow-sm relative z-50 sticky top-0"> {/* Made navbar sticky */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">AM</span>
          </div>

          {/* Nav Links */}
          <div 
            className={`
              absolute top-16 left-0 right-0 bg-gray-900 sm:static
              sm:flex sm:items-center sm:opacity-100 sm:translate-y-0
              transform transition-all duration-300 ease-in-out
              shadow-lg sm:shadow-none
              ${isMobileMenuOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-2 pointer-events-none sm:pointer-events-auto'
              }
            `}
          >
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`
                  block px-3 py-2 rounded-md text-white
                  transition-all duration-300 ease-in-out
                  hover:text-indigo-400 hover:bg-gray-800
                  transform sm:hover:scale-105 cursor-pointer
                  ${isMobileMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0 sm:translate-y-0 sm:opacity-100'
                  }
                  ${i > 0 ? 'sm:ml-2' : ''}
                `}
                style={{
                  transitionDelay: `${isMobileMenuOpen ? i * 100 : 0}ms`
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md 
                         text-white hover:text-indigo-400 hover:bg-gray-800
                         transition-colors duration-200"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-200 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-90' : ''
                }`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}