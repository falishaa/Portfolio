import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CATEGORIES = ['All', 'Editorial', 'Fashion', 'Fitness', 'Brand', 'Campaign']
const PAGE_SIZE = 12

// Pulls every image from each category folder automatically
const photoModules = import.meta.glob(
  '../assets/portfolio/*/*.{jpg,jpeg,png,JPG,JPEG,PNG}',
  { eager: true }
)

const PHOTOS = Object.entries(photoModules).map(([path, module], i) => {
  const parts = path.split('/')
  const folderName = parts[parts.length - 2]
  const fileName = parts[parts.length - 1].split('.')[0]
  const category = folderName.charAt(0).toUpperCase() + folderName.slice(1)
  const title = fileName
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())

  return {
    id: i + 1,
    category,
    src: module.default,
    title,
  }
})

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [lightbox, setLightbox] = useState(null)
  const [dragStartY, setDragStartY] = useState(null)
  const [dragY, setDragY] = useState(0)
  const isDragging = useRef(false)

  const filtered = active === 'All' ? PHOTOS : PHOTOS.filter(p => p.category === active)
  const displayed = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  const handleCategoryChange = (cat) => {
    setActive(cat)
    setVisible(PAGE_SIZE)
  }

  const handleTouchStart = (e) => {
    isDragging.current = true
    setDragStartY(e.touches[0].clientY)
  }

  const handleTouchMove = (e) => {
    if (!isDragging.current) return
    const currentY = e.touches[0].clientY
    const diff = currentY - dragStartY
    if (diff > 0) setDragY(diff)
  }

  const handleTouchEnd = () => {
    isDragging.current = false
    if (dragY > 120) setLightbox(null)
    setDragY(0)
    setDragStartY(null)
  }

  return (
    <section
      id="portfolio"
      className="relative min-h-screen px-8 md:px-20 py-32"
      style={{ backgroundColor: 'var(--deep-space)' }}
    >
      {/* Section header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="font-mono-accent text-xs tracking-widest mb-4"
          style={{ color: 'var(--cipher-teal)' }}
        >
          // PORTFOLIO
        </p>
        <h2
          className="font-display leading-tight"
          style={{
            color: 'var(--lunar-white)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          Editorials, <span style={{ color: 'var(--signal-rose)' }}>Fashion </span>,{' '}
          <span style={{ color: 'var(--cipher-teal)' }}>Fitness, </span>{' '}
          <span style={{ color: 'var(--saffron-pulse)' }}>Everything. </span>
        </h2>
      </motion.div>

      {/* Category filter */}
      <motion.div
        className="flex flex-wrap gap-3 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className="font-mono-accent text-xs tracking-widest px-5 py-2 border transition-all duration-300"
            style={{
              borderColor: active === cat ? 'var(--signal-rose)' : 'rgba(240, 238, 245, 0.2)',
              color: active === cat ? 'var(--deep-space)' : 'var(--lunar-white)',
              backgroundColor: active === cat ? 'var(--signal-rose)' : 'transparent',
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </motion.div>

      {/* Photo count indicator */}
      <p
        className="font-mono-accent text-xs tracking-widest mb-8"
        style={{ color: 'var(--lunar-white)', opacity: 0.3 }}
      >
        SHOWING {displayed.length} OF {filtered.length}
      </p>

      {/* Grid — 3 columns, uniform rows, images fill width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {displayed.map((photo, i) => (
            <motion.div
              key={photo.id}
              className="relative cursor-pointer overflow-hidden group aspect-[3/4]"
              style={{ border: '1px solid rgba(232, 84, 122, 0.15)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: (i % PAGE_SIZE) * 0.04 }}
              onClick={() => {
                if (window.innerWidth >= 768) setLightbox(photo)
              }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay desktop only */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(8,11,20,0.85), transparent)' }}
              >
                <p
                  className="font-mono-accent text-xs tracking-widest"
                  style={{ color: 'var(--cipher-teal)' }}
                >
                  {photo.category.toUpperCase()}
                </p>
                <p
                  className="font-display text-lg"
                  style={{ color: 'var(--lunar-white)' }}
                >
                  {photo.title}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load more */}
      {hasMore && (
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={() => setVisible(v => v + PAGE_SIZE)}
            className="font-mono-accent text-xs tracking-widest px-10 py-4 border transition-all duration-300"
            style={{
              borderColor: 'var(--signal-rose)',
              color: 'var(--signal-rose)',
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = 'var(--signal-rose)'
              e.target.style.color = 'var(--deep-space)'
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.color = 'var(--signal-rose)'
            }}
          >
            LOAD MORE // {filtered.length - visible} REMAINING
          </button>
        </motion.div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-8"
            style={{ backgroundColor: 'rgba(8, 11, 20, 0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center pointer-events-none">
              <div
                className="pointer-events-auto w-full flex flex-col items-center"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                  transform: `translateY(${dragY}px)`,
                  transition: isDragging.current ? 'none' : 'transform 0.2s ease',
                }}
              >
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="w-full max-h-[80vh] object-contain"
                />
                <div className="mt-4 flex items-center justify-between w-full">
                  <div>
                    <p
                      className="font-mono-accent text-xs tracking-widest"
                      style={{ color: 'var(--cipher-teal)' }}
                    >
                      {lightbox.category.toUpperCase()}
                    </p>
                    <p
                      className="font-display text-2xl"
                      style={{ color: 'var(--lunar-white)' }}
                    >
                      {lightbox.title}
                    </p>
                  </div>
                  <button
                    className="font-mono-accent text-xs tracking-widest px-4 py-2 border cursor-pointer"
                    style={{
                      borderColor: 'rgba(240,238,245,0.3)',
                      color: 'var(--lunar-white)',
                    }}
                    onClick={() => setLightbox(null)}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}