import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Creative Lab', href: '#creative-lab' },
    { label: 'Contact', href: '#contact' },
]

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 px-8 md:px-20 py-5 flex items-center justify-between transition-all duration-500"
            style={{
                backgroundColor: scrolled
                    ? 'rgba(3, 6, 14, 0.72)'
                    : 'transparent',
                backdropFilter: scrolled
                    ? 'blur(18px) saturate(180%)'
                    : 'none',
                WebkitBackdropFilter: scrolled
                    ? 'blur(18px) saturate(180%)'
                    : 'none',
                borderBottom: scrolled
                    ? '1px solid rgba(255, 255, 255, 0.08)'
                    : '1px solid transparent',
            }}
        >
            {/* Logo */}
            <a
                href="#home"
                className="font-display tracking-widest"
                style={{
                    color: 'var(--lunar-white)',
                    fontSize: '1.2rem',
                }}
            >
                F<span style={{ color: 'var(--signal-rose)' }}>.</span>
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-10">
                {LINKS.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className="font-mono-accent text-xs tracking-widest transition-colors duration-300"
                            style={{
                                color: 'var(--lunar-white)',
                                opacity: 0.6,
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.opacity = '1'
                                e.target.style.color = 'var(--signal-rose)'
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.opacity = '0.6'
                                e.target.style.color = 'var(--lunar-white)'
                            }}
                        >
                            {link.label.toUpperCase()}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile hamburger */}
            <button
                type="button"
                className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {[0, 1, 2].map((i) => (
                    <span
                        key={i}
                        className="block w-7 h-[2px] rounded-full transition-all duration-300"
                        style={{ backgroundColor: 'var(--lunar-white)' }}
                    />
                ))}
            </button>

            {/* Mobile menu */}
            {menuOpen && (
                <motion.ul
                    className="absolute top-full left-0 right-0 flex flex-col items-center gap-8 py-10 md:hidden"
                    style={{
                        backgroundColor: 'rgba(8, 11, 20, 0.97)',
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="font-mono-accent text-sm tracking-widest"
                                style={{ color: 'var(--lunar-white)' }}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label.toUpperCase()}
                            </a>
                        </li>
                    ))}
                </motion.ul>
            )}
        </nav>
    )
}