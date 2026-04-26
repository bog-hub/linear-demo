'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] rounded-full
          bg-[#5e6ad2]/15 blur-[120px]" />
        <div className="absolute top-1/2 left-1/3
          w-[300px] h-[300px] rounded-full
          bg-[#7c3aed]/10 blur-[100px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 text-xs font-medium
          px-3 py-1.5 rounded-full
          bg-white/5 border border-white/10 text-[#a0a0b8]">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Linear 2024 — Now with AI-powered planning
          <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-5xl md:text-7xl font-semibold tracking-tight text-white max-w-3xl leading-[1.08]"
      >
        Built for modern{' '}
        <span className="bg-gradient-to-r from-[#5e6ad2] via-[#8b8fd8] to-[#a78bfa]
          bg-clip-text text-transparent">
          software teams
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-lg text-[#6b6b80] max-w-xl leading-relaxed"
      >
        Linear streamlines issues, projects, and roadmaps.
        The tool of choice for high-performance teams.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 flex items-center gap-3"
      >
        <a href="#"
          className="flex items-center gap-2 bg-accent hover:bg-accent/90
            text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
          Get started free
          <ArrowRight className="w-4 h-4" />
        </a>
        <a href="#"
          className="text-sm text-[#6b6b80] hover:text-white transition-colors
            px-5 py-2.5 rounded-lg border border-white/10 hover:border-white/20">
          Watch demo
        </a>
      </motion.div>

      {/* Social proof */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-xs text-[#4a4a60]"
      >
        Trusted by 25,000+ teams worldwide · No credit card required
      </motion.p>
    </section>
  )
}