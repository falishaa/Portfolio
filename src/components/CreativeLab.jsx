import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const PROJECTS = [
    {
        id: 1,
        tag: 'Development',
        title: 'This Portfolio',
        description:
            'Built with React, Vite, Tailwind, and Framer Motion. Designed to bridge two worlds.',
        links: [],
        status: 'ACTIVE',
    },
    {
        id: 2,
        tag: 'Networking',
        title: 'Pi-hole on Raspberry Pi Zero 2W',
        description:
            'Set up a network-wide ad blocker on a Raspberry Pi Zero 2W, eliminating ads on a Samsung Smart TV and all managed-WiFi devices. Documented as a TikTok tutorial.',
        links: [{ label: 'VIEW TUTORIAL', action: 'video' }],
        status: 'COMPLETE',
    },
    {
        id: 3,
        tag: 'Cybersecurity',
        title: 'OWASP Password Strength Checker',
        description:
            "Created a python program to check a password's strength based on common OWASP guidelines.",
        links: [{ label: 'VIEW PROJECT', href: 'https://github.com/falishaa/owasp-password-strength-checker' }],
        status: 'PENDING',
    },
    {
        id: 4,
        tag: 'Gaming',
        title: 'Oregon Trail',
        description:
            'A simplified text-based version of the retro game Oregon Trail coded in Python.',
        links: [{ label: 'VIEW PROJECT', href: 'https://github.com/falishaa/oregon-trail' }],
        status: 'COMPLETE',
    },
]

const STATUS_COLORS = {
    ACTIVE: 'var(--cipher-teal)',
    COMPLETE: 'var(--saffron-pulse)',
    PENDING: 'var(--signal-rose)',
}

export default function CreativeLab() {
    const [showVideo, setShowVideo] = useState(false)
    return (
        <section
            id="creative-lab"
            className="relative min-h-screen px-8 md:px-20 py-32"
            style={{ backgroundColor: 'var(--deep-space)' }}
        >
            {/* Subtle teal glow top right */}
            <div
                className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(circle, rgba(45,255,212,0.04) 0%, transparent 70%)',
                }}
            />

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
          // CREATIVE LAB
                </p>

                <h2
                    className="font-display leading-tight"
                    style={{
                        color: 'var(--lunar-white)',
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    }}
                >
                    Personal <span style={{ color: 'var(--signal-rose)' }}>Projects,</span> <span style={{ color: 'var(--cipher-teal)' }}>Coded</span>
                    <br />
                    by{' '}
                    <span style={{ color: 'var(--saffron-pulse)' }}>Me.</span>
                </h2>
            </motion.div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
                {PROJECTS.map((project, i) => (
                    <motion.div
                        key={project.id}
                        className="relative p-8 flex flex-col gap-4"
                        style={{
                            border: '1px solid rgba(240, 238, 245, 0.08)',
                            backgroundColor: 'rgba(240, 238, 245, 0.02)',
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{
                            borderColor: 'rgba(232, 84, 122, 0.3)',
                            backgroundColor: 'rgba(232, 84, 122, 0.03)',
                        }}
                    >
                        {/* Top row — tag and status */}
                        <div className="flex items-center justify-between">
                            <span
                                className="font-mono-accent text-xs tracking-widest"
                                style={{ color: 'var(--cipher-teal)' }}
                            >
                                {project.tag.toUpperCase()}
                            </span>

                            <span
                                className="font-mono-accent text-xs tracking-widest px-2 py-1"
                                style={{
                                    color: STATUS_COLORS[project.status],
                                    border: `1px solid ${STATUS_COLORS[project.status]}`,
                                    opacity: 0.8,
                                }}
                            >
                                {project.status}
                            </span>
                        </div>

                        {/* Title */}
                        <h3
                            className="font-display leading-tight"
                            style={{
                                color: 'var(--lunar-white)',
                                fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                            }}
                        >
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p
                            className="text-sm leading-relaxed flex-1"
                            style={{
                                color: 'var(--lunar-white)',
                                opacity: 0.65,
                            }}
                        >
                            {project.description}
                        </p>

                        {/* Links */}
                        {project.links.length > 0 && (
                            <div className="flex gap-4 mt-2">
                                {project.links.map((link) => (
                                    link.action === 'video' ? (
                                        <button
                                            key={link.label}
                                            type="button"
                                            className="font-mono-accent text-xs tracking-widest transition-colors duration-300 cursor-pointer"
                                            style={{ color: 'var(--signal-rose)' }}
                                            onClick={() => setShowVideo(true)}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = 'var(--saffron-pulse)'
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = 'var(--signal-rose)'
                                            }}
                                        >
                                            {link.label} →
                                        </button>
                                    ) : (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-mono-accent text-xs tracking-widest transition-colors duration-300"
                                            style={{ color: 'var(--signal-rose)' }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = 'var(--saffron-pulse)'
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = 'var(--signal-rose)'
                                            }}
                                        >
                                            {link.label} →
                                        </a>
                                    )
                                ))}
                            </div>
                        )}

                        {/* Corner accent */}
                        <div
                            className="absolute bottom-0 right-0 w-8 h-8"
                            style={{
                                borderBottom: '1px solid var(--saffron-pulse)',
                                borderRight: '1px solid var(--saffron-pulse)',
                                opacity: 0.4,
                            }}
                        />
                    </motion.div>
                ))}
            </div>
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowVideo(false)}
                    >
                        <motion.div
                            className="relative w-full max-w-sm max-h-[80vh] flex flex-col"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                type="button"
                                className="absolute -top-12 right-0 text-3xl text-white"
                                onClick={() => setShowVideo(false)}
                            >
                                ×
                            </button>

                            <video
                                controls
                                autoPlay
                                className="w-full max-h-[75vh] rounded-lg object-contain"
                            >
                                <source
                                    src={`${import.meta.env.BASE_URL}Videos/pihole-tutorial.mp4`}
                                    type="video/mp4"
                                />
                                Your browser does not support video playback.
                            </video>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}