import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'

const packages = [
  {
    id: 1,
    title: "Pacote Bronze",
    description: "Experiência completa na Amazônia",
    price: "R$ 120,00",
    features: [
      { text: "Encontro das águas", type: "basic" },
      { text: "Feira de artesanatos", type: "basic" },
      { text: "Tribo Indígena", type: "basic" },
      { text: "Trilha Ecológica", type: "basic" },
      { text: "Comunidades Ribeirinhas", type: "basic" },
      { text: "Almoço Incluso (Bufê livre)", type: "basic" }
    ],
    color: "bg-amber-600",
    badgeColor: "bg-amber-500",
    popular: false
  },
  {
    id: 2,
    title: "Pacote Prata",
    description: "Aventura amazônica com interações especiais",
    price: "R$ 150,00",
    features: [
      { text: "Encontro das águas", type: "basic" },
      { text: "Feira de artesanatos", type: "basic" },
      { text: "Tribo Indígena", type: "basic" },
      { text: "Trilha Ecológica", type: "basic" },
      { text: "Comunidades Ribeirinhas", type: "basic" },
      { text: "Almoço Incluso (Bufê livre)", type: "basic" },
      { text: "Interação com botos", type: "premium", highlight: true },
      { text: "Pesca do Pirarucu", type: "premium", highlight: true }
    ],
    color: "bg-gray-500",
    badgeColor: "bg-gray-400",
    popular: true
  },
  {
    id: 3,
    title: "Pacote Ouro",
    description: "Experiência premium com transfer incluso",
    price: "R$ 220,00",
    features: [
      { text: "Encontro das águas", type: "basic" },
      { text: "Feira de artesanatos", type: "basic" },
      { text: "Tribo Indígena", type: "basic" },
      { text: "Trilha Ecológica", type: "basic" },
      { text: "Comunidades Ribeirinhas", type: "basic" },
      { text: "Almoço Incluso (Bufê livre)", type: "basic" },
      { text: "Interação com botos", type: "premium" },
      { text: "Pesca do Pirarucu", type: "premium" },
      { text: "Transfer (Veículo para Buscar e deixar o cliente)", type: "exclusive", highlight: true }
    ],
    color: "bg-yellow-500",
    badgeColor: "bg-yellow-400",
    popular: false
  }
]

