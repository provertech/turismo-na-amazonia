'use client'

import { Badge } from '@/components/ui/badge'

const reviews = [
  {
    rating: 5,
    text:
      'Experiência incrível. Atenciosos do começo ao fim, preocupados com nosso bem-estar e segurança.',
    author: 'Visitante verificado',
    source: 'Google Reviews',
  },
  {
    rating: 5,
    text: 'Melhor empresa de turismo no Amazonas.',
    author: 'Priscilla L.',
    source: 'Google Reviews',
  },
  {
    rating: 5,
    text: 'Melhor opção para turismo regional.',
    author: 'Priscilla L.',
    source: 'Google Reviews',
  },
]

export default function SocialProof() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            O que dizem sobre a gente
          </h2>
          <p className="text-gray-600 mt-2">Avaliação média 5,0★</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.383 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.922-.755 1.688-1.538 1.118l-3.383-2.46a1 1 0 00-1.176 0l-3.383 2.46c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.045 9.401c-.784-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 leading-relaxed">{r.text}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">{r.author}</span>
                <Badge className="bg-gray-100 text-gray-800">{r.source}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


