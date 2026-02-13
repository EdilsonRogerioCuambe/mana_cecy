"use client"

import {
    ArrowRight,
    Clock,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
    Youtube,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

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
      title: "Localização",
      value: "Maputo, Moçambique",
      href: "#",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg - Sex, 8h - 18h",
      href: "#",
      color: "bg-primary/10 text-primary",
    },
  ]

  return (
    <section ref={sectionRef} id="contato" className="overflow-hidden py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Contato
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Fale Comigo
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Estou aqui para ajudar. Entre em contato para agendar uma sessão,
            solicitar uma palestra ou simplesmente conversar.
          </p>
        </div>

        {/* Contact info cards row */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {contactCards.map((card, i) => (
            <a
              key={card.title}
              href={card.href}
              className="group flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
              }}
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${card.color} transition-colors group-hover:bg-primary group-hover:text-primary-foreground`}>
                <card.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
                  {card.title}
                </p>
                <p className="mt-1 truncate text-sm font-semibold text-foreground sm:text-base">
                  {card.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Main content grid */}
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          {/* Left side: visual + socials */}
          <div
            className="flex flex-col gap-6 lg:col-span-5 lg:gap-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
            }}
          >
            {/* Featured image card */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveGram.App_599397525_18545338651043485_97361349057261757_n-1tKAZ5BsTOsxPVk2dS9BHIIAdha3k5.jpg"
                  alt="Inocência Gaisse"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20,20%,10%)] via-[hsl(20,20%,10%)]/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 sm:p-8">
                <p className="font-serif text-2xl font-bold text-white">
                  Vamos conversar?
                </p>
                <p className="text-white/80">
                  Respondo todas as mensagens em até 24 horas.
                </p>
              </div>
            </div>

            {/* Social links card */}
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Siga nas Redes
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/mana_dos_manos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-background p-4 transition-all hover:border-primary/20 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] text-white shadow-sm">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Instagram</p>
                    <p className="text-xs text-muted-foreground">@mana_dos_manos</p>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground/50 transition-all group-hover:translate-x-1 group-hover:text-primary" />
                </a>
                <a
                  href="https://www.facebook.com/inocencia.gaisse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-background p-4 transition-all hover:border-primary/20 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-sm">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Facebook</p>
                    <p className="text-xs text-muted-foreground">Inocência Gaisse</p>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground/50 transition-all group-hover:translate-x-1 group-hover:text-primary" />
                </a>
                <a
                  href="https://www.youtube.com/@manadosmanos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-background p-4 transition-all hover:border-primary/20 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-sm">
                    <Youtube className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">YouTube</p>
                    <p className="text-xs text-muted-foreground">Mana dos Manos</p>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground/50 transition-all group-hover:translate-x-1 group-hover:text-primary" />
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/258840000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/30"
            >
              <MessageCircle className="h-5 w-5" />
              Conversar no WhatsApp
            </a>
          </div>

          {/* Right side: Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-[2.5rem] border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-7 lg:p-12"
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
                Preencha o formulário abaixo e entrarei em contato consigo brevemente.
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
              Ao enviar, você concorda com a nossa política de privacidade.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
