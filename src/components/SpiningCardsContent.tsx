import { SpinningCard } from './SpiningCard'

const cardsContent = [
  {
    name: 'Development',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    name: 'Design',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    name: 'Marketing',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    name: 'Branding',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
]

export function SpiningCardsContent() {
  return (
    <div>
      <div className="container mx-auto my-12 px-4 md:px-12">
        <div className="-mx-1 flex flex-wrap lg:-mx-4">
          {cardsContent.map((n) => (
            <SpinningCard key={n.name} title={n.name} content={n.content} />
          ))}
        </div>
      </div>
    </div>
  )
}
