"use client"

import {
  ArrowRight,
  Calendar,
  Heart,
  Mic,
  Shield,
  Sparkles,
  Users,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Heart,
    title: "Aconselhamento Familiar",
    description:
      "Sessoes personalizadas para fortalecer os lacos familiares, resolver conflitos e promover harmonia no lar.",
    image: "/images/service-counseling.jpg",
    tag: "Mais Procurado",
  },
  {
    icon: Mic,
    title: "Palestras e Workshops",
    description:
      "Apresentacoes dinamicas e interativas sobre familia, casamento, educacao de filhos e desenvolvimento pessoal.",
    image: "/images/service-workshop.jpg",
    tag: "Destaque",
  },
  {
    icon: Users,
    title: "Mentoria para Casais",
    description:
      "Acompanhamento dedicado para casais que desejam fortalecer a sua relacao e construir um futuro juntos.",
    image: "/images/service-couples.jpg",
    tag: "Casais",
  },
  {
    icon: Sparkles,
    title: "Coaching de Vida",
    description:
      "Orientacao profissional para ajudar a definir objectivos claros e alcancar o seu pleno potencial.",
    image: "/images/service-coaching.jpg",
    tag: "Crescimento",
  },
  {
    icon: Shield,
    title: "Consultoria para Mulheres",
    description:
      "Empoderamento feminino atraves de orientacao, apoio emocional e ferramentas praticas para o crescimento pessoal.",
    image: "/images/service-women.jpg",
    tag: "Mulheres",
  },
  {
    icon: Calendar,
    title: "Eventos Especiais",
    description:
      "Organizacao e participacao em conferencias, retiros e eventos focados no fortalecimento da familia.",
    image: "/images/service-events.jpg",
    tag: "Eventos",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-3xl transition-all duration-500 mb-5"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20,20%,10%)] via-[hsl(20,20%,10%)]/40 to-transparent" />
      </div>

      {/* Tag */}
      <div className="absolute top-5 left-5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide uppercase text-primary-foreground backdrop-blur-sm">
          {service.tag}
        </span>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 lg:p-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary-foreground backdrop-blur-sm transition-colors group-hover:bg-primary">
          <service.icon className="h-5 w-5" />
        </div>
        <h3 className="font-serif text-xl font-bold text-[hsl(30,33%,97%)] lg:text-2xl">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-[hsl(30,33%,85%)] line-clamp-2 lg:line-clamp-3">
          {service.description}
        </p>
        <a
          href="#contato"
          className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
        >
          Solicitar Servico
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-card py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              O Que Faco
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Os Meus Servicos
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Ofereco um conjunto de servicos desenhados para transformar vidas,
            fortalecer relacoes e edificar familias.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {services.map((service, index) => (
            <div key={service.title} className="break-inside-avoid">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        {/* Full-width parallax-like banner */}
        <div className="relative mt-16 overflow-hidden rounded-3xl">
          <div className="relative h-72 lg:h-80">
            <Image
              src="/images/service-counseling.jpg"
              alt="Transformando vidas e familias"
              fill
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20,20%,10%)]/90 via-[hsl(20,20%,10%)]/70 to-[hsl(20,20%,10%)]/40" />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="flex flex-col gap-5 px-8 lg:max-w-xl lg:px-14">
              <h3 className="font-serif text-3xl font-bold text-[hsl(30,33%,97%)] lg:text-4xl text-balance">
                Pronta para transformar a sua vida e familia?
              </h3>
              <p className="text-base leading-relaxed text-[hsl(30,33%,85%)]">
                Cada jornada comeca com um primeiro passo. Vamos caminhar juntos
                rumo a uma vida familiar mais forte e feliz.
              </p>
              <a
                href="#contato"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:gap-3 hover:brightness-110"
              >
                Agendar Consulta
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
