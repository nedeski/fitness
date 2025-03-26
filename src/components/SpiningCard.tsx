'use client'
// components/SpinningCard.tsx
import React, { useState } from 'react'

export function SpinningCard({ title, content }: any) {
  // State to track if the card has been clicked
  const [flipped, setFlipped] = useState(false)

  // Function to handle the flip on click
  const handleClick = () => {
    setFlipped(!flipped)
  }

  return (
    <div className="my-1 flex w-full items-center justify-center bg-neutral-950 px-1 md:w-1/2 lg:my-4 lg:w-1/4 lg:px-4">
      <div className="perspective-1000 h-96 w-64">
        <div
          className={`transform-style-preserve-3d relative h-full w-full transition-transform duration-500 ${
            flipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleClick}
        >
          {/* Front of the card */}
          <div className="backface-hidden absolute inset-0 flex items-center justify-center rounded-lg bg-blue-500 text-white">
            <div className="absolute right-5 top-5 text-2xl">V</div>
            <h2 className="text-2xl">{title}</h2>
          </div>
          <div className="absolute bottom-5 right-5 text-2xl text-white">V</div>

          {/* Back of the card */}
          <div className="rotate-y-180 backface-hidden absolute inset-0 flex transform items-center justify-center rounded-lg bg-green-500 text-white">
            <h2 className="text-l m-5">{content}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
