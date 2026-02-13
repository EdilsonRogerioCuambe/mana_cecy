"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Fernanda",
    role: "Mae e Esposa",
    text: "A Mana dos Manos transformou o meu casamento. Os seus conselhos sao praticos, cheios de sabedoria e amor. Recomendo a todas as familias!",
    initials: "MF",
  },
  {
    name: "Joao Carlos",
    role: "Pai de Familia",
    text: "Participar nos workshops da Inocencia foi uma experiencia transformadora. Aprendi a comunicar melhor com a minha esposa e filhos.",
    initials: "JC",
  },
  {
    name: "Ana Beatriz",
    role: "Empresaria",
    text: "O coaching de vida com a Inocencia ajudou-me a encontrar o equilibrio entre a minha carreira e a familia. Uma verdadeira inspiracao!",
    initials: "AB",
  },
  {
    name: "Teresa Manuel",
    role: "Professora",
    text: "As palestras da Mana dos Manos tocam o coracao. Ela tem o dom de falar com verdade e compaixao sobre os desafios da vida familiar.",
    initials: "TM",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section id="depoimentos" className="bg-card py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Depoimentos
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            O Que Dizem Sobre Mim
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="flex flex-col items-center gap-8 text-center">
            <Quote className="h-12 w-12 text-primary/30" />

            <p className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
              {testimonials[current].text}
            </p>

            <div className="flex flex-col items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {testimonials[current].initials}
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30"
                  }`}
                  aria-label={`Depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Proximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
