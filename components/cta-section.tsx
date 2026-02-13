"use client"

import Image from "next/image"
import { ArrowRight, Heart, Phone } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/cta-bg.jpg"
              alt=""
              fill
              className="object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20,20%,8%)]/90 via-[hsl(20,20%,8%)]/80 to-[hsl(20,20%,8%)]/60" />
          </div>

          {/* Content grid */}
          <div className="relative grid items-center gap-10 px-8 py-16 md:px-14 lg:grid-cols-5 lg:gap-16 lg:px-20 lg:py-24">
            {/* Text side - 3 cols */}
            <div
              className="flex flex-col gap-6 lg:col-span-3"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <div className="flex items-center gap-3">
                <Heart className="h-4 w-4 text-primary" fill="currentColor" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                  Comece Hoje
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold leading-tight text-[hsl(30,33%,97%)] md:text-5xl lg:text-6xl">
                <span className="text-balance">
                  Vamos fortalecer{" "}
                  <span className="text-primary">familias</span> juntos.
                </span>
              </h2>

              <p className="max-w-xl text-base leading-relaxed text-[hsl(30,20%,75%)] md:text-lg">
                Estou pronta para caminhar consigo nesta jornada de
                transformacao. Juntos, podemos construir lares mais fortes e
                familias mais felizes.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:gap-3 hover:brightness-110"
                >
                  Agendar Conversa
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/258XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[hsl(30,33%,97%)]/20 px-8 py-4 text-sm font-semibold text-[hsl(30,33%,97%)] backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Stats side - 2 cols */}
            <div
              className="flex flex-col gap-5 lg:col-span-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(30px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              }}
            >
              {[
                { number: "10+", label: "Anos de experiencia" },
                { number: "500+", label: "Familias orientadas" },
                { number: "100+", label: "Palestras realizadas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-5 rounded-2xl border border-[hsl(30,33%,97%)]/10 bg-[hsl(30,33%,97%)]/5 px-6 py-5 backdrop-blur-sm"
                >
                  <span className="font-serif text-3xl font-bold text-primary md:text-4xl">
                    {stat.number}
                  </span>
                  <span className="text-sm text-[hsl(30,20%,75%)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
