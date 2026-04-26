'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M3 12L12 3l9 9-9 9-9-9z" />
            </svg>
          </div>
          <span className="font-semibold text-white text-sm tracking-tight">Linear</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-[#6b6b80]">
          {['Features', 'Changelog', 'Pricing', 'Docs'].map(link => (
            <a key={link} href="#"
              className="hover:text-white transition-colors duration-200">
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-[#6b6b80] hover:text-white transition-colors hidden md:block">
            Log in
          </a>
          <a href="#"
            className="text-sm bg-white text-black px-4 py-1.5 rounded-md font-medium hover:bg-white/90 transition-colors">
            Sign up
          </a>
        </div>
      </div>
    </motion.nav>
  )
}