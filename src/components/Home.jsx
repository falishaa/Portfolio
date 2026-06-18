import { motion } from 'framer-motion'
import useTypewriter from '../hooks/useTypewriter'
import coverImage from '../assets/Falisha2.JPG'

export default function Home() {
  const typed = useTypewriter()

  return (
     <section
      id="home"
      style={{ backgroundColor: 'var(--deep-space)' }}
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden px-8 md:px-20 py-32 lg:py-0"
    >
      {/* Radar sweep — positioned center, behind both content and photo */}
      <RadarSweep />

      {/* Bengali textile texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23F0EEF5' stroke-width='0.5'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3Cpath d='M30 0 L30 60 M0 30 L60 30'/%3E%3Cpath d='M15 15 L45 45 M45 15 L15 45'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Left — text content */}
      <div className="max-w-2xl lg:w-1/2 flex-shrink-0 mx-auto lg:mx-0">
        {/* Mono label */}
        <motion.p
          className="font-mono-accent mb-4 tracking-widest text-xs md:text-sm"
          style={{ color: 'var(--cipher-teal)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          // PORTFOLIO — UNCLASSIFIED
        </motion.p>

        {/* Name */}
        <motion.h1
          className="font-display leading-none tracking-tight"
          style={{
            color: 'var(--lunar-white)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Falisha
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          className="flex items-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span
            className="font-mono-accent text-sm md:text-base"
            style={{ color: 'var(--signal-rose)' }}
          >
            {'> '}
          </span>
          <span
            className="font-mono-accent text-sm md:text-base"
            style={{ color: 'var(--lunar-white)' }}
          >
            {typed}
          </span>
          <span
            className="inline-block w-0.5 h-4 animate-pulse"
            style={{ backgroundColor: 'var(--signal-rose)' }}
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mt-10 h-px w-24"
          style={{ backgroundColor: 'var(--saffron-pulse)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />

        {/* CTA */}
        <motion.div
          className="mt-10 flex gap-6 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <a
            href="#portfolio"
            className="font-mono-accent text-xs tracking-widest px-6 py-3 border transition-all duration-300"
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
            VIEW PORTFOLIO
          </a>

          <a
            href="#contact"
            className="font-mono-accent text-xs tracking-widest px-6 py-3 border transition-all duration-300"
            style={{
              borderColor: 'var(--lunar-white)',
              color: 'var(--lunar-white)',
              opacity: 0.6,
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '0.6'
            }}
          >
            GET IN TOUCH
          </a>
        </motion.div>
      </div>

      {/* Right — photo, fades up from behind the radar */}
      <motion.div
        className="relative z-10 lg:w-1/2 w-full mt-16 lg:mt-0 flex justify-center lg:justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        <div
          className="relative w-full max-w-md aspect-[3/4] overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 25%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 25%)',
          }}
        >
          {<img
            src={coverImage}
            alt="Falisha"
            className="w-full h-full object-cover"
          />}
          <div
            className="w-full h-full flex items-center justify-center font-mono-accent text-xs tracking-widest"
            style={{
              backgroundColor: 'rgba(232, 84, 122, 0.05)',
              color: 'var(--signal-rose)',
              border: '1px solid rgba(232, 84, 122, 0.15)',
            }}
          >
            // HERO PHOTO
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function RadarSweep() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-20 flex items-center justify-center">
      <motion.div
        style={{
          width: '60vw',
          height: '60vw',
          maxWidth: '600px',
          maxHeight: '600px',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#2DFFD4" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#2DFFD4" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="#2DFFD4" strokeWidth="0.5" />
          <line x1="100" y1="100" x2="100" y2="10" stroke="#2DFFD4" strokeWidth="1" />
          <defs>
            <radialGradient id="sweep" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2DFFD4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2DFFD4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M100 100 L100 10 A90 90 0 0 1 190 100 Z"
            fill="url(#sweep)"
          />
        </svg>
      </motion.div>
    </div>
  )
}