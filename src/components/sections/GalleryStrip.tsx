'use client'

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const images = [
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
  '/images/4.png',
  '/images/5.png',
  '/images/6.png',
  '/images/7.png',
  '/images/8.png',
]

export default function GalleryStrip() {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Galeria</h2>
          <a
            href="https://www.instagram.com/turismonaamazonia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            Ver mais no Instagram
          </a>
        </div>
        
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((src, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white p-1">
                    <Image src={src} alt={`Galeria ${i + 1}`} fill className="object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}


