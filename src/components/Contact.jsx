import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaEnvelope, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green/8 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-green font-semibold text-sm tracking-widest uppercase"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-gray-900 mt-2 leading-tight"
            >
              We'd Love To <br />
              <span className="text-gradient">Hear From You</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-gray-500 mt-4 leading-relaxed"
            >
              Questions about our products, stocking enquiries, or just want to share how much you love P-Cakes? Drop us a message!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center">
                  <FaEnvelope className="text-green" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Email Us</div>
                  <div className="text-sm text-gray-500">hello@pcakes.com</div>
                </div>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-8 flex gap-3"
            >
              {[
                { icon: FaInstagram, label: 'Instagram', color: 'hover:bg-pink-500' },
                { icon: FaTwitter, label: 'Twitter', color: 'hover:bg-blue-400' },
                { icon: FaFacebook, label: 'Facebook', color: 'hover:bg-blue-600' },
              ].map(({ icon: Icon, label, color }) => (
                <motion.button
                  key={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200 ${color}`}
                  aria-label={label}
                >
                  <Icon />
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-10 shadow-md border border-gray-100 text-center flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center text-4xl">
                  ✅
                </div>
                <h3 className="text-2xl font-black text-gray-900">Message Sent!</h3>
                <p className="text-gray-500">We'll get back to you within 24 hours. Thanks for reaching out!</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                  className="mt-4 text-sm text-green font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 flex flex-col gap-5"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-gray-900 border border-cream-dark focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-gray-900 border border-cream-dark focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us anything..."
                    className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-gray-900 border border-cream-dark focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-green text-white font-bold py-4 rounded-xl hover:bg-green-dark transition-colors shadow-lg hover:shadow-green/30 text-base"
                >
                  Send Message ✉️
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
