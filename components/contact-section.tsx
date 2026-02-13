"use client"

import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Send,
  ArrowRight,
  Clock,
  MessageCircle,
} from "lucide-react"
import { useState, useRef, useEffect } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setTimeout(() => {
      setIsSending(false)
      setIsSent(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setTimeout(() => setIsSent(false), 4000)
    }, 1500)
  }

  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@inocenciagaisse.com",
      href: "mailto:contato@inocenciagaisse.com",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+258 84 000 0000",
      href: "tel:+258840000000",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: MapPin,
      title: "Localizacao",
      value: "Maputo, Mocambique",
      href: "#",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Clock,
      title: "Horario",
      value: "Seg - Sex, 8h - 18h",
      href: "#",
      color: "bg-primary/10 text-primary",
    },
  ]

  return (
    <section ref={sectionRef} id="contato" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Contato
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Fale Comigo
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Estou aqui para ajudar. Entre em contato para agendar uma sessao,
            solicitar uma palestra ou simplesmente conversar.
          </p>
        </div>

        {/* Contact info cards row */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, i) => (
            <a
              key={card.title}
              href={card.href}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
              }}
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${card.color} transition-colors group-hover:bg-primary group-hover:text-primary-foreground`}>
                <card.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {card.title}
                </p>
                <p className="mt-0.5 truncate text-sm font-semibold text-foreground">
                  {card.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Main content grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Left side: visual + socials */}
          <div
            className="flex flex-col gap-6 lg:col-span-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
            }}
          >
            {/* Featured image card */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveGram.App_599397525_18545338651043485_97361349057261757_n-1tKAZ5BsTOsxPVk2dS9BHIIAdha3k5.jpg"
                  alt="Inocencia Gaisse"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20,20%,10%)]/80 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
                <p className="font-serif text-xl font-bold text-[hsl(30,33%,97%)]">
                  Vamos conversar?
                </p>
                <p className="text-sm text-[hsl(30,33%,85%)]">
                  Respondo todas as mensagens em ate 24 horas.
                </p>
              </div>
            </div>

            {/* Social links card */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                Redes Sociais
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-primary/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] text-[hsl(30,33%,97%)]">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Instagram</p>
                    <p className="text-xs text-muted-foreground">@inocenciagaisse</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-primary/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877f2] text-[hsl(30,33%,97%)]">
                    <Facebook className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Facebook</p>
                    <p className="text-xs text-muted-foreground">Mana dos Manos</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/258840000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-sm font-semibold text-[hsl(30,33%,97%)] transition-all hover:shadow-lg hover:brightness-105"
            >
              <MessageCircle className="h-5 w-5" />
              Conversar no WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right side: Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-8 lg:col-span-3 lg:p-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
            }}
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Envie uma Mensagem
              </h3>
              <p className="text-sm text-muted-foreground">
                Preencha o formulario abaixo e entrarei em contato consigo brevemente.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nome Completo <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="O seu nome"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="+258 84 000 0000"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Assunto <span className="text-primary">*</span>
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground transition-all focus:border-primary focus:outline-none"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="aconselhamento">Aconselhamento Familiar</option>
                  <option value="palestra">Pedido de Palestra</option>
                  <option value="mentoria">Mentoria para Casais</option>
                  <option value="coaching">Coaching de Vida</option>
                  <option value="parceria">Proposta de Parceria</option>
                  <option value="imprensa">Imprensa</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Mensagem <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="resize-none rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                placeholder="Escreva a sua mensagem aqui..."
              />
            </div>

            {/* Submit button with states */}
            <button
              type="submit"
              disabled={isSending}
              className="group mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:gap-3 hover:brightness-105 disabled:opacity-70"
            >
              {isSending ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                  Enviando...
                </>
              ) : isSent ? (
                <>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Mensagem Enviada
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Enviar Mensagem
                </>
              )}
            </button>

            <p className="text-center text-xs text-muted-foreground">
              Ao enviar, voce concorda com a nossa politica de privacidade.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
