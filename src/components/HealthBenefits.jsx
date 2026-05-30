import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaLeaf, FaDumbbell, FaBan, FaSeedling, FaHeart, FaRecycle } from 'react-icons/fa'

const benefits = [
  {
    icon: FaDumbbell,
    title: 'Plant-Based Protein',
    desc: 'Made with pea protein and aquafaba — supporting muscle maintenance and a balanced diet, naturally lower in saturated fat than animal proteins.',
    color: 'bg-green/10',
    iconColor: 'text-green',
  },
  {
    icon: FaSeedling,
    title: 'Source of Dietary Fibre',
    desc: 'Beetroot powder, fruit ingredients, oats and breadcrumbs all contribute dietary fibre, supporting normal digestive health and promoting satiety.',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
  },
  {
    icon: FaLeaf,
    title: 'Naturally Colourful',
    desc: 'Beetroot is rich in betalains — the plant compounds behind its vibrant colour. Combined with real fruits, every serving is packed with natural phytonutrients.',
    color: 'bg-pink-50',
    iconColor: 'text-pink-500',
  },
  {
    icon: FaHeart,
    title: 'Fruit-Inspired Sweetness',
    desc: 'Pineapple, apple, pomegranate and strawberry provide natural flavours and naturally occurring sugars for a more complex taste — no artificial sweeteners.',
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    icon: FaBan,
    title: 'Dairy Free',
    desc: 'Uses oat milk and vegan butter alternatives instead of dairy — suitable for those avoiding dairy ingredients without compromising on taste.',
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
  {
    icon: FaRecycle,
    title: 'Made with Oats',
    desc: 'Oats contribute complex carbohydrates and fibre, helping provide sustained energy throughout the day. Great for breakfast, snacking or dessert.',
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
]

export default function HealthBenefits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-green font-semibold text-sm tracking-widest uppercase"
          >
            Health & Wellness
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 mt-2"
          >
            Built For Your <span className="text-gradient">Wellbeing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 mt-4 max-w-xl mx-auto"
          >
            Vibrant. Nourishing. Plant-Powered. Every ingredient is chosen to deliver flavour, nutrition and a more plant-forward lifestyle.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-4 border border-gray-50 group cursor-default"
              >
                <div className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`text-2xl ${benefit.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{benefit.desc}</p>
                </div>
                <div className="mt-auto">
                  <div className="h-1 w-12 bg-gradient-to-r from-green to-green-light rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
