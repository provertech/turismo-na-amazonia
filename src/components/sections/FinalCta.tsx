'use client'

export default function FinalCta() {
  const whatsapp = 'https://wa.me/5592986007304?text=Ol%C3%A1%2C%20quero%20reservar%20um%20passeio%20(Turismo%20na%20Amaz%C3%B4nia)'
  const instagram = 'https://www.instagram.com/turismonaamazonia/'

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Pronto para garantir sua data?
        </h2>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          Fale com nossa equipe agora mesmo e receba as melhores opções de roteiros
          e horários para sua experiência na Amazônia.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md bg-green-600 text-white hover:bg-green-700"
          >
            Chamar no WhatsApp (92) 98600-7304
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md border border-gray-300 text-gray-900 hover:bg-gray-100"
          >
            Ver Instagram @turismonaamazonia
          </a>
        </div>
      </div>
    </section>
  )
}


