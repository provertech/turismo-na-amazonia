'use client'

import * as React from 'react'

const faqs = [
  {
    q: 'Como faço a reserva?',
    a: 'Clique em Reservar ou fale no WhatsApp. Enviamos opções de data, valores e orientações de pagamento para confirmar o agendamento.',
  },
  {
    q: 'O passeio acontece com chuva?',
    a: 'Sim, a maioria dos passeios ocorre normalmente com chuva leve. Em caso de condições severas, remarcamos sem custo conforme disponibilidade.',
  },
  {
    q: 'O que está incluído?',
    a: 'Guias locais e equipamentos de segurança. Alguns pacotes incluem almoço e atividades específicas (verifique no card do pacote).',
  },
  {
    q: 'Como é o pagamento e cancelamento?',
    a: 'Sinal para garantir a data e restante no dia do passeio. Cancelamentos/alterações seguem nossa política informada na confirmação.',
  },
]

export default function Faq() {
  const [open, setOpen] = React.useState<number | null>(0)
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Dúvidas frequentes
        </h2>
        <div className="divide-y rounded-xl border bg-gray-50">
          {faqs.map((item, i) => (
            <details
              key={i}
              open={open === i}
              onClick={(e) => {
                e.preventDefault()
                setOpen(open === i ? null : i)
              }}
              className="group"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 text-gray-900">
                <span className="font-medium">{item.q}</span>
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 9l6 6 6-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}