export default function FeaturedActivities() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Seção 1: Quebra de Objeção - Planejamento */}
        <div className="min-h-screen flex items-center mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <Reveal>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Vamos planejar sua aventura?</h3>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Venha com a gente
                <span className="block text-yellow-500 underline decoration-4 underline-offset-8 mt-4">viver uma experiência única</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                A gente cuida de tudo: sugerimos os melhores passeios para o seu tempo,
                montamos o roteiro e guiamos você com segurança. É só escolher a data e embarcar.
              </p>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-5 text-xl font-semibold rounded-xl">
                Quero reservar meu passeio
              </Button>
            </div>
            </Reveal>
            <Reveal delay={0.1}>
            <div className="relative">
              <Image
                src="/images/6.png"
                alt="Planejamento de viagem na Amazônia"
                width={700}
                height={500}
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            </Reveal>
          </div>
        </div>

        {/* Seção 2: Quebra de Objeção - Cultura e Tradição */}
        <div className="min-h-screen flex items-center mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <Reveal>
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/8.png"
                alt="Imersão cultural com comunidades indígenas"
                width={700}
                height={500}
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            </Reveal>
            <Reveal delay={0.1}>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Imersão Cultural</h3>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Conecte-se com
                <span className="block text-orange-500 mt-4">tradições ancestrais</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Viva experiências únicas com comunidades indígenas, participe de rituais tradicionais e aprenda sobre a rica cultura amazônica. Nossos guias locais garantem uma experiência autêntica e respeitosa, conectando você diretamente com a essência da Amazônia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-orange-100 text-orange-800 px-6 py-3 text-base font-semibold">Guias Locais</Badge>
                <Badge className="bg-orange-100 text-orange-800 px-6 py-3 text-base font-semibold">Cultura Autêntica</Badge>
                <Badge className="bg-orange-100 text-orange-800 px-6 py-3 text-base font-semibold">Respeito Cultural</Badge>
              </div>
            </div>
            </Reveal>
          </div>
        </div>

        {/* Seção 3: Quebra de Objeção - Experiências Únicas */}
        <div className="min-h-screen flex items-center mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <Reveal>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Experiências Únicas</h3>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Momentos que
                <span className="block text-blue-500 mt-4">marcam para sempre</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Do encontro das águas ao contato com botos cor-de-rosa, cada momento é cuidadosamente planejado para criar memórias inesquecíveis. Nossa equipe especializada garante sua segurança em todas as atividades, permitindo que você se concentre apenas em aproveitar cada segundo desta aventura amazônica.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">Segurança Garantida</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">Equipamentos Certificados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">Guias Experientes</span>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">Seguro de Viagem</span>
                </div> */}
              </div>
            </div>
            </Reveal>
            <Reveal delay={0.1}>
            <div className="relative">
              <Image
                src="/images/7.png"
                alt="Experiências únicas na Amazônia"
                width={700}
                height={500}
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            </Reveal>
          </div>
        </div>

        {/* Section Header - Agora apenas para os pacotes */}
        <div className="text-center mb-16">
          <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pacotes de Passeios
          </h2>
          </Reveal>
          <Reveal delay={0.05}>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o pacote ideal para sua aventura amazônica
          </p>
          </Reveal>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.08}>
            <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden relative flex flex-col h-full ${pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-lg">
                    ⭐ MAIS POPULAR
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className={`${pkg.color} text-white p-6 text-center`}>
                <CardTitle className="text-2xl font-bold mb-2">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-white/90">
                  {pkg.description}
                </CardDescription>
              </div>

              {/* Features - Flex grow to push footer down */}
              <CardContent className="p-6 flex-grow">
                <div className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className={`flex items-start p-3 rounded-lg transition-all duration-200 ${
                      feature.highlight 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500' 
                        : 'hover:bg-gray-50'
                    }`}>
                      {/* Icon based on feature type */}
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                        feature.type === 'basic' ? 'bg-green-100' :
                        feature.type === 'premium' ? 'bg-blue-100' :
                        'bg-purple-100'
                      }`}>
                        {feature.type === 'basic' ? (
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : feature.type === 'premium' ? (
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674c0 0-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                          </svg>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <span className={`text-sm ${
                          feature.highlight ? 'font-semibold text-blue-900' : 'text-gray-700'
                        }`}>
                          {feature.text}
                        </span>
                        
                        {/* Feature type badges */}
                        {feature.type === 'premium' && (
                          <Badge className="ml-2 bg-blue-100 text-blue-800 text-xs">PREMIUM</Badge>
                        )}
                        {feature.type === 'exclusive' && (
                          <Badge className="ml-2 bg-purple-100 text-purple-800 text-xs">EXCLUSIVO</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Price and CTA - Always at bottom */}
              <CardFooter className="p-6 pt-0 mt-auto">
                <div className="w-full text-center">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Valor</p>
                    <p className="text-3xl font-bold text-gray-900">{pkg.price}</p>
                  </div>
                  <Button 
                    className={`w-full ${pkg.color} hover:opacity-90 text-white`}
                    size="lg"
                  >
                    Escolher Pacote
                  </Button>
                </div>
              </CardFooter>
            </Card>
            </Reveal>
          ))}
        </div>

        {/* Feature Legend */}
        <Reveal>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 bg-white rounded-lg p-4 shadow-md">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-600">Incluso</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674c0 0-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <span className="text-sm text-gray-600">Premium</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm text-gray-600">Exclusivo</span>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Additional Info */}
        <Reveal>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Todos os pacotes incluem guia local experiente e equipamentos de segurança
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3"
          >
            Ver Todos os Detalhes
          </Button>
        </div>
        </Reveal>
      </div>
    </section>
  )
}

