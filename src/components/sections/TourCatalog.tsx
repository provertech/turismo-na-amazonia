'use client'

import { Reveal } from '@/components/ui/Reveal'
import { TourCarousel } from '@/components/ui/TourCarousel'

interface Tour {
  id: string
  title: string
  description: string
  price: number | null
  originalPrice?: number | null
  image: string
  category: 'tour' | 'pernoite' | 'privativo' | 'especial'
}

// Dados completos dos 11 passeios
const tourData = {
  tour: [
    {
      id: 'tour-amazonico',
      title: 'Tour Amazônico',
      description: 'Passeio amazônico. Saídas todos os dias no Mirante Lúcia Almeida. O Melhor e mais completo do Amazonas.',
      price: 120,
      originalPrice: null,
      image: '/images/1.png',
      category: 'tour' as const
    },
    {
      id: 'tour-amazonico-vip',
      title: 'Tour Amazônico VIP',
      description: 'Verão amazônico com bufê regional incluso. Nado com botos incluso, transfer e guia de turismo.',
      price: 220,
      originalPrice: null,
      image: '/images/2.png',
      category: 'tour' as const
    },
    {
      id: 'city-tour-fauna-flora',
      title: 'City Tour Fauna e Flora e Centro Histórico',
      description: 'História de Manaus e Centro Histórico. Teatro Amazonas, Mercado Municipal, Bosque da Ciência.',
      price: 600,
      originalPrice: null,
      image: '/images/3.png',
      category: 'tour' as const
    },
    {
      id: 'compras-lethem-guyana',
      title: 'Compras Lethem-Guyana Inglesa',
      description: 'Viagem de compras para a fronteira. 3 dias de aventura com transporte e guia.',
      price: 350,
      originalPrice: null,
      image: '/images/4.png',
      category: 'tour' as const
    }
  ],
  pernoite: [
    {
      id: 'pernoite-pousada-selva',
      title: 'Pernoite em Pousada de Selva (4 dias)',
      description: 'Dias de aventura na floresta 🏞️ 4 dias e 3 noites. Encontro das Águas, rio Mamori, lago Ipanema.',
      price: 2050,
      originalPrice: null,
      image: '/images/5.png',
      category: 'pernoite' as const
    },
    {
      id: 'pernoite-presidente-figueiredo',
      title: 'Pernoite em Presidente Figueiredo',
      description: 'Uma aventura maravilhosa na Terra das Cachoeiras 🌈 2 dias e 1 noite com hospedagem inclusa.',
      price: 1900,
      originalPrice: null,
      image: '/images/6.png',
      category: 'pernoite' as const
    },
    {
      id: 'pernoite-casa-caboclo',
      title: 'Pernoite na Casa do Caboclo (Acajatuba)',
      description: '3 dias e 2 noites na comunidade do Acajatuba. Visão espetacular do Lago do Acajatuba.',
      price: 2900,
      originalPrice: null,
      image: '/images/7.png',
      category: 'pernoite' as const
    }
  ],
  privativo: [
    {
      id: 'museu-seringal-privativo',
      title: 'Museu do Seringal (Privativo)',
      description: 'Pacote para 2 pessoas. Mergulho histórico no período áureo da borracha na área rural de Manaus.',
      price: 950,
      originalPrice: null,
      image: '/images/8.png',
      category: 'privativo' as const
    },
    {
      id: 'anavilhanas-privativo',
      title: 'ANAVILHANAS (Privativo)',
      description: 'Passeio privativo para 3 pessoas. Trilha guiada, interação com botos, passeio panorâmico.',
      price: 2000,
      originalPrice: null,
      image: '/images/1.png',
      category: 'privativo' as const
    },
    {
      id: 'anavilhanas',
      title: 'Anavilhanas',
      description: 'Private Tour para 2 pessoas. Lancha rápida, Rio Negro, caminhada na selva, plantas medicinais.',
      price: 1500,
      originalPrice: null,
      image: '/images/2.png',
      category: 'privativo' as const
    }
  ],
  especial: [
    {
      id: 'presidente-figueiredo-bate-volta',
      title: 'Presidente Figueiredo (Bate e Volta)',
      description: 'Terra das Cachoeiras. Caverna do Maroaga, Gruta da Judéia, Corredeira Urubuí, Cachoeira Iracema.',
      price: 300,
      originalPrice: 350,
      image: '/images/3.png',
      category: 'especial' as const
    }
  ]
}

export default function TourCatalog() {
  const handleViewDetails = (id: string) => {
    // TODO: Implementar navegação para página de detalhes
    console.log('Ver detalhes do passeio:', id)
  }

  return (
    <section id="catalogo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos Passeios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra as melhores experiências na Amazônia. Escolha entre nossos tours diários, 
              pacotes com pernoite ou experiências privativas exclusivas.
            </p>
          </div>
        </Reveal>

                       {/* Seção Tour */}
               <Reveal delay={0.1}>
                 <div className="mb-16">
                   <div className="flex items-center gap-3 mb-8">
                     <span className="text-3xl">📱</span>
                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                       Tour (Passeios Diários)
                     </h3>
                   </div>
                   <TourCarousel tours={tourData.tour} />
                 </div>
               </Reveal>

                       {/* Seção Pernoite */}
               <Reveal delay={0.2}>
                 <div className="mb-16">
                   <div className="flex items-center gap-3 mb-8">
                     <span className="text-3xl">🏞️</span>
                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                       Pernoite (Pacotes com Hospedagem)
                     </h3>
                   </div>
                   <TourCarousel tours={tourData.pernoite.slice(0, 3)} />
                 </div>
               </Reveal>

                       {/* Seção Privativo */}
               <Reveal delay={0.3}>
                 <div className="mb-16">
                   <div className="flex items-center gap-3 mb-8">
                     <span className="text-3xl">⭐</span>
                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                       Privativo (Experiências Exclusivas)
                     </h3>
                   </div>
                   <TourCarousel tours={tourData.privativo.slice(0, 3)} />
                 </div>
               </Reveal>

               {/* Seção Especial */}
               <Reveal delay={0.4}>
                 <div className="mb-16">
                   <div className="flex items-center gap-3 mb-8">
                     <span className="text-3xl">🌟</span>
                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                       Especial (Bate e Volta)
                     </h3>
                   </div>
                   <TourCarousel tours={tourData.especial.slice(0, 3)} />
                 </div>
               </Reveal>
             </div>
           </section>
         )
       }
