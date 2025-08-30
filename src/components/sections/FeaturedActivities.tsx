import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const featuredActivities = [
  {
    id: 1,
    title: "Pôr do Sol de Bike Aquática",
    description: "Experiência única no Parque Nacional de Anavilhanas",
    duration: "2h",
    price: "R$ 180,00",
    image: "/images/bike-aquatica.jpg",
    category: "Aventura",
    featured: true
  },
  {
    id: 2,
    title: "Aurora no Rio Negro",
    description: "Stand Up Paddle ao nascer do sol",
    duration: "2h",
    price: "R$ 180,00",
    image: "/images/stand-up-paddle.jpg",
    category: "Aventura",
    featured: true
  },
  {
    id: 3,
    title: "Passeio de Lancha em Anavilhanas",
    description: "Comunidade Ribeirinha - 4h de duração",
    duration: "4h",
    price: "R$ 590,00",
    image: "/images/lancha-anavilhanas.jpg",
    category: "Relaxamento",
    featured: true
  },
  {
    id: 4,
    title: "Visita à Comunidade Makuitá",
    description: "Imersão na cultura local amazônica",
    duration: "4h",
    price: "R$ 540,00",
    image: "/images/comunidade-makuita.jpg",
    category: "Cultura",
    featured: true
  }
]

export default function FeaturedActivities() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            As Preferidas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nossas atividades mais populares e bem avaliadas pelos viajantes
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredActivities.map((activity) => (
            <Card key={activity.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-600 to-blue-600" />
                <Badge className="absolute top-3 left-3 bg-green-600 text-white">
                  {activity.category}
                </Badge>
                {activity.featured && (
                  <Badge className="absolute top-3 right-3 bg-orange-500 text-white">
                    Mais Vendido
                  </Badge>
                )}
              </div>

              {/* Content */}
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {activity.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {activity.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">{activity.duration}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">A partir de</p>
                    <p className="text-xl font-bold text-green-600">{activity.price}</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Ver Detalhes
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3"
          >
            Ver Todas as Atividades
          </Button>
        </div>
      </div>
    </section>
  )
}
