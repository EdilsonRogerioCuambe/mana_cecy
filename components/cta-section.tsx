"use client"

import { ArrowRight, Heart, Phone } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

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
    <section ref={ref} className="relative overflow-hidden py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[hsl(20,20%,8%)] shadow-2xl">
          {/* Background image with better overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta-bg.jpg"
              alt="Fundo decorativo"
              fill
              className="object-cover opacity-60 mix-blend-overlay"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20,20%,8%)] via-[hsl(20,20%,8%)]/95 to-[hsl(20,20%,8%)]/50" />

            {/* Abstract shapes/grain for texture */}
             <div className="absolute inset-0 opacity-[0.15]"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
             />
          </div>

          {/* Content grid */}
          <div className="relative z-10 grid items-center gap-12 px-6 py-16 md:px-12 lg:grid-cols-12 lg:gap-16 lg:px-20 lg:py-24">
            {/* Text side */}
            <div
              className="flex flex-col gap-8 lg:col-span-7"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm">
                   <Heart className="h-4 w-4 text-primary" fill="currentColor" />
                </div>
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary">
                  Comece Hoje
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl text-balance">
                Vamos fortalecer{" "}
                <span className="italic text-primary">famílias</span> juntos.
              </h2>

              <p className="max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                Estou pronta para caminhar consigo nesta jornada de
                transformação. Juntos, podemos construir lares mais fortes e
                famílias mais felizes.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <a
                  href="#contato"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  Agendar Conversa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/258XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Stats side */}
            <div
              className="flex flex-col gap-5 lg:col-span-5"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(30px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              }}
            >
              {[
                { number: "10+", label: "Anos de experiência" },
                { number: "500+", label: "Famílias orientadas" },
                { number: "100+", label: "Palestras realizadas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-md transition-colors hover:bg-white/10"
                >
                  <span className="font-serif text-4xl font-bold text-primary">
                    {stat.number}
                  </span>
                  <span className="text-sm font-medium tracking-wide text-white/90 uppercase">
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
