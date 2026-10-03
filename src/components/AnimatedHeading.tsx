import { useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  initialDelay?: number
  charDelay?: number
  charDuration?: number
}

export default function AnimatedHeading({
  text,
  className = '',
  initialDelay = 200,
  charDelay = 30,
  charDuration = 500,
}: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false)
  const lines = text.split('\n').map((line) => line.split(''))

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), initialDelay)
    return () => clearTimeout(timer)
  }, [initialDelay])

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((chars, lineIndex) => (
        <span
          key={lineIndex}
          style={{ display: 'block', whiteSpace: 'nowrap' }}
        >
          {chars.map((char, charIndex) => {
            const delay =
              lineIndex * chars.length * charDelay + charIndex * charDelay
            return (
              <span
                key={charIndex}
                style={{
                  display: 'inline-block',
                  opacity: started ? 1 : 0,
                  transform: started ? 'translateX(0)' : 'translateX(-18px)',
                  transition: `opacity ${charDuration}ms, transform ${charDuration}ms`,
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char === ' ' ? ' ' : char}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
