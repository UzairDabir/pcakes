import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 233,  unit: 'kcal', label: 'Energy',              icon: '🔥', color: 'bg-orange-50 border-orange-100',   accent: '#F97316', bar: 58, sub: '975 kJ' },
  { value: 3.9,  unit: 'g',    label: 'Fat',                 icon: '🫒', color: 'bg-blue-50 border-blue-100',       accent: '#3B82F6', bar: 20, sub: 'of which saturates 1.5g' },
  { value: 44.7, unit: 'g',    label: 'Carbohydrate',        icon: '⚡', color: 'bg-yellow-50 border-yellow-100',   accent: '#EAB308', bar: 72, sub: 'of which sugars 21.8g' },
  { value: 2.4,  unit: 'g',    label: 'Fibre',               icon: '🌿', color: 'bg-emerald-50 border-emerald-100', accent: '#10B981', bar: 24, sub: 'supports digestive health' },
  { value: 4.8,  unit: 'g',    label: 'Protein',             icon: '💪', color: 'bg-green/5 border-green/10',       accent: '#4CAF50', bar: 32, sub: 'plant-based source' },
  { value: 0.17, unit: 'g',    label: 'Salt',                icon: '🧂', color: 'bg-gray-50 border-gray-100',       accent: '#6B7280', bar: 8,  sub: 'per 100g serving' },
]

const baseIngredients = [
  { item: 'Vegan Self-Raising Flour', amount: '50g' },
  { item: 'Baking Soda', amount: '0.1 tsp' },
  { item: 'Baking Powder', amount: '0.1 tsp' },
  { item: 'Pea Protein', amount: '4g' },
  { item: 'Salt', amount: 'a pinch' },
  { item: 'Caster Sugar', amount: '16–17g' },
  { item: 'Oat Milk', amount: '45ml' },
  { item: 'Vegan Butter (melted)', amount: '8g' },
  { item: 'Vanilla Essence', amount: '0.5g' },
  { item: 'Aquafaba', amount: '10ml' },
]

function AnimatedNumber({ target, inView }) {
  const [count, setCount] = useState(0)
  const isDecimal = target % 1 !== 0
  useEffect(() => {
    if (!inView) return
    let start = 0
    const steps = 40
    const step = target / steps
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start))
    }, 30)
    return () => clearInterval(timer)
  }, [inView, target])
  return <span>{count}</span>
}

export default function Nutrition() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nutrition" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-green/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Nutrition stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="text-green font-semibold text-sm tracking-widest uppercase">Per 100g</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-black text-gray-900 mt-2 leading-tight">
              Packed With <br /><span className="text-gradient">Goodness</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }} className="text-gray-500 mt-4 leading-relaxed">
              Every P-Cakes serving is nutritionally balanced to fuel your day. High in protein, rich in fibre, and made with only natural plant ingredients.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }} className="mt-8 flex gap-6">
              {[{ label: 'Serving Size', value: '3 pancakes' }, { label: 'Per Pack', value: '6 servings' }].map((item) => (
                <div key={item.label} className="bg-cream rounded-2xl p-4 flex-1 text-center">
                  <div className="font-black text-xl text-gray-900">{item.value}</div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            {stats.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }} whileHover={{ x: 4, scale: 1.01 }}
                className={`rounded-2xl border p-4 flex items-center gap-4 cursor-default ${stat.color}`}>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0">{stat.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700">{stat.label}</span>
                    <span className="text-xl font-black text-gray-900 tabular-nums">
                      <AnimatedNumber target={stat.value} inView={inView} />
                      <span className="text-sm font-medium ml-0.5">{stat.unit}</span>
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">{stat.sub}</div>
                  <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={inView ? { width: `${stat.bar}%` } : {}}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                      style={{ backgroundColor: stat.accent }} className="h-full rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Base Recipe Card */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-cream rounded-3xl p-8 md:p-12 border border-cream-dark">
          <div className="text-center mb-8">
            <span className="text-green font-semibold text-sm tracking-widest uppercase">The Foundation</span>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">Base Recipe</h3>
            <p className="text-gray-500 mt-2 max-w-md mx-auto text-sm">Every P-Cakes flavour starts here. This is the core recipe all three variants are built from.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {baseIngredients.map((ing, i) => (
              <motion.div key={ing.item}
                initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.05 }} whileHover={{ scale: 1.04, y: -2 }}
                className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100 flex flex-col gap-1">
                <div className="text-lg font-black text-green">{ing.amount}</div>
                <div className="text-xs text-gray-600 font-medium leading-snug">{ing.item}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}