'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const footerLinks = {
  Product:  ['Features', 'Changelog', 'Pricing', 'Roadmap'],
  Company:  ['About', 'Blog', 'Careers', 'Press'],
  Resources:['Docs', 'API', 'Status', 'Security'],
  Legal:    ['Privacy', 'Terms', 'Cookies'],
}

export default function CTA() {
  return (
    <>
      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2
            w-[600px] h-[300px] bg-[#5e6ad2]/15 blur-[100px]" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative top line */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold text-white
              tracking-tight leading-tight mb-6">
              Start building with
              <br />
              <span className="bg-gradient-to-r from-[#5e6ad2] via-[#8b8fd8] to-[#a78bfa]
                bg-clip-text text-transparent">
                your team today
              </span>
            </h2>
            <p className="text-[#6b6b80] text-lg mb-10 max-w-md mx-auto">
              Join 25,000+ teams already using Linear to ship products faster.
              Free for up to 5 members.
            </p>

            <div className="flex items-center justify-center gap-3">
              <a href="#"
                className="flex items-center gap-2 bg-accent hover:bg-accent/90
                  text-white font-medium px-6 py-3 rounded-lg transition-all
                  hover:shadow-lg hover:shadow-accent/20 text-sm">
                Get started for free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#"
                className="text-sm text-[#6b6b80] hover:text-white transition-colors
                  px-6 py-3 rounded-lg border border-white/10 hover:border-white/20">
                Talk to sales
              </a>
            </div>

            <p className="mt-6 text-xs text-[#3a3a50]">
              No credit card required · Cancel anytime · SOC 2 certified
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">

            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                    <path d="M3 12L12 3l9 9-9 9-9-9z" />
                  </svg>
                </div>
                <span className="font-semibold text-white text-sm">Linear</span>
              </div>
              <p className="text-xs text-[#3a3a50] leading-relaxed max-w-[180px]">
                The issue tracking tool you'll enjoy using.
              </p>
              <div className="flex items-center gap-3 mt-5">
  <a href="#" className="text-[#3a3a50] hover:text-white transition-colors">
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  </a>
  <a href="#" className="text-[#3a3a50] hover:text-white transition-colors">
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
    </svg>
  </a>
</div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="text-xs font-semibold uppercase tracking-widest
                  text-[#3a3a50] mb-4">
                  {category}
                </p>
                <ul className="space-y-2.5">
                  {links.map(link => (
                    <li key={link}>
                      <a href="#"
                        className="text-xs text-[#4a4a60] hover:text-white
                          transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row
            items-center justify-between gap-4">
            <p className="text-xs text-[#3a3a50]">
              © 2024 Linear Incorporated. All rights reserved.
            </p>
            <p className="text-xs text-[#3a3a50] flex items-center gap-1">
              Built with Next.js & Tailwind CSS
              <span className="text-accent">♥</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}