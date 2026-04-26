'use client'
import { motion } from 'framer-motion'
import { Circle, GitPullRequest, CheckCircle2, Clock, AlertCircle } from 'lucide-react'

const issues = [
  { id: 'LIN-042', title: 'Implement dark mode toggle', status: 'done', priority: 'medium', assignee: 'AK' },
  { id: 'LIN-043', title: 'Fix navbar scroll behavior', status: 'in-progress', priority: 'high', assignee: 'JM' },
  { id: 'LIN-044', title: 'Add keyboard shortcuts', status: 'todo', priority: 'low', assignee: 'SR' },
  { id: 'LIN-045', title: 'Integrate Slack notifications', status: 'in-progress', priority: 'high', assignee: 'AK' },
  { id: 'LIN-046', title: 'Write onboarding docs', status: 'todo', priority: 'medium', assignee: 'JM' },
  { id: 'LIN-047', title: 'Performance audit Q4', status: 'done', priority: 'high', assignee: 'SR' },
]

const statusConfig: Record<string, { icon: any; color: string; label: string }> = {
  done:        { icon: CheckCircle2, color: 'text-emerald-500', label: 'Done' },
  'in-progress': { icon: Clock,       color: 'text-[#5e6ad2]',  label: 'In Progress' },
  todo:        { icon: Circle,        color: 'text-[#6b6b80]',  label: 'Todo' },
}

const priorityConfig: Record<string, { color: string; label: string }> = {
  high:   { color: 'text-red-400',    label: '↑ High' },
  medium: { color: 'text-amber-400',  label: '→ Med' },
  low:    { color: 'text-[#6b6b80]', label: '↓ Low' },
}

const avatarColors: Record<string, string> = {
  AK: 'bg-violet-600',
  JM: 'bg-[#5e6ad2]',
  SR: 'bg-emerald-600',
}

export default function Mockup() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Glow behind mockup */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[700px] h-[400px] bg-[#5e6ad2]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#5e6ad2] mb-4">
            Interface
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Designed for focus,
            built for speed
          </h2>
          <p className="mt-4 text-[#6b6b80] max-w-lg mx-auto text-lg">
            A clean, distraction-free interface that keeps your team in flow state.
          </p>
        </motion.div>

        {/* App mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          {/* Browser chrome */}
          <div className="rounded-2xl overflow-hidden border border-white/10
            shadow-2xl shadow-black/60">

            {/* Browser top bar */}
            <div className="bg-[#111118] border-b border-white/5
              px-4 py-3 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#1a1a25] rounded-md px-4 py-1
                  text-xs text-[#4a4a60] flex items-center gap-2 w-52">
                  <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                  linear.app/team/issues
                </div>
              </div>
              <GitPullRequest className="w-4 h-4 text-[#3a3a50]" />
            </div>

            {/* App layout */}
            <div className="flex bg-[#0d0d14]" style={{ minHeight: '420px' }}>

              {/* Sidebar */}
              <div className="w-52 border-r border-white/5 p-4 flex-shrink-0">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                      <path d="M3 12L12 3l9 9-9 9-9-9z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">Acme Inc</span>
                </div>
                {['My Issues', 'All Issues', 'Projects', 'Cycles', 'Roadmap', 'Views'].map((item, i) => (
                  <div key={item}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md mb-0.5 text-xs cursor-pointer
                      ${i === 1
                        ? 'bg-white/8 text-white font-medium'
                        : 'text-[#4a4a60] hover:text-[#8888a0]'
                      }`}>
                    <div className={`w-1.5 h-1.5 rounded-full
                      ${i === 1 ? 'bg-accent' : 'bg-transparent'}`} />
                    {item}
                  </div>
                ))}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest
                    text-[#3a3a50] px-2 mb-2">Teams</p>
                  {['Engineering', 'Design', 'Growth'].map(t => (
                    <div key={t}
                      className="flex items-center gap-2 px-2 py-1.5 text-xs text-[#4a4a60]
                        hover:text-[#8888a0] cursor-pointer">
                      <div className="w-4 h-4 rounded bg-white/5 flex items-center justify-center
                        text-[9px] text-[#6b6b80] font-bold">
                        {t[0]}
                      </div>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col">

                {/* Toolbar */}
                <div className="flex items-center justify-between px-6 py-3
                  border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-white">All Issues</span>
                    <span className="text-xs bg-white/8 text-[#6b6b80] px-2 py-0.5 rounded-full">
                      {issues.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {['Filter', 'Group', 'Display'].map(btn => (
                      <button key={btn}
                        className="text-xs text-[#4a4a60] hover:text-[#8888a0]
                          px-2.5 py-1 rounded border border-white/5
                          hover:border-white/10 transition-colors">
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Issue list */}
                <div className="flex-1">
                  {/* Column headers */}
                  <div className="grid grid-cols-12 px-6 py-2 text-[10px] font-semibold
                    uppercase tracking-widest text-[#3a3a50] border-b border-white/5">
                    <div className="col-span-1">Status</div>
                    <div className="col-span-1">ID</div>
                    <div className="col-span-6">Title</div>
                    <div className="col-span-2">Priority</div>
                    <div className="col-span-2 text-right">Assignee</div>
                  </div>

                  {issues.map((issue, i) => {
                    const status = statusConfig[issue.status]
                    const priority = priorityConfig[issue.priority]
                    const StatusIcon = status.icon
                    return (
                      <motion.div
                        key={issue.id}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className="grid grid-cols-12 items-center px-6 py-3
                          border-b border-white/[0.04] hover:bg-white/[0.02]
                          cursor-pointer group transition-colors"
                      >
                        <div className="col-span-1">
                          <StatusIcon className={`w-3.5 h-3.5 ${status.color}`} />
                        </div>
                        <div className="col-span-1 text-xs text-[#3a3a50] font-mono">
                          {issue.id}
                        </div>
                        <div className="col-span-6 text-sm text-[#a0a0b8]
                          group-hover:text-white transition-colors truncate pr-4">
                          {issue.title}
                        </div>
                        <div className={`col-span-2 text-xs font-medium ${priority.color}`}>
                          {priority.label}
                        </div>
                        <div className="col-span-2 flex justify-end">
                          <div className={`w-6 h-6 rounded-full ${avatarColors[issue.assignee]}
                            flex items-center justify-center text-[10px] font-bold text-white`}>
                            {issue.assignee}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24
            bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none rounded-b-2xl" />
        </motion.div>
      </div>
    </section>
  )
}