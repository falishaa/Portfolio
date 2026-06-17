import { motion } from 'framer-motion'


export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-8 md:px-20 py-32 text-center"
      style={{ backgroundColor: 'var(--deep-space)' }}
    >
      {/* Rose glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(232,84,122,0.05) 0%, transparent 70%)',
        }}
      />

      <motion.p
        className="font-mono-accent text-xs tracking-widest mb-6"
        style={{ color: 'var(--cipher-teal)' }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        // GET IN TOUCH
      </motion.p>

      <motion.h2
        className="font-display leading-tight mb-8"
        style={{
          color: 'var(--lunar-white)',
          fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Let's <span style={{ color: 'var(--signal-rose)' }}>Connect.</span>
      </motion.h2>

      <motion.p
        className="max-w-md text-sm md:text-base leading-relaxed mb-16"
        style={{ color: 'var(--lunar-white)', opacity: 0.65 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        For bookings, collaborations, or just to say hello.
      </motion.p>

      <motion.form
        action="https://formspree.io/f/xaqzzped"
        method="POST"
        className="w-full max-w-xl flex flex-col gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="px-4 py-4 bg-transparent border outline-none"
          style={{
            borderColor: 'rgba(240, 238, 245, 0.15)',
            color: 'var(--lunar-white)',
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="px-4 py-4 bg-transparent border outline-none"
          style={{
            borderColor: 'rgba(240, 238, 245, 0.15)',
            color: 'var(--lunar-white)',
          }}
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          rows="6"
          className="px-4 py-4 bg-transparent border outline-none resize-none"
          style={{
            borderColor: 'rgba(240, 238, 245, 0.15)',
            color: 'var(--lunar-white)',
          }}
        />

        <button
          type="submit"
          className="font-mono-accent text-xs tracking-widest px-6 py-4 border transition-all duration-300 cursor-pointer"
          style={{
            borderColor: 'var(--signal-rose)',
            color: 'var(--signal-rose)',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--signal-rose)'
            e.target.style.color = 'var(--deep-space)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent'
            e.target.style.color = 'var(--signal-rose)'
          }}
        >
          SEND MESSAGE
        </button>
      </motion.form>

      {/* Footer */}
      <motion.p
        className="font-mono-accent text-xs tracking-widest mt-20 opacity-30"
        style={{ color: 'var(--lunar-white)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        © 2026 FALISHA
      </motion.p>
    </section>
  )
}