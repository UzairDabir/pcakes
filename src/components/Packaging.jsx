import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const packagingFeatures = [
  {
    icon: '♻️',
    title: 'Recyclable Packaging',
    desc: 'All outer packaging is made from recycled cardboard and is fully recyclable at home.',
    tag: 'Eco',
  },
  {
    icon: '🔄',
    title: 'Reusable Containers',
    desc: 'Our inner trays are designed to be repurposed — from food storage to plant pots.',
    tag: 'Reuse',
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly Materials',
    desc: 'We use plant-based inks, compostable films, and sustainably sourced paper throughout.',
    tag: 'Green',
  },
  {
    icon: '🚫',
    title: 'Reduced Plastic Waste',
    desc: 'We have eliminated single-use plastics from our packaging entirely since 2023.',
    tag: '0 Plastic',
  },
]

export default function Packaging() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-green/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-green font-semibold text-sm tracking-widest uppercase"
            >
              Packaging
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-gray-900 mt-2 leading-tight"
            >
              Reuse. <span className="text-green">Recycle.</span> <br />
              Repeat.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-gray-500 mt-4 leading-relaxed"
            >
              We believe responsible packaging is non-negotiable. From the moment our product leaves our facility to when it arrives at your door, every material is chosen with the planet in mind.
            </motion.p>

            {/* Stat badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {['100% Recyclable', 'Zero Single-Use Plastic', 'FSC Certified Paper', 'Carbon Neutral Shipping'].map((badge) => (
                <span key={badge} className="bg-green/10 text-green text-xs font-bold px-4 py-2 rounded-full border border-green/20">
                  ✓ {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {packagingFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-3 border border-gray-50 cursor-default"
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{feat.icon}</span>
                  <span className="text-xs font-bold bg-green/10 text-green px-2 py-1 rounded-full">{feat.tag}</span>
                </div>
                <h3 className="font-black text-gray-900 text-sm leading-snug">{feat.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
