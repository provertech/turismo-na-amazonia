'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Reveal } from './Reveal'

interface TourCardProps {
  id: string
  title: string
  description: string
  price: number | null
  originalPrice?: number | null
  image: string
  category: 'tour' | 'pernoite' | 'privativo'
}

export function TourCard({
  id,
  title,
  description,
  price,
  originalPrice,
  image,
  category
}: TourCardProps) {
  const handleViewDetails = (id: string) => {
    // TODO: Implementar navegação para página de detalhes
    console.log('Ver detalhes do passeio:', id)
  }
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'tour':
        return '📱'
      case 'pernoite':
        return '🏞️'
      case 'privativo':
        return '⭐'
      default:
        return '🎯'
    }
  }

  return (
    <Reveal>
      <Card className="w-96 h-[520px] flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative w-full overflow-hidden bg-gray-100" style={{ height: '240px !important', minHeight: '240px', maxHeight: '240px' }}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 320px"
            style={{ objectPosition: 'center center' }}
          />
          <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white">
            {getCategoryIcon(category)} {category.charAt(0).toUpperCase() + category.slice(1)}
          </Badge>
        </div>
        
        <CardContent className="flex-1 p-4 flex flex-col">
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 h-[28px]">
            {title}
          </h3>
          <p className="text-gray-600 text-sm flex-1 line-clamp-3">
            {description}
          </p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex flex-col gap-3">
          <div className="flex items-center justify-between w-full">
            {price ? (
              <div className="flex items-center gap-2">
                {originalPrice && originalPrice > price && (
                  <span className="text-gray-400 line-through text-sm">
                    {formatPrice(originalPrice)}
                  </span>
                )}
                <span className="text-2xl font-bold text-green-600">
                  {formatPrice(price)}
                </span>
              </div>
            ) : (
              <span className="text-gray-500 text-sm">Preço sob consulta</span>
            )}
          </div>
          
          <Button 
            onClick={() => handleViewDetails(id)}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Ver Detalhes
          </Button>
        </CardFooter>
      </Card>
    </Reveal>
  )
}
