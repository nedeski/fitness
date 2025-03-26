'use client'
import ScrollVelocity from './ScrollVelocity'

export default function ScrollVelocitySection() {
  return (
    <ScrollVelocity
      texts={['MAKE FITNESS A HABIT -', 'EVERY WORKOUT COUNTS -']}
      // velocity={velocity}
      className="custom-scroll-text"
    />
  )
}
