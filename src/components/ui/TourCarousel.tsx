'use client'

import { TourCard } from './TourCard'

interface Tour {
  id: string
  title: string
  description: string
  price: number | null
  originalPrice?: number | null
  image: string
  category: 'tour' | 'pernoite' | 'privativo' | 'especial'
}

interface TourCarouselProps {
  tours: Tour[]
}

export function TourCarousel({ tours }: TourCarouselProps) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {tours.map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </div>
    </div>
  )
}
