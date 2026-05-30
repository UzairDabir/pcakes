import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    icon: '🌱',
    title: 'Powered by Plants',
    desc: 'Our pancakes use predominantly plant-based ingredients — oat milk, pea protein, aquafaba, fruits and beetroot — reducing reliance on resource-intensive animal agriculture.',
    value: '100%',
    metric: 'plant-based base',
  },
  {
    icon: '🫛',
    title: 'Pea Protein',
    desc: 'Peas require low inputs of water and fertilizer, and naturally fix nitrogen in the soil — reducing the need for synthetic fertilizers compared to other protein crops.',
    value: 'Low',
    metric: 'water & fertilizer',
  },
  {
    icon: '🥛',
    title: 'Oat Milk over Dairy',
    desc: 'Oats generally require less land and water than conventional dairy production, making oat milk a more environmentally conscious ingredient choice.',
    value: 'Less',
    metric: 'land & water use',
  },
  {
    icon: '♻️',
    title: 'Making Use of Aquafaba',
    desc: 'Aquafaba — the liquid from cooked chickpeas — transforms a by-product into a functional egg alternative, reducing food waste through innovative ingredient use.',
    value: '0',
    metric: 'waste by-product',
  },
]

export default function Sustainability() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sustainability" className="section-padding relative overflow-hidden">
      {/* Dark green background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-dark to-gray-900" />
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-green-light font-semibold text-sm tracking-widest uppercase"
          >
            Our Planet
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mt-2 leading-tight"
          >
            Better For You. <br />
            <span className="text-green-light">Better For The Planet.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-4 max-w-xl mx-auto"
          >
            Sustainability isn't a buzzword for us — it's baked into every decision we make.
          </motion.p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex flex-col gap-4 hover:bg-white/10 hover:border-green/30 transition-all duration-300 cursor-default"
            >
              <div className="text-4xl">{pillar.icon}</div>
              <div>
                <div className="text-3xl font-black text-green-light">{pillar.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">{pillar.metric}</div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">{pillar.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-green/20 border border-green/30 rounded-3xl p-8 text-center"
        >
          <div className="text-5xl mb-4">🌿</div>
          <h3 className="text-2xl font-black text-white mb-2">Small Changes, Bigger Impact</h3>
          <p className="text-gray-400 max-w-lg mx-auto">
            Every plant-based choice can contribute to a reduction in greenhouse gas emissions, land use and water consumption compared with many conventional animal-based alternatives. Because great-tasting food can also support a more sustainable future.
          </p>
        </motion.div>
      </div>
    </section>
  )
}