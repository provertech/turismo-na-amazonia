'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const images = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length
      setNextImageIndex(nextIndex)
      setIsTransitioning(true)
      
      // Atualiza o indicador imediatamente para sincronizar com a transição visual
      setCurrentImageIndex(nextIndex)
      
      setTimeout(() => {
        setIsTransitioning(false)
      }, 1000) // Duração da transição
    }, 5000) // Troca a cada 5 segundos

    return () => clearInterval(interval)
  }, [currentImageIndex, images.length])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex
                ? 'opacity-100'
                : index === nextImageIndex && isTransitioning
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Enhanced overlay with gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          </div>
        ))}
      </div>

      {/* Netflix-style black mask covering entire hero section */}
      <div className="absolute inset-0 bg-black/60 z-5 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Descubra a Magia da
          <span className="block text-green-400">Amazônia</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
          Experiências únicas de turismo de aventura no coração da floresta amazônica. 
          Passeios inesquecíveis que conectam você com a natureza.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
          >
            Explorar Atividades
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg bg-transparent"
          >
            Ver Galeria
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const nextIndex = index
              setNextImageIndex(nextIndex)
              setIsTransitioning(true)
              
              // Atualiza o indicador imediatamente para sincronizar
              setCurrentImageIndex(nextIndex)
              
              setTimeout(() => {
                setIsTransitioning(false)
              }, 1000)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
