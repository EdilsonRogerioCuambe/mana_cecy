"use client"

import { Facebook, Instagram, Youtube } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  {
    label: "Instagram",
    value: "779K",
    subtext: "Seguidores",
    extra: "2.5K+ Posts",
    icon: Instagram,
    color: "from-[#f09433] via-[#e6683c] to-[#dc2743]",
    textColor: "text-[#e1306c]",
    href: "https://www.instagram.com/mana_dos_manos/",
  },
  {
    label: "Facebook",
    value: "1.7M",
    subtext: "Seguidores",
    extra: "Comunidade Ativa",
    icon: Facebook,
    color: "from-[#1877f2] to-[#1877f2]",
    textColor: "text-[#1877f2]",
    href: "https://www.facebook.com/inocencia.gaisse/",
  },
  {
    label: "YouTube",
    value: "32K",
    subtext: "Inscritos",
    extra: "9+ Vídeos",
    icon: Youtube,
    color: "from-[#FF0000] to-[#FF0000]",
    textColor: "text-[#FF0000]",
    href: "https://www.youtube.com/@manadosmanos",
  },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <a
              key={stat.label}
              href={stat.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${i * 100}ms`,
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    {stat.label}
                  </p>
                  <h3 className="text-4xl font-bold text-foreground sm:text-5xl">
                    {stat.value}
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-base font-medium text-foreground/80">
                      {stat.subtext}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="text-sm text-muted-foreground">
                      {stat.extra}
                    </span>
                  </div>
                </div>
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-sm transition-transform group-hover:scale-110`}
                >
                  <stat.icon className="h-7 w-7" />
                </div>
              </div>

              {/* Decorative gradient blur */}
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${stat.color} blur-[60px] opacity-10 transition-opacity group-hover:opacity-20`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
