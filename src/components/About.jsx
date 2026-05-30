import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  { icon: '🥣', label: 'Oat Milk', desc: 'Creamy, sustainable base — 45ml per serving' },
  { icon: '💪', label: 'Pea Protein', desc: '4g high-quality plant protein per batch' },
  { icon: '🧈', label: 'Vegan Butter', desc: 'Melted, dairy-free richness' },
  { icon: '♻️', label: 'Aquafaba', desc: 'Chickpea water — nature\'s egg replacer' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cream to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div initial={{ opacity: 0, x: -60 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }} className="relative">
          <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl">
            <img src="/pancake.jpeg" alt="P-Cakes pancakes" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-green/30 to-transparent" />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center text-2xl">🌱</div>
              <div>
                <div className="font-black text-2xl text-gray-900">100%</div>
                <div className="text-sm text-gray-500 font-medium">Vegan Certified</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="absolute -top-6 -left-6 bg-green rounded-2xl shadow-xl p-4 text-white">
            <div className="text-3xl mb-1">🥞</div>
            <div className="text-xs font-bold uppercase tracking-wide">Premium</div>
            <div className="text-xs opacity-80">Pancakes</div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div initial={{ opacity: 0, x: 60 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }} className="flex flex-col gap-8">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }} className="text-green font-semibold text-sm tracking-widest uppercase">
              Our Story
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }} className="text-4xl md:text-5xl font-black text-gray-900 mt-2 leading-tight">
              Why <span className="text-gradient">P-Cakes?</span>
            </motion.h2>
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }} className="text-lg text-gray-600 leading-relaxed font-light">
            P-Cakes is a vegan pancake product made using oat milk, pea protein, self-raising flour and natural ingredients. It provides a healthy and sustainable alternative to traditional pancakes — without compromising on taste or texture.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }} className="text-base text-gray-500 leading-relaxed">
            Every bite is packed with plant-powered goodness. We use aquafaba as a natural egg replacer, keeping every ingredient 100% vegan. No compromise. No artificial additives. Ever.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }} className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div key={f.label}
                initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.55 + i * 0.08 }} whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 bg-cream rounded-2xl p-4 border border-cream-dark">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{f.label}</div>
                  <div className="text-xs text-gray-500">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
