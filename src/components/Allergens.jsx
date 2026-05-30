import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa'

export default function Allergens() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-white relative">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-amber-500 font-semibold text-sm tracking-widest uppercase">Important Information</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-black text-gray-900 mt-2">
            Allergen <span className="text-amber-500">Information</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-gray-500 mt-4">Your safety is our priority. Please read carefully before consuming.</motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contains */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }} className="bg-red-50 border-2 border-red-200 rounded-3xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                <FaExclamationTriangle className="text-white text-sm" />
              </div>
              <h3 className="font-black text-gray-900 text-lg">Contains</h3>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-red-100">
                <span className="text-2xl">🌾</span>
                <div>
                  <div className="font-bold text-gray-900">Gluten</div>
                  <div className="text-xs text-gray-500">Present in vegan self-raising flour</div>
                </div>
                <span className="ml-auto text-xs font-bold text-red-500 bg-red-50 border border-red-200 px-2 py-1 rounded-full flex-shrink-0">ALLERGEN</span>
              </div>
               <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-red-100">
              <span className="text-2xl">🥣</span>
              <div>
                <div className="font-bold text-gray-900">Oats</div>
                <div className="text-xs text-gray-500">
                  Contains oat milk and oat-derived ingredients
                </div>
              </div>
              <span className="ml-auto text-xs font-bold text-red-500 bg-red-50 border border-red-200 px-2 py-1 rounded-full flex-shrink-0">
                ALLERGEN
              </span>
            </div>
            </div>
          </motion.div>

          {/* May contain */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }} className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <FaInfoCircle className="text-white text-sm" />
              </div>
              <h3 className="font-black text-gray-900 text-lg">May Contain</h3>
            </div>
            <div className="flex flex-col gap-3">
              {[
              {
                icon: '🫘',
                name: 'Soy Traces',
                note: 'Cross-contamination risk from shared equipment'
              },
              {
                icon: '🥛',
                name: 'Dairy',
                note: 'Manufactured on shared equipment used for dairy products'
              },
              {
                icon: '🥚',
                name: 'Eggs',
                note: 'Produced in a facility that also processes eggs'
              },
              {
                icon: '🌰',
                name: 'Sesame',
                note: 'Cross-contamination risk from shared lines'
              }
            ].map((item) => (
                <div key={item.name} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-amber-100">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-bold text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.note}</div>
                  </div>
                  <span className="ml-auto text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-1 rounded-full flex-shrink-0">TRACE</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }} className="mt-6 bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center">
          <p className="text-sm text-gray-500 leading-relaxed">
            <span className="font-semibold text-gray-700">Manufactured in a facility</span> that also handles nuts, sesame and other allergens.
            If you have a severe allergy, please consult your healthcare provider before consuming P-Cakes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
