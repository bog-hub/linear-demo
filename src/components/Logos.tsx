'use client'
import { motion } from 'framer-motion'

const companies = ['Vercel', 'Notion', 'Loom', 'Raycast', 'Retool', 'Mercury', 'Pitch', 'Arc']

export default function Logos() {
  return (
    <section className="py-16 px-6 border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-medium tracking-widest uppercase
            text-[#3a3a50] mb-10"
        >
          Trusted by teams at
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="text-[#3a3a50] font-semibold text-lg tracking-tight
                hover:text-[#6b6b80] transition-colors cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}