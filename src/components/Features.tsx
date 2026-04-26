'use client'
import { motion } from 'framer-motion'
import {
  Zap, GitBranch, BarChart2, Users,
  Shield, Layers
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Blazing fast',
    description: 'Built for speed. Linear is optimized to be the fastest issue tracker — every interaction under 50ms.',
    gradient: 'from-[#5e6ad2] to-[#7c3aed]',
  },
  {
    icon: GitBranch,
    title: 'Git integration',
    description: 'Sync branches, commits and PRs with your issues automatically. Works with GitHub, GitLab and Bitbucket.',
    gradient: 'from-[#059669] to-[#0891b2]',
  },
  {
    icon: BarChart2,
    title: 'Roadmaps',
    description: 'Plan and communicate your product strategy visually. Keep the entire company aligned on priorities.',
    gradient: 'from-[#d97706] to-[#dc2626]',
  },
  {
    icon: Users,
    title: 'Team workflows',
    description: 'Customizable workflows for every team. Engineering, design, and support — all in one place.',
    gradient: 'from-[#7c3aed] to-[#db2777]',
  },
  {
    icon: Shield,
    title: 'Enterprise ready',
    description: 'SOC 2 Type II certified. SSO, SAML, audit logs, and fine-grained permissions out of the box.',
    gradient: 'from-[#0891b2] to-[#059669]',
  },
  {
    icon: Layers,
    title: 'Project hierarchy',
    description: 'Organize work with teams, projects, and cycles. A clear structure that scales with your company.',
    gradient: 'from-[#dc2626] to-[#d97706]',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Features() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2
        w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase
            text-[#5e6ad2] mb-4">
            Features
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white
            tracking-tight max-w-2xl mx-auto leading-tight">
            Everything your team needs to ship faster
          </h2>
          <p className="mt-4 text-[#6b6b80] max-w-lg mx-auto text-lg">
            Linear brings together all the tools modern engineering teams need,
            without the bloat.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px
          bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="group relative bg-[#0a0a0f] p-8
                  hover:bg-[#111118] transition-colors duration-300"
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br
                  ${feature.gradient} p-2.5 mb-5`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold mb-2 text-[15px]">
                  {feature.title}
                </h3>
                <p className="text-[#6b6b80] text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 pointer-events-none
                  bg-gradient-to-br ${feature.gradient} opacity-0
                  group-hover:opacity-[0.03] rounded-none`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}