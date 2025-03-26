'use client'
import InfiniteMenu from './InfiniteMenu'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'

const items = [
  {
    image: '/images/Sarah.jpg',
    link: '#',
    title: 'Sarah T.',
    description:
      'It’s incredible how functional training has made everyday tasks so much easier.',
  },
  {
    image: '/images/Mark.jpg',
    link: '#',
    title: 'Mark D.',
    description: 'I feel stronger and more coordinated in everything I do',
  },
  {
    image: 'images/Jessica.jpg',
    link: '#',
    title: 'Jessica L.',
    description:
      'Functional training helped me get back to doing things I love',
  },
  {
    image: 'images/John.jpg',
    link: '#',
    title: 'John B.',
    description: 'It’s truly a game-changer for my lifestyle.',
  },
]

export default function InfiniteMenuUsage() {
  return (
    <div
      className="my-20 text-white"
      style={{ height: '600px', position: 'relative' }}
    >
      <InfiniteMenu items={items} />
    </div>
  )
}
