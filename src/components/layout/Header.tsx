import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo_CL.jpg"
              alt="Turismo na Amazônia"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-xl font-bold text-green-600 ml-3">
              Turismo na Amazônia
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Início
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Passeios
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Sobre
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:block">
              Entrar
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Reservar
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
