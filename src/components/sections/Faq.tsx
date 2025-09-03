'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from '@/components/ui/Reveal'

const faqItems = [
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos PIX, cartões de crédito (principais bandeiras) e transferência bancária. Para pagamentos com cartão, é possível parcelar em até 3x sem juros."
  },
  {
    question: "Qual a política de cancelamento?",
    answer: "Cancelamentos feitos com até 7 dias de antecedência do passeio têm reembolso integral. Para cancelamentos entre 3 e 6 dias, o reembolso é de 50%. Menos de 72 horas, não há reembolso, mas é possível reagendar mediante disponibilidade."
  },
  {
    question: "O que devo levar para os passeios?",
    answer: "Recomendamos levar protetor solar, chapéu/boné, óculos de sol, repelente, roupas leves e de banho, toalha, câmera fotográfica e um casaco leve para o fim de tarde. Água e lanches leves são sempre bem-vindos."
  },
  {
    question: "Os passeios são seguros? Há guias?",
    answer: "Sim, todos os nossos passeios são conduzidos por guias locais experientes e treinados em primeiros socorros. Utilizamos equipamentos de segurança certificados e seguimos rigorosos protocolos para garantir sua tranquilidade."
  },
  {
    question: "Como funciona a interação com os botos?",
    answer: "A interação com os botos é feita de forma respeitosa e supervisionada por biólogos. Os botos são animais selvagens e a interação segue normas de preservação ambiental, garantindo o bem-estar dos animais e a segurança dos visitantes."
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Perguntas Frequentes
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-gray-900 px-5 py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}


