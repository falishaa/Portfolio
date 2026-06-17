import { motion } from 'framer-motion'
import militaryPhoto from '../assets/Torch1.jpg'
import fashionPhoto from '../assets/blkdress3.jpg'

const FACTS = [
  { label: 'Branch', value: 'United States Space Force' },
  { label: 'Role', value: 'Defensive Cyber Operator' },
  { label: 'Interests', value: 'Fitness, Coding, Music Festivals' },
  { label: 'Based', value: 'Florida, USA' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-8 md:px-20 py-32"
      style={{ backgroundColor: 'var(--deep-space)' }}
    >
      {/* Saffron accent line on the left edge */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ backgroundColor: 'var(--saffron-pulse)', opacity: 0.3 }}
      />

      <div className="max-w-7xl w-full">

        {/* Section label + Duality heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-mono-accent text-xs tracking-widest mb-4"
            style={{ color: 'var(--cipher-teal)' }}
          >
            // ABOUT
          </p>
          <h2
            className="font-display leading-tight"
            style={{
              color: 'var(--lunar-white)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            }}
          >
            <span style={{ color: 'var(--lunar-white)' }}>Duality.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1fr] gap-10 md:gap-8 items-center">

          {/* Left — military photo */}
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="relative w-full aspect-[2/3] overflow-hidden"
              style={{ border: '1px solid rgba(45, 255, 212, 0.2)' }}
            >
              <img
                src={militaryPhoto}
                alt="Falisha in uniform"
                className="w-full h-full object-cover"
              />

              <div
                className="absolute bottom-0 left-0 w-16 h-16"
                style={{
                  borderBottom: '2px solid var(--cipher-teal)',
                  borderLeft: '2px solid var(--cipher-teal)',
                }}
              />
            </div>
          </motion.div>

          {/* Middle — text */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h3
              className="font-display leading-tight mb-8 text-center md:text-left"
              style={{
                color: 'var(--lunar-white)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              Operator.<br />
              <span style={{ color: 'var(--signal-rose)' }}>Creator.</span><br />
              Developer.
            </h3>

            <p
              className="leading-relaxed text-sm md:text-base"
              style={{ color: 'var(--lunar-white)', opacity: 0.75 }}
            >
              I'm a Bengali-American cyber operator serving in the United States Space Force,
              defending the world's satellites, while modeling and creating content.
            </p>

            <p
              className="leading-relaxed mb-12 mt-6 text-sm md:text-base"
              style={{ color: 'var(--lunar-white)', opacity: 0.75 }}
            >
              I break barriers and refuse to exist in just one world.
            </p>

            <p
              className="leading-relaxed mb-16 text-sm md:text-base"
              style={{ color: 'var(--lunar-white)', opacity: 0.75 }}
            >
              I build full-stack projects, create content around beauty, fashion, and wellness,
              and bring both precision and artistry to everything I do.
            </p>

            {/* Facts grid */}
            <div className="grid grid-cols-2 gap-4">
              {FACTS.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <p
                    className="font-mono-accent text-xs tracking-widest mb-1"
                    style={{ color: 'var(--saffron-pulse)' }}
                  >
                    {fact.label.toUpperCase()}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--lunar-white)', opacity: 0.85 }}
                  >
                    {fact.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — fashion photo */}
          <motion.div
            className="relative order-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div
              className="relative w-full aspect-[2/3] overflow-hidden"
              style={{ border: '1px solid rgba(232, 84, 122, 0.2)' }}
            >
              <img
                src={fashionPhoto}
                alt="Falisha editorial"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 65%' }}
              />

              <div
                className="absolute top-0 right-0 w-16 h-16"
                style={{
                  borderTop: '2px solid var(--signal-rose)',
                  borderRight: '2px solid var(--signal-rose)',
                }}
              />
            </div>

            <div
              className="absolute -bottom-5 -right-5 px-4 py-2 font-mono-accent text-xs tracking-widest"
              style={{
                backgroundColor: 'var(--deep-space)',
                border: '1px solid var(--signal-rose)',
                color: 'var(--signal-rose)',
              }}
            >
              STATUS: EDITORIAL
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}