import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Classic Vegan Pancake',
    tagline: 'The Original',
    description: 'Our signature golden stack — light, fluffy and irresistibly good. Built on our tried-and-tested base recipe with oat milk and pea protein.',
    color: 'from-amber-100 to-yellow-50',
    accent: '#4CAF50',
    badge: '🌟 Bestseller',
    image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=600&q=85',
    baseRecipe: [
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
    ],
    macros: { cal: 220, protein: '8g', carbs: '34g' },
  },
  {
    id: 2,
    name: 'Savoury Gochujang',
    tagline: 'Bold & Spicy',
    description: 'Fiery, flavour-packed and totally plant-based. Built on the classic base with a Korean-inspired gochujang salsa and fresh vegetables.',
    color: 'from-red-50 to-orange-50',
    accent: '#E53E3E',
    image: '/GochujangPancakes.webp',
    baseRecipe: [
      { item: 'Red Onion (finely chopped)', amount: '50g' },
      { item: 'Garlic', amount: '2 cloves' },
      { item: 'Bell Peppers', amount: '15g each' },
      { item: 'Jalapeños', amount: '20g' },
      { item: 'Olives', amount: '20g' },
      { item: 'Green Chillies', amount: '1' },
      { item: 'Tomato Paste', amount: '1 tsp' },
      { item: 'Ketchup', amount: '20ml' },
      { item: 'Lemon Juice', amount: '15ml' },
      { item: 'Gochujang', amount: '5g' },
      { item: 'Sweet Corn', amount: '20g' },
      { item: 'Parsley', amount: '3g' },
    ],
    macros: { cal: 195, protein: '9g', carbs: '28g' },
  },
  {
    id: 3,
    name: 'Beetroot Fruit Crumb',
    tagline: 'Sweet & Vibrant',
    description: 'Naturally vivid and bursting with fruit. The classic base infused with beetroot powder, topped with a warm mixed fruit crumb.',
    color: 'from-pink-50 to-purple-50',
    accent: '#9C27B0',
    badge: '🍓 Fan Favourite',
    image: '/betroot.jpg',
    baseRecipe: [
      { item: 'Beetroot Powder', amount: '10g' },
      { item: 'Carrots (finely chopped)', amount: '3g' },
      { item: 'Mushrooms (finely chopped)', amount: '3g' },
      { item: 'Chives (finely chopped)', amount: '2g' },
      { item: 'Pineapple (chopped)', amount: '10g' },
      { item: 'Pomegranate Seeds', amount: '10g' },
      { item: 'Apple (chopped)', amount: '5g' },
      { item: 'Strawberry / Strawberry Purée', amount: '20ml' },
      { item: 'Honey', amount: '20ml' },
      { item: 'Cinnamon Powder', amount: '2 tsp' },
      { item: 'Nutmeg Powder', amount: '1 tsp' },
      { item: 'Gluten-Free Breadcrumbs', amount: '20g' },
    ],
    macros: { cal: 210, protein: '7g', carbs: '36g' },
  },
]

function ProductCard({ product, index, inView }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="perspective-1000 h-[600px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-3xl overflow-hidden shadow-md flex flex-col" style={{ backfaceVisibility: 'hidden' }}>
          <div className={`relative h-56 bg-gradient-to-br ${product.color} overflow-hidden flex-shrink-0`}>
            <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full shadow-md">{product.badge}</div>
            <div className="absolute bottom-4 right-4 text-white text-xs font-bold uppercase tracking-widest bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">{product.tagline}</div>
          </div>

          <div className="p-6 flex flex-col gap-4 flex-1">
            <div>
              <h3 className="text-xl font-black text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">{product.description}</p>
            </div>

            <div className="flex gap-4 pt-2 border-t border-gray-100 mt-auto">
              <div className="flex flex-col items-center">
                <span className="text-lg font-black text-gray-900">{product.macros.cal}</span>
                <span className="text-xs text-gray-400">kcal</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-black text-gray-900">{product.macros.protein}</span>
                <span className="text-xs text-gray-400">protein</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-black text-gray-900">{product.macros.carbs}</span>
                <span className="text-xs text-gray-400">carbs</span>
              </div>
              <div className="ml-auto flex items-center gap-1 text-xs text-gray-400 font-medium">
                Tap for recipe →
              </div>
            </div>
          </div>
        </div>

        {/* BACK — Recipe */}
        <div
          className="absolute inset-0 bg-white rounded-3xl shadow-md flex flex-col overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-gray-100 flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${product.accent}15, ${product.accent}05)` }}>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Base Recipe</p>
              <h3 className="text-lg font-black text-gray-900 mt-0.5">{product.name}</h3>
            </div>
            <div className="text-3xl">🥞</div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="flex flex-col gap-2">
              {product.baseRecipe.map((ing) => (
                <div key={ing.item} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                  <span className="text-sm text-gray-700 font-medium">{ing.item}</span>
                  <span className="text-sm font-bold text-gray-900 bg-cream px-2 py-0.5 rounded-lg flex-shrink-0 ml-2">{ing.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 py-4 border-t border-gray-100 flex-shrink-0">
            <p className="text-xs text-gray-400 text-center">Tap to flip back</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="products" className="section-padding bg-cream relative">
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(#4CAF50 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div ref={ref} className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-green font-semibold text-sm tracking-widest uppercase">The Range</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black text-gray-900 mt-2">
            Our <span className="text-gradient">Flavours</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }} className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
            Three distinct flavours, all built on our plant-based base recipe. <span className="font-semibold text-gray-700">Tap any card to reveal the full recipe.</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} inView={inView} />)}
        </div>
      </div>
    </section>
  )
}
