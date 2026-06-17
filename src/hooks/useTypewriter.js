import { useState, useEffect } from 'react'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const PHRASES = [
  isMobile ? 'Cyber Operator @ USSF' : 'Cyber Operator @ United States Space Force',
  'Model & Micro-Influencer',
  'Full-Stack Developer',
  'Girls Who Code Alum',
  'Bengali-American Creative',
]

export default function useTypewriter(speed = 60, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = PHRASES[phraseIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIndex(c => c + 1)
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setPhraseIndex(i => (i + 1) % PHRASES.length)
          setCharIndex(0)
        } else {
          setCharIndex(c => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex, speed, pause])

  return displayed
}